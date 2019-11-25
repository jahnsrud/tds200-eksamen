import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import Room from '../../models/Room';
import {RoomBookingService} from '../../providers/room-booking.service';
import * as moment from 'moment';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  @Input() room: Room;
  currencySuffix = ',-';
  requestDate: any;
  formattedDate: string;
  totalSum: string;
  minDate = new Date().toISOString();
  totalDays: number;

  constructor(private modalController: ModalController,
              public auth: AuthService,
              private roomBooking: RoomBookingService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  didUpdateDate() {
    this.formattedDate = moment(this.requestDate, moment.ISO_8601).fromNow();

    this.totalDays = this.getTotalDaysUntil();
    this.totalSum = `${this.room.priceInNok * this.totalDays}`;


  }

  getTotalDaysUntil() {
    const untilDate = moment(this.requestDate);
    const today = moment();

    let daysUntil = untilDate.diff(today, 'days');

    if (daysUntil === 0) {
      // Minimum rental period is 1 day.
      daysUntil = 1;
    }

    return daysUntil;

  }

  async confirmBooking() {

    // Convert date to make AngularFire happy:
    const convertedDate = new Date(this.requestDate);

    await this.roomBooking.book(this.room, convertedDate);

    this.close();
  }
}
