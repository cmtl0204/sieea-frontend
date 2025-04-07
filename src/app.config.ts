import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';
// import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { HttpInterceptorProviders } from './app/interceptors';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            }),
            withEnabledBlockingInitialNavigation()
        ),
        // importProvidersFrom(RecaptchaV3Module),
        // {
        //     provide: RECAPTCHA_V3_SITE_KEY,
        //     useValue: environment.RECAPTCHA_SITE_KEY,
        // },
        provideHttpClient(
            withInterceptors(HttpInterceptorProviders)
        ),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: { darkModeSelector: '.app-dark' }
            }
        }),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: 'planting-future',
                appId: '1:655381624583:web:300977d361d4aa6519f7a2',
                databaseURL: 'https://planting-future-default-rtdb.firebaseio.com',
                storageBucket: 'planting-future.firebasestorage.app',
                apiKey: 'AIzaSyDc_VU6TXCzPJJJy2NxN6WLOUfUyM9Y76c',
                authDomain: 'planting-future.firebaseapp.com',
                messagingSenderId: '655381624583',
                measurementId: 'G-VTB1ZS7J7Z'
            })
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        MessageService
    ]
};
