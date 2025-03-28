import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, OAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { HttpResponseInterface, SignInInterface, SignUpInterface } from './interfaces';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@modules/auth/auth.service';
import { SignInResponseInterface } from '@modules/auth/interfaces';
import { MessageService } from 'primeng/api';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { CoreService } from '@utils/services/core.service';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private readonly _auth = inject(Auth);
    private readonly _authService = inject(AuthService);
    private readonly _httpClient = inject(HttpClient);
    private readonly _apiUrl = `${environment.API_URL}/auth`;
    private readonly _coreService = inject(CoreService);
    private readonly _customMessageService = inject(CustomMessageService);

    signUp(payload: SignUpInterface) {
        return createUserWithEmailAndPassword(this._auth, payload.email, payload.password);
    }

    signIn(payload: SignInInterface) {
        const url = `${this._apiUrl}/sign-in`;

        return this._httpClient.post<SignInResponseInterface>(url, payload).pipe(
            map((response) => {
                this._authService.accessToken = response.data.accessToken;

                const { roles, ...auth } = response.data.auth;

                this._authService.auth = auth;

                this._authService.roles = roles;

                if (response.data.auth.roles.length === 1) {
                    this._authService.role = response.data.auth.roles[0];
                }

                this._customMessageService.showSuccess({ summary: response.title, detail: response.message });

                return response;
            })
        );
    }

    signInWithPopup(providerName: string) {
        let provider = null;

        switch (providerName) {
            case 'google':
                provider = new GoogleAuthProvider();
                break;

            case 'microsoft':
                provider = new OAuthProvider('microsoft.com');
                break;

            case 'facebook':
                provider = new FacebookAuthProvider();
                break;

            default:
                provider = new GoogleAuthProvider();
        }

        provider.setCustomParameters({ prompt: 'select_account' });

        return signInWithPopup(this._auth, provider);
    }

    verifyRecaptcha(token: string) {
        const url = `${this._apiUrl}/verify-recaptcha`;

        const params = new HttpParams().set('token', token);

        return this._httpClient.post<HttpResponseInterface>(url, null, { params: params }).pipe(
            map((response) => {
                if (!response) {
                    this._customMessageService.showError({
                        summary: 'No pasó la validación de reCAPTCHA',
                        detail: 'Por favor vuelva a intentar'
                    });
                }

                return response.data;
            })
        );
    }
}
