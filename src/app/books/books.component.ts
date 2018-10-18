import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
book: any;
@Input() books: Book[];
@Input() searchText: string;
@Output() changeStatus = new EventEmitter();
  constructor() { }

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
  changeStatus1() {
    this.changeStatus.emit(this.books);
  }
  onSelectCategory(category) {
    this.book.isShelfListVisible = false;
    console.log(this.books);
    this.changeStatus1();
  }

}
