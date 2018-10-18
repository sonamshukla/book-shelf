import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isBackBtn: boolean;
  @Input() title: string;
  @Output() goBack = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onGoBack() {
    this.goBack.emit();
  }

}
