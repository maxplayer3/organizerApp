import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pages: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8]
  currentPage: number = 1;

  constructor() { }

  nextPage() {
    this.currentPage++
  }

  prevPage() {
    this.currentPage--
  }

  selectPage(page: number) {
    this.currentPage = page;
  }

  ngOnInit() {
  }

}
