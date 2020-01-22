package com.need82.packag.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.need82.packag.model.User;
import com.need82.packag.security.JwtGenerator;
import com.need82.packag.serviceImpl.UserServiceImpl;

/**

* The class is having the rest services for register and login functionality of the user .
* 
* If the credentials are correct it returns the jwt token to the logged in user

* @version 1.0

* @author prateek

*/
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	private JwtGenerator jwtGenerator;

	private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

	public UserController(JwtGenerator jwtGenerator) {
		this.jwtGenerator = jwtGenerator;
	}

	/** 
	* The method is used for registering a new user object
	* Takes a user object and output 201 for success and 500 for error
	* @version 1.0
	* @author prateek
	*/
	@PostMapping("/register")
	public Map<String, String> register(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		HashMap<String, String> response = new HashMap<>();
		response.put("response", userService.save(user).toString());
		return response;
	}

	/** 
	* The method is used for verifying credentials of the user
	* Takes a username and password and output jwt token of the user logged in 
	* @version 1.0
	* @author prateek
	*/
	@PostMapping("/login")
	public Map<String, String> generate(@RequestBody final User jwtUser) {
		HashMap<String, String> response = new HashMap<>();
		response =jwtGenerator.generate(jwtUser) ;
		return response;
	}

}
