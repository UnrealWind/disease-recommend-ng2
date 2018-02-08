import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpSentEvent,HttpHeaderResponse,
  HttpProgressEvent,HttpResponse,HttpUserEvent } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { NotifyService } from 'ngx-notify';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private notifySrv: NotifyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const Req = req.clone({
      headers: req.headers.set('token', 'asdf'),
      params:req.params.set('params','asdf')
    });

    return next
      .handle(Req)
      .mergeMap((event: any) => {

        //这里可以通过各种情况抛出异常
        if (event instanceof HttpResponse && event.status !== 200) {
          return Observable.create(observer => observer.error(event));
        }

        return Observable.create(observer => observer.next(event));
      })
      .catch((res: HttpResponse<any>) => {
        switch (res.status) {
          case 401:
            // 权限处理
            location.href = ''; // 重新登录
            break;
          case 200:
            //this.notifySrv.success('200', `请求成功`);
            break;
          case 404:
            this.notifySrv.error('404', `API不存在`);
            break;
          case 500:
            this.notifySrv.error('500', `后台报错`);
            break;
        }
        // 以错误的形式结束本次请求
        return Observable.throw(res);
      })
  }
}
