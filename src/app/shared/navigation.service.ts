import { Injectable, NgZone } from '@angular/core';

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
navigationUrl = environment.serverUrl + 'page-domains';
constructor(private _cookieService: CookieService,
            private _http: HttpClient,
            private _zone: NgZone) { }

getNavigation(): string {
  if (!this._cookieService.check(this.cookieString)) {
    console.log('no cookies');
    this.httpGetNavigation()
    .subscribe((data: any) => {
      this._zone.run(() => {
        console.log('data: ', data);
        this._cookieService.set(this.cookieString, data);
      });
    });
  }
  return this._cookieService.get(this.cookieString);
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
