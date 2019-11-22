import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: mapboxgl;

  constructor(private modalController: ModalController) { }
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


    this.map.on('load', () => {

      this.map.resize();

    });


  }

  close() {
    this.modalController.dismiss();
  }
}
