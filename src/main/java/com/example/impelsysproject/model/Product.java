package com.example.impelsysproject.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	 @Id
	 private int id;
	 private String bookname;
	 private String authorname;
	 private int price;
	 
	 public Product()
	 {
		 
	 }
    public Product(int id, String bookname, String authorname, int price) {
		super();
		this.id = id;
		this.bookname = bookname;
		this.authorname = authorname;
		this.price = price;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getBookname() {
		return bookname;
	}


	public void setBookname(String bookname) {
		this.bookname = bookname;
	}


	public String getAuthorname() {
		return authorname;
	}


	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	
}