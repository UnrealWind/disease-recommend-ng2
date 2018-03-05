import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
import { ViewPdfPage} from "../view-pdf/view-pdf";

@IonicPage()
@Component({
  selector: 'page-plan-literature',
  templateUrl: 'plan-literature.html',
})
export class PlanLiteraturePage {
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

    if(this.params.tabType == 'plan'){
      this.Http.get(this.Constant.BackstageUrl+this.params.discribe +'/scheme/literature?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
          loading.dismiss();
        })
    }else if(this.params.tabType == 'drug'){
      this.Http.get(this.Constant.BackstageUrl+this.params.discribe +'/drug/literature?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
          loading.dismiss();
        })
    }
    else if(this.params.tabType == 'source'){
      this.Http.get(this.Constant.BackstageUrl+this.params.discribe +'/guide?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
          loading.dismiss();
        })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
