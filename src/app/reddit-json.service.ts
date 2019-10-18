import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RedditPost } from './reddit-post.model';

@Injectable({
  providedIn: 'root'
})
export class RedditJsonService {

  private posts: RedditPost[];
  private redditPostBehaviorSubject: BehaviorSubject<RedditPost[]> = new BehaviorSubject<RedditPost[]>([]);
  public redditPostObservable = this.redditPostBehaviorSubject.asObservable();
  apiUrl = 'https://www.reddit.com/r/mma.json';

  constructor(private http: HttpClient) { }

  getPosts(subredditUrl?: string) {
    console.log('getting!')
    return this.http.get(this.apiUrl)
      .pipe(
        map((response: any) => {
          console.log(response)
          response.data.children.forEach(element => {
              this.posts.push({
                id: element.data.id,
                title: element.data.title,
                image: element.data.url,
                content: element.data.media_embed.content
              });
          });
          console.log(this.posts)
          this.redditPostBehaviorSubject.next(this.posts);
        })
      );
  }
}
