import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

@Component({
  selector: 'recommend-reson',
  templateUrl: 'recommend-reson.html'
})
export class RecommendResonComponent {
  params;
  details;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Http:HttpClient,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.params = this.navParams.data;
  }

  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();

    this.Http.get( this.Constant.BackstageUrl + 'hbp/recommendation/reason?id='+this.params.id+'&uuid='+this.params.uuid+"&class_id="+this.params.class_id)
      .subscribe((res:Response)=>{
        this.details = res;
        loading.dismiss();
      })
  }

  back (){
    this.navCtrl.pop()
  }

}
