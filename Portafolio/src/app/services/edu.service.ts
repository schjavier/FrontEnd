import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EduService {

  url:string='http://localhost:8080/educacion' ;

  constructor(private http:HttpClient) { }

  getEducacion():Observable<educacion>{
    return this.http.get<educacion>(this.url + '/ver');
  }
}
