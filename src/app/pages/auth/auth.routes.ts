import { Routes } from '@angular/router';
import { Access } from './access';
import { Error } from './error';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'sign-in', loadComponent: () => import('./components/sign-in/sign-in.component') },
    { path: 'sign-in-internal', loadComponent: () => import('./components/sign-in-internal/sign-in-internal.component') },
    { path: 'sign-up', loadComponent: () => import('./components/sign-up/sign-up.component') }
] as Routes;
