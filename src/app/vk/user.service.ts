import { Injectable } from '@angular/core';
import { BazeService } from './baze-service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { User } from './user';
import { VkUser } from './vk-user.interface';

@Injectable({providedIn: 'root'})
export class UserService extends BazeService {
  get(id: number): Observable<User> {
    const params = new HttpParams()
      .set('user_ids', id.toString())
      .set('fields', 'photo_200_orig')
    ;

    return this.apiRequest(
      'https://api.vk.com/method/users.get',
      params
    ).pipe(
      pluck('response'),
      map((result: Array<VkUser>) => {
        const user = result.shift();
        return new User(
          user.id,
          user.first_name,
          user.last_name
        );
      })
    );
  }
}
