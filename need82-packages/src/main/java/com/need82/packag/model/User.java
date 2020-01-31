package com.need82.packag.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 
 * The is model class for the User entity in the application. It contain fields
 * like firstname ,lastname ,username ,password ,role
 * 
 * @version 1.0
 * 
 * @author prateek
 * 
 */
@Entity
public class User {

	@Id
	@GeneratedValue
	private Long id;

	@Column
	private String firstname;

	@Column
	private String lastname;

	@Column(unique = true, nullable = false)
	private String username;

	@Column
	private String password;

	@Column
	private Role role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "ApplicationUser [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", username="
				+ username + ", password=" + password + ", role=" + role + "]";
	}

}
