import {Component, OnInit} from '@angular/core';
import Room from '../../models/Room';
import {ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingPage} from '../booking/booking.page';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  room: Room;
  currencySuffix = ',-';

  constructor(private modalController: ModalController,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.room;
      }
    });
  }

  ngOnInit() {
  }

  async bookNow() {
    const modal = await this.modalController.create({
      component: BookingPage,
      cssClass: 'j-modal'
    });

    return await modal.present();

  }

  async openMap() {
    const modal = await this.modalController.create({
      component: MapPage
    });

    return await modal.present();

  }
}
