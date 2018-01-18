import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
@Injectable()
export class QuestionComponent implements OnInit {
  pageTitle:string ='Please, Answer the question.';
  question:string ='Is it a mammal';
  estimated:string = '3 up to 5'

  constructor(private _data:DataService ) { }

  ngOnInit() {
    this._data.getQuestion(1).subscribe(q => this.question = q[0].name);
  }

}
