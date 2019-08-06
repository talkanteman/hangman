(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div >\n  <h2>\n    {{ title }}\n  </h2>\n</div> -->\n<router-outlet></router-outlet>\n<app-hangman></app-hangman>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hangman/cap-letter/cap-letter.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hangman/cap-letter/cap-letter.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"letter\">\n    <h1 [class.Hidden]=\"!display\">{{ letter }}</h1>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hangman/hangman-img/hangman-img.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hangman/hangman-img/hangman-img.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img *ngIf=\"strikes < 7\" [src]=\"imgSrc[strikes]\" class=\"Hangman\"/>\n\n<img *ngIf=\"gameEnded && strikes < 6\" [src]=\"winSrc\" class=\"LoseOrWin\"/>\n<div *ngIf=\"gameEnded && strikes < 6\" class=\"Message\">\n    <h1 class=\"Win\">YES YOU DID IT!</h1>\n</div>\n\n<img *ngIf=\"gameEnded && strikes > 5\" [src]=\"loseSrc\" class=\"LoseOrWin\"/>\n<div *ngIf=\"gameEnded && strikes > 5\" class=\"Message\">\n    <h1 class=\"Lose\">SHIT! YOU DIED :(</h1>\n</div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hangman/hangman.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hangman/hangman.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Title\">\n    <img src=\"../../assets/images/Sign.png\"/>\n    <div class=\"HeadLine\">HANGMAN</div>\n</div>\n\n<app-hangman-img [strikes]=\"strikes\" [gameEnded]=\"gameEnded\"></app-hangman-img>\n<app-letters-to-display [movieName]=\"movieName\" [clueLetters]=\"clueLetters\" [guessedLetters]=\"guessedLetters\"></app-letters-to-display>\n<div *ngFor=\"let letter of betLetters\">\n    <app-cap-letter  (click)=\"clickOnLetter(letter)\" [display]=\"stillInBank[letter]\"\n     [letter]=\"letter\"></app-cap-letter>\n</div>\n<button *ngIf=\"gameEnded\" class=\"Again\" (click)=\"startAgain()\"><h1>AGAIN</h1></button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hangman/letters-to-display/letters-to-display.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hangman/letters-to-display/letters-to-display.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div *ngFor=\"let word of movieNameByLetter\" class=\"Word\">\n        <div *ngFor=\"let letter of word\">\n            <app-single-letter *ngIf=\"clueLetters.includes(letter)\" [letter]=\"letter\"></app-single-letter>\n            <app-single-letter *ngIf=\"guessedLetters.includes(letter)\" [letter]=\"letter\" \n                isGuessed=\"true\"></app-single-letter>\n            <app-single-letter *ngIf=\"!clueLetters.includes(letter) && !guessedLetters.includes(letter)\" \n                [letter]=\"''\"></app-single-letter>\n        </div>\n        <h1 class=\"Space\"> </h1>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hangman/letters-to-display/single-letter/single-letter.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hangman/letters-to-display/single-letter/single-letter.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"!isGuessed\">\n        <h1>{{ letter }}</h1>\n        <div class=\"UnderLine\"></div>\n    </div>\n    <div *ngIf=\"isGuessed\" class=\"Guessed\">\n        <h1>{{ letter }}</h1>\n        <div class=\"UnderLineGuessed\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    display: flex;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    /* margin-right: auto; */\r\n    /* padding: 10px 40px 10px 40px; */\r\n    /* padding-right: 40px; */\r\n    border-radius: 10%;\r\n    border: 5px solid black;\r\n    width: 250px;\r\n    height: 50px;\r\n    background-color: rgb(38, 0, 255);\r\n}\r\n\r\nh2 {\r\n    border-radius: 10%;\r\n    margin: auto auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8qIG1hcmdpbi1yaWdodDogYXV0bzsgKi9cclxuICAgIC8qIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDQwcHg7ICovXHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiA0MHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDAsIDI1NSk7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HANGMAN';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hangman_hangman_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hangman/hangman.module */ "./src/app/hangman/hangman.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _hangman_hangman_module__WEBPACK_IMPORTED_MODULE_6__["HangmanModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'assets/';
    }
    DataService.prototype.getMovie = function () {
        return this.http.get(this.baseUrl + 'movies.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (movies) {
            var rand = Math.floor(Math.random() * movies.length);
            return movies[rand].title;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error || 'Node.js server error');
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/hangman/cap-letter/cap-letter.component.css":
/*!*************************************************************!*\
  !*** ./src/app/hangman/cap-letter/cap-letter.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n    margin: auto auto;\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n.Hidden {\r\n    opacity: 0.2;\r\n    cursor: auto;\r\n}\r\n\r\ndiv {\r\n    position: absolute;\r\n    background-color: gray;\r\n    width: 41px;\r\n    height: 41px;\r\n    border: solid 1px black;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* .FirstLine  */\r\n\r\n.A {\r\n    left: 30%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.B {\r\n    left: 34%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.C {\r\n    left: 38%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.D {\r\n    left: 42%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.E {\r\n    left: 46%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.F {\r\n    left: 50%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.G {\r\n    left: 54%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.H {\r\n    left: 58%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.I {\r\n    left: 62%; position: absolute; bottom: 30%;\r\n}\r\n\r\n.J {\r\n    left: 66%; position: absolute; bottom: 30%;\r\n}\r\n\r\n/* .SecondLine  */\r\n\r\n.K {\r\n    left: 32%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.L {\r\n    left: 36%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.M {\r\n    left: 40%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.N {\r\n    left: 44%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.O {\r\n    left: 48%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.P {\r\n    left: 52%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.Q {\r\n    left: 56%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.R {\r\n    left: 60%; position: absolute; bottom: 20%;\r\n}\r\n\r\n.S {\r\n    left: 64%; position: absolute; bottom: 20%;\r\n}\r\n\r\n/* .ThirdLine */\r\n\r\n.T {\r\n    left: 36%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.U {\r\n    left: 40%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.V {\r\n    left: 44%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.W {\r\n    left: 48%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.X {\r\n    left: 52%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.Y {\r\n    left: 56%; position: absolute; bottom: 10%;\r\n}\r\n\r\n.Z {\r\n    left: 60%; position: absolute; bottom: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9jYXAtbGV0dGVyL2NhcC1sZXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUdBLGdCQUFnQjs7QUFFaEI7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5Qzs7QUFDQTtJQUNJLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXO0FBQzlDOztBQUNBO0lBQ0ksU0FBUyxFQUFFLGtCQUFrQixFQUFFLFdBQVc7QUFDOUM7O0FBQ0E7SUFDSSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsV0FBVztBQUM5QyIsImZpbGUiOiJzcmMvYXBwL2hhbmdtYW4vY2FwLWxldHRlci9jYXAtbGV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLkhpZGRlbiB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgd2lkdGg6IDQxcHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi8qIC5GaXJzdExpbmUgICovXHJcblxyXG4uQSB7XHJcbiAgICBsZWZ0OiAzMCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAzMCU7XHJcbn1cclxuLkIge1xyXG4gICAgbGVmdDogMzQlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMzAlO1xyXG59XHJcbi5DIHtcclxuICAgIGxlZnQ6IDM4JTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDMwJTtcclxufVxyXG4uRCB7XHJcbiAgICBsZWZ0OiA0MiU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAzMCU7XHJcbn1cclxuLkUge1xyXG4gICAgbGVmdDogNDYlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMzAlO1xyXG59XHJcbi5GIHtcclxuICAgIGxlZnQ6IDUwJTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDMwJTtcclxufVxyXG4uRyB7XHJcbiAgICBsZWZ0OiA1NCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAzMCU7XHJcbn1cclxuLkgge1xyXG4gICAgbGVmdDogNTglOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMzAlO1xyXG59XHJcbi5JIHtcclxuICAgIGxlZnQ6IDYyJTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDMwJTtcclxufVxyXG4uSiB7XHJcbiAgICBsZWZ0OiA2NiU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAzMCU7XHJcbn1cclxuXHJcbi8qIC5TZWNvbmRMaW5lICAqL1xyXG5cclxuLksge1xyXG4gICAgbGVmdDogMzIlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjAlO1xyXG59XHJcbi5MIHtcclxuICAgIGxlZnQ6IDM2JTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwJTtcclxufVxyXG4uTSB7XHJcbiAgICBsZWZ0OiA0MCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMCU7XHJcbn1cclxuLk4ge1xyXG4gICAgbGVmdDogNDQlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjAlO1xyXG59XHJcbi5PIHtcclxuICAgIGxlZnQ6IDQ4JTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwJTtcclxufVxyXG4uUCB7XHJcbiAgICBsZWZ0OiA1MiU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMCU7XHJcbn1cclxuLlEge1xyXG4gICAgbGVmdDogNTYlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMjAlO1xyXG59XHJcbi5SIHtcclxuICAgIGxlZnQ6IDYwJTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDIwJTtcclxufVxyXG4uUyB7XHJcbiAgICBsZWZ0OiA2NCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAyMCU7XHJcbn1cclxuXHJcbi8qIC5UaGlyZExpbmUgKi9cclxuXHJcbi5UIHtcclxuICAgIGxlZnQ6IDM2JTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDEwJTtcclxufVxyXG4uVSB7XHJcbiAgICBsZWZ0OiA0MCU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxMCU7XHJcbn1cclxuLlYge1xyXG4gICAgbGVmdDogNDQlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTAlO1xyXG59XHJcbi5XIHtcclxuICAgIGxlZnQ6IDQ4JTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDEwJTtcclxufVxyXG4uWCB7XHJcbiAgICBsZWZ0OiA1MiU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxMCU7XHJcbn1cclxuLlkge1xyXG4gICAgbGVmdDogNTYlOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTAlO1xyXG59XHJcbi5aIHtcclxuICAgIGxlZnQ6IDYwJTsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDEwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/hangman/cap-letter/cap-letter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hangman/cap-letter/cap-letter.component.ts ***!
  \************************************************************/
/*! exports provided: CapLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapLetterComponent", function() { return CapLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapLetterComponent = /** @class */ (function () {
    function CapLetterComponent() {
    }
    CapLetterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CapLetterComponent.prototype, "letter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CapLetterComponent.prototype, "display", void 0);
    CapLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cap-letter',
            template: __webpack_require__(/*! raw-loader!./cap-letter.component.html */ "./node_modules/raw-loader/index.js!./src/app/hangman/cap-letter/cap-letter.component.html"),
            styles: [__webpack_require__(/*! ./cap-letter.component.css */ "./src/app/hangman/cap-letter/cap-letter.component.css")]
        })
    ], CapLetterComponent);
    return CapLetterComponent;
}());



/***/ }),

/***/ "./src/app/hangman/hangman-img/hangman-img.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hangman/hangman-img/hangman-img.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.Hangman {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 5%;\r\n}\r\n\r\n.LoseOrWin {\r\n    position: absolute;\r\n    top: 10%;\r\n    right: 5%;\r\n}\r\n\r\n.Message {\r\n    position: absolute;\r\n    display: flex;\r\n    top: 30%;\r\n    right: 8%;\r\n    width: 100px;\r\n}\r\n\r\n.Win {\r\n    font-size: 50px;\r\n    color: rgb(142, 222, 150);\r\n}\r\n\r\n.Lose {\r\n    font-size: 50px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLWltZy9oYW5nbWFuLWltZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLWltZy9oYW5nbWFuLWltZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5IYW5nbWFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNSU7XHJcbn1cclxuXHJcbi5Mb3NlT3JXaW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICByaWdodDogNSU7XHJcbn1cclxuXHJcbi5NZXNzYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHJpZ2h0OiA4JTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLldpbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDE0MiwgMjIyLCAxNTApO1xyXG59XHJcblxyXG4uTG9zZSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/hangman/hangman-img/hangman-img.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hangman/hangman-img/hangman-img.component.ts ***!
  \**************************************************************/
/*! exports provided: HangmanImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanImgComponent", function() { return HangmanImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HangmanImgComponent = /** @class */ (function () {
    function HangmanImgComponent() {
    }
    HangmanImgComponent.prototype.ngOnInit = function () {
        this.imgSrc = [
            '../../../assets/images/hangman-photos/Hangman 1.png',
            '../../../assets/images/hangman-photos/Hangman 2.png',
            '../../../assets/images/hangman-photos/Hangman 3.png',
            '../../../assets/images/hangman-photos/Hangman 4.png',
            '../../../assets/images/hangman-photos/Hangman 5.png',
            '../../../assets/images/hangman-photos/Hangman 6.png',
            '../../../assets/images/hangman-photos/Hangman 7.png'
        ];
        this.winSrc = '../../../assets/images/hangman-photos/yes_symbol.png';
        this.loseSrc = '../../../assets/images/hangman-photos/shit_symbol.png';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HangmanImgComponent.prototype, "gameEnded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HangmanImgComponent.prototype, "strikes", void 0);
    HangmanImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman-img',
            template: __webpack_require__(/*! raw-loader!./hangman-img.component.html */ "./node_modules/raw-loader/index.js!./src/app/hangman/hangman-img/hangman-img.component.html"),
            styles: [__webpack_require__(/*! ./hangman-img.component.css */ "./src/app/hangman/hangman-img/hangman-img.component.css")]
        })
    ], HangmanImgComponent);
    return HangmanImgComponent;
}());



/***/ }),

/***/ "./src/app/hangman/hangman.component.css":
/*!***********************************************!*\
  !*** ./src/app/hangman/hangman.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 300px;\r\n    height: auto;\r\n}\r\n\r\n.Title {\r\n    position: absolute;\r\n    top: -18%;\r\n    left: 38%;\r\n}\r\n\r\n.HeadLine {\r\n    position: absolute;\r\n    color: white;\r\n    top: 65%;\r\n    left: 24%;\r\n    font-size: 35px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.Again{\r\n    position: absolute;\r\n    bottom: 10%;\r\n    right: 5%;\r\n    height: 80px;\r\n    width: 150px;\r\n    background-color: rgb(142, 222, 150);\r\n    border: 2px solid black;\r\n    border-radius: 10%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGFuZ21hbi9oYW5nbWFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uVGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTglO1xyXG4gICAgbGVmdDogMzglO1xyXG59XHJcblxyXG4uSGVhZExpbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiA2NSU7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5BZ2FpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMjIyLCAxNTApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/hangman/hangman.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hangman/hangman.component.ts ***!
  \**********************************************/
/*! exports provided: HangmanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanComponent", function() { return HangmanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");



var HangmanComponent = /** @class */ (function () {
    function HangmanComponent(dataService) {
        this.dataService = dataService;
        this.clueLetters = [];
        this.guessedLetters = [];
        this.betLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.stillInBank = {
            A: true, B: true, C: true, D: true,
            E: true, F: true, G: true, H: true,
            I: true, J: true, K: true, L: true,
            M: true, N: true, O: true, P: true,
            Q: true, R: true, S: true, T: true,
            U: true, V: true, W: true, X: true,
            Y: true, Z: true,
        };
    }
    HangmanComponent.prototype.ngOnInit = function () {
        this.startAgain();
    };
    HangmanComponent.prototype.clickOnLetter = function (letter) {
        if (!this.gameEnded && this.stillInBank[letter]) {
            this.stillInBank[letter] = false;
            if (this.movieName.includes(letter)) {
                this.guessedLetters.push(letter);
                this.gameEnded = this.checkWin();
            }
            else {
                this.strikes++;
                this.gameEnded = this.strikes > 5;
            }
        }
    };
    HangmanComponent.prototype.checkWin = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.movieName), _c = _b.next(); !_c.done; _c = _b.next()) {
                var letter = _c.value;
                if (!this.guessedLetters.includes(letter) && !this.clueLetters.includes(letter) && letter !== ' ') {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    HangmanComponent.prototype.chooseClueLetters = function () {
        var e_2, _a;
        var numOfLetter = this.movieName.length;
        var numOfCoosen = 0;
        var tempMovieName = this.movieName;
        var choosen;
        while (numOfCoosen < numOfLetter / 4) {
            choosen = tempMovieName.charAt(Math.floor(Math.random() * tempMovieName.length));
            try {
                for (var tempMovieName_1 = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](tempMovieName)), tempMovieName_1_1 = tempMovieName_1.next(); !tempMovieName_1_1.done; tempMovieName_1_1 = tempMovieName_1.next()) {
                    var i = tempMovieName_1_1.value;
                    if (i === choosen) {
                        tempMovieName = tempMovieName.slice(0, tempMovieName.indexOf(i)) + tempMovieName.slice(tempMovieName.indexOf(i) + 1);
                        numOfCoosen++;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (tempMovieName_1_1 && !tempMovieName_1_1.done && (_a = tempMovieName_1.return)) _a.call(tempMovieName_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.clueLetters.push(choosen);
            this.stillInBank[choosen] = false;
        }
    };
    HangmanComponent.prototype.startAgain = function () {
        var _this = this;
        this.gameEnded = false;
        this.clueLetters = [];
        this.guessedLetters = [];
        this.betLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.stillInBank = {
            A: true, B: true, C: true, D: true,
            E: true, F: true, G: true, H: true,
            I: true, J: true, K: true, L: true,
            M: true, N: true, O: true, P: true,
            Q: true, R: true, S: true, T: true,
            U: true, V: true, W: true, X: true,
            Y: true, Z: true,
        };
        this.dataService.getMovie()
            .subscribe(function (movie) {
            _this.movieName = movie.toUpperCase();
            _this.chooseClueLetters();
        });
        this.strikes = 0;
    };
    HangmanComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    HangmanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hangman',
            template: __webpack_require__(/*! raw-loader!./hangman.component.html */ "./node_modules/raw-loader/index.js!./src/app/hangman/hangman.component.html"),
            styles: [__webpack_require__(/*! ./hangman.component.css */ "./src/app/hangman/hangman.component.css")]
        })
    ], HangmanComponent);
    return HangmanComponent;
}());



/***/ }),

/***/ "./src/app/hangman/hangman.module.ts":
/*!*******************************************!*\
  !*** ./src/app/hangman/hangman.module.ts ***!
  \*******************************************/
/*! exports provided: HangmanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangmanModule", function() { return HangmanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hangman_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hangman.component */ "./src/app/hangman/hangman.component.ts");
/* harmony import */ var _cap_letter_cap_letter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cap-letter/cap-letter.component */ "./src/app/hangman/cap-letter/cap-letter.component.ts");
/* harmony import */ var _hangman_img_hangman_img_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hangman-img/hangman-img.component */ "./src/app/hangman/hangman-img/hangman-img.component.ts");
/* harmony import */ var _letters_to_display_letters_to_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letters-to-display/letters-to-display.component */ "./src/app/hangman/letters-to-display/letters-to-display.component.ts");
/* harmony import */ var _letters_to_display_single_letter_single_letter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letters-to-display/single-letter/single-letter.component */ "./src/app/hangman/letters-to-display/single-letter/single-letter.component.ts");








var HangmanModule = /** @class */ (function () {
    function HangmanModule() {
    }
    HangmanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"],
                _cap_letter_cap_letter_component__WEBPACK_IMPORTED_MODULE_4__["CapLetterComponent"],
                _hangman_img_hangman_img_component__WEBPACK_IMPORTED_MODULE_5__["HangmanImgComponent"],
                _letters_to_display_letters_to_display_component__WEBPACK_IMPORTED_MODULE_6__["BetLettersComponent"],
                _letters_to_display_single_letter_single_letter_component__WEBPACK_IMPORTED_MODULE_7__["SingleLetterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _hangman_component__WEBPACK_IMPORTED_MODULE_3__["HangmanComponent"]
            ],
            providers: [],
        })
    ], HangmanModule);
    return HangmanModule;
}());



/***/ }),

/***/ "./src/app/hangman/letters-to-display/letters-to-display.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/hangman/letters-to-display/letters-to-display.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    width: 54%;\r\n    top: 15%;\r\n    left: 23%;\r\n}\r\n\r\n.Word {\r\n    display: flex;\r\n}\r\n\r\n.Letter {\r\n    width: 45px;\r\n    height: 45px;\r\n    border-bottom: 6px solid grey;\r\n    margin: 3px;\r\n}\r\n\r\n.Space {\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9sZXR0ZXJzLXRvLWRpc3BsYXkvbGV0dGVycy10by1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oYW5nbWFuL2xldHRlcnMtdG8tZGlzcGxheS9sZXR0ZXJzLXRvLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDU0JTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbGVmdDogMjMlO1xyXG59XHJcblxyXG4uV29yZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uTGV0dGVyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIGdyZXk7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLlNwYWNlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/hangman/letters-to-display/letters-to-display.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/hangman/letters-to-display/letters-to-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: BetLettersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetLettersComponent", function() { return BetLettersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BetLettersComponent = /** @class */ (function () {
    function BetLettersComponent() {
        this.guessedLetters = [];
        this.movieNameByLetter = [];
    }
    Object.defineProperty(BetLettersComponent.prototype, "movieName", {
        get: function () {
            return this._movieName;
        },
        set: function (movieName) {
            var e_1, _a;
            if (movieName) {
                this._movieName = movieName;
                this.movieNameByLetter = [];
            }
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this._movieName.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var word = _c.value;
                    this.movieNameByLetter.push(word.split(''));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        },
        enumerable: true,
        configurable: true
    });
    BetLettersComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BetLettersComponent.prototype, "clueLetters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BetLettersComponent.prototype, "guessedLetters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BetLettersComponent.prototype, "movieName", null);
    BetLettersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-letters-to-display',
            template: __webpack_require__(/*! raw-loader!./letters-to-display.component.html */ "./node_modules/raw-loader/index.js!./src/app/hangman/letters-to-display/letters-to-display.component.html"),
            styles: [__webpack_require__(/*! ./letters-to-display.component.css */ "./src/app/hangman/letters-to-display/letters-to-display.component.css")]
        })
    ], BetLettersComponent);
    return BetLettersComponent;
}());



/***/ }),

/***/ "./src/app/hangman/letters-to-display/single-letter/single-letter.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/hangman/letters-to-display/single-letter/single-letter.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n    margin: 3px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nh1 {\r\n    height: 20px;\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n.UnderLine {\r\n    width: 40px;\r\n    height: 4px;\r\n    background-color: black;\r\n}\r\n.Guessed {\r\n    color: blue;\r\n}\r\n.UnderLineGuessed {\r\n    width: 40px;\r\n    height: 4px;\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZ21hbi9sZXR0ZXJzLXRvLWRpc3BsYXkvc2luZ2xlLWxldHRlci9zaW5nbGUtbGV0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hhbmdtYW4vbGV0dGVycy10by1kaXNwbGF5L3NpbmdsZS1sZXR0ZXIvc2luZ2xlLWxldHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5oMSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLlVuZGVyTGluZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLkd1ZXNzZWQge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuLlVuZGVyTGluZUd1ZXNzZWQge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hangman/letters-to-display/single-letter/single-letter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/hangman/letters-to-display/single-letter/single-letter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SingleLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleLetterComponent", function() { return SingleLetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleLetterComponent = /** @class */ (function () {
    function SingleLetterComponent() {
    }
    SingleLetterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SingleLetterComponent.prototype, "letter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SingleLetterComponent.prototype, "isGuessed", void 0);
    SingleLetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-letter',
            template: __webpack_require__(/*! raw-loader!./single-letter.component.html */ "./node_modules/raw-loader/index.js!./src/app/hangman/letters-to-display/single-letter/single-letter.component.html"),
            styles: [__webpack_require__(/*! ./single-letter.component.css */ "./src/app/hangman/letters-to-display/single-letter/single-letter.component.css")]
        })
    ], SingleLetterComponent);
    return SingleLetterComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Tal Kanteman\workspace\Angular\Hangman\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map