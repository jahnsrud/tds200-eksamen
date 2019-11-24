import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReviewPageRoutingModule } from './new-review-routing.module';

import { NewReviewPage } from './new-review.page';
import {StarRatingModule} from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewReviewPageRoutingModule,
    StarRatingModule
  ],
  declarations: [NewReviewPage]
})
export class NewReviewPageModule {}
