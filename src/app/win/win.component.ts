import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {
  pageTitle:string = 'Great...';
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onHome(){
    this._router.navigate(['/home']);
  }

}
