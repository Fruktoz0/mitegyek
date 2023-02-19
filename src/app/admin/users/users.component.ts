import { Component, OnInit } from '@angular/core';
import { Auth, User, } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { BaseService } from 'src/app/service/base.service';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  constructor(
    public afAuth: AuthService,
    public baseService: BaseService,
    public auth: AngularFireAuth
    ) {   }
    
    async ngOnInit() {
    
      }

     
      
      
    }

  

