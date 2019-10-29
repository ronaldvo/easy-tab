import { Component, OnInit } from '@angular/core';
import { ChromeTabService } from '../chrome-tab.service';
import { ChromeTab } from '../chrome-tab.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chrome-tabs',
  templateUrl: './chrome-tabs.component.html',
  styleUrls: ['./chrome-tabs.component.css']
})
export class ChromeTabsComponent implements OnInit {

  tabs: Observable<ChromeTab[]>;

  constructor(private chromeTabService: ChromeTabService) { }

  ngOnInit() {
    this.tabs = this.chromeTabService.chromeTabsObservable;
    this.chromeTabService.query();

    console.log(this.tabs);
  }

  closeTab(id: number) {
    this.chromeTabService.close(id).subscribe();
  }
}
