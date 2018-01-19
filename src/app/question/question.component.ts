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
  estimated:string = '3 up to 5'

  constructor(private _data:DataService ) { }

  ngOnInit() {
    this._data.getQuestion(1).subscribe(q => {
      this.question = q[0];
    });
  }

  onYes(){
    this.findQuestion(true);
  }

  onNo(){
    this.findQuestion(false);
  }

  findQuestion(isYes:boolean){
    var nextId = isYes ? this.question.nextYID : this.question.nextNID;
    var nextType = isYes ? this.question.nextYType : this.question.nextNType;
    console.log(nextId);

    if(nextType == 0){
      this.question = _.filter(
        this.questions,q => q.id == nextId)[0];
    }
    else{
      //find the answer
    }
  }



}
