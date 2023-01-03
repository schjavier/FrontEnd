//Servicio que se encarga de comunicarse con el backend para traer
// los datos necsarios 

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // guardamos la direccion del host del backend en una variable 
  // de tipo string
 
  url:string='http://localhost:8080/persona/';
  
  //inyectamos una instancia la clase httpClient 
  constructor(private http:HttpClient) { }

  //metodo que trae los datos de un json guadado en el front
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/data.json');
  }
  
  //metodo para traer los datos del backend
  
  getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.url + 'ver/6');
    }
  


}
