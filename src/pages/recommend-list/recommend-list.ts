import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { RecommendDetailPage} from "../recommend-detail/recommend-detail";
import { DoctorAdvicePage} from "../doctor-advice/doctor-advice";

@IonicPage()
@Component({
  selector: 'page-recommend-list',
  templateUrl: 'recommend-list.html',
})
export class RecommendListPage {
  formDatas;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController) {
    this.formDatas = this.navParams.data.formDatas;
  }

  viewRecommendDetail(){
    this.navCtrl.push(RecommendDetailPage,{ 'id': 1 })
  }

  viewAdviceDetail(){
    this.modalCtrl.create(DoctorAdvicePage).present();
  }
}
