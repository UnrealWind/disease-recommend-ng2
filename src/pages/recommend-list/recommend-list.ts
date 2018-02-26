import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

import { RecommendDetailPage} from "../recommend-detail/recommend-detail";
import { DoctorAdvicePage } from "../doctor-advice/doctor-advice";

import * as pdf from 'pdf';
import * as jquery from 'jquery'

@IonicPage()
@Component({
  selector: 'page-recommend-list',
  templateUrl: 'recommend-list.html',
})
export class RecommendListPage {
  formDatas;
  params;//url上的基本信息
  doctorList;//医嘱信息
  recommend;//参数请求
  recommendList;//
  schemeList;//推荐方案列表
  absoluteList;//绝对列表
  relativeList;//相对列表1
  pdfAsDataURI;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public Http:HttpClient,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.formDatas = this.navParams.data.formDatas;
    this.params = {
      patiId:611959,
      patiVisitId:1,
      classId:100037
    };
    this.recommend = {
      "age":"63",
      "body_heig":"176.0",
      "body_weig":"96.5",
      "brain_type":"0",
      "dbp":"88",
      "gxy_class":"3",
      "gxy_risk":"4",
      "hr":"70",
      "if_dbn":"0",
      "if_dfjzhz":"0",
      "if_dxzhz":"0",
      "if_fc":"0",
      "if_fmtx":"0",
      "if_fszz":"0",
      "if_fxzb":"0",
      "if_gmzyyh":"1",
      "if_gnsxz":"0",
      "if_gzxxjb":"0",
      "if_gzxz":"0",
      "if_hmxxlsc":"0",
      "if_jdmxz":"0",
      "if_jdmzh":"0",
      "if_jdmzyyh":"0",
      "if_jxh":"0",
      "if_jxl":"0",
      "if_jxxbx":"1",
      "if_kyb":"0",
      "if_maf":"0",
      "if_nbdb_over":"0",
      "if_oper_sp":"0",
      "if_oper_zj":"0",
      "if_qlxzs":"0",
      "if_rs":"1",
      "if_sdmxz":"0",
      "if_sfjxtx":"0",
      "if_sfjxtx_a_if_xytx":"1",
      "if_sgnbq":"0",
      "if_sgnbq_over":"0",
      "if_sgnbq_under":"0",
      "if_sjxsz":"0",
      "if_sxzb":"0",
      "if_tf":"0",
      "if_tnb":"0",
      "if_tnb_02":"0",
      "if_tnbsb":"0",
      "if_twxdxy":"0",
      "if_wy":"0",
      "if_xc":"0",
      "if_xjb":"0",
      "if_xlsc":"0",
      "if_xytx":"0",
      "if_zdmbxz":"0",
      "if_zfxxdgs":"0",
      "if_zsfh":"0",
      "if_zsgnbq":"0",
      "if_zwxgb":"0",
      "sbp":"177",
      "sex_id":"0",
      "xjgs_type":"0",
      "xjt_type":"1",
      "xlsc_type":"0",
      "xlsj_type":"0"
    }
  }

  //这个ng是angularjs用于自己掌握数据初始化渲染的入口，只执行一次的，慢于constructor,后者是原生es6
  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();
    this.getDoctor();
    this.getRecommend(loading);
    var fileName = "./testFile.pdf";
    // this.pdfAsDataURI = pdf.output(fileName);
  }

  getDoctor (){
    let filter = {
      "filter_patiId":this.params.patiId,
      "filter_patiVisitId":this.params.patiVisitId,
      "class_id":this.params.classId,
      "filter_pageNo":1,
      "filter_pageSize":10
    };
    var url = this.Constant.BackstageUrl + 'hbp/advice/doctorAdvice';
    var params = '?filter_patiId='+this.params.patiId+'&filter_patiVisitId='+this.params.patiVisitId+'&class_id='+this.params.classId+'&filter_pageNo=1&filter_pageSize=10';
    this.Http.get(url + params)
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.doctorList = res;
        this.doctorList = this.doctorList.page.content;
      })
  }

  getRecommend (loading){
    var url = this.Constant.BackstageUrl + 'hbp/recommendation?';
    this.Http.post(url+'class_id='+this.params.classId,this.recommend)
      .subscribe((res:Response)=>{
        this.recommendList = res;
        this.schemeList = this.filterScheme(this.recommendList.data.recom_scheme);//推荐方案列表
        this.absoluteList = this.recommendList.data.absolute_contraindication;//绝对列表
        this.relativeList = this.recommendList.data.relative_contraindication;//相对列表

        loading.dismiss();
      })
  }

  filterScheme (list){
    list.forEach(function(entity,idx){
      var recomName = [],drugNames = [],type = "药品";
      if(entity.scheme.length>0){
        entity.scheme.forEach(function(item,idy){
          recomName.push(item.recom_name);
          drugNames.push(item.drug_names.label);
          if(item.type != "药品"){
            type = "";
          }
        });
        entity.recomName = recomName.join(',');
        entity.drugNames = drugNames.join(',');
        entity.type = type;
      }
    });
    return list;
  }

  viewRecommendDetail(entity){
    var filter = {
      patiId:this.params.patiId,
      patiVisitId:this.params.patiVisitId,
      classId:this.params.classId,
      uuid:entity.uuid,
      id:this.recommendList.id
    };
    this.navCtrl.push(RecommendDetailPage,filter)
  }

  viewAdviceDetail(entity){
    this.modalCtrl.create(DoctorAdvicePage,entity).present();
  }
}
