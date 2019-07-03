import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchAll, share } from 'rxjs/operators';

import { BaseComponent } from '../base-component';
import { User } from '../vk/user';
import { AuthSetvice, AuthState } from '../vk/auth..servise';
import { FredsService } from '../vk/freds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent extends BaseComponent implements OnInit {
  friends: Observable<Array<User>> = of([]);

  constructor(auth: AuthSetvice, private _frendService: FredsService) {
    super(auth);
  }

  ngOnInit() {
    this.friends = this.authStateChange$.pipe(
      map((authState: AuthState) => {
        if (authState.state) {
          return this._frendService.get(authState.userID).pipe(
            catchError((error) => {
              return of([]);
            })
          );
        } else {
          return of(null);
        }
      }),
      share(),
      switchAll(),
    );
  }
}
