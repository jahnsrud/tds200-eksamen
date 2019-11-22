import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

export enum FormType {
  Register,
  Login,
  Welcome
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  formType: FormType = FormType.Welcome;

  // Makes Angular recognize our Enum
  FormType = FormType;

  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private toastController: ToastController,
              private router: Router) {
  }

  ngOnInit() {
  }

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

  async register() {

    try {
      const result = await this.authService.register(this.user.username, this.user.password);
      console.log(result);
      console.log('Status: Registered');
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


  resetPassword() {
    this.presentToast('Not available');
  }

  redirectToStart() {
    this.router.navigate(['']);
  }

  cancel() {
    this.redirectToStart();
  }

  segmentChanged($event: CustomEvent) {

  }
}
