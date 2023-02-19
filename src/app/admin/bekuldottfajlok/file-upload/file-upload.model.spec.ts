import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadModel } from './file-upload.model';

describe('FileUploadModel', () => {
  let component: FileUploadModel;
  let fixture: ComponentFixture<FileUploadModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
