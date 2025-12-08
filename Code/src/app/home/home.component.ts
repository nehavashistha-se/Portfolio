import { Component ,ElementRef,ViewChild } from '@angular/core';
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { PdfDownloadService } from '../shared/services/pdf-download.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    imports: [ContactMeComponent]
})
export class HomeComponent {
constructor(private pdfService: PdfDownloadService) {}

  triggerDownload() {
    console.log("Download button clicked");
    this.pdfService.requestDownload();
  }

}
