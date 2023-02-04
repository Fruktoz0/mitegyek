import { Component } from '@angular/core';
import { BaseService } from '../service/base.service';
import { AuthService } from '../service/auth.service';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService){}

  faUser = faUser;
  farRightfrombacket = faRightFromBracket;

}
