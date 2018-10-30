import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { TreningPage } from '../pages/trening/trening';
import { MatPage } from '../pages/mat/mat';
import { HelsePage } from '../pages/helse/helse';
import { KostPage } from '../pages/kost/kost';
import { KalenderPage } from '../pages/kalender/kalender';
import { FaqPage } from '../pages/faq/faq';
import { ListePage } from '../pages/liste/liste';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
