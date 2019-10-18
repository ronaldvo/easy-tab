import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditPost } from '../reddit-post.model';
import { RedditJsonService } from '../reddit-json.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  redditPosts: Observable<RedditPost[]>;

  constructor(private redditJsonService: RedditJsonService) { }

  ngOnInit() {
    this.redditPosts = this.redditJsonService.redditPostObservable;
    this.redditJsonService.getPosts();

    console.log(this.redditPosts);
  }

}
