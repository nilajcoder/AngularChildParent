import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private restURl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  createRecord(book: Book): Observable<string> {
    return this.httpClient.post(`${this.restURl}/postbooks`, book, { responseType: "text" });
  }

  getAllRecords(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.restURl}/getbooks`);
  }

  findRecord(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.restURl}/getbooks/${id}`);
  }

  removeRecord(id: number): Observable<string> {
    return this.httpClient.delete(`${this.restURl}/delbooks/${id}`, { responseType: "text" });
  }

  updateRecord(book: Book): Observable<string> {
    return this.httpClient.post(`${this.restURl}/postbooks`, book, { responseType: 'text' });
  }
}
