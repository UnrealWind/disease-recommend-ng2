import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

@IonicPage()
@Component({
  selector: 'page-plan-introduce',
  templateUrl: 'plan-introduce.html',
})
export class PlanIntroducePage {
  params;
  details;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Http:HttpClient,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
      this.params = this.navParams.data;
  }

  ngOnInit(): void{
    // let loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: '加载中……'
    // });
    // loading.present();

    this.Http.get(this.Constant.BackstageUrl+this.params.discribe +'/recommendation/introduce?uuid='+this.params.uuid+'&id='+this.params.id)
      .subscribe((res:Response)=>{
        this.details = res;
        this.details = this.filter(this.details);
        // loading.dismiss();
      })
  }

  filter(list){
    list.data.forEach(function(entity,idx){
      entity.untowardEffectArray = entity.untowardEffect.split('&&');
      entity.untowardEffectArray.pop();
      entity.attentionArray = entity.attention.split('&&');

    })
    return list;
  }

  back(){
    this.navCtrl.pop();
  }

}
