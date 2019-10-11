import { Component, OnInit, ViewChild } from '@angular/core';
import { LinkCategory } from '../link-categories-class';
import { ListManageComponent } from '../list-manage/list-manage.component';
import { ChromeStorageService } from '../chrome-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories: Array<LinkCategory>;
  thing: any;

  constructor(private chrome: ChromeStorageService) {
    this.categories = [];
  }

  ngOnInit() {
    // this.getData();
    // console.log(this.categories)
    window['chrome'].storage.sync.get('links', result => {
      this.categories = result.links;
      console.log(this.categories);
    })
  }

  getData() {
    window['chrome'].storage.sync.get('links', result => {
      this.categories = result.links;
      console.log(this.categories);
    })
  }

  openDialog(): void {

  }
}
