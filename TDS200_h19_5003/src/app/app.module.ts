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
import {CameraPage} from './camera/camera.page';
import {CameraPageModule} from './camera/camera.module';

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
  entryComponents: [CameraPage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CameraPageModule,
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
