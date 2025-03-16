import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../../layout/component/app.floatingconfigurator';
import { CustomMessageService } from '../../../../utils/services/custom-message.service';
import { AuthHttpService } from '../../auth-http.service';
import { handleError } from '../../../../utils/exceptions/handle-error';
import { NgOptimizedImage } from '@angular/common';
import { GoogleComponent } from '../../ui/auth-provider-button/auth-provider-button.component';
import { Divider } from 'primeng/divider';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, ReactiveFormsModule, NgOptimizedImage, GoogleComponent, Divider]
})
export default class SignInComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _customMessageService = inject(CustomMessageService);
    private readonly _authHttpService = inject(AuthHttpService);
    protected form!: FormGroup;

    constructor() {
        this.buildForm();
    }

    buildForm() {
        this.form = this._formBuilder.group({
            email: ['asd@asd', [Validators.required, Validators.email]],
            password: ['12345678', [Validators.required]]
        });
    }

    onSubmit() {
        this._authHttpService.signIn(this.form.value)
            .then(value => {
                this._customMessageService.showInfo({
                    summary: 'Acceso Correcto',
                    detail: 'Bienvenido',
                });
            }).catch((err) => {
            this._customMessageService.showError({
                summary: 'Error al ingresar la cuenta',
                detail: handleError(err)
            });
        });
    }

    getEmail() {
        return this.form.get('email');
    }

    getPassword() {
        return this.form.get('password');
    }
}
