import { Injectable } from '@angular/core';
import { Recept } from '../receptbekuldes/recept';
import { Auth } from '@angular/fire/auth';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where, getDoc, serverTimestamp, FieldValue, 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private dbPath = '/receptek';

  constructor(public firestore: Firestore, public auth: Auth,) { }


  createRecept(recept: Recept) {
    const receptRef = collection(this.firestore, 'receptek');
    const receptWithTimestamp = {...recept, date: serverTimestamp()};
      return addDoc(receptRef, receptWithTimestamp);
  }

  getRecept(): Observable<Recept[]> {
    const receptsRef = collection(this.firestore, 'receptek');
    return collectionData(receptsRef, { idField: 'id' }) as Observable<Recept[]>;
  }

  //Bekuldottrecept

  incrementPlus(recept: Recept) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    getDoc(receptDocRef).then((doc) => {
      if (doc.exists()) {
        const recept = doc.data() as Recept;
        const elkeszitettem = isNaN(recept.elkeszitettem) ? 0 : recept.elkeszitettem;
        const updatedRecept = { ...recept, elkeszitettem: elkeszitettem + 1 };
        updateDoc(receptDocRef, updatedRecept).then(() => {
          console.log('Sikeres Mentes');
        }).catch((error) => {
          console.log('Hiba a mentés során:', error);
        });
      }
    });
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

  modifyReceptPrice(recept: Recept, amount: number) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    return updateDoc(receptDocRef, { price: amount });
  }

  elfogadRecept(recept: Recept) {
    const receptDocRef = doc(this.firestore, `receptek/${recept.id}`);
    return setDoc(receptDocRef, { ...recept, elfogadottRecept: true });
  }


}