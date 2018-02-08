webpackJsonp([14],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepressurizationTargetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function DepressurizationTargetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepressurizationTargetPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DepressurizationTargetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-depressurization-target',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/depressurization-target/depressurization-target.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>降压目标\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item>\n      <h3>年龄小于65岁的老人</h3>\n      <p>血压应控制在140/90mmHg以内。</p>\n    </ion-item>\n    <ion-item>\n      <h3>年龄小于65岁的老人</h3>\n      <p>血压应控制在140/90mmHg以内。</p>\n    </ion-item>\n    <ion-item>\n      <h3>年龄小于65岁的老人</h3>\n      <p>血压应控制在140/90mmHg以内。</p>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/depressurization-target/depressurization-target.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DepressurizationTargetPage);
    return DepressurizationTargetPage;
}());

//# sourceMappingURL=depressurization-target.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAdvicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function DoctorAdvicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoctorAdvicePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DoctorAdvicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctor-advice',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/doctor-advice/doctor-advice.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <h2>培哚普利叔丁胺片</h2>\n    </ion-item>\n\n    <ion-item >\n      剂量\n      <ion-note item-end>\n        4mg\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      频次\n      <ion-note item-end>\n        2/日\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      途径\n      <ion-note item-end>\n        口服\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      医嘱类型\n      <ion-note item-end>\n        长期\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      开始时间\n      <ion-note item-end>\n        2017-08-18 22:12:00.0\n      </ion-note>\n    </ion-item>\n\n    <ion-item >\n      结束时间\n      <ion-note item-end>\n        2017-08-21 15:40:05.0\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/doctor-advice/doctor-advice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DoctorAdvicePage);
    return DoctorAdvicePage;
}());

//# sourceMappingURL=doctor-advice.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_list_input_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommend_list_recommend_list__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputIndexPage = (function () {
    function InputIndexPage(navCtrl, navParams, Http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.recordId = this.navParams.data.id;
        this.getFormDatas();
        this.user = {
            logo: './assets/imgs/logo-1.jpg',
            name: '叶良辰',
            authority: '管理员'
        };
    }
    InputIndexPage.prototype.inputList = function (formData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__input_list_input_list__["a" /* InputListPage */], { 'formData': formData });
    };
    InputIndexPage.prototype.getFormDatas = function () {
        var _this = this;
        this.Http.get('../../assets/data/formDatas.json', {})
            .subscribe(function (res) {
            console.log(res);
            _this.formDatas = res.data;
        });
    };
    InputIndexPage.prototype.viewRecommend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommend_list_recommend_list__["a" /* RecommendListPage */], { 'formDatas': this.formDatas });
    };
    InputIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-index',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-index/input-index.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{user.logo}}">\n      </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <p>{{user.authority}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>录入\n      <button ion-button outline item-end (click)="viewRecommend()">查看推荐</button>\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let formData of formDatas;let idx = index" (click)="inputList(formData)"\n                 [ngClass]="{noBorder:idx%3 == 0}">\n          <ion-icon name="{{formData.icon}}" color="primary"></ion-icon>\n          <ion-label>{{formData.label}}</ion-label>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-index/input-index.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
    ], InputIndexPage);
    return InputIndexPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=input-index.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function InputListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formData = this.navParams.data.formData;
    }
    InputListPage.prototype.update = function () {
        console.log(this.formData);
        this.goBack();
    };
    InputListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InputListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-list',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-list/input-list.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="ios-rose" color="secondary"></ion-icon>{{formData.label}}\n    </ion-list-header>\n    <form-group *ngFor="let inputData of formData.inputs" [inputData]="inputData"></form-group>\n    <div padding>\n      <button ion-button block (click)="update()" >提交</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-list/input-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InputListPage);
    return InputListPage;
}());

//# sourceMappingURL=input-list.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_detail_recommend_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor_advice_doctor_advice__ = __webpack_require__(105);
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
    function RecommendListPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.formDatas = this.navParams.data.formDatas;
    }
    RecommendListPage.prototype.viewRecommendDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recommend_detail_recommend_detail__["a" /* RecommendDetailPage */], { 'id': 1 });
    };
    RecommendListPage.prototype.viewAdviceDetail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__doctor_advice_doctor_advice__["a" /* DoctorAdvicePage */]).present();
    };
    RecommendListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommend-list',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-list/recommend-list.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>推荐方案列表\n    </ion-list-header>\n    <ion-item (click)="viewRecommendDetail()">\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>相对禁忌\n    </ion-list-header>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n    <ion-item >\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item >\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>绝对禁忌\n    </ion-list-header>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>ACEI/ARB+β受体阻滞剂</h3>\n      <p>比索洛尔,美托洛尔片,美托洛尔缓释片,阿替洛尔,普萘洛尔,倍他洛尔,卡托普利,依那普利,贝那普利,赖诺普利,雷米普利,福辛普利,西拉普利,培哚普利,咪达普利,氯沙坦,缬沙坦,厄贝沙坦,替米沙坦,坎地沙坦,奥美沙坦,依普沙坦,阿利沙坦,群多普利</p>\n      <ion-note item-end>药品</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>医嘱信息\n    </ion-list-header>\n    <ion-item (click)="viewAdviceDetail()">\n      <h3>培哚普利叔丁胺片	</h3>\n      <p>剂量：4mg &nbsp;&nbsp;&nbsp; 频次2/日</p>\n      <ion-note item-end>长期</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>培哚普利叔丁胺片	</h3>\n      <p>剂量：4mg &nbsp;&nbsp;&nbsp; 频次2/日</p>\n      <ion-note item-end>长期</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>培哚普利叔丁胺片	</h3>\n      <p>剂量：4mg &nbsp;&nbsp;&nbsp; 频次2/日</p>\n      <ion-note item-end>长期</ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-list/recommend-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RecommendListPage);
    return RecommendListPage;
}());

//# sourceMappingURL=recommend-list.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommend_basic_recommend_basic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan_introduce_plan_introduce__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__depressurization_target_depressurization_target__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__risk_factor_risk_factor__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plan_literature_plan_literature__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typical_record_typical_record__ = __webpack_require__(114);
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
    function RecommendDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recordId = this.navParams.data.id;
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
            {
                label: "典型病历",
                id: '7',
                icon: 'ios-create-outline'
            },
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
    RecommendDetailPage.prototype.viewRecommendDetail = function (recommendList) {
        switch (recommendList.id) {
            case '1':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recommend_basic_recommend_basic__["a" /* RecommendBasicPage */], { 'id': 1 });
                break;
            case '2':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__plan_introduce_plan_introduce__["a" /* PlanIntroducePage */], { 'id': 1 });
                break;
            case '3':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__depressurization_target_depressurization_target__["a" /* DepressurizationTargetPage */], { 'id': 1 });
                break;
            case '4':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__risk_factor_risk_factor__["a" /* RiskFactorPage */], { 'id': 1 });
                break;
            case '5':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], { 'id': 1 });
                break;
            case '6':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], { 'id': 2 });
                break;
            case '8':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__plan_literature_plan_literature__["a" /* PlanLiteraturePage */], { 'id': 3 });
                break;
            case '7':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__typical_record_typical_record__["a" /* TypicalRecordPage */], { 'id': 1 });
                break;
        }
    };
    RecommendDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommend-detail',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-detail/recommend-detail.html"*/'\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>方案列表\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let recommendList of recommendLists;let idx = index" (click)="viewRecommendDetail(recommendList)"\n                 [ngClass]="{noBorder:idx%3 == 0}">\n          <ion-icon name="{{recommendList.icon}}" color="primary"></ion-icon>\n          <ion-label>{{recommendList.label}}</ion-label>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-detail/recommend-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecommendDetailPage);
    return RecommendDetailPage;
}());

//# sourceMappingURL=recommend-detail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendBasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_recommend_reson_recommend_reson__ = __webpack_require__(172);
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
    function RecommendBasicPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    RecommendBasicPage.prototype.viewRecommendReson = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */]).present();
    };
    RecommendBasicPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendBasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommend-basic',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-basic/recommend-basic.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>基本信息\n      <button ion-button outline item-end (click)="viewRecommendReson()">查看推荐理由</button>\n    </ion-list-header>\n\n    <ion-item>\n      <h3>性别</h3>\n      <p></p>\n      <ion-note item-end>男</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>身高</h3>\n      <p></p>\n      <ion-note item-end>188cm</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>体重</h3>\n      <p></p>\n      <ion-note item-end>88kg</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>入院舒张压</h3>\n      <p></p>\n      <ion-note item-end>88 mmHg</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>血压水平分类</h3>\n      <p></p>\n      <ion-note item-end>高血压3级</ion-note>\n    </ion-item>\n    <ion-item>\n      <h3>冠状动脉粥样硬化</h3>\n      <p></p>\n      <ion-note item-end>是</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/recommend-basic/recommend-basic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RecommendBasicPage);
    return RecommendBasicPage;
}());

//# sourceMappingURL=recommend-basic.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanIntroducePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function PlanIntroducePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanIntroducePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PlanIntroducePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan-introduce',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/plan-introduce/plan-introduce.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>药品类型：β受体阻滞剂\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item>\n      <h3>药品作用机理</h3>\n      <p>主要通过抑制过度激活的交感神经活性、抑制心肌收缩力、减慢心率发挥降压作用</p>\n    </ion-item>\n    <ion-item>\n      <h3>主要不良反应</h3>\n      <ul>\n        <li>\n          <p>\n            1、体位性低血压\n          </p>\n          <p>\n            β受体阻滞剂降低交感神经张力减少心输出量、降低外周血管阻力；并抑制肾素血管紧张素系统具有良好的降血压作用。因此，体位性低血压也比较常见，尤其在老年患者、剂量比较大时，为避免其发生，应嘱患者在体位变化时动作应缓慢，必要时减少用药剂量。\n          </p>\n        </li>\n        <li>\n          <p>\n            2、支气管痉挛\n          </p>\n          <p>\n            为药物对β2受体阻滞作用所致。因此，一般来说禁用于患支气管哮喘和慢性阻塞性肺部疾病的患者。而对于一些肺部疾病较轻，而同时具有β受体阻滞剂治疗强烈适应症（如慢性左心室功能不全、急性心肌梗死）时，可试用β1受体受体选择性较高的药物如比索洛尔，用药后应密切观察患者症状，如无不适，可以进行长期用药。必须提出的是，对β2受体的影响相对较小。在使用剂量较大时，仍然可以表现出对β2受体的阻断作用。\n          </p>\n        </li>\n      </ul>\n    </ion-item>\n    <ion-item>\n      <h3>用药提示</h3>\n      <p>长期应用突然停药科发生反跳现象，比较常见有血压反跳性升高，伴头痛、焦虑等，称之为撤药综征</p>\n    </ion-item>\n    <ion-item>\n       <ion-list>\n         <h3>常见药品</h3>\n         <ion-item>\n           <h3>比索洛尔</h3>\n           <p>达峰时间:	3-4 &nbsp;&nbsp;半衰期（小时）:10-12 ;&nbsp;&nbsp; 每天剂量（mg）:2.5-10 </p>\n           <ion-note item-end>分服次数:1</ion-note>\n         </ion-item>\n         <ion-item>\n           <h3>比索洛尔</h3>\n           <p>达峰时间:	3-4 &nbsp;&nbsp;半衰期（小时）:10-12 ;&nbsp;&nbsp; 每天剂量（mg）:2.5-10 </p>\n           <ion-note item-end>分服次数:1</ion-note>\n         </ion-item>\n         <ion-item>\n           <h3>比索洛尔</h3>\n           <p>达峰时间:	3-4 &nbsp;&nbsp;半衰期（小时）:10-12 ;&nbsp;&nbsp; 每天剂量（mg）:2.5-10 </p>\n           <ion-note item-end>分服次数:1</ion-note>\n         </ion-item>\n       </ion-list>\n\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/plan-introduce/plan-introduce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PlanIntroducePage);
    return PlanIntroducePage;
}());

//# sourceMappingURL=plan-introduce.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskFactorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function RiskFactorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiskFactorPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RiskFactorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-risk-factor',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/risk-factor/risk-factor.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>相关危险因素处理\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item>\n      <h3>心绞痛</h3>\n      <p>钙通道阻滞剂可与其他4类药联合应用，尤其适用于老年高血压、单纯收缩期高血压、伴稳定性心绞痛、冠状动脉或颈动脉粥样硬化及周围血管病患者。常见副作用包括反射性交感神经激活导致心跳加快、面部潮红、脚踝部水肿、牙龈增生等。\n        β受体阻滞剂尤其适用于伴快速性心律失常、冠心病心绞痛、慢性心力衰竭、交感神经活性增高以及高动力状态的高血压患者。常见的不良反应有疲乏、肢体冷感、激动不安、胃肠不适等，还可能影响糖、脂代谢。高度心脏传导阻滞、哮喘患者为禁忌症。慢性阻塞型肺病、运动员、周围血管病或糖耐量异常者慎用。\n        （1 )非药物治疗和危险因素处理除控制血压外，还包括戒烟、严格控制血糖、运动锻炼、降脂，以及肥胖者减轻体重。有充分证据表明，如无禁忌证，需应用他汀类药物以及抗血小板药物阿司匹林，不能使用阿司匹林者应使用氯吡格雷；（2）β受体阻滞剂此类药物是治疗稳定性冠心病的基石，并可降低血压，降低病死率。糖尿病并非应用β受体阻滞剂的禁忌证，但患者需了解到，此药的应用有可能掩盖低血糖的肾上腺素能兴奋的症状；（3）其他药物如有β受体阻滞剂使用的禁忌证，可代之以二氢吡啶类钙通道阻滞剂，尤其长作用的制剂（如氨氯地平、非洛地平、硝苯地平控释或缓释制剂）或长作用的非二氢吡啶类制剂（如维拉帕米或地尔硫卓），这些药物同样对高血压伴心绞痛患者很有效。一项研究(TIBET)比较了β受体阻滞剂和钙通道阻滞剂，证实在控制稳定性心绞痛上两者的疗效相等，但大多数研究(APSIS、TIBBS等）表明β受体阻滞剂更占优势。β受体阻滞剂和一氢吡啶类钙通道阻滞剂合用可增加抗心绞痛的疗效。但和维拉帕米、地尔硫卓合用，则有可能增加严重心动过缓或心脏传导阻滞的危险性。其他可应用的药物还有ACEI或ARB (HOPE, EUROPA,ONTSRGET)和噻嗪类利尿剂（ALLHAT）。\n        常需采用综合性治疗方案，包括卧床休息、持续心电监护、氧疗、静脉给予硝酸酯类药物、应用吗啡，以及β受体阻滞剂或其替代药物非二氢吡啶类钙通道阻滞剂（如维拉帕米、地尔硫卓）。β受体阻滞剂或非二氢吡啶类钙通道阻滞剂均应在无禁忌证，且无低血压或心衰状况下应用。伴前壁心肌梗死、糖尿病、未控制的高血压，或左室收缩功能障碍的患者应加用ACEIO利尿剂对于长期的血压控制，尤其患者伴容量超负荷，往往也是必需的。\n        HOPE ONTARGET等研究表明ARB或ACET治疗心血管高危患者（冠心病，脑卒中，周围血管病，糖尿病），可降低心血管事件风险。</p>\n    </ion-item>\n    <ion-item>\n      <h3>冠状动脉粥样硬化</h3>\n      <p>钙通道阻滞剂可与其他4类药联合应用，尤其适用于老年高血压、单纯收缩期高血压、伴稳定性心绞痛、冠状动脉或颈动脉粥样硬化及周围血管病患者。常见副作用包括反射性交感神经激活导致心跳加快、面部潮红、脚踝部水肿、牙龈增生等。</p>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/risk-factor/risk-factor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RiskFactorPage);
    return RiskFactorPage;
}());

//# sourceMappingURL=risk-factor.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanLiteraturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function PlanLiteraturePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanLiteraturePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PlanLiteraturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan-literature',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/plan-literature/plan-literature.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>方案相关文献\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewRecommendDetail()">\n      <h3>比索洛尔联合氯沙坦治疗高血压对患者左室舒张功能的影响</h3>\n      <p>高血压</p>\n    </ion-item>\n    <ion-item (click)="viewRecommendDetail()">\n      <h3>厄贝沙坦联合美托洛尔治疗高血压病疗效观察</h3>\n      <p>高血压</p>\n    </ion-item>\n    <ion-item (click)="viewRecommendDetail()">\n      <h3>依那普利与美托洛尔联合治疗原发性高血压</h3>\n      <p>高血压</p>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/plan-literature/plan-literature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PlanLiteraturePage);
    return PlanLiteraturePage;
}());

//# sourceMappingURL=plan-literature.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypicalRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function TypicalRecordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TypicalRecordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TypicalRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-typical-record',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/typical-record/typical-record.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>典型病历\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ion-item (click)="viewRecord()">\n      <h3>Y2902656</h3>\n      <p>冠状动脉粥样硬化性心脏病</p>\n      <ion-note item-end>	2017-08-08 08:48:14</ion-note>\n    </ion-item>\n    <ion-item (click)="viewRecord()">\n      <h3>Y2902656</h3>\n      <p>冠状动脉粥样硬化性心脏病</p>\n      <ion-note item-end>	2017-08-08 08:48:14</ion-note>\n    </ion-item>\n    <ion-item (click)="viewRecord()">\n      <h3>Y2902656</h3>\n      <p>冠状动脉粥样硬化性心脏病</p>\n      <ion-note item-end>	2017-08-08 08:48:14</ion-note>\n    </ion-item>\n    <ion-item (click)="viewRecord()">\n      <h3>Y2902656</h3>\n      <p>冠状动脉粥样硬化性心脏病</p>\n      <ion-note item-end>	2017-08-08 08:48:14</ion-note>\n    </ion-item>\n    <ion-item (click)="viewRecord()">\n      <h3>Y2902656</h3>\n      <p>冠状动脉粥样硬化性心脏病</p>\n      <ion-note item-end>	2017-08-08 08:48:14</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/typical-record/typical-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TypicalRecordPage);
    return TypicalRecordPage;
}());

//# sourceMappingURL=typical-record.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_index_input_index__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListIndexPage = (function () {
    function ListIndexPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.diseaseId = this.navParams.data.id;
        console.log(this.diseaseId);
    }
    ListIndexPage.prototype.inputIndex = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__input_index_input_index__["a" /* InputIndexPage */], { 'id': id });
    };
    ListIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-index',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/list-index/list-index.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>患者列表</ion-list-header>\n    <ion-searchbar placeholder="请输入患者姓名或id"></ion-searchbar>\n    <ion-item (click)="inputIndex(1)">\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>赵日天 Y2849812</h3>\n      <p>慢性阻塞性肺疾病(COPD)</p>\n      <ion-note item-end>2017-07-20 15:36:51</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>赵日天 Y2849812</h3>\n      <p>慢性阻塞性肺疾病(COPD)</p>\n      <ion-note item-end>2017-07-20 15:36:51</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>赵日天 Y2849812</h3>\n      <p>慢性阻塞性肺疾病(COPD)</p>\n      <ion-note item-end>2017-07-20 15:36:51</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>赵日天 Y2849812</h3>\n      <p>慢性阻塞性肺疾病(COPD)</p>\n      <ion-note item-end>2017-07-20 15:36:51</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/logo-1.jpg">\n      </ion-avatar>\n      <h3>赵日天 Y2849812</h3>\n      <p>慢性阻塞性肺疾病(COPD)</p>\n      <ion-note item-end>2017-07-20 15:36:51</ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/list-index/list-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListIndexPage);
    return ListIndexPage;
}());

//# sourceMappingURL=list-index.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(173);
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
    function LoginPage(navCtrl, navParams, Http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
    }
    LoginPage.prototype.login = function () {
        console.log(this.uesrName, this.passWord);
        this.Http.get('../../assets/data/formDatas.json', {})
            .subscribe(function (res) {
            console.log(res);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { 'id': 1 });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/login/login.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>用户名</ion-label>\n      <ion-input [(ngModel)]="uesrName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>密码</ion-label>\n      <ion-input [(ngModel)]="passWord"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="login()" >登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_index_list_index__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
                id: "1",
                icon: 'ios-paper-outline'
            },
            {
                label: "慢阻肺",
                id: '2',
                icon: 'ios-copy-outline'
            },
            {
                label: "其他",
                id: '3',
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
    PageIndexPage.prototype.listIndex = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_index_list_index__["a" /* ListIndexPage */], { 'id': id });
    };
    PageIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/page-index/page-index.html"*/'\n<ion-content>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>疾病列表\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let plan of plans" (click)="listIndex(plan.id)">\n          <ion-icon name="{{plan.icon}}" color="primary"></ion-icon>\n          <ion-label>{{plan.label}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-notifications" color="danger"></ion-icon>消息\n    </ion-list-header>\n    <ion-item  *ngFor="let new of news;let index = index">\n      <ion-label>{{new.label}}</ion-label>\n      <ion-note item-end>{{new.date}}</ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/page-index/page-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], PageIndexPage);
    return PageIndexPage;
}());

//# sourceMappingURL=page-index.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/depressurization-target/depressurization-target.module": [
		307,
		13
	],
	"../pages/doctor-advice/doctor-advice.module": [
		308,
		12
	],
	"../pages/input-index/input-index.module": [
		309,
		11
	],
	"../pages/input-list/input-list.module": [
		310,
		10
	],
	"../pages/list-index/list-index.module": [
		311,
		9
	],
	"../pages/login/login.module": [
		312,
		8
	],
	"../pages/page-index/page-index.module": [
		313,
		7
	],
	"../pages/plan-introduce/plan-introduce.module": [
		314,
		6
	],
	"../pages/plan-literature/plan-literature.module": [
		315,
		5
	],
	"../pages/recommend-basic/recommend-basic.module": [
		316,
		4
	],
	"../pages/recommend-detail/recommend-detail.module": [
		317,
		3
	],
	"../pages/recommend-list/recommend-list.module": [
		318,
		2
	],
	"../pages/risk-factor/risk-factor.module": [
		319,
		1
	],
	"../pages/typical-record/typical-record.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendResonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function RecommendResonComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecommendResonComponent.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecommendResonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recommend-reson',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/components/recommend-reson/recommend-reson.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>推荐理由\n      <button ion-button outline item-end (click)="back()">返回</button>\n    </ion-list-header>\n    <ol>\n      <li>\n        <p> ACEI 可引起 10% ～ 20% 患者干咳，需严密观察血肌酐和血钾水平变化，双侧肾动脉狭窄和妊娠期女性禁用。ACEI/ARB 的抗动脉粥样硬化作用和靶器官保护作用与剂量有关，能耐受者可以应用较大剂量。\n        </p>\n      </li>\n      <li>\n        <p> 建议使用高选择性的、脂溶性的 β 受体阻滞剂，如比索洛尔、美托洛尔等， 或优先选用双重阻滞的α-β 受体阻滞剂，如阿罗洛尔、卡维地洛、奈必洛尔等，以减少对糖脂代谢的影响。\n        </p>\n      </li>\n      <li>\n        <p> 主要通过抑制过度激活的交感神经、减弱心肌收缩力及减慢心率发挥降压作用，降低心肌氧耗量。其改善冠心病预后的大型随机对照研究证据包括 MAPHY、MERIT-HF 等。在稳定型心绞痛患者中，推荐作为缓解心绞痛发作的一线用药并在左心收缩功能正常的冠心病患者中长期应用以改善预后，优先推荐没有内在拟交感活性的美托洛尔和比索洛尔。在 ACS 患者中，推荐在发病 24 小时内应用，至少应用 3 年以上 ；没有内在拟交感活性的美托洛尔和比索洛尔长效制剂临床证据更为充分，可作为优先选择 ；对于 ACS 合并高血压且难控制的患者可选择降压作用更为明显的 α-β 受体阻滞剂卡维地洛。Olsson 等对 5 项大型双盲随机研究的荟萃分析发现，心肌梗死患者每天接受美托洛尔 200 mg，死亡风险降低 42%。Freemantle 等对 82 项随机对照研究（其中 31 项为长期随访）的荟萃分析也发现，长期应用 β 受体阻滞剂，心肌梗死后的再梗死率和死亡率均显著降低（每年每百例患者可减少死亡1.2 例，减少再梗死0.9 次）。2012 美国稳定型心绞痛管理指南推荐使用 β 受体阻滞剂作为初始治疗以缓解症状，β 受体阻滞剂降低死亡风险的益处独立于其他药物之外。TNT 研究已经初步确定心率为 52.4 次 / 分最佳。\n        </p>\n      </li>\n      <li>\n        <p> 在高血压合并稳定型心绞痛患者中，推荐无 ACEI 禁忌证的患者均应一线应用ACEI。EUROPA 和 HOPE 试验证实稳定型心绞痛患者应用 ACEI 可明显降低心血管事件的发生达20% ～ 25% ；但 PEACE 和 ALLHAT 研究则显示稳定型心绞痛患者应用 ACEI 后未见明显心血管终点事件改善 ；随后的 ANBP-2 研究证明老年男性稳定型心绞痛患者应用 ACEI 可显著降低动脉粥样硬化患者死亡和心血管事件发生风险。一项包括EUROPA、ADVANCE、PROGRESS 三项研究、纳入 29 463 例患者的荟萃分析显示，以培哚普利为基础的治疗方案显著降低全因死亡 11%，降低心血管死亡 15%，降低心血管死亡和心肌梗死 18%， 降低心血管死亡、心肌梗死及卒中 18%，降低非致死性心肌梗死 20%，降低心力衰竭住院率 16%。在高血压合并 ACS 患者中，推荐 ACEI 作为降压和改善预后的优先选择。GISSI-3、SIS-4 及 CCS-1 研究均证实 ACEI 明显降低 ACS 患者死亡率，在高危患者中的优势更加明显，《血管紧张素转换酶抑制剂在心血管病中应用中国专家共识》指出，对于 ACS 中 ST 段抬高型急性心肌梗死、非 ST 段抬高型急性心肌梗死及不稳定型心绞痛应用 ACEI 临床效果良好，临床上治疗这几类疾病推荐首选ACEI ；对于冠心病二级预防及心血管病高危患者也推荐使用 ACEI。其中，喹那普利（Circulation， 1996）、卡托普利（N Engl J Med，1998）、依那普利（Circulation，2001） 及雷米普利、贝那普利、福辛普利等（Eur J Pharmacol，2007 ；《微循环学杂志》，2009）具有保护内皮功能的作用。培哚普利 8 mg 使内皮祖细胞（endothelial progenitor cells，EPCs）数量显著增加，证明了 ACEI 可促进 EPCs生成和促进内皮细胞再生的作用；而在同一研究中，ARB 的治疗未使 EPCs 增多。在所有高血压合并稳定型心绞痛和 ACS 患者中，推荐不能耐受 ACEI 的患者优选ARB 进行降压和改善预后治疗。VALIANT（缬沙坦）与 PROTECTION（替米沙坦）等研究已证明 ARB 可改善冠心病患者预后，但较 ACEI 无明显优势， ONTARGET 研究等不推荐ARB 与ACEI 同时使用。ARB 已被《中国高血压防治指南 2010》列入高血压合并冠心病治疗的适应证，且推荐用于 ACEI 不能耐受的患者。\n        </p>\n      </li>\n    </ol>\n  </ion-list>\n  <div padding>\n    <button ion-button block (click)="back()" >返回</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/components/recommend-reson/recommend-reson.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecommendResonComponent);
    return RecommendResonComponent;
}());

//# sourceMappingURL=recommend-reson.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_index_page_index__ = __webpack_require__(117);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="疾病推荐" tabIcon="md-bookmarks"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="test" tabIcon="ios-chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="test" tabIcon="ios-images-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="test" tabIcon="md-chatboxes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="test" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_interceptor_http_interceptor__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_notify__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_index_page_index__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_index_list_index__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_input_index_input_index__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_input_list_input_list__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recommend_list_recommend_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_recommend_detail_recommend_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_doctor_advice_doctor_advice__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recommend_basic_recommend_basic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_plan_introduce_plan_introduce__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_depressurization_target_depressurization_target__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_risk_factor_risk_factor__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_plan_literature_plan_literature__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_typical_record_typical_record__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_form_form__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//login

//tab切换

//首页

//病历列表页面

//病历录入模块列表页面

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

//表单组件

//推荐理由

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_index_list_index__["a" /* ListIndexPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_index_page_index__["a" /* PageIndexPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_input_index_input_index__["a" /* InputIndexPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_input_list_input_list__["a" /* InputListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recommend_list_recommend_list__["a" /* RecommendListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_recommend_detail_recommend_detail__["a" /* RecommendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_doctor_advice_doctor_advice__["a" /* DoctorAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recommend_basic_recommend_basic__["a" /* RecommendBasicPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_plan_introduce_plan_introduce__["a" /* PlanIntroducePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_depressurization_target_depressurization_target__["a" /* DepressurizationTargetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_risk_factor_risk_factor__["a" /* RiskFactorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_plan_literature_plan_literature__["a" /* PlanLiteraturePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_typical_record_typical_record__["a" /* TypicalRecordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/depressurization-target/depressurization-target.module#DepressurizationTargetPageModule', name: 'DepressurizationTargetPage', segment: 'depressurization-target', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doctor-advice/doctor-advice.module#DoctorAdvicePageModule', name: 'DoctorAdvicePage', segment: 'doctor-advice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-index/input-index.module#InputIndexPageModule', name: 'InputIndexPage', segment: 'input-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-list/input-list.module#InputListPageModule', name: 'InputListPage', segment: 'input-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-index/list-index.module#ListIndexPageModule', name: 'ListIndexPage', segment: 'list-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-index/page-index.module#PageIndexPageModule', name: 'PageIndexPage', segment: 'page-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-introduce/plan-introduce.module#PlanIntroducePageModule', name: 'PlanIntroducePage', segment: 'plan-introduce', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-literature/plan-literature.module#PlanLiteraturePageModule', name: 'PlanLiteraturePage', segment: 'plan-literature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommend-basic/recommend-basic.module#RecommendBasicPageModule', name: 'RecommendBasicPage', segment: 'recommend-basic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommend-detail/recommend-detail.module#RecommendDetailPageModule', name: 'RecommendDetailPage', segment: 'recommend-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommend-list/recommend-list.module#RecommendListPageModule', name: 'RecommendListPage', segment: 'recommend-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/risk-factor/risk-factor.module#RiskFactorPageModule', name: 'RiskFactorPage', segment: 'risk-factor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/typical-record/typical-record.module#TypicalRecordPageModule', name: 'TypicalRecordPage', segment: 'typical-record', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_ngx_notify__["a" /* NotifyModule */].forRoot({
                    options: {},
                    notify: {
                        progress: true
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_index_list_index__["a" /* ListIndexPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_index_page_index__["a" /* PageIndexPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_input_index_input_index__["a" /* InputIndexPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_input_list_input_list__["a" /* InputListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recommend_list_recommend_list__["a" /* RecommendListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_recommend_detail_recommend_detail__["a" /* RecommendDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_doctor_advice_doctor_advice__["a" /* DoctorAdvicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recommend_basic_recommend_basic__["a" /* RecommendBasicPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_recommend_reson_recommend_reson__["a" /* RecommendResonComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_plan_introduce_plan_introduce__["a" /* PlanIntroducePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_depressurization_target_depressurization_target__["a" /* DepressurizationTargetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_risk_factor_risk_factor__["a" /* RiskFactorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_plan_literature_plan_literature__["a" /* PlanLiteraturePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_typical_record_typical_record__["a" /* TypicalRecordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_6__providers_http_interceptor_http_interceptor__["a" /* Interceptor */], multi: true }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_notify__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(304);
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
            headers: req.headers.set('token', 'asdf'),
            params: req.params.set('params', 'asdf')
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_notify__["b" /* NotifyService */]])
    ], Interceptor);
    return Interceptor;
}());

//# sourceMappingURL=http-interceptor.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "inputData", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'form-group',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/components/form/form.html"*/'<!--文本输入-->\n<ion-list *ngIf="inputData.type==\'text\'">\n  <ion-item >\n    <ion-label color="primary" floating>{{inputData.label}}</ion-label>\n    <ion-input [(ngModel)]="inputData.value"></ion-input>\n  </ion-item>\n</ion-list>\n\n<!--单选-->\n<ion-list *ngIf="inputData.type==\'radio\'" radio-group [(ngModel)]="inputData.value">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-radio value="{{opt.value}}"></ion-radio>\n  </ion-item>\n</ion-list>\n\n<!--多选-->\n<ion-list *ngIf="inputData.type==\'checkbox\'">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options;">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-checkbox [(ngModel)]="inputData.value[opt.label]"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n<!--下拉菜单-->\n<ion-list  *ngIf="inputData.type==\'select\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-select [(ngModel)]="inputData.value" interface="action-sheet">\n      <ion-option *ngFor="let opt of inputData.options;" value="{{opt.value}}">{{opt.label}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<!--时间插件-->\n<ion-list  *ngIf="inputData.type==\'date\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-datetime displayFormat="{{inputData.format}}" [(ngModel)]="inputData.value"></ion-datetime>\n  </ion-item>\n</ion-list>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/components/form/form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());

//# sourceMappingURL=form.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map