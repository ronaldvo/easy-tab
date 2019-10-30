import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

/*
  Pass in parameters in 2 ways:
    [margin]="['bottom', 20]"
    margin="bottom, 20"
*/

@Directive({
  selector: '[appMargin]'
})
export class MarginDirective implements OnInit {

  @Input('appMargin') margin: [string, number] | string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (typeof this.margin === 'string') {
      const splitParams = this.margin.split(',');
      this.renderer.setStyle(this.element.nativeElement, ('margin-' + splitParams[0]), (splitParams[1] + 'px'));
    } else {
      this.renderer.setStyle(this.element.nativeElement, ('margin-' + this.margin[0]), (this.margin[1] + 'px'));
    }
  }

}
