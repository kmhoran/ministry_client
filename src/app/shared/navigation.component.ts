import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isNavCollapsed = true;
  domainOptions = ['about', 'schedule', 'contact', 'resources'];
  subdomainOptions = {
    'about': [
      {
        id: 'our-conference',
        name: 'Our Conference',
        url: '[/about/our-conference]'
      }, {
        id: 'history',
        name: 'History',
        url: '[/about/history]'
       }, {
         id: 'past-event',
         name: 'Past Events',
         url: '[/about/past-events]'
       }, {
         id: 'gallery',
         name: 'Gallery',
         url: '[/about/gallery]'
       }, {
         id: 'wish-list',
         name: 'Wish List',
         url: '[/about/wish-list]'
       }
    ]
  };

  subdomain: any;

  @Input() domain: string;
  @Input() page: string;

  constructor() { }

  ngOnInit() {
    if (!this.domainOptions.includes(this.domain)) {
        this.domain = null;
    }
    if (this.domain) {
      this.subdomain = this.subdomainOptions[this.domain];
      console.log('subdomain: ', this.subdomain);
    }
  }

  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeNavCollapse(): void {
    this.isNavCollapsed = true;
  }

}
