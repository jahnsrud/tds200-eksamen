import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.fireAuth.auth.signOut();
  }

  async isLoggedIn() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }

  async getUser() {
    return this.fireAuth.auth.currentUser;
  }




}
