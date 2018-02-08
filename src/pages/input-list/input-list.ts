import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-input-list',
  templateUrl: 'input-list.html',
})
export class InputListPage {
  formData;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.formData = this.navParams.data.formData;
  }

  update (){
    console.log(this.formData)
    this.goBack();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
