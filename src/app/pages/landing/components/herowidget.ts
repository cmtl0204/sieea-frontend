import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
    selector: 'hero-widget',
    templateUrl: './herowidget.component.html',
    standalone: true,
    imports: [ButtonModule, RippleModule,ImageCompareModule]
})
export class HeroWidget {
}
