import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { ActivityInterface, HttpResponseInterface } from '@interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateHttpService {
    private readonly _httpClient = inject(HttpClient);
    private readonly _apiUrl = `${environment.API_URL}/states`;
    private readonly _customMessageService = inject(CustomMessageService);

    findStatesByIdentification(identification: string): Observable<ActivityInterface[]> {
        const url = `${this._apiUrl}`;

        const params = new HttpParams().append('identification', identification);

        return this._httpClient.get<HttpResponseInterface>(url, { params }).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    createCommentary(identification: string, commentary: string): Observable<ActivityInterface[]> {
        const url = `${this._apiUrl}/commentaries`;

        const params = new HttpParams().append('identification', identification);

        return this._httpClient.post<HttpResponseInterface>(url, {commentary}, { params }).pipe(
            map((response) => {
                this._customMessageService.showSuccess({ summary: response.title, detail: response.message });
                return response.data;
            })
        );
    }

    createReview(identification: string): Observable<ActivityInterface[]> {
        const url = `${this._apiUrl}/reviews`;

        const params = new HttpParams().append('identification', identification);

        return this._httpClient.post<HttpResponseInterface>(url, null, { params }).pipe(
            map((response) => {
                this._customMessageService.showSuccess({ summary: response.title, detail: response.message });
                return response.data;
            })
        );
    }
}
