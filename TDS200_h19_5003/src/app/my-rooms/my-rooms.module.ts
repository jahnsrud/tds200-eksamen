import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyRoomsPage } from './my-rooms.page';
import {FeedPageModule} from '../feed/feed.module';

const routes: Routes = [
  {
    path: '',
    component: MyRoomsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FeedPageModule
    ],
  declarations: [MyRoomsPage]
})
export class MyRoomsPageModule {}
