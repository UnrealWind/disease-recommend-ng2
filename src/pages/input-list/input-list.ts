import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,FabContainer,LoadingController} from 'ionic-angular';
import { RecommendListPage} from "../recommend-list/recommend-list";
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-input-list',
  templateUrl: 'input-list.html',
})
export class InputListPage {
  @ViewChild(Nav) nav: Nav;
  formDatas;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private Http:HttpClient,
              public loadingCtrl:LoadingController){
  }

  ngOnInit(): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });

    loading.present();
    this.getFormDatas(loading);
  }

  update (){
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

  getFormDatas (loading){
    this.Http.get('../../assets/data/formDatas.json',{})
      .subscribe((res:Response)=>{
        //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
        this.formDatas = res;
        console.log(this.formDatas)
        loading.dismiss();
      })
  }

  viewRecommend (){
    this.navCtrl.push(RecommendListPage,{ 'formDatas': this.formDatas });
  }


  openFAB() {
    console.log('Clicked open social menu');
  }

  goHref(network: string, fab: FabContainer) {
    console.log('Share in ' + network);
    fab.close();
  }
}
