import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NavigationService } from './shared/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NavigationService ]
})
export class AppComponent implements OnInit, OnDestroy {
  cookieValue = 'UNKNOWN';
  title = 'app';
  svdpLogo = environment.svpdLogo;
  isNavCollapsed = true;

  constructor(private _cookieService: CookieService,
              private _navService: NavigationService) {}
  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  ngOnInit(): void {
    this._navService.clearCookies();
    this._navService.setNavigation();
  }
  ngOnDestroy(): void {
    
  }

  closeMenuCollapse(): void {
    this.isNavCollapsed = true;
  }
}
