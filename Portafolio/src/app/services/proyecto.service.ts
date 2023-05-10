import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  url:string = 'https://portfolio-backend-o7mu.onrender.com/proyecto';
  
  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + '/ver');
  }

  public detalle(id: Number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + `/ver/${id}`);
  }

  public saveProyecto(proy:Proyectos):Observable<any>{
    return this.http.post<any>(this.url + `/new`, proy);
  }

  public updateProyecto(id:number, proy:Proyectos):Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, proy);
  }

  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }



}
