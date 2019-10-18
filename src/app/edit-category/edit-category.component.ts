import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChromeStorageService } from '../chrome-storage.service'; 
import { FormControl } from '@angular/forms';
import { Links } from '../links.model';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  title: string;
  index: number;
  name = new FormControl('');
  links: Links[];

  constructor(private chromeStorageService: ChromeStorageService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // editing if there is an index passed in, so replace value 
    this.chromeStorageService.linksObservable.subscribe(data => {
      this.links = data;
    });

    if (this.index >= 0) {
      this.name.setValue(this.links[this.index].category);
    }
  }

  save(){
    if (this.index >= 0) {
      this.chromeStorageService.updateCategory(this.name.value, this.index);
    } else {
      this.chromeStorageService.addCategory(this.name.value);
    }
    this.bsModalRef.hide();
  }

  delete() {
    this.chromeStorageService.deleteCategory(this.index);
    this.bsModalRef.hide();
  }
}
