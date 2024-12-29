import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoteSrvicescesService {

  constructor(public http: HttpClient) { }

  photeSrvicescesData(){
    return this.http.get<any>('../../../assets/Data/photo.json');
  }
}
