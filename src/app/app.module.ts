import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

///req de firebase
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { FirebaseProvider } from '../providers/firebase/firebase';

/// configuracion web de firebase
var config = {
  apiKey: "AIzaSyDx9DVCs7KJ0GbexQe5QwjSz2kjMyfA8Pk",
  authDomain: "todoapp-53fc9.firebaseapp.com",
  databaseURL: "https://todoapp-53fc9.firebaseio.com",
  projectId: "todoapp-53fc9",
  storageBucket: "todoapp-53fc9.appspot.com",
  messagingSenderId: "113752067283"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
