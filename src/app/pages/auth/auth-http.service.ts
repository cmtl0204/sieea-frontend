import { inject, Injectable } from '@angular/core';
import {
    Auth,
    GoogleAuthProvider,
    OAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup
} from '@angular/fire/auth';
import { SignInInterface, SignUpInterface } from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private readonly _auth = inject(Auth);

    signUp(payload: SignUpInterface) {
        return createUserWithEmailAndPassword(this._auth, payload.email, payload.password);
    }

    signIn(payload: SignInInterface) {
        return signInWithEmailAndPassword(this._auth, payload.email, payload.password);
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
