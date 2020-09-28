package com.example.impelsysproject.controller;

import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.impelsysproject.model.Product;
import com.example.impelsysproject.service.BookService;

@RestController
public class LibraryRestController {
	@Autowired
	private BookService service;
	
	@PostMapping("/add-book")
	@Transactional
	@CrossOrigin
	public String registerBook(@RequestBody Product product)
	{
		service.saveBook(product);
		return product.getBookname()+" is added to the library successfully";
	}
	@GetMapping("/all-book")
	@CrossOrigin
	public Iterable<Product> showAllBooks()
	{
		return service.showAllUsers();
	}
	@GetMapping("/delete/{bookname}")
	@Transactional
	@CrossOrigin
	public Iterable<Product> deleteBookByFirstname(@PathVariable String bookname)
	{
		return service.deleteUserByBookname(bookname);
		 
	}
	@GetMapping("/books/{bookid}")
    public ResponseEntity<Product> get(@PathVariable Integer bookid){
        try {
            Product product = service.get(bookid);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
    }
	@GetMapping("/bookname/{bookname}")
	@CrossOrigin
    public Iterable<Product> getByBookname(@PathVariable String bookname){
        
        	return  service.findByBookname(bookname);
        
    }
	
	@PutMapping("/update")
	@Transactional
	@CrossOrigin
    public Product updateProduct(@RequestBody Product product) {
        return service.updateProduct(product);
    }

}
