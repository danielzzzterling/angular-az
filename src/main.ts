import * as platformBrowser from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

platformBrowser.bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
