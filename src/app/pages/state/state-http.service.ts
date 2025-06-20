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

    findStatesByAdditionalInformation(additionalInformationId: string): Observable<ActivityInterface[]> {
        const url = `${this._apiUrl}`;

        const params = new HttpParams().append('additionalInformationId', additionalInformationId);

        return this._httpClient.get<HttpResponseInterface>(url, { params }).pipe(
            map((response) => {
                return response.data;
            })
        );
    }

    create(additionalInformationId: string, payload: ActivityInterface): Observable<ActivityInterface[]> {
        const url = `${this._apiUrl}`;

        const params = new HttpParams().append('additionalInformationId', additionalInformationId);

        return this._httpClient.post<HttpResponseInterface>(url, payload, { params }).pipe(
            map((response) => {
                return response.data;
            })
        );
    }
}
