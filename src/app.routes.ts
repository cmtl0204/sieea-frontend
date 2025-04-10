import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Documentation } from '@modules/documentation/documentation';
import { Landing } from '@modules/landing/landing';
import { Notfound } from '@modules/notfound/notfound';
import { Dashboard } from '@modules/dashboard/dashboard';
import { tokenGuard } from './app/guards/token.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                component: Dashboard,
                canActivate: [tokenGuard]
            },

            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
        ]
    },

    { path: 'landing', component: Landing },

    { path: 'notfound', component: Notfound },

    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },

    { path: '**', redirectTo: '/notfound' }
];
