import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'',component: HomeComponent},
      {path:'**',component: HomeComponent}
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
