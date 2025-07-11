import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '@modules/auth/auth.service';
import { MY_ROUTES } from '@routes';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model; let i = index">
                <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    `
})
export class AppMenu implements OnInit {
    private _authService = inject(AuthService);
    model: MenuItem[] = [];

    ngOnInit() {
        switch (this._authService.role?.code) {
            case 'internal':
                this.model = [
                    {
                        label: 'MINTUR (obligatorio)',
                        items: [
                            {
                                label: 'Estado Proceso',
                                icon: PrimeIcons.WAVE_PULSE,
                                routerLink: [MY_ROUTES.pages.internalStates.absolute]
                            }
                        ]
                    },

                    {
                        label: 'Mis Datos',
                        items: [
                            {
                                label: 'Cerrar Sesión',
                                icon: 'pi pi-fw pi-power-off',
                                command: () => {
                                    this._authService.removeLogin();
                                }
                            }
                        ]
                    }
                ];
                break;

            default:
                this.model = [
                    {
                        label: 'MINTUR (obligatorio)',
                        items: [
                            {
                                label: 'Capacitación',
                                icon: PrimeIcons.GRADUATION_CAP,
                                routerLink: [MY_ROUTES.pages.trainings.absolute]
                            },
                            {
                                label: 'Actividades',
                                icon: PrimeIcons.LIST_CHECK,
                                routerLink: [MY_ROUTES.pages.activities.absolute]
                            },
                            {
                                label: 'Estado/Proceso',
                                icon: PrimeIcons.WAVE_PULSE,
                                routerLink: [MY_ROUTES.pages.states.absolute]
                            }
                            // { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                            // { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                            // { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                            // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                            // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                            // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                            // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                            // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                            // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                            // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                            // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                            // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                            // { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                            // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                        ]
                    },

                    {
                        label: 'Mis Datos',
                        items: [
                            {
                                label: 'Mi Perfil',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/pages/users/profile']
                            },
                            {
                                label: 'Cerrar Sesión',
                                icon: 'pi pi-fw pi-power-off',
                                command: () => {
                                    this._authService.removeLogin();
                                }
                            }
                        ]
                    }
                ];
        }
    }
}
