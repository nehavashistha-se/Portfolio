import { Component,ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TechnicalskillComponent } from "./technicalskill/technicalskill.component";
import { EducationComponent } from "./Education/Education.component";
import { ProfessionalSummaryComponent } from "./professional-summary/professional-summary.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PdfDownloadService } from './shared/services/pdf-download.service';
import { PDFDocument } from 'pdf-lib';
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

  // Capture HTML as canvas
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Embed the image into the PDF
  const pngImage = await pdfDoc.embedPng(imgData);

  const { width, height } = pngImage.scale(1);
  const pageWidth = page.getWidth();
  const pageHeight = page.getHeight();

  // Scale image to fit page
  const scale = Math.min(pageWidth / width, pageHeight / height);
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  page.drawImage(pngImage, {
    x: (pageWidth - scaledWidth) / 2,
    y: (pageHeight - scaledHeight) / 2,
    width: scaledWidth,
    height: scaledHeight,
  });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'full-content.pdf';
  link.click();

  URL.revokeObjectURL(url);
}
 
}
