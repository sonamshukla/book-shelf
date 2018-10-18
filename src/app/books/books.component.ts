import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../model/book.model';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
book: any;
@Input() books: Book[];
@Input() searchText: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log('searchText: ' + this.searchText);
  }
  closeAllList() {
    this.books.forEach(book => {
      book.isShelfListVisible = false;
    });
  }
  changeListVisibility(book) {
    this.closeAllList();
    book.isShelfListVisible = true;
    this.book = book;
    console.log(book);
  }
  onSelectCategory(category) {
    this.book.isShelfListVisible = false;
    this.bookService.toggle(this.book.id, category);
    console.log(this.books);
  }

}
