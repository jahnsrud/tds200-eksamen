import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Camera} from '@ionic-native/camera/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {CameraPage} from './pages/camera/camera.page';
import {CameraPageModule} from './pages/camera/camera.module';
import {MapPage} from './pages/map/map.page';
import {MapPageModule} from './pages/map/map.module';
import {ComponentsModule} from './components/components.module';
import {MeetingRoomComponent} from './components/meeting-room/meeting-room.component';
import {ReviewComponent} from './components/review/review.component';
import {BookingPageModule} from './pages/booking/booking.module';
import {BookingPage} from './pages/booking/booking.page';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {LoginPage} from './pages/login/login.page';
import {LoginPageModule} from './pages/login/login.module';
import {NewRoomPage} from './pages/new-room/new-room.page';
import {NewRoomPageModule} from './pages/new-room/new-room.module';

const firebaseConfig = {
    apiKey: 'AIzaSyDDxcYzFb94gWtAAPAxQLlEjgewPfKf8gQ',
    authDomain: 'tds200-h19-5003.firebaseapp.com',
    databaseURL: 'https://tds200-h19-5003.firebaseio.com',
    projectId: 'tds200-h19-5003',
    storageBucket: 'tds200-h19-5003.appspot.com',
    messagingSenderId: '741541334570',
    appId: '1:741541334570:web:b01263d9fe11f773887d53'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [CameraPage, MapPage, MeetingRoomComponent, LoginPage, NewRoomPage, ReviewComponent, BookingPage, LoginFormComponent, RegisterFormComponent],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        AngularFireAuthGuardModule,
        LoginPageModule,
        NewRoomPageModule,
        ComponentsModule,
        CameraPageModule,
        MapPageModule,
        BookingPageModule,

    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        ImagePicker,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
