import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { TabsPage} from "../tabs/tabs";
import { ConstantProvider} from "../../providers/constant/constant";

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
              private Http:HttpClient,
              public constant:ConstantProvider) {
  }

  login() {
    console.log(this.uesrName,this.passWord);

    this.Http.post(this.constant.BackstageUrl+'login',{})
      .subscribe((res:Response)=>{
        console.log(res)
      })

    this.navCtrl.push(TabsPage,{ 'id': 1 })
  }

}
