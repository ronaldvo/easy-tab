import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Links } from './links.model';
import { Link } from './link.interface';

@Injectable({
  providedIn: 'root'
})
export class ChromeStorageService {

  links: Links[];

  constructor() { 
  }

  get():Observable<any> {
    return Observable.create(obs => {
      this.links = JSON.parse(localStorage.getItem('links')) || [];
      obs.next(this.links)
    })
    // return Observable.create(obs => {
    //     let cb = (result) => {
    //       if (result.hasOwnProperty('links')) {
    //         this.links = result.links;
    //       } else {
    //         this.links = [];
    //       }
    //       obs.next(result.links);
    //     };
    //     window['chrome'].storage.sync.get(['links'], cb);
    // });
  }

  set(links: Links[]) {
    localStorage.setItem('links', JSON.stringify(links))
    // return Observable.create(obs => {
    //   let cb = () => {
    //     obs.next();
    //   };
    //   window['chrome'].storage.sync.set({ links: mLinks }, cb);
    // });
  }

  addCategory(name: string) {
    this.links.push({
      category: name,
      links: []
    })
    this.set(this.links);
  }

  updateCategory(category: string, idx: number) {
    this.links[idx].category = category;
    this.set(this.links);
  }

  deleteCategory(idx: number) {
    this.links.splice(idx, 1);
    this.set(this.links);
  }

  addLink(newLink: Link, idx: number) {
    this.links[idx].links.push(newLink)
    this.set(this.links);
  }

  updateLink(newLink: Link, idx: number, idx2: number) {
    this.links[idx].links[idx2] = newLink;
    this.set(this.links);
  }

  deleteLink(idx: number, idx2: number) {
    this.links[idx].links.splice(idx2, 1);
    this.set(this.links);
  }

}

