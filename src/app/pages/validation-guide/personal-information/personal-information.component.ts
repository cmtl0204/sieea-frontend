import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { Fluid } from 'primeng/fluid';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

@Component({
    selector: 'app-personal-information',
    imports: [Button, Fluid, InputText, Select, FormsModule, ErrorMessageDirective, LabelDirective, ReactiveFormsModule, Divider, Toolbar, SkeletonComponent],
    templateUrl: './personal-information.component.html',
    styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent implements OnInit {
    @Output() next: EventEmitter<null> = new EventEmitter();
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _authService = inject(AuthService);
    private readonly _userHttpService = inject(UserHttpService);
    private readonly _customMessageService = inject(CustomMessageService);
    protected form!: FormGroup;
    protected readonly _coreService = inject(CoreService);

    constructor() {
        this.buildForm();
    }

    ngOnInit() {
        this.findPersonalInformation();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            identification: [null, [Validators.required]],
            birthdate: [null, [Validators.required]],
            age: [null, [Validators.required]],
            name: [null, [Validators.required]],
            lastname: [null, [Validators.required]],
            gender: [null, [Validators.required]],
            nationality: [null, [Validators.required]],
            cellPhone: [null, [Validators.required]],
            email: [null, [Validators.required]],
            address: this.addressForm,
            additionalInformation: this.additionalInformationForm
        });

        this.form.disable();

        this.parishField?.enable();
        this.neighborhoodField?.enable();
        this.mainStreetField?.enable();
        this.secondaryStreetField?.enable();
    }

    findPersonalInformation() {
        this._userHttpService.findPersonalInformation(this._authService.auth.id).subscribe({
            next: (response) => {
                console.log(response);
                this.form.patchValue(response);

                if (this.birthdateField?.value) {
                    this.ageField?.setValue(differenceInYears(new Date(), new Date(this.birthdateField.value)));
                }
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

        if (this.neighborhoodField?.invalid) errors.push('Barrio');
        if (this.mainStreetField?.invalid) errors.push('Calle principal');
        if (this.secondaryStreetField?.invalid) errors.push('Calle secundaria');

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
                this.next.next(null);
            }
        });
    }

    get addressForm() {
        return this._formBuilder.group({
            province: [null, [Validators.required]],
            canton: [null, [Validators.required]],
            parish: [null, [Validators.required]],
            neighborhood: [null, [Validators.required]],
            mainStreet: [null, [Validators.required]],
            secondaryStreet: [null, [Validators.required]]
        });
    }

    get additionalInformationForm() {
        return this._formBuilder.group({
            contactName: [null, [Validators.required]],
            contactPhone: [null, [Validators.required]]
        });
    }

    get identificationField(): AbstractControl | null {
        return this.form.get('identification');
    }

    get birthdateField(): AbstractControl | null {
        return this.form.get('birthdate');
    }

    get ageField(): AbstractControl | null {
        return this.form.get('age');
    }

    get nameField(): AbstractControl | null {
        return this.form.get('name');
    }

    get lastnameField(): AbstractControl | null {
        return this.form.get('lastname');
    }

    get genderField(): AbstractControl | null {
        return this.form.get('gender');
    }

    get nationalityField(): AbstractControl | null {
        return this.form.get('nationality');
    }

    get cellPhoneField(): AbstractControl | null {
        return this.form.get('cellPhone');
    }

    get emailField(): AbstractControl | null {
        return this.form.get('email');
    }

    get addressFormField(): FormGroup {
        return this.form.get('address') as FormGroup;
    }

    get provinceField(): AbstractControl | null {
        return this.addressFormField.get('province');
    }

    get cantonField(): AbstractControl | null {
        return this.addressFormField.get('canton');
    }

    get parishField(): AbstractControl | null {
        return this.addressFormField.get('parish');
    }

    get neighborhoodField(): AbstractControl | null {
        return this.addressFormField.get('neighborhood');
    }

    get mainStreetField(): AbstractControl | null {
        return this.addressFormField.get('mainStreet');
    }

    get secondaryStreetField(): AbstractControl | null {
        return this.addressFormField.get('secondaryStreet');
    }

    get additionalInformationFormField(): FormGroup {
        return this.form.get('additionalInformation') as FormGroup;
    }

    get contactNameField(): AbstractControl | null {
        return this.additionalInformationFormField.get('contactName');
    }

    get contactPhoneField(): AbstractControl | null {
        return this.additionalInformationFormField.get('contactPhone');
    }

    protected readonly PrimeIcons = PrimeIcons;
}
