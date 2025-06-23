import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { Tag } from 'primeng/tag';
import { StateHttpService } from '@modules/state/state-http.service';
import { InputText } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';
import { Select } from 'primeng/select';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { JsonPipe } from '@angular/common';
import { Fluid } from 'primeng/fluid';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';
import { Textarea } from 'primeng/textarea';

@Component({
    selector: 'app-state',
    imports: [FormsModule, Tag, ReactiveFormsModule, InputText, AutoComplete, JsonPipe, Fluid, Divider, Button, Textarea],
    templateUrl: './internal-state.component.html',
    styleUrl: './internal-state.component.scss',
    standalone: true
})
export class InternalStateComponent implements OnInit {
    protected readonly _authService = inject(AuthService);
    protected readonly _customMessageService = inject(CustomMessageService);
    protected readonly stateHttpService = inject(StateHttpService);
    layout: 'grid' | 'list' = 'grid';
    protected readonly PrimeIcons = PrimeIcons;
    protected identification: FormControl = new FormControl('');

    userState!: any;
    userStates: any[] = [];

    options: string[] = ['list', 'grid'];

    constructor() {
        this.identification.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
            if (value?.cedula) {
                this.userState = value;
            }
        });
    }

    ngOnInit() {}

    findStatesByCedula(search: AutoCompleteCompleteEvent) {
        this.userState = null;

        this.stateHttpService.findStatesByIdentification(search.query).subscribe({
            next: (response) => {
                this.userStates = response;

                if (response && response.length == 1) {
                    this.userState = response[0];
                }

                if (response.length == 0) {
                    this._customMessageService.showError({
                        summary: 'Beneficiario no encontrado',
                        detail: 'Por favor intente de nuevo'
                    });
                }
            }
        });
    }
}
