import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"
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
              public Constant:ConstantProvider) {
    this.params = this.navParams.data;
  }

  ngOnInit(): void{
    this.Http.get(this.Constant.BackstageUrl+'hbp/scheme/literature?id='+this.params.id+'&uuid='+this.params.uuid)
      .subscribe((res:Response)=>{
        this.details = res;
      })
  }

  back(){
    this.navCtrl.pop();
  }

}
