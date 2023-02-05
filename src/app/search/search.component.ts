import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recept } from '../receptbekuldes/recept';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  receptek: Recept[] = [];
  isSearchEmpty: boolean | undefined;
  
  searchParams = {
    receptNev: null,
    glutenmentes: null,
    kategoria: null,
  };

  

  constructor(public firestore: AngularFirestore) { }


  searchRecipes() {
    this.receptek = [];
    const $receptNev = this.firestore
      .collection('receptek', (ref) =>
        ref.where('receptNev', '==', this.searchParams.receptNev)
      )
      .valueChanges({ idField: 'id' });
      
      combineLatest([$receptNev])
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
