import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string;

  constructor(private authService: AuthService,
              private auth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit() {

    this.checkLoginStatus();

  }

  checkLoginStatus() {

  }

  signOut() {
    this.authService.signOut();
  }

  login() {
    this.router.navigate(['login']);

  }
}
