import { Directive,ElementRef, Input, Renderer2, OnInit } from '@angular/core';

/*
  Pass in parameters in 2 ways:
    [margin]="['bottom', 20]"
    margin="bottom, 20"
*/

@Directive({
  selector: '[cursorPointer]'
})
export class CursorPointerDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer')
  }
 
}
 