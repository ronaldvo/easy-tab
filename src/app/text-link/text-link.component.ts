import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.css']
})
export class TextLinkComponent implements OnInit {
  @Input() url: string;
  @Input() target: string;
  @Input() name: string;

  constructor() { }

  ngOnInit(){
    this.url = (this.url.indexOf('://') === -1) ? 'http://' + this.url : this.url;
  }
}
