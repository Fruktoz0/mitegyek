import { Component } from '@angular/core';
import { Recept } from '../receptbekuldes/recept';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-mitegyekma',
  templateUrl: './mitegyekma.component.html',
  styleUrls: ['./mitegyekma.component.scss']
})
export class MitegyekmaComponent {

  receptek: Recept[] = [];
  isSearchEmpty: boolean | undefined;

  searchParams = {
    receptNev: null,
    glutenmentes: null,
    kategoria: null,
  };

  constructor(public firestore: AngularFirestore){}



  searchRecipes() {
    this.receptek = [];
    const $glutenmentes = this.firestore
      .collection('receptek', (ref) =>
        ref.where('glutenmentes', '==', this.searchParams.glutenmentes)
      )
      .valueChanges({ idField: 'id' });
      
      combineLatest([$glutenmentes])
      .pipe(map(([one]) => [...one]))
      .subscribe((response: any) => {
        this.receptek = response;
        if (response.length > 0) {
        } else {
          this.isSearchEmpty = true;
        }
      });

  }
}
