import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books-list/books-list.component';
import {AppRoutingModule } from './app-routing.module';
import { BookService } from './services/book.service';
import { AddBookComponent } from './add-book/add-book.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SearchPipe } from './pipes/search.pipe';
import { ShelfListComponent } from './shared/component/shelf-list/shelf-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    AddBookComponent,
    HeaderComponent,
    BookSearchComponent,
    SearchPipe,
    ShelfListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
