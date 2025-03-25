import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, OAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { SignInInterface, SignUpInterface } from './interfaces';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@modules/auth/auth.service';
import { SignInResponseInterface } from '@modules/auth/interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private readonly _auth = inject(Auth);
    private readonly _authService = inject(AuthService);
    private readonly _httpClient = inject(HttpClient);
    private readonly _apiUrl = `${environment.API_URL}/auth`;

    signUp(payload: SignUpInterface) {
        return createUserWithEmailAndPassword(this._auth, payload.email, payload.password);
    }

    signIn(payload: SignInInterface) {
        const url = `${this._apiUrl}/login`;

        return this._httpClient.post<SignInResponseInterface>(url, payload).pipe(
            map((response) => {
                this._authService.accessToken = response.data.accessToken;

                this._authService.auth = response.data.auth;

                this._authService.roles = response.data.auth.roles;

                if (response.data.auth.roles.length === 1) {
                    this._authService.role = response.data.auth.roles[0];
                }

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
}
