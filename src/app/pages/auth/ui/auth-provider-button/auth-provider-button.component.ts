import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { AuthHttpService } from '../../auth-http.service';
import {
    UserCredential
} from '@angular/fire/auth';
import { CustomMessageService } from '../../../../utils/services/custom-message.service';
import { handleError } from '../../../../utils/exceptions/handle-error';

@Component({
    selector: 'app-auth-provider-button',
    templateUrl: 'auth-provider-button.component.html',
    standalone: true,
    imports: [
        Button
    ]
})
export class GoogleComponent {
    private readonly _authHttpService = inject(AuthHttpService);
    private readonly _customMessageService = inject(CustomMessageService);

    signInWithGoogle() {
        this._authHttpService.signInWithPopup('google').then((userCredential: UserCredential) => {
            const user = userCredential.user;

            // También puedes ver todas las propiedades en la consola
        }).catch(err => {
            this._customMessageService.showError({ summary: 'Error al acceder', detail: handleError(err) });
        });
    }

    signInWithMicrosoft() {
        this._authHttpService.signInWithPopup('microsoft').then((userCredential: UserCredential) => {
            const user = userCredential.user;

            // También puedes ver todas las propiedades en la consola
        }).catch(err => {
            console.log(err);
        });
    }

    signInWithFacebook() {
        this._authHttpService.signInWithPopup('facebook').then((userCredential: UserCredential) => {
            const user = userCredential.user;

            // También puedes ver todas las propiedades en la consola
        }).catch(err => {
            console.log(err);
        });
    }
}
