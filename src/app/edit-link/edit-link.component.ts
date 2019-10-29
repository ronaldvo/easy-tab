import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChromeStorageService } from '../chrome-storage.service';
import { FormControl } from '@angular/forms';
import { Link } from '../link.interface';
import { Links } from '../links.model';
import { NameToDomainApiService } from '../name-to-domain-api.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {

  url = new FormControl('');
  name = new FormControl('');
  icon: string;
  links: Links[];

  newLink: Link;
  index: number;
  index2: number;
  title: string;
  selected: string;
  autoCompleteLinks$: Observable<Link[]>;

  constructor(
    private chromeStorageService: ChromeStorageService,
    private nameToDomainService: NameToDomainApiService,
    public bsModalRef: BsModalRef
    ) { }

  ngOnInit() {
    this.chromeStorageService.linksObservable.subscribe(data => {
      this.links = data;
    });

    if (this.index2 >= 0) {
      this.name.setValue(this.links[this.index].links[this.index2].name);
      this.url.setValue(this.links[this.index].links[this.index2].url);
    }

    this.autoCompleteLinks$ = new Observable(obs => {
      obs.next(this.url.value);
    })
    .pipe(
      mergeMap((token: string) => this.nameToDomainService.get(token))
    );
  }

  save() {
    if (this.index2 >= 0) {
      this.newLink = {
        url: this.url.value,
        name: this.name.value
      };
      this.chromeStorageService.updateLink(this.newLink, this.index, this.index2);
    } else {
      this.newLink = {
        url: this.url.value,
        name: this.name.value
      };
      this.chromeStorageService.addLink(this.newLink, this.index);
    }
    this.bsModalRef.hide();
  }
}
