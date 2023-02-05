import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditreceptComponent } from 'src/app/editrecept/editrecept.component';
import { Recept } from 'src/app/receptbekuldes/recept';
import { BaseService } from 'src/app/service/base.service';
import { BekuldottreceptComponent } from '../bekuldottrecept/bekuldottrecept.component';


@Component({
  selector: 'app-bekuldottreceptek',
  templateUrl: './bekuldottreceptek.component.html',
  styleUrls: ['./bekuldottreceptek.component.scss']
})
export class BekuldottreceptekComponent implements OnInit {

  fatrash = faTrash;
  pentosquare = faPenToSquare

  receptek: Recept[] = [];

  constructor(public service: BaseService, public router: Router, private modal: NgbModal) { }


  ngOnInit() {
    this.service.getRecept().subscribe((res: Recept[]) => {
      this.receptek = res.filter((recept: Recept) =>{
        
        return (recept.elfogadottRecept === false)
        
      })
    })
  }

  editRecept(recept: Recept) {
    const modalRef = this.modal.open(EditreceptComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = recept.id;
  }


  deleteRecept(recept: Recept) {
    if (confirm('Valóban Törölni akarod a receptet?') == true) {
      this.service.deleteRecept(recept).then(() => 
       console.log('delete successful'));
    }
  }

  elfogadRecept(recept: Recept){
    this.service.elfogadRecept(recept).then(() => 
    console.log('Recept Átküldve'));
  
  }
 

}

