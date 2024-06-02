import { Component } from '@angular/core';
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    imports: [ContactMeComponent]
})
export class HomeComponent {
 
}
