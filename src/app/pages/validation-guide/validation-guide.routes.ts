import { Routes } from '@angular/router';
import { ValidationGuideComponent } from '@modules/validation-guide/validation-guide.component';

export default [
    { path: '', component: ValidationGuideComponent },
    { path: 'profile', component: ValidationGuideComponent }
] as Routes;
