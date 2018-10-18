import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {Injectable, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../model/book.model';
import {AppConfig} from '../configs/app.config';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl: string;
  books: any;

  constructor(private http: HttpClient) {
    this.booksUrl = AppConfig.endpoints.books;
    this.getBookes().subscribe((books: Array<Book>) => {
      this.books = books;
    })
  }
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  getBookes(): Observable<Book[]> {
    return this.http.get<Book[]>('../../../src/app/data/books.json');
  }
  toggle(bookId, category) {
    var that = this;
    this.books.forEach((book, ind) => {
      if(book.id === bookId) {
        that.books[ind].status = category.toLowerCase();
      }
    });
    this.change.emit(this.books);
  }
  addBook(book){
    this.books.push(book);
    this.change.emit(this.books);
  }
 /* createBook(hero: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, JSON.stringify({
      name: hero.name,
      alterEgo: hero.alterEgo
    }), httpOptions).pipe(
      tap((heroSaved: Book) => {
        LoggerService.log(`added hero w/ id=${heroSaved.id}`);
        this.showSnackBar('heroCreated');
      }),
      catchError(BookService.handleError<Book>('addBook'))
    );
  } */

}
