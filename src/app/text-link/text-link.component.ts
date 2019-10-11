import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.css']
})
export class TextLinkComponent {
  @Input() url: string;
  @Input() target: string;
  @Input() name: string;

  constructor() { }

}
