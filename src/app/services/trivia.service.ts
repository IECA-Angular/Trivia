import { Injectable } from '@angular/core';
import { IOption, IQuestion } from '../interfaces/question.interface';
import { Router } from '@angular/router';
import { QUESTION_DATA } from '../data/data';
import { IPlayer } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  name: string = 'Josué';
  questions: IQuestion[] = [];
  startGameDate: Date | null = null;
  endGameDate: Date | null = null;
  seconds: number = 0;
  score: number = 0;
  showAnswers: boolean = false;

  questionIndex: number = 0;

  private interval: any;

  constructor(private router: Router) { }

  get currentQuestion() {
    return this.questions[this.questionIndex];
  }

  startGame() {
    this.score = 0;
    this.startGameDate = new Date();
    // Añade 12 segundos a la fecha de inicio del juego
    this.endGameDate = new Date(this.startGameDate.getTime() + 12000);
    this.questions = QUESTION_DATA.sort(() => Math.random() - 0.5).slice(0, 10);
    this.seconds = this.secondsLeft();
    this.interval = setInterval(() => {
      this.seconds = this.secondsLeft();

      if (this.seconds <= 0) {
        this.endGame();
        clearInterval(this.interval);
      }

    }, 250);
  }

  private secondsLeft() {
    if (this.endGameDate && this.startGameDate) {
       return Math.floor((this.endGameDate.getTime() - new Date().getTime()) / 1000);
    }
    return 0;
  }

  private addSecondsToGame(seconds: number) {
    if (this.endGameDate) {
      this.endGameDate = new Date(this.endGameDate.getTime() + (seconds * 1000));
    }
  }

  endGame() {
    this.startGameDate = null;
    this.endGameDate = null;
    this.saveScore();
    this.router.navigate(['/scoreboard']);
  }

  nextQuestion(questionOption: IOption) {
     if (this.showAnswers) {
      return;
     }

     this.showAnswers = true;

     if (questionOption.correct) {
        this.score++;
        this.addSecondsToGame(5);
     }

     setTimeout(() => {
      this.showAnswers = false;

      if (this.questionIndex === this.questions.length - 1) {
        this.endGame();
        return;
      } else {
        this.questionIndex++;
      }

     }, 1500);

  }

  saveScore() {
    const scores = this.getScores();
    scores.push({
      name: this.name,
      score: (this.score * 5),
      date: new Date()
    });
    localStorage.setItem('scores', JSON.stringify(scores));
  }
  getScores():IPlayer[] {
    return JSON.parse(localStorage.getItem('scores') || '[]');
  }


}
