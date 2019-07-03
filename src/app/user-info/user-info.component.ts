import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { User } from '../vk/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.styl']
})
export class UserInfoComponent {
  @Input()
  user: User;

  @Input()
  isAuth = false;

  @Output()
  loginClick = new EventEmitter();

  @Output()
  logoutClick = new EventEmitter();

  login() {
    this.loginClick.next();
  }

  logout() {
    this.logoutClick.next();
  }
}
