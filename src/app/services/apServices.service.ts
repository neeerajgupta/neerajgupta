import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class apServices {

  constructor(public http: HttpClient) { }

  saveData(data:any){
    return this.http.post('/adduser', data, { responseType: 'text' });
  }

  getData(){
    return this.http.get('/getuser');
  }

deleteData(id: any) {
  
 const formData = new FormData();
  formData.append('id', id.toString());
  return this.http.post('/deleteuser', formData,{
    responseType: 'text' as 'json'
  });
}
editApi(data:any){

  return this.http.post('/edituser', data, { responseType: 'text' });

}



  
}

