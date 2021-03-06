import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
/* import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';*/
import {AppConfig} from './configs/app.config';
import { BooksListComponent } from './books-list/books-list.component';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
  {path: AppConfig.routes.books, component: BooksListComponent},
  {path: AppConfig.routes['search-book'], component: BookSearchComponent},
  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
