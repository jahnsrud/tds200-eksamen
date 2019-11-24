import {Component, Input, OnInit} from '@angular/core';
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
  @Input() coordinates: Coordinates;
  @Input() name: string;
  @Input() address: string;

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

    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    new mapboxgl.Marker().setLngLat([this.coordinates.longitude, this.coordinates.latitude]).addTo(this.map);


  }

  close() {
    this.modalController.dismiss();
  }

  directions() {

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${this.coordinates.latitude},${this.coordinates.longitude}`;
    window.open(mapsUrl, '_system');

  }
}
