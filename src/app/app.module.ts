import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http/';
import { TreeComponent } from './tree/tree.component';
import { QuizIntroComponent } from './quiz-intro/quiz-intro.component';
import { StaticsComponent } from './statics/statics.component';
import { WinComponent } from './win/win.component';
import { NewQuestionComponent } from './new-question/new-question.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    TreeComponent,
    QuizIntroComponent,
    StaticsComponent,
    WinComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'quizIntro',component: QuizIntroComponent},
      {path:'quiz',component: QuestionComponent},
      {path:'tree',component: TreeComponent},
      {path:'statics',component: StaticsComponent},
      {path:'win',component: WinComponent},
      {path:'new',component: NewQuestionComponent},
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
