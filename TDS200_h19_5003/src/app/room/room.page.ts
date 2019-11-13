import { Component, OnInit } from '@angular/core';
import IRoom from '../models/Room';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  room = {} as IRoom;

  constructor() {

    this.room = {
      name: 'SOMETHING',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      address: 'The Big Road 23',
      availability: 'BOOKED',
      description: 'The best you can rent.',
      facilities: 'WiFi, HDMI, comfortable chairs',
      price: 200,
      reviews: undefined,
      size: '120',

    };

    /*

    this.room.name = 'title_soon';
    this.room.imageUrl = '';
    this.room.price = 1000;
    this.room.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    this.room.address = 'Trondheimsveien 5D, 0560 Oslo';
    this.room.size = '100 kvm';
    this.room.availability = 'Unknown availability';
    this.room.facilities = 'WiFi, TV with HDMI, etc, etc';
    this.room.reviews = '5 stars, more coming soon';


     */
  }

  ngOnInit() {



  }

}
