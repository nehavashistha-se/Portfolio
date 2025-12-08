import { Component,ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TechnicalskillComponent } from "./technicalskill/technicalskill.component";
import { EducationComponent } from "./Education/Education.component";
import { ProfessionalSummaryComponent } from "./professional-summary/professional-summary.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PdfDownloadService } from './shared/services/pdf-download.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    imports: [RouterOutlet, HomeComponent, TechnicalskillComponent, EducationComponent, ProfessionalSummaryComponent, ExperienceComponent]
})
export class AppComponent implements OnInit {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  constructor(private pdfService: PdfDownloadService) {}

  ngOnInit() {
    this.pdfService.downloadRequested$.subscribe(() => this.downloadPDF());
  }

  async downloadPDF() {
    const element = this.pdfContent.nativeElement;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('full-content.pdf');
  }

 
}
