import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[appTopTooltip]'
})
export class TopTooltipDirective implements OnInit {

  @Input('appTopTooltip') tooltip: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, 'tooltip', this.tooltip);
    this.renderer.setAttribute(this.element.nativeElement, 'placement', 'top');
  }
}
