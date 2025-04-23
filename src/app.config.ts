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
import { environment } from '@env/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEs); // 👈 Esto es importante

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
        provideHttpClient(withInterceptors(HttpInterceptorProviders)),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: { darkModeSelector: '.app-dark' }
            }
        }),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideStorage(() => getStorage()),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        MessageService,
        { provide: LOCALE_ID, useValue: 'es' },
    ]
};
