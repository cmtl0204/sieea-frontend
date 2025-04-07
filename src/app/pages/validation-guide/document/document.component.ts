import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Toast } from 'primeng/toast';
import { FileUpload } from 'primeng/fileupload';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { Badge } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { CustomMessageService } from '@utils/services/custom-message.service';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

interface FileInterface {
    size: number;
    name: string;
    objectURL: any;
}

@Component({
    selector: 'app-document',
    imports: [FileUpload, ReactiveFormsModule],
    templateUrl: './document.component.html',
    styleUrl: './document.component.scss',
    providers: [MessageService]
})
export class DocumentComponent {
    @Output() next: EventEmitter<null> = new EventEmitter();
    @Output() previous: EventEmitter<null> = new EventEmitter();

    private readonly _customMessageService = inject(CustomMessageService);
    private readonly config = inject(PrimeNG);
    private readonly messageService = inject(MessageService);
    files: FileInterface[] = [];

    constructor() {}

    uploadFile(event: any) {
        this.files = event.files;

        this._customMessageService.showSuccess({ summary: 'cargad', detail: 'ca' });
    }
}
