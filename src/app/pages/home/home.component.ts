import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any[] = [
    {
      image: 'bg-1.jpeg',
      title: 'Tecnología para Propiedad Horizontal',
      description: 'Que hace realidad la transformación digital del sector'
    },
    {
      image: 'bg-2.jpeg',
      title: 'Soluciones Innovadoras',
      description: 'Con procesos automáticos que generan valor a la propiedad horizontal'
    },
    {
      image: 'bg-3.jpeg',
      title: 'Generamos confianza',
      description: 'Con información exacta y en tiempo real'
    },
    {
      image: 'bg-4.jpeg',
      title: 'Creamos valor',
      description: 'Integrando soluciones que optimizan procesos'
    }
  ];
  currentSlideIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.changeSlide();
    }, 10000);
  }

  changeSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
}
