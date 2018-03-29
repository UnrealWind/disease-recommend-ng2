webpackJsonp([1],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommend_detail_recommend_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doctor_advice_doctor_advice__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecommendListPage = (function () {
    function RecommendListPage(navCtrl, navParams, modalCtrl, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = {
            classId: this.navParams.data.parameter.class_id,
            patiId: this.navParams.data.parameter.pati_id,
            patiVisitId: this.navParams.data.parameter.pati_visit_id,
            discribe: this.navParams.data.parameter.discribe
        };
        this.recommend = this.navParams.data.result;
    }
    //这个ng是angularjs用于自己掌握数据初始化渲染的入口，只执行一次的，慢于constructor,后者是原生es6
    RecommendListPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        //this.getDoctor();
        this.getRecommend(loading);
    };
    /*getDoctor (){
      let filter = {
        "filter_patiId":this.params.patiId,
        "filter_patiVisitId":this.params.patiVisitId,
        "class_id":this.params.classId,
        "filter_pageNo":1,
        "filter_pageSize":10
      };
      var url = this.Constant.BackstageUrl + this.params.discribe +'/advice/doctorAdvice';
      var params = '?filter_patiId='+this.params.patiId+'&filter_patiVisitId='+this.params.patiVisitId+'&class_id='+this.params.classId+'&filter_pageNo=1&filter_pageSize=10';
      this.Http.get(url + params)
        .subscribe((res:Response)=>{
          this.doctorList = res;
          if(this.doctorList.page!=null){
            this.doctorList = this.doctorList.page.content;
          }else{
            this.doctorList = [];
          }
        })
    }*/
    RecommendListPage.prototype.getRecommend = function (loading) {
        var _this = this;
        var url = this.Constant.BackstageUrl + this.params.discribe + '/recommendation?';
        this.Http.post(url + 'class_id=' + this.params.classId, this.recommend)
            .subscribe(function (res) {
            _this.recommendList = res;
            _this.schemeList = _this.filterScheme(_this.recommendList.data.recom_scheme); //推荐方案列表
            _this.absoluteList = _this.recommendList.data.absolute_contraindication; //绝对列表
            _this.relativeList = _this.recommendList.data.relative_contraindication; //相对列表
            loading.dismiss();
        });
    };
    RecommendListPage.prototype.filterScheme = function (list) {
        if (list.length > 0) {
            list.forEach(function (entity, idx) {
                var recomName = [], drugNames = [], type = "药品";
                if (entity.scheme.length > 0) {
                    entity.scheme.forEach(function (item, idy) {
                        recomName.push(item.recom_name);
                        if (item.drug_names) {
                            drugNames.push(item.drug_names.label);
                        }
                        if (item.type != "药品") {
                            type = "";
                        }
                    });
                    entity.recomName = recomName.join(',');
                    entity.drugNames = drugNames.join(',');
                    entity.type = type;
                }
            });
        }
        else {
            list = [];
        }
        return list;
    };
    RecommendListPage.prototype.viewRecommendDetail = function (entity, type) {
        var filter = {
            parameter: {
                patiId: this.params.patiId,
                patiVisitId: this.params.patiVisitId,
                classId: this.params.classId,
                uuid: entity.uuid,
                id: this.recommendList.id,
                discribe: this.params.discribe,
                type: type,
                name: ''
            },
            result: this.recommend
        };
        if (type == '推荐理由') {
            filter.parameter.name = entity.recomName;
        }
        else {
            filter.parameter.name = entity.drug_name;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommend_detail_recommend_detail__["a" /* RecommendDetailPage */], filter);
    };
    RecommendListPage.prototype.viewAdviceDetail = function (entity) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__doctor_advice_doctor_advice__["a" /* DoctorAdvicePage */], entity).present();
    };
    RecommendListPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recommend-list',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-list/recommend-list.html"*/'<ion-content>\n  <ion-list *ngIf="schemeList">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>推荐方案列表\n    </ion-list-header>\n    <ion-item (click)="viewRecommendDetail(entity,\'推荐理由\')" *ngFor="let entity of schemeList">\n      <h3>{{entity.recomName}}</h3>\n      <p>{{entity.drugNames}}</p>\n      <ion-note item-end>{{entity.type}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf="schemeList.length==0 || schemeList==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="relativeList">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>相对禁忌\n    </ion-list-header>\n    <ion-item *ngFor="let entity of relativeList" (click)="viewRecommendDetail(entity,\'相对禁忌理由\')" >\n      <h3>{{entity.drug_name}}</h3>\n      <p>{{entity.drug_names.label}}</p>\n      <ion-note item-end>{{entity.type}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf="relativeList.length==0 || relativeList==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="absoluteList">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>绝对禁忌\n    </ion-list-header>\n    <ion-item *ngFor="let entity of absoluteList" (click)="viewRecommendDetail(entity,\'绝对禁忌理由\')" >\n      <h3>{{entity.drug_name}}</h3>\n      <p>{{entity.drug_names.label}}</p>\n      <ion-note item-end>{{entity.type}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf="absoluteList.length==0 || absoluteList==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n\n  <!--<ion-list *ngIf="doctorList">-->\n    <!--<ion-list-header>-->\n      <!--<ion-icon name="md-desktop" color="danger"></ion-icon>医嘱信息-->\n    <!--</ion-list-header>-->\n    <!--<ion-item *ngFor="let entity of doctorList" (click)="viewAdviceDetail(entity)">-->\n      <!--<h3>{{entity.drugName}}	</h3>-->\n      <!--<p>剂量：{{entity.doseage}}{{entity.doseUnit}} &nbsp;&nbsp;&nbsp; 频次{{entity.freq}}</p>-->\n      <!--<ion-note item-end>{{entity.repeatIndicator}}</ion-note>-->\n    <!--</ion-item>-->\n    <!--<ion-item *ngIf="doctorList.length==0 || doctorList==null">-->\n      <!--<h3>暂无数据.......</h3>-->\n    <!--</ion-item>-->\n  <!--</ion-list>-->\n\n  <div padding *ngIf="schemeList">\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-list/recommend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecommendListPage);
    return RecommendListPage;
}());

//# sourceMappingURL=recommend-list.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommend_basic_recommend_basic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plan_introduce_plan_introduce__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__depressurization_target_depressurization_target__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__risk_factor_risk_factor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plan_literature_plan_literature__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typical_record_typical_record__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_recommend_reson_recommend_reson__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RecommendDetailPage = (function () {
    function RecommendDetailPage(navCtrl, navParams, Http, modalCtrl, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.modalCtrl = modalCtrl;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data.parameter;
        console.log(this.params);
        this.result = this.navParams.data;
        this.recommendLists = [
            {
                label: "方案推荐依据",
                id: "1",
                icon: 'ios-paper-outline'
            },
            {
                label: "方案介绍",
                id: '2',
                icon: 'ios-copy-outline'
            },
            {
                label: "降压目标",
                id: '3',
                icon: 'ios-create-outline'
            },
            {
                label: "相关危险因素处理",
                id: "4",
                icon: 'ios-paper-outline'
            },
            {
                label: "方案相关文献",
                id: '5',
                icon: 'ios-copy-outline'
            },
            {
                label: "药品不良反应相关文献",
                id: '6',
                icon: 'ios-create-outline'
            },
            // {
            //   label: "典型病历",
            //   id:'7',
            //   icon:'ios-create-outline'
            // },
            {
                label: "标准来源指南",
                id: '8',
                icon: 'ios-create-outline'
            }
        ];
    }
    RecommendDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + '/recommendation/reason?id=' + this.params.id + '&uuid=' + this.params.uuid + "&class_id=" + this.params.classId)
            .subscribe(function (res) {
            _this.suggestList = res;
            loading.dismiss();
        });
    };
    RecommendDetailPage.prototype.viewRecommendReson = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */], this.suggestList).present();
    };
    RecommendDetailPage.prototype.viewRecommendDetail = function (recommendList) {
        switch (recommendList.id) {
            case '1':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommend_basic_recommend_basic__["a" /* RecommendBasicPage */], this.result);
                break;
            case '2':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__plan_introduce_plan_introduce__["a" /* PlanIntroducePage */], this.params);
                break;
            case '3':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__depressurization_target_depressurization_target__["a" /* DepressurizationTargetPage */], this.params);
                break;
            case '4':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__risk_factor_risk_factor__["a" /* RiskFactorPage */], this.params);
                break;
            case '5':
                this.params.tabType = 'plan';
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], this.params);
                break;
            case '6':
                this.params.tabType = 'drug';
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], this.params);
                break;
            case '7':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__typical_record_typical_record__["a" /* TypicalRecordPage */], this.params);
                break;
            case '8':
                this.params.tabType = 'source';
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], this.params);
                break;
        }
    };
    RecommendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recommend-detail',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-detail/recommend-detail.html"*/'\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>{{params.type}}\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item *ngIf="suggestList" class="recommend-list">\n      <h3 *ngIf="suggestList.length>0" (click)="viewRecommendReson()" class="content">{{suggestList[0]}}</h3>\n      <h3 *ngIf="suggestList.length==0 || suggestList==null">暂无数据.......</h3>\n    </ion-item>\n\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>{{params.name}}\n      <!--<button ion-button outline item-end (click)="back()">返回</button>-->\n    </ion-list-header>\n\n    <ion-grid *ngIf="recommendLists">\n      <ion-row class="col-project">\n        <ion-col col-4 *ngFor="let recommendList of recommendLists;let idx = index" (click)="viewRecommendDetail(recommendList)"\n                 [ngClass]="{noBorder:(idx+1)%3 == 0}">\n          <ion-icon name="{{recommendList.icon}}" color="primary"></ion-icon>\n          <ion-label>{{recommendList.label}}</ion-label>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-detail/recommend-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecommendDetailPage);
    return RecommendDetailPage;
}());

//# sourceMappingURL=recommend-detail.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendBasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendBasicPage = (function () {
    function RecommendBasicPage(navCtrl, navParams, Http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    RecommendBasicPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        this.getFormDatas(loading);
    };
    RecommendBasicPage.prototype.getFormDatas = function (loading) {
        var _this = this;
        this.Http.get('../../assets/data/formDatas' + this.params.parameter.classId + '.json', {})
            .subscribe(function (res) {
            //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
            _this.formDatas = res;
            _this.addValue();
            loading.dismiss();
        });
    };
    RecommendBasicPage.prototype.addValue = function () {
        var that = this;
        that.tagFormDatas = [];
        this.formDatas.data.forEach(function (modal, i) {
            that.tagFormDatas.push({
                "label": modal.label,
                "inputs": []
            });
            modal.inputs.forEach(function (input, ix) {
                input.dimension ? input.dimension.options.forEach(function (opt, iy) {
                    that.params.result[input.name] && opt.value == that.params.result[input.name] ?
                        input.value = opt.label : undefined;
                }) : input.value = that.params.result[input.name];
                input.value != 0 && input.value != '否' ? that.tagFormDatas[i].inputs.push(input) : undefined;
            });
        });
    };
    RecommendBasicPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendBasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recommend-basic',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-basic/recommend-basic.html"*/'<ion-content>\n  <div *ngIf="tagFormDatas">\n    <ion-list  *ngFor = "let formData of tagFormDatas;let index = index">\n      <ion-list-header>\n        <ion-icon name="md-desktop" color="danger"></ion-icon>{{formData.label}}\n      </ion-list-header>\n\n      <ion-item *ngFor = "let input of formData.inputs">\n        <h3>{{input.label}}</h3>\n        <p></p>\n        <ion-note item-end>{{input.value}}</ion-note>\n      </ion-item>\n\n      <ion-item *ngIf="formData.inputs.length == 0">\n        <h3>无</h3>\n        <p></p>\n        <ion-note item-end></ion-note>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button block (click)="back()" >返回</button>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/recommend-basic/recommend-basic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecommendBasicPage);
    return RecommendBasicPage;
}());

//# sourceMappingURL=recommend-basic.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanIntroducePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanIntroducePage = (function () {
    function PlanIntroducePage(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    PlanIntroducePage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + '/recommendation/introduce?uuid=' + this.params.uuid + '&id=' + this.params.id)
            .subscribe(function (res) {
            _this.details = res;
            _this.details = _this.filter(_this.details);
            loading.dismiss();
        });
    };
    PlanIntroducePage.prototype.filter = function (list) {
        list.data.forEach(function (entity, idx) {
            entity.untowardEffectArray = entity.untowardEffect.split('&&');
            entity.untowardEffectArray.pop();
            entity.attentionArray = entity.attention.split('&&');
        });
        return list;
    };
    PlanIntroducePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PlanIntroducePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-plan-introduce',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/plan-introduce/plan-introduce.html"*/'<ion-content>\n  <div *ngIf="details">\n    <ion-list *ngFor="let entity of details.data;let idx = index;">\n      <ion-list-header>\n        <ion-icon name="md-desktop" color="danger"></ion-icon>{{entity.drugClassName}}\n        <button ion-button outline item-end (click)="back()" *ngIf="idx == 0">返回</button>\n      </ion-list-header>\n      <ion-item>\n        <h3>药品作用机理</h3>\n        <p>{{entity.actionPrinciple}}</p>\n      </ion-item>\n      <ion-item class="bad-effect">\n        <h3>主要不良反应</h3>\n        <ul>\n          <li>\n            <p *ngFor="let effect of entity.untowardEffectArray">{{effect}}</p>\n          </li>\n        </ul>\n        <!--<ul>-->\n          <!--<li>-->\n            <!--<p>-->\n              <!--1、体位性低血压-->\n            <!--</p>-->\n            <!--<p>-->\n              <!--β受体阻滞剂降低交感神经张力减少心输出量、降低外周血管阻力；并抑制肾素血管紧张素系统具有良好的降血压作用。因此，体位性低血压也比较常见，尤其在老年患者、剂量比较大时，为避免其发生，应嘱患者在体位变化时动作应缓慢，必要时减少用药剂量。-->\n            <!--</p>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<p>-->\n              <!--2、支气管痉挛-->\n            <!--</p>-->\n            <!--<p>-->\n              <!--为药物对β2受体阻滞作用所致。因此，一般来说禁用于患支气管哮喘和慢性阻塞性肺部疾病的患者。而对于一些肺部疾病较轻，而同时具有β受体阻滞剂治疗强烈适应症（如慢性左心室功能不全、急性心肌梗死）时，可试用β1受体受体选择性较高的药物如比索洛尔，用药后应密切观察患者症状，如无不适，可以进行长期用药。必须提出的是，对β2受体的影响相对较小。在使用剂量较大时，仍然可以表现出对β2受体的阻断作用。-->\n            <!--</p>-->\n          <!--</li>-->\n        <!--</ul>-->\n      </ion-item>\n      <ion-item>\n        <h3>用药提示</h3>\n        <p>{{entity.medicationPrompts}}</p>\n      </ion-item>\n      <ion-item>\n        <h3>适应症状</h3>\n        <p>{{entity.indication}}</p>\n      </ion-item>\n      <ion-item>\n        <h3>禁忌症状</h3>\n        <p *ngIf="!(entity.relativeContraindication == \'\' || entity.relativeContraindication==null)">{{entity.relativeContraindication}}</p>\n        <p *ngIf="entity.relativeContraindication == \'\' || entity.relativeContraindication==null">无</p>\n      </ion-item>\n      <ion-item>\n        <h3>注意事项</h3>\n        <ul>\n          <li>\n            <p *ngFor="let attention of entity.attentionArray">{{attention}}</p>\n          </li>\n        </ul>\n      </ion-item>\n\n      <ion-item>\n        <ion-list>\n          <h3>常见药品</h3>\n          <ion-item *ngFor="let drug of entity.commonDrugs">\n            <h3>{{drug.drugName}}</h3>\n            <p>达峰时间:	{{drug.peakTime}} &nbsp;&nbsp;半衰期（小时）:{{drug.halfLife}} ;&nbsp;&nbsp; 每天剂量（mg）:{{drug.dosage}} </p>\n            <ion-note item-end>分服次数:{{drug.frequency}}</ion-note>\n          </ion-item>\n        </ion-list>\n\n      </ion-item>\n    </ion-list>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </div>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/plan-introduce/plan-introduce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PlanIntroducePage);
    return PlanIntroducePage;
}());

//# sourceMappingURL=plan-introduce.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepressurizationTargetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DepressurizationTargetPage = (function () {
    function DepressurizationTargetPage(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    DepressurizationTargetPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + '/voltage?id=' + this.params.id + '&class_id=' + this.params.classId)
            .subscribe(function (res) {
            _this.details = res;
            loading.dismiss();
        });
    };
    DepressurizationTargetPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DepressurizationTargetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-depressurization-target',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/depressurization-target/depressurization-target.html"*/'<ion-content>\n  <ion-list *ngIf="details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>降压目标\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item *ngFor="let entity of details.data">\n      <h3>{{entity.condition}}</h3>\n      <p>{{entity.result}}</p>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/depressurization-target/depressurization-target.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], DepressurizationTargetPage);
    return DepressurizationTargetPage;
}());

//# sourceMappingURL=depressurization-target.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskFactorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiskFactorPage = (function () {
    function RiskFactorPage(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    RiskFactorPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + '/danger/factor?id=' + this.params.id)
            .subscribe(function (res) {
            _this.details = res;
            loading.dismiss();
        });
    };
    RiskFactorPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RiskFactorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-risk-factor',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/risk-factor/risk-factor.html"*/'<ion-content>\n  <ion-list *ngIf="details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>相关危险因素处理\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item *ngFor="let entity of details.data">\n      <h3>{{entity.fieldName}}</h3>\n      <p>{{entity.dangerHandle}}</p>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/risk-factor/risk-factor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RiskFactorPage);
    return RiskFactorPage;
}());

//# sourceMappingURL=risk-factor.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanLiteraturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_pdf_view_pdf__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanLiteraturePage = (function () {
    function PlanLiteraturePage(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    PlanLiteraturePage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        if (this.params.tabType == 'plan') {
            var url = '/scheme/literature';
            this.getDetails(url, loading);
        }
        else if (this.params.tabType == 'drug') {
            var url = '/drug/literature';
            this.getDetails(url, loading);
        }
        else if (this.params.tabType == 'source') {
            var url = '/guide';
            this.getDetails(url, loading);
        }
    };
    PlanLiteraturePage.prototype.getDetails = function (url, loading) {
        var _this = this;
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + url + '?id=' + this.params.id + '&uuid=' + this.params.uuid)
            .subscribe(function (res) {
            _this.details = res;
            loading.dismiss();
        });
    };
    PlanLiteraturePage.prototype.viewPDF = function (id, type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_pdf_view_pdf__["a" /* ViewPdfPage */], {
            'id': id,
            'type': type,
            'discribe': this.params.discribe
        });
    };
    PlanLiteraturePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PlanLiteraturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-plan-literature',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/plan-literature/plan-literature.html"*/'<ion-content>\n  <ion-list *ngIf="params.tabType == \'plan\' && details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>方案相关文献\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewPDF(entity.value,\'scheme\')" *ngFor="let entity of details.data">\n    <!--<ion-item *ngFor="let entity of details.data">-->\n      <h3>{{entity.label}}</h3>\n      <p *ngIf="params.discribe == \'hbp\'">高血压</p>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="params.tabType == \'drug\' && details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>药品不良反应相关文献\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewPDF(entity.value,\'drug\')" *ngFor="let entity of details.data">\n    <!--<ion-item *ngFor="let entity of details.data">-->\n      <h3>{{entity.label}}</h3>\n      <p *ngIf="params.discribe == \'hbp\'">高血压</p>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="params.tabType == \'source\' && details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>标准来源指南\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewPDF(entity.id,\'guide\')" *ngFor="let entity of details.data">\n    <!--<ion-item *ngFor="let entity of details.data">-->\n      <h3>{{entity.name}}</h3>\n      <p>{{entity.disease}}</p>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/plan-literature/plan-literature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PlanLiteraturePage);
    return PlanLiteraturePage;
}());

//# sourceMappingURL=plan-literature.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfjs_dist__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfjs_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfjs_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPdfPage = (function () {
    function ViewPdfPage(navCtrl, navParams, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.currentPage = 1;
        this.params = this.navParams.data;
        //this.tagPDFUrl = this.sanitizer.bypassSecurityTrustResourceUrl()
    }
    ViewPdfPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.tagPDFUrl = this.Constant.BackstageUrl + this.params.discribe + '/literature/' + this.params.type + '/' + this.params.id;
        this.viewPDF(loading);
    };
    ViewPdfPage.prototype.viewPDF = function (loading) {
        var url = this.tagPDFUrl;
        var that = this;
        //pdfjs.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
        var loadingTask = __WEBPACK_IMPORTED_MODULE_3_pdfjs_dist__["getDocument"](url);
        loadingTask.promise.then(function (pdf) {
            console.log('PDF loaded');
            that.pdfDocument = pdf;
            that.totalPages = pdf.pdfInfo.numPages;
            that.getPage(that.currentPage);
            // pdf.getPage(that.currentPage).then(function(page) {
            //   console.log('Page loaded');
            //
            //   var scale = 1.5;
            //   var viewport = page.getViewport(scale);
            //
            //   var canvas : any = document.getElementById('the-canvas');
            //   var context = canvas.getContext('2d');
            //   canvas.height = viewport.height;
            //   canvas.width = viewport.width;
            //
            //   var renderContext = {
            //     canvasContext: context,
            //     viewport: viewport
            //   };
            //   var renderTask = page.render(renderContext);
            //   renderTask.then(function () {
            //     console.log('Page rendered');
            //
            //     //消除加载中的提示
            //     loading.dismiss()
            //   });
            // });
            //消除加载中的提示
            loading.dismiss();
        }, function (reason) {
            console.error(reason);
        });
    };
    ViewPdfPage.prototype.getPage = function (page) {
        var that = this;
        if (!(Number(page) < 1 || Number(page) > Number(this.totalPages))) {
            that.pdfDocument.getPage(page).then(function (page) {
                console.log('Page loaded');
                var scale = 1.5;
                var viewport = page.getViewport(scale);
                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.then(function () {
                    console.log('Page rendered');
                });
            });
        }
        else {
            //防止
            // if(page>this.totalPages){
            //   this.currentPage = this.totalPages;
            // }else{
            //   this.currentPage = 1;
            // }
        }
    };
    ViewPdfPage.prototype.prePage = function () {
        this.currentPage -= 1;
        this.getPage(this.currentPage);
    };
    ViewPdfPage.prototype.nextPage = function () {
        this.currentPage += 1;
        this.getPage(this.currentPage);
    };
    ViewPdfPage.prototype.changeRate = function (operate) {
        var width = __WEBPACK_IMPORTED_MODULE_4_jquery__('.scroll-box').width();
        if (operate == 'large') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.scroll-box').width(width * 1.2);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.scroll-box').width(width / 1.2);
        }
    };
    ViewPdfPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ViewPdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-view-pdf',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/view-pdf/view-pdf.html"*/'<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      <button class="pageZoom pageZoomLeft" title="Previous Page" id="previous" (click)="prePage()" [ngClass]="{\'disabled\':currentPage<=1}">\n        <ion-icon name="md-arrow-round-up"></ion-icon></button>\n      <div class="splitToolbarButtonLeft"></div>\n      <button class="pageZoom pageZoomRight" title="Next Page" id="next" (click)="nextPage()" [ngClass]="{\'disabled\':currentPage>=totalPages}">\n        <ion-icon name="md-arrow-round-down"></ion-icon></button>\n      <span>&nbsp;&nbsp;&nbsp;页码:</span><input type="number" id="pageNumber" class="pageNumber" [ngClass]="{\'outside\':(currentPage<1 || currentPage>totalPages)}"\n             value="1" size="4" min="1" [(ngModel)]="currentPage" (blur)="getPage(currentPage)" ><span>/{{totalPages}}</span>\n      <div style="float: right;">\n        <button class="pageZoom pageZoomLeft" id="pageZoom" (click)="changeRate(\'large\')"><ion-icon name="md-add"></ion-icon></button>\n        <div class="splitToolbarButtonRight"></div>\n        <button class="pageZoom pageZoomRight" (click)="changeRate(\'small\')"><ion-icon name="md-remove"></ion-icon></button>\n      </div>\n    </ion-list-header>\n  </ion-list>\n  <div class="scroll-box">\n    <canvas id="the-canvas"></canvas>\n  </div>\n  <!--<div class="footer">-->\n    <!--<button class="toolbarButton pageUp" title="Previous Page" id="previous" (click)="prePage()" [ngClass]="{\'disabled\':currentPage<=1}"></button>-->\n    <!--<button class="toolbarButton pageDown" title="Next Page" id="next" (click)="nextPage()" [ngClass]="{\'disabled\':currentPage>=totalPages}"></button>-->\n    <!--<input type="number" id="pageNumber" class="toolbarField pageNumber"-->\n           <!--value="1" size="4" min="1" [(ngModel)]="currentPage" (keyup)="getPage(currentPage)" >-->\n  <!--</div>-->\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/view-pdf/view-pdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ViewPdfPage);
    return ViewPdfPage;
}());

//# sourceMappingURL=view-pdf.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypicalRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TypicalRecordPage = (function () {
    function TypicalRecordPage(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.params = this.navParams.data;
    }
    TypicalRecordPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.Http.get(this.Constant.BackstageUrl + this.params.discribe + '/typical/cases?id=' + this.params.id + '&uuid=' + this.params.uuid)
            .subscribe(function (res) {
            _this.details = res;
            loading.dismiss();
        });
    };
    TypicalRecordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TypicalRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-typical-record',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/typical-record/typical-record.html"*/'<ion-content>\n  <ion-list *ngIf="details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>典型病历\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewRecord()" *ngFor="let entity of details.data">\n      <h3>{{entity.pati_id}}</h3>\n      <p>{{entity.diagnosis}}</p>\n      <ion-note item-end>	{{entity.admission_date_time}}</ion-note>\n    </ion-item>\n    <ion-item *ngIf="(details.data && details.data.length==0) || details==null || details.data==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/typical-record/typical-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], TypicalRecordPage);
    return TypicalRecordPage;
}());

//# sourceMappingURL=typical-record.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorAdvicePage = (function () {
    function DoctorAdvicePage(navCtrl, navParams, Http, Constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.entity = this.navParams.data;
    }
    DoctorAdvicePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DoctorAdvicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-doctor-advice',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/doctor-advice/doctor-advice.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <h2>{{entity.drugName}}</h2>\n    </ion-item>\n\n    <ion-item >\n      剂量\n      <ion-note item-end>\n        {{entity.doseage}}{{entity.doseUnit}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      频次\n      <ion-note item-end>\n        {{entity.freq}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      途径\n      <ion-note item-end>\n        {{entity.administrationId}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      医嘱类型\n      <ion-note item-end>\n        {{entity.repeatIndicator}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      开始时间\n      <ion-note item-end>\n        {{entity.startDateTime}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      结束时间\n      <ion-note item-end>\n        {{entity.stopDateTime}}\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/doctor-advice/doctor-advice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */]])
    ], DoctorAdvicePage);
    return DoctorAdvicePage;
}());

//# sourceMappingURL=doctor-advice.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_index_list_index__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*import { MenusPage} from "../menus/menus";*/
var PageIndexPage = (function () {
    function PageIndexPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
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
                class_id: "100037",
                discribe: "hbp",
                icon: 'ios-paper-outline'
            },
            {
                label: "慢阻肺",
                class_id: '100059',
                discribe: "copd",
                icon: 'ios-copy-outline'
            },
            {
                label: "其他",
                class_id: '0',
                discribe: "other",
                icon: 'ios-create-outline'
            }
        ];
        this.news = [
            {
                label: "请明天到医院进行PICC置管维护",
                date: "2018-01-01"
            },
            {
                label: "其他消息",
                date: "2018-01-01"
            }
        ];
    }
    PageIndexPage.prototype.listIndex = function (plan) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_index_list_index__["a" /* ListIndexPage */], { 'plan': plan });
        //this.navCtrl.push(MenusPage,{ 'plan': plan })
    };
    PageIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/page-index/page-index.html"*/'\n<ion-content>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>疾病列表\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let plan of plans" (click)="listIndex(plan)">\n          <ion-icon name="{{plan.icon}}" color="primary"></ion-icon>\n          <ion-label>{{plan.label}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-notifications" color="danger"></ion-icon>消息\n    </ion-list-header>\n    <ion-item  *ngFor="let new of news;let index = index">\n      <ion-label>{{new.label}}</ion-label>\n      <ion-note item-end>{{new.date}}</ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/page-index/page-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PageIndexPage);
    return PageIndexPage;
}());

//# sourceMappingURL=page-index.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_list_input_list__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { InputIndexPage} from "../input-index/input-index";

var ListIndexPage = (function () {
    function ListIndexPage(navCtrl, navParams, Http, constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.constant = constant;
        this.loadingCtrl = loadingCtrl;
        this.plan = this.navParams.data.plan;
    }
    ListIndexPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        loading.present();
        this.getRecordList(loading);
    };
    ListIndexPage.prototype.getRecordList = function (loading) {
        var _this = this;
        var urlBack = 'filter_pageNo=1' +
            '&filter_pageSize=10' +
            '&filter_disease=' + this.plan.class_id +
            '&filter_startTime=' +
            '&filter_endTime=' +
            '&filter_search=' +
            '&filter_wardId=' +
            '&filter_diagType=10003';
        this.Http.get(this.constant.BackstageUrl + 'patient/list?' + urlBack, {})
            .subscribe(function (res) {
            _this.recordList = res;
            loading.dismiss();
        });
    };
    ListIndexPage.prototype.inputIndex = function (opt) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__input_list_input_list__["a" /* InputListPage */], {
            'discribe': this.plan.discribe,
            'pati_visit_id': opt.pati_visit_id,
            'pati_id': opt.pati_id,
            'class_id': this.plan.class_id
        });
    };
    ListIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-index',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/list-index/list-index.html"*/'<ion-content>\n\n  <ion-list *ngIf="recordList">\n    <ion-list-header>患者列表</ion-list-header>\n    <ion-searchbar placeholder="请输入患者姓名或id"></ion-searchbar>\n\n    <ion-item *ngFor="let opt of recordList.result" (click)="inputIndex(opt)">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>{{opt.name}} {{opt.pati_id}}</h3>\n      <p>{{opt.diagnosis}}</p>\n      <ion-note item-end>{{opt.admission_date_time}}</ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/list-index/list-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ListIndexPage);
    return ListIndexPage;
}());

//# sourceMappingURL=list-index.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstantProvider = (function () {
    function ConstantProvider() {
        this.BackstageUrl = 'http://192.168.1.161:8080/recommend/';
    }
    ConstantProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConstantProvider);
    return ConstantProvider;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendResonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendResonComponent = (function () {
    function RecommendResonComponent(navCtrl, navParams, Http, Constant, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.Constant = Constant;
        this.loadingCtrl = loadingCtrl;
        this.details = this.navParams.data;
    }
    // ngOnInit(): void {
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'crescent',
    //     content: '加载中……'
    //   });
    //   loading.present();
    //
    //   this.Http.get( this.Constant.BackstageUrl + this.params.discribe +'/recommendation/reason?id='+this.params.id+'&uuid='+this.params.uuid+"&class_id="+this.params.class_id)
    //     .subscribe((res:Response)=>{
    //       this.details = res;
    //       loading.dismiss();
    //     })
    // }
    RecommendResonComponent.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendResonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'recommend-reson',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/components/recommend-reson/recommend-reson.html"*/'<ion-content>\n  <ion-list *ngIf="details">\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>推荐理由\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ol>\n      <li *ngFor="let entity of details">\n        <p>{{entity}}\n        </p>\n      </li>\n    </ol>\n    <ion-item *ngIf="details.length==0 || details==null">\n      <h3>暂无数据.......</h3>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/components/recommend-reson/recommend-reson.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], RecommendResonComponent);
    return RecommendResonComponent;
}());

//# sourceMappingURL=recommend-reson.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, Http, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.constant = constant;
    }
    LoginPage.prototype.login = function () {
        console.log(this.uesrName, this.passWord);
        this.Http.post(this.constant.BackstageUrl + 'login', {})
            .subscribe(function (res) {
            console.log(res);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { 'id': 1 });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/login/login.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>用户名</ion-label>\n      <ion-input [(ngModel)]="uesrName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>密码</ion-label>\n      <ion-input [(ngModel)]="passWord"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="login()" >登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_index_page_index__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__page_index_page_index__["a" /* PageIndexPage */];
        this.tab2Root = '';
        this.tab3Root = '';
        this.tab4Root = '';
        this.tab5Root = '';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="疾病推荐" tabIcon="md-bookmarks"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="test" tabIcon="ios-chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="test" tabIcon="ios-images-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="test" tabIcon="md-chatboxes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="test" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_interceptor_http_interceptor__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_notify__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_index_page_index__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_index_list_index__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_input_list_input_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_recommend_list_recommend_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recommend_detail_recommend_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_doctor_advice_doctor_advice__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recommend_basic_recommend_basic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_plan_introduce_plan_introduce__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_depressurization_target_depressurization_target__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_risk_factor_risk_factor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_plan_literature_plan_literature__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_typical_record_typical_record__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_view_pdf_view_pdf__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_form_form__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_list_index_list_index_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_page_index_page_index_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_input_list_input_list_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_recommend_list_recommend_list_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_recommend_detail_recommend_detail_module__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_doctor_advice_doctor_advice_module__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_recommend_basic_recommend_basic_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_plan_introduce_plan_introduce_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_depressurization_target_depressurization_target_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_risk_factor_risk_factor_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_plan_literature_plan_literature_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_typical_record_typical_record_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_view_pdf_view_pdf_module__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//login

//tab切换

//首页

//左侧切换
//import { MenusPage } from "../pages/menus/menus";
//病历列表页面

//病历录入模块列表页面
//import { InputIndexPage} from "../pages/input-index/input-index";
//病历录入录入页面

//推荐列表

//方案详情列表

//医嘱详情，想了想还是要把

//方案推荐依据

//方案介绍

//降压目标

//相关危险因素

//各种方案文献

//典型病例

//查看文献

//表单组件

//推荐理由

//默认配置文件

//以前写的有问题，应该在这里增加子页面的module














//这里配置的是需要对外暴露url访问模式的地方
var deepLinkConfig = {
    links: [
        { component: __WEBPACK_IMPORTED_MODULE_13__pages_input_list_input_list__["a" /* InputListPage */], name: 'InputListPage', segment: 'input-list/:discribe/:class_id' }
    ]
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    menuType: 'push',
                    iconMode: 'ios',
                    mode: 'ios',
                }, deepLinkConfig),
                __WEBPACK_IMPORTED_MODULE_7_ngx_notify__["a" /* NotifyModule */].forRoot({
                    options: {},
                    notify: {
                        progress: true
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__["a" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_28__pages_list_index_list_index_module__["a" /* ListIndexPageModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_page_index_page_index_module__["a" /* PageIndexPageModule */],
                //InputIndexPage,
                __WEBPACK_IMPORTED_MODULE_30__pages_input_list_input_list_module__["a" /* InputListPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__pages_recommend_list_recommend_list_module__["a" /* RecommendListPageModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_recommend_detail_recommend_detail_module__["a" /* RecommendDetailPageModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_doctor_advice_doctor_advice_module__["a" /* DoctorAdvicePageModule */],
                __WEBPACK_IMPORTED_MODULE_34__pages_recommend_basic_recommend_basic_module__["a" /* RecommendBasicPageModule */],
                __WEBPACK_IMPORTED_MODULE_35__pages_plan_introduce_plan_introduce_module__["a" /* PlanIntroducePageModule */],
                __WEBPACK_IMPORTED_MODULE_36__pages_depressurization_target_depressurization_target_module__["a" /* DepressurizationTargetPageModule */],
                __WEBPACK_IMPORTED_MODULE_37__pages_risk_factor_risk_factor_module__["a" /* RiskFactorPageModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_plan_literature_plan_literature_module__["a" /* PlanLiteraturePageModule */],
                __WEBPACK_IMPORTED_MODULE_39__pages_typical_record_typical_record_module__["a" /* TypicalRecordPageModule */],
                __WEBPACK_IMPORTED_MODULE_40__pages_view_pdf_view_pdf_module__["a" /* ViewPdfPageModule */]
                //MenusPage
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_index_list_index__["a" /* ListIndexPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_index_page_index__["a" /* PageIndexPage */],
                //InputIndexPage,
                __WEBPACK_IMPORTED_MODULE_24__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_input_list_input_list__["a" /* InputListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recommend_list_recommend_list__["a" /* RecommendListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recommend_detail_recommend_detail__["a" /* RecommendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_doctor_advice_doctor_advice__["a" /* DoctorAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_recommend_basic_recommend_basic__["a" /* RecommendBasicPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_plan_introduce_plan_introduce__["a" /* PlanIntroducePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_depressurization_target_depressurization_target__["a" /* DepressurizationTargetPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_risk_factor_risk_factor__["a" /* RiskFactorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_plan_literature_plan_literature__["a" /* PlanLiteraturePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_typical_record_typical_record__["a" /* TypicalRecordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_view_pdf_view_pdf__["a" /* ViewPdfPage */]
                //MenusPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_6__providers_http_interceptor_http_interceptor__["a" /* Interceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_26__providers_constant_constant__["a" /* ConstantProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_notify__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Interceptor = (function () {
    function Interceptor(notifySrv) {
        this.notifySrv = notifySrv;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var Req = req.clone({
            //以后可能会将eu,ep放在header里,
            /*headers: req.headers.set('token', 'asdf'),*/
            params: req.params.set('eu', 'c4843ad54897b3f8a45de8807a89bc76')
                .set('ep', 'c4843ad54897b3f8a45de8807a89bc76')
        });
        return next
            .handle(Req)
            .mergeMap(function (event) {
            //这里可以通过各种情况抛出异常
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */] && event.status !== 200) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) { return observer.error(event); });
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) { return observer.next(event); });
        })
            .catch(function (res) {
            switch (res.status) {
                case 401:
                    // 权限处理
                    location.href = ''; // 重新登录
                    break;
                case 200:
                    //this.notifySrv.success('200', `请求成功`);
                    break;
                case 404:
                    _this.notifySrv.error('404', "API\u4E0D\u5B58\u5728");
                    break;
                case 500:
                    _this.notifySrv.error('500', "\u540E\u53F0\u62A5\u9519");
                    break;
            }
            // 以错误的形式结束本次请求
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        });
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_notify__["b" /* NotifyService */]])
    ], Interceptor);
    return Interceptor;
}());

//# sourceMappingURL=http-interceptor.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_list_input_list__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LoginPage} from "../pages/login/login";

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_input_list_input_list__["a" /* InputListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "inputData", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-group',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/components/form/form.html"*/'<!--文本输入-->\n<ion-list *ngIf="inputData.type==\'text\'">\n  <ion-item >\n    <ion-label color="primary" floating>{{inputData.label}}</ion-label>\n    <ion-input [(ngModel)]="inputData.value"></ion-input>\n  </ion-item>\n</ion-list>\n\n<!--单选-->\n<ion-list *ngIf="inputData.type==\'radio\'" radio-group [(ngModel)]="inputData.value">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-radio value="{{opt.value}}"></ion-radio>\n  </ion-item>\n</ion-list>\n\n<!--多选-->\n<ion-list *ngIf="inputData.type==\'checkbox\'">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options;">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-checkbox [(ngModel)]="inputData.value[opt.label]"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n<!--下拉菜单-->\n<ion-list  *ngIf="inputData.type==\'select\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-select [(ngModel)]="inputData.value" interface="action-sheet">\n      <ion-option *ngFor="let opt of inputData.options;" value="{{opt.value}}">{{opt.label}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<!--时间插件-->\n<ion-list  *ngIf="inputData.type==\'date\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-datetime displayFormat="{{inputData.format}}" [(ngModel)]="inputData.value"></ion-datetime>\n  </ion-item>\n</ion-list>\n\n<!--开关-->\n<ion-list  *ngIf="inputData.type==\'switch\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-toggle [(ngModel)]="inputData.value"></ion-toggle>\n  </ion-item>\n</ion-list>\n\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/components/form/form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_index__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListIndexPageModule = (function () {
    function ListIndexPageModule() {
    }
    ListIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_index__["a" /* ListIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_index__["a" /* ListIndexPage */]),
            ],
        })
    ], ListIndexPageModule);
    return ListIndexPageModule;
}());

//# sourceMappingURL=list-index.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_index__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageIndexPageModule = (function () {
    function PageIndexPageModule() {
    }
    PageIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_index__["a" /* PageIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_index__["a" /* PageIndexPage */]),
            ],
        })
    ], PageIndexPageModule);
    return PageIndexPageModule;
}());

//# sourceMappingURL=page-index.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_list__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputListPageModule = (function () {
    function InputListPageModule() {
    }
    InputListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_list__["a" /* InputListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__input_list__["a" /* InputListPage */]),
            ],
        })
    ], InputListPageModule);
    return InputListPageModule;
}());

//# sourceMappingURL=input-list.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_list__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendListPageModule = (function () {
    function RecommendListPageModule() {
    }
    RecommendListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recommend_list__["a" /* RecommendListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommend_list__["a" /* RecommendListPage */]),
            ],
        })
    ], RecommendListPageModule);
    return RecommendListPageModule;
}());

//# sourceMappingURL=recommend-list.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_detail__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendDetailPageModule = (function () {
    function RecommendDetailPageModule() {
    }
    RecommendDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recommend_detail__["a" /* RecommendDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommend_detail__["a" /* RecommendDetailPage */]),
            ],
        })
    ], RecommendDetailPageModule);
    return RecommendDetailPageModule;
}());

//# sourceMappingURL=recommend-detail.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAdvicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctor_advice__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoctorAdvicePageModule = (function () {
    function DoctorAdvicePageModule() {
    }
    DoctorAdvicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__doctor_advice__["a" /* DoctorAdvicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__doctor_advice__["a" /* DoctorAdvicePage */]),
            ],
        })
    ], DoctorAdvicePageModule);
    return DoctorAdvicePageModule;
}());

//# sourceMappingURL=doctor-advice.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendBasicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_basic__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendBasicPageModule = (function () {
    function RecommendBasicPageModule() {
    }
    RecommendBasicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recommend_basic__["a" /* RecommendBasicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommend_basic__["a" /* RecommendBasicPage */]),
            ],
        })
    ], RecommendBasicPageModule);
    return RecommendBasicPageModule;
}());

//# sourceMappingURL=recommend-basic.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanIntroducePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan_introduce__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanIntroducePageModule = (function () {
    function PlanIntroducePageModule() {
    }
    PlanIntroducePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan_introduce__["a" /* PlanIntroducePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan_introduce__["a" /* PlanIntroducePage */]),
            ],
        })
    ], PlanIntroducePageModule);
    return PlanIntroducePageModule;
}());

//# sourceMappingURL=plan-introduce.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepressurizationTargetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__depressurization_target__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DepressurizationTargetPageModule = (function () {
    function DepressurizationTargetPageModule() {
    }
    DepressurizationTargetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__depressurization_target__["a" /* DepressurizationTargetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__depressurization_target__["a" /* DepressurizationTargetPage */]),
            ],
        })
    ], DepressurizationTargetPageModule);
    return DepressurizationTargetPageModule;
}());

//# sourceMappingURL=depressurization-target.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskFactorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__risk_factor__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RiskFactorPageModule = (function () {
    function RiskFactorPageModule() {
    }
    RiskFactorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__risk_factor__["a" /* RiskFactorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__risk_factor__["a" /* RiskFactorPage */]),
            ],
        })
    ], RiskFactorPageModule);
    return RiskFactorPageModule;
}());

//# sourceMappingURL=risk-factor.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanLiteraturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan_literature__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanLiteraturePageModule = (function () {
    function PlanLiteraturePageModule() {
    }
    PlanLiteraturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan_literature__["a" /* PlanLiteraturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan_literature__["a" /* PlanLiteraturePage */]),
            ],
        })
    ], PlanLiteraturePageModule);
    return PlanLiteraturePageModule;
}());

//# sourceMappingURL=plan-literature.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypicalRecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typical_record__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TypicalRecordPageModule = (function () {
    function TypicalRecordPageModule() {
    }
    TypicalRecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__typical_record__["a" /* TypicalRecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__typical_record__["a" /* TypicalRecordPage */]),
            ],
        })
    ], TypicalRecordPageModule);
    return TypicalRecordPageModule;
}());

//# sourceMappingURL=typical-record.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPdfPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_pdf__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewPdfPageModule = (function () {
    function ViewPdfPageModule() {
    }
    ViewPdfPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_pdf__["a" /* ViewPdfPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_pdf__["a" /* ViewPdfPage */]),
            ],
        })
    ], ViewPdfPageModule);
    return ViewPdfPageModule;
}());

//# sourceMappingURL=view-pdf.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_list_recommend_list__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InputListPage = (function () {
    function InputListPage(navCtrl, navParams, Http, loadingCtrl, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.loadingCtrl = loadingCtrl;
        this.constant = constant;
        this.parameter = {
            "discribe": "",
            "class_id": ""
        };
        this.parameter.discribe = navParams.get("discribe") || 'hbp';
        this.parameter.class_id = navParams.get("class_id") || '100037';
    }
    InputListPage.prototype.ngOnInit = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: '加载中……'
        });
        //loading.present();
        this.getFormDatas(loading);
        //this.getResult(loading);
    };
    InputListPage.prototype.update = function () {
        this.goBack();
    };
    InputListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InputListPage.prototype.getFormDatas = function (loading) {
        var _this = this;
        this.Http.get('../../assets/data/formDatas' + this.parameter.class_id + '.json', {})
            .subscribe(function (res) {
            //这里是不能够直接从res中获取其中的对象的，会直接报错，但是运行后再修改回来则无恙，略坑
            _this.formDatas = res;
            _this.extractResult();
            //loading.dismiss();
        });
    };
    InputListPage.prototype.extractResult = function () {
        var that = this;
        this.result = {
            'info': {}
        };
        this.formDatas.data.forEach(function (modal, i) {
            modal.inputs.forEach(function (input, ix) {
                that.result.info[input.name] = input.value;
            });
        });
    };
    InputListPage.prototype.getResult = function (loading) {
        var _this = this;
        var parameter = "?filter_patiId=" + this.parameter.pati_id +
            "&filter_patiVisitId=" + this.parameter.pati_visit_id +
            "&class_id=" + this.parameter.class_id;
        this.Http.get(this.constant.BackstageUrl + this.parameter.discribe + '/patient/info' + parameter, {})
            .subscribe(function (res) {
            _this.result = res;
            for (var i in _this.result.info) {
                _this.result.info[i] == 1 ? _this.result.info[i] = true : undefined;
            }
            loading.dismiss();
        });
    };
    InputListPage.prototype.viewRecommend = function () {
        var idx = 0;
        for (var i in this.result.info) {
            idx++;
            this.result.info[i] == false || this.result.info[i] == '' ? this.result.info[i] = '0' : undefined;
            this.result.info[i] == true ? this.result.info[i] = '1' : undefined;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recommend_list_recommend_list__["a" /* RecommendListPage */], { 'result': this.result.info, 'parameter': this.parameter });
    };
    InputListPage.prototype.openFAB = function () {
        //console.log('open');
    };
    InputListPage.prototype.goHref = function (idx, fab) {
        //这个地方，首先要注意的是，单页应用一定要锁定自己目标元素的位置
        //其次，ionic中专门制定了用于滚动的div  scroll-content 并不是body
        __WEBPACK_IMPORTED_MODULE_5_jquery__('page-input-list .scroll-content').animate({
            scrollTop: __WEBPACK_IMPORTED_MODULE_5_jquery__('page-input-list .jumpHeader').eq(idx).offset().top
                - __WEBPACK_IMPORTED_MODULE_5_jquery__('page-input-list .scroll-content').offset().top + __WEBPACK_IMPORTED_MODULE_5_jquery__('page-input-list .scroll-content').scrollTop()
        }, 300);
        fab.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], InputListPage.prototype, "nav", void 0);
    InputListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-input-list',template:/*ion-inline-start:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/input-list/input-list.html"*/'<ion-content>\n\n  <ion-fab top right edge #fab1 *ngIf="result && formDatas">\n    <button ion-fab mini (click)="openFAB()"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button *ngFor="let formData of formDatas.data;let index = index" ion-fab (click)="goHref(index, fab1)">\n        {{formData.label}}\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <div *ngIf="result && formDatas && parameter.class_id == \'100037\'">\n    <!--<ion-list *ngFor="let formData of formDatas.data;let index = index" >\n      <ion-list-header class="jumpHeader">\n        <ion-icon name="ios-rose" color="secondary"></ion-icon>{{formData.label}}\n        <button *ngIf="index == 0" class="" ion-button outline item-end (click)="viewRecommend()">查看推荐</button>\n      </ion-list-header>\n      <form-group *ngFor="let inputData of formData.inputs" [inputData]="inputData"></form-group>\n    </ion-list>-->\n\n    <ion-list>\n      <ion-list-header class="jumpHeader">\n        <ion-icon name="ios-rose" color="secondary"></ion-icon>基本信息\n        <button class="" ion-button outline item-end (click)="viewRecommend()">推荐方案>></button>\n      </ion-list-header>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>性别</ion-label>\n          <ion-select [(ngModel)]="result.info.sex_id" interface="action-sheet">\n            <ion-option value="0">男</ion-option>\n            <ion-option value="1">女</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >年龄</ion-label>\n          <ion-input [(ngModel)]="result.info.age"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >身高</ion-label>\n          <ion-input [(ngModel)]="result.info.body_heig"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >体重</ion-label>\n          <ion-input [(ngModel)]="result.info.body_weig"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >心律</ion-label>\n          <ion-input [(ngModel)]="result.info.hr"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >入院收缩压</ion-label>\n          <ion-input [(ngModel)]="result.info.sbp"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item >\n          <ion-label >入院舒张压</ion-label>\n          <ion-input [(ngModel)]="result.info.dbp"></ion-input>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n\n    <ion-list>\n      <ion-list-header class="jumpHeader">\n        <ion-icon name="ios-rose" color="secondary"></ion-icon>心血管危险因素\n      </ion-list-header>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>血压水平分类</ion-label>\n          <ion-select [(ngModel)]="result.info.gxy_class" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">高血压1级</ion-option>\n            <ion-option value="2">高血压2级</ion-option>\n            <ion-option value="3">高血压3级</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心血管风险水平分层</ion-label>\n          <ion-select [(ngModel)]="result.info.gxy_risk" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">低危</ion-option>\n            <ion-option value="2">中危</ion-option>\n            <ion-option value="3">高危</ion-option>\n            <ion-option value="4">极高危</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>高血钾</ion-label>\n          <ion-select [(ngModel)]="result.info.if_jxh" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">血钾>5.5，<6.0</ion-option>\n            <ion-option value="2">血钾>6.0</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>糖耐量受损</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_tnb_02"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>高血脂</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_gzxz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>低血钾</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_jxl"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header class="jumpHeader">\n        <ion-icon name="ios-rose" color="secondary"></ion-icon>靶器官损害\n      </ion-list-header>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>左室肥厚</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_zsfh"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>左室功能不全</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_zsgnbq"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>颈动脉粥样硬化</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_jdmzyyh"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>颈动脉增厚</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_jdmzh"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>冠状动脉粥样硬化</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_gmzyyh"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>尿蛋白</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_dbn"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>尿白蛋白大于等于30mg/24小时</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_nbdb_over"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header class="jumpHeader">\n        <ion-icon name="ios-rose" color="secondary"></ion-icon>伴临床疾患\n      </ion-list-header>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心肌梗死</ion-label>\n          <ion-select [(ngModel)]="result.info.xjgs_type" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">陈旧性心肌梗死</ion-option>\n            <ion-option value="2">急性非ST段抬高型</ion-option>\n            <ion-option value="3">急性ST段抬高型</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心力衰竭</ion-label>\n          <ion-select [(ngModel)]="result.info.xlsj_type" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">心力衰竭I级</ion-option>\n            <ion-option value="2">心力衰竭II级</ion-option>\n            <ion-option value="3">心力衰竭III级</ion-option>\n            <ion-option value="4">心力衰竭IV级</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>肾动脉狭窄</ion-label>\n          <ion-select [(ngModel)]="result.info.if_sdmxz" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">单侧</ion-option>\n            <ion-option value="2">双侧</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>颈动脉狭窄大于70%</ion-label>\n          <ion-select [(ngModel)]="result.info.if_jdmxz" interface="action-sheet">\n            <ion-option value="0">否</ion-option>\n            <ion-option value="1">单侧颈动脉狭窄大于70%</ion-option>\n            <ion-option value="2">双侧颈动脉狭窄大于70%</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心绞痛</ion-label>\n          <ion-toggle [(ngModel)]="result.info.xjt_type"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心脏射频消融术后</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_oper_sp"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心脏支架植入术后</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_oper_zj"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心肌病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_xjb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>脑血管病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.brain_type"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>周围血管病变</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_zwxgb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>糖尿病肾病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_tnbsb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>糖尿病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_tnb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>代谢综合征</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_dxzhz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>痛风</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_tf"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>前列腺增生</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_qlxzs"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>体位性低血压</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_twxdxy"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>哮喘</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_xc"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>慢性阻塞性肺病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_maf"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>妊娠</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_rs"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>间歇性跛行</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_jxxbx"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>胃炎</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_wy"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>胃溃疡</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_kyb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>血管神经性水肿</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sjxsz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>主动脉瓣狭窄</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_zdmbxz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>肥厚梗阻性心肌病</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_gzxxjb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>高尿酸血症</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_gnsxz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>心律失常</ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_xlsc"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1">\n        <ion-item>\n          <ion-label>快速心律失常\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.xlsc_type"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.xlsc_type ==1">\n        <ion-item>\n          <ion-label>房颤\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_fc"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.xlsc_type ==1">\n        <ion-item>\n          <ion-label>频发房性早搏\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_fxzb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.xlsc_type ==1">\n        <ion-item>\n          <ion-label>频发室性早搏\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sxzb"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.xlsc_type ==1">\n        <ion-item>\n          <ion-label>阵发性室性心动过速\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_zfxxdgs"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1">\n        <ion-item>\n          <ion-label>缓慢性心律失常\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_hmxxlsc"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.if_hmxxlsc ==1">\n        <ion-item>\n          <ion-label>病态窦房结综合征\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_dfjzhz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_xlsc ==1 && result.info.if_hmxxlsc ==1">\n        <ion-item>\n          <ion-label>2-3度房室阻滞\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_fszz"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>肾功能不全\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sgnbq"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_sgnbq ==1">\n        <ion-item>\n          <ion-label>肌酐大于265umol/L\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sgnbq_over"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_sgnbq ==1 && result.info.if_sgnbq_over ==1">\n        <ion-item>\n          <ion-label>是否进行透析\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sfjxtx"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_sgnbq ==1 && result.info.if_sgnbq_over ==1 && result.info.if_sfjxtx ==1">\n        <ion-item>\n          <ion-label>血液透析\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_xytx"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_sgnbq ==1 && result.info.if_sgnbq_over ==1 && result.info.if_sfjxtx ==1">\n        <ion-item>\n          <ion-label>腹膜透析\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_fmtx"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf="result.info.if_sgnbq ==1">\n        <ion-item>\n          <ion-label>肌酐小于266ummol/L\n          </ion-label>\n          <ion-toggle [(ngModel)]="result.info.if_sgnbq_under"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/WebstormProjects/Mobile.disease.recommend/src/pages/input-list/input-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */]) === "function" && _f || Object])
    ], InputListPage);
    return InputListPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=input-list.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map