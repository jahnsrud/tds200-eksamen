import {Component, OnInit} from '@angular/core';
import Room, {Coordinates} from '../../models/Room';
import {ActionSheetController, ModalController, ToastController} from '@ionic/angular';
import {CameraPage} from '../camera/camera.page';
import {RoomCreatorService} from '../../providers/room-creator.service';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {Location} from '@angular/common';
import {AuthService} from '../../providers/auth.service';
import * as firebase from 'firebase';

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

  constructor(private toastController: ToastController,
              private modalController: ModalController,
              private auth: AuthService,
              private location: Location,
              private roomCreator: RoomCreatorService,
              private actionSheetController: ActionSheetController) {

    this.room = {
      id: '',
      name: '',
      imageUrl: '',
      owner: '',
      address: '',
      description: '',
      bookedByUser: '',
      bookedUntil: null,
      facilities: [],
      priceInNok: null,
      reviews: [],
      coordinates: null,
      maxNumberOfPeople: 2

    };

    if (!auth.isLoggedIn) {
      this.close();
    }


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
        role: 'destructive',
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
    this.modalController.dismiss();
  }

  async inputChange(files: FileList) {

    const file = files[0];

    console.log(file);

    const uploadedImageUrl = await this.roomCreator.uploadImageFile(file);
    console.log(uploadedImageUrl);

    this.room.imageUrl = uploadedImageUrl;

    /*
    for (const file of files) {
      console.warn('HEY');
      console.warn(file);

    }

     */
  }

}
