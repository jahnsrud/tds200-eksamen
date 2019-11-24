import {Component, OnInit} from '@angular/core';
import Room from '../../models/Room';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingPage} from '../booking/booking.page';
import {AuthService} from '../../providers/auth.service';
import {LoginPage} from '../login/login.page';
import {NewReviewPage} from '../new-review/new-review.page';
import {RoomEditorService} from '../../providers/room-editor.service';
import {RoomBookingService} from '../../providers/room-booking.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.page.html',
    styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

    room: Room;
    currencySuffix = ',-';
    mapPreviewImageUrl: string;
    isMyRoom: boolean;
    private ActionSheetButton: any;

    constructor(private modalController: ModalController,
                private router: Router,
                private route: ActivatedRoute,
                private auth: AuthService,
                private bookingService: RoomBookingService,
                private roomService: RoomEditorService,
                private actionSheetController: ActionSheetController) {

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.room = this.router.getCurrentNavigation().extras.state.room;
            }

        });
    }

    ngOnInit() {

        if (this.room.coordinates) {
            const coordinates = `${this.room.coordinates.longitude},${this.room.coordinates.latitude},16,0.00,0.00`;
            const token = 'pk.eyJ1IjoiamFobWFyMTciLCJhIjoiY2pvazNkODgyMDJtOTNwbW43YTQ2azA5ZSJ9.iPR0QgDHkzsJMy6jgCGNMg';

            this.mapPreviewImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${coordinates}/1000x600@2x?access_token=${token}`;
        }

        if (this.room.owner === this.auth.currentUserId) {
            this.isMyRoom = true;
        }

        if (this.bookingService.isRoomBooked(this.room)) {
            console.log('Is booked!');
        } else {
            console.log('Not booked');
        }


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
            cssClass: 'j-modal',
            componentProps: {
                coordinates: this.room.coordinates,
                name: this.room.name,
                address: this.room.address
            }

        });

        return await modal.present();

    }

    async writeReview() {
        const modal = await this.modalController.create({
            component: NewReviewPage,
            cssClass: 'j-modal',
            componentProps: {
                room: this.room,
            }
        });

        return await modal.present();
    }

    async viewAdminOptions() {
        const actionSheet = await this.actionSheetController.create({
            header: `Edit`,
            subHeader: 'Make changes to your room.',
            buttons: [{
                text: 'Delete',
                role: 'destructive',
                handler: () => {
                    this.delete();
                }
            },
                {
                    text: 'Clear Booking',
                    role: 'destructive',
                    handler: () => {
                        this.cancelResevations();
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

    async delete() {
        await this.roomService.deleteRoom(this.room);

        // TODO: go to previous page instead of back to start
        this.router.navigate(['']);

    }

    async cancelResevations() {
        this.bookingService.clearBooking(this.room);
    }
}
