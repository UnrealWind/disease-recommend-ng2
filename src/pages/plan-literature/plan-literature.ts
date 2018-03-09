import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
import { ViewPdfPage } from "../view-pdf/view-pdf";

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
      var url = '/scheme/literature';
      this.getDetails(url,loading);
    }else if(this.params.tabType == 'drug') {
      var url = '/drug/literature';
      this.getDetails(url,loading);
    }
    else if(this.params.tabType == 'source'){
      var url = '/guide';
      this.getDetails(url,loading);
    }
  }

  getDetails (url,loading){
    this.Http.get(this.Constant.BackstageUrl+this.params.discribe+url+'?id='+this.params.id+'&uuid='+this.params.uuid)
      .subscribe((res:Response)=>{
        this.details = res;
        loading.dismiss();
      })
  }

  viewPDF(id,type){
    this.navCtrl.push(ViewPdfPage,{
      'id':id,
      'type':type,
      'discribe':this.params.discribe
    })
  }

  back(){
    this.navCtrl.pop();
  }

}
