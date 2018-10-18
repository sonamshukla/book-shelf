import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from '../services/book.service';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookes().subscribe((books: Array<Book>) => {
      this.books = books;
    });
  }

}
