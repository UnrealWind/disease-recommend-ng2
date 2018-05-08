import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule ,DeepLinkConfig} from 'ionic-angular';
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
//左侧切换
//import { MenusPage } from "../pages/menus/menus";
//病历列表页面
import { ListIndexPage } from '../pages/list-index/list-index'
//病历录入模块列表页面
//import { InputIndexPage} from "../pages/input-index/input-index";
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
//查看文献
import { ViewPdfPage} from "../pages/view-pdf/view-pdf";
//错误页面
import { PageErrorPage} from "../pages/page-error/page-error";

//表单组件
import { FormComponent } from "../components/form/form"
//推荐理由
import { RecommendResonComponent} from "../components/recommend-reson/recommend-reson";
//默认配置文件
import { ConstantProvider } from '../providers/constant/constant';

//以前写的有问题，应该在这里增加子页面的module
import {LoginPageModule} from "../pages/login/login.module";
import {ListIndexPageModule} from "../pages/list-index/list-index.module";
import {PageIndexPageModule} from "../pages/page-index/page-index.module";
import {InputListPageModule} from "../pages/input-list/input-list.module";
import {RecommendListPageModule} from "../pages/recommend-list/recommend-list.module";
import {RecommendDetailPageModule} from "../pages/recommend-detail/recommend-detail.module";
import {DoctorAdvicePageModule} from "../pages/doctor-advice/doctor-advice.module";
import {RecommendBasicPageModule} from "../pages/recommend-basic/recommend-basic.module";
import {PlanIntroducePageModule} from "../pages/plan-introduce/plan-introduce.module";
import {DepressurizationTargetPageModule} from "../pages/depressurization-target/depressurization-target.module";
import {RiskFactorPageModule} from "../pages/risk-factor/risk-factor.module";
import {PlanLiteraturePageModule} from "../pages/plan-literature/plan-literature.module";
import {TypicalRecordPageModule} from "../pages/typical-record/typical-record.module";
import {ViewPdfPageModule} from "../pages/view-pdf/view-pdf.module";
import {PageErrorPageModule} from "../pages/page-error/page-error.module";

//这里配置的是需要对外暴露url访问模式的地方
export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: InputListPage, name: 'InputListPage', segment: 'input-list/:discribe/:class_id' }
  ]
};

@NgModule({
  declarations: [
    MyApp,
    FormComponent,
    RecommendResonComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      iconMode: 'ios',//安卓icon强制使用ios的icon以及样式
      mode: 'ios',//样式强制使用ios样式
    },deepLinkConfig),
    NotifyModule.forRoot({
      options: { },
      notify: {
        progress: true
      }
    }),
    HttpClientModule,
    LoginPageModule,
    ListIndexPageModule,
    PageIndexPageModule,
    //InputIndexPage,
    InputListPageModule,
    RecommendListPageModule,
    RecommendDetailPageModule,
    DoctorAdvicePageModule,
    RecommendBasicPageModule,
    PlanIntroducePageModule,
    DepressurizationTargetPageModule,
    RiskFactorPageModule,
    PlanLiteraturePageModule,
    TypicalRecordPageModule,
    ViewPdfPageModule,
    PageErrorPageModule
    //MenusPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    ListIndexPage,
    TabsPage,
    PageIndexPage,
    //InputIndexPage,
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
    TypicalRecordPage,
    ViewPdfPage,
    PageErrorPage
    //MenusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    ConstantProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

}
