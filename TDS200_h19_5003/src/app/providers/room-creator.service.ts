import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {v4 as uuid} from 'uuid';
import Room from '../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomCreatorService {

  constructor(private firestore: AngularFirestore,
              private fireStorage: AngularFireStorage,
              private auth: AuthService) {
  }

  async createAndUploadRoom(room: Room) {

    if (this.auth.isLoggedIn) {

      await this.firestore.collection('rooms').add({
        owner: this.auth.currentUserId,
        name: room.name,
        imageUrl: room.imageUrl,
        priceInNok: room.priceInNok,
        description: room.description,
        address: room.address,
        maxNumberOfPeople: room.maxNumberOfPeople,
        bookedByUser: room.bookedByUser,
        bookedUntil: room.bookedUntil,
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

}
