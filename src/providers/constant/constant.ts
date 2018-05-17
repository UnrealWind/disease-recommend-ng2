import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {
  BackstageUrl;
  constructor() {
    //this.BackstageUrl = 'http://192.168.1.161:8080/recommend/'
    this.BackstageUrl = 'http://47.92.143.156:29106/recommend/'
  }

}
