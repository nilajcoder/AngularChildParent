package com.home.services;

import java.util.List;
import com.home.binding.Book;

public interface BookServices {

	public List<Book> getBooksService();

	public Book getBookService(int bookId);

	public int addBookService(Book b);

	public void delBookService(int bookId);

}
