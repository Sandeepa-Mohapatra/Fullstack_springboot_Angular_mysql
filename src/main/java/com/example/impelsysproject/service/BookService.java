package com.example.impelsysproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.impelsysproject.model.Product;
import com.example.impelsysproject.repository.LibraryRepository;

@Service
public class BookService {
	
	@Autowired
	private LibraryRepository repo;
	public BookService()
	{
		
	}
	public BookService(LibraryRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void saveBook(Product product)
	{
		repo.save(product);
	}
	
	public Iterable<Product> showAllUsers()
	{
		return repo.findAll();
	}
	public Iterable<Product> deleteUserByBookname(@PathVariable String bookname)
	{
		repo.deleteByBookname(bookname);
		 return repo.findAll();
	}
	public Product get(Integer id){
        return repo.findById(id).get();
    }
	public Iterable<Product> findByBookname(@PathVariable String bookname)
	{
		
		 return repo.findByBookname(bookname);
	}
	public Product updateProduct(Product product)
    {
        Product existingProduct = repo.findById(product.getId()).orElse(null);
        existingProduct.setBookname(product.getBookname());
        existingProduct.setAuthorname(product.getAuthorname());
        existingProduct.setPrice(product.getPrice());
        return repo.save(existingProduct);
    }

}
