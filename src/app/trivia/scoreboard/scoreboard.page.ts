import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TriviaService } from "src/app/services/trivia.service";


@Component({
  selector: 'scoreboard-page',
  templateUrl: './scoreboard.page.html',
})
export class ScoreBoardPage {

  constructor(
    private router: Router,
    public triviaService: TriviaService
  ) {

  }


  goToStart() {
    this.router.navigate(['/start']);
  }
  restartGame() {
    this.router.navigate(['/game']);
  }


}
