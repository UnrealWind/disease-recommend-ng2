import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RecommendBasicPage} from "../recommend-basic/recommend-basic";
import { PlanIntroducePage} from "../plan-introduce/plan-introduce"
import { DepressurizationTargetPage} from "../depressurization-target/depressurization-target";
import { RiskFactorPage} from "../risk-factor/risk-factor";
import { PlanLiteraturePage} from "../plan-literature/plan-literature";
import { TypicalRecordPage} from "../typical-record/typical-record";

@IonicPage()
@Component({
  selector: 'page-recommend-detail',
  templateUrl: 'recommend-detail.html',
})
export class RecommendDetailPage {

  recordId;
  recommendLists;
  user;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.recordId = this.navParams.data.id;

    this.recommendLists =  [
      {
        label: "方案推荐依据",
        id:"1",
        icon:'ios-paper-outline'
      },
      {
        label: "方案介绍",
        id:'2',
        icon:'ios-copy-outline'
      },
      {
        label: "降压目标",
        id:'3',
        icon:'ios-create-outline'
      },
      {
        label: "相关危险因素处理",
        id:"4",
        icon:'ios-paper-outline'
      },
      {
        label: "方案相关文献",
        id:'5',
        icon:'ios-copy-outline'
      },
      {
        label: "药品不良反应相关文献",
        id:'6',
        icon:'ios-create-outline'
      },
      {
        label: "典型病历",
        id:'7',
        icon:'ios-create-outline'
      },
      {
        label: "标准来源指南",
        id:'8',
        icon:'ios-create-outline'
      }
    ]

  }

  back (){
    this.navCtrl.pop()
  }

  viewRecommendDetail(recommendList){
    switch (recommendList.id){
      case '1':this.navCtrl.push(RecommendBasicPage,{ 'id': 1 });
        break;
      case '2':this.navCtrl.push(PlanIntroducePage,{ 'id': 1 });
        break;
      case '3':this.navCtrl.push(DepressurizationTargetPage,{ 'id': 1 });
        break;
      case '4':this.navCtrl.push(RiskFactorPage,{ 'id': 1 });
        break;
      case '5':this.navCtrl.push(PlanLiteraturePage,{ 'id': 1 });
        break;
      case '6':this.navCtrl.push(PlanLiteraturePage,{ 'id': 2 });
        break;
      case '8':this.navCtrl.push(PlanLiteraturePage,{ 'id': 3 });
        break;
      case '7':this.navCtrl.push(TypicalRecordPage,{ 'id': 1 });
        break;
    }
  }

}
