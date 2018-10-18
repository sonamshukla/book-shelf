import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {
  @Input() selectedBook: any;
  @Output() selectCategory = new EventEmitter();
  selected:string;
  category = [
    'Want to Read',
    'Read',
    'Currently reading',
    'None'
  ];
  constructor() { }

  ngOnInit() {
    this.selected = this.selectedBook.status;
    console.log(this.selectedBook)
  }
  valueChanged(category) {
    this.selected = category;
    this.selectCategory.emit(category);
  }
  checkSelected(cat){
    if(this.selected.toLowerCase() === cat.toLowerCase())
    return true;
    return false;
  }
}
