import { Component, Input } from "@angular/core";

@Component({
  selector: 'mi-boton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() texto: string = '';
  @Input() big: boolean = false
}
