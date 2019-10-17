import { Directive,ElementRef, Input, Renderer2, OnInit } from '@angular/core';

/*
  Pass in parameters in 2 ways:
    [margin]="['bottom', 20]"
    margin="bottom, 20"
*/

@Directive({
  selector: '[color]'
})
export class ColorDirective {

  @Input('color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color)
  }
 
}
 