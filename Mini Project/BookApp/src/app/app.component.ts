import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookApp';

  book: Book | undefined;
  check:number = 0;

  constructor(private service: BookService) { }

  findBook(form: any) {
    this.book = new Book();
    ++this.check;
    this.book.bookId = form.bId;
    this.service.findRecord(this.book.bookId).subscribe(data => {
      this.book = data;
      console.log(this.book);
    });
  }
}
