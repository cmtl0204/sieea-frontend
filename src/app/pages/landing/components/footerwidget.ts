import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'footer-widget',
    templateUrl:'./footerwidget.component.html',
    standalone:true,
    imports: [RouterModule]
})
export class FooterWidget {
    constructor(public router: Router) {}
}
