import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes: Array<Object>
  count: number = 5

  constructor( private router: Router) { 
    
  }



  ngOnInit() {
    
    this.routes = this.router.config;
  }

}
