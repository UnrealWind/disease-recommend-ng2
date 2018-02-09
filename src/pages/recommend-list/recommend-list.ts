import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import { RecommendDetailPage} from "../recommend-detail/recommend-detail";
import { DoctorAdvicePage} from "../doctor-advice/doctor-advice";

@IonicPage()
@Component({
  selector: 'page-recommend-list',
  templateUrl: 'recommend-list.html',
})
export class RecommendListPage {
  formDatas;
  params;//url上的基本信息
  doctorList;
  recommend;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public Http:HttpClient,
              public httpParams:HttpParams) {
    this.formDatas = this.navParams.data.formDatas;
    this.params = {
      patiId:611959,
      patiVisitId:1,
      classId:100037
    };
    this.recommend = {
      age:"63",
      body_heig:"176.0",
      body_weig:"96.5",
      brain_type:"0",
      dbp:"88",
      gxy_class:"3",
      gxy_risk:"4",
      hr:"70",
      if_dbn:"0",
      if_dfjzhz:"0",
      if_dxzhz:"0",
      if_fc:"0",
      if_fmtx:"0",
      if_fszz:"0",
      if_fxzb:"0",
      if_gmzyyh:"1",
      if_gnsxz:"0",
      if_gzxxjb:"0",
      if_gzxz:"0",
      if_hmxxlsc:"0",
      if_jdmxz:"0",
      if_jdmzh:"0",
      if_jdmzyyh:"0",
      if_jxh:"0",
      if_jxl:"0",
      if_jxxbx:"1",
      if_kyb:"0",
      if_maf:"0",
      if_nbdb_over:"0",
      if_oper_sp:"0",
      if_oper_zj:"0",
      if_qlxzs:"0",
      if_rs:"0",
      if_sdmxz:"0",
      if_sfjxtx:"0",
      if_sfjxtx_a_if_xytx:"1",
      if_sgnbq:"0",
      if_sgnbq_over:"0",
      if_sgnbq_under:"0",
      if_sjxsz:"0",
      if_sxzb:"0",
      if_tf:"0",
      if_tnb:"0",
      if_tnb_02:"0",
      if_tnbsb:"0",
      if_twxdxy:"0",
      if_wy:"0",
      if_xc:"0",
      if_xjb:"0",
      if_xlsc:"0",
      if_xytx:"0",
      if_zdmbxz:"0",
      if_zfxxdgs:"0",
      if_zsfh:"0",
      if_zsgnbq:"0",
      if_zwxgb:"0",
      sbp:"177",
      sex_id:"0",
      xjgs_type:"0",
      xjt_type:"1",
      xlsc_type:"0",
      xlsj_type:"0"
    }
  }

  ngOnInit(): void {
    this.init();
    this.getRecommend();
  }

  init (){
    let filter = {
      "filter_patiId":this.params.patiId,
      "filter_patiVisitId":this.params.patiVisitId,
      "class_id":this.params.classId,
      "filter_pageNo":1,
      "filter_pageSize":10
    };
    var url = 'http://192.168.1.161:8080/recommend/hbp/advice/doctorAdvice';
    var params = '?filter_patiId='+this.params.patiId+'&filter_patiVisitId='+this.params.patiVisitId+'&class_id='+this.params.classId+'&filter_pageNo=1&filter_pageSize=10';
    this.Http.get(url + params)
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.doctorList = res;
        this.doctorList = this.doctorList.page.content;
      })
  }

  getRecommend (){
    // var url = 'http://192.168.1.161:8080/recommend/hbp/recommendation?';
    // for (var entity in this.recommend){
    //   console.log(entity)
    // }
  }

  viewRecommendDetail(){
    this.navCtrl.push(RecommendDetailPage,{ 'id': 1 })
  }

  viewAdviceDetail(entity){
    this.modalCtrl.create(DoctorAdvicePage,entity).present();
  }
}
