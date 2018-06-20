import { Component, OnInit, OnDestroy , Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavigationService } from '../shared/navigation.service';
import { IMenu } from './imenu';


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
         id: 'past-events',
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
      id: 'schedule',
      name: 'Schedule',
      url: '/schedule'
    }]
  }, {
    id: 'resources',
    name: 'Resources',
    pages: [{
      id: 'culver-city',
      name: 'Culver City',
      url: '/resources/culver-city'
    }, {
      id: 'la-county',
      name: 'LA County',
      url: '/resources/la-county'
    }, {
      id: 'arch-diocese',
      name: 'Arch Diocese',
      url: '/resources/arch-diocese'
    }, {
      id: 'saves',
      name: 'S.A.V.E.S.',
      url: '/resources/saves'
    }]
  }, {
    id: 'contact',
    name: 'Contact',
    pages: [{
      id: 'contact',
      name: 'Contact',
      url: '/contact'
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
    .subscribe(data => {
        nav = data;
        console.log('got nav: ', JSON.stringify(nav));
    });

    this.menu = null;
    for (let i = 0; i < this.menuOptions.length; i++) {
      if (this.menuOptions[i].id === this.domain) {
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
