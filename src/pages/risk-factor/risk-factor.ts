import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
@IonicPage()
@Component({
  selector: 'page-risk-factor',
  templateUrl: 'risk-factor.html',
})
export class RiskFactorPage {
  params;
  details;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public Http:HttpClient,
              public Constant:ConstantProvider) {
    this.params = this.navParams.data;
  }

  ngOnInit(): void{
    this.Http.get(this.Constant.BackstageUrl + 'hbp/danger/factor?id='+this.params.id)
      .subscribe((res:Response)=>{
        this.details = res;
      })
  }

  back(){
    this.navCtrl.pop();
  }

}
