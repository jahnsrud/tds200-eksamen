import {Component, OnInit} from '@angular/core';
import Room from '../../models/Room';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingPage} from '../booking/booking.page';
import {AuthService} from '../../providers/auth.service';
import {LoginPage} from '../login/login.page';
import {NewReviewPage} from '../new-review/new-review.page';

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
                private router: Router,
                private route: ActivatedRoute,
                private auth: AuthService,
                private actionSheetController: ActionSheetController) {

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

        if (this.auth.isLoggedIn) {

            const modal = await this.modalController.create({
                component: BookingPage,
                cssClass: 'j-modal',
                componentProps: {room: this.room}
            });

            return await modal.present();
        } else {
            this.promptLogin();
        }

    }

    async promptLogin() {
        const actionSheet = await this.actionSheetController.create({
            header: `Booking requires a user account`,
            subHeader: 'Sign up for free to get started',
            buttons: [{
                text: 'Sign in',
                role: 'default',
                handler: () => {
                    this.openLogin();
                }
            },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {

                    }
                }],

        });

        await actionSheet.present();
    }

    async openLogin() {
        const modal = await this.modalController.create({
            component: LoginPage
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

    async writeReview() {
        const modal = await this.modalController.create({
            component: NewReviewPage,
            cssClass: 'j-modal'
        });

        return await modal.present();
    }
}
