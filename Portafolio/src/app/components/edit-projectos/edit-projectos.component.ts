import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-projectos',
  templateUrl: './edit-projectos.component.html',
  styleUrls: ['./edit-projectos.component.css']
})
export class EditProjectosComponent implements OnInit {
  proy : Proyectos = null;

  constructor(private proyServ:ProyectoService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyServ.detalle(id).subscribe(
      data => {
        this.proy = data;
      }, err => {
        alert("Rayos! Error al modificar la entrada");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() :void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyServ.updateProyecto(id, this.proy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Rayos! Error al modificar la entrada!");
        this.router.navigate(['']);
      }
    )
  }


}
