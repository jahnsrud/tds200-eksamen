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

    // Gets all rooms
    // this.rooms$ = this.firestore.collection('rooms').valueChanges({idField: 'id'}) as Observable<Room[]>;

    const date = new Date();
    console.log(date);

    // Gets all rooms available now

    this.rooms$ = this.firestore.collection('rooms', ref =>
        ref.where('bookedUntil', '<', date)
    ).valueChanges({idField: 'id'}) as Observable<Room[]>;


  }

  trackFunc(index, item) {
    return item.id;
  }



}
