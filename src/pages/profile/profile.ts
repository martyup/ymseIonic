import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  gaming: string = "n64";
gender: string = "f";
os: string;
music: string;
month: string;
year: number;

musicAlertOpts: { title: string};

  constructor(public navCtrl: NavController) {
    this.musicAlertOpts = {
  title: 'tittel'
};
}

stpSelect() {
console.log('STP selected');


  }

}
