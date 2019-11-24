import {Injectable} from '@angular/core';
import Room from '../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {

  constructor(private firestore: AngularFirestore,
              private auth: AuthService) {
  }

  async book(room: Room) {

    await this.firestore.doc(`rooms/${room.id}`).update({
      bookedBy: this.auth.currentUserId,
      bookedUntil: 'later',
    });

/*
      await this.firestore.collection('reservations').add({
      reservedBy: this.auth.currentUserId,
      fromDate: 'now',
      untilTime: 'later',
      room,
      */

      /*
      name: room.name,
      imageUrl: room.imageUrl,
      priceInNok: room.priceInNok,
      description: room.description,
      address: room.address,
      maxNumberOfPeople: room.maxNumberOfPeople,
      availability: room.availability,
      facilities: room.facilities,
      coordinates: room.coordinates,
      reviews: []*/

      // TODO: Check out this
   /* }).catch(error => {
      console.error('Please have a look at this');
      console.error(error);

    });
*/
  }


}
