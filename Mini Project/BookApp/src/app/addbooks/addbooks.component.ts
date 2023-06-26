import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  ngOnInit(): void { }

  msg: string | undefined;
  book: Book = new Book();

  constructor(private service: BookService) { }

  onSubmit(form:any) {
    this.book.bookId = form.bkId;
    this.book.bookname = form.bkname;
    this.book.bookPrice = form.bkPrice;
    console.log(this.book);
    this.addAllBooks();
  }

  addAllBooks() {
    this.service.createRecord(this.book).subscribe(data => {
      this.msg = data;
    });
  }
}
