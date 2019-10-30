import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { ToastService } from '../toast.service';
import { ChromeTab } from './chrome-tab.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChromeTabService {

  private chromeTabsBehaviorSubject: BehaviorSubject<ChromeTab> = new BehaviorSubject<ChromeTab>({});
  public chromeTabsObservable = this.chromeTabsBehaviorSubject.asObservable();

  constructor(private ngZone: NgZone, private toast: ToastService) {
    this.listenToRemoveOrUpdate();
  }

  query() {
    Observable.create(ob => {
      let cb = (result) => {
        ob.next(result);
      };
      window['chrome'].tabs.query({}, cb);
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
    delete this.chromeTabsBehaviorSubject.value[id];
    window['chrome'].tabs.remove(id, () => {});
  }

  listenToRemoveOrUpdate() {
    window['chrome'].tabs.onRemoved.addListener(() => {
      this.query();
    });

    window['chrome'].tabs.onUpdated.addListener(() => {
      this.query();
    });
  }
}
