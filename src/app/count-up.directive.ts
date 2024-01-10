// count-up.directive.ts

import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit {
  @Input() targetValue: number = 0;
  private currentValue: number = 0;
  private duration: number = 5000; // 5 segundos por defecto

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.animateCountUp();
  }

  private animateCountUp() {
    const startTime = new Date().getTime();
    const updateInterval = 16; // Tiempo en milisegundos entre actualizaciones

    const updateValue = () => {
      const currentTime = new Date().getTime();
      const progress = Math.min(1, (currentTime - startTime) / this.duration);
      this.currentValue = Math.floor(progress * this.targetValue);

      // Actualiza el elemento con el nuevo valor
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.currentValue);

      if (progress < 1) {
        // Continúa la animación si no ha alcanzado el valor final
        setTimeout(updateValue, updateInterval);
      }
    };

    // Inicia la animación
    updateValue();
  }
}
