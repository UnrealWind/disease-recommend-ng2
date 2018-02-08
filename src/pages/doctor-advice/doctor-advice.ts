import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-doctor-advice',
  templateUrl: 'doctor-advice.html',
})
export class DoctorAdvicePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  back() {
    this.navCtrl.pop();
  }

}
