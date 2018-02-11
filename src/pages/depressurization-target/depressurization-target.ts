import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
              public Constant:ConstantProvider) {
  this.params = this.navParams.data;
  }

  ngOnInit(): void{
    this.Http.get(this.Constant.BackstageUrl+'hbp/voltage?id='+this.params.id+'&class_id='+this.params.classId)
      .subscribe((res:Response)=>{
        this.details = res;
      })
  }

  back(){
    this.navCtrl.pop();
  }

}
