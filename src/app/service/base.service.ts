import { Injectable } from '@angular/core';
import { Recept } from '../receptbekuldes/recept';
import { Auth } from '@angular/fire/auth';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  addRecept(value: any) {
    throw new Error('Method not implemented.');
  }
  private dbPath = '/receptek';

  constructor(public firestore: Firestore, public auth: Auth,) { }


  createRecept(recept: Recept) {
    const receptRef = collection(this.firestore, 'receptek');
    return addDoc(receptRef, recept);
  }

  getRecept(): Observable<Recept[]> {
    const receptsRef = collection(this.firestore, 'receptek');
    return collectionData(receptsRef, { idField: 'id' }) as Observable<Recept[]>;
  }

  deleteRecept(recept: Recept) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    return deleteDoc(receptDocRef);
  }

  getReceptByID(id: string) {
    const receptRef = doc(this.firestore, `receptek/${id}`);
    return docData(receptRef, { idField: 'id' }) as Observable<Recept>;
  }

  updateRecept(recept: Recept) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    return setDoc(receptDocRef, recept);
  }

  modifyBookPrice(recept: Recept, amount: number) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    return updateDoc(receptDocRef, { price: amount });
  }



}