import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookShelves = ['Currently Reading', 'Want to Read', 'Read', 'None'];
  books: Book[] = [];
  currentlyReadingBooks = [];
  readBooks: Book[] = [];
  wantedToBooks: Book[] = [];
  newBooks: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookes().subscribe((books: Array<Book>) => {
      console.log( 'Hi' +  books);
      this.books = books;
      this.seprateBooksByShelves(books);
    });
    this.bookService.change.subscribe(books => {
      this.books = books;
      this.seprateBooksByShelves(books);
    })
  }
  seprateBooksByShelves(books) {
    this.currentlyReadingBooks = [];
    this.readBooks = [];
    this.wantedToBooks = [];
    this.newBooks = [];
    for (let i = 0; i < books.length; i++) {
      if ( books[i].status.toLowerCase() === 'currently reading') {
        this.currentlyReadingBooks.push(books[i]);
      } else if ( books[i].status.toLowerCase() === 'want to read') {
        this.readBooks.push(books[i]);
      } else if ( books[i].status.toLowerCase() === 'read') {
        this.wantedToBooks.push(books[i]);
      } else {
        this.newBooks.push(books[i]);
      }
    }
  }

}
