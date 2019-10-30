import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RedditPost } from './reddit-post.model';

@Injectable({
  providedIn: 'root'
})
export class RedditJsonService {

  private posts: RedditPost[] = [];
  private redditPostBehaviorSubject: BehaviorSubject<RedditPost[]> = new BehaviorSubject<RedditPost[]>([]);
  private subredditBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  public redditPostObservable = this.redditPostBehaviorSubject.asObservable();
  public subredditObservable = this.subredditBehaviorSubject.asObservable();

  constructor(private http: HttpClient, private ngZone: NgZone) { }

  public setSubreddit(subreddit: string): Observable<void> {
    return Observable.create(obs => {
      let cb = () => {
        obs.next(null);
      };
      window['chrome'].storage.sync.set({ 'subreddit': subreddit }, cb);
      this.getSubreddit();
    });
  }

  public getSubreddit() {
    Observable.create(ob => {
        let cb = (result) => {
          ob.next(result.subreddit);
        };
        window['chrome'].storage.sync.get(['subreddit'], cb);
    }).subscribe(data => {
      this.ngZone.run(() => {
        this.subredditBehaviorSubject.next(data)
        this.getPosts();
      })
    })
  }

  private getPosts() {
    let subredditUrl = 'http://www.reddit.com/r/' + (this.subredditBehaviorSubject.value || 'all') + '.json';
    this.posts = [];
    return this.http.get(subredditUrl)
      .pipe(
        map((response: any) => {
          response.data.children.forEach(element => {
              this.posts.push({
                id: element.data.id,
                title: element.data.title,
                image: element.data.url,
                url: 'http://www.reddit.com' + element.data.permalink,
                isSelf: element.data.is_self,
                ups: element.data.ups,
                downs: element.data.downs,
                content: element.data.media_embed.content
              });
          });
        })
      ).subscribe(() => {
        this.redditPostBehaviorSubject.next(this.posts);
      });
  }
}


