import { Directive,ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[margin]'
})
export class MarginDirective {

  @Input('margin') margin: [string,number];

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, ('margin-' + this.margin[0]), (this.margin[1] + 'px'))
  }
 
}
