import { Component, OnInit } from '@angular/core';
import { PaginationComponent} from "../pagination/pagination.component"
@Component({
  selector: 'app-extended-pagination',
  templateUrl: './extended-pagination.component.html',
  styleUrls: ['./extended-pagination.component.scss']
})
export class ExtendedPaginationComponent extends PaginationComponent implements OnInit {

  
  
  constructor() {
    super();
    this.pages.push(9)
  }
  

  ngOnInit() {
  }

}
