import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginComponent } from '../components/login/login.component';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService { 

  authUrl:string = 'https://portfolio-backend-o7mu.onrender.com/auth';
  
  constructor(private http: HttpClient) {
  }
public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.http.post<any>(this.authUrl + '/nuevo', nuevoUsuario);
}

public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
  return this.http.post<JwtDto>(this.authUrl + '/login', loginUsuario)
}

}