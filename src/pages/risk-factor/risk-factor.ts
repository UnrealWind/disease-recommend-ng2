import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-risk-factor',
  templateUrl: 'risk-factor.html',
})
export class RiskFactorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.navCtrl.pop();
  }

}
