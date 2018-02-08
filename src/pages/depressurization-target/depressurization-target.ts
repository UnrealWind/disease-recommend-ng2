import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-depressurization-target',
  templateUrl: 'depressurization-target.html',
})
export class DepressurizationTargetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.navCtrl.pop();
  }

}
