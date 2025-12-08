import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PdfDownloadService {
  private downloadTrigger = new Subject<void>();
  downloadRequested$ = this.downloadTrigger.asObservable();

  requestDownload() {
    this.downloadTrigger.next();
  }
}
