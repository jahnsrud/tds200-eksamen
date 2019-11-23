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

  constructor(public firestore: AngularFirestore) { }

  ngOnInit() {
    this.rooms$ = this.firestore.collection('rooms').valueChanges({idField: 'id'}) as Observable<Room[]>;

  }

  trackFunc(index, item) {
    // console.log(item, index);
    return item.id;
  }



}
