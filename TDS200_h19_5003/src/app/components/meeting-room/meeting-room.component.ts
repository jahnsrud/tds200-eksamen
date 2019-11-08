import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss'],
})
export class MeetingRoomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  openMeetingRoom() {
    this.router.navigate(['room']);
  }

}
