import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private toastController: ToastController) { }

  ngOnInit() {}


  async register() {

    try {
      const result = await this.authService.register(this.user.username, this.user.password);
      console.log(result);
      console.log('Status: Registered');


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

  focusOn(next) {
    next.setFocus();
  }

}
