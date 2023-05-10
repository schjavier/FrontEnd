import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia';



@Injectable({
  providedIn: 'root'
})
export class ExpService {

  url:string='https://portfolio-backend-o7mu.onrender.com/experiencia';

  constructor(private http:HttpClient) { }

  public getExp():Observable<experiencia>{
    return this.http.get<experiencia>(this.url + '/ver');
    }

  public detalle(id: number):Observable<experiencia>{
    return this.http.get<experiencia>(this.url + `/ver/${id}`);
  }

  public saveExperiencia(exp:experiencia):Observable<any>{
    return this.http.post<any>(this.url + `/new`, exp);
  }

  public updateExperiencia(id:number, exp:experiencia):Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, exp)
  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }

  
}
