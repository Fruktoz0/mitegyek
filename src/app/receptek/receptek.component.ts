import { Component, OnInit } from '@angular/core';
import { Recept } from '../receptbekuldes/recept';
import { BaseService } from '../service/base.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-receptek',
  templateUrl: './receptek.component.html',
  styleUrls: ['./receptek.component.scss']
})


export class ReceptekComponent implements OnInit {
  searchTerm: any;
  

  constructor(public service: BaseService, public db: AngularFirestore){}

  receptek: Recept[] = [];


  ngOnInit(): void {
    this.service.getRecept().subscribe((res: Recept[]) => {
      this.receptek = res.filter((recept: Recept) =>{
        return (recept.elfogadottRecept === true)
      })
    })
  }

  search() {
     this.db.collection('receptek', ref =>
    ref.where('receptNev', '>=', this.searchTerm)
    .where('receptNev', '<=', this.searchTerm + '\uf8ff')
    ).valueChanges().subscribe((res: any) => {
      this.receptek = res;
    });
    }


}
