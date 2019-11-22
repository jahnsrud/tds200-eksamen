import {Component, OnInit} from '@angular/core';
import Room from '../../models/Room';
import {ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingPage} from '../booking/booking.page';

@Component({
    selector: 'app-room',
    templateUrl: './room.page.html',
    styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

    room: Room;
    currencySuffix = ',-';
    mapPreviewImageUrl: string;

    constructor(private modalController: ModalController,
                private route: ActivatedRoute,
                private router: Router) {

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.room = this.router.getCurrentNavigation().extras.state.room;
            }
        });
    }

    ngOnInit() {

        const coordinates = `${this.room.coordinates.longitude},${this.room.coordinates.latitude},16,0.00,0.00`;
        const token = 'pk.eyJ1IjoiamFobWFyMTciLCJhIjoiY2pvazNkODgyMDJtOTNwbW43YTQ2azA5ZSJ9.iPR0QgDHkzsJMy6jgCGNMg';

        this.mapPreviewImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${coordinates}/1000x600@2x?access_token=${token}`;

    }

    async bookNow() {
        const modal = await this.modalController.create({
            component: BookingPage,
            cssClass: 'j-modal',
            componentProps: { room: this.room }
        });

        return await modal.present();

    }

    async openMap() {
        const modal = await this.modalController.create({
            component: MapPage,
            cssClass: 'j-modal'
        });

        return await modal.present();

    }
}
