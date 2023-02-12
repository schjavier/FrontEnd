import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-projectos',
  templateUrl: './new-projectos.component.html',
  styleUrls: ['./new-projectos.component.css']
})
export class NewProjectosComponent implements OnInit {

  nombre:string = "";
  imagen:string= "";
  descripcion:string= "";
  comienzo:string= "";
  fin:string= "";

  constructor(private proyServ: ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  public onCreate():void {
    const proy = new Proyectos(this.nombre, this.imagen, this.descripcion, this.comienzo, this.fin);
    this.proyServ.saveProyecto(proy).subscribe(
      data => {
        alert("Proyecto agregado con exito");
        this.router.navigate(['']);
      }, err => {
        alert("Rayos! algo salio mal...");
        this.router.navigate(['']);
      }
    )
  }
 
}
