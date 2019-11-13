import { Component, OnInit } from '@angular/core';
import Room from '../models/Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  room = {} as Room;

  constructor() {

    this.room = {
      name: 'SOMETHING',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      address: 'The Big Road 23',
      availability: 'BOOKED',
      description: 'The best you can rent.',
      facilities: 'WiFi, HDMI, comfortable chairs',
      price: 200,
      reviews: undefined,
      size: '120',

    };

  }

  ngOnInit() {
  }

  bookNow() {
    console.error('Not available yet');
  }

}
