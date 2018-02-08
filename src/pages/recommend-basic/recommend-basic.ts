import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { RecommendResonComponent} from "../../components/recommend-reson/recommend-reson";

@IonicPage()
@Component({
  selector: 'page-recommend-basic',
  templateUrl: 'recommend-basic.html',
})
export class RecommendBasicPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  viewRecommendReson(){
    this.modalCtrl.create(RecommendResonComponent).present();
  }

  back(){
    this.navCtrl.pop();
  }

}
