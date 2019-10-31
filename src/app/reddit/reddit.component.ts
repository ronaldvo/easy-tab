import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, filter, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RedditPost } from './reddit-post.model';
import { RedditJsonService } from './reddit-json.service';
import { FormControl } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

const delayedUniqueSearch = (delay: number) => (src$: Observable<Event>) => (src$.pipe(
  debounceTime(delay),
  map(event => (event.target as HTMLInputElement).value),
  filter(query => query !== ''),
  distinctUntilChanged()
));

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 300})
  ]
})
export class RedditComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef<HTMLInputElement>;
  subreddit = new FormControl('all');
  redditPosts: Observable<RedditPost[]>;

  constructor(private redditJsonService: RedditJsonService) { }

  ngOnInit() {
    this.redditPosts = this.redditJsonService.redditPostObservable;

    this.redditJsonService.subredditObservable.subscribe(response => {
      this.subreddit.setValue(response || 'all');
    });

    this.redditJsonService.getSubreddit();

    // fromEvent(this.searchInput.nativeElement, 'input').pipe(
    //   delayedUniqueSearch(275),
    //   tap(x => console.log(x)),
    //   switchMap(query => this.redditJsonService.setSubreddit(query))
    // );
  }

  setSubreddit() {
    this.redditJsonService.setSubreddit(this.subreddit.value).subscribe();
  }
}
