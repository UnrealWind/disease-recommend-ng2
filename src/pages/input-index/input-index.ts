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
    this.Http.get('../../assets/data/formDatas100037.json',{})
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.formDatas = res;
      })
  }

  viewRecommend (){
    this.navCtrl.push(RecommendListPage,{ 'formDatas': this.formDatas });
  }

}
