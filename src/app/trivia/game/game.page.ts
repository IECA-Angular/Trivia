import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IOption } from "src/app/interfaces/question.interface";
import { TriviaService } from "src/app/services/trivia.service";

@Component({
  selector: 'game-page',
  templateUrl: './game.page.html',
})
export class GamePage {


  constructor(
    private router: Router,
    public triviaService: TriviaService
  ) {

    if (triviaService.name.length === 0) {
      this.router.navigate(['/start']);
    } else {
      triviaService.startGame();
    }

  }

  // 'default' | 'correct' | 'error' = 'default'
  getAnswerType(option: IOption) {
    if (!this.triviaService.showAnswers) {
      return 'default';
    }
    if (option.correct) {
      return 'correct';
    } else {
      return  'error';
    }
  }

}
