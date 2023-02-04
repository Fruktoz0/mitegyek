import { Component, Input, OnInit } from '@angular/core';
import { doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recept } from 'src/app/receptbekuldes/recept';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-bekuldottrecept',
  templateUrl: './bekuldottrecept.component.html',
  styleUrls: ['./bekuldottrecept.component.scss']
})
export class BekuldottreceptComponent implements OnInit {

  @Input() id!: string;
  recept!: Recept;

  constructor(
    public service: BaseService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((res) => {
      if (res['id']) {
        this.service.getReceptByID(res['id']).subscribe(res => {
          this.recept = res
        })
      }

      /*   if (this.id)
         this.service.getReceptByID(this.id).subscribe(res => {
           this.recept = res
         });*/
    })
  }
}


