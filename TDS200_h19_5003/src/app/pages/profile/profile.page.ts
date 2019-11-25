import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {ModalController} from '@ionic/angular';
import {LoginPage} from '../login/login.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public authService: AuthService,
              private modalController: ModalController) {
  }

  ngOnInit() {

    this.checkLoginStatus();

  }

  checkLoginStatus() {

  }

  signOut() {
    this.authService.signOut();
  }

  async login() {

    const modal = await this.modalController.create({
      component: LoginPage
    });

    return await modal.present();

  }
}
