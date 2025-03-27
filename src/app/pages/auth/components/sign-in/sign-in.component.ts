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
import { catchError, concatMap, EMPTY, of, throwError } from 'rxjs';

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
        this._reCaptchaV3Service.execute('submit').subscribe((token) => {
            this._authHttpService.verifyRecaptcha(token).subscribe((response: any) => {
                if (response.success) {
                    console.log(response);
                } else {
                    console.log('error');
                }
            });
        });
    }

    onSubmit() {
        // Primero crear usuario, luego con su ID crear un perfil
        this._reCaptchaV3Service
            .execute('login')
            .pipe(
                concatMap((token) => this._authHttpService.verifyRecaptcha(token).pipe(
                    catchError((error) => {
                        console.error('Error en reCAPTCHA:', error);

                        this._customMessageService.showError({
                            summary: 'Error de verificación',
                            detail: 'No se pudo verificar el reCAPTCHA'
                        });
                        return throwError(() => error); // Propaga el error
                    })
                )),

                concatMap((recaptchaResponse:any) => {
                    if (recaptchaResponse?.success) {
                        return this._authHttpService.signIn(this.form.value).pipe(
                            catchError((error) => {
                                console.error('Error en inicio de sesión:', error);

                                this._customMessageService.showError({
                                    summary: 'Error de inicio de sesión',
                                    detail: 'No se pudo iniciar sesión'
                                });
                                return throwError(() => error); // Propaga el error
                            })
                        );
                    }

                    return of(null);
                })
            )
            .subscribe({
                next: (response) => {
                    if (response && this._authService.roles.length === 0) {
                        this._customMessageService.showError({
                            summary: 'Sin Rol',
                            detail: 'No cuenta con un rol asignado'
                        });
                        this._authService.removeLogin();
                        return;
                    }

                    this._router.navigateByUrl('');
                },
                error: (error) => {
                    console.error('Error general:', error);
                }
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
