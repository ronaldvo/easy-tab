import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

/*
    <div [fontSize]="24">
*/

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnInit {
  @Input('appFontSize') size: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', (this.size + 'px'));
  }
}
