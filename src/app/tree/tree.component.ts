
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IQuestion } from '../question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements AfterViewInit{
  questions:IQuestion[];

  pageTitle:string ='tree of questions and answers';

  @ViewChild('treeDiagram')
  private treeDgrm : ElementRef;

  innerHTML:string;
  constructor(private _data:DataService) { }

  ngAfterViewInit() {
    this._data.getAllQuestions().subscribe((q:IQuestion[]) => {
      this.questions = q;
     console.log(this.getQuestionDigram(1));
  //    this.treeDgrm.nativeElement.innerHTML = this.getQuestionDigram(1);
    });
  }

  getQuestionDigram(id:number):string{

    var question:IQuestion = this.questions.find(q => q.id == id);
    var res = '';
    res += '|<br><app-tree-item>sdsf</app-tree-item><table><tr>';
    if(!question.nextYType){
      res += '<td>';
      res += this.getQuestionDigram(question.nextYID);
      res += '</td>';
    }
    if(!question.nextNType){
      res += '<td>';
      res += this.getQuestionDigram(question.nextNID);
      res += '</td>';
    }
    res += '</tr></table>';
    return res;
  }

}
