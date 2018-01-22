import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving-data',
  templateUrl: './saving-data.component.html',
  styleUrls: ['./saving-data.component.css']
})
export class SavingDataComponent implements OnInit {
  pageTitle:string = 'Saving...';
  constructor(private _router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.pageTitle = 'Done';
    }, 2000);

  }

  onHome(){
    this._router.navigate(['/home']);
  }
}
