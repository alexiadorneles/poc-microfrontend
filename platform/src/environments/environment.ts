// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface Env {
  production: boolean;
  baseUrl: string;
  microfrontends: { [key: string]: { url: string; scriptName: string } };
}

export const environment: Env = {
  production: false,
  baseUrl: 'http://localhost:3000/tasks',
  microfrontends: {
    one: { url: 'http://localhost:4700', scriptName: 'main.js' },
    two: { url: 'http://localhost:4500', scriptName: 'main.js' },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
