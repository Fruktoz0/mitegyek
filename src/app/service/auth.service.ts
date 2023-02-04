import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@angular/fire/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public auth: Auth, public router: Router) { }




  //Login

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user?.email != null) {
          localStorage.setItem('email', result.user?.email);
          console.log('You have been successfully logged in!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  handleLogin(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response) => {
        if (response.user?.email != null) {
          localStorage.setItem('email', response.user?.email);
          alert('Sikeres Belépés!');
          this.router.navigate(['mitegyekma']);
        }
      })
      .catch((err) => {
        alert(err.message);
      })

  }

  isLoggedIn(): boolean {
    const email = localStorage.getItem('email');
    return email != null;
  }

  logout() {
    localStorage.clear();
  }


  getEmail(): string | null {
    return localStorage.getItem('email');
  }


  //Register
  handleRegister(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        alert("Regisztráció sikeres!")
        this.router.navigate(['login']);
      })
      .catch((err) => {
        alert("Felhasználó név már létezik");
      })
  }

  





}
