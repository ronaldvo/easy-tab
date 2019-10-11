import { Injectable } from '@angular/core';
import { LinkCategory } from './link-categories-class';
import { Link } from './link-interface';

@Injectable({
  providedIn: 'root'
})
export class ChromeStorageService {

  linksGet: LinkCategory[];


  constructor() {
    this.linksGet = [];

  }

  get() {
    window['chrome'].storage.sync.get('links', function(result) {
      return this.process( result );
    })
  }

  process( result ) {
    this.linksGet = ( result.links as LinkCategory[] );    
  }

  set(links: any){
    window['chrome'].storage.sync.set({'links': links}, function() {

    });
  }

  returnCallBack(links: LinkCategory[]):LinkCategory[] {
    return links;
  }
}
