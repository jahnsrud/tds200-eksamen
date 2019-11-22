import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'room', loadChildren: './pages/room/room.module#RoomPageModule'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {path: 'new-room', loadChildren: './pages/new-room/new-room.module#NewRoomPageModule'},
    {path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'discovery', loadChildren: './pages/tab-discovery/tab-discovery.module#TabDiscoveryPageModule'},
    {path: 'my-rooms', loadChildren: './pages/my-rooms/my-rooms.module#MyRoomsPageModule'},
    {path: 'camera', loadChildren: './pages/camera/camera.module#CameraPageModule'},
    {path: 'map', loadChildren: './pages/map/map.module#MapPageModule'},
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingPageModule)
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
