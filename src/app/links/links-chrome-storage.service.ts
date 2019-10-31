import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Links } from './links.model';
import { Link } from './link.interface';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../toast.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ChromeStorageService {

  private googleStorageSync = window['chrome'].storage.sync;
  private linksBehaviorSubject: BehaviorSubject<Links[]> = new BehaviorSubject<Links[]>([]);
  public linksObservable = this.linksBehaviorSubject.asObservable();

  constructor(private ngZone: NgZone, private toast: ToastService) { }

  get() {
    Observable.create(ob => {
        const cb = (result) => {
          ob.next(result.links);
        };
        this.googleStorageSync.get(['links'], cb);
    }).subscribe(data => {
      this.ngZone.run(() => {
        this.linksBehaviorSubject.next(data || []);
      });
    });
  }

  set(links: Links[]): Observable<void> {
    return new Observable(obs => {
      const cb = () => {
        obs.next(null);
      };
      this.googleStorageSync.set({ 'links': links }, cb);
    });
  }

  update(links: Links[]) {
    this.set(links).subscribe(() => {
      this.linksBehaviorSubject.next(links);
    });
  }

  addCategory(name: string) {
    const newCategory: Links = {
      category: name,
      links: []
    };

    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list.push(newCategory);

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });

    this.toast.show('Link category added!');
  }

  updateCategory(category: string, idx: number) {
    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list[idx].category = category;

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });
    this.toast.show('Link category updated!');
  }

  deleteCategory(idx: number) {
    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list.splice(idx, 1);

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });
    this.toast.show('Link category deleted!');
  }

  addLink(newLink: Link, idx: number) {
    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list[idx].links = [...list[idx].links, newLink];

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });
    this.toast.show('Link added!');
  }

  updateLink(newLink: Link, idx: number, idx2: number) {
    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list[idx].links[idx2] = newLink;

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });
    this.toast.show('Link updated!');
  }

  deleteLink(idx: number, idx2: number) {
    // const list = _.cloneDeep(this.linksBehaviorSubject.value);
    const list = Object.assign([], this.linksBehaviorSubject.value);
    list[idx].links.splice(idx2, 1);

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    });
    this.toast.show('Link deleted!');
  }
}

