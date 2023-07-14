import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartPage } from "./trivia/start/start.page";
import { GamePage } from "./trivia/game/game.page";
import { ScoreBoardPage } from "./trivia/scoreboard/scoreboard.page";

const routes: Routes = [
  { path: 'start', component: StartPage },
  { path: 'game', component: GamePage },
  { path: 'scoreboard', component: ScoreBoardPage },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
