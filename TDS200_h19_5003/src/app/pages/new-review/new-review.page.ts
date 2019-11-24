import {Component, Input, OnInit} from '@angular/core';
import Room, {Review} from '../../models/Room';
import {ModalController} from '@ionic/angular';
import {RoomEditorService} from '../../providers/room-editor.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.page.html',
  styleUrls: ['./new-review.page.scss'],
})
export class NewReviewPage implements OnInit {

  @Input() room: Room;
  review = {} as Review;

  constructor(private modalController: ModalController,
              private roomService: RoomEditorService) {
    this.review.stars = 0;
  }

  ngOnInit() {
  }

  onRateChange($event: number) {
    this.review.stars = $event;
  }

  async publish() {
    await this.roomService.postReview(this.review, this.room);
    this.close();
  }

  close() {
    this.modalController.dismiss();
  }
}
