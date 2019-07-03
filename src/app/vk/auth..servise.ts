import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { VkApiConfig } from './vk-api-config';
import { VKAccessToken } from './token';
import { TokenStore } from './token-store.interface';
import { ErrorsService } from './errors.service';

export interface AuthState {
  state: boolean;
  userID?: number;
}

interface TokenInfo {
  success: 1|0;
  user_id: number;
  date: number;
  expire: number;
}

@Injectable()
export class AuthSetvice {
  private _logining = false;
  private _http: HttpClient;
  private _token: VKAccessToken;
  private _store: TokenStore;
  private _tokenKeyInStore: string;
  private _config: VkApiConfig;
  private _errors: ErrorsService;

  readonly authStateChange$ = new BehaviorSubject<AuthState>({state: false});

  constructor(
    httpClient: HttpClient,
    store: TokenStore,
    tokenKeyInStore: string,
    config: VkApiConfig,
    errors: ErrorsService
  ) {
    this._http = httpClient;
    this._store = store;
    this._tokenKeyInStore = tokenKeyInStore;
    this._config = config;
    this._errors = errors;
  }

  get token(): string {
    return this._token && this._token.access_token || '';
  }

  get userID(): number {
    return this._token && this._token.user_id || 0;
  }

  get logining(): boolean {
    return this._logining;
  }

  isAuth(): boolean {
    // && !this.isTokenExpiried()
    return Boolean(this._token
      && this._token.access_token
    );
  }

  isTokenExpiried(): boolean {
    if (
      this._token
      && this._token.expires_in
      && this._token.expires_in < (this.getCuentTimestamp() - 10)
    ) {
      return true;
    }

    return false;
  }

  setToken(token: VKAccessToken) {
    // this._token = token;
    // this.saveToken();
    this.checkToken(token.access_token).subscribe(
      (tokenInfo) => {
        this._token = token;
        this._token.expires_in = tokenInfo.expire;
        this.saveToken();
      },
      (error) => {}
    );
  }

  resetToken() {
    this._token = undefined;
    this.removeTokenFromStore(this._tokenKeyInStore);
  }

  saveToken() {
    this.saveTokenToStore(this._tokenKeyInStore);
  }

  loadToken() {
    this.loadTokenFromStore(this._tokenKeyInStore);
  }

  login() {
    this._logining = true;

    const config = {
      client_id: this._config.appID,
      display: this._config.display,
      // redirect_uri: 'http://localhost:4200/test',
      redirect_uri: `${window.location.origin}/oauth`,
      scope: this._config.scope.join(','),
      response_type: this._config.response_type,
      v: this._config.apiVersion,
      state: this._config.state
    };

    document.location.replace([
      'https://oauth.vk.com/authorize',
      Object.entries(config)
      .map((item) => item.join('='))
      .join('&')
    ].join('?'));
  }

  logout() {
    this.resetToken();
  }

  private saveTokenToStore(key: string) {
    this._store.setItem(key, JSON.stringify(this._token));

    if (this.isAuth()) {
      this.authStateChange$.next({
        state: true,
        userID: this.userID
      });
    }
  }

  private loadTokenFromStore(key: string) {
    this._token = JSON.parse(this._store.getItem(key)) as VKAccessToken;

    if (this.isAuth()) {
      this.authStateChange$.next({
        state: true,
        userID: this.userID
      });
    }
  }

  private removeTokenFromStore(key: string) {
    this._store.removeItem(key);
    this.authStateChange$.next({state: false});
  }

  private getCuentTimestamp(): number {
    return new Date().getTime();
  }

  private checkToken(token: string): Observable<TokenInfo> {
    const params = new HttpParams()
      .set('token', token)
      .set('access_token', this._config.serviceToken)
      .set('v', this._config.apiVersion)
    ;

    const url = 'https://api.vk.com/method/secure.checkToken';

    return this._http.jsonp(
      `${url}?${params.toString()}`,
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
      }),
      map((value: any): TokenInfo => value.response)
    );
  }
}
