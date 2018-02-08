import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-plan-literature',
  templateUrl: 'plan-literature.html',
})
export class PlanLiteraturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.navCtrl.pop();
  }

}
