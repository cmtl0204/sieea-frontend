import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'pricing-widget',
    templateUrl:'./pricingwidget.component.html',
    standalone:true,
    imports: [DividerModule, ButtonModule, RippleModule]
})
export class PricingWidget {}
