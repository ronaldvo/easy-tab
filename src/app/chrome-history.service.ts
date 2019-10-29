import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChromeHistoryService {

  constructor() { }

  get(): Observable<any> {
    return new Observable(obs => {
        const cb = (result) => { // use whatever the chrome api syntax is
          obs.next(result);
        };
        window['chrome'].history.search({ text: '' }, cb);
    });
  }
}
