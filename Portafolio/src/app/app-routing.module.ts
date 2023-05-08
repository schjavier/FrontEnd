import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { NewExperienciaComponent } from './components/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
import { NewProjectosComponent } from './components/new-projectos/new-projectos.component';
import { EditProjectosComponent } from './components/edit-projectos/edit-projectos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'portfolio', pathMatch:'full' },
  { path: 'portfolio/educacion/new', component: NewEducationComponent },
  { path: 'portfolio/educacion/edit/:id', component: EditEducationComponent },
  { path: 'portfolio/experiencia/new', component: NewExperienciaComponent },
  { path: 'portfolio/experiencia/edit/:id', component: EditExperienciaComponent },
  { path: 'portfolio/proyectos/new', component: NewProjectosComponent },
  { path: 'portfolio/proyectos/editar/:id', component: EditProjectosComponent},
  { path: 'portfolio/auth/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }