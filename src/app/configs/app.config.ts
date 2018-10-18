import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    'books': 'books',
    'search-book': 'search-book',
    'add-book': 'add-book',
    'error404': '404'
  },
  endpoints: {
    books: '../data/books.json'
  }
};
