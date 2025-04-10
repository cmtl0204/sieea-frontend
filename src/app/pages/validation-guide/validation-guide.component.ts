import { Component, inject } from '@angular/core';
import { Step, StepItem, StepList, StepPanel, StepPanels, Stepper } from 'primeng/stepper';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { ToggleButton } from 'primeng/togglebutton';
import { PersonalInformationComponent } from '@modules/validation-guide/personal-information/personal-information.component';
import { BankDetailComponent } from '@modules/validation-guide/bank-detail/bank-detail.component';
import { ActivityComponent } from '@modules/validation-guide/activity/activity.component';
import { DocumentComponent } from '@modules/validation-guide/document/document.component';
import { EvaluationComponent } from '@modules/validation-guide/evaluation/evaluation.component';
import { FileUpload } from 'primeng/fileupload';
import { CustomMessageService } from '@utils/services/custom-message.service';

@Component({
    selector: 'app-validation-guide',
    imports: [Stepper, Step, StepPanel, FormsModule, StepItem, FileUpload, NgForOf, NgIf],
    templateUrl: './validation-guide.component.html',
    styleUrl: './validation-guide.component.scss',
    standalone: true
})
export class ValidationGuideComponent {
    private readonly _customMessageService = inject(CustomMessageService);
    uploadedFiles: any[] = [];
    protected step: number = 0;

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this._customMessageService.showSuccess({ summary: 'Archivo Subido', detail: '' });
    }
}
