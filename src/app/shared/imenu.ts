export interface IMenu {
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
