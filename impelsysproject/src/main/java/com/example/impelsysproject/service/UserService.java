package com.example.impelsysproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.impelsysproject.model.Product;
import com.example.impelsysproject.model.User;
import com.example.impelsysproject.repository.LibraryRepository;
import com.example.impelsysproject.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	private UserRepository repo;
	
	public UserService()
	{
		
	}
	public UserService(UserRepository repo) {
		super();
		this.repo = repo;
	}
	public void saveUser(User user)
	{
		repo.save(user);
	}
	public Iterable<User> showAllUsers()
	{
		return repo.findAll();
	}

}
