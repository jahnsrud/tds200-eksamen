import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string;

  constructor(private authService: AuthService,
              private auth: AngularFireAuth) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      console.log('Should be logged in...');
      // this.email = this.authService.getUser().email;
      // this.email = 'Is logged in!';
    } else {
      // this.email = 'Not signed in';
    }

    this.checkLoginStatus();

  }

  checkLoginStatus() {

    // TODO: Improve: flytt til Auth Service

    this.auth.auth.onAuthStateChanged(user => {
      if (user) {
        this.email = user.email;
      } else {
        this.email = 'Not signed in';
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }

}
