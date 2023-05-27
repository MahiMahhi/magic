import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Enable CORS during development
if (!environment.production) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', environment.apiUrl, true);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.send();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
