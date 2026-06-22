package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dto.UserDTO;
import com.entity.User;
import com.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	@Autowired
	UserService service;

	@PostMapping("/register")
	public String registeruser(@RequestBody User u) 
	{
		return service.register(u);
	}	

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDTO userdto) 
	{
		User existinguser = service.login(userdto);
		
					
		if(userdto.getUsername().equals("admin") && userdto.getPassword().equals("admin@123")) {
			
			User adminuser = new User();
			
			adminuser.setRole("admin");
			adminuser.setUsername("admin");
			
			return ResponseEntity.ok(adminuser);
			
		}
		
		else {

			if (existinguser != null) {
				return ResponseEntity.ok(existinguser);
			} 
			else 
			{
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Username or Password");
			}
		}
	}


}