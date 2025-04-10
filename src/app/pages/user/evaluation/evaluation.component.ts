import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
    @Output() next: EventEmitter<null> = new EventEmitter();
    @Output() previous: EventEmitter<null> = new EventEmitter();

}
