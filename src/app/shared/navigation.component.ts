import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isNavCollapsed = true;
  menu: Menu;
  menuOptions: Menu[] = [
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

  @Input() domain: string;
  @Input() page: string;

  constructor() { }

  ngOnInit() {
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

}
