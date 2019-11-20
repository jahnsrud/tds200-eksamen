import { Component, OnInit } from '@angular/core';
import Room from '../models/Room';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {ModalController, ToastController} from '@ionic/angular';
import {CameraPage} from '../camera/camera.page';
import {RoomCreatorService} from '../providers/room-creator.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  private imageResponse: any[];
  public facilitiesForm = [
    { val: 'WiFi', isChecked: false },
    { val: 'Cool Feature', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Coffee', isChecked: false },
  ];

  constructor(private imagePicker: ImagePicker,
              private toastController: ToastController,
              private modalController: ModalController,
              private roomCreator: RoomCreatorService) { }

  ngOnInit() {}


  openPhotoPicker() {


    const options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      // maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      // height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };

    this.imageResponse = [];
    this.imagePicker.getPictures(options).then((results) => {

      for (const base64 of results) {
        // for (let i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + base64);
      }
    }, (err) => {
      alert(err);
    });


  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  create() {

    let room = {} as Room;
    room = {
      address: '', availability: '', description: '', facilities: '', imageUrl: '', priceInNOK: 0, reviews: undefined, size: '',
      name: 'testing, testing'
    };

    this.roomCreator.createAndUploadRoom(room);
  }

  async openCamera() {
    const modal = await this.modalController.create({
      component: CameraPage
    });

    return await modal.present();

  }

}
