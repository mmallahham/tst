import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../question';
import { DataService } from '../data.service';
import { NgForOf } from '@angular/common';
import * as _ from 'underscore';
import { IAnswer } from '../answer';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css']
})
export class StaticsComponent implements OnInit {
  pageTitle:string ='Please, Answer the question.';
  questions:IQuestion[];
  answers:IAnswer[];
  qCount:number = 0;
  aCount:number = 0;

  constructor(private _data:DataService )
   { }

  ngOnInit() {
    this._data.getAllQuestions().subscribe(data => {
      this.questions = data;
      this.qCount = this.questions.length;
    });
    this._data.getAllAnswers().subscribe(data => {
      this.answers = data;
      console.log(this.answers);

      this.aCount = this.answers.length;
    });


  }

}
