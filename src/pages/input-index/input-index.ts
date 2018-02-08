import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import { InputListPage } from '../input-list/input-list'
import { RecommendListPage } from '../recommend-list/recommend-list'

@IonicPage()
@Component({
  selector: 'page-input-index',
  templateUrl: 'input-index.html',
})
export class InputIndexPage {
  recordId;
  formDatas;
  user;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http: HttpClient) {
    this.recordId = this.navParams.data.id;
    this.getFormDatas ();
    this.user = {
      logo: './assets/imgs/logo-1.jpg',
      name: '叶良辰',
      authority: '管理员'
    };

  }

  inputList(formData){
    this.navCtrl.push(InputListPage,{ 'formData': formData })
  }

  getFormDatas (){
    this.Http.get('../../assets/data/formDatas.json',{})
      .subscribe((res:Response)=>{
      console.log(res)
        this.formDatas = res.data;
      })
  }

  viewRecommend (){
    this.navCtrl.push(RecommendListPage,{ 'formDatas': this.formDatas });
  }

}
