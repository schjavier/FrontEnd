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

  public getEducacion():Observable<educacion>{
    return this.http.get<educacion>(this.url + '/ver');
  }

  public detalle(id: number):Observable<educacion>{
    return this.http.get<educacion>(this.url + `/ver/${id}`)
  }

  public saveEducacion(edu:educacion):Observable<any>{
    return this.http.post<any>(this.url + `/new`, edu);
  }

  public updateEducacion(id:number, edu:educacion):Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, edu);
  }

  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }

  
}
