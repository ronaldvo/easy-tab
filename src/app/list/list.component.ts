import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ChromeStorageService } from '../chrome-storage.service';
import { Links } from '../links.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  links: Links[];
  modalRef: BsModalRef;
  subscription: Subscription;

  constructor(public chromeStorageService: ChromeStorageService, private modalService: BsModalService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.chromeStorageService.linksObservable.subscribe(data => {
      this.links = data;
    });

    this.chromeStorageService.get();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getData() {

  }

  deleteLink(idx, idx2) {
    this.chromeStorageService.deleteLink(idx, idx2);
  }

  openCategoryModal(idx?) {
    const initialState = {
      index: idx,
      title: idx >= 0 ? 'Edit' : 'Add'
    }
    this.modalRef = this.modalService.show(EditCategoryComponent, {initialState});
  }

  openLinkModal(idx, idx2?) {
    const initialState = {
      index: idx,
      index2: idx2,
      title: idx2 >= 0 ? 'Edit' : 'Add'
    }
    this.modalRef = this.modalService.show(EditLinkComponent, {initialState});
  }  
}
