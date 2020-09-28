package com.example.impelsysproject.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.impelsysproject.model.Product;
import com.example.impelsysproject.model.User;
import com.example.impelsysproject.service.UserService;

@RestController
public class UserRestController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/add-user")
	@Transactional
	@CrossOrigin
	public String registerBook(@RequestBody User user)
	{
		service.saveUser(user);
		return user.getUsername()+" is registered successfully";
	}
	@GetMapping("/all-users")
	@CrossOrigin
	public Iterable<User> showAllBooks()
	{
		return service.showAllUsers();
	}

}
