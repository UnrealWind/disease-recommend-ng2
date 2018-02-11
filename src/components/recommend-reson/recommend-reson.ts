import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              public Constant:ConstantProvider) {
    this.params = this.navParams.data;
  }

  ngOnInit(): void {
    this.Http.get( this.Constant.BackstageUrl + 'hbp/recommendation/reason?id='+this.params.id+'&uuid='+this.params.uuid+"&class_id="+this.params.class_id)
      .subscribe((res:Response)=>{
        this.details = res;
      })
  }

  back (){
    this.navCtrl.pop()
  }

}
