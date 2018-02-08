import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'recommend-reson',
  templateUrl: 'recommend-reson.html'
})
export class RecommendResonComponent {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  back (){
    this.navCtrl.pop()
  }

}
