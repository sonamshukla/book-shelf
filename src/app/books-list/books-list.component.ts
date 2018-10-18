import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

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
  wantToBooks: Book[] = [];
  newBooks: Book[] = [];
  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit() {
    let booksFromLocal = JSON.parse(localStorage.getItem("books"));
    this.initBookData(booksFromLocal);
    this.bookService.change.subscribe(books => {
      this.books = books;
      localStorage.setItem("books", JSON.stringify(this.books));
      this.seprateBooksByShelves(books);
    })
  }
  initBookData(booksFromLocal){
    if(booksFromLocal && booksFromLocal.length){
      this.books = booksFromLocal;
      this.seprateBooksByShelves(this.books);
    }else{
      this.bookService.getBookes().subscribe((books: Array<Book>) => {
        this.books = books;
        this.seprateBooksByShelves(books);
      });
    }

  }
  goToAddBookPage(){
    this.route.navigate(['./add-book']);
  }
  seprateBooksByShelves(books) {
    this.currentlyReadingBooks = [];
    this.readBooks = [];
    this.wantToBooks = [];
    this.newBooks = [];
    for (let i = 0; i < books.length; i++) {
      if ( books[i].status.toLowerCase() === 'currently reading') {
        this.currentlyReadingBooks.push(books[i]);
      } else if ( books[i].status.toLowerCase() === 'want to read') {
        this.wantToBooks.push(books[i]);
      } else if ( books[i].status.toLowerCase() === 'read') {
        this.readBooks.push(books[i]);
      } else {
        this.newBooks.push(books[i]);
      }
    }
  }

}
