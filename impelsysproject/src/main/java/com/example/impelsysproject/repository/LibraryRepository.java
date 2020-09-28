package com.example.impelsysproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.impelsysproject.model.Product;

@Repository

public interface LibraryRepository extends JpaRepository<Product,Integer>
{
	public Iterable<Product> deleteByBookname(String bookname);
	public Iterable<Product> findByBookname(String bookname);
}
