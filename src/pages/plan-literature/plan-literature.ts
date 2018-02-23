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
    if(this.params.tabType == 'plan'){
      this.Http.get(this.Constant.BackstageUrl+'hbp/scheme/literature?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
        })
    }else if(this.params.tabType == 'drug'){
      this.Http.get(this.Constant.BackstageUrl+'hbp/drug/literature?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
        })
    }
    else if(this.params.tabType == 'source'){
      this.Http.get(this.Constant.BackstageUrl+'hbp/guide?id='+this.params.id+'&uuid='+this.params.uuid)
        .subscribe((res:Response)=>{
          this.details = res;
        })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
