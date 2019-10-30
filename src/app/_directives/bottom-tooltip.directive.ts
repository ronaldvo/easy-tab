import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[appBottomTooltip]'
})
export class BottomTooltipDirective implements OnInit {

  @Input('appBottomTooltip') tooltip: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, 'tooltip', this.tooltip);
    this.renderer.setAttribute(this.element.nativeElement, 'placement', 'top');
  }
}
