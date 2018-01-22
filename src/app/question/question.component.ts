import { Component, OnInit, Injectable } from '@angular/core';
import * as _ from 'underscore';
import { DataService } from '../data.service';
import { IQuestion } from '../question';
import { isQuote } from '@angular/compiler';
import { IAnswer } from '../answer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Injectable()
export class QuestionComponent implements OnInit {
  pageTitle:string ='Please, Answer the question.';
  question:IQuestion = {id:0,question:'loading...'};
  questions:IQuestion[];
  answer:IAnswer;
  answers:IAnswer[];
  estimatedMin:number;
  estimatedMax:number;
  checkAnswer:boolean;
  lvl:number = -1;

  constructor(private _data:DataService,
              private _router: Router ) { }

  ngOnInit() {
    this.checkAnswer = false;
    this.pageTitle ='Please, Answer the question.';
    this.question = {id:0,question:'loading...'};
    this.estimatedMin = 1000;
    this.estimatedMax = 0;

    this._data.getAllQuestions().subscribe(q => {
      this.questions = q;
      this.question = _.filter(
        this.questions,q => q.id == 1)[0];
      this.calcEstimated(this.question);
    });
    this._data.getAllAnswers().subscribe(a => {
      this.answers = a;});
  }

  onYes(){
    this.NextQuestion(true);
  }

  onNo(){
    this.NextQuestion(false);
  }

  NextQuestion(isYes:boolean){

    if(this.checkAnswer){
      if(isYes){
        this._router.navigate(['/win']);
      }
      else{

        console.log(this.question);

        this._router.navigate(['/new',this.question.id,this.question.nextNID]);
      }
    }
    else {
      this.lvl = -1;
      this.estimatedMin = 1000;
      this.estimatedMax = 0;
      let nextId = isYes ? this.question.nextYID : this.question.nextNID;
      let nextType = isYes ? this.question.nextYType : this.question.nextNType;
      this.checkAnswer = false;

      if(nextType == 0){
      this.question = _.filter(
        this.questions,q => q.id == nextId)[0];
        this.calcEstimated(this.question);
      }
      else{
        this.answer = _.filter(this.answers,a => a.id == nextId)[0];
        this.question = {id:this.question.id,question:"I think it is "+this.answer.name,nextNID:nextId}
        this.checkAnswer = true;
      }
    }
  }

  calcEstimated(question:IQuestion){
    let nextQ:IQuestion;
    ++this.lvl;

    if(question.nextNType || question.nextYType){
      if(this.lvl < this.estimatedMin){
        this.estimatedMin = this.lvl ;
      }
    }

    if(!question.nextNType){
      nextQ = this.findQuestionByID(question.nextNID);
      this.calcEstimated(nextQ);
    }

    if(!question.nextYType){
      nextQ = this.findQuestionByID(question.nextYID);
      this.calcEstimated(nextQ);
    }
    if(this.lvl > this.estimatedMax){
      this.estimatedMax = this.lvl;
    }
    this.lvl--;
   // callback();
  }

  findQuestionByID(id):IQuestion{
    return _.filter(this.questions,q => q.id == id)[0];
  }
}

