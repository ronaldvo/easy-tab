import { Component, OnInit, ViewChild } from '@angular/core';
import { ChromeStorageService } from '../chrome-storage.service';
import { Links } from '../links.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditLinkComponent } from '../edit-link/edit-link.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  links: Links[];
  modalRef: BsModalRef;

  constructor(private chrome: ChromeStorageService, private modalService: BsModalService) {

   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.links = this.chrome.get() || [];
  }

  openCategoryModal() {
    this.modalRef = this.modalService.show(EditCategoryComponent);
  }

  openLinkModal(idx) {
    const initialState = {
      index: idx
    }
    this.modalRef = this.modalService.show(EditLinkComponent, {initialState});
  }  
}
