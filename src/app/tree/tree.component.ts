import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../question';
import { DataService } from '../data.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  questions:IQuestion[];

  constructor(private _data:DataService )
   { }

  ngOnInit() {
    this._data.getAllQuestions().subscribe(data => this.questions = data);
    console.log(this.questions);

  }

}
