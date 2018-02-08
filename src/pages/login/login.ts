import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uesrName;
  passWord;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient) {
  }

  login() {
    console.log(this.uesrName,this.passWord);

    this.Http.get('../../assets/data/formDatas.json',{})
      .subscribe((res:Response)=>{
        console.log(res)
      })

    this.navCtrl.push(TabsPage,{ 'id': 1 })
  }

}
