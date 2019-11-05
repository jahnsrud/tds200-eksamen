import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*
  var firebaseConfig = {
    apiKey: "AIzaSyDDxcYzFb94gWtAAPAxQLlEjgewPfKf8gQ",
    authDomain: "tds200-h19-5003.firebaseapp.com",
    databaseURL: "https://tds200-h19-5003.firebaseio.com",
    projectId: "tds200-h19-5003",
    storageBucket: "tds200-h19-5003.appspot.com",
    messagingSenderId: "741541334570",
    appId: "1:741541334570:web:b01263d9fe11f773887d53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 */

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
