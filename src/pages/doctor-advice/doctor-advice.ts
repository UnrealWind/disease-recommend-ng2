import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-doctor-advice',
  templateUrl: 'doctor-advice.html',
})
export class DoctorAdvicePage {
  entityDoctor;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.entityDoctor = this.navParams.data;
  }

  back() {
    this.navCtrl.pop();
  }

}
