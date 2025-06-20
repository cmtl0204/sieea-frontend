import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { Button } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { Tag } from 'primeng/tag';
import { Message } from 'primeng/message';
import { StateHttpService } from '@modules/state/state-http.service';
import { Textarea } from 'primeng/textarea';
import { InputText } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'app-state',
    imports: [FormsModule, Button, Tag, Message, ReactiveFormsModule, Textarea, InputText],
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

    options: string[] = ['list', 'grid'];

    constructor() {
        this.identification.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
            if (value && value.length == 10) {
                this.findStatesByCedula();
            }
        });
    }

    ngOnInit() {
        this.findStatesByCedula();
    }

    findStatesByCedula() {
        this.stateHttpService.findStatesByIdentification(this.identification.value).subscribe({
            next: (response) => {
                this.userState = response;
                if(!this.userState) {
                    this._customMessageService.showError({ summary: 'Cédula no encontrada', detail: 'Por favor intente de nuevo' });
                }
            }
        });
    }
}
