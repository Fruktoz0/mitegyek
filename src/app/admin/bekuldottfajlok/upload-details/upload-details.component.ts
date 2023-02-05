import { Component, Input } from '@angular/core';
import { FileUpload } from 'src/app/receptbekuldes/file-upload';
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent {
  
  @Input() fileUpload!: FileUpload;

  constructor(public uploadService: FileUploadService){}

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

}
