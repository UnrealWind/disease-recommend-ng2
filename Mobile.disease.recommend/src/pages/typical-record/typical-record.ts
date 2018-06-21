import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
@IonicPage()
@Component({
  selector: 'page-typical-record',
  templateUrl: 'typical-record.html',
})
export class TypicalRecordPage {
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

    this.Http.get(this.Constant.BackstageUrl + this.params.discribe +'/typical/cases?id='+this.params.id+'&uuid='+this.params.uuid)
      .subscribe((res:Response)=>{
        this.details = res;
        loading.dismiss();
      })
  }

  back() {
    this.navCtrl.pop();
  }

}
