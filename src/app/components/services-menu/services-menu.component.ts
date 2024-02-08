import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls: ['./services-menu.component.scss']
})
export class ServicesMenuComponent {
  @Output() close = new EventEmitter<string>();
  
  

  constructor(private router:Router){}
  closeMobileMenu(route:string){
    this.close.emit("closeMenu");
    this.router.navigateByUrl(route)
   
  };
}
