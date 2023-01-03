import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", [], [], []);

  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data => {
      this.persona=data;
       }); 
  }


}
 