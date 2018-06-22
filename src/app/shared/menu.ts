export class Menu {
    domains: IPageDomain[];

    constructor(domains: IPageDomain[]) {
        this.domains = domains;
    }
}


export interface IPageDomain {
    id: number;
    name: string;
    display: string;
    pages: IPage[];
}

export interface IPage {
    id: number;
    name: string;
    display: string;
    url: string;
    pageType: string;
    audience: string;
}
