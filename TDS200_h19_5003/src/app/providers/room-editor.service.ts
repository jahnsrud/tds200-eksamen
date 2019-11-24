import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {v4 as uuid} from 'uuid';
import Room, {Review} from '../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RoomEditorService {

  constructor(private firestore: AngularFirestore,
              private fireStorage: AngularFireStorage,
              private auth: AuthService) {
  }

  async createAndUploadRoom(room: Room) {

    if (this.auth.isLoggedIn) {

      // Workaround for the AngularFire query to fetch correctly
      const initialDate = new Date(0);

      await this.firestore.collection('rooms').add({
        owner: this.auth.currentUserId,
        name: room.name,
        imageUrl: room.imageUrl,
        priceInNok: room.priceInNok,
        description: room.description,
        address: room.address,
        maxNumberOfPeople: room.maxNumberOfPeople,
        bookedByUser: room.bookedByUser,
        bookedUntil: initialDate,
        facilities: room.facilities,
        coordinates: room.coordinates,
        reviews: []

        // TODO: Check out this
      }).catch(error => {
        console.error('Please have a look at this');
        console.error(error);

      });

    }
  }

  async deleteRoom(room: Room) {
    this.firestore.doc(`rooms/${room.id}`).delete().catch(error => {
      console.log(error);
    }).then(() => console.log(`Deleting post (${room.id}) in (${room})`));

  }

  async uploadBase64Image(imageBase64) {
    const fileRef = this.fireStorage.ref(this.randomId);

    const uploadTask = fileRef.putString(
        imageBase64,
        'base64',
        {contentType: 'image/jpg'}
    );
    await uploadTask.then();
    return fileRef.getDownloadURL().toPromise();
  }

  async uploadImageFile(file) {

    const fileRef = this.fireStorage.ref(this.randomId);

    const uploadTask = fileRef.put(file);
    await uploadTask.then();
    return fileRef.getDownloadURL().toPromise();
  }

  get randomId(): string {
    return `app-img-${uuid()}.jpg`;
  }

  averageRating(room: Room): number {
    let rating = 0;

    for (const review of room.reviews) {
      rating += review.stars;
    }

    return rating / room.reviews.length;

  }

  async postReview(review: Review, room: Room) {

    // TODO: Detect if user has rented room earlier

    if (this.auth.isLoggedIn) {

      review.author = this.auth.currentUserId;
      review.name = this.auth.getUser.email;

      // Assigns current date to a timestamp format.
      review.date = firebase.firestore.Timestamp.fromDate(new Date());

      await this.firestore.doc(`rooms/${room.id}`).update({
        // Appends the Review object to our reviews array using arrayUnion.
        reviews: firebase.firestore.FieldValue.arrayUnion(review)
      });

    }
  }


}
