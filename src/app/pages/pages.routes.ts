import { Routes } from '@angular/router';
import { MY_ROUTES } from '@routes';

export default [
    { path: MY_ROUTES.pages.users.base, loadChildren: () => import('./user/user.routes') },
    { path: MY_ROUTES.pages.validationGuides.base, loadChildren: () => import('./validation-guide/validation-guide.routes') },
    { path: MY_ROUTES.pages.activities.base, loadChildren: () => import('./activity/activity.routes') },
    { path: MY_ROUTES.pages.trainings.base, loadChildren: () => import('./training/training.routes') },
    { path: MY_ROUTES.pages.states.base, loadChildren: () => import('./state/state.routes') },
] as Routes;
