import { Component, OnInit } from '@angular/core';
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
    this.datosEducacion.getEducacion().subscribe(data => {
    this.educationList=data;
    });
  }

}
