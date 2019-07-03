// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  vkTokenKeyInStore: 'vK-token-info1',
  appID: 	7042453,
  serviceToken: '9ca091d89ca091d89ca091d82d9ccbe44d99ca09ca091d8c1bcf66aac5a450bad627a87',
  display: 'page',
  // redirect_uri: 'http://localhost:4200/test',
  scope: ['friends', 'secure'],
  response_type: 'token',
  apiVersion: '5.95',
  state: '123456'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
