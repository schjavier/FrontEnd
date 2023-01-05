import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", [], [], []);

  constructor(private datosPersona:PersonaService) { }


  ngOnInit(): void {
    this.datosPersona.getPersona().subscribe(data => {
      this.persona=data;
       }); 
  }


}
 