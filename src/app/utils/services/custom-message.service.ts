import { inject, Injectable, signal } from '@angular/core';
import { MessageService, PrimeIcons } from 'primeng/api';

type Severity =
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null
    | undefined;

@Injectable({
    providedIn: 'root'
})
export class CustomMessageService {
    private readonly _messageService = inject(MessageService);
    private _isModalVisible = signal(false);
    readonly modalVisible = this._isModalVisible.asReadonly();
    private _modalConfirmVisible: boolean = false;
    private _modalAcceptSeverity: Severity = null;
    private _modalRejectSeverity: Severity = 'danger';
    private _modalIcon: string = '';
    private _modalIconColor: string = '';
    private _modalTitle: string = '';
    private _modalMessage: string | string[] = '';

    showSuccess({ summary, detail }: { summary: string; detail: string }) {
        this._messageService.add({ severity: 'success', summary, detail });
    }

    showError({ summary, detail }: { summary: string; detail: string }) {
        this._messageService.add({ severity: 'error', summary, detail });
    }

    showInfo({ summary, detail }: { summary: string; detail: string }) {
        this._messageService.add({ severity: 'info', summary, detail });
    }

    showWarning({ summary, detail }: { summary: string; detail: string }) {
        this._messageService.add({ severity: 'warn', summary, detail });
    }

    showHttpError(error: string | string[] | any) {
        if (Array.isArray(error)) error.sort();

        this._messageService.add({ severity: 'error', summary: error.error, detail: error.message });
    }

    showFormErrors(message: string | string[]): void {
        if (Array.isArray(message)) message.sort();

        this._isModalVisible.set(true);
        this._modalAcceptSeverity = 'info';
        this._modalIcon = PrimeIcons.TIMES;
        this._modalIconColor = 'red';
        this._modalTitle = 'Falta completar o existen errores en los siguientes campos';
        this._modalMessage = message;
    }

    get modalTitle(): string {
        return this._modalTitle;
    }

    get modalIcon(): string {
        return this._modalIcon;
    }

    get modalIconColor(): string {
        return this._modalIconColor;
    }

    get modalMessage(): string | string[] {
        return this._modalMessage;
    }

    get modalAcceptSeverity(): Severity {
        return this._modalAcceptSeverity;
    }

    get modalRejectSeverity(): Severity {
        return this._modalRejectSeverity;
    }

    setModalVisible(value: boolean) {
        this._isModalVisible.set(value);
    }

    get modalConfirmVisible(): boolean {
        return this._modalConfirmVisible;
    }

    set modalConfirmVisible(value: boolean) {
        this._modalConfirmVisible = value;
    }
}
