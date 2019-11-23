import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {ModalController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

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

  constructor(private auth: AuthService,
              private modalController: ModalController,
              private toastController: ToastController,
              private router: Router) {

    if (auth.isLoggedIn) {
      console.warn('Already logged in.');
      this.cancel();
    }

    auth.authState.subscribe(user => {
      if (user) {
        this.cancel();
      }

    });

  }

  ngOnInit() {

  }


  cancel() {
    this.modalController.dismiss();
  }

  switchFormToType(type: FormType) {
    this.formType = type;
  }


}
