import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Link } from './links/link.interface';
import { map } from 'rxjs/operators';

const API_URL = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=';
const REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

@Injectable({
  providedIn: 'root'
})
export class NameToDomainApiService {

  autoCompleteLinksBehaviorSubject: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>([]);
  autoCompleteLinks$ = this.autoCompleteLinksBehaviorSubject.asObservable();

  constructor(private http: HttpClient) { }

  get(query: string) {
    query.replace(REGEX, '');
    const request = API_URL + query;
    return this.http.get<Link[]>(request);
  }
}
