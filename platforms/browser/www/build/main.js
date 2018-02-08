webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_list_input_list__ = __webpack_require__(101);
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
    function InputIndexPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.recordId = this.navParams.data.id;
        this.formDatas = this.getFormDatas();
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
        this.http.get('http://ionic.io', {}, {})
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    InputIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input-index',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-index/input-index.html"*/'\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{user.logo}}">\n      </ion-avatar>\n      <h2>{{user.name}}</h2>\n      <p>{{user.authority}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-desktop" color="danger"></ion-icon>慢病管理方案\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 *ngFor="let formData of formDatas;let idx = index" (click)="inputList(formData)"\n                 [ngClass]="{noBorder:idx%3 == 0}">\n          <ion-icon name="{{formData.icon}}" color="primary"></ion-icon>\n          <ion-label>{{formData.label}}</ion-label>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-index/input-index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], InputIndexPage);
    return InputIndexPage;
}());

//# sourceMappingURL=input-index.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-input-list',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-list/input-list.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="ios-rose" color="secondary">{{formData.label}}</ion-icon>\n    </ion-list-header>\n    <form-group *ngFor="let inputData of formData.inputs" [inputData]="inputData"></form-group>\n    <div padding>\n      <button ion-button block (click)="update()" >提交</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/pages/input-list/input-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InputListPage);
    return InputListPage;
}());

//# sourceMappingURL=input-list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_index_input_index__ = __webpack_require__(100);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListIndexPage);
    return ListIndexPage;
}());

//# sourceMappingURL=list-index.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_index_list_index__ = __webpack_require__(102);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], PageIndexPage);
    return PageIndexPage;
}());

//# sourceMappingURL=page-index.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/input-index/input-index.module": [
		277,
		3
	],
	"../pages/input-list/input-list.module": [
		278,
		2
	],
	"../pages/list-index/list-index.module": [
		279,
		1
	],
	"../pages/page-index/page-index.module": [
		280,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_index_page_index__ = __webpack_require__(103);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_page_index_page_index__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_index_list_index__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_input_index_input_index__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_input_list_input_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_form_form__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//tab切换

//首页

//病历列表页面

//病历录入模块列表页面

//病历录入录入页面

//表单组件

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_index_list_index__["a" /* ListIndexPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page_index_page_index__["a" /* PageIndexPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_input_index_input_index__["a" /* InputIndexPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_input_list_input_list__["a" /* InputListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: [
                        { loadChildren: '../pages/input-index/input-index.module#InputIndexPageModule', name: 'InputIndexPage', segment: 'input-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-list/input-list.module#InputListPageModule', name: 'InputListPage', segment: 'input-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-index/list-index.module#ListIndexPageModule', name: 'ListIndexPage', segment: 'list-index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-index/page-index.module#PageIndexPageModule', name: 'PageIndexPage', segment: 'page-index', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_index_list_index__["a" /* ListIndexPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_page_index_page_index__["a" /* PageIndexPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_input_index_input_index__["a" /* InputIndexPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_form_form__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_input_list_input_list__["a" /* InputListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
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
            selector: 'form-group',template:/*ion-inline-start:"/home/schrodinger/桌面/MobileDisPlan/src/components/form/form.html"*/'<!--文本输入-->\n<ion-list>\n  <ion-item *ngIf="inputData.type==\'text\'">\n    <ion-label color="primary" floating>{{inputData.label}}</ion-label>\n    <ion-input [(ngModel)]="inputData.value"></ion-input>\n  </ion-item>\n</ion-list>\n\n<!--单选-->\n<ion-list *ngIf="inputData.type==\'radio\'" radio-group [(ngModel)]="inputData.value">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-radio value="{{opt.value}}"></ion-radio>\n  </ion-item>\n</ion-list>\n\n<!--多选-->\n<ion-list *ngIf="inputData.type==\'checkbox\'">\n  <ion-list-header>\n    {{inputData.label}}\n  </ion-list-header>\n  <ion-item *ngFor="let opt of inputData.options;">\n    <ion-label>{{opt.label}}</ion-label>\n    <ion-checkbox [(ngModel)]="inputData.value[opt.label]"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n<!--下拉菜单-->\n<ion-list  *ngIf="inputData.type==\'select\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-select [(ngModel)]="inputData.value" interface="action-sheet">\n      <ion-option *ngFor="let opt of inputData.options;" value="{{opt.value}}">{{opt.label}}</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n<!--时间插件-->\n<ion-list  *ngIf="inputData.type==\'date\'">\n  <ion-item>\n    <ion-label>{{inputData.label}}</ion-label>\n    <ion-datetime displayFormat="{{inputData.format}}" [(ngModel)]="inputData.value"></ion-datetime>\n  </ion-item>\n</ion-list>\n\n'/*ion-inline-end:"/home/schrodinger/桌面/MobileDisPlan/src/components/form/form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());

//# sourceMappingURL=form.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map