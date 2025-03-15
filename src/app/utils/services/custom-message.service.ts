import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class CustomMessageService {
    private readonly _messageService = inject(MessageService);

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
}
