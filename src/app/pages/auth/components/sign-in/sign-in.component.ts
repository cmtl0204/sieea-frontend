import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { CustomMessageService } from '../../../../utils/services/custom-message.service';
import { AuthHttpService } from '../../auth-http.service';
import { handleError } from '../../../../utils/exceptions/handle-error';
import { GoogleComponent } from '../../ui/auth-provider-button/auth-provider-button.component';
import { Divider } from 'primeng/divider';
import { environment } from '@env/environment';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { PrimeIcons } from 'primeng/api';
import { KeyFilter } from 'primeng/keyfilter';
import { AuthService } from '@modules/auth/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, ReactiveFormsModule, RecaptchaModule, KeyFilter]
})
export default class SignInComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _customMessageService = inject(CustomMessageService);
    private readonly _authHttpService = inject(AuthHttpService);
    private readonly _authService = inject(AuthService);
    private readonly _router = inject(Router);
    private readonly _reCaptchaV3Service = inject(ReCaptchaV3Service);
    protected readonly environment = environment;
    protected form!: FormGroup;
    protected isRecaptcha = true;

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            username: ['admin', [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    executeRecaptcha() {
        this._reCaptchaV3Service.execute('').subscribe((token) => {
            console.log(token);
        });
    }

    executeRecaptchaVisible(token: any) {
        console.log(token);
        this.isRecaptcha = true;
    }

    onSubmit() {
        console.log(this.form.value);
        this._authHttpService.signIn(this.form.value).subscribe((response) => {
            if (this._authService.roles.length === 0) {
                this._customMessageService.showError({ summary: 'Sin Rol', detail: 'No cuenta con un rol asignado' });
                this._authService.removeLogin();
                return;
            }

            this._router.navigateByUrl('');
        });
    }

    getUsername() {
        return this.form.get('username');
    }

    getPassword() {
        return this.form.get('password');
    }

    protected readonly PrimeIcons = PrimeIcons;
}
