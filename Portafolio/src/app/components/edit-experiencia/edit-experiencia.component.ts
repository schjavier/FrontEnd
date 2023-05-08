import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  exp : experiencia = null;
  constructor(private expServ:ExpService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expServ.detalle(id).subscribe(
      data => {
        this.exp = data;
      }, err => {
        alert("Rayos! Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  updateExp(){
    this.exp = Object.assign({}, this.exp);
  }

  onUpdate() : void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expServ.updateExperiencia(id, this.exp).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Rayos! Error al modificar la experiencia")
        this.router.navigate(['']);
      }
    )
  }


}
