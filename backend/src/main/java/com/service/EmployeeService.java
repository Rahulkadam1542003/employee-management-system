package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service

public class EmployeeService {
	
	@Autowired
	EmployeeRepository eresp;
	//method to add single employee record
	
	public String addemp(Employee e)
	{
		 eresp.save(e);
		return "Employee record added successfully";
	}
	//method to findall employee record
	public List<Employee>findallemp()
	{
		return eresp.findAll();
	}
	//method to find employee by empid
	public Employee findbyempid(int empid)
	{
		return eresp.findById(empid).orElse(null);
	}
	//deleteb
	public String deletebyempid(int empid)
	{
		Employee existingemp=eresp.findById(empid) .orElse(null);
		if(existingemp==null)
		{
			return "No matching record found for given empid";
		}
		else
		{
			eresp.deleteById(empid);
			return"Employee record deleted successfully";
		}
	}
	//Update
	public String updateemp(int empid,Employee newemp)
	{
		Employee existingemp=eresp.findById(empid) .orElse(null);
		
			if(existingemp==null)
			{
				return "No matching record found for given empid";
			}
			if(newemp.getFirstname()==null
				&&newemp.getMiddlename()==null
				&&newemp.getLastname()==null
				&&newemp.getEmail()==null
				&&newemp.getContactno()==0
				&&newemp.getGender()==null
				&&newemp.getDob()==null
				&&newemp.getCaddress()==null
				&&newemp.getPaddress()==null
				&&newemp.getAdharno()==0
				&&newemp.getPanno()==null
				&&newemp.getEdu()==null
				&&newemp.getProfile()==null
				&&newemp.getExp()==0
				&&newemp.getSalary()==0.0
				&&newemp.getDesignation()==null
				&&newemp.getDepartment()==null
				&&newemp.getReportingmanager()==null
				&&newemp.getWorklocation()==null
				&&newemp.getStatus()==null
				&&newemp.getJoiningdate()==null
				)


			{
				return "No data found for updation";
			}
			if(newemp.getFirstname()!=null)
			{
				existingemp.setFirstname(newemp.getFirstname());
			}
			if(newemp.getMiddlename()!=null)
			{
				existingemp.setMiddlename(newemp.getMiddlename());
			}
			if(newemp.getLastname()!=null)
			{
				existingemp.setLastname(newemp.getLastname());
			}
			if(newemp.getEmail()!=null)
			{
				existingemp.setEmail(newemp.getEmail());
			}
			if(newemp.getContactno()!=0)
			{
				existingemp.setContactno(newemp.getContactno());
			}
			if(newemp.getGender()!=null)
			{
				existingemp.setGender(newemp.getGender());
			}
			if(newemp.getDob()!=null)
			{
				existingemp.setDob(newemp.getDob());
			}
			if(newemp.getCaddress()!=null)
			{
				existingemp.setCaddress(newemp.getCaddress());
			}
			if(newemp.getPaddress()!=null)
			{
				existingemp.setPaddress(newemp.getPaddress());
			}
			if(newemp.getEdu()!=null)
			{
				existingemp.setEdu(newemp.getEdu());
			}
			if(newemp.getProfile()!=null)
			{
				existingemp.setProfile(newemp.getProfile());
			}
			if(newemp.getExp()!=0)
			{
				existingemp.setExp(newemp.getExp());
			}
			if(newemp.getSalary()!=0)
			{
				existingemp.setSalary(newemp.getSalary());
			}
			if(newemp.getDesignation()!=null)
			{
				existingemp.setDesignation(newemp.getDesignation());
			}
			if(newemp.getDepartment()!=null)
			{
				existingemp.setDepartment(newemp.getDepartment());
			}
			if(newemp.getReportingmanager()!=null)
			{
				existingemp.setReportingmanager(newemp.getReportingmanager());
			}
			if(newemp.getWorklocation()!=null)
			{
				existingemp.setWorklocation(newemp.getWorklocation());
			}
			if(newemp.getStatus()!=null)
			{
				existingemp.setStatus(newemp.getStatus());
			}
			if(newemp.getJoiningdate()!=null)
			{
				existingemp.setJoiningdate(newemp.getJoiningdate());
			}
			
			eresp.save(existingemp);
			return "Employee record updated successfully";
		}	
	
			public List<Employee>findfirstname(String firstname)
			{
				return eresp.findByFirstname(firstname);
			}
			public List<Employee>findbylastname(String lastname)
			{
				return eresp.findByLastname(lastname);
			}
			public List<Employee>findbydept(String dept)
			{
				return eresp.findByDepartment(dept);
			}
			public List<Employee>findbydesig(String desig)
			{
				return eresp.findByDesignation(desig);
			}
		
			
			
			
			
			
			
			
			
		
				
	
	
	
	

	
	
	
	

}