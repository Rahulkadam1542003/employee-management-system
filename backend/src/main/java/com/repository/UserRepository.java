package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.User;

@Repository

public interface UserRepository extends JpaRepository<User,Integer>{

		//Derived method
		
		public User findByUsername(String username);
		public User findByEmpid(int empid);


	

}