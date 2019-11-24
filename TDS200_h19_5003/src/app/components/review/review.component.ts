import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../models/Room';
import * as moment from 'moment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  @Input() review: Review;
  humanReadableTimestamp: string;

  constructor() { }

  ngOnInit() {
    this.humanReadableTimestamp = moment(this.review.date.toDate()).fromNow();
  }

}
