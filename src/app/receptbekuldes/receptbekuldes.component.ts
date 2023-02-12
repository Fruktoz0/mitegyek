import { Component } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Recept } from '../receptbekuldes/recept'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FileUploadService } from '../service/file-upload.service';
import { FileUpload } from './file-upload';
import { faCloudArrowUp, faCubesStacked, faWheatAwn } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-receptbekuldes',
  templateUrl: './receptbekuldes.component.html',
  styleUrls: ['./receptbekuldes.component.scss']
})



export class ReceptbekuldesComponent {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fawheatawn = faWheatAwn;
  fasugar = faCubesStacked;
  facloud = faCloudArrowUp;
   

  recept: Recept = new Recept();


  constructor(
    public service: BaseService,
    public router: Router,
    public uploadService: FileUploadService) { }

  onSubmit(form: NgForm) {
    this.service.createRecept({ ...form.value, elfogadottRecept: false }).
      then(() => form.reset());
  }

//Képfeltöltés
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


