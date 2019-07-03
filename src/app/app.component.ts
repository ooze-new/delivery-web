import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchAll, share, mergeMap, delay, distinct } from 'rxjs/operators';
import { BaseComponent } from './base-component';
import { User } from './vk/user';
import { AuthSetvice, AuthState } from './vk/auth..servise';
import { UserService } from './vk/user.service';
import { ErrorsService } from './vk/errors.service';
import { ApiError } from './vk/api-error';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent extends BaseComponent implements OnInit {
  user: Observable<User> = of(null);
  isAuth: Observable<boolean> = of(false);

  constructor(
    auth: AuthSetvice,
    private _userService: UserService,
    private _errorsService: ErrorsService,
    private _snackBar: MatSnackBar
  ) {
    super(auth);
  }

  ngOnInit() {
    console.info(window.location.origin);

    this.isAuth = this.authStateChange$.pipe(
      map((authState: AuthState) => authState.state),
      delay(0),
    );

    this.user = this.authStateChange$.pipe(
      map((authState: AuthState) => {
        if (authState.state) {
          return this._userService.get(authState.userID).pipe(
            catchError((error) => {
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      }),
      share(),
      switchAll()
    );

    this._errorsService.error$.pipe(
      map((error: ApiError) => error.error_msg),
      distinct()
    )
    .subscribe(
      (error: string) => {
        this._snackBar.open(
          error,
          'Ошибка',
          { duration: 2000 }
        );
      }
    );
  }

  login() {
    this._auth.login();
  }

  logout() {
    this._auth.logout();
  }
}
