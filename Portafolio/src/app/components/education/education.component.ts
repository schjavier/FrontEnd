import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EduService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:any;
  

  constructor(private datosEducacion:EduService) { }
  

  ngOnInit(): void {
    this.cargarEducacion();
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
