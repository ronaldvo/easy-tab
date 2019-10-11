export interface Link {
    url: string;
    name: string;
    icon?: string;
}

export class LinkCategory {
    groupName: string;
    links: Array<Link>;
}
