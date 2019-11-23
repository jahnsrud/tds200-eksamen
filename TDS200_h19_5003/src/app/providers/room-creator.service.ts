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

  async uploadImageToDatabase(imageBase64) {
    const fileName = `app-img-${uuid()}.jpg`;
    console.log(fileName);
    const fileRef = this.fireStorage.ref(fileName);
    const uploadTask = fileRef.putString(
        imageBase64,
        'base64',
        {contentType: 'image/jpg'}
    );
    await uploadTask.then();
    return fileRef.getDownloadURL().toPromise();
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
        availability: room.availability,
        facilities: room.facilities,
        coordinates: room.coordinates,
        reviews: []

      });

    }

  }

}
