import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia';
  seconds: number = 0;
  interval: any;

  constructor() {

    console.log('Inicio del componente')
    this.seconds = 15;
    this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearInterval(this.interval);
      }
    }, 1000);

  }

}
