import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import Room from '../../models/Room';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss'],
})
export class MeetingRoomComponent implements OnInit {

  @Input() room: Room;

  constructor(private router: Router) {

  }

  ngOnInit() {}

  openMeetingRoom(room: Room) {

    const navigationExtras: NavigationExtras = {
      state: {
        room
      }
    };

    this.router.navigate(['room'], navigationExtras);
  }

}
