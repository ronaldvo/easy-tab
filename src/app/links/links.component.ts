import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ChromeStorageService } from '../chrome-storage.service';
import { Links } from '../links.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { Subscription } from 'rxjs';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';



@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 300}),
    fadeInUpOnEnterAnimation()
  ]
})
export class LinksComponent implements OnInit, OnDestroy {
  links: Links[];
  modalRef: BsModalRef;
  subscription: Subscription;

  constructor(
    private chromeStorageService: ChromeStorageService, 
    private modalService: BsModalService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.chromeStorageService.linksObservable.subscribe(data => {
      this.links = data;
    });

    this.chromeStorageService.get();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
