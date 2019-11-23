import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReviewPageRoutingModule } from './new-review-routing.module';

import { NewReviewPage } from './new-review.page';
import {IonicRatingModule} from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    IonicRatingModule,
    FormsModule,
    IonicModule,
    NewReviewPageRoutingModule
  ],
  declarations: [NewReviewPage]
})
export class NewReviewPageModule {}
