webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" [ngClass]=\"isActive ? 'toggled':'' \">\n\n        <!-- Nav -->\n        \n\n        <!--MAT TOOLBAR-->\n\n        <mat-toolbar color=\"primary\">\n          <mat-toolbar-row>\n              <button mat-button [routerLink]=\"['']\">   FFUF Manila   </button>  \n            \n            <span flex style=\"flex: 1 1 auto;\"> </span>\n            <button mat-button color=\"info\" [routerLink]=\"['new']\"> New </button>\n            <button mat-button color=\"info\" [routerLink]=\"['new/genre']\"> Genre </button>\n            <button mat-button color=\"warning\" [routerLink]=\"['login']\"> Login</button> \n             <span flex > &nbsp;&nbsp;&nbsp;&nbsp;</span>   \n        \n            <span style=\"text-align: right; width:320px;\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\n                <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" mat-button type=\"submit\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                  </button>\n                </div>\n              </div>\n            </span>\n          </mat-toolbar-row>\n        </mat-toolbar>\n        <!-- Sidebar -->\n        <div id=\"sidebar-wrapper\"  >\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-/brand\">\n                    <a href=\"#\">\n                      Register\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">Login</a>\n                </li>\n                <li>\n                    <a href=\"#\">Overview</a>\n                </li>\n            </ul>\n             \n        </div> \n        <!-- /#sidebar-wrapper -->\n        \n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\">\n\n            <div class=\"container-fluid\">\n                <h3>  \n                  <span>    \n                    \n                    <button (click)=\"isActive = !isActive;\" class=\"md-icon-button md-primary\" mat-raised-button color=\"accent\" id=\"menu-toggle\"><i class=\"material-icons\">menu</i></button>\n                  </span>Rio's Book Case\n                </h3>\n               <br><br><br>\n                <div class=\"main\">\n                    <div class=\"row\">\n                      <router-outlet></router-outlet>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n        <!-- /#page-content-wrapper -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.isActive = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__ = __webpack_require__("./src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_book_new_book_component__ = __webpack_require__("./src/app/new-book/new-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_book_list_book_component__ = __webpack_require__("./src/app/list-book/list-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_genre_list_genre_component__ = __webpack_require__("./src/app/list-genre/list-genre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_section_list_section_component__ = __webpack_require__("./src/app/list-section/list-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__book_card_book_card_component__ = __webpack_require__("./src/app/book-card/book-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__books_service__ = __webpack_require__("./src/app/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__new_genre_new_genre_component__ = __webpack_require__("./src/app/new-genre/new-genre.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_12__new_book_new_book_component__["a" /* NewBookComponent */]
    },
    {
        path: 'new/genre',
        component: __WEBPACK_IMPORTED_MODULE_19__new_genre_new_genre_component__["a" /* NewGenreComponent */]
    },
    {
        path: 'overview/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__["a" /* OverviewComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_book_new_book_component__["a" /* NewBookComponent */],
                __WEBPACK_IMPORTED_MODULE_13__list_book_list_book_component__["a" /* ListBookComponent */],
                __WEBPACK_IMPORTED_MODULE_14__list_genre_list_genre_component__["a" /* ListGenreComponent */],
                __WEBPACK_IMPORTED_MODULE_15__list_section_list_section_component__["a" /* ListSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__book_card_book_card_component__["a" /* BookCardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__new_genre_new_genre_component__["a" /* NewGenreComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_18__books_service__["a" /* BooksService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-card/book-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-card/book-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<div class=\"col-sm-4\" *ngFor=\"let book of books\"  id=\"list\" [@listAnimation]=\"books.length\" > \n\t<div class=\"card box\">\n\t\t<br>\n\t\t<img class=\"img-book card-img-top center-block\" src=\"{{book.img}}\" style=\"border-radius: 50%;\">\n\t\t<div class=\"card-body\">\n\t    \t<h3 class=\"card-title\"><a [routerLink]=\"['overview', book.id]\">{{book.title}}</a></h3>\n\t\t   \t\t <p class=\"card-text\">{{book.desc | slice:0:180}}\n\t\t    \t<br> <button mat-raised-button color=\"primary\" data-id=\"{{book.id}}\">Borrow</button></p>\n\t\t</div>\n\t</div>\n <br> <br>\t    \n </div>\n\n \t"

/***/ }),

/***/ "./src/app/book-card/book-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookCardComponent = /** @class */ (function () {
    function BookCardComponent() {
        this.books = [
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            },
            {
                title: "What did the cheese say when it looked in the mirror?",
                id: 1,
                desc: "Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read.Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. Desc that make you read. Repeatedly in circle. So read. ",
                img: "https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930",
                isborrowed: 1
            }
        ];
    }
    BookCardComponent.prototype.ngOnInit = function () {
    };
    BookCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-card',
            template: __webpack_require__("./src/app/book-card/book-card.component.html"),
            styles: [__webpack_require__("./src/app/book-card/book-card.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .2 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])('.box', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* stagger */])('.40s', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1.3s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .2, transform: 'translateY(65%)' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .7, transform: 'translateY(90px)' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .8, transform: 'translateY(0)' }),
                            ]))
                        ]), { optional: false }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])('.card-title', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* stagger */])('.60s', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1.5s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .2, transform: 'translateY(65%)' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .7, transform: 'translateY(30%)' }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .8, transform: 'translateY(0)' }),
                            ]))
                        ]), { optional: false })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BookCardComponent);
    return BookCardComponent;
}());



/***/ }),

/***/ "./src/app/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksService = /** @class */ (function () {
    function BooksService() {
    }
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-book-card></app-book-card> "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* trigger */])('goals', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* stagger */])('400ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.8s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-book/list-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-book/list-book.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list-book works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-book/list-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListBookComponent = /** @class */ (function () {
    function ListBookComponent() {
    }
    ListBookComponent.prototype.ngOnInit = function () {
    };
    ListBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-book',
            template: __webpack_require__("./src/app/list-book/list-book.component.html"),
            styles: [__webpack_require__("./src/app/list-book/list-book.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListBookComponent);
    return ListBookComponent;
}());



/***/ }),

/***/ "./src/app/list-genre/list-genre.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-genre/list-genre.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list-genre works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-genre/list-genre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGenreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListGenreComponent = /** @class */ (function () {
    function ListGenreComponent() {
    }
    ListGenreComponent.prototype.ngOnInit = function () {
    };
    ListGenreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-genre',
            template: __webpack_require__("./src/app/list-genre/list-genre.component.html"),
            styles: [__webpack_require__("./src/app/list-genre/list-genre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListGenreComponent);
    return ListGenreComponent;
}());



/***/ }),

/***/ "./src/app/list-section/list-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-section/list-section.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list-section works!\n</p>\n"

/***/ }),

/***/ "./src/app/list-section/list-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListSectionComponent = /** @class */ (function () {
    function ListSectionComponent() {
    }
    ListSectionComponent.prototype.ngOnInit = function () {
    };
    ListSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-section',
            template: __webpack_require__("./src/app/list-section/list-section.component.html"),
            styles: [__webpack_require__("./src/app/list-section/list-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListSectionComponent);
    return ListSectionComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " \n  <div class=\"form-row\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Admin\">\n    </div>\n   \n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\">\n  </div>\n   \n    \n  <button mat-raised-button class=\"btn btn-primary\">Submit</button>\n "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-book/new-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-book/new-book.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\"> \n     <div class=\"col-md-12\"> \n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"title\">Title</label>\n              <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"title\">\n            </div>\n           \n          </div>\n    </div>\n\n    <div class=\"col-md-12\">\n       <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <label for=\"author\">Author</label>\n            <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"Charles Darwin\">\n          </div>\n    </div>\n    </div>\n    <div class=\"col-md-12\">\n       <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <label for=\"description\">Description</label>\n            <textarea  class=\"form-control\"  style=\"min-height:400px;\" id=\"description\" placeholder=\"Tell us why would anyone read this?\">\n            \t\n\n            </textarea>\n          </div>\n          </div>\n    </div>\n    <div class=\"col-md-12\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12 \">\n              <label for=\"genre\">Genre</label>\n          \t\t<select id=\"genre\" class=\"form-control form-control-lg\">\n          \t\t  <option>History</option>\n          \t\t  <option>Drama</option>\n          \t\t  <option>Horror</option>\n          \t\t  <option>Sci-fi</option>\n          \t\t</select>\n            </div>\n            </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                 \t<label for=\"librarysec\">Library Section</label>\n              \t\t<select id=\"librarysec\" class=\"form-control form-control-lg\">\n              \t\t  <option>History</option>\n              \t\t  <option>Drama</option>\n              \t\t  <option>Horror</option>\n              \t\t  <option>Sci-fi</option>\n              \t\t</select>\n                  <br><br>\n                 <button mat-raised-button color=\"primary\" >Submit</button>\n                </div>\n            </div>\n         \n             \n    </div>\n  \n</div>\n "

/***/ }),

/***/ "./src/app/new-book/new-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_service__ = __webpack_require__("./src/app/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewBookComponent = /** @class */ (function () {
    //  books: Obj[];
    //  regModel: Book;
    //  showNew: Boolean = false; 
    function NewBookComponent(bookservice) {
        // fetch books
        this.bookservice = bookservice;
    }
    NewBookComponent.prototype.ngOnInit = function () {
    };
    NewBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-book',
            template: __webpack_require__("./src/app/new-book/new-book.component.html"),
            styles: [__webpack_require__("./src/app/new-book/new-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_service__["a" /* BooksService */]])
    ], NewBookComponent);
    return NewBookComponent;
}());



/***/ }),

/***/ "./src/app/new-genre/new-genre.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-genre/new-genre.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\"> \n     <div class=\"col-md-12\"> \n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"genre\">Name of Genre</label>\n              <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"genre\">\n            </div>\n             <br><br>\n                 <button mat-raised-button color=\"primary\" >Submit</button>\n          </div>\n    </div>\n\n    \n             \n</div>\n  \n \n "

/***/ }),

/***/ "./src/app/new-genre/new-genre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGenreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewGenreComponent = /** @class */ (function () {
    function NewGenreComponent() {
    }
    NewGenreComponent.prototype.ngOnInit = function () {
    };
    NewGenreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-genre',
            template: __webpack_require__("./src/app/new-genre/new-genre.component.html"),
            styles: [__webpack_require__("./src/app/new-genre/new-genre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewGenreComponent);
    return NewGenreComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-6\"> \n    <img class=\"img-book\" src=\"https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930\">\n    <h3>Title of this book</h3>\n    <p>Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc \n    <br> \n        <button class=\"btn-borrow md-raised\" mat-raised-button color=\"primary\">Borrow</button>\n        <button class=\"btn-overview md-raised\" mat-raised-button color=\"primary\">Overview</button>\n        <button class=\"btn-related md-raised\" mat-raised-button color=\"primary\">Related Books</button>\n\n    </p>\n</div>  "

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map