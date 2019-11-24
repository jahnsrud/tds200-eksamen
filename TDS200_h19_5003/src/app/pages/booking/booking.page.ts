import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import Room from '../../models/Room';
import {RoomBookingService} from '../../providers/room-booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  @Input() room: Room;
  currencySuffix = ',-';
  requestDate: any;

  constructor(private modalController: ModalController,
              private roomBooking: RoomBookingService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  async confirmBooking() {

    // Convert date to make AngularFire happy:
    const convertedDate = new Date(this.requestDate);
    await this.roomBooking.book(this.room, convertedDate);

    this.close();
  }
}
