import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoomPage } from './room.page';
import {ComponentsModule} from '../../components/components.module';
import {StarRatingModule} from 'ionic4-star-rating';

const routes: Routes = [
  {
    path: '',
    component: RoomPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        StarRatingModule
    ],
  declarations: [RoomPage]
})
export class RoomPageModule {}
