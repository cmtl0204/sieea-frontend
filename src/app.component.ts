import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { CoreService } from '@utils/services/core.service';
import { Dialog } from 'primeng/dialog';
import { MessageModalComponent } from '@utils/components/message-modal/message-modal.component';
import { CustomMessageService } from '@utils/services/custom-message.service';
import { MessageProcessingComponent } from '@utils/components/message-processing/message-processing.component';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterModule, ToastModule, ProgressBar, Dialog, MessageModalComponent, MessageProcessingComponent],
    template: `
        @if (coreService.processing()) {
            <app-message-processing />
        }

        @if (customMessageService.modalVisible()) {
            <app-message-modal />
        }

        <router-outlet />

        <p-toast position="top-right" [life]="5000" />
    `
})
export class AppComponent {
    protected readonly coreService = inject(CoreService);
    protected readonly customMessageService = inject(CustomMessageService);
}
