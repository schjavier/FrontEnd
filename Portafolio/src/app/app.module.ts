import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { NewExperienciaComponent } from './components/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
import { NewProjectosComponent } from './components/new-projectos/new-projectos.component';
import { EditProjectosComponent } from './components/edit-projectos/edit-projectos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    PortfolioComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewProjectosComponent,
    EditProjectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
