import { Component, Input } from "@angular/core";

@Component({
  selector: 'answer-option',
  template: `

  <div class="answer-option"
  [class.error]="type === 'error'"
  [class.correct]="type === 'correct'"
  > {{ text }} </div>

  `
})
export class AnswerComponent {

  @Input()
  type: 'default' | 'correct' | 'error' = 'default'

  @Input() text: string = '';

}
