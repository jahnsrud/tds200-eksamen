import {Injectable} from '@angular/core';
import Room from '../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {

  constructor(private firestore: AngularFirestore,
              private auth: AuthService) {
  }

  async book(room: Room, requestedDate: Date) {

    await this.firestore.doc(`rooms/${room.id}`).update({
      bookedBy: this.auth.currentUserId,
        bookedUntil: firebase.firestore.Timestamp.fromDate(requestedDate),
    });


  }

  async clearBooking(room: Room) {
    await this.firestore.doc(`rooms/${room.id}`).update({
      bookedBy: null,
      bookedUntil: new Date(0),
    });
  }

  isRoomBooked(room: Room) {

    console.log(`Booked Until: ${room.bookedUntil.toMillis()} -- ${new Date().getMilliseconds()}`);

    if (room.bookedUntil.toMillis() > new Date().getMilliseconds()) {
      return true;
    } else {
      return false;
    }


    /*
    await this.firestore.doc(`rooms/${room.id}`).ref.get().then(doc => {
        if (doc) {
          console.error(doc);

          return true;
        } else {
          console.error('WHAT');
        }

      });
     */

  }


}
