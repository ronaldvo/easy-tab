import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  search() {
    window.open('http://www.google.com/search?q=' + this.query.value, '_blank');
  }

}
