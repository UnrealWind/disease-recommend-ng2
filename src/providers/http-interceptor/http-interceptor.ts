import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpSentEvent,HttpHeaderResponse,
  HttpProgressEvent,HttpResponse,HttpUserEvent } from '@angular/common/http';

import { NavController, App,LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PageErrorPage} from "../../pages/page-error/page-error";

import { Observable } from "rxjs/Observable";
// import { NotifyService } from 'ngx-notify';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class Interceptor implements HttpInterceptor {
  loading;
  constructor(public alertCtrl:AlertController,
              public appCtrl : App,
              public loadingCtrl:LoadingController) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '加载中……'
    });
    this.loading.present();

    const Req = req.clone({

      //以后可能会将eu,ep放在header里,
      /*headers: req.headers.set('token', 'asdf'),*/
      params:req.params.set('eu','c4843ad54897b3f8a45de8807a89bc76')
        .set('ep','c4843ad54897b3f8a45de8807a89bc76')
    });

    return next
      .handle(Req)
      .mergeMap((event: any) => {
        //这里可以通过各种情况抛出异常
        if (event instanceof HttpResponse && event.status !== 200) {
          this.loading._state == 1 ? this.loading.dismiss() : undefined;
          return Observable.create(observer => observer.error(event));
        }
        //正常操作,
        this.loading._state == 1 ? this.loading.dismiss() : undefined;
        return Observable.create(observer => observer.next(event));
      })
      .catch((res: HttpResponse<any>) => {  //只有链接报错才会触发,进行其他操作
        this.loading._state == 1 ? this.loading.dismiss() : undefined;
        switch (res.status) {
          case 401:
            // 权限处理
            location.href = ''; // 重新登录
            break;
          case 404:
            this.showError(404);
            break;
          case 500:
            this.showError(500);
            break;
        }
        // 以错误的形式结束本次请求
        return Observable.throw(res);
        // return Observable.create(observer => observer.error(res));
      })
  }

  showError(status:number){
    let activeNav: NavController = this.appCtrl.getActiveNav(),
      message = '哎呀,页面找不到了!!!',
      canGoBack = activeNav.canGoBack();

    if(status == 500){
      message = '哎呀,服务器出错了!!!';
    }else{

    }
    if(canGoBack){
      let confirm = this.alertCtrl.create({
        title: '错误提示',
        message: message,
        buttons: [
          // {
          //   text: "刷新",
          //   handler: () => {
          //
          //   }
          // },
          {
            text: "返回",
            handler: () => {
              activeNav.pop();
            }
          }

        ]
      });
      confirm.present();
    }else{
      activeNav.push(PageErrorPage);
    }
  }
}
