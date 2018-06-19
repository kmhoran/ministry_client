import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NavigationService } from './shared/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NavigationService ]
})
export class AppComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  title = 'app';
  svdpLogo = environment.svpdLogo;
  isNavCollapsed = true;

  constructor(private _cookieService: CookieService) {}
  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  ngOnInit(): void {
    this._cookieService.set('Test', 'Hello World!');
    this.cookieValue = this._cookieService.get('Test');
  }

  closeMenuCollapse(): void {
    this.isNavCollapsed = true;
  }
}
