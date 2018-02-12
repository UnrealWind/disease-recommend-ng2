import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { ListIndexPage} from "../list-index/list-index";
import { MenusPage} from "../menus/menus";

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'page-index.html',
})
export class PageIndexPage {

  slides;
  plans;
  news;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.slides = [
      {
        image: "./assets/imgs/a.jpg",
      },
      {
        image: "./assets/imgs/b.png",
      },
      {
        image: "./assets/imgs/c.jpg",
      }
    ];
    this.plans = [
      {
        label: "高血压",
        id:"100037",
        icon:'ios-paper-outline'
      },
      {
        label: "慢阻肺",
        id:'100059',
        icon:'ios-copy-outline'
      },
      {
        label: "其他",
        id:'0',
        icon:'ios-create-outline'
      }
    ];
    this.news = [
      {
        label: "请明天到医院进行PICC置管维护",
        date:"2018-01-01"
      },
      {
        label: "其他消息",
        date:"2018-01-01"
      }
    ];

  }
  listIndex (plan){
    //this.navCtrl.push(ListIndexPage,{ 'id': id })
    this.navCtrl.push(MenusPage,{ 'plan': plan })
  }

}
