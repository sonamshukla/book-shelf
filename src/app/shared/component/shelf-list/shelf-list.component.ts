import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {
  @Input() isListVisible: boolean;
  @Output() selectCategory = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('isListVisible' + this.isListVisible);
  }
  valueChanged(category) {
    this.selectCategory.emit(category);
  }
}
