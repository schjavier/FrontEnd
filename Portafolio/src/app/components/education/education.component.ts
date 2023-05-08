import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EduService } from 'src/app/services/edu.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:any;
  isLogged = false;
  

  constructor(private datosEducacion:EduService, private tokenService:TokenService) { }
  

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarEducacion():void{
    this.datosEducacion.getEducacion().subscribe(data => {
      this.educationList=data;
      });
  }

  onDelete(id?: number){
    if(id != undefined){
      this.datosEducacion.deleteEducacion(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("Rayos... No se pudo borrar la entrada!");
        }
      )
    }
  }
  
}
