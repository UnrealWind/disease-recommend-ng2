import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-plan-introduce',
  templateUrl: 'plan-introduce.html',
})
export class PlanIntroducePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  back(){
    this.navCtrl.pop();
  }

}
