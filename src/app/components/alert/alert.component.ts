import { Component, Input } from "@angular/core";


@Component({
  selector: 'alert',
  template: `

  <div class="alert"
  [class.success]="type === 'success'"
  [class.error]="type === 'error'"
  >
         {{ text }}
  </div>


  `,
  styles: [``]
})
export class AlertComponent {

  @Input() text: string = '';
  @Input() type: 'success' | 'error' = 'success'

}
