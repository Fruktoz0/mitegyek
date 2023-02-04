import { Component } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Recept } from '../receptbekuldes/recept'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-receptbekuldes',
  templateUrl: './receptbekuldes.component.html',
  styleUrls: ['./receptbekuldes.component.scss']
})



export class ReceptbekuldesComponent {

  recept: Recept = new Recept();


  constructor(
    public service: BaseService, 
    public router: Router){}

    onSubmit(form: NgForm) {
      this.service.createRecept(form.value).
        then(() => form.reset());
    }

}
