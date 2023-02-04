import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(public authService: AuthService, public baseService: BaseService){}
}
