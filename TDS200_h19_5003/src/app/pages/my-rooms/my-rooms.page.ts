import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Room, {Coordinates, Review} from '../../models/Room';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.page.html',
  styleUrls: ['./my-rooms.page.scss'],
})
export class MyRoomsPage implements OnInit {

  rooms: Room[] = [];

  constructor(private router: Router,
              private auth: AuthService) {

    const coordinatesOslo: Coordinates = {
      longitude: '10.757933',
      latitude: '59.911491',
    };

    const coordinatesNYC: Coordinates = {
      longitude: '-73.935242',
      latitude: '40.730610',
    };

    const review1: Review = {
      stars: 5,
      author: 'someone',
      comment: 'Great atmosphere.',
      date: 'Today',
    };

    const review2: Review = {
      stars: 4,
      author: 'else',
      comment: 'Almost perfect. Just one mistake ruined everything.',
      date: 'Yesterday',
    };

    const room1: Room = {
      id: '',
      name: 'The Room Name',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      address: 'The Big Road 23',
      availability: 'BOOKED',
      description: 'The best you can rent.',
      facilities: ['WiFi', 'Barista', 'TV', 'Food Services'],
      priceInNok: 200,
      reviews: [review1, review2],
      coordinates: coordinatesOslo,
      maxNumberOfPeople: 8,
      owner: '',
    };


    const room2: Room = {
      id: '',
      name: 'The It Worked Room',
      imageUrl: 'https://images.unsplash.com/photo-1574174227799-c3697c71352a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      address: 'The Small Road 23',
      availability: 'Available',
      description: 'Small.',
      facilities: ['WiFi'],
      priceInNok: 250,
      reviews: [review2],
      coordinates: coordinatesNYC,
      maxNumberOfPeople: 16,
      owner: '',
    };


    this.rooms.push(room1, room2);

  }

  ngOnInit() {
  }

  addRoom() {

    if (this.auth.isLoggedIn) {
      this.router.navigate(['new-room']);
    } else {
      this.router.navigate(['login']);

    }
  }
}
