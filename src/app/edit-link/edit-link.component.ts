import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChromeStorageService } from '../chrome-storage.service';
import { FormControl } from '@angular/forms';
import { Link } from '../link.interface';
import { ChromeHistoryService } from '../chrome-history.service';

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
  index2: number;
  title: string;
  history: [];

  constructor(private chromeStorageService: ChromeStorageService, private chromeHistoryService: ChromeHistoryService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // editing if there is an index passed in
    if (this.index2 >= 0) {
      this.name.setValue(this.chromeStorageService.links[this.index].links[this.index2].name);
      this.url.setValue(this.chromeStorageService.links[this.index].links[this.index2].url);
    }

    this.getHistory();
  }

  save(){
    if (this.index2 >= 0) {
      this.newLink = {
        url: this.url.value,
        name: this.name.value
      }
      this.chromeStorageService.updateLink(this.newLink, this.index, this.index2);
    } else {
      this.newLink = {
        url: this.url.value,
        name: this.name.value
      }
      this.chromeStorageService.addLink(this.newLink, this.index);
    }

    this.bsModalRef.hide();
  }

  getHistory() {
    this.chromeHistoryService.get().subscribe(data => {
      this.history = data;
      console.log(this.history);
    })
  }
}
