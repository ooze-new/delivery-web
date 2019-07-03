import {
  NgModule,
  InjectionToken,
  ModuleWithProviders,
  Optional,
  Inject
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthSetvice } from './auth..servise';
import { TokenStore } from './token-store.interface';
import { VkApiConfig } from './vk-api-config';

import { ErrorsService } from './errors.service';
import { ApiError } from './api-error';


export const TOKEN_STORE = new InjectionToken<TokenStore>('TOKEN_STORE');
export const TOKEN_STORE_KEY = new InjectionToken<string>('TOKEN_STORE');
export const VK_API_CONFIG = new InjectionToken<TokenStore>('VK_API_CONFIG');
export const ERROR_MESSAGES_CONFIG = new InjectionToken<Array<ApiError>>('ERROR_MESSAGES_CONFIG');


const AuthSetviceFactory = (
  store: TokenStore,
  config: VkApiConfig,
  tokenKeyInStore: string,
  errors: ErrorsService,
  http: HttpClient
): AuthSetvice => {
  const service = new AuthSetvice(http, store, tokenKeyInStore, config, errors);
  service.loadToken();

  return service;
};

const defultErrorMesageConf: Array<ApiError> = [];

@NgModule({
  providers: [
    {
      provide: AuthSetvice,
      useFactory: AuthSetviceFactory,
      deps: [ TOKEN_STORE, VK_API_CONFIG, TOKEN_STORE_KEY, ErrorsService, HttpClient ]
    },
  ]
})
export class VkModule {
  static forRoot(
    config: VkApiConfig,
    tokenKeyInStore: string,
    tokenStore: TokenStore
  ): ModuleWithProviders {
    return {
      ngModule: VkModule,
      providers: [
        { provide: TOKEN_STORE_KEY, useValue: tokenKeyInStore },
        { provide: TOKEN_STORE, useValue: tokenStore },
        { provide: VK_API_CONFIG, useValue: config },
        { provide: ERROR_MESSAGES_CONFIG, useValue: defultErrorMesageConf, multi: true },
      ]
    };
  }

  constructor (
    errors: ErrorsService,
    @Optional() @Inject(ERROR_MESSAGES_CONFIG) configs: Array<Array<ApiError>> = []
  ) {
    if (!configs) {
      return;
    }

    configs.forEach(config => errors.addMessages(config));
  }
}
