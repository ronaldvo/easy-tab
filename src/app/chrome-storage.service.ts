import { Injectable } from '@angular/core';

import { bindCallback, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Links } from './links.model';
import { Link } from './link.interface';

@Injectable({
  providedIn: 'root'
})
export class ChromeStorageService {

  myLinks: Links[];

  constructor() { }

  get():Links[] {
    this.myLinks = JSON.parse(localStorage.getItem('links'));
    return this.myLinks
  }

  set(links: Links[]) {
    localStorage.setItem('links', JSON.stringify(links))
  }

  addCategory(name: string) {
    this.myLinks.push({
      category: name,
      links: []
    })

    this.set(this.myLinks);
  }

  addLink(newLink: Link, idx: number) {
    this.myLinks[idx].links.push(newLink)

    this.set(this.myLinks);
  }

  /*
  get(): Observable<any> {
    return Observable.create(obs => {
        let cb = (result) => { // use whatever the chrome storage callback syntax is, this is typical cb structure
          obs.next(result.key);
        };
        window['chrome'].storage.sync.get('links', cb);
    });
  }

  set(links: any){
    window['chrome'].storage.sync.set({'links': links}, function() {
    });
  }
*/
}

