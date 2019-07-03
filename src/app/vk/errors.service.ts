import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ApiError } from './api-error';

@Injectable({providedIn: 'root'})
export class ErrorsService {
  private _error$: BehaviorSubject<ApiError>;
  private _messages = new Map<number, string>();

  get error$(): Observable<ApiError> {
    return this._error$.pipe(
      filter((error: ApiError) => error !== null),
      map((error: ApiError): ApiError => {
        if (this._messages.has(error.error_code)) {
          error.error_msg = this._messages.get(error.error_code);
        }
        return error;
      })
    );
  }

  constructor() {
    this._error$ = new  BehaviorSubject<ApiError>(null);
  }

  addMessages(messages: Array<ApiError>) {
    messages.forEach((message) => {
      this._messages.set(message.error_code, message.error_msg);
    });
  }

  flashError(error: ApiError) {
    this._error$.next(error);
  }
}
