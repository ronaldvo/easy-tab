import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fav-icon',
  templateUrl: './fav-icon.component.html',
  styleUrls: ['./fav-icon.component.css']
})
export class FavIconComponent implements OnInit {

  @Input() url: string;
  @Input() size: number;
  src: string;
  error: boolean

  constructor() { 
    this.error = false;
  }

  ngOnInit() {
    this.src = '//logo.clearbit.com/' + this.url;
  }

  useAlternative() {
    this.src = 'https://www.google.com/s2/favicons?domain=' + this.url
  }

}
