import {Component, OnInit} from '@angular/core';
import Room from '../../models/Room';
import {ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  room = {} as Room;
  currencySuffix = ',-';

  constructor(private modalController: ModalController) {

    this.room = {
      name: 'The Room Name',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      address: 'The Big Road 23',
      availability: 'BOOKED',
      description: 'The best you can rent.',
      facilities: 'WiFi, HDMI, comfortable chairs',
      priceInNOK: 200,
      reviews: undefined,
      size: '120',

    };

  }

  ngOnInit() {
  }

  bookNow() {
    console.error('Not available yet');
  }

  async openMap() {
    const modal = await this.modalController.create({
      component: MapPage
    });

    return await modal.present();

  }
}
