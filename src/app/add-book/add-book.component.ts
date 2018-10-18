import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {BookService} from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  title: string;
  author: string;
  imgUrl: string;
  book: any = {};

  constructor(private route: Router, private bookService: BookService) { }

  ngOnInit() {
    this.imgUrl = '../../assets/image/Default_cover.jpg';
  }
  goToBookList() {
    this.route.navigate(['./books']);
  }
  addBook() {
    this.book.title = this.title;
    this.book.author = this.author;
    //As using default image
    this.book.imgUrl = this.imgUrl;
    this.book.isShelfListVisible = false;
    this.book.status = 'None';
    if (this.book.title && this.book.author && this.book.imgUrl) {
      this.bookService.addBook(this.book);
      this.goToBookList();
     } else {
      alert('Please enter the Title and Author !');
    }
  }

}
