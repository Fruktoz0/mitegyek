import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../receptbekuldes/file-upload';
import { finalize, map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, from } from 'rxjs';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where, getDoc, serverTimestamp, FieldValue,
} from '@angular/fire/firestore';
import { Recept } from '../receptbekuldes/recept';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ListResult } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private basePath = 'uploads';
  percentage = 0;

  constructor(
    public db: AngularFireDatabase,
    public storage: AngularFireStorage,
    public firestore: AngularFirestore

  ) { }



  pushFileToStorage(id: string, fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);

          const recipeRef = this.firestore.collection('receptek').doc(id);
          recipeRef.update({ imageUrl: downloadURL });
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }


  listAll(): Observable<any[]> {
    return from(this.storage.ref('/').listAll()).pipe(
      switchMap((result: ListResult) => {
        const downloadUrls$: Observable<any>[] = [];
        result.items.forEach((item) => {
          downloadUrls$.push(from(item.getDownloadURL()));
        });
        return combineLatest(downloadUrls$).pipe(
          map((urls: any[]) => {
            return result.items.map((item, index) => {
              return {
                name: item.name,
                url: urls[index],
              };
            });
          })
        );
      })
    );
  }  




  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

}




