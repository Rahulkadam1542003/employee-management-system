package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
@Bean
public SecurityFilterChain createObject(HttpSecurity http)throws Exception{
	http
	.csrf(csrf->csrf.disable())
	.authorizeHttpRequests(auth->auth
	.requestMatchers("/login","/register").permitAll()
	.requestMatchers("/addemp","/deleteempbyid","/updatebyid").permitAll()
	.requestMatchers("/findByDesignation","/findByDepartment","/findByLastname","/findByFirstname","/findallemp","/findbyempid").permitAll()
	.anyRequest().authenticated()
	
			)
	.formLogin(form->form.loginPage("/registeruser"));
	return http.build();
}
@Bean
public PasswordEncoder createobject() {
	BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
	return encoder;
}
}
