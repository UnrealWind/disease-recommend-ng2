import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

@IonicPage()
@Component({
  selector: 'page-doctor-advice',
  templateUrl: 'doctor-advice.html',
})
export class DoctorAdvicePage {
  entity;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
      public Http:HttpClient,
  public Constant:ConstantProvider) {
    this.entity = this.navParams.data;
  }

  back() {
    this.navCtrl.pop();
  }

}
