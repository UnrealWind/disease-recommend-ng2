import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Interceptor} from "../providers/http-interceptor/http-interceptor";
import { NotifyModule } from 'ngx-notify';

import { MyApp } from './app.component';

//login
import { LoginPage} from "../pages/login/login";
//tab切换
import { TabsPage } from '../pages/tabs/tabs';
//首页
import { PageIndexPage} from "../pages/page-index/page-index";
//病历列表页面
import { ListIndexPage } from '../pages/list-index/list-index'
//病历录入模块列表页面
import { InputIndexPage} from "../pages/input-index/input-index";
//病历录入录入页面
import { InputListPage} from "../pages/input-list/input-list";
//推荐列表
import { RecommendListPage} from "../pages/recommend-list/recommend-list";
//方案详情列表
import { RecommendDetailPage} from "../pages/recommend-detail/recommend-detail";
//医嘱详情，想了想还是要把
import { DoctorAdvicePage} from "../pages/doctor-advice/doctor-advice";
//方案推荐依据
import { RecommendBasicPage} from "../pages/recommend-basic/recommend-basic";
//方案介绍
import { PlanIntroducePage} from "../pages/plan-introduce/plan-introduce";
//降压目标
import { DepressurizationTargetPage} from "../pages/depressurization-target/depressurization-target";
//相关危险因素
import { RiskFactorPage} from "../pages/risk-factor/risk-factor";
//各种方案文献
import { PlanLiteraturePage} from "../pages/plan-literature/plan-literature";
//典型病例
import { TypicalRecordPage} from "../pages/typical-record/typical-record";


//表单组件
import { FormComponent } from "../components/form/form"
//推荐理由
import { RecommendResonComponent} from "../components/recommend-reson/recommend-reson";
import { ConstantProvider } from '../providers/constant/constant';

@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    ListIndexPage,
    TabsPage,
    PageIndexPage,
    InputIndexPage,
    FormComponent,
    InputListPage,
    RecommendListPage,
    RecommendDetailPage,
    DoctorAdvicePage,
    RecommendBasicPage,
    RecommendResonComponent,
    PlanIntroducePage,
    DepressurizationTargetPage,
    RiskFactorPage,
    PlanLiteraturePage,
    TypicalRecordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      iconMode: 'ios',//安卓icon强制使用ios的icon以及样式
      mode: 'ios',//样式强制使用ios样式
    }),
    NotifyModule.forRoot({
      options: { },
      notify: {
        progress: true
      }
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    ListIndexPage,
    TabsPage,
    PageIndexPage,
    InputIndexPage,
    FormComponent,
    InputListPage,
    RecommendListPage,
    RecommendDetailPage,
    DoctorAdvicePage,
    RecommendBasicPage,
    RecommendResonComponent,
    PlanIntroducePage,
    DepressurizationTargetPage,
    RiskFactorPage,
    PlanLiteraturePage,
    TypicalRecordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    ConstantProvider
  ]
})
export class AppModule {

}
