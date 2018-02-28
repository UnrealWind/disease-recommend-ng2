import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { ConstantProvider} from "../../providers/constant/constant";

//import { InputIndexPage} from "../input-index/input-index";
import { InputListPage} from "../input-list/input-list";

@IonicPage()
@Component({
  selector: 'page-list-index',
  templateUrl: 'list-index.html',
})
export class ListIndexPage {
  plan;
  recordList;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient,
              public constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.plan = this.navParams.data.plan;
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
      '&filter_disease='+this.plan.class_id+
      '&filter_startTime=' +
      '&filter_endTime=' +
      '&filter_search=' +
      '&filter_wardId=' +
      '&filter_diagType=10003';
    this.Http.get(this.constant.BackstageUrl+'patient/list?'+urlBack,{})
      .subscribe((res:Response)=>{
        this.recordList = res;
        loading.dismiss();
      })
  }

  inputIndex(opt){
    this.navCtrl.push(InputListPage,{
      'discribe': this.plan.discribe,
      'pati_visit_id':opt.pati_visit_id,
      'pati_id':opt.pati_id,
      'class_id':this.plan.class_id
    });
  }


}
