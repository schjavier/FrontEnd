import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion';
import { EduService } from 'src/app/services/edu.service';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu : educacion = null;
  constructor(private eduServ: EduService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.detalle(id).subscribe(
      data => {
        this.edu = data;
      }, err => {
        alert("Rayos! Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() : void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.updateEducacion(id, this.edu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  } 

}
