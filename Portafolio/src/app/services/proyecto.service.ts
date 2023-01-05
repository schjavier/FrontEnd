import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  url:string = 'http://localhost:8080/proyecto';
  
  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + '/ver');
  }

}
