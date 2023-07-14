import { NgModule } from "@angular/core";
import { StartPage } from "./start/start.page";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { FormsModule } from "@angular/forms";
import { GamePage } from "./game/game.page";
import { ScoreBoardPage } from "./scoreboard/scoreboard.page";

@NgModule({
  declarations: [
    StartPage,
    GamePage,
    ScoreBoardPage
  ],
  imports: [
      CommonModule,
      ComponentsModule,
      FormsModule
  ],
})
export class TriviaModule { }
