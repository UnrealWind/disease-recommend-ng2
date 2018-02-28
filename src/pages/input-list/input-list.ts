import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,FabContainer,LoadingController} from 'ionic-angular';
import { RecommendListPage} from "../recommend-list/recommend-list";
import { HttpClient } from "@angular/common/http";
import { ConstantProvider} from "../../providers/constant/constant";
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-input-list',
  templateUrl: 'input-list.html',
})
export class InputListPage {
  @ViewChild(Nav) nav: Nav;
  formDatas;
  result;
  parameter;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient,
              public loadingCtrl:LoadingController,
              public constant:ConstantProvider){
      this.parameter = {
        "discribe":"hbp",
        "class_id":"100037"
      };
  }

  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    loading.present();
    this.getFormDatas(loading);
    //this.getResult(loading);
  }

  update (){
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

  getFormDatas (loading){
    this.Http.get('../../assets/data/formDatas'+this.parameter.class_id+'.json',{})
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.formDatas = res;
        this.extractResult ();
        loading.dismiss();
      })
  }

  extractResult (){
    var that = this;
    this.result = {
      'info':{}
    };
    this.formDatas.data.forEach(function (modal,i) {
      modal.inputs.forEach(function (input,ix) {
        that.result.info[input.name] = input.value;
      })
    })
  }

  getResult (loading){
    let parameter =
      "?filter_patiId="+this.parameter.pati_id+
      "&filter_patiVisitId="+this.parameter.pati_visit_id+
      "&class_id="+this.parameter.class_id

    this.Http.get(this.constant.BackstageUrl+this.parameter.discribe+'/patient/info'+parameter,{})
      .subscribe((res:Response)=>{
        this.result = res;
        for(var i in this.result.info){
          this.result.info[i] == 1?this.result.info[i] =true:undefined;
        }
        loading.dismiss();
      })
  }

  viewRecommend (){
    var idx = 0
    for (var i in this.result.info){
      idx++;
      this.result.info[i] == false || this.result.info[i] == ''?this.result.info[i] = '0':undefined;
      this.result.info[i] == true?this.result.info[i] = '1':undefined;
    }

    this.navCtrl.push(RecommendListPage,{ 'result': this.result.info,'parameter':this.parameter});
  }

  openFAB() {
    //console.log('open');
  }

  goHref(idx: number, fab: FabContainer) {

    //这个地方，首先要注意的是，单页应用一定要锁定自己目标元素的位置
    //其次，ionic中专门制定了用于滚动的div  scroll-content 并不是body
    $('page-input-list .scroll-content').animate({
      scrollTop:$('page-input-list .jumpHeader').eq(idx).offset().top
      -$('page-input-list .scroll-content').offset().top +$('page-input-list .scroll-content').scrollTop()
    }, 300);
    fab.close();
  }
}
