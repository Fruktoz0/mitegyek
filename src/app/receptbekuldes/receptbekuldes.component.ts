import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Recept } from '../receptbekuldes/recept'
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploadService } from '../service/file-upload.service';
import { FileUpload } from './file-upload';
import { faCircleExclamation, faCircleInfo, faCirclePlus, faCloudArrowUp, faCubesStacked, faExclamation, faFileArrowUp, faFileCirclePlus, faFireBurner, faTrash, faTrashCan, faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import { Firestore } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';


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
  fatrash = faTrashCan;
  faplus = faCirclePlus;
  filearrowup = faFileArrowUp;
  facircleinfo = faCircleInfo;
  faexclamation = faCircleExclamation;
  fafireburner = faFireBurner;

  id: string = '';

  recept: Recept = new Recept();

  constructor(
    public service: BaseService,
    public router: Router,
    public uploadService: FileUploadService,
    public firestore: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.receptForm.valueChanges.subscribe(val => {

    })
  }

  getError(path: string, errorName: string) {
    const formControl = (this.receptForm.get(path) as FormControl);
    if (formControl.untouched && formControl.pristine) {
      return;
    }
    return formControl.errors?.[errorName];
  }

  nameValidator = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);


  receptForm = this.fb.group({
    receptNev: ["", this.nameValidator],
    kategoria: [""],
    konyha: [""],
    adag: [""],
    nehezseg: [""],
    koltseg: [""],
    elokeszulesiIdo: [""],
    elkeszitesiIdo: [""],
    sutesiMod: [""],
    imgUrl: [""],
    napszak: [""],
    glutenmentes: [""],
    cukrotTartalmaz: [""],
    tojasmentes: [""],
    laktozmentes: [""],
    tejmentes: [""],

    hozzavalok: this.fb.array([
      [""],
    ]),
    lepesek: this.fb.array([
      [""],
    ])

  });

  getHozzavalok() {
    return (this.receptForm.get('hozzavalok') as FormArray).controls as FormControl[]
  }

  addHozzavalo() {
    (this.receptForm.get('hozzavalok') as FormArray).push(new FormControl(''))
  }

  deleteHozzavalo(i: number) {
    (this.receptForm.get('hozzavalok') as FormArray).removeAt(i)
  }


  getLepesek() {
    return (this.receptForm.get('lepesek') as FormArray).controls as FormControl[]
  }

  addLepes() {
    (this.receptForm.get('lepesek') as FormArray).push(new FormControl(''))
  }

  deleteLepes(i: number) {
    (this.receptForm.get('lepesek') as FormArray).removeAt(i)
  }





  onSubmit(form: FormGroup) {
    this.receptForm.markAllAsTouched();
    this.service.createRecept({ ...form.value, elfogadottRecept: false, })
      .then(() => {
        form.reset();
        window.alert('A recept sikeresen beküldve');
      })
      .catch((err) => {
        window.alert('A recept beküldése nem sikerült');

      });

  }

  //Képfeltöltés
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(id: string,): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        const fileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(id, fileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          },
          () => {
            this.firestore.collection('receptek').doc(id).set({ imageUrl: fileUpload.url });
          }
        );
      }
    }
  }


}






