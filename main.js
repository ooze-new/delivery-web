(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-info\n  [user]=\"user | async\"\n  [isAuth]=\"isAuth | async\"\n  (loginClick)=\"login()\"\n  (logoutClick)=\"logout()\"\n></app-user-info>\n\n<ng-container *ngIf=\"!(isAuth | async)\">\n  <div class=\"not-auth-block\"  *ngIf=\"!(isAuth | async)\">\n    <h3>Вы не навторизованы. для авторизации назмите кнопку войти.</h3>\n  </div>\n</ng-container>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-auth-block {\n  text-align: center;\n  font-weight: bold;\n  margin: 50px 20px;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtDQ0NEO0FBQ0QscURBQXFEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1hdXRoLWJsb2NrIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiA1MHB4IDIwcHg7XHJcbn1cclxuIiwiLm5vdC1hdXRoLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1MHB4IDIwcHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-component */ "./src/app/base-component.ts");
/* harmony import */ var _vk_auth_servise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vk/auth..servise */ "./src/app/vk/auth..servise.ts");
/* harmony import */ var _vk_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vk/user.service */ "./src/app/vk/user.service.ts");
/* harmony import */ var _vk_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vk/errors.service */ "./src/app/vk/errors.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(auth, _userService, _errorsService, _snackBar) {
        var _this = _super.call(this, auth) || this;
        _this._userService = _userService;
        _this._errorsService = _errorsService;
        _this._snackBar = _snackBar;
        _this.user = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        _this.isAuth = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.info(window.location.origin);
        this.isAuth = this.authStateChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) { return authState.state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0));
        this.user = this.authStateChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) {
            if (authState.state) {
                return _this._userService.get(authState.userID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
        this._errorsService.error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (error) { return error.error_msg; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinct"])())
            .subscribe(function (error) {
            _this._snackBar.open(error, 'Ошибка', { duration: 2000 });
        });
    };
    AppComponent.prototype.login = function () {
        this._auth.login();
    };
    AppComponent.prototype.logout = function () {
        this._auth.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        }),
        __metadata("design:paramtypes", [_vk_auth_servise__WEBPACK_IMPORTED_MODULE_4__["AuthSetvice"],
            _vk_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _vk_errors_service__WEBPACK_IMPORTED_MODULE_6__["ErrorsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _vk_vk_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vk/vk.module */ "./src/app/vk/vk.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oauth/oauth.component */ "./src/app/oauth/oauth.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'oauth', component: _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_10__["OAuthComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }
];
var errorMesageConf = [
    {
        error_code: 5,
        error_msg: 'Токен устарел. поробуйте выдти и войти снова'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_10__["OAuthComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _vk_vk_module__WEBPACK_IMPORTED_MODULE_7__["VkModule"].forRoot({
                    appID: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].appID,
                    serviceToken: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serviceToken,
                    display: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].display,
                    response_type: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].response_type,
                    scope: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].scope,
                    state: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].state,
                    apiVersion: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiVersion
                }, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].vkTokenKeyInStore, window.sessionStorage)
            ],
            providers: [
                { provide: _vk_vk_module__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGES_CONFIG"], useValue: errorMesageConf, multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-component.ts":
/*!***********************************!*\
  !*** ./src/app/base-component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vk_auth_servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vk/auth..servise */ "./src/app/vk/auth..servise.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BaseComponent = /** @class */ (function () {
    function BaseComponent(_auth) {
        this._auth = _auth;
    }
    Object.defineProperty(BaseComponent.prototype, "authStateChange$", {
        get: function () {
            return this._auth.authStateChange$;
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_vk_auth_servise__WEBPACK_IMPORTED_MODULE_1__["AuthSetvice"])),
        __metadata("design:paramtypes", [_vk_auth_servise__WEBPACK_IMPORTED_MODULE_1__["AuthSetvice"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item *ngFor=\"let friend of friends | async\">\n    <img matListAvatar src=\"{{ friend.photo }}\">\n    <h3 matLine> {{ friend.firstName }} {{ friend.lastName }} </h3>\n  </mat-list-item>\n</mat-list>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.styl":
/*!******************************************!*\
  !*** ./src/app/home/home.component.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-component */ "./src/app/base-component.ts");
/* harmony import */ var _vk_auth_servise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vk/auth..servise */ "./src/app/vk/auth..servise.ts");
/* harmony import */ var _vk_freds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vk/freds.service */ "./src/app/vk/freds.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(auth, _frendService) {
        var _this = _super.call(this, auth) || this;
        _this._frendService = _frendService;
        _this.friends = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friends = this.authStateChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) {
            if (authState.state) {
                return _this._frendService.get(authState.userID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchAll"])());
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/home/home.component.styl")]
        }),
        __metadata("design:paramtypes", [_vk_auth_servise__WEBPACK_IMPORTED_MODULE_4__["AuthSetvice"], _vk_freds_service__WEBPACK_IMPORTED_MODULE_5__["FredsService"]])
    ], HomeComponent);
    return HomeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/oauth/oauth.component.html":
/*!********************************************!*\
  !*** ./src/app/oauth/oauth.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  oauth works!\n</p>\n"

/***/ }),

/***/ "./src/app/oauth/oauth.component.styl":
/*!********************************************!*\
  !*** ./src/app/oauth/oauth.component.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/oauth/oauth.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2F1dGgvb2F1dGguY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEIiwiZmlsZSI6InNyYy9hcHAvb2F1dGgvb2F1dGguY29tcG9uZW50LnN0eWwifQ== */"

/***/ }),

/***/ "./src/app/oauth/oauth.component.ts":
/*!******************************************!*\
  !*** ./src/app/oauth/oauth.component.ts ***!
  \******************************************/
/*! exports provided: OAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthComponent", function() { return OAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vk_auth_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vk/auth..servise */ "./src/app/vk/auth..servise.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// http://localhost:4200/test#access_token=deaa55218461de0caf1fcb982aa86a173152e4e4ed1e33455daeda4c6d9ff332c3ff087b8141618b35f3c&expires_in=86400&user_id=54495905&state=123456
var OAuthComponent = /** @class */ (function () {
    function OAuthComponent(_route, _router, _auth) {
        this._route = _route;
        this._router = _router;
        this._auth = _auth;
    }
    OAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.fragment.subscribe(function (fragment) {
            var token = Object.assign.apply(Object, [{}].concat(fragment
                .split('&')
                .map(function (param) {
                var _a;
                var _b = param.split('='), key = _b[0], value = _b[1];
                return _a = {}, _a[key] = value, _a;
            })));
            _this._auth.setToken(token);
            _this._router.navigate(['']);
        });
    };
    OAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth',
            template: __webpack_require__(/*! ./oauth.component.html */ "./src/app/oauth/oauth.component.html"),
            styles: [__webpack_require__(/*! ./oauth.component.styl */ "./src/app/oauth/oauth.component.styl")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _vk_auth_servise__WEBPACK_IMPORTED_MODULE_2__["AuthSetvice"]])
    ], OAuthComponent);
    return OAuthComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <ng-container *ngIf=\"user\">\n    {{ user.firstName }} {{ user.lastName }}\n  </ng-container>\n  <span class=\"spacer\"></span>\n  <button mat-raised-button (click)=\"login()\" *ngIf=\"!isAuth\">\n    Вход\n  </button>\n  <button mat-raised-button (click)=\"logout()\" *ngIf=\"isAuth\">\n    Выход\n  </button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.styl":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=src/app/user-info/user-info.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL3NyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO1VBQUEsZUFBQTtDQ0NEO0FBQ0QscUVBQXFFIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiIsIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vk_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vk/user */ "./src/app/vk/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.isAuth = false;
        this.loginClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoutClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserInfoComponent.prototype.login = function () {
        this.loginClick.next();
    };
    UserInfoComponent.prototype.logout = function () {
        this.logoutClick.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _vk_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "isAuth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "loginClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "logoutClick", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.styl */ "./src/app/user-info/user-info.component.styl")]
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/vk/auth..servise.ts":
/*!*************************************!*\
  !*** ./src/app/vk/auth..servise.ts ***!
  \*************************************/
/*! exports provided: AuthSetvice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSetvice", function() { return AuthSetvice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors.service */ "./src/app/vk/errors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthSetvice = /** @class */ (function () {
    function AuthSetvice(httpClient, store, tokenKeyInStore, config, errors) {
        this._logining = false;
        this.authStateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ state: false });
        this._http = httpClient;
        this._store = store;
        this._tokenKeyInStore = tokenKeyInStore;
        this._config = config;
        this._errors = errors;
    }
    Object.defineProperty(AuthSetvice.prototype, "token", {
        get: function () {
            return this._token && this._token.access_token || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthSetvice.prototype, "userID", {
        get: function () {
            return this._token && this._token.user_id || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthSetvice.prototype, "logining", {
        get: function () {
            return this._logining;
        },
        enumerable: true,
        configurable: true
    });
    AuthSetvice.prototype.isAuth = function () {
        // && !this.isTokenExpiried()
        return Boolean(this._token
            && this._token.access_token);
    };
    AuthSetvice.prototype.isTokenExpiried = function () {
        if (this._token
            && this._token.expires_in
            && this._token.expires_in < (this.getCuentTimestamp() - 10)) {
            return true;
        }
        return false;
    };
    AuthSetvice.prototype.setToken = function (token) {
        var _this = this;
        // this._token = token;
        // this.saveToken();
        this.checkToken(token.access_token).subscribe(function (tokenInfo) {
            _this._token = token;
            _this._token.expires_in = tokenInfo.expire;
            _this.saveToken();
        }, function (error) { });
    };
    AuthSetvice.prototype.resetToken = function () {
        this._token = undefined;
        this.removeTokenFromStore(this._tokenKeyInStore);
    };
    AuthSetvice.prototype.saveToken = function () {
        this.saveTokenToStore(this._tokenKeyInStore);
    };
    AuthSetvice.prototype.loadToken = function () {
        this.loadTokenFromStore(this._tokenKeyInStore);
    };
    AuthSetvice.prototype.login = function () {
        this._logining = true;
        var config = {
            client_id: this._config.appID,
            display: this._config.display,
            // redirect_uri: 'http://localhost:4200/test',
            redirect_uri: window.location.origin + "/oauth",
            scope: this._config.scope.join(','),
            response_type: this._config.response_type,
            v: this._config.apiVersion,
            state: this._config.state
        };
        document.location.replace([
            'https://oauth.vk.com/authorize',
            Object.entries(config)
                .map(function (item) { return item.join('='); })
                .join('&')
        ].join('?'));
    };
    AuthSetvice.prototype.logout = function () {
        this.resetToken();
    };
    AuthSetvice.prototype.saveTokenToStore = function (key) {
        this._store.setItem(key, JSON.stringify(this._token));
        if (this.isAuth()) {
            this.authStateChange$.next({
                state: true,
                userID: this.userID
            });
        }
    };
    AuthSetvice.prototype.loadTokenFromStore = function (key) {
        this._token = JSON.parse(this._store.getItem(key));
        if (this.isAuth()) {
            this.authStateChange$.next({
                state: true,
                userID: this.userID
            });
        }
    };
    AuthSetvice.prototype.removeTokenFromStore = function (key) {
        this._store.removeItem(key);
        this.authStateChange$.next({ state: false });
    };
    AuthSetvice.prototype.getCuentTimestamp = function () {
        return new Date().getTime();
    };
    AuthSetvice.prototype.checkToken = function (token) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('token', token)
            .set('access_token', this._config.serviceToken)
            .set('v', this._config.apiVersion);
        var url = 'https://api.vk.com/method/secure.checkToken';
        return this._http.jsonp(url + "?" + params.toString(), 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if ('error' in response) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response['error']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this._errors.flashError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.response; }));
    };
    AuthSetvice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object, String, Object, _errors_service__WEBPACK_IMPORTED_MODULE_4__["ErrorsService"]])
    ], AuthSetvice);
    return AuthSetvice;
}());



/***/ }),

/***/ "./src/app/vk/baze-service.ts":
/*!************************************!*\
  !*** ./src/app/vk/baze-service.ts ***!
  \************************************/
/*! exports provided: BazeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazeService", function() { return BazeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_servise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth..servise */ "./src/app/vk/auth..servise.ts");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors.service */ "./src/app/vk/errors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BazeService = /** @class */ (function () {
    function BazeService(_http, _auth, _errors) {
        this._http = _http;
        this._auth = _auth;
        this._errors = _errors;
    }
    BazeService.prototype.apiRequest = function (url, params) {
        var _this = this;
        if (this._auth.isTokenExpiried() && !this._auth.logining) {
            console.info('relogin');
            // this._auth.login();
        }
        var requestParams = params
            .set('access_token', this._auth.token)
            .set('v', '5.100');
        return this._http.jsonp(url + "?" + requestParams.toString(), 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (response) {
            if ('error' in response) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response['error']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this._errors.flashError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    BazeService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_auth_servise__WEBPACK_IMPORTED_MODULE_4__["AuthSetvice"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_errors_service__WEBPACK_IMPORTED_MODULE_5__["ErrorsService"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_servise__WEBPACK_IMPORTED_MODULE_4__["AuthSetvice"],
            _errors_service__WEBPACK_IMPORTED_MODULE_5__["ErrorsService"]])
    ], BazeService);
    return BazeService;
}());



/***/ }),

/***/ "./src/app/vk/errors.service.ts":
/*!**************************************!*\
  !*** ./src/app/vk/errors.service.ts ***!
  \**************************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorsService = /** @class */ (function () {
    function ErrorsService() {
        this._messages = new Map();
        this._error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    Object.defineProperty(ErrorsService.prototype, "error$", {
        get: function () {
            var _this = this;
            return this._error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (error) { return error !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (error) {
                if (_this._messages.has(error.error_code)) {
                    error.error_msg = _this._messages.get(error.error_code);
                }
                return error;
            }));
        },
        enumerable: true,
        configurable: true
    });
    ErrorsService.prototype.addMessages = function (messages) {
        var _this = this;
        messages.forEach(function (message) {
            _this._messages.set(message.error_code, message.error_msg);
        });
    };
    ErrorsService.prototype.flashError = function (error) {
        this._error$.next(error);
    };
    ErrorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], ErrorsService);
    return ErrorsService;
}());



/***/ }),

/***/ "./src/app/vk/freds.service.ts":
/*!*************************************!*\
  !*** ./src/app/vk/freds.service.ts ***!
  \*************************************/
/*! exports provided: FredsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FredsService", function() { return FredsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baze_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baze-service */ "./src/app/vk/baze-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/vk/user.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FredsService = /** @class */ (function (_super) {
    __extends(FredsService, _super);
    function FredsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FredsService.prototype.get = function (userID, limit, offset) {
        if (limit === void 0) { limit = 0; }
        if (offset === void 0) { offset = 0; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('user_id', userID.toString())
            .set('order', 'name')
            .set('fields', 'photo_200_orig');
        if (limit > 0) {
            params = params.set('count', limit.toString());
        }
        if (offset > 0) {
            params = params.set('offset', limit.toString());
        }
        return this.apiRequest('https://api.vk.com/method/friends.get', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (frends) {
            return frends.items.map(function (frend) {
                return new _user__WEBPACK_IMPORTED_MODULE_4__["User"](frend.id, frend.first_name, frend.last_name, frend.photo_200_orig);
            });
        }));
    };
    FredsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], FredsService);
    return FredsService;
}(_baze_service__WEBPACK_IMPORTED_MODULE_1__["BazeService"]));



/***/ }),

/***/ "./src/app/vk/user.service.ts":
/*!************************************!*\
  !*** ./src/app/vk/user.service.ts ***!
  \************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baze_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baze-service */ "./src/app/vk/baze-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/vk/user.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.get = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('user_ids', id.toString())
            .set('fields', 'photo_200_orig');
        return this.apiRequest('https://api.vk.com/method/users.get', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('response'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var user = result.shift();
            return new _user__WEBPACK_IMPORTED_MODULE_4__["User"](user.id, user.first_name, user.last_name);
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], UserService);
    return UserService;
}(_baze_service__WEBPACK_IMPORTED_MODULE_1__["BazeService"]));



/***/ }),

/***/ "./src/app/vk/user.ts":
/*!****************************!*\
  !*** ./src/app/vk/user.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, firstName, lastName, photo) {
        if (photo === void 0) { photo = ''; }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/vk/vk.module.ts":
/*!*********************************!*\
  !*** ./src/app/vk/vk.module.ts ***!
  \*********************************/
/*! exports provided: TOKEN_STORE, TOKEN_STORE_KEY, VK_API_CONFIG, ERROR_MESSAGES_CONFIG, VkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORE", function() { return TOKEN_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORE_KEY", function() { return TOKEN_STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VK_API_CONFIG", function() { return VK_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGES_CONFIG", function() { return ERROR_MESSAGES_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VkModule", function() { return VkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth..servise */ "./src/app/vk/auth..servise.ts");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.service */ "./src/app/vk/errors.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TOKEN_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TOKEN_STORE');
var TOKEN_STORE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TOKEN_STORE');
var VK_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VK_API_CONFIG');
var ERROR_MESSAGES_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ERROR_MESSAGES_CONFIG');
var AuthSetviceFactory = function (store, config, tokenKeyInStore, errors, http) {
    var service = new _auth_servise__WEBPACK_IMPORTED_MODULE_2__["AuthSetvice"](http, store, tokenKeyInStore, config, errors);
    service.loadToken();
    return service;
};
var defultErrorMesageConf = [];
var VkModule = /** @class */ (function () {
    function VkModule(errors, configs) {
        if (configs === void 0) { configs = []; }
        if (!configs) {
            return;
        }
        configs.forEach(function (config) { return errors.addMessages(config); });
    }
    VkModule_1 = VkModule;
    VkModule.forRoot = function (config, tokenKeyInStore, tokenStore) {
        return {
            ngModule: VkModule_1,
            providers: [
                { provide: TOKEN_STORE_KEY, useValue: tokenKeyInStore },
                { provide: TOKEN_STORE, useValue: tokenStore },
                { provide: VK_API_CONFIG, useValue: config },
                { provide: ERROR_MESSAGES_CONFIG, useValue: defultErrorMesageConf, multi: true },
            ]
        };
    };
    var VkModule_1;
    VkModule = VkModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: _auth_servise__WEBPACK_IMPORTED_MODULE_2__["AuthSetvice"],
                    useFactory: AuthSetviceFactory,
                    deps: [TOKEN_STORE, VK_API_CONFIG, TOKEN_STORE_KEY, _errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                },
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ERROR_MESSAGES_CONFIG)),
        __metadata("design:paramtypes", [_errors_service__WEBPACK_IMPORTED_MODULE_3__["ErrorsService"],
            Array])
    ], VkModule);
    return VkModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    vkTokenKeyInStore: 'vK-token-info1',
    appID: 7042453,
    serviceToken: '9ca091d89ca091d89ca091d82d9ccbe44d99ca09ca091d8c1bcf66aac5a450bad627a87',
    display: 'page',
    // redirect_uri: 'http://localhost:4200/test',
    scope: ['friends', 'secure'],
    response_type: 'token',
    apiVersion: '5.95',
    state: '123456'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\projects\vk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map