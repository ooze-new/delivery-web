import { Injectable } from '@angular/core';
import { BazeService } from './baze-service';
import { HttpParams } from '@angular/common/http';
import { pluck, map } from 'rxjs/operators';
import { User } from './user';
import { VkUser } from './vk-user.interface';
import { VkFrends } from './vk-frends.interface';

@Injectable({providedIn: 'root'})
export class FredsService extends BazeService {
  get(userID: number, limit: number = 0, offset: number = 0)/* : Array<User> */ {
    let params = new HttpParams()
      .set('user_id', userID.toString())
      .set('order', 'name')
      .set('fields', 'photo_200_orig')
    ;

    if (limit > 0) {
      params = params.set('count', limit.toString());
    }

    if (offset > 0) {
      params = params.set('offset', limit.toString());
    }

    return this.apiRequest(
      'https://api.vk.com/method/friends.get',
      params
    ).pipe(
      pluck('response'),
      map((frends: VkFrends) => {
        return frends.items.map((frend: VkUser) =>
          new User(
            frend.id,
            frend.first_name,
            frend.last_name,
            frend.photo_200_orig
          )
        );
      })
    );
  }
}
