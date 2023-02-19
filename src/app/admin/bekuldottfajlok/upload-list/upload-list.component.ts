import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { FileUploadService } from 'src/app/service/file-upload.service';


@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {
  fileUploads?: any[];

  private basePath = '/uploads';

  constructor(
    private uploadService: FileUploadService,
    ){}

  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
}
