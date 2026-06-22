package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Employee;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	
	//add derived method for searching 
	//you can perform search by firstname
	//lastname
	//department
	//designation
	 
	// search by firstname
	public List <Employee>findByFirstname(String firstname);
	
    // search by lastname
	public List <Employee>findByLastname(String lastname);
	
    // search by department
	public List <Employee>findByDepartment(String dept);
	
	   // search by designation
	public List <Employee>findByDesignation(String desig);
	
	

}