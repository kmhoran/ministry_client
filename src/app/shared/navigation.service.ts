import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaderResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class NavigationService {

cookieString = 'pageCache';
navigationUrl = environment.serverUrl + 'page-domains/';
constructor(private _cookieService: CookieService,
            private _http: HttpClient) { }

getNavigation(): Observable<any> {
  this._cookieService.deleteAll();
  if (!this._cookieService.check(this.cookieString)) {
    console.log('no cookies');

    this.httpGetNavigation()
    .subscribe((data: any) => {
        console.log('data: ', data);
        this._cookieService.set(this.cookieString, data);
    });

  } else {
    console.log('Cookies', this._cookieService.get(this.cookieString));
  }
  return new Observable<any>((observer) => {
    observer.next(this._cookieService.get(this.cookieString));
  });
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
