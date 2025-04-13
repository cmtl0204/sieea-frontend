import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Landing } from '@modules/landing/landing';
import { Dashboard } from '@modules/dashboard/dashboard';
import { tokenGuard } from './app/guards/token.guard';
import { MY_ROUTES } from '@routes';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: MY_ROUTES.dashboard.base,
                component: Dashboard,
                canActivate: [tokenGuard]
            },

            { path: MY_ROUTES.pages.base, loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },

    { path: 'landing', component: Landing },

    { path: MY_ROUTES.errorPages.base, loadChildren: () => import('./app/layout/errors/errors.routes') },

    { path: MY_ROUTES.auth.base, loadChildren: () => import('./app/pages/auth/auth.routes') },

    { path: '**', redirectTo: MY_ROUTES.errorPages.notFound.absolute }
];
