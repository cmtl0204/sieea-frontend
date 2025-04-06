import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Theme from '@primeng/themes/material';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';
// import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '@env/environment';
import { HttpInterceptorProviders } from './app/interceptors';
import { definePreset } from '@primeng/themes';

const MyPreset = definePreset(Theme, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    }
});

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
                preset: MyPreset,
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
