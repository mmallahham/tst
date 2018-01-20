import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-intro',
  templateUrl: './quiz-intro.component.html',
  styleUrls: ['./quiz-intro.component.css']
})
export class QuizIntroComponent implements OnInit {
  pageTitle:string = 'Game intro';

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onStart(){
    this._router.navigate(['/quiz']);
  }

}
