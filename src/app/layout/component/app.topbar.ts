import { Component, inject } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { environment } from '@env/environment';
import { Button } from 'primeng/button';
import { AuthService } from '@modules/auth/auth.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, Button],
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                    <i class="pi pi-bars"></i>
                </button>
                <a class="layout-topbar-logo" routerLink="/">
                    <img src="images/logo.png" alt="" width="100" />
                    <span>{{ environment.APP_SHORT_NAME }}</span>
                </a>
            </div>

            <div class="layout-topbar-actions">
                <div class="layout-config-menu">
                    <!--                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">-->
                    <!--                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>-->
                    <!--                </button>-->
                    <div class="relative">
                        <!--                    <button-->
                        <!--                        class="layout-topbar-action layout-topbar-action-highlight"-->
                        <!--                        pStyleClass="@next"-->
                        <!--                        enterFromClass="hidden"-->
                        <!--                        enterActiveClass="animate-scalein"-->
                        <!--                        leaveToClass="hidden"-->
                        <!--                        leaveActiveClass="animate-fadeout"-->
                        <!--                        [hideOnOutsideClick]="true"-->
                        <!--                    >-->
                        <!--                        <i class="pi pi-palette"></i>-->
                        <!--                    </button>-->
                        <!--                    <app-configurator />-->
                    </div>
                </div>

                <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next"
                        enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-ellipsis-v"></i>
                </button>

                <div class="layout-topbar-menu hidden lg:block">
                    <div class="layout-topbar-menu-content">
                        <!--                    <button type="button" class="layout-topbar-action">-->
                        <!--                        <i class="pi pi-calendar"></i>-->
                        <!--                        <span>Calendar</span>-->
                        <!--                    </button>-->
                        <!--                    <button type="button" class="layout-topbar-action">-->
                        <!--                        <i class="pi pi-inbox"></i>-->
                        <!--                        <span>Messages</span>-->
                        <!--                    </button>-->
                        <p-button
                            [icon]="PrimeIcons.USER"
                            [raised]="true" [text]="true"
                            [label]="authService.auth.name" />
                        <p-button
                            [icon]="PrimeIcons.ID_CARD"
                            [raised]="true"
                            [text]="true"
                            [label]="authService.auth.identification" />
                    </div>
                </div>
            </div>
        </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    protected readonly authService = inject(AuthService);

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    protected readonly environment = environment;
    protected readonly PrimeIcons = PrimeIcons;
}
