import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVMJgECJ3VhMhUSFgCbHzmk5w2ZEC5YBc',
  authDomain: 'wedding-dresses-c095d.firebaseapp.com',
  databaseURL: 'https://wedding-dresses-c095d-default-rtdb.firebaseio.com',
  projectId: 'wedding-dresses-c095d',
  storageBucket: 'wedding-dresses-c095d.appspot.com',
  messagingSenderId: '623119047250',
  appId: '1:623119047250:web:b57a35c326769a29179d8b',
  measurementId: 'G-WWSHRKLER3',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};

function importProvidersFrom(providers: any[]): any[] {
  return providers;
}
