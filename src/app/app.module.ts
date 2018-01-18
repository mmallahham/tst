import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http/';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'quiz',component: QuestionComponent},
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
