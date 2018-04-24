import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-recommend-basic',
  templateUrl: 'recommend-basic.html',
})
export class RecommendBasicPage {
  params;
  formDatas;
  tagFormDatas;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient,
              public loadingCtrl:LoadingController) {
    this.params = this.navParams.data;
  }

  ngOnInit(): void {
    // let loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: '加载中……'
    // });
    this.getFormDatas ();

  }

  getFormDatas (){
    this.Http.get('../../assets/data/formDatas'+this.params.parameter.classId+'.json',{})
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.formDatas = res;
        this.addValue();
        // loading.dismiss();
      })
  }

  addValue(){
    let that = this;
    that.tagFormDatas = [];
    this.formDatas.data.forEach(function (modal,i) {
      that.tagFormDatas.push({
        "label":modal.label,
        "inputs":[]
      })
      modal.inputs.forEach(function (input,ix) {

        input.dimension?input.dimension.options.forEach(function (opt,iy) {
          that.params.result[input.name] && opt.value == that.params.result[input.name]?
            input.value = opt.label:undefined;
        }):input.value = that.params.result[input.name];

        input.value != 0 && input.value != '否'?that.tagFormDatas[i].inputs.push(input):undefined;

      })
    })
  }

  back(){
    this.navCtrl.pop();
  }

}
