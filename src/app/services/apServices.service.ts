import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class apServices {

  constructor(public http: HttpClient) { }

  saveData(data:any){
    return this.http.post('/adduser',data);
  }

  getData(){
    return this.http.get('/getuser');
  }
}