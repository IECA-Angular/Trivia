import { Component, Input } from "@angular/core";


@Component({
  selector: 'timer',
  template: `

  <div class="timer"
  [class.warning]=" seconds < 10 && seconds > 5"
  [class.danger]="seconds <= 5"
  >
    {{seconds}}s <span *ngIf="showExtraSeconds">+{{extraSeconds}}s</span>
  </div>


  `
})
export class TimerComponent {
  @Input() seconds: number = 0;
  @Input() extraSeconds: number = 0;
  @Input() showExtraSeconds: boolean = false;

}
