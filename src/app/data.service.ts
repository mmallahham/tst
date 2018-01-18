import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from './question';

@Injectable()
export class DataService {
  private _backEndUrl = 'https://tranquil-tor-64128.herokuapp.com/';

  constructor(private _http:HttpClient) { }

  getQuestion(id:number){
    console.log('call get'+this._backEndUrl+'questions');
    return this._http.get<IQuestion[]>(this._backEndUrl+'questions/'+id);
  }


  getAllQuestions(){
    console.log('call get'+this._backEndUrl+'questions');
    return this._http.get<IQuestion[]>(this._backEndUrl+'questions');
  }

}
