import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import Room from '../../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-tab-discovery',
  templateUrl: './discovery.page.html',
  styleUrls: ['./discovery.page.scss'],
})
export class DiscoveryPage implements OnInit {

  rooms$: Observable<Room[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.loadAvailableRooms();

  }

  loadAllRooms() {
    // Gets all rooms
    this.rooms$ = this.firestore.collection('rooms').valueChanges({idField: 'id'}) as Observable<Room[]>;

  }

  loadAvailableRooms() {

    // Gets all rooms available now by checking if bookedUntil is set to an earlier date.
    // A bit of a workaround that should be improved

    const date = new Date();

    this.rooms$ = this.firestore.collection('rooms', ref =>
        ref.where('bookedUntil', '<', date)
    ).valueChanges({idField: 'id'}) as Observable<Room[]>;
  }

  trackFunc(index, item) {
    return item.id;
  }


  refresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  segmentChanged(event) {
    console.log('Segment changed', event);


    // Clear our rooms array to avoid duplicate data being displayed in the wrong mode
    this.rooms$ = new Observable<[Room]>();

    if (event === 'available') {
      this.loadAvailableRooms();
    } else {
      this.loadAllRooms();
    }


  }
}
