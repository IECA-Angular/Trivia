import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { AlertComponent } from './alert/alert.component';
import { AnswerComponent } from './answer-option/answer-option.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    AlertComponent,
    AnswerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    AlertComponent,
    AnswerComponent,
    TimerComponent
  ]
})
export class ComponentsModule { }
