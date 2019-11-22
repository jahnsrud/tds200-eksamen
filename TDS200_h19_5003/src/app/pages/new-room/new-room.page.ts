import {Component, OnInit} from '@angular/core';
import Room, {Coordinates} from '../../models/Room';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {ActionSheetController, ModalController, ToastController} from '@ionic/angular';
import {CameraPage} from '../camera/camera.page';
import {RoomCreatorService} from '../../providers/room-creator.service';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {

  private imageResponse: any[];
  room = {} as Room;

  map: mapboxgl;

  public facilitiesForm = [
    {val: 'WiFi', isChecked: false},
    {val: 'TV', isChecked: false},
    {val: 'Coffee', isChecked: false},
    {val: 'Food serving possible', isChecked: false},
    {val: 'HDMI', isChecked: false},
    {val: 'VGA', isChecked: false},
    {val: 'Whiteboard', isChecked: false},
    {val: 'All day access', isChecked: false},
    {val: 'Dedicated support person', isChecked: false},
    {val: 'Capacity for large events', isChecked: false},
  ];

  estimatedIncome: string;

  constructor(private imagePicker: ImagePicker,
              private toastController: ToastController,
              private modalController: ModalController,
              private location: Location,
              private roomCreator: RoomCreatorService,
              private actionSheetController: ActionSheetController) {

    this.room = {
      id: '',
      name: '',
      imageUrl: '',
      owner: '',
      address: '',
      availability: '',
      description: '',
      facilities: [],
      priceInNok: null,
      reviews: [],
      coordinates: null,
      maxNumberOfPeople: 2

    };


  }

  ngOnInit() {
    this.addMap();
  }

  addMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFobWFyMTciLCJhIjoiY2pvazNkODgyMDJtOTNwbW43YTQ2azA5ZSJ9.iPR0QgDHkzsJMy6jgCGNMg';

    this.map = new mapboxgl.Map({
      container: 'map-view',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10.757933, 59.911491],
      zoom: 9
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      placeholder: 'Search...',
    });

    this.map.addControl(geocoder);

    this.map.on('load', () => {

      this.map.resize();

      geocoder.on('result', e => {
        // this.map.getSource('single-point').setData(e.result.geometry);
        console.warn(e.result);

        const coordinates: Coordinates = {
          longitude: e.result.geometry.coordinates[0],
          latitude: e.result.geometry.coordinates[1],
        };

        this.room.address = e.result.place_name;

        this.room.coordinates = coordinates;


      });

    });


  }

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

    // TODO: Indicate error or success
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

    const {data} = await modal.onWillDismiss();

    console.log(data);

    // TODO: Validate
    this.room.imageUrl = data;

  }

  async promptUserForClosing() {


    const actionSheet = await this.actionSheetController.create({
      header: `Delete this room?`,
      subHeader: 'Your progress will not be saved',
      buttons: [{
        text: 'Delete',
        role: 'default',
        icon: 'trash',
        handler: () => {
          this.close();
        }
      },
        {
          text: 'Keep Editing',
          role: 'cancel',
          handler: () => {

          }
        }],

    });

    await actionSheet.present();

  }


  close() {
    this.location.back();
  }
}
