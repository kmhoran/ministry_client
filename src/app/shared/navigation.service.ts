import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaderResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../../environments/environment';
import { Menu } from '../shared/menu';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class NavigationService {
cookieString = 'pageCache';
navigationUrl = environment.serverUrl + 'page-domains/';

navData$: BehaviorSubject<any> = new BehaviorSubject([]);

constructor(private _cookieService: CookieService,
            private _http: HttpClient) { }


updateNav() {
  const data = this._http.get(this.navigationUrl).pipe((data: Observable<Menu>) => {
    this.navData$.next(data);
  });
}

getNavigation(): Observable<any> {
  if (!this._cookieService.check(this.cookieString)) {
    console.log('no cookies');

    this.httpGetNavigation()
    .subscribe((data: Menu) => {
        console.log('http recieved: ', JSON.stringify(data));
        this._cookieService.set(this.cookieString, JSON.stringify(data));
        this.refreshData()
    });

  }
    return new Observable<Menu>((observer) => {
      const cookie: string = this._cookieService.get(this.cookieString);
      console.log('retrieved cookie: ', cookie);
      if (cookie) {
        console.log('json will parse this: ', cookie);
        observer.next(JSON.parse(cookie) as Menu);
      }
    });

}

returnCookie(): Menu {
  const cookie: string = this._cookieService.get(this.cookieString);
  console.log('retrieved cookie: ', cookie);
  return (JSON.parse(cookie) as Menu);
}


setNavigation(): void {
  this.httpGetNavigation()
    .subscribe((data: any) => {
      this._cookieService.set(this.cookieString, JSON.stringify(data));
    });
}

clearCookies(): void {
  this._cookieService.delete(this.cookieString);
}


httpGetNavigation(): Observable<any> {
  return this._http.get<any[]>(this.navigationUrl)
  .pipe(catchError(this.handleError));
}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
