import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import Room from '../../models/Room';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.page.html',
  styleUrls: ['./my-rooms.page.scss'],
})
export class MyRoomsPage implements OnInit {

  rooms: Room[] = [];

  constructor(private router: Router  ) {
    const room1: Room = {
      name: 'The Room Name',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      address: 'The Big Road 23',
      availability: 'BOOKED',
      description: 'The best you can rent.',
      facilities: 'WiFi, HDMI, comfortable chairs',
      priceInNOK: 200,
      reviews: undefined,
      size: '120',
    };


    const room2: Room = {
      name: 'The It Worked Room',
      imageUrl: 'https://images.unsplash.com/photo-1574174227799-c3697c71352a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      address: 'The Small Road 23',
      availability: 'Available',
      description: 'Small.',
      facilities: 'WiFi, 4G, HDMI, comfortable chairs',
      priceInNOK: 250,
      reviews: undefined,
      size: '90',
    };


    this.rooms.push(room1, room2);

  }

  ngOnInit() {
  }

  addRoom() {

    this.router.navigate(['new-room']);
  }
}
