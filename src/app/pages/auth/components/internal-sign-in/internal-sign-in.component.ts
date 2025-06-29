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
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '@modules/auth/auth.service';
import { CoreService } from '@utils/services/core.service';
import { DatePickerModule } from 'primeng/datepicker';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { Divider } from 'primeng/divider';
import { UserHttpService } from '@modules/auth/user-http.service';
import { MY_ROUTES } from '@routes';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'app-internal-sign-in',
    templateUrl: './internal-sign-in.component.html',
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
        Fluid
        // RecaptchaModule
    ]
})
export default class InternalSignInComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _customMessageService = inject(CustomMessageService);
    private readonly _authHttpService = inject(AuthHttpService);
    private readonly _userHttpService = inject(UserHttpService);
    private readonly _authService = inject(AuthService);
    protected readonly _coreService = inject(CoreService);
    private readonly _router = inject(Router);
    protected readonly PrimeIcons = PrimeIcons;
    // private readonly _reCaptchaV3Service = inject(ReCaptchaV3Service);
    protected readonly environment = environment;
    protected form!: FormGroup;
    protected formErrors: string[] = [];
    protected validationType: string = '';
    protected dateLabel: string = '';
    protected years: any[] = [];
    protected months: any[] = [];
    protected days: number[] = [];
    protected identification!: any;

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    onSubmit() {
        if (!this.validateForm()) {
            this.form.markAllAsTouched();
            this._customMessageService.showFormErrors(this.formErrors);
            return;
        }

        this.signIn();
    }

    private signIn() {
        this._authHttpService.signIn(this.form.value).subscribe({
            next: (data) => {
                if (data.roles.length === 1) {
                    this._router.navigateByUrl(MY_ROUTES.pages.internalStates.absolute);
                    return;
                }
            }
        });
    }

    validateForm() {
        this.formErrors = [];

        if (this.usernameField.invalid) this.formErrors.push('Usuario');
        if (this.passwordField.invalid) this.formErrors.push('Contraseña');

        return this.formErrors.length === 0;
    }

    get usernameField(): AbstractControl {
        return this.form.controls['username'];
    }

    get passwordField(): AbstractControl {
        return this.form.controls['password'];
    }
}
