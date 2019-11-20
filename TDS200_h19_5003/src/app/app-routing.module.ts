import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'feed', loadChildren: './feed/feed.module#FeedPageModule'},
    {path: 'room', loadChildren: './room/room.module#RoomPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'new-room', loadChildren: './new-room/new-room.module#NewRoomPageModule'},
    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'discovery', loadChildren: './tab-discovery/tab-discovery.module#TabDiscoveryPageModule'},
    {path: 'my-rooms', loadChildren: './my-rooms/my-rooms.module#MyRoomsPageModule'},
    {path: 'camera', loadChildren: './camera/camera.module#CameraPageModule'},
    {path: 'map', loadChildren: './map/map.module#MapPageModule'},
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
