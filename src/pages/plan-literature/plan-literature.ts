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
    // let loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: '加载中……'
    // });
    // loading.present();

    if(this.params.tabType == 'plan'){
      this.getDetails('/scheme/literature');
    }else if(this.params.tabType == 'drug') {
      this.getDetails('/drug/literature');
    }
    else if(this.params.tabType == 'source'){
      this.getDetails('/guide');
    }
  }

  getDetails (url){
    this.Http.get(this.Constant.BackstageUrl+this.params.discribe+url+'?id='+this.params.id+'&uuid='+this.params.uuid)
      .subscribe((res:Response)=>{
        this.details = res;
        // loading.dismiss();
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
