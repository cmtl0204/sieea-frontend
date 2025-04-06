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
    selector: 'app-bank-detail',
    imports: [Button, Divider, ErrorMessageDirective, Fluid, InputText, LabelDirective, ReactiveFormsModule, Select, SkeletonComponent, Toolbar, Message, Checkbox],
    templateUrl: './bank-detail.component.html',
    styleUrl: './bank-detail.component.scss'
})
export class BankDetailComponent implements OnInit {
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
            additionalInformation: this.additionalInformationForm
        });

        this.form.disable();
    }

    get additionalInformationForm() {
        return this._formBuilder.group({
            accountType: [null, [Validators.required]],
            accountNumber: [null, [Validators.required]],
            accountName: [null, [Validators.required]],
            accountChanged: [null, [Validators.required]]
        });
    }

    findPersonalInformation() {
        this._userHttpService.findPersonalInformation(this._authService.auth.id).subscribe({
            next: (response) => {
                console.log(response);
                this.form.patchValue(response);
                console.log(this.form.value);
                console.log(this.accountChangedField?.value);
            }
        });
    }

    onSubmit() {
        if (this.validateForm) {
            this.updateBankDetail();
        }
    }

    get validateForm(): boolean {
        const errors = [];

        if (this.accountTypeField?.invalid) errors.push('Tipo de cuenta');
        if (this.accountNumberField?.invalid) errors.push('Número de cuenta');
        if (this.accountNameField?.invalid) errors.push('Nombre corto');

        if (errors.length > 0) {
            this._customMessageService.showFormErrors(errors);
            this.form.markAsTouched();
            return false;
        }

        return true;
    }

    updateBankDetail() {
        this._userHttpService.updateBankDetail(this._authService.auth.id, this.form.value).subscribe({
            next: () => {
                this.next.emit(null);
            }
        });
    }

    get additionalInformationFormField(): FormGroup {
        return this.form.get('additionalInformation') as FormGroup;
    }

    get accountTypeField(): AbstractControl | null {
        return this.additionalInformationFormField.get('accountType');
    }

    get accountNumberField(): AbstractControl | null {
        return this.additionalInformationFormField.get('accountNumber');
    }

    get accountNameField(): AbstractControl | null {
        return this.additionalInformationFormField.get('accountName');
    }

    get accountChangedField(): AbstractControl | null {
        return this.additionalInformationFormField.get('accountChanged');
    }
}
