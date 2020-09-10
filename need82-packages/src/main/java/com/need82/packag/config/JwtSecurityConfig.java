package com.need82.packag.config;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.need82.packag.security.JwtAuthenticationEntryPoint;
import com.need82.packag.security.JwtAuthenticationProvider;
import com.need82.packag.security.JwtAuthenticationTokenFilter;
import com.need82.packag.security.JwtSuccessHandler;

/**
 * 
 * The class is used to configure the authorized access along different routes
 * in the application
 * 
 * It is the configuration bean of spring
 * 
 * @version 1.0
 * 
 * @author prateek
 * 
 */
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
@Configuration
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationProvider authenticationProvider;
	@Autowired
	private JwtAuthenticationEntryPoint entryPoint;

	@Bean
	public AuthenticationManager authenticationManager() {
		return new ProviderManager(Collections.singletonList(authenticationProvider));
	}

	/**
	 * The method is used for providing the custom JWT Authentication Filter Which
	 * We are using for the JWT token authorization Output custom
	 * JWTAuthenticationFilter
	 * 
	 * @version 1.0
	 * @author prateek
	 */
	@Bean
	public JwtAuthenticationTokenFilter authenticationTokenFilter() {
		JwtAuthenticationTokenFilter filter = new JwtAuthenticationTokenFilter();
		filter.setAuthenticationManager(authenticationManager());
		filter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
		return filter;
	}

	/**
	 * The method is used for enabling firewall for CORS request from spring
	 * security
	 * 
	 * @version 1.0
	 * @author prateek
	 */
	@Bean
	public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
		StrictHttpFirewall fireWall = new StrictHttpFirewall();
		fireWall.setAllowUrlEncodedSlash(true);
		return fireWall;
	}

	/**
	 * The method is used for allowing CORS request
	 * 
	 * @version 1.0
	 * @author prateek
	 */
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		// String link = String.format("%s://%s:%s", this.frontEndScheme,
		// this.frontEndBaseUrl, this.frontEndPort);
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**").allowedMethods("*").allowedOrigins("*");
				registry.addMapping("/**").allowedMethods("*").allowedOrigins("*");
			}
		};
	}

	/**
	 * The method is used for configuring authorization at different routes Output
	 * nothing ,just configuration
	 * 
	 * @version 1.0
	 * @author prateek
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().csrf().disable().authorizeRequests().antMatchers("**/user/**").permitAll()
				.antMatchers(HttpMethod.OPTIONS, "**/api/**").permitAll().antMatchers(HttpMethod.GET, "**/api/**")
				.authenticated().antMatchers(HttpMethod.POST, "**/api/**").authenticated()
				.antMatchers(HttpMethod.PUT, "**/api/**").authenticated().antMatchers(HttpMethod.DELETE, "**/api/**")
				.authenticated().and().exceptionHandling().authenticationEntryPoint(entryPoint).and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
		http.headers().cacheControl();

	}

}