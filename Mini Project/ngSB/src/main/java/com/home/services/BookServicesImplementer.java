package com.home.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.home.binding.Book;

@Service
public class BookServicesImplementer implements BookServices {

	List<Book> books;

	// constructor
	public BookServicesImplementer() {
		books = new ArrayList<>();
		books.add(new Book(1, "Java", 450.0));
		books.add(new Book(2, "Python", 550.0));
		books.add(new Book(3, "Java", 650.0));
		books.add(new Book(4, "AWS", 750.0));
		books.add(new Book(5, "WebUI", 350.0));
	}

	// get all records
	@Override
	public List<Book> getBooksService() {
		return books;
	}

	// get single record
	@Override
	public Book getBookService(int bookId) {
		Book b = null;
		for (Book bk : books) {
			if (bk.getBookId() == bookId) {
				b = bk;
				break;
			}
		}
		return b;
	}

	// inserting/updating a record
	@Override
	public int addBookService(Book b) {
		int check = 0;
		for (Book bk : books) {
			if (bk.getBookId() == b.getBookId()) {
				++check;
				bk.setBookname(b.getBookname());
				bk.setBookPrice(b.getBookPrice());
				break;
			}
		}
		if(check != 0)
			return 1;
		else {
			this.books.add(b);
			return 2;
		}
	}

	// deleting a record
	@Override
	public void delBookService(int bookId) {
		int index = 0;
		for (Book bk : books) {
			if (bk.getBookId() == bookId) {
				books.remove(index);
				break;
			}
			index++;
		}
	}

}
