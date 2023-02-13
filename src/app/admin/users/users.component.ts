import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import * as firebase from 'firebase/compat';
import { AuthService } from 'src/app/service/auth.service';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(
    public authService: AuthService,
    public baseService: BaseService,
    public auth: Auth,
    ) { }


}
