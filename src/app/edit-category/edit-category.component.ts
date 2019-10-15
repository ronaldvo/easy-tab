import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChromeStorageService } from '../chrome-storage.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  name = new FormControl('');

  constructor(private chrome: ChromeStorageService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

  add(){
    this.chrome.addCategory(this.name.value);
    this.bsModalRef.hide();
  }
}
