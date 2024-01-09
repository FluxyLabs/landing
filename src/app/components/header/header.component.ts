import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUrl = '';
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.currentUrl = this.router.url.toString();
      if (event instanceof NavigationEnd) {
       console.log(this.currentUrl);
      }
    });
  }
  

  constructor(private router: Router) { }



}
