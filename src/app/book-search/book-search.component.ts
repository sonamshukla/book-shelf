import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from '../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit() {
    let booksFromLocal = JSON.parse(localStorage.getItem('books'));
    this.initBookData(booksFromLocal);
    this.bookService.change.subscribe(books => {
      this.books = books;
      localStorage.setItem('books', JSON.stringify(this.books));
    });
  }
  goToBookList() {
    this.route.navigate(['./books']);
  }
  initBookData(booksFromLocal) {
    if (booksFromLocal && booksFromLocal.length) {
      this.books = booksFromLocal;
    } else {
      this.bookService.getBookes().subscribe((books: Array<Book>) => {
        this.books = books;
      });
    }
  }

}
