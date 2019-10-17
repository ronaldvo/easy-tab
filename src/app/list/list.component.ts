import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ChromeStorageService } from '../chrome-storage.service';
import { ChromeHistoryService } from '../chrome-history.service';
import { Links } from '../links.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewChecked {
  links: Links[];
  modalRef: BsModalRef;
  subscription: Subscription;

  constructor(private chromeStorageService: ChromeStorageService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    console.log('unsubbing!')
    //this.subscription.unsubscribe();
  }

  ngAfterViewChecked() {
    // console.log('viewinit!')
    // this.chRef.detectChanges();
  }

  getData() {
    this.chromeStorageService.get().subscribe(data => {
     this.links = data;
    })
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
