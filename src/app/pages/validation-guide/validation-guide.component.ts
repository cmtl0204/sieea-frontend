import { Component } from '@angular/core';
import { Step, StepList, StepPanel, StepPanels, Stepper } from 'primeng/stepper';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { ToggleButton } from 'primeng/togglebutton';
import { PersonalInformationComponent } from '@modules/validation-guide/personal-information/personal-information.component';
import { BankDetailComponent } from '@modules/validation-guide/bank-detail/bank-detail.component';
import { ActivityComponent } from '@modules/validation-guide/activity/activity.component';
import { DocumentComponent } from '@modules/validation-guide/document/document.component';
import { EvaluationComponent } from '@modules/validation-guide/evaluation/evaluation.component';

@Component({
    selector: 'app-validation-guide',
    imports: [Stepper, StepList, Step, NgClass, StepPanels, StepPanel, FormsModule, PersonalInformationComponent, BankDetailComponent, ActivityComponent, DocumentComponent, EvaluationComponent],
    templateUrl: './validation-guide.component.html',
    styleUrl: './validation-guide.component.scss',
    standalone: true
})
export class ValidationGuideComponent {
    activeStep: number = 1;
    name: string | null = null;

    email: string | null = null;

    password: string | null = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;
}
