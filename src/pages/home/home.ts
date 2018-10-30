import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TreningPage } from '../trening/trening';
import { MatPage } from '../mat/mat';
import { HelsePage } from '../helse/helse';
import { KostPage } from '../kost/kost';
import { KalenderPage } from '../kalender/kalender';
import { FaqPage } from '../faq/faq';
import { ListePage } from '../liste/liste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  tilTrening(){
    this.navCtrl.push(TreningPage);
  }
  tilMat(){
    this.navCtrl.push(MatPage);
  }
  tilHelse(){
    this.navCtrl.push(HelsePage);
  }
  tilKost(){
    this.navCtrl.push(KostPage);
  }
  tilKalender(){
    this.navCtrl.push(KalenderPage);
  }
  tilFaq(){
    this.navCtrl.push(FaqPage);
  }
  tilListe(){
    this.navCtrl.push(ListePage);
  }

}
