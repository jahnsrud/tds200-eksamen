import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.page.html',
  styleUrls: ['./my-rooms.page.scss'],
})
export class MyRoomsPage implements OnInit {

  constructor(private router: Router  ) { }

  ngOnInit() {
  }

  addRoom() {
    this.router.navigate(['new-room']);
  }
}
