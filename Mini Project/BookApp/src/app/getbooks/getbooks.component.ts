import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.css']
})
export class GetbooksComponent implements OnInit {
  books: Book[] = [];
  delmsg: string | undefined;

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.service.getAllRecords().subscribe(data => {
      this.books = data;
    });
  }

  delBook(id: number) {
    this.service.removeRecord(id).subscribe(data => {
      this.delmsg = data;
      this.getAllBooks();
    });
  }
}
