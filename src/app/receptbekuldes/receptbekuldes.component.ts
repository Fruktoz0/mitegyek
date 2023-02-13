import { Component, OnInit } from '@angular/core';
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



export class ReceptbekuldesComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fawheatawn = faWheatAwn;
  fasugar = faCubesStacked;
  facloud = faCloudArrowUp;

  recept: Recept = new Recept();

  hozzavalok = [{ name: 'Hozzavaló 1', value: '' }];

  constructor(
    public service: BaseService,
    public router: Router,
    public uploadService: FileUploadService,
  ) { }

  ngOnInit(): void {

  }

  addHozzavalo() {
    this.hozzavalok.push({ name: 'hozzávalók ' + (this.hozzavalok.length + 1), value: '' });
  }

  onSubmit(form: NgForm) {
    this.service.createRecept({ ...form.value, elfogadottRecept: false }).
      then(() => form.reset());
      console.log(this.recept);
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


