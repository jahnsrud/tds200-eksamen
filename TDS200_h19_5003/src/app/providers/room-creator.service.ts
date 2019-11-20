import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {v4 as uuid} from 'uuid';
import Room, {Review} from '../models/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {first} from 'rxjs/operators';

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

    // const uploadedImageUrl = await this.uploadImageToDatabase();
    const rooms = this.firestore.collection<Room>('rooms');

    // TODO: FIX
    // const loggedInUser = await this.auth.authState.pipe(first()).toPromise();

    await this.firestore.collection('rooms').add({
      name: room.name,
      imageUrl: room.imageUrl,
      priceInNok: room.priceInNOK,
      description: room.description,
      address: room.address,
      author: 'AUTHOR_COMING_SOON',
      size: room.size,
      availability: room.availability,
      facilities: room.facilities,
      reviews: 'REVIEW_COMING_SOON'

    });

  }

}
