import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  empresa:string = "";
  logo:string = "";
  puesto:string = "";
  anioComienzo:string = "";
  anioFinal:string = "";
  descripcion:string = "";

  constructor(private expServ: ExpService, private router: Router) { }

  ngOnInit(): void {
  }

  public onCreate():void {
    const exp = new experiencia(this.empresa, this.logo, this.puesto, this.anioComienzo, this.anioFinal, this.descripcion);
    this.expServ.saveExperiencia(exp).subscribe(
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
