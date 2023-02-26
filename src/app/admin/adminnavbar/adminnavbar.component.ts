import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.scss']
})
export class AdminnavbarComponent {

  fahouse = faHouse;
  fafile = faFile
  fauser = faUser;
  facheck = faCheck;
}
