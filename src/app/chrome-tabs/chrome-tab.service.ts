import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { ToastService } from '../toast.service';
import { ChromeTab } from './chrome-tab.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChromeTabService {

  private chromeTabs = window['chrome'].tabs;
  private chromeTabsBehaviorSubject: BehaviorSubject<ChromeTab> = new BehaviorSubject<ChromeTab>({});
  public chromeTabsObservable = this.chromeTabsBehaviorSubject.asObservable();

  constructor(private ngZone: NgZone, private toast: ToastService) {
    this.listeners();
  }

  query() {
    Observable.create(ob => {
      let cb = (result) => {
        ob.next(result);
      };
      this.chromeTabs.query({
        currentWindow: true
      }, cb);
    })
    .pipe(
      map((data: any) => {
        const tabs: ChromeTab = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            tabs[data[key].id] = data[key];
          }
        }
        return tabs;
      })
    )
    .subscribe(data => {
      this.ngZone.run(() => {
        this.chromeTabsBehaviorSubject.next(data || {});
      });
    });
  }

  close(id: number): void {
    const tabs = JSON.parse(JSON.stringify(this.chromeTabsBehaviorSubject.value));

    delete tabs[id];
    this.chromeTabsBehaviorSubject.next(tabs);
    this.chromeTabs.remove(id, () => {});
  }

  setActive(id: number): void {
    this.chromeTabs.update(id, { active: true }, () => {});
  }

  listeners() {
    this.chromeTabs.onRemoved.addListener(() => {
      this.toast.show('Tab closed');
      this.query();
    });

    this.chromeTabs.onUpdated.addListener(() => {
      this.query();
    });

    this.chromeTabs.onDetached.addListener(() => {
      this.query();
    });

    this.chromeTabs.onAttached.addListener(() => {
      this.query();
    });
  }
}
