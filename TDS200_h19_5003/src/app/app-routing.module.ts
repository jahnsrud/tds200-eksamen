import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'feed', loadChildren: './feed/feed.module#FeedPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'room', loadChildren: './room/room.module#RoomPageModule'},
    {path: 'create-room', loadChildren: './create-room/create-room.module#CreateRoomPageModule'},
    {path: 'my-meeting-rooms', loadChildren: './my-meeting-rooms/my-meeting-rooms.module#MyMeetingRoomsPageModule'},
    {path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'tab-discovery', loadChildren: './tab-discovery/tab-discovery.module#TabDiscoveryPageModule'},
    {path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},
    {path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
