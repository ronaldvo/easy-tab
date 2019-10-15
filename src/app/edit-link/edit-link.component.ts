import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChromeStorageService } from '../chrome-storage.service';
import { FormControl } from '@angular/forms';
import { Link } from '../link.interface';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {

  url = new FormControl('');
  name = new FormControl('');
  icon: string;

  newLink: Link;
  index: number;

  constructor(private chrome: ChromeStorageService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  add(){
    this.newLink = {
      url: this.url.value,
      name: this.name.value,
      icon: ''
    }

    this.chrome.addLink(this.newLink, this.index);
    this.bsModalRef.hide();
  }

}
