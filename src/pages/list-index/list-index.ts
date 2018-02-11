import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { ConstantProvider} from "../../providers/constant/constant";

import { InputIndexPage} from "../input-index/input-index";

@IonicPage()
@Component({
  selector: 'page-list-index',
  templateUrl: 'list-index.html',
})
export class ListIndexPage {
  diseaseId;
  recordList;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient,
              public constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.diseaseId = this.navParams.data.id;

  }

  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });

    loading.present();
    this.getRecordList(loading);
  }

  getRecordList (loading){
    let urlBack = 'filter_pageNo=1' +
      '&filter_pageSize=10' +
      '&filter_disease=100037' +
      '&filter_startTime=' +
      '&filter_endTime=' +
      '&filter_search=' +
      '&class_id=' +this.diseaseId+
      '&filter_wardId=' +
      '&filter_diagType=10003';
    this.Http.get(this.constant.BackstageUrl+'patient/list?'+urlBack,{})
      .subscribe((res:Response)=>{
        this.recordList = res;
        loading.dismiss();
      })
  }

  inputIndex(id){
    this.navCtrl.push(InputIndexPage,{ 'id': id })
  }

}
