import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  url:string='http://localhost:8080/experiencia';

  constructor(private http:HttpClient) { }

  getExp():Observable<experiencia>{
    return this.http.get<experiencia>(this.url + '/ver');
    }
  
}
