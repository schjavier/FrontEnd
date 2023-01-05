import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList:any;
  
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.datosProyecto.getProyectos().subscribe(data => {
      this.projectsList=data;
      })
  }

}
