import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InputIndexPage} from "../input-index/input-index";

@IonicPage()
@Component({
  selector: 'page-list-index',
  templateUrl: 'list-index.html',
})
export class ListIndexPage {
  diseaseId;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.diseaseId = this.navParams.data.id;
    console.log(this.diseaseId)
  }
  inputIndex(id){
    this.navCtrl.push(InputIndexPage,{ 'id': id })
  }

}
