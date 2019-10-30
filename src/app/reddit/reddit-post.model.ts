export class RedditPost {
    id: string;
    title: string;
    image: string;
    url: string;
    isSelf: boolean;
    ups: number;
    downs: number;
    content?: HTMLElement;
}