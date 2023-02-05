import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/receptbekuldes/file-upload';
import { FileUploadService } from 'src/app/service/file-upload.service';


@Component({
  selector: 'app-bekuldottfajlok',
  templateUrl: './bekuldottfajlok.component.html',
  styleUrls: ['./bekuldottfajlok.component.scss']
})
export class BekuldottfajlokComponent implements OnInit{
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(public uploadService: FileUploadService, public storage: AngularFireStorage, public db: AngularFireDatabase){}
 
  ngOnInit(): void {
   
  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }


}
