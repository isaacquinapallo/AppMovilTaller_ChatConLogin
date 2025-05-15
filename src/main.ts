import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.example';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
import {provideFirestore, getFirestore} from '@angular/fire/firestore'



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

defineCustomElements(window);
