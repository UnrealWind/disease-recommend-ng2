import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ErrorTipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorTipProvider {

  constructor(public Http: HttpClient) {
    console.log('Hello ErrorTipProvider Provider');
  }

  out(callback){
    callback();
  }
}
