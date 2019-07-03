import { Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AuthSetvice } from './auth..servise';
import { ErrorsService } from './errors.service';

export abstract class BazeService {
  constructor(
    @Inject(HttpClient) private _http: HttpClient,
    @Inject(AuthSetvice) private _auth: AuthSetvice,
    @Inject(ErrorsService) private _errors: ErrorsService
  ) {}

  protected apiRequest(url: string, params: HttpParams
    ) {
      if (this._auth.isTokenExpiried() && !this._auth.logining) {
        console.info('relogin');
        // this._auth.login();
      }

      const requestParams = params
        .set('access_token', this._auth.token)
        .set('v', '5.100')
      ;

      return this._http.jsonp(
        `${url}?${requestParams.toString()}`,
        'callback'
      ).pipe(
        switchMap((response: object) => {
          if ('error' in response) {
            return throwError(response['error']);
          }

          return of(response);
        }),
        catchError((error) => {
          this._errors.flashError(error);
          return throwError(error);
        })
      );
    }
}
