import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { environment } from '@env/environment';
import { ActivityHttpService } from '@modules/activity/activity-http.service';
import { ActivityInterface } from '@interfaces';
import { Message } from 'primeng/message';
import { StateHttpService } from '@modules/state/state-http.service';
import { Textarea } from 'primeng/textarea';
import { Popover } from 'primeng/popover';
import { Dialog } from 'primeng/dialog';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-state',
    imports: [FormsModule, Button, DataView, NgClass, Tag, Divider, DatePipe, Message, ReactiveFormsModule, Textarea, Popover, Dialog, InputGroup, InputGroupAddon, InputText],
    templateUrl: './state.component.html',
    styleUrl: './state.component.scss',
    standalone: true
})
export class StateComponent implements OnInit {
    protected readonly _authService = inject(AuthService);
    protected readonly _customMessageService = inject(CustomMessageService);
    protected readonly stateHttpService = inject(StateHttpService);
    layout: 'grid' | 'list' = 'grid';
    protected readonly PrimeIcons = PrimeIcons;
    protected commentary: FormControl = new FormControl('');

    userState!: any;

    options: string[] = ['list', 'grid'];

    protected phones: any[] = [];
    protected filteredPhones: any = null;
    protected isVisible = false;

    constructor() {}

    ngOnInit() {
        this.findStatesByCedula();
        this.loadPhones();
    }

    findStatesByCedula() {
        this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({
            next: (response) => {
                this.userState = response[0];

                if (this.userState?.comentario) {
                    this.commentary.patchValue(this.userState.comentario);
                    this.commentary.disable();
                }
            }
        });
    }

    filterPhones(actividad: string) {
        this.createReview();
        this.filteredPhones = this.phones.find((phone) => phone.actividad.toLowerCase() === actividad.toLowerCase());
        this.isVisible = true;
    }

    loadPhones() {
        // this.phones = [
        //     {
        //         province: 'AZUAY',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'GALÁPAGOS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'ZAMORA CHINCHIPE',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'SANTA ELENA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'MANABÍ',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'LOJA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'GUAYAS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'NAPO',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'PICHINCHA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'ESMERALDAS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'CARCHI',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'COTOPAXI',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'IMBABURA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'BOLÍVAR',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'SANTO DOMINGO DE LOS TSÁCHILAS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'EL ORO',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'SUCUMBÍOS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'TUNGURAHUA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'CAÑAR',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'MORONA SANTIAGO',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'ORELLANA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'PASTAZA',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'CHIMBORAZO',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'LOS RÍOS',
        //         phones: ['0987654321', '0987654322']
        //     },
        //     {
        //         province: 'QUITO',
        //         phones: ['0987654321', '0987654322']
        //     }
        // ];

        this.phones = [
            {
                label: 'Contacto Curso en Línea',
                actividad: 'curso',
                phones: ['0939426332']
            },
            {
                label: 'Contacto Levantamiento Gasolineras Abril',
                actividad: 'levantamiento_abril',
                phones: ['0967028974']
            },
            {
                label: 'Contacto Levantamiento Promoción Mayo',
                actividad: 'levantamiento_mayo',
                phones: ['0982094520']
            },
            {
                label: 'Preservación',
                actividad: 'preservacion_abril',
                phones: ['0983289118']
            },
            {
                label: 'Preservación',
                actividad: 'preservacion_mayo',
                phones: ['0983289118']
            },
        ];
    }

    createCommentary() {
        this.stateHttpService.createCommentary(this._authService.auth.identification, this.commentary.value).subscribe({
            next: (response) => {
                this.findStatesByCedula();
            }
        });
    }

    linkToEEA() {
        window.open('https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf', '_blank');
    }

    createReview() {
        this.stateHttpService.createReview(this._authService.auth.identification).subscribe();
    }
}
