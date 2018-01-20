import { Component, OnInit, Injectable } from '@angular/core';
import _ = require('underscore');
import { DataService } from '../data.service';
import { IQuestion } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Injectable()
export class QuestionComponent implements OnInit {
  pageTitle:string ='Please, Answer the question.';
  question:IQuestion ;
  questions:IQuestion[];
  estimatedMin:number;
  estimatedMax:number;
  estimatedMinReached:boolean ;
  estimated:string = '3 up to 5'

  constructor(private _data:DataService ) { }

  ngOnInit() {
    this.estimatedMin = 0;
    this.estimatedMax = 0;
    this._data.getAllQuestions().subscribe(q => {
      this.questions = q;
    });
    this._data.getQuestion(1).subscribe(q => {
      this.question = q[0];
      this.calcEstimated(this.question);
    });
    this.estimated = this.estimatedMin + ' up to ' + this.estimatedMax;
  }

  onYes(){
    this.NextQuestion(true);
  }

  onNo(){
    this.NextQuestion(false);
  }

  NextQuestion(isYes:boolean){
    let nextId = isYes ? this.question.nextYID : this.question.nextNID;
    let nextType = isYes ? this.question.nextYType : this.question.nextNType;
    console.log(nextId);

    if(nextType == 0){
      this.question = _.filter(
        this.questions,q => q.id == nextId)[0];
    }
    else{
      //find the answer
    }
  }

  calcEstimated(question:IQuestion):number{
    console.log('call calcEstimated ' + question.id);
    let nextQ:IQuestion;
    let res:number = 0;

    if(question.nextNType && question.nextYType){
      return 0;
    }
    else{
      if(!question.nextNType){
        res++;
        this._data.getQuestion(question.nextNID).subscribe(q => {
          nextQ = q[0];
         this.calcEstimated(nextQ);
        });
      }

      if(!question.nextYType){
        res++;
        this._data.getQuestion(question.nextYID).subscribe(q => {
          nextQ = q[0];
          this.calcEstimated(nextQ);
        });
      }
    }
    console.log('res = '+res);

    switch(res){
      case 2:
        this.estimatedMin += 1;
        this.estimatedMax += 1;
        console.log(this.estimatedMin,this.estimatedMax);
        return 1;
      case 1:
        this.estimatedMax += 1;
        this.estimatedMin = 0;
        console.log(this.estimatedMin,this.estimatedMax);
        return 1;
      case 0:
        this.estimatedMin = 0;
        console.log(this.estimatedMin,this.estimatedMax);
        return 0;
    }
  }
}
