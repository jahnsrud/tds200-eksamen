import { Component, OnInit } from '@angular/core';
import Room from '../../models/Room';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {ModalController, ToastController} from '@ionic/angular';
import {CameraPage} from '../camera/camera.page';
import {RoomCreatorService} from '../../providers/room-creator.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  private imageResponse: any[];

  room = {} as Room;

  public facilitiesForm = [
    { val: 'WiFi', isChecked: false },
    { val: 'TV', isChecked: false },
    { val: 'Coffee', isChecked: false },
    { val: 'Food serving possible', isChecked: false },
    { val: 'HDMI', isChecked: false },
    { val: 'VGA', isChecked: false },
    { val: 'Whiteboard', isChecked: false },
    { val: 'All day access', isChecked: false },
    { val: 'Dedicated support person', isChecked: false },
    { val: 'Capacity for large events', isChecked: false },
  ];
    estimatedIncome: string;



  constructor(private imagePicker: ImagePicker,
              private toastController: ToastController,
              private modalController: ModalController,
              private roomCreator: RoomCreatorService) {

    // TODO: FIX

    this.room = {
      id: '',
      name: '',
      imageUrl: '',
      address: '',
      availability: '',
      description: '',
      facilities: [],
      priceInNok: null,
      reviews: undefined,
      maxNumberOfPeople: 2

    };


  }

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

    this.setFacilities();

    this.roomCreator.createAndUploadRoom(this.room);
  }

  setFacilities() {
    const facilities: string[] = [];

    for (const item of this.facilitiesForm) {
      console.log(item);

      if (item.isChecked) {
        facilities.push(item.val);
      }
    }

    this.room.facilities = facilities;
  }

  async openCamera() {
    const modal = await this.modalController.create({
      component: CameraPage
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    console.log(data);

    // TODO: Validate
    this.room.imageUrl = data;



  }

}
