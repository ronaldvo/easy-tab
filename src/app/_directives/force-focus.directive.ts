import { Directive, ElementRef, Input, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appForceFocus]'
})
export class ForceFocusDirective implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const input: HTMLInputElement = this.element.nativeElement as HTMLInputElement;

    input.focus();
    input.select();
  }

  ngAfterViewInit(): void {

  }
}
