import { Component, Input } from '@angular/core';

import { FileUploadService } from 'src/app/service/file-upload.service';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService){}

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

}
