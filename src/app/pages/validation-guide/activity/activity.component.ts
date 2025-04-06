import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { Fluid } from 'primeng/fluid';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageDirective } from '@utils/directives/error-message.directive';
import { LabelDirective } from '@utils/directives/label.directive';
import { UserHttpService } from '@modules/auth/user-http.service';
import { AuthService } from '@modules/auth/auth.service';
import { differenceInYears } from 'date-fns';
import { Divider } from 'primeng/divider';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { Toolbar } from 'primeng/toolbar';
import { PrimeIcons } from 'primeng/api';
import { SkeletonComponent } from '@utils/components/skeleton/skeleton.component';
import { CoreService } from '@utils/services/core.service';
import { Message } from 'primeng/message';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'app-activity',
    imports: [Button, Divider, ErrorMessageDirective, Fluid, InputText, LabelDirective, ReactiveFormsModule, Select, SkeletonComponent, Toolbar, Message, Checkbox],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.scss'
})
export class ActivityComponent  implements OnInit {
    @Output() next: EventEmitter<null> = new EventEmitter();
    @Output() previous: EventEmitter<null> = new EventEmitter();

    private readonly _formBuilder = inject(FormBuilder);
    private readonly _authService = inject(AuthService);
    private readonly _userHttpService = inject(UserHttpService);
    private readonly _customMessageService = inject(CustomMessageService);
    protected form!: FormGroup;
    protected readonly _coreService = inject(CoreService);
    protected readonly PrimeIcons = PrimeIcons;
    protected checked: FormControl = new FormControl(false);

    constructor() {
        this.buildForm();

        this.checked.valueChanges.subscribe({
            next: (value) => {
                if (value) {
                    this.form.enable();
                }else{
                    this.form.disable();
                }
            }
        });
    }

    ngOnInit() {
        this.findPersonalInformation();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            type: ['asd', [Validators.required]],
            number: [null, [Validators.required]],
            shortName: [null, [Validators.required]]
        });

        this.form.disable();
    }

    findPersonalInformation() {
        this._userHttpService.findPersonalInformation(this._authService.auth.id).subscribe({
            next: (response) => {
                this.form.patchValue(response);
            }
        });
    }

    onSubmit() {
        if (this.validateForm) {
            this.updatePersonalInformation();
        }
    }

    get validateForm(): boolean {
        const errors = [];

        if (this.typeField?.invalid) errors.push('Tipo de cuenta');
        if (this.numberField?.invalid) errors.push('Número de cuenta');
        if (this.shortNameField?.invalid) errors.push('Nombre corto');

        if (errors.length > 0) {
            this._customMessageService.showFormErrors(errors);
            this.form.markAsTouched();
            return false;
        }

        return true;
    }

    updatePersonalInformation() {
        this._userHttpService.updatePersonalInformation(this._authService.auth.id, this.form.value).subscribe({
            next: () => {
                this.next.emit(null);
            }
        });
    }

    get typeField(): AbstractControl | null {
        return this.form.get('type');
    }

    get numberField(): AbstractControl | null {
        return this.form.get('number');
    }

    get shortNameField(): AbstractControl | null {
        return this.form.get('shortName');
    }
}
