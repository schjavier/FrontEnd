import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", [], [], []);
  isLogged = false;

  constructor(private datosPersona:PersonaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(data =>{
      this.persona=data;
      })
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

}
