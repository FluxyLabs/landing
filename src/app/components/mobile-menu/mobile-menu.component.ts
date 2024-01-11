import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Output() close = new EventEmitter<string>();
  public show:boolean = true;
  closeMobileMenu(){
    this.show = false;
    setTimeout(() => {
      this.close.emit("closeMobile");
    }, 600);
  };
}
