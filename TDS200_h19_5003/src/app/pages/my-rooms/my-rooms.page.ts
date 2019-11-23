import {Component, OnInit} from '@angular/core';
import Room, {Coordinates, Review} from '../../models/Room';
import {AuthService} from '../../providers/auth.service';
import {LoginPage} from '../login/login.page';
import {ModalController} from '@ionic/angular';
import {NewRoomPage} from '../new-room/new-room.page';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.page.html',
  styleUrls: ['./my-rooms.page.scss'],
})
export class MyRoomsPage implements OnInit {

  myRooms$: Observable<Room[]>;

  constructor(private auth: AuthService,
              private modalController: ModalController,
              private firestore: AngularFirestore) {

  }

  ngOnInit() {

    // Workaround to get the correct currentUserId

    console.warn(this.auth.currentUserId);

    setTimeout(() => {

      this.myRooms$ = this.firestore.collection('rooms', ref =>
          ref.where('owner', '==', this.auth.currentUserId)
      ).valueChanges({idField: 'id'}) as Observable<Room[]>;
    }, 500);


  }

  trackFunc(index, item) {
    return item.id;
  }

  addRoom() {

    if (this.auth.isLoggedIn) {
      this.openAddRoom();
    } else {
      this.openLogin();
    }
  }

  async openAddRoom() {
    const modal = await this.modalController.create({
      component: NewRoomPage
    });

    modal.present();

  }

  async openLogin() {
    const modal = await this.modalController.create({
      component: LoginPage
    });

    await modal.present();

    if (this.auth.isLoggedIn) {
      this.openAddRoom();
    }

  }
}
