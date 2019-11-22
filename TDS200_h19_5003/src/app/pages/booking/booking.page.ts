import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import Room from '../../models/Room';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  @Input() room: Room;
  currencySuffix = ',-';

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  confirmBooking() {

    this.close();
  }
}
