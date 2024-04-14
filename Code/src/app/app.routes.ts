
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { SoftskillComponent } from './softskill/softskill.component';
import { TechnicalskillComponent } from './technicalskill/technicalskill.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'professionalsummary', component: ProfessionalSummaryComponent },
    { path: 'Experience', component: ExperienceComponent },
    { path: 'Softskill', component: SoftskillComponent },
    { path: 'Technicalskill', component: TechnicalskillComponent },
    // Additional routes can be defined here
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }