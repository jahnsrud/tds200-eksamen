import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService,
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
