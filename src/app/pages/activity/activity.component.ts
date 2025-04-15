import { Component, inject, OnInit, signal } from '@angular/core';
import { Step, StepItem, StepPanel, Stepper } from 'primeng/stepper';
import { DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { ref } from 'firebase/storage';
import { Storage, listAll, deleteObject, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Button } from 'primeng/button';
import { from, Observable, of, switchMap, timestamp } from 'rxjs';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { catchError } from 'rxjs/operators';
import { Divider } from 'primeng/divider';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { Fluid } from 'primeng/fluid';
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { DataView } from 'primeng/dataview';
import { SelectButton } from 'primeng/selectbutton';
import { Skeleton } from 'primeng/skeleton';
import { Tag } from 'primeng/tag';
import { environment } from '@env/environment';
import { Tooltip } from 'primeng/tooltip';
import { ActivityHttpService } from '@modules/activity/activity-http.service';
import { ActivityInterface } from '@interfaces';
import { Message } from 'primeng/message';

@Component({
    selector: 'app-activity',
    imports: [FormsModule, Button, DataView, NgClass, Tag, Divider, Tooltip, DatePipe, Message],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.scss',
    standalone: true
})
export class ActivityComponent implements OnInit {
    protected readonly _authService = inject(AuthService);
    protected readonly activityHttpService = inject(ActivityHttpService);
    layout: 'grid' | 'list' = 'grid';

    activities: ActivityInterface[] = [];
    userActivities: ActivityInterface[] = [];

    options: string[] = ['list', 'grid'];

    constructor() {}

    ngOnInit() {
        switch (this._authService.additionalInformation.codigoActividad) {
            case '1':
                this.activities = [
                    {
                        id: '1',
                        code: '1',
                        label: 'Protocolo',
                        name: 'Campañas de promoción turística nacional e internacional',
                        description: 'Organizar campañas de marketing para promocionar destinos turísticos, tanto a nivel local como internacional, a través de plataformas digitales, medios de comunicación y agencias de viajes.',
                        category: 'Accessories',
                        completed: false,
                        sort: 1
                    },
                    {
                        id: '2',
                        code: '2',
                        label: 'Cronograma',
                        name: 'Festivales y eventos culturales',
                        description:
                            'Apoyar la organización de festivales de música, danza, cine, gastronomía, y tradiciones locales. Estos eventos no solo atraen turistas, sino que también ayudan a preservar y divulgar las costumbres y tradiciones locales.',
                        category: 'Accessories',
                        completed: false,
                        sort: 2
                    }
                ];
                break;

            case '2':
                this.activities = [
                    {
                        id: '1',
                        code: '1',
                        label: 'Protocolo',
                        name: 'Campañas de promoción turística nacional e internacional',
                        description: 'Organizar campañas de marketing para promocionar destinos turísticos, tanto a nivel local como internacional, a través de plataformas digitales, medios de comunicación y agencias de viajes.',
                        category: 'Accessories',
                        completed: false,
                        sort: 1
                    },
                    {
                        id: '2',
                        code: '2',
                        label: 'Algo',
                        name: 'Festivales y eventos culturales',
                        description:
                            'Apoyar la organización de festivales de música, danza, cine, gastronomía, y tradiciones locales. Estos eventos no solo atraen turistas, sino que también ayudan a preservar y divulgar las costumbres y tradiciones locales.',
                        category: 'Accessories',
                        completed: false,
                        sort: 2
                    },
                    {
                        id: '3',
                        code: '3',
                        label: 'Cronograma',
                        name: 'Rutas turísticas temáticas',
                        description: 'Desarrollar rutas turísticas basadas en diferentes temas como el ecoturismo, turismo histórico, gastronómico, de aventura, o de bienestar, ofreciendo experiencias únicas y diferenciadas.',
                        category: 'Accessories',
                        completed: false,
                        sort: 3
                    },
                    {
                        id: '4',
                        code: '4',
                        label: 'Cronograma',
                        name: 'Rutas turísticas temáticas',
                        description: 'Desarrollar rutas turísticas basadas en diferentes temas como el ecoturismo, turismo histórico, gastronómico, de aventura, o de bienestar, ofreciendo experiencias únicas y diferenciadas.',
                        category: 'Accessories',
                        completed: false,
                        sort: 4
                    }
                ];
                break;
        }

        this.verifyActivities();
    }

    verifyActivities2() {
        this.activityHttpService.findActivitiesByAdditionalInformation(this._authService.additionalInformation.id).subscribe({
            next: (response) => {
                console.log(response);
                this.userActivities = response;

                if (response.length > 0) {
                    this.activities = this.activities.filter((activityLocal) => {
                        console.log(response.find((activityBase) => activityBase.code === activityLocal.code) == undefined);

                        return response.find((activityBase) => activityBase.code === activityLocal.code) == undefined;
                    });
                }
            }
        });

        console.log(this.activities);
    }

    verifyActivities() {
        this.activityHttpService.findActivitiesByAdditionalInformation(this._authService.additionalInformation.id).subscribe({
            next: (response) => {
                console.log(response);
                this.userActivities = response;
                this.userActivities.forEach((activityBase) => {
                    const index = this.activities.findIndex((activityLocal) => activityLocal.code === activityBase.code);
                    if (index > -1) {
                        this.activities[index].completed = true;
                        this.activities[index].registeredAt = activityBase.registeredAt;
                    }
                });
            }
        });

        console.log(this.activities);
    }

    getSeverity(product: ActivityInterface) {
        switch (product.completed) {
            case true:
                return 'success';

            case false:
                return 'warn';

            default:
                return undefined;
        }
    }

    downloadFile(activity: ActivityInterface) {
        if (this._authService.additionalInformation.codigoActividad === '1') {
            switch (activity.code) {
                case '1':
                    window.open(`${environment.URL}/files/activities/1/provinces/${this._authService.additionalInformation.idProvincia}.pdf`, '_blank');
                    break;
                case '2':
                    window.open(`${environment.URL}/files/activities/1/protocol.pdf`, '_blank');
                    break;
            }
        }

        if (this._authService.additionalInformation.codigoActividad === '2') {
            switch (activity.code) {
                case '1':
                    window.open(`${environment.URL}/files/activities/2/1.pdf`, '_blank');
                    break;
                case '2':
                    window.open(`${environment.URL}/files/activities/2/2.pdf`, '_blank');
                    break;
                case '3':
                    window.open(`${environment.URL}/files/activities/2/3.pdf`, '_blank');
                    break;
                case '4':
                    window.open(`${environment.URL}/files/activities/2/4.pdf`, '_blank');
                    break;
            }
        }

        this.activityHttpService.create(this._authService.additionalInformation.id, activity).subscribe({
            next: (response) => {
                this.verifyActivities();
            }
        });
    }

    protected readonly PrimeIcons = PrimeIcons;
}
