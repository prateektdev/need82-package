package com.need82.packag.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.need82.packag.model.JwtAuthenticationToken;
import com.need82.packag.model.JwtUser;
import com.need82.packag.model.JwtUserDetails;

/**
 * 
 * The is the Authentication provider . Here We define the logic to validate the
 * token received in the request headers
 * 
 * @version 1.0
 * 
 * @author prateek
 * 
 */

@Component
public class JwtAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

	@Autowired
	private JwtValidator validator;

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {

	}

	/**
	 * The method is used for retrieving the user object from the token It takes
	 * username and Authentication object and return Spring Security UserDetails
	 * object from it
	 * 
	 * @version 1.0
	 * @author prateek
	 */
	@Override
	protected UserDetails retrieveUser(String username,
			UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {
		JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) usernamePasswordAuthenticationToken;
		String token = jwtAuthenticationToken.getToken();
		JwtUser jwtUser = validator.validate(token);

		if (jwtUser == null) {
			throw new RuntimeException("JWT Token is incorrect");
		}
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList(jwtUser.getRole());
		System.out.println("grantedAuthorities : " + grantedAuthorities);

		return new JwtUserDetails(jwtUser.getUserName(), jwtUser.getId(), token, grantedAuthorities);
	}

	@Override
	public boolean supports(Class<?> aClass) {
		return (JwtAuthenticationToken.class.isAssignableFrom(aClass));
	}
}
