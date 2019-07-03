import {Inject} from '@angular/core';
import { AuthSetvice, AuthState } from './vk/auth..servise';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, delay, share } from 'rxjs/operators';

export abstract class BaseComponent {
  constructor (@Inject(AuthSetvice) protected _auth: AuthSetvice) {}

  protected get authStateChange$(): BehaviorSubject<AuthState> {
    return this._auth.authStateChange$;
  }

  // protected get isAuth(): Observable<boolean> {
  //   return this._auth.authStateChange$.pipe(
  //     map((authState: AuthState) => authState.state),
  //     share(),
  //     delay(0),
  //   );
  // }
}
