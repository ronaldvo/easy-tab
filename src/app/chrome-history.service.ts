import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChromeHistoryService {

  constructor() { }

  get():Observable<any> {
    return Observable.create(obs => {
        let cb = (result) => { // use whatever the chrome api syntax is
          obs.next(result);
        };
        window['chrome'].history.search({ text: '' }, cb);
    });
  }
}
