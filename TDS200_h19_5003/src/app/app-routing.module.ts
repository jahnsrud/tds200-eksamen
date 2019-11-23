import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
    {path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'room', loadChildren: './pages/room/room.module#RoomPageModule'},
    {path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule'},
    {path: 'discovery', loadChildren: './pages/discovery/discovery.module#TabDiscoveryPageModule'},
    {path: 'my-rooms', loadChildren: './pages/my-rooms/my-rooms.module#MyRoomsPageModule'},
    {path: 'map', loadChildren: './pages/map/map.module#MapPageModule'},
    {
        path: 'new-room',
        loadChildren: './pages/new-room/new-room.module#NewRoomPageModule',
        ...canActivate(redirectUnauthorizedTo(['login']))
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule',
        ...canActivate(redirectLoggedInTo(['']))
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
