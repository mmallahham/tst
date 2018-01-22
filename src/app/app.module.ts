import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http/';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { StaticsComponent } from './statics/statics.component';
import { WinComponent } from './win/win.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { FormsModule } from '@angular/forms';
import { SavingDataComponent } from './saving-data/saving-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    QuizIntroComponent,
    StaticsComponent,
    WinComponent,
    NewQuestionComponent,
    SavingDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'quizIntro',component: QuizIntroComponent},
      {path:'quiz',component: QuestionComponent},
      {path:'statics',component: StaticsComponent},
      {path:'win',component: WinComponent},
      {path:'save',component: SavingDataComponent},
      {path:'new/:id/:aid',component: NewQuestionComponent},
      {path:'',component: HomeComponent},
      {path:'**',component: HomeComponent}
    ])
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
