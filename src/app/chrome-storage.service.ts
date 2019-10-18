import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Links } from './links.model';
import { Link } from './link.interface'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChromeStorageService {

  private linksBehaviorSubject: BehaviorSubject<Links[]> = new BehaviorSubject<Links[]>([]);
  private linksStore: { links: Links[] } = { links: [] }
  public linksObservable = this.linksBehaviorSubject.asObservable();

  constructor(private ngZone: NgZone) { 
  }

  get() {
    Observable.create(ob => {
        let cb = (result) => {
          ob.next(result.links);
        };
        window['chrome'].storage.sync.get(['links'], cb);
    }).subscribe(data => {
      this.ngZone.run(() => {
        this.linksStore.links = data;
        this.linksBehaviorSubject.next(Object.assign([], this.linksStore.links))
      })
    })
  }

  set(links: Links[]): Observable<void> {
    return Observable.create(obs => {
      let cb = () => {
        obs.next(null);
      };
      window['chrome'].storage.sync.set({ 'links': links }, cb);
    });
  }

  addCategory(name: string) {
    let newLink: Links = {
      category: name,
      links: []
    }

    let list = [...this.linksBehaviorSubject.value, newLink]

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list)
    })
  }

  updateCategory(category: string, idx: number) {
    let list = [...this.linksBehaviorSubject.value]
    list[idx].category = category;

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    })
  }

  deleteCategory(idx: number) {
    let list = [...this.linksBehaviorSubject.value]
    list.splice(idx, 1)

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    })
  }

  addLink(newLink: Link, idx: number) {
    let list = [...this.linksBehaviorSubject.value]
    list[idx].links = [...list[idx].links, newLink]

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    })
  }

  updateLink(newLink: Link, idx: number, idx2: number) {
    let list = [...this.linksBehaviorSubject.value]
    list[idx].links[idx2] = newLink;

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    })
  }

  deleteLink(idx: number, idx2: number) {
    let list = [...this.linksBehaviorSubject.value]
    list[idx].links.splice(idx2, 1)

    this.set(list).subscribe(() => {
      this.linksBehaviorSubject.next(list);
    })
  }

}

