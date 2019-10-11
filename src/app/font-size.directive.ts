import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective implements OnInit {
  @Input('fontSize') size: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', (this.size + 'px'))
  }
}
