import { Component, OnInit } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ModalController, ToastController} from '@ionic/angular';
import {RoomCreatorService} from '../../providers/room-creator.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imagePreviewUrl: string;
  uploadedImageUrl: string;
  // room = {} as Room;

  private imageBase64 = '';

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera,
              private roomCreator: RoomCreatorService,
              private toastController: ToastController,
              private modalController: ModalController) { }

  ngOnInit() {
    this.addCameraView();
  }

  addCameraView() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI

      this.imagePreviewUrl = 'data:image/jpeg;base64,' + imageData;
      this.imageBase64 = imageData;




    }, (err) => {

      console.log('Camera not available');
      console.log(err);
      this.presentToast(`Camera not available: ${err}`);

      /*
      Delay dismiss so that the Toast can display
       */
      setTimeout(() => {
        this.close();
      }, 1100);

    });
  }

  async saveImage() {
    this.uploadedImageUrl = await this.roomCreator.uploadImageToDatabase(this.imageBase64);
    console.log(this.uploadedImageUrl);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 900
    });

    toast.present();
  }


  close() {
    this.modalController.dismiss(this.uploadedImageUrl);
  }
}
