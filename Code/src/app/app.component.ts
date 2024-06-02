import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TechnicalskillComponent } from "./technicalskill/technicalskill.component";
import { EducationComponent } from "./Education/Education.component";
import { ProfessionalSummaryComponent } from "./professional-summary/professional-summary.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [RouterOutlet, HomeComponent, TechnicalskillComponent, EducationComponent, ProfessionalSummaryComponent, ExperienceComponent]
})
export class AppComponent {
  title = 'portfolio';
  scrolltoView(element: string){
    
  }
}
