import { Component, OnInit, Injectable } from '@angular/core';
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
  estimated:string = '3 up to 5'

  constructor(private _data:DataService ) { }

  ngOnInit() {
    this._data.getQuestion(1).subscribe(q => {
      this.question = q[0];
    });
  }

  onYes(){
    var id = this.question.nextYID;
    console.log(this.question);

    if(!this.question.nextYID){
      this._data.getQuestion(id).subscribe(q => this.question = q[0]);
    }
    else{

    }
  }
}
