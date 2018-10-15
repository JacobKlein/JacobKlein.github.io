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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // Angular
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // Portfolio
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_4__["PortfolioModule"]
            ],
            declarations: [
                // App
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/portfolio/component/date-range.component.html":
/*!***************************************************************!*\
  !*** ./src/app/portfolio/component/date-range.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\r\n  <span>(</span>\r\n  <span *ngIf=\"start\">{{ start | date : 'LLL yyyy' }} - </span>\r\n  <span *ngIf=\"end\">{{ end | date : 'LLL yyyy' }}</span>\r\n  <span *ngIf=\"!end\">Present</span>\r\n  <span>)</span>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/portfolio/component/date-range.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/portfolio/component/date-range.component.ts ***!
  \*************************************************************/
/*! exports provided: DateRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeComponent", function() { return DateRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateRangeComponent = /** @class */ (function () {
    function DateRangeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DateRangeComponent.prototype, "start", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DateRangeComponent.prototype, "end", void 0);
    DateRangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'date-range',
            template: __webpack_require__(/*! ./date-range.component.html */ "./src/app/portfolio/component/date-range.component.html"),
        })
    ], DateRangeComponent);
    return DateRangeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\r\n  #portfolio-container {\r\n    padding-top: 0;\r\n    padding-left: 17rem\r\n  }\r\n}\r\n\r\n.basics-data {\r\n  padding-right: 5px;\r\n}\r\n\r\n.work-highlights {\r\n  margin-left: -15px;\r\n}\r\n\r\n.subheading {\r\n  color: #868e96;\r\n}\r\n\r\n.basics-center {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.navbar-collapse li {\r\n  cursor: pointer;\r\n}\r\n\r\n/*===================================== Blue =========================================== */\r\n\r\n.bg-blue {\r\n  background-color: #3A66A7 !important\r\n}\r\n\r\n.text-blue {\r\n  color: #3A66A7 !important\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolio-container\">\r\n  <nav id=\"sideNav\"\r\n       class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\"\r\n       [class.bg-blue]=\"color == 'blue'\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" (click)=\"scrollTo('portfolio-container')\">\r\n      <span class=\"d-none d-lg-block\">\r\n          <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"assets/img/profile.jpg\" alt=\"Profile\">\r\n        </span>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"scrollTo('about')\">About</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"resume.work && resume.work.length > 0\">\r\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"scrollTo('experience')\">Experience</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"resume.education && resume.education.length > 0\">\r\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"scrollTo('education')\">Education</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"resume.skills && resume.skills.length > 0\">\r\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"scrollTo('skills')\">Skills</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"scrollTo('portfolio')\">Portfolio</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"container-fluid p-0\">\r\n    <!--Basics-->\r\n    <section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\r\n      <div class=\"my-auto\">\r\n        <h1 class=\"mb-0\">\r\n          {{ resume.basics.firstName }}\r\n          <span class=\"text-primary\" [class.text-blue]=\"color == 'blue'\">{{ resume.basics.lastName }}</span>\r\n        </h1>\r\n        <div class=\"subheading mb-5\">\r\n          <!--Title-->\r\n          <span *ngIf=\"resume.basics.title\" class=\"basics-data\">\r\n            {{ resume.basics.title }}\r\n          </span>\r\n          <!--Email-->\r\n          <span *ngIf=\"resume.basics.email\" class=\"basics-data\">\r\n            <a [attr.href]=\"'mailto:' + resume.basics.email\" [class.text-blue]=\"color == 'blue'\">\r\n              {{ resume.basics.email }}\r\n            </a>\r\n          </span>\r\n        </div>\r\n        <p class=\"mb-5\" *ngIf=\"resume.basics.summary\">{{ resume.basics.website }}</p>\r\n        <p *ngIf=\"resume.basics.summary\" class=\"mb-5\">\r\n          {{ resume.basics.summary}}\r\n        </p>\r\n        <!--Icons-->\r\n        <div class=\"list-social-icons\">\r\n          <a href=\"https://www.linkedin.com/in/jacob-klein-8062a0a1\">\r\n            <i class=\"fab fa-linkedin-in\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Work -->\r\n    <section *ngIf=\"resume.work && resume.work.length > 0\"\r\n             class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\r\n      <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">Experience</h2>\r\n        <div *ngFor=\"let work of resume.work\" class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n          <div class=\"resume-content mr-auto\">\r\n            <h3 class=\"mb-0\">{{ work.position }}</h3>\r\n            <div class=\"subheading\" [class.mb-3]=\"!work.tags || work.tags.length == 0\">\r\n              {{ work.company }}\r\n              <date-range [start]=\"work.startDate\" [end]=\"work.endDate\"></date-range>\r\n            </div>\r\n            <div *ngIf=\"work.tags && work.tags.length > 0\">\r\n              <i>{{ work.tags.join(', ') }}</i>\r\n            </div>\r\n            <p *ngIf=\"work.summary\">{{ work.summary }}</p>\r\n            <ul *ngIf=\"work.highlights && work.highlights.length > 0\" class=\"mb-0 pl work-highlights\">\r\n              <li *ngFor=\"let highlight of work.highlights\">{{ highlight }}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"portfolio\">\r\n      <div class=\"my-auto\">\r\n        <h2 class=\"mb-5\">Portfolio</h2>\r\n        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\r\n          <div class=\"resume-content mr-auto\">\r\n            <h3 class=\"mb-0\">Under Construction</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.data */ "./src/app/portfolio/portfolio.data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(titleService) {
        this.resume = _portfolio_data__WEBPACK_IMPORTED_MODULE_1__["PortfolioData"].generate();
        this.color = _portfolio_data__WEBPACK_IMPORTED_MODULE_1__["PortfolioData"].getColor();
        titleService.setTitle(this.resume.basics.name);
    }
    PortfolioComponent.prototype.scrollTo = function (element) {
        document.getElementById(element).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        return false;
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'portfolio-component',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/portfolio/template.component.css"), __webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.data.ts":
/*!*********************************************!*\
  !*** ./src/app/portfolio/portfolio.data.ts ***!
  \*********************************************/
/*! exports provided: PortfolioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioData", function() { return PortfolioData; });
/* harmony import */ var _shared_model_resume_resume_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/model/resume/resume.model */ "./src/app/shared/model/resume/resume.model.ts");
/* harmony import */ var _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model/resume/basics.model */ "./src/app/shared/model/resume/basics.model.ts");
/* harmony import */ var _shared_model_resume_work_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/resume/work.model */ "./src/app/shared/model/resume/work.model.ts");



var PortfolioData = /** @class */ (function () {
    function PortfolioData() {
    }
    PortfolioData.getColor = function () {
        // blue, orange
        return 'blue';
    };
    PortfolioData.generate = function () {
        var resume = new _shared_model_resume_resume_model__WEBPACK_IMPORTED_MODULE_0__["Resume"]();
        resume.basics = PortfolioData.createBasics();
        resume.work = PortfolioData.createWork();
        return resume;
    };
    PortfolioData.createBasics = function () {
        var basics = new _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"]();
        _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"].setName(basics, 'Jacob', 'Klein');
        _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"].setTitle(basics, 'Brisbane Web Developer');
        _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"].setCity(basics, 'Brisbane');
        _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"].setWebsite(basics, 'http://jacobklein.github.io');
        _shared_model_resume_basics_model__WEBPACK_IMPORTED_MODULE_1__["Basics"].setEmail(basics, 'jacob23791@gmail.com');
        return basics;
    };
    PortfolioData.createWork = function () {
        return [
            PortfolioData.createTactiv(),
            PortfolioData.createUq()
        ];
    };
    PortfolioData.createTactiv = function () {
        var tactiv = new _shared_model_resume_work_model__WEBPACK_IMPORTED_MODULE_2__["Work"]();
        tactiv.company = 'Tactiv';
        tactiv.position = 'Software Developer';
        tactiv.startDate = '2016-01-26';
        tactiv.highlights = [
            'Developed and maintained code across the entire software stack in an agile team environment',
            'Helped create a highly configurable data template engine that handled custom data, forms, workflows and many other features',
            'Implemented document management that processed uploading, version management, metadata and remoting authoring',
            'Designed and implemented customisable document generation that gathered data from multiple sources with formatting, sorting and various other configurations',
            'Recreated workflow user interface that incorporates modular event-driven components with database configured steps and forms',
            'Collaborated with business analysts and UX designers to implement various UI widgets and components to capture user input'
        ];
        tactiv.tags = ['Java', 'Spring Boot', 'MySql', 'Angular 2/4/6+', 'Micro services', 'REST API', 'Git'];
        return tactiv;
    };
    PortfolioData.createUq = function () {
        var uq = new _shared_model_resume_work_model__WEBPACK_IMPORTED_MODULE_2__["Work"]();
        uq.company = 'University of Queensland';
        uq.position = 'Bachelor of Information Technology, Bachelor of Commerce';
        uq.startDate = '2011-07-01';
        uq.endDate = '2015-11-30';
        uq.highlights = [
            'Worked with a wide range of groups across multiple schools to achieve desired outcomes',
            'Developed proficiencies over several languages while exploring software methodologies and practices'
        ];
        uq.tags = ['Java', 'PHP', 'Python', 'C', 'MySQL', 'JavaScript'];
        return uq;
    };
    return PortfolioData;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: components, PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _component_date_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/date-range.component */ "./src/app/portfolio/component/date-range.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var components = [
    _component_date_range_component__WEBPACK_IMPORTED_MODULE_4__["DateRangeComponent"],
    _portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
];
var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // Angular
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                components
            ],
            exports: [
                components
            ]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/portfolio/template.component.css":
/*!**************************************************!*\
  !*** ./src/app/portfolio/template.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Open Sans', serif;\r\n  padding-top: 54px;\r\n  color: #868e96\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  body {\r\n    padding-top: 0;\r\n    padding-left: 17rem\r\n  }\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Saira Extra Condensed', serif;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  color: #343a40\r\n}\r\n\r\nh1 {\r\n  font-size: 6rem;\r\n  line-height: 5.5rem\r\n}\r\n\r\nh2 {\r\n  font-size: 3.5rem\r\n}\r\n\r\n.subheading {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  font-family: 'Saira Extra Condensed', serif;\r\n  font-size: 1.35rem\r\n}\r\n\r\n.list-social-icons a {\r\n  display: inline-block;\r\n  height: 3.5rem;\r\n  width: 3.5rem;\r\n  background-color: #495057;\r\n  color: #fff !important;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  line-height: 3.5rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.list-social-icons a:hover {\r\n  color: #bd5d38\r\n}\r\n\r\n.list-social-icons a .fa-lg {\r\n  font-size: 1.75rem\r\n}\r\n\r\n.list-icons {\r\n  font-size: 3rem\r\n}\r\n\r\n.list-icons .list-inline-item i:hover {\r\n  color: #bd5d38\r\n}\r\n\r\n#sideNav .navbar-nav .nav-item .nav-link {\r\n  font-weight: 600;\r\n  text-transform: uppercase\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #sideNav {\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 17rem;\r\n    height: 100vh\r\n  }\r\n\r\n  #sideNav .navbar-brand {\r\n    display: flex;\r\n    margin: auto auto 0;\r\n    padding: .5rem\r\n  }\r\n\r\n  #sideNav .navbar-brand .img-profile {\r\n    max-width: 10rem;\r\n    max-height: 10rem;\r\n    border: .5rem solid rgba(255, 255, 255, .2)\r\n  }\r\n\r\n  #sideNav .navbar-collapse {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    flex-grow: 0;\r\n    width: 100%;\r\n    margin-bottom: auto\r\n  }\r\n\r\n  #sideNav .navbar-collapse .navbar-nav {\r\n    flex-direction: column;\r\n    width: 100%\r\n  }\r\n\r\n  #sideNav .navbar-collapse .navbar-nav .nav-item {\r\n    display: block\r\n  }\r\n\r\n  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {\r\n    display: block\r\n  }\r\n}\r\n\r\nsection.resume-section {\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding-top: 5rem !important;\r\n  padding-bottom: 5rem !important\r\n}\r\n\r\nsection.resume-section .resume-item .resume-date {\r\n  min-width: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section.resume-section {\r\n    min-height: 100vh\r\n  }\r\n\r\n  section.resume-section .resume-item .resume-date {\r\n    min-width: 18rem\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  section.resume-section {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important\r\n  }\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #bd5d38 !important\r\n}\r\n\r\n.text-primary {\r\n  color: #bd5d38 !important\r\n}\r\n\r\na {\r\n  color: #bd5d38\r\n}\r\n\r\na:active, a:focus, a:hover {\r\n  color: #824027\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/model/resume/basics.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/model/resume/basics.model.ts ***!
  \*****************************************************/
/*! exports provided: Basics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basics", function() { return Basics; });
/* harmony import */ var _location_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.model */ "./src/app/shared/model/resume/location.model.ts");

var Basics = /** @class */ (function () {
    function Basics() {
    }
    Basics.setName = function (data, firstName, lastName) {
        if (lastName === void 0) { lastName = ''; }
        data.firstName = firstName;
        data.lastName = lastName;
        data.name = firstName + (lastName != null && lastName.length > 0 ? ' ' + lastName : '');
    };
    Basics.setTitle = function (data, title) {
        data.title = title;
    };
    Basics.setCity = function (basics, city) {
        if (basics.location == null) {
            basics.location = new _location_model__WEBPACK_IMPORTED_MODULE_0__["Location"]();
        }
        basics.location.city = city;
    };
    Basics.setWebsite = function (basics, website) {
        basics.website = website;
    };
    Basics.setEmail = function (basics, email) {
        basics.email = email;
    };
    return Basics;
}());



/***/ }),

/***/ "./src/app/shared/model/resume/location.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/model/resume/location.model.ts ***!
  \*******************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/shared/model/resume/resume.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/model/resume/resume.model.ts ***!
  \*****************************************************/
/*! exports provided: Resume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
var Resume = /** @class */ (function () {
    function Resume() {
    }
    return Resume;
}());



/***/ }),

/***/ "./src/app/shared/model/resume/work.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/model/resume/work.model.ts ***!
  \***************************************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
var Work = /** @class */ (function () {
    function Work() {
    }
    return Work;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Jacob\Projects\portfolio\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map