import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { AuthHttpService } from '../../auth-http.service';
import { environment } from '@env/environment';
// import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { concatMap, debounceTime, delay, distinctUntilChanged, of } from 'rxjs';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { CoreService } from '@utils/services/core.service';
import { Card } from 'primeng/card';
import { ErrorMessageDirective } from '@utils/directives/error-message.directive';
import { LabelDirective } from '@utils/directives/label.directive';
import { DatePickerModule } from 'primeng/datepicker';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { Divider } from 'primeng/divider';
import { InputMask } from 'primeng/inputmask';
import { Select } from 'primeng/select';
import { KeyFilter } from 'primeng/keyfilter';
import { UserHttpService } from '@modules/auth/user-http.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        RouterModule,
        RippleModule,
        ReactiveFormsModule,
        AppFloatingConfigurator,
        DatePickerModule,
        Divider,
        Select,
        KeyFilter
        // RecaptchaModule
    ]
})
export default class SignInComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _customMessageService = inject(CustomMessageService);
    private readonly _authHttpService = inject(AuthHttpService);
    private readonly _userHttpService = inject(UserHttpService);
    private readonly _authService = inject(AuthService);
    protected readonly _coreService = inject(CoreService);
    private readonly _router = inject(Router);
    // private readonly _reCaptchaV3Service = inject(ReCaptchaV3Service);
    protected readonly environment = environment;
    protected form!: FormGroup;
    protected formErrors: string[] = [];
    protected validation: string = '';
    protected dateLabel: string = '';
    protected years: any[] = [];
    protected months: any[] = [];
    protected days: number[] = [];
    protected identification!: any;

    constructor() {
        this.buildForm();

        for (let i = 2035; i > 1950; i--) {
            this.years.push({ code: i, name: i });
        }

        this.days = Array.from({ length: 31 }, (_, index) => index + 1);

        this.months = [
            { code: 1, name: 'Enero' },
            { code: 2, name: 'Febrero' },
            { code: 3, name: 'Marzo' },
            { code: 4, name: 'Abril' },
            { code: 5, name: 'Mayo' },
            { code: 6, name: 'Junio' },
            { code: 7, name: 'Julio' },
            { code: 8, name: 'Agosto' },
            { code: 9, name: 'Septiembre' },
            { code: 10, name: 'Octubre' },
            { code: 11, name: 'Noviembre' },
            { code: 12, name: 'Diciembre' }
        ];

        this.usernameField.valueChanges.subscribe((value) => {
            if (value.length != 10) this.identification = null;
        });
    }

    buildForm() {
        this.form = this._formBuilder.group({
            username: [null, [Validators.required]],
            type: [null],
            year: [null, [Validators.required]],
            month: [null, [Validators.required]],
            day: [null, [Validators.required]]
        });

        this.validation = Math.floor(Math.random() * 2) + 1 === 1 ? 'issue' : 'expiration';

        if (this.validation === 'issue') {
            this.typeField?.setValue('issue');
            this.dateLabel = 'Fecha de emisión de la cédula:';
        }

        if (this.validation === 'expiration') {
            this.typeField?.setValue('expiration');
            this.dateLabel = 'Fecha de expiración de la cédula:';
        }
    }

    onSubmit() {
        if (!this.validateForm()) {
            this.form.markAllAsTouched();
            this._customMessageService.showFormErrors(this.formErrors);
            return;
        }

        // this.signIn();
        this.validate();
    }

    // signInBackup(){
    //     this._reCaptchaV3Service
    //         .execute('login')
    //         .pipe(
    //             concatMap((token) => this._authHttpService.verifyRecaptcha(token)),
    //
    //             concatMap((recaptchaResponse: any) => (recaptchaResponse?.success ? this._authHttpService.signIn(this.form.value) : of(null)))
    //         )
    //         .subscribe({
    //             next: (responseSignIn) => {
    //                 if (responseSignIn && this._authService.roles.length === 0) {
    //                     this._authService.removeLogin();
    //                     return;
    //                 }
    //
    //                 this._router.navigateByUrl('');
    //             }
    //         });
    // }

    signIn() {
        this._authHttpService.signIn(this.form.value).subscribe({
            next: (responseSignIn) => {
                if (responseSignIn && this._authService.roles.length === 0) {
                    this._authService.removeLogin();
                    return;
                }

                this._router.navigateByUrl('pages/validation-guide');
            }
        });
    }

    validate() {
        let year = this.identification.fechaEmision.substring(6, 10);
        let month = this.identification.fechaEmision.substring(3, 5);
        let day = this.identification.fechaEmision.substring(0, 2);

        if (this.typeField.value === 'expiration') {
            year = this.identification.fechaExpiracion.substring(6, 10);
            month = this.identification.fechaExpiracion.substring(3, 5);
            day = this.identification.fechaExpiracion.substring(0, 2);
        }

        if (parseInt(year) != this.yearField.value.code || parseInt(month) != this.monthField.value.code || parseInt(day) != this.dayField.value) {
            this._customMessageService.showError({ summary: this.dateLabel, detail: 'No coincide con su cédula' });
            return;
        }

        this._authHttpService.signInByValidationIdentification(this.usernameField.value).subscribe({
            next: (responseSignIn) => {
                this._router.navigateByUrl('/pages/users/profile');
            }
        });
    }

    validateForm() {
        this.formErrors = [];

        if (this.usernameField && this.usernameField.invalid) this.formErrors.push('Usuario');

        if (this.yearField && this.yearField.invalid) this.formErrors.push('Año');
        if (this.monthField && this.monthField.invalid) this.formErrors.push('Mes');
        if (this.dayField && this.dayField.invalid) this.formErrors.push('Día');

        return this.formErrors.length === 0 && this.form.valid;
    }

    verifyIdentification() {
        this.identification = null;

        if (this.usernameField.value.length == 10) {
            this._authHttpService.verifyIdentification(this.usernameField.value).subscribe({
                next: (response) => {
                    this.identification = response;
                }
            });
        } else {
            this._customMessageService.showError({
                summary: 'Debe ingresar una cédula válida',
                detail: 'Intente de nuevo'
            });
        }
    }

    get usernameField(): AbstractControl {
        return this.form.controls['username'];
    }

    get yearField(): AbstractControl {
        return this.form.controls['year'];
    }

    get monthField(): AbstractControl {
        return this.form.controls['month'];
    }

    get dayField(): AbstractControl {
        return this.form.controls['day'];
    }

    get typeField(): AbstractControl {
        return this.form.controls['type'];
    }

    protected readonly PrimeIcons = PrimeIcons;
    protected readonly Validators = Validators;
}
