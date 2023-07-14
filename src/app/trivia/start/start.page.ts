import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TriviaService } from "src/app/services/trivia.service";

@Component({
  selector: 'start-page',
  templateUrl: './start.page.html'
})
export class StartPage {

  name = '';
  showNameError = false;

  constructor(
    private router: Router,
    private triviaService: TriviaService
  ) {
  }

  startGame() {

    if (this.name.length < 5) {
      this.showNameError = true;
      return;
    }

    this.triviaService.name = this.name;
    this.router.navigate(['/game']);
  }

}
