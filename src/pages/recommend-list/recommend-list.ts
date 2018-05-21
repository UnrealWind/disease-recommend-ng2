import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { ConstantProvider } from "../../providers/constant/constant"

import { RecommendDetailPage} from "../recommend-detail/recommend-detail";
import { DoctorAdvicePage } from "../doctor-advice/doctor-advice";

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public Http:HttpClient,
              public Constant:ConstantProvider,
              public loadingCtrl:LoadingController) {
    this.params = {
      classId:this.navParams.data.parameter.class_id,
      patiId:this.navParams.data.parameter.pati_id,
      patiVisitId:this.navParams.data.parameter.pati_visit_id,
      discribe:this.navParams.data.parameter.discribe
    };
    this.recommend = this.navParams.data.result;
  }

  //这个ng是angularjs用于自己掌握数据初始化渲染的入口，只执行一次的，慢于constructor,后者是原生es6
  ngOnInit(): void {
    // let loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: '加载中……'
    // });
    // loading.present();
    //this.getDoctor();
    this.getRecommend();
  }

  /*getDoctor (){
    let filter = {
      "filter_patiId":this.params.patiId,
      "filter_patiVisitId":this.params.patiVisitId,
      "class_id":this.params.classId,
      "filter_pageNo":1,
      "filter_pageSize":10
    };
    var url = this.Constant.BackstageUrl + this.params.discribe +'/advice/doctorAdvice';
    var params = '?filter_patiId='+this.params.patiId+'&filter_patiVisitId='+this.params.patiVisitId+'&class_id='+this.params.classId+'&filter_pageNo=1&filter_pageSize=10';
    this.Http.get(url + params)
      .subscribe((res:Response)=>{
        this.doctorList = res;
        if(this.doctorList.page!=null){
          this.doctorList = this.doctorList.page.content;
        }else{
          this.doctorList = [];
        }
      })
  }*/

  getRecommend (){
    var url = this.Constant.BackstageUrl + this.params.discribe +'/recommendation?';
    this.Http.post(url+'class_id='+this.params.classId,this.recommend)
      .subscribe((res:Response)=>{
        this.recommendList = res;
        this.schemeList = this.filterScheme(this.recommendList.data.recom_scheme);//推荐方案列表
        this.absoluteList = this.checkRemoval(this.recommendList.data.absolute_contraindication);//绝对列表
        this.relativeList = this.checkRemoval(this.recommendList.data.relative_contraindication);//相对列表
        // loading.dismiss();
      })
  }

  filterScheme (list){
    if(list.length>0){
      list.forEach(function(entity,idx){
        var recomName = [],drugNames = [],type = "药品";
        if(entity.scheme.length>0){
          entity.scheme.forEach(function(item,idy){
            recomName.push(item.recom_name);
            if(item.drug_names){
              drugNames.push(item.drug_names.label);
            }
            if(item.type != "药品"){
              type = "";
            }
          });
          entity.recomName = recomName.join(',');
          entity.drugNames = drugNames.join(',');
          entity.type = type;
        }
      });
    }else{
      list = [];
    }
    return list;
  }

  /**
   * 相对禁忌和绝对禁忌去重
   * @param list
   * @returns {Array}
     */
  checkRemoval (list){
     let arr = [];
     let obj = {};
     list.forEach(function(entity,idx){
       if(!obj[entity.uuid]){
         arr.push(entity);
         obj[entity.uuid] = 1;
       }
    });
    return arr;
  }

  viewRecommendDetail(entity,type){
    var filter = {
      parameter:{
        patiId:this.params.patiId,
        patiVisitId:this.params.patiVisitId,
        classId:this.params.classId,
        uuid:entity.uuid,
        id:this.recommendList.id,
        discribe:this.params.discribe,
        type:type,
        name:''
      },
      result:this.recommend
    };
    if(type == '推荐理由'){
      filter.parameter.name = entity.recomName;
    }else{
      filter.parameter.name = entity.drug_name
    }
    this.navCtrl.push(RecommendDetailPage,filter)
  }

  viewAdviceDetail(entity){
    this.modalCtrl.create(DoctorAdvicePage,entity).present();
  }

  back (){
    this.navCtrl.pop()
  }
}
