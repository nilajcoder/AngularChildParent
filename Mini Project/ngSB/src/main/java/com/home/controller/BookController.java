package com.home.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.home.binding.Book;
import com.home.services.BookServices;
import com.home.services.BookServicesImplementer;

@RestController
@CrossOrigin
public class BookController {

	private BookServices services;

	public BookController() {
		services = new BookServicesImplementer();
	}

	// get all records
	@GetMapping("/getbooks")
	public List<Book> getBooks() {
		return this.services.getBooksService();
	}

	// get single record
	@GetMapping("/getbooks/{bookId}")
	public Book getBook(@PathVariable String bookId) {
		return this.services.getBookService(Integer.parseInt(bookId));
	}

	// inserting/updating a record
	@PostMapping("/postbooks")
	public String addBook(@RequestBody Book book) {
		System.out.println(book);
		int result = this.services.addBookService(book);
		if(result == 1)
			return "Book updated successfully...";
		else
			return "Book added successfully...";
	}

	// deleting a record
	@DeleteMapping("/delbooks/{bookId}")
	public String deleteBook(@PathVariable String bookId) {
		this.services.delBookService(Integer.parseInt(bookId));
		System.out.println(bookId);
		return "Book deleted successfully...";
	}
}
