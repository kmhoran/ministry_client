import { Component, OnInit, OnDestroy , Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavigationService } from '../shared/navigation.service';
import { IMenu } from './imenu';
import { Menu } from './menu';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isNavCollapsed = true;
  menu: IMenu;
  menuOptions: IMenu[] = [
    {
    id: 0,
    name: 'about',
    display: 'About',
    pages: [
      {
        id: 0,
        name: 'our-conference',
        display: 'Our Conference',
        url: '/about/our-conference',
        pageType: 'document',
        audience: 'public'
      }, {
        id: 1,
        name: 'history',
        display: 'History',
        url: '/about/history',
        pageType: 'document',
        audience: 'public'
       }, {
         id: 2,
         name: 'past-events',
         display: 'Past Events',
         url: '/about/past-events',
         pageType: 'document',
         audience: 'public'
       }, {
         id: 3,
         name: 'gallery',
         display: 'Gallery',
         url: '/about/gallery',
         pageType: 'document',
         audience: 'public'
       }, {
         id: 4,
         name: 'wish-list',
         display: 'Wish List',
         url: '/about/wish-list',
         pageType: 'document',
         audience: 'public'
       }
    ]
  }, {
    id: 1,
    name: 'schedule',
    display: 'Schedule',
    pages: [{
      id: 5,
      name: 'schedule',
      display: 'Schedule',
      url: '/schedule',
      pageType: 'document',
      audience: 'public'
    }]
  }, {
    id: 2,
    name: 'resources',
    display: 'Resources',
    pages: [{
      id: 6,
      name: 'culver-city',
      display: 'Culver City',
      url: '/resources/culver-city',
      pageType: 'document',
      audience: 'public'
    }, {
      id: 7,
      name: 'la-county',
      display: 'LA County',
      url: '/resources/la-county',
      pageType: 'document',
      audience: 'public'
    }, {
      id: 8,
      name: 'arch-diocese',
      display: 'Arch Diocese',
      url: '/resources/arch-diocese',
      pageType: 'document',
      audience: 'public'
    }, {
      id: 9,
      name: 'saves',
      display: 'S.A.V.E.S.',
      url: '/resources/saves',
      pageType: 'document',
      audience: 'public'
    }]
  }, {
    id: 4,
    name: 'contact',
    display: 'Contact',
    pages: [{
      id: 10,
      name: 'contact',
      display: 'Contact',
      url: '/contact',
      pageType: 'document',
      audience: 'public'
    }]
  },
];

  subdomain: any;
  subscription: Subscription;
  @Input() domain: string;
  @Input() page: string;

  constructor(private _navigation: NavigationService) { }

  ngOnInit() {
    let nav = null;
    this.subscription = this._navigation.getNavigation()
    .subscribe((data: Menu) => {
        nav = data;
        console.log('got nav: ', data);
    });

    this.menu = null;
    for (let i = 0; i < this.menuOptions.length; i++) {
      if (this.menuOptions[i].name === this.domain) {
        this.menu = this.menuOptions[i];
        // console.log('menu: ', this.menu);
        break;
      }
    }
    if (!this.menu) {
      console.log('no menu: ', this.domain);
    }
  }

  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeNavCollapse(): void {
    this.isNavCollapsed = true;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
