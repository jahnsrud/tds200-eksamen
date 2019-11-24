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

  constructor(private modalController: ModalController,
              private roomBooking: RoomBookingService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  async confirmBooking() {

    await this.roomBooking.book(this.room);

    this.close();
  }
}
