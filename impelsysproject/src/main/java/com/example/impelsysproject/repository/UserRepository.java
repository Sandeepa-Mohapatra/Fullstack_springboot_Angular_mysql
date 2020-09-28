package com.example.impelsysproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.impelsysproject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>
{

}
