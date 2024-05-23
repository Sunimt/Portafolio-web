import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
      provideFirebaseApp(() => 
      initializeApp({  
      apiKey: "AIzaSyCOkufpsGfWB0grqs-CViUR65VrlTbWLiQ",
      authDomain: "portafolioweb-5503b.firebaseapp.com",
      projectId: "portafolioweb-5503b",
      storageBucket: "portafolioweb-5503b.appspot.com",
      messagingSenderId: "191063554590",
      appId: "1:191063554590:web:decb222604b7807083cc0f" })),
    provideFirestore(() => getFirestore()),
    ]
};

