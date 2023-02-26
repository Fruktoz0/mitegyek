import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ListResult } from '@angular/fire/compat/storage/interfaces';
import { Observable } from 'rxjs';
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

  items: Observable<any[]> | undefined;

  constructor(public uploadService: FileUploadService, public storage: AngularFireStorage, public db: AngularFireDatabase){}
 
  ngOnInit(): void {
    this.uploadService.listAll().subscribe(data => {
      data.forEach(item => {
        console.log(item.name, item.url);
      });
    });
  
  }




  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


      
    
  


}
