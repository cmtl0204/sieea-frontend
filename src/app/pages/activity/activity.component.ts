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
    imports: [FormsModule, Button, DataView, NgClass, Tag, Divider, DatePipe, Message],
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
                        code: 'protocol1',
                        label: 'Protocolo',
                        name: '1. PROTOCOLO A EJECUTAR DE LA ACTIVIDAD DE PRESERVACIÓN DE SITIOS DE INTERÉS TURÍSTICO EN EL MARCO DEL MECANISMO "ECUATORIANOS EN ACCIÓN"',
                        description:
                            `Promover la participación de los beneficiarios del mecanismo Ecuatorianos en Acción en la
                             preservación de sitios de interés turístico en las jornadas convocadas por el Ministerio de Turismo`,
                        category: '1',
                        completed: false,
                        sort: 1
                    },
                    {
                        id: '2',
                        code: '2',
                        label: 'Cronograma',
                        name: 'Cronograma',
                        description: 'Cronograma de activaciones "Ecuatorianos en Acción"',
                        category: '1',
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
                        name: '1. PROTOCOLO INTERNO PARA LA DEPURACIÓN - CONSOLIDACIÓN DEL LEVANTAMIENTO DE INFORMACIÓN PROMOCIÓN TURÍSTICA',
                        description: `Recopilar información sobre el conocimiento de campañas promocionales nacionales, así como preferencias e intención de viaje en el Ecuador`,
                        category: '2',
                        completed: false,
                        sort: 1
                    },
                    {
                        id: '2',
                        code: '2',
                        label: 'Protocolo',
                        name: `2. PROTOCOLO A EJECUTAR POR PARTE DE LOS BENEFICIARIOS DEL PROGRAMA "ECUATORIANOS EN ACCIÓN"`,
                        description: `Recopilar información a nivel continental, en el marco del mecanismo "Ecuatorianos en Acción",
                            con base en el Acuerdo No. 20150021 respecto a la declaratoria de los baños de las gasolineras,
                            como sitios de interés turístico`,
                        category: '2',
                        completed: false,
                        sort: 2
                    },
                    {
                        id: '3',
                        code: '3',
                        label: 'Base Gasolineras',
                        name: '2.1 Base de datos de Gasolineras',
                        description: `Actividad - levantamiento de información en baños de gasolineras a nivel nacional con excepción de la provincia de galápagos`,
                        category: '2',
                        completed: false,
                        sort: 3
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
                return undefined;

            case false:
                return 'danger';

            default:
                return undefined;
        }
    }

    downloadFile(activity: ActivityInterface) {
        console.log(activity);
        if (this._authService.additionalInformation.codigoActividad === '1') {
            switch (activity.code) {
                case 'protocol1':
                    window.open(`${environment.URL}/files/activities/1/protocol1.pdf`, '_blank');
                    break;
                case '2':
                    window.open(`${environment.URL}/files/activities/1/provinces/${this._authService.additionalInformation.idProvincia}.pdf`, '_blank');
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
