import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { RecommendListPage} from "../recommend-list/recommend-list";

@IonicPage()
@Component({
  selector: 'page-input-list',
  templateUrl: 'input-list.html',
})
export class InputListPage {
  @ViewChild(Nav) nav: Nav;
  formData;
  formDatas;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.formDatas = this.navParams.data.formDatas;
    this.formData = this.formDatas.data[this.navParams.data.idx];

  }

  update (){
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

  viewRecommend (){
    this.navCtrl.push(RecommendListPage,{ 'formDatas': this.formDatas });
  }

}
