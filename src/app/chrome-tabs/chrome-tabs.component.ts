import { Component, OnInit, NgZone } from '@angular/core';
import { ChromeTabService } from './chrome-tab.service';
import { ChromeTab } from './chrome-tab.model';
import { Observable, bindCallback } from 'rxjs';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-chrome-tabs',
  templateUrl: './chrome-tabs.component.html',
  styleUrls: ['./chrome-tabs.component.css']
})
export class ChromeTabsComponent implements OnInit {
  hover: number;
  tabs: Observable<ChromeTab>;
  ObjectKeys = Object.keys;


  constructor(private chromeTabService: ChromeTabService, private ngZone: NgZone) { }

  ngOnInit() {
    this.tabs = this.chromeTabService.chromeTabsObservable;
    this.chromeTabService.query();
  }

  closeTab(id: number) {
    this.chromeTabService.close(id);
    return false;
  }

  setActive(id: number) {
    this.chromeTabService.setActive(id);
  }
}
