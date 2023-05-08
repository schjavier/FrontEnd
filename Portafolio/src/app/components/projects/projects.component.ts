import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isLogged = false;
  projectsList:any;
  
  constructor(private datosProyecto:ProyectoService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosProyecto.getProyectos().subscribe(data => {
      this.projectsList=data;
      })

      if(this.tokenService.getToken()){
        this.isLogged=true;
      } else {
        this.isLogged = false;
      }
  }

}
