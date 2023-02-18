import { Component, Input, OnInit } from '@angular/core';
import { doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Recept } from 'src/app/receptbekuldes/recept';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-bekuldottrecept',
  templateUrl: './bekuldottrecept.component.html',
  styleUrls: ['./bekuldottrecept.component.scss']
})
export class BekuldottreceptComponent implements OnInit {

  counter: number = 0;
  fawheatawn = faWheatAwn;

  @Input() id!: string;
  recept!: Recept;
  loading = true;

  constructor(
    public service: BaseService,
    public router: Router,
    public route: ActivatedRoute,

  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((res) => {
      if (res['id']) {
        this.service.getReceptByID(res['id']).subscribe(res => {
          this.recept = res
        })
      }
    })
  }

  increment(){
    return this.service.incrementPlus(this.recept);
  }

  formatDate(timestamp: any): string {
    const date = timestamp.toDate();
    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
  }


}


