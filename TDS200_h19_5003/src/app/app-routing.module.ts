import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'feed', loadChildren: './feed/feed.module#FeedPageModule'},
    {path: 'room', loadChildren: './room/room.module#RoomPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'create-room', loadChildren: './create-room/create-room.module#CreateRoomPageModule'},
    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'tab-discovery', loadChildren: './tab-discovery/tab-discovery.module#TabDiscoveryPageModule'},
    {path: 'my-rooms', loadChildren: './my-rooms/my-rooms.module#MyRoomsPageModule'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
