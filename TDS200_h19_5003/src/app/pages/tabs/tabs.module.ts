import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: '../tab-discovery/tab-discovery.module#TabDiscoveryPageModule' },
      { path: 'tab2', loadChildren: '../my-rooms/my-rooms.module#MyRoomsPageModule' },
      { path: 'tab3', loadChildren: '../tab3/tab3.module#Tab3PageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
