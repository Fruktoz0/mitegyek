import { Component } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-bekuldottrecept',
  templateUrl: './bekuldottrecept.component.html',
  styleUrls: ['./bekuldottrecept.component.scss']
})
export class BekuldottreceptComponent {
  constructor(public service: BaseService){}
}
