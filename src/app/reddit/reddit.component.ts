import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditPost } from '../reddit-post.model';
import { RedditJsonService } from '../reddit-json.service';
import { FormControl } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

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

  subreddit = new FormControl('');
  redditPosts: Observable<RedditPost[]>;

  constructor(private redditJsonService: RedditJsonService) { }

  ngOnInit() {
    this.redditPosts = this.redditJsonService.redditPostObservable;

    this.redditJsonService.subredditObservable.subscribe(response => {
      this.subreddit.setValue(response || 'all');
    })

    this.redditJsonService.getSubreddit();
  }

  setSubreddit() {
    this.redditJsonService.setSubreddit(this.subreddit.value).subscribe();
  }
}
