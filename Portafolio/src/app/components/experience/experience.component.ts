import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList:any;
  isLogged = false;

  constructor(private datosExperiencia:ExpService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia():void{
    this.datosExperiencia.getExp().subscribe(data => {
      this.experienceList=data;
    });
  }

  onDelete(id?: number){
    if(id != undefined) {
      this.datosExperiencia.deleteExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("rayos! No se pudo borrar la entrada!");
        }
      )
    }
  }


}
