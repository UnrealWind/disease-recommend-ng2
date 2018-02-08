import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-typical-record',
  templateUrl: 'typical-record.html',
})
export class TypicalRecordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back() {
    this.navCtrl.pop();
  }

}
