import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DjPage} from '../pages/dj/dj';
import {ReviewPage} from '../pages/review/review';
import {SignupPage} from '../pages/signup/signup';
import {ConfirmPage} from '../pages/confirm/confirm';


@NgModule({
  declarations: [
    MyApp,
    HomePage,  SignupPage, ReviewPage, DjPage, ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage, ReviewPage, DjPage, ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
