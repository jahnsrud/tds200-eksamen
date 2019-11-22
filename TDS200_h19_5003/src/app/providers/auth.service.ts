import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseAuth} from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User = null;

  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((authData) => {
      this.user = authData;
    });

  }

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
    return this.user !== null;

  }

  async getUser() {
    if (this.isLoggedIn()) {
      return this.user;
    }
  }




}
