import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ModalController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

import { RecommendBasicPage} from "../recommend-basic/recommend-basic";
import { PlanIntroducePage} from "../plan-introduce/plan-introduce"
import { DepressurizationTargetPage} from "../depressurization-target/depressurization-target";
import { RiskFactorPage} from "../risk-factor/risk-factor";
import { PlanLiteraturePage} from "../plan-literature/plan-literature";
import { TypicalRecordPage} from "../typical-record/typical-record";

import { RecommendResonComponent} from "../../components/recommend-reson/recommend-reson";

@IonicPage()
@Component({
  selector: 'page-recommend-detail',
  templateUrl: 'recommend-detail.html',
})
export class RecommendDetailPage {
  params;
  recommendLists;//方案列表
  suggestList;//推荐理由
  user;
  result;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Http:HttpClient,
              public modalCtrl: ModalController,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.params = this.navParams.data.parameter;
    this.result = this.navParams.data;

    if(this.params.discribe == 'hbp'){
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
        // {
        //   label: "典型病历",
        //   id:'7',
        //   icon:'ios-create-outline'
        // },
        {
          label: "标准来源指南",
          id:'8',
          icon:'ios-create-outline'
        }
      ]
    }else if(this.params.discribe == 'copd'){
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
        // {
        //   label: "典型病历",
        //   id:'7',
        //   icon:'ios-create-outline'
        // },
        {
          label: "标准来源指南",
          id:'8',
          icon:'ios-create-outline'
        }
      ]
    }

  }

  back (){
    this.navCtrl.pop()
  }

  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();

    this.Http.get( this.Constant.BackstageUrl + this.params.discribe +'/recommendation/reason?id='+this.params.id+'&uuid='+this.params.uuid+"&class_id="+this.params.classId)
      .subscribe((res:Response)=>{
        this.suggestList = res;
        loading.dismiss();
      })
  }

  viewRecommendReson(){
    this.modalCtrl.create(RecommendResonComponent,this.suggestList).present();
  }

  viewRecommendDetail(recommendList){
    switch (recommendList.id){
      case '1':this.navCtrl.push(RecommendBasicPage,this.result);
        break;
      case '2':this.navCtrl.push(PlanIntroducePage,this.params);
        break;
      case '3':this.navCtrl.push(DepressurizationTargetPage,this.params);
        break;
      case '4':this.navCtrl.push(RiskFactorPage,this.params);
        break;
      case '5':
        this.params.tabType = 'plan';
        this.navCtrl.push(PlanLiteraturePage,this.params);
        break;
      case '6':
        this.params.tabType = 'drug';
        this.navCtrl.push(PlanLiteraturePage,this.params);
        break;
      case '7':this.navCtrl.push(TypicalRecordPage,this.params);
        break;
      case '8':
        this.params.tabType = 'source';
        this.navCtrl.push(PlanLiteraturePage,this.params);
        break;
    }
  }

}
