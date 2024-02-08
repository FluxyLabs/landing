import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUrl = '';
  public isLightBackground = false;
  public showMobileMenu = false;
  public showServicesMenu: boolean = false;
  public scrollOffset:number = 0;
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.currentUrl = this.router.url.toString();
    });
  }
  


  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    // Define la cantidad de píxeles que el usuario debe hacer scroll antes de cambiar el fondo
    if (window.innerWidth  > 700) {
       this.scrollOffset = 100;
    }
    // Verifica la posición actual del scroll
    if (window.scrollY > this.scrollOffset) {
      // Cambia el fondo cuando el usuario ha hecho scroll más allá del umbral definido
      this.isLightBackground = true;
      this.currentUrl = '/home'
      this.renderer.addClass(this.el.nativeElement, 'scrolling');

    } else {
      // Restaura el fondo original si el usuario ha hecho scroll hacia arriba
      this.renderer.addClass(this.el.nativeElement, 'scrolling');
      this.isLightBackground = false;
      this.currentUrl = this.router.url.toString();
    };
  };
  toggleMobileMenu() {
    this.showMobileMenu =!this.showMobileMenu;
  };
  closeServiceMenu(event:string){
    if (event === 'closeService') {
      this.showServicesMenu = false;
    }
  }
}
