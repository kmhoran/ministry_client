import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from './imenu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isNavCollapsed = true;
  menu: IMenu;
  menuOptions: IMenu[] = [
    {
    id: 'about',
    name: 'About',
    pages: [
      {
        id: 'our-conference',
        name: 'Our Conference',
        url: '/about/our-conference'
      }, {
        id: 'history',
        name: 'History',
        url: '/about/history'
       }, {
         id: 'past-event',
         name: 'Past Events',
         url: '/about/past-events'
       }, {
         id: 'gallery',
         name: 'Gallery',
         url: '/about/gallery'
       }, {
         id: 'wish-list',
         name: 'Wish List',
         url: '/about/wish-list'
       }
    ]
  }, {
    id: 'schedule',
    name: 'Schedule',
    pages: [{
      id: 'shedule',
      name: 'Shedule',
      url: '/schedule'
    }]
  }, {
    id: 'contact',
    name: 'Contact',
    pages: [{
      id: 'contact',
      name: 'Contact',
      url: '/contact'
    }]
  }, {
    id: 'resources',
    name: 'Resources',
    pages: [{
      id: 'resources',
      name: 'Resources',
      url: '/resources'
    }]
  },
];

  subdomain: any;

  @Input() domain: string;
  @Input() page: string;

  constructor() { }

  ngOnInit() {
    this.menu = this.menuOptions[0];
  }

  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeNavCollapse(): void {
    this.isNavCollapsed = true;
  }

}
