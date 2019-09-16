/* main.ts - The main.ts file acts as the main entry point of our Angular application. This file is responsible for the bootstrapper operation of our Angular modules. It contains some important statements related to the modules and some initial setup configurations like 
enableProdMode – This option is used to disable Angular’s development mode and enable Productions mode. Disabling Development mode turns off assertions and other model-related checks within the framework.
platformBrowserDynamic – This option is required to bootstrap the Angular app n the browser.
AppModule – This option indicates which module acts as a root module in the applications.
environment – This option stores the values of the different environment constants.  */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
