import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
@IonicPage()
@Component({
  selector: 'page-depressurization-target',
  templateUrl: 'depressurization-target.html',
})
export class DepressurizationTargetPage {
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
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();

    this.Http.get(this.Constant.BackstageUrl+this.params.discribe +'/voltage?id='+this.params.id+'&class_id='+this.params.classId)
      .subscribe((res:Response)=>{
        this.details = res;
        loading.dismiss();
      })
  }

  back(){
    this.navCtrl.pop();
  }

}
