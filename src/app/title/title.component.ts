import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  title: String

  @Output() change = new EventEmitter()

  constructor() { }

  sendToParent(val) {
    this.title = val
    this.change.emit(this.title);
  }

  ngOnInit() {
  }

}

