import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { InfoPage } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TreningPage } from '../pages/trening/trening';
import { MatPage } from '../pages/mat/mat';
import { HelsePage } from '../pages/helse/helse';
import { KostPage } from '../pages/kost/kost';
import { KalenderPage } from '../pages/kalender/kalender';
import { FaqPage } from '../pages/faq/faq';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    InfoPage,
    HomePage,
    TabsPage,
    TreningPage,
    MatPage,
    HelsePage,
    KostPage,
    KalenderPage,
    FaqPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    InfoPage,
    HomePage,
    TabsPage,
    TreningPage,
    MatPage,
    HelsePage,
    KostPage,
    KalenderPage,
    FaqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
