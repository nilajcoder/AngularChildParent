import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent {

  updateMsg: string | undefined;
  book: Book = new Book();

  constructor(private service: BookService) { }

  updateBook(bk: any) {
    this.book.bookId = bk.bkId;
    this.book.bookname = bk.bkname;
    this.book.bookPrice = bk.bkPrice;
    console.log(this.book);
    this.service.updateRecord(this.book).subscribe(data => {
      this.updateMsg = data;
    });
  }
}
