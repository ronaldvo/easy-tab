import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastService } from './toast.service';
import { ChromeTab } from './chrome-tab.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChromeTabService {

  private chromeTabsBehaviorSubject: BehaviorSubject<ChromeTab[]> = new BehaviorSubject<ChromeTab[]>([]);
  public chromeTabsObservable = this.chromeTabsBehaviorSubject.asObservable();

  constructor(private ngZone: NgZone, private toast: ToastService) { }

  query() {
    Observable.create(ob => {
      let cb = (result) => {
        ob.next(result);
      };
      window['chrome'].tabs.query({}, cb);
    })
    .subscribe(data => {
      this.ngZone.run(() => {
        console.log(data)
        this.chromeTabsBehaviorSubject.next(data || []);
      });
    });
  }

  close(id: number): Observable<void> {
    return Observable.create(obs => {
      const cb = () => {
        console.log('running query!');
        this.query();
        obs.next(null);
      };
      window['chrome'].tabs.remove(id, cb);
    });
  }
}
