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

@Component({
    selector: 'app-state',
    imports: [FormsModule, Button, DataView, NgClass, Tag, Divider, DatePipe, Message, ReactiveFormsModule, Textarea],
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

    constructor() {}

    ngOnInit() {
        this.findStatesByCedula();
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

    createCommentary() {
        this.stateHttpService.createCommentary(this._authService.auth.identification, this.commentary.value).subscribe({
            next: (response) => {
                this.findStatesByCedula();
            }
        });
    }
}
