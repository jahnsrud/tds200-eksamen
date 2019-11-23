import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import Room from '../../models/Room';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss'],
})
export class MeetingRoomComponent implements OnInit {

  @Input() room: Room;
  currencySuffix = ',-';

  constructor(private navController: NavController) {

  }

  ngOnInit() {}

  openMeetingRoom(room: Room) {

    const navigationExtras: NavigationExtras = {
      state: {
        room
      }
    };

    this.navController.navigateForward(['room'], navigationExtras);

  }

}
