import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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

  openMeetingRoom() {
    this.router.navigate(['room']);
  }

}
