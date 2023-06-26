package com.home.binding;

public class Book {
	private Integer bookId;
	private String bookname;
	private Double bookPrice;

	public Book() {
		// TODO Auto-generated constructor stub
	}

	public Book(Integer bookId, String bookname, Double bookPrice) {
		super();
		this.bookId = bookId;
		this.bookname = bookname;
		this.bookPrice = bookPrice;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

	public Double getBookPrice() {
		return bookPrice;
	}

	public void setBookPrice(Double bookPrice) {
		this.bookPrice = bookPrice;
	}

	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookName=" + bookname + ", bookPrice=" + bookPrice + "]";
	}
}
