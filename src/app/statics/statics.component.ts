import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../question';
import { DataService } from '../data.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css']
})
export class StaticsComponent implements OnInit {
  questions:IQuestion[];

  constructor(private _data:DataService )
   { }

  ngOnInit() {
    this._data.getAllQuestions().subscribe(data => this.questions = data);
    console.log(this.questions);

  }

}
