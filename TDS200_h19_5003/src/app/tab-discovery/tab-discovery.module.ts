import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabDiscoveryPage } from './tab-discovery.page';

const routes: Routes = [
  {
    path: '',
    component: TabDiscoveryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabDiscoveryPage]
})
export class TabDiscoveryPageModule {}
