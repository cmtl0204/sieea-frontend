import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, OAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { HttpResponseInterface, SignInInterface, SignUpInterface } from './interfaces';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '@modules/auth/auth.service';
import { SignInResponseInterface } from '@modules/auth/interfaces';
import { MessageService } from 'primeng/api';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { CoreService } from '@utils/services/core.service';

@Injectable({
    providedIn: 'root'
})
export class UserHttpService {
    private readonly _httpClient = inject(HttpClient);
    private readonly _apiUrl = `${environment.API_URL}/users`;
    private readonly _customMessageService = inject(CustomMessageService);
    protected readonly _coreService = inject(CoreService);

    findPersonalInformation(id: string) {
        return this._httpClient.get<HttpResponseInterface>(`${this._apiUrl}/${id}/personal-information`).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    updatePersonalInformation(id: string, payload: any) {
        return this._httpClient.put<HttpResponseInterface>(`${this._apiUrl}/${id}/personal-information`, payload).pipe(
            tap((response) => {
                this._customMessageService.showHttpSuccess(response);
            })
        );
    }

    updateBankDetail(id: string, payload: any) {
        return this._httpClient.put<HttpResponseInterface>(`${this._apiUrl}/${id}/bank-detail`, payload).pipe(
            tap((response) => {
                this._customMessageService.showHttpSuccess(response);
            })
        );
    }
}
