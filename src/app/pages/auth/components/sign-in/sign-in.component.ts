import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { AuthHttpService } from '../../auth-http.service';
import { environment } from '@env/environment';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { MessageService, PrimeIcons } from 'primeng/api';
import { KeyFilter } from 'primeng/keyfilter';
import { AuthService } from '@modules/auth/auth.service';
import { concatMap, of } from 'rxjs';
import { CoreService } from '@utils/services/core.service';
import { ProgressBar } from 'primeng/progressbar';
import { Toast } from 'primeng/toast';
import { Card } from 'primeng/card';
import { ErrorMessageDirective } from '@utils/directives/error-message.directive';
import { LabelDirective } from '@utils/directives/label.directive';
import { Divider } from 'primeng/divider';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, ReactiveFormsModule, RecaptchaModule, Card, ErrorMessageDirective, LabelDirective, Divider]
})
export default class SignInComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _customMessageService = inject(CustomMessageService);
    private readonly _authHttpService = inject(AuthHttpService);
    private readonly _authService = inject(AuthService);
    protected readonly _coreService = inject(CoreService);
    private readonly _router = inject(Router);
    private readonly _reCaptchaV3Service = inject(ReCaptchaV3Service);
    protected readonly environment = environment;
    protected form!: FormGroup;
    protected formErrors: string[] = [];

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            username: [null, [Validators.required, Validators.maxLength(2)]],
            password: [null, [Validators.required]]
        });
    }

    onSubmit() {
        if (!this.validateForm()) {
            this.form.markAllAsTouched();
            this._customMessageService.showFormErrors(this.formErrors);
            return;
        }

        this._reCaptchaV3Service
            .execute('login')
            .pipe(
                concatMap((token) => this._authHttpService.verifyRecaptcha(token)),

                concatMap((recaptchaResponse: any) => (recaptchaResponse?.success ? this._authHttpService.signIn(this.form.value) : of(null)))
            )
            .subscribe({
                next: (responseSignIn) => {
                    if (responseSignIn && this._authService.roles.length === 0) {
                        this._authService.removeLogin();
                        return;
                    }

                    this._router.navigateByUrl('');
                }
            });
    }

    validateForm() {
        this.formErrors = [];

        if (this.usernameField && this.usernameField.invalid) this.formErrors.push('Usuario');

        if (this.passwordField && this.passwordField.invalid) this.formErrors.push('Contraseña');

        return this.formErrors.length === 0 && this.form.valid;
    }

    get usernameField(): AbstractControl | null {
        return this.form.get('username');
    }

    get passwordField(): AbstractControl | null {
        return this.form.get('password');
    }

    protected readonly PrimeIcons = PrimeIcons;
}
