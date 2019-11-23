import { Component, OnInit } from '@angular/core';
import {Review} from '../../models/Room';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.page.html',
  styleUrls: ['./new-review.page.scss'],
})
export class NewReviewPage implements OnInit {

  review = {} as Review;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onRateChange($event: number) {
    this.review.stars = $event;
    console.warn(this.review.stars);
  }

  publish() {

  }

  close() {
    this.modalController.dismiss();
  }
}
