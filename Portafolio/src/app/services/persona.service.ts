//Servicio que se encarga de comunicarse con el backend para traer
// los datos necesarios 

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // guardamos la direccion del host del backend en una variable 
  // de tipo string
 
  url:string='https://portfolio-backend-o7mu.onrender.com/persona/';
  
  //inyectamos una instancia de la clase httpClient 
  constructor(private http:HttpClient) { }

  //metodo que trae los datos de un json guadado en el front
  // actualmente en desuso
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/data.json');
  }
  
  //metodo para traer los datos de la persona del backend
  // el 1 es por el id de la persona
  
  getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.url + 'ver/1');
    }
  


}
