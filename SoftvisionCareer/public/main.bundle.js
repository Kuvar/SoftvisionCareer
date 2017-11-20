webpackJsonp([1,4],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/validate.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(700),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_appsettings_appsettings_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_appmenu_appmenu_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_appheader_appheader_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_appfooter_appfooter_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_appmaster_appmaster_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_jobs_jobs_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_create_job_create_job_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_21__components_jobs_jobs_component__["a" /* JobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createJob', component: __WEBPACK_IMPORTED_MODULE_22__components_create_job_create_job_component__["a" /* CreateJobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_appsettings_appsettings_component__["a" /* AppsettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_appmenu_appmenu_component__["a" /* AppmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_appheader_appheader_component__["a" /* AppheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_appfooter_appfooter_component__["a" /* AppfooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_appmaster_appmaster_component__["a" /* AppmasterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_create_job_create_job_component__["a" /* CreateJobComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppfooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppfooterComponent = (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    AppfooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appfooter',
            template: __webpack_require__(701),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppfooterComponent);
    return AppfooterComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/appfooter.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppheaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppheaderComponent = (function () {
    function AppheaderComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    AppheaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-seccess', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    AppheaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appheader',
            template: __webpack_require__(702),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AppheaderComponent);
    return AppheaderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/appheader.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmasterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppmasterComponent = (function () {
    function AppmasterComponent() {
    }
    AppmasterComponent.prototype.ngOnInit = function () {
    };
    AppmasterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appmaster',
            template: __webpack_require__(703),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppmasterComponent);
    return AppmasterComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/appmaster.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppmenuComponent = (function () {
    function AppmenuComponent() {
    }
    AppmenuComponent.prototype.ngOnInit = function () {
    };
    AppmenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appmenu',
            template: __webpack_require__(704),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppmenuComponent);
    return AppmenuComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/appmenu.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsettingsComponent = (function () {
    function AppsettingsComponent() {
    }
    AppsettingsComponent.prototype.ngOnInit = function () {
    };
    AppsettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appsettings',
            template: __webpack_require__(705),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppsettingsComponent);
    return AppsettingsComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/appsettings.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateJobComponent = (function () {
    function CreateJobComponent() {
    }
    CreateJobComponent.prototype.ngOnInit = function () {
    };
    CreateJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-job',
            template: __webpack_require__(706),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateJobComponent);
    return CreateJobComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/create-job.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(707),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/dashboard.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(708),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/home.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsComponent = (function () {
    function JobsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.jobs = [];
        this.users = [
            { name: 'Jilles', age: 21 },
            { name: 'Todd', age: 24 },
            { name: 'Lisa', age: 18 }
        ];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllJob().subscribe(function (resulte) {
            _this.jobs = resulte.jobs;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(709),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/jobs.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        // Authenticate User
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.email = "";
                _this.password = "";
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(710),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/login.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(711),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/navbar.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(712),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/profile.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            role: '1'
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valied email.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(713),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/register.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/auth.guard.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/environment.js.map

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".jobs .job-row{\r\n  height: 100px !important;\r\n  border-radius: 5px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;\r\n}\r\n.jobs > .job-row:nth-child(even){\r\n  background-color: #23d88f;\r\n  border: #FFF 2px solid;\r\n}\r\n.jobs > .job-row:nth-child(odd){\r\n  background-color: #36bdff;\r\n  border: #FFF 2px solid;\r\n}\r\n.add-job{\r\n  \r\n}\r\n.add-job div{ padding-top: 2px;}\r\n.add-job i{ font-size: 24px; }\r\n.add-job a{color: #000000}\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".login-box{\r\n  margin-top:0px;\r\n  padding-top: 18%;\r\n}\r\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".register-box{\r\n  margin-top:0px;\r\n  padding-top: 18%;\r\n}\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 2.4.0\n    </div>\n    <strong>Copyright © 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\n    reserved.\n  </footer>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                      page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li><!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" (click)=\"onLogoutClick()\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n\n<div class=\"content-wrapper\" style=\"min-height: 916px;\">\n\n</div>\n<app-appfooter></app-appfooter>\n<app-appsettings></app-appsettings>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\" style=\"height: auto;\">\r\n      <!-- Sidebar user panel -->\r\n      <div class=\"user-panel\">\r\n        <div class=\"pull-left image\">\r\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n        </div>\r\n        <div class=\"pull-left info\">\r\n          <p>Alexander Pierce</p>\r\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n        </div>\r\n      </div>\r\n      <!-- search form -->\r\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n        <div class=\"input-group\">\r\n          <input name=\"q\" class=\"form-control\" placeholder=\"Search...\" type=\"text\">\r\n          <span class=\"input-group-btn\">\r\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n        </div>\r\n      </form>\r\n      <!-- /.search form -->\r\n      <!-- sidebar menu: : style can be found in sidebar.less -->\r\n      <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\r\n        <li class=\"header\">MAIN NAVIGATION</li>\r\n        <li class=\"active treeview menu-open\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li class=\"active\"><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\r\n            <li><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-files-o\"></i>\r\n            <span>Layout Options</span>\r\n            <span class=\"pull-right-container\">\r\n              <span class=\"label label-primary pull-right\">4</span>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\r\n            <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\r\n            <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\r\n            <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a href=\"/jobs\">\r\n            <i class=\"fa fa-th\"></i> <span>Jobs</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-green\">new</small>\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-pie-chart\"></i>\r\n            <span>Charts</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\r\n            <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\r\n            <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\r\n            <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-laptop\"></i>\r\n            <span>UI Elements</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\r\n            <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\r\n            <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\r\n            <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\r\n            <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\r\n            <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-edit\"></i> <span>Forms</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\r\n            <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\r\n            <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-table\"></i> <span>Tables</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\r\n            <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a href=\"pages/calendar.html\">\r\n            <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-red\">3</small>\r\n              <small class=\"label pull-right bg-blue\">17</small>\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"pages/mailbox/mailbox.html\">\r\n            <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\r\n            <span class=\"pull-right-container\">\r\n              <small class=\"label pull-right bg-yellow\">12</small>\r\n              <small class=\"label pull-right bg-green\">16</small>\r\n              <small class=\"label pull-right bg-red\">5</small>\r\n            </span>\r\n          </a>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-folder\"></i> <span>Examples</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\r\n            <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\r\n            <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\r\n            <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\r\n            <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\r\n            <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\r\n            <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\r\n            <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\r\n            <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\">\r\n            <i class=\"fa fa-share\"></i> <span>Multilevel</span>\r\n            <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n            <li class=\"treeview\">\r\n              <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\r\n                <span class=\"pull-right-container\">\r\n                  <i class=\"fa fa-angle-left pull-right\"></i>\r\n                </span>\r\n              </a>\r\n              <ul class=\"treeview-menu\">\r\n                <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\r\n                <li class=\"treeview\">\r\n                  <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\r\n                    <span class=\"pull-right-container\">\r\n                      <i class=\"fa fa-angle-left pull-right\"></i>\r\n                    </span>\r\n                  </a>\r\n                  <ul class=\"treeview-menu\">\r\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\r\n        <li class=\"header\">LABELS</li>\r\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\r\n      </ul>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>\r\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Create the tabs -->\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <!-- Home tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n      </div>\n      <!-- /.tab-pane -->\n      <!-- Stats tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n      <!-- /.tab-pane -->\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n      <!-- /.tab-pane -->\n    </div>\n  </aside>\n  <!-- /.control-sidebar -->\n  <!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n  <div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n<div class=\"content-wrapper\" style=\"min-height: 916px;\">\n  <section class=\"content-header\">\n    <h1>Dashboard<small>Control panel</small></h1>\n    <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n    <section class=\"content\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">Create Job</h3>\n        </div>\n        <form>\n          <div class=\"box-body\">\n                  <div class=\"form-group\">\n                    <label for=\"jobTitle\">Title</label>\n                    <input class=\"form-control\" id=\"jobTitle\" [(ngModel)]=\"jobTitle\" name=\"jobTitle\" placeholder=\"Title\" type=\"text\" required>\n                  </div>\n                  <div class=\"row\">\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"coreTechnology\">Core Technology</label>\n                    <select class=\"form-control\" name=\"multipleSelect\" id=\"multipleSelect\" [(ngModel)]=\"multipleSelect\" multiple>\n                      <option value=\"Java\">Java</option>\n                      <option value=\".Net\">.Net</option>\n                      <option value=\"Angular-2\">Angular-2</option>\n                      <option value=\"Node\">Node</option>\n                      <option value=\"TypeScript\">TypeScript</option>\n                      <option value=\"Android\">Android</option>\n                      <option value=\"Xamarin\">Xamarin</option>\n                      </select><br>\n                      {{multipleSelect}}\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"jobPayroll\">Payroll</label>\n                    <select class=\"form-control\" [(ngModel)]=\"jobPayroll\" name=\"jobPayroll\">\n                      <option value=\"Permanent\">Permanent</option>\n                      <option value=\"Temporary\">Temporary</option>\n                      <option value=\"Contract\">Contract</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group col-sm-4\">\n                    <label for=\"NoFoOpening\">No. fo Opening</label>\n                    <input id=\"NoFoOpening\" type=\"number\" class=\"form-control\" [(ngModel)]=\"NoFoOpening\" name=\"NoFoOpening\" min=\"1\" max=\"10\">\n                  </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">Description</label>\n                    <textarea id=\"jobDescription\" [(ngModel)]=\"jobDescription\" value=\"1\" name=\"jobDescription\" rows=\"10\" cols=\"80\"></textarea>\n                    {{jobDescription}}\n                  </div>\n                </div>\n          <div class=\"box-footer\">\n              <button type=\"submit\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"submit\" class=\"btn btn-info pull-right\">Sign in</button>\n          </div>\n        </form>\n      </div>\n    </section>\n</div>\n<app-appfooter></app-appfooter>\n<app-appsettings></app-appsettings>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n\n<div class=\"content-wrapper\" style=\"min-height: 916px;\">\n  \n</div>\n<app-appfooter></app-appfooter>\n<app-appsettings></app-appsettings>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n<div class=\"content-wrapper\" style=\"min-height: 916px;\">\n  <section class=\"content-header\">\n      <h1>\n        Dashboard\n        <small>Control panel</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </section>\n    <section >\n\n    </section>\n    <section class=\"content\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header with-border\">\n          <div class=\"col-md-12 add-job\">\n            <h3 class=\"box-title\">Jobs</h3>\n            <div class=\"pull-right\"><a href=\"/createJob\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i></a></div>\n          </div>\n        </div>\n      <!--<div class=\"row\" *ngIf=\"jobs\"><h1>No record found.</h1></div>-->\n          <div class=\"box-body jobs\">\n              <div class=\"col-md-12 job-row\">\n                <div class=\"col-md-3\">image</div>\n                <div class=\"col-md-9\">\n                  <div class=\"col-md-12 job-title\"></div>\n                  <div class=\"col-md-12 location\"></div>\n                  <div class=\"col-md-12 read-more\">Read more</div>\n                </div>\n              </div>\n              <div class=\"col-md-12 job-row\">Emp-02</div>\n              <div class=\"col-md-12 job-row\">Emp-03</div>\n              <div class=\"col-md-12 job-row\">Emp-04</div>\n              <div class=\"col-md-12 job-row\">Emp-05</div>\n              <div class=\"col-md-12 job-row\">Emp-06</div>\n              <div class=\"col-md-12 job-row\">Emp-07</div>\n              <div class=\"col-md-12 job-row\">Emp-08</div>\n              <div class=\"col-md-12 job-row\">Emp-09</div>\n              <div class=\"col-md-12 job-row\">Emp-10</div>\n              <div class=\"col-md-12 job-row\">Emp-11</div>\n              <div class=\"col-md-12 job-row\">Emp-12</div>\n          </div>\n      </div>\n    </section>\n</div>\n<app-appfooter></app-appfooter>\n<app-appsettings></app-appsettings>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"hold-transition login-page\" style=\"background-image: url(&quot;https://www.softvision.com/wp-content/uploads/2017/08/Inc5000Hero.jpg&quot;); height: 695px; background-position: center 0px;\">\n<flash-messages></flash-messages>\n<div class=\"login-box\">\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">Sign in to start your session</p>\n\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" Required placeholder=\"Email\" >\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" Required placeholder=\"Password\" >\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> Remember Me\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <div class=\"social-auth-links text-center\" style=\"display:none\">\n      <p>- OR -</p>\n      <a href=\"#\" class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign in using\n        Facebook</a>\n      <a href=\"#\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign in using\n        Google+</a>\n    </div>\n    <!-- /.social-auth-links -->\n\n    <a href=\"#\">I forgot my password</a><br>\n    <a href=\"register.html\" class=\"text-center\" style=\"display:none\">Register a new membership</a>\n\n  </div>\n  <!-- /.login-box-body -->\n</div>\n<!-- /.login-box -->\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n <aside class=\"main-sidebar\">\n   <!-- sidebar: style can be found in sidebar.less -->\n   <section class=\"sidebar\">\n     <!-- Sidebar user panel -->\n     <div class=\"user-panel\">\n       <div class=\"pull-left image\">\n         <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n       </div>\n       <div class=\"pull-left info\">\n         <p>Alexander Pierce</p>\n         <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n       </div>\n     </div>\n     <!-- search form -->\n     <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n       <div class=\"input-group\">\n         <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n         <span class=\"input-group-btn\">\n               <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n               </button>\n             </span>\n       </div>\n     </form>\n     <!-- /.search form -->\n     <!-- sidebar menu: : style can be found in sidebar.less -->\n     <ul class=\"sidebar-menu\" data-widget=\"tree\">\n       <li class=\"header\">MAIN NAVIGATION</li>\n       <li class=\"active treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li class=\"active\"><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n           <li><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n         </ul>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-files-o\"></i>\n           <span>Layout Options</span>\n           <span class=\"pull-right-container\">\n             <span class=\"label label-primary pull-right\">4</span>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n           <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n           <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n           <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n         </ul>\n       </li>\n       <li>\n         <a href=\"pages/widgets.html\">\n           <i class=\"fa fa-th\"></i> <span>Widgets</span>\n           <span class=\"pull-right-container\">\n             <small class=\"label pull-right bg-green\">new</small>\n           </span>\n         </a>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-pie-chart\"></i>\n           <span>Charts</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n           <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n           <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n           <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n         </ul>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-laptop\"></i>\n           <span>UI Elements</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n           <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n           <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n           <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n           <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n           <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n         </ul>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-edit\"></i> <span>Forms</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n           <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n           <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n         </ul>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-table\"></i> <span>Tables</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n           <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n         </ul>\n       </li>\n       <li>\n         <a href=\"pages/calendar.html\">\n           <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n           <span class=\"pull-right-container\">\n             <small class=\"label pull-right bg-red\">3</small>\n             <small class=\"label pull-right bg-blue\">17</small>\n           </span>\n         </a>\n       </li>\n       <li>\n         <a href=\"pages/mailbox/mailbox.html\">\n           <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n           <span class=\"pull-right-container\">\n             <small class=\"label pull-right bg-yellow\">12</small>\n             <small class=\"label pull-right bg-green\">16</small>\n             <small class=\"label pull-right bg-red\">5</small>\n           </span>\n         </a>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-folder\"></i> <span>Examples</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n           <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n           <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n           <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n           <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n           <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n           <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n           <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n           <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n         </ul>\n       </li>\n       <li class=\"treeview\">\n         <a href=\"#\">\n           <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n           <span class=\"pull-right-container\">\n             <i class=\"fa fa-angle-left pull-right\"></i>\n           </span>\n         </a>\n         <ul class=\"treeview-menu\">\n           <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n           <li class=\"treeview\">\n             <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n               <span class=\"pull-right-container\">\n                 <i class=\"fa fa-angle-left pull-right\"></i>\n               </span>\n             </a>\n             <ul class=\"treeview-menu\">\n               <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n               <li class=\"treeview\">\n                 <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                   <span class=\"pull-right-container\">\n                     <i class=\"fa fa-angle-left pull-right\"></i>\n                   </span>\n                 </a>\n                 <ul class=\"treeview-menu\">\n                   <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                   <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                 </ul>\n               </li>\n             </ul>\n           </li>\n           <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n         </ul>\n       </li>\n       <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n       <li class=\"header\">LABELS</li>\n       <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n       <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n       <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n     </ul>\n   </section>\n   <!-- /.sidebar -->\n </aside>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"hold-transition register-page\" style=\"background-image: url(&quot;https://www.softvision.com/wp-content/uploads/2017/08/Inc5000Hero.jpg&quot;); height: 695px; background-position: center 0px;\">\n<flash-messages></flash-messages>\n<div class=\"register-box\">\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Register a new membership</p>\n\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Full name\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n        <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> I agree to the <a href=\"#\">terms</a>\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Register</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n    <a href=\"login\" class=\"text-center\">I already have a membership</a>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getAllJob = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/jobs', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/SoftvisionCareer/angular-cli/src/auth.service.js.map

/***/ })

},[749]);
//# sourceMappingURL=main.bundle.map