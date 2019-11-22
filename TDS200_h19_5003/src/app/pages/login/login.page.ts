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

  constructor(private authService: AuthService,
              private toastController: ToastController,
              private router: Router) {
  }

  ngOnInit() {
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

  cancel() {
    this.redirectToStart();
  }

  switchToLogin() {
    this.formType = FormType.Login;
  }

  switchToRegister() {
    this.formType = FormType.Register;
  }

}
