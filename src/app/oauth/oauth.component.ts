import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthSetvice } from '../vk/auth..servise';

// http://localhost:4200/test#access_token=deaa55218461de0caf1fcb982aa86a173152e4e4ed1e33455daeda4c6d9ff332c3ff087b8141618b35f3c&expires_in=86400&user_id=54495905&state=123456
@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.styl']
})
export class OAuthComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthSetvice
  ) { }

  ngOnInit() {
    this._route.fragment.subscribe((fragment: string) => {
      const token = Object.assign(
        {},
        ...fragment
          .split('&')
          .map(
            (param: string) => {
              const [key, value] = param.split('=');
              return {[key]: value};
            }
          )
      );

      this._auth.setToken(token);
      this._router.navigate(['']);
    });
  }

}
