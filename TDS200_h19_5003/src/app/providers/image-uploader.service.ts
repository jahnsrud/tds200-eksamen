import {Injectable} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {

  constructor(private fireStorage: AngularFireStorage) {
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
}
