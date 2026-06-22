package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin

public class EmployeeController {
	
	 @Autowired
	    EmployeeService service;
	 	
	 	//add Single record
	    @PostMapping("/addemp")
	    public String addemp(@RequestBody Employee e)
	    {
	        return service.addemp(e);
	    }
	    
	    //findall emp
	    @GetMapping("/findallemp")
		public List<Employee>findallemp()
	    {
			return service.findallemp();
	    }
	    //find employee by id
	    @GetMapping("/findbyempid")
		public Employee findbyempid(@RequestParam int empid)
	    {
			return service.findbyempid(empid);
		}
	    

	    //delete by id
	    @DeleteMapping("/deleteempbyid")
	    public String deleteempbyid(@RequestParam int empid)
	    {
	        return service.deletebyempid(empid);
	    }
	    //update
	    @PutMapping("/updatebyid")
	    public String updatebyid(@RequestParam int empid, @RequestBody Employee newemp)
	    {
	        return service.updateemp(empid, newemp);
	    }
	    
	    @GetMapping("/findByFirstname")
	    public List<Employee>findByFirstname(@RequestParam String firstname)
	    {
	    	return service.findfirstname(firstname);
	    }
	    
	    @GetMapping("/findByLastname")
	    public List<Employee>findByLastname(@RequestParam String lastname)
	    {
	    	return service.findbylastname(lastname);
	    }
	    
	    @GetMapping("/findByDepartment")
		public List<Employee>findByDepartment(@RequestParam String department)
		{
			return service.findbydept(department);
		}
		
		@GetMapping("/findByDesignation")
		public List<Employee>findByDesignation(@RequestParam String designation)
		{
			return service.findbydesig(designation);
		}

	    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}