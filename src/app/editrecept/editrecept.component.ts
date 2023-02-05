import { Component, Input, OnInit,} from '@angular/core';
import { BaseService } from '../service/base.service';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recept } from 'src/app/receptbekuldes/recept';

@Component({
  selector: 'app-editrecept',
  templateUrl: './editrecept.component.html',
  styleUrls: ['./editrecept.component.scss']
})
export class EditreceptComponent implements OnInit {
  @Input() id!: string;
  recept!: Recept ;

  constructor(public service: BaseService, public activeModal: NgbActiveModal){}

  ngOnInit() {
    if (this.id)
      this.service.getReceptByID(this.id).subscribe(res => {
        this.recept = res
      });
  }

  onUpdate() {
    this.service.updateRecept(this.recept).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }

  setPrice(recept: Recept, price: number) {
    this.service.modifyReceptPrice(recept, price)
  }


}
