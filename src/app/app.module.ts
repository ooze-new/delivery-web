import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HttpClientModule,
  HttpClientJsonpModule,
} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatListModule,
  MatSnackBarModule,
  MatButtonModule
} from '@angular/material';
import { environment } from '../environments/environment';

import { VkModule } from './vk/vk.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OAuthComponent } from './oauth/oauth.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { ERROR_MESSAGES_CONFIG } from './vk/vk.module';
import { ApiError } from './vk/api-error';

const appRoutes: Routes = [
  { path: 'oauth', component: OAuthComponent},
  { path: '', component: HomeComponent}
];

const errorMesageConf: Array<ApiError> = [
  {
    error_code: 5,
    error_msg: 'Токен устарел. поробуйте выдти и войти снова'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OAuthComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    VkModule.forRoot(
      {
        appID: environment.appID,
        serviceToken: environment.serviceToken,
        display: environment.display,
        response_type: environment.response_type,
        scope: environment.scope,
        state: environment.state,
        apiVersion: environment.apiVersion
      },
      environment.vkTokenKeyInStore,
      window.sessionStorage
    )
  ],
  providers: [
    { provide: ERROR_MESSAGES_CONFIG, useValue: errorMesageConf, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
