import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
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
}
