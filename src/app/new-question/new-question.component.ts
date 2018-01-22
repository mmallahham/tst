import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { IQuestion } from '../question';
import * as _ from 'underscore';
import { IAnswer } from '../answer';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  pageTitle:string = 'learning phase...';
  name:string;
  newQuestion:string;
  yesOrNo:string;
  question:IQuestion;
  questions:IQuestion[];
  answer:IAnswer;
  answers:IAnswer[];
  aid:string;
  validYesOrNow:string[] = ['y','Y','yes','Yes','YES','n','N','no','No','NO'];


  constructor(private _router:Router,
              private _route:ActivatedRoute,
              private _data:DataService) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    this.aid = this._route.snapshot.paramMap.get('aid');
    this._data.getAllQuestions().subscribe(q => {
      this.questions = q;
      this.question = _.filter(
        this.questions,q => q.id == id)[0];
    });
    this._data.getAllAnswers().subscribe(a => {
      this.answers = a;});
  }

  onSave(){
    let index = this.validYesOrNow.indexOf(this.yesOrNo);
    if(!this.name){
      alert('please set the name correctly');
      return;
    }
    if(!this.question){
      alert('please set the name correctly');
      return;
    }
    if(index == -1){
      alert('please set the answer value correctly');
      return;
    }

    let aId = this.answers.length+1;
    let param = {
      id:aId,
      name:this.name
    };
    this._data.insertAnswer(aId,param);

    let qId = this.questions.length+1;
    let qParam;
    if(index < 5){
      qParam = {
        id:qId,
        question:this.newQuestion,
        nextYID:aId,
        nextNID:this.aid,
        nextYType:1,
        nextNType:1
      };
    }
    else{
      qParam = {
        id:qId,
        question:this.newQuestion,
        nextYID:this.aid,
        nextNID:aId,
        nextYType:1,
        nextNType:1
      }
    }
    this._data.insertQuestion(qId,qParam);

    let updateQParam;
    if(this.aid == this.question.nextNID.toString()){
      updateQParam = {nextNID:qId,nextNType:0 }
    }
    else{
      updateQParam = {nextYID:qId,nextYType:0}
    }
    this._data.updateQuestion(this.question.id,updateQParam);

    this._router.navigate(['/save']);
  }
}
