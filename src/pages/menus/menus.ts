import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController,Nav} from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

import { InputListPage} from "../input-list/input-list";

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {
  @ViewChild(Nav) nav: Nav;
  formDatas;
  plan;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl:MenuController,
              private Http:HttpClient,
              public loadingCtrl:LoadingController) {
    this.plan = this.navParams.data.plan;
  }
  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();
    this.getFormDatas(loading);
  }
  getFormDatas (loading){
    this.Http.get('./assets/data/formDatas.json',{})
      .subscribe((res:Response)=>{
        this.formDatas = res;
        loading.dismiss();
        this.nav.setRoot(InputListPage,{"formDatas":this.formDatas,"idx":0})
      })
  }

  changePage (formDatas,index){
    this.nav.setRoot(InputListPage,{"formDatas":this.formDatas,"idx":index});
    this.menuCtrl.close();
  }

}
