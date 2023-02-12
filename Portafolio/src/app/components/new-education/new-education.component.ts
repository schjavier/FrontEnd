import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EduService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  institucion:string = "";
  logo:string = "";
  titulo:string ="" ;
  anioComienzo:string = "";
  anioFinal:string = "";
  descripcion:string = "";

  constructor(private eduServ: EduService, private router:Router) { }

  ngOnInit(): void {
  }

  public onCreate():void {
    const edu = new educacion(this.institucion, this.logo, this.titulo, this.anioComienzo, this.anioFinal, this.descripcion);
    this.eduServ.saveEducacion(edu).subscribe(
      data =>{
        alert("Educación agregada con exito");
        this.router.navigate(['']);
      }, err => {
        alert ("Rayos... algo salió mal!!!");
        this.router.navigate(['']);
      }
       
    )
  }

}