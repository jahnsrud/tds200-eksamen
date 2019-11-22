import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {}


  async login() {

    try {
      const result = await this.authService.login(this.user.username, this.user.password);
      console.log(result);
      console.log('Status: Signed in');
      this.redirectToStart();

    } catch (e) {
      console.warn(e);
      this.presentToast(e);
    }

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  redirectToStart() {
    this.router.navigate(['']);
  }


}
