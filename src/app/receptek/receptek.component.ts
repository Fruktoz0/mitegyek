import { Component, OnInit } from '@angular/core';
import { Recept } from '../receptbekuldes/recept';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-receptek',
  templateUrl: './receptek.component.html',
  styleUrls: ['./receptek.component.scss']
})


export class ReceptekComponent implements OnInit {

  constructor(public service: BaseService){}

  receptek: Recept[] = [];


  ngOnInit(): void {
    this.service.getRecept().subscribe((res: Recept[]) => {
      this.receptek = res.filter((recept: Recept) =>{
        return (recept.elfogadottRecept === true)
      })
    })
  }

}
