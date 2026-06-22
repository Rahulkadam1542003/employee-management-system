package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dto.UserDTO;
import com.entity.User;
import com.repository.UserRepository;

@Service

public class UserService {

	private final EmployeeService employeeService;
	@Autowired
	UserRepository uresp;

	UserService(EmployeeService employeeService) 
	{
		this.employeeService = employeeService;
	}
@Autowired
PasswordEncoder encoder;

	public String register(User u) 
	{
		User existinguser = uresp.findByUsername(u.getUsername());
		
		User empiduser=uresp.findByEmpid(u.getEmpid());
		if(empiduser!=null) 
		{
			return "You already register with this empid...please go for login";
		}
		else
		if (existinguser == null) 
		{
			//code to convert password in unreadable format
		String encrptpassword=encoder.encode(u.getPassword());
		u.setPassword(encrptpassword);
		String cpass=encoder.encode(u.getConfirmpassword());
		u.setConfirmpassword(cpass);
			uresp.save(u);
			return "Registration sucessfully";
		} 
		else 
		{
			return "This username is already exists." + " Please use another one";
		}
	}

	// method for login
	public User login(UserDTO userdto) 
	{
		User existinguser = uresp.findByUsername(userdto.getUsername());
		if (existinguser == null) 
		{
			return null;
		} 
		else 
		{
			if (encoder.matches(userdto.getPassword(),existinguser.getPassword())) 
			{
				return existinguser;
			} 
			else 
			{
				return null;
			}
		}
	}
	

}