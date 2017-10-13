webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Welcome to MicroBloggos</h1>\n  <h3><a routerLink=\"/current_user\">{{ username }}</a></h3>\n  <div *ngIf=\"username\">\n    <!-- <div id=\"nav\"> -->\n      <button (click)=\"logout()\">Logout</button>\n    <!-- </div> -->\n    <a routerLink=\"/users\">Users</a>\n    <a routerLink=\"/new_post\">New post</a>\n    <a routerLink=\"/followed\">My followed twit</a>\n      <input type=\"text\" placeholder=\"search by hashtags\"\n      [(ngModel)]=\"searchBar\">\n      <button type=\"submit\" (click)=\"onSubmit()\">Search</button>\n      {{ err }}\n  </div>\n</header>\n<div id=\"thread\">\n  <h3>Last twits</h3>\n  <table *ngFor=\"let post of posts; let i=index\">\n    <div *ngIf=\"i<=5\">\n      <tr><h4>{{ post.title}}</h4><i> by {{ post.author }}</i></tr>\n      <tr>{{ post.content | slice:0:100}}<i> {{ post.date }}</i></tr>\n    </div>\n  </table>\n</div>\n\n<div id=\"router-outlet\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = AppComponent_1 = (function () {
    function AppComponent(_dataService, cookieService, router) {
        var _this = this;
        this._dataService = _dataService;
        this.cookieService = cookieService;
        this.router = router;
        this.searchBar = "";
        this.searchByHashtags = "";
        this.err = "";
        this._dataService.getLastPosts()
            .subscribe(function (res) { return _this.posts = res; });
        AppComponent_1.updatePosts.subscribe(function (res) {
            _this._dataService.getLastPosts()
                .subscribe(function (res) { return _this.posts = res; });
        });
        AppComponent_1.updateUsername.subscribe(function (res) {
            _this.username = localStorage.getItem('username');
        });
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
        }
    }
    AppComponent.prototype.logout = function () {
        this.cookieService.delete('token');
        localStorage.removeItem('username');
        this.username = "";
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.searchBar != "") {
            this._dataService.request = { hashtag: this.searchBar };
            this._dataService.getPostsByHash()
                .subscribe(function (res) {
                _this.searchByHashtags = res;
                if ($("#results")) {
                    $("#results").remove();
                }
                $("header").after("\n          <div id=\"results\">\n          <h2>Results</h2>\n            <table>\n              <thead>\n                <tr>\n                  <th>Users</th>\n                  <th>Twits</th>\n                  <th>Date</th>\n                </tr>\n              </thead>\n              <tbody id=\"twits\">\n\n              </tbody>\n            </table>\n            <button type=\"button\" id=\"stop\">Quit</button>\n          </div>\n          <script>\n            $(\"#stop\").click(function(){\n              $(\"#results\").hide();\n              $(\"#router-outlet\").show();\n            })\n          </script>\n        ");
                res.forEach(function (twit) {
                    $("#twits").append("<tr><td>" + twit.author + "</td><td>" + twit.content + "</td><td>" + twit.date + "</td></tr>");
                });
                $("#router-outlet").hide();
            }, function (error) {
                alert("No twit found");
            });
        }
    };
    AppComponent.prototype.stop = function () {
        $("#results").hide();
        $("#router-outlet").show();
    };
    return AppComponent;
}());
AppComponent.updatePosts = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
AppComponent.updateUsername = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
AppComponent = AppComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var AppComponent_1, _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__showposts_showposts_component__ = __webpack_require__("../../../../../src/app/showposts/showposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__followed_followed_component__ = __webpack_require__("../../../../../src/app/followed/followed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__current_user_current_user_component__ = __webpack_require__("../../../../../src/app/current-user/current-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/edit-post/edit-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__posts_posts_component__["a" /* PostsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__showposts_showposts_component__["a" /* ShowpostsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__followed_followed_component__["a" /* FollowedComponent */],
            __WEBPACK_IMPORTED_MODULE_15__current_user_current_user_component__["a" /* CurrentUserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__edit_post_edit_post_component__["a" /* EditPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
                { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
                { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__users_users_component__["a" /* UsersComponent */] },
                { path: 'current_user', component: __WEBPACK_IMPORTED_MODULE_15__current_user_current_user_component__["a" /* CurrentUserComponent */] },
                { path: 'show_posts/:author', component: __WEBPACK_IMPORTED_MODULE_13__showposts_showposts_component__["a" /* ShowpostsComponent */] },
                { path: 'new_post', component: __WEBPACK_IMPORTED_MODULE_12__posts_posts_component__["a" /* PostsComponent */] },
                { path: 'edit_post/:id', component: __WEBPACK_IMPORTED_MODULE_16__edit_post_edit_post_component__["a" /* EditPostComponent */] },
                { path: 'followed', component: __WEBPACK_IMPORTED_MODULE_14__followed_followed_component__["a" /* FollowedComponent */] }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/current-user/current-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/current-user/current-user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My twits</h2>\n<table id=\"twits\">\n  <thead>\n    <tr>\n      <th>Twits</th>\n      <th>Date</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let twit of posts\" id=\"{{twit._id}}\">\n      <td>{{ twit.content }}</td>\n      <td>{{ twit.date }}</td>\n      <td>\n        <a [routerLink]='[\"/edit_post\", twit._id]'>edit</a>\n        <!-- <a (click)=\"edit(twit._id)\">edit</a> -->\n        <button type=\"button\" (click)=\"delete(twit._id)\">delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<table id=\"followers\">\n  <thead>\n    <tr>\n      <th>Followers</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of followers\" id=\"{{ user }}follower\">\n      <td>{{ user }}</td>\n      <td>\n        <a routerLink=\"/edit_post\">edit</a>\n        <!-- <button type=\"button\" (click)=\"delete(twit._id)\">delete</button> -->\n      </td>\n    </tr>\n  </tbody>\n</table>\n<table id=\"follow\">\n  <thead>\n    <tr>\n      <th>Users you're following</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of followed\" id=\"{{ user }}followed\">\n      <td>{{ user }}</td>\n      <td>\n        <button type=\"button\" (click)=\"unfollow(user)\">unfollow</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/current-user/current-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentUserComponent = (function () {
    function CurrentUserComponent(_dataService, app, router) {
        var _this = this;
        this._dataService = _dataService;
        this.app = app;
        this.router = router;
        if (!localStorage.getItem("username")) {
            this.router.navigate(['/login']);
        }
        this._dataService.request = { username: localStorage.getItem("username") };
        this._dataService.getCurrentUserPosts()
            .subscribe(function (res) {
            _this.posts = res;
        }, function (error) {
            console.log(error);
        });
        this._dataService.getFollowers()
            .subscribe(function (res) {
            console.log(res);
            _this.followers = res.followedBy;
            _this.followed = res.follow;
        }, function (error) {
            console.log(error);
        });
    }
    // edit(id){
    //   $("#"+id).after(`
    //     <tr id=id+"edit">
    //       <td>
    //         <input type="textarea" required>
    //       </td>
    //       <td>
    //         <button type="submit">Submit</button>
    //       </td>
    //       <td>
    //         <button type="submit">Cancel</button>
    //       </td>
    //     </tr>
    //   `)
    // }
    CurrentUserComponent.prototype.delete = function (id) {
        this._dataService.request = id;
        this._dataService.deletePost()
            .subscribe(function (res) {
            console.log(res);
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */].updatePosts.next(true);
            $("#" + id).remove();
        }, function (error) {
            console.log(error);
        });
    };
    CurrentUserComponent.prototype.unfollow = function (username) {
        this._dataService.request = { username: username, follower: localStorage.getItem("username") };
        this._dataService.unfollow()
            .subscribe(function (res) {
            console.log(res);
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */].updatePosts.next(true);
            $("#" + username + "followed").remove();
        }, function (error) {
            console.log(error);
        });
    };
    CurrentUserComponent.prototype.ngOnInit = function () {
    };
    return CurrentUserComponent;
}());
CurrentUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-current-user',
        template: __webpack_require__("../../../../../src/app/current-user/current-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/current-user/current-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CurrentUserComponent);

var _a, _b, _c;
//# sourceMappingURL=current-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http, options) {
        this._http = _http;
        this.options = options;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/api/users")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.postUsers = function () {
        var _this = this;
        return this._http.post("/api/register", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.login = function () {
        var _this = this;
        return this._http.post("/api/login", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.newPost = function () {
        var _this = this;
        return this._http.post("/api/new_post", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.deletePost = function () {
        var _this = this;
        return this._http.delete("/api/delete_post/" + this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getPosts = function () {
        var _this = this;
        return this._http.get("/api/get_posts/" + this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getLastPosts = function () {
        var _this = this;
        return this._http.get("/api/get_last_posts")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.follow = function () {
        var _this = this;
        return this._http.post("/api/follow", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.unfollow = function () {
        var _this = this;
        return this._http.post("/api/unfollow", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getFollowedPosts = function () {
        var _this = this;
        return this._http.post("/api/get_followed_post", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getPostsByHash = function () {
        var _this = this;
        return this._http.post("/api/get_post_by_hash", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getCurrentUserPosts = function () {
        var _this = this;
        return this._http.post("/api/get_current_user_posts", this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getFollowers = function () {
        var _this = this;
        this.request = this.request.username;
        return this._http.get("/api/get_followers/" + this.request)
            .map(function (result) { return _this.result = result.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-post works!\n  {{ id }}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPostComponent = (function () {
    function EditPostComponent(activetedRoute, _dataService, app, router) {
        var _this = this;
        this.activetedRoute = activetedRoute;
        this._dataService = _dataService;
        this.app = app;
        this.router = router;
        this.id = "";
        this.activetedRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    }
    EditPostComponent.prototype.ngOnInit = function () {
    };
    return EditPostComponent;
}());
EditPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-post',
        template: __webpack_require__("../../../../../src/app/edit-post/edit-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-post/edit-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EditPostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/followed/followed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/followed/followed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let post of posts\">\n  <li *ngFor=\"let twit of post\">\n    {{ twit.author }}\n  <br/>\n    {{ twit.content }}\n  </li>\n</ul>\n\n{{ message }}\n"

/***/ }),

/***/ "../../../../../src/app/followed/followed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowedComponent = (function () {
    function FollowedComponent(_dataService, router) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        this.message = "";
        if (!localStorage.getItem("username")) {
            this.router.navigate(['/login']);
        }
        this._dataService.request = { username: localStorage.getItem('username') };
        this._dataService.getFollowedPosts()
            .subscribe(function (res) {
            if (res == "") {
                _this.message = "No twit have been posted yet";
            }
            _this.posts = res;
            console.log(res);
        }, function (error) {
            _this.message = (error._body);
            // console.log(this.message)
        });
    }
    FollowedComponent.prototype.ngOnInit = function () {
    };
    return FollowedComponent;
}());
FollowedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-followed',
        template: __webpack_require__("../../../../../src/app/followed/followed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/followed/followed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FollowedComponent);

var _a, _b;
//# sourceMappingURL=followed.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Login Form</h1>\n    {{ message }}\n    <p>Not registerd yet ?\n      <a routerLink=\"/register\">Register</a>\n    </p>\n    <div [hidden]=\"submitted\">\n    <form (ngSubmit)=\"onSubmit()\" #login = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required placeholder=\"username\"\n        [(ngModel)]=\"model.username\" name=\"username\"\n        #username=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" required placeholder=\"password\"\n        [(ngModel)]=\"model.password\" name=\"password\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\"\n              [disabled]=\"!login.form.valid\">Login</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(_dataService, cookieService, app, router) {
        this._dataService = _dataService;
        this.cookieService = cookieService;
        this.app = app;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]('', '');
        this.submitted = false;
        this.message = "";
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.request = this.model;
        this._dataService.login()
            .subscribe(function (res) {
            localStorage.setItem('username', _this.model.username);
            _this.submitted = true;
            _this.message = "You are now connected !";
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */].updateUsername.next(true);
            _this.cookieService.set('token', res);
            _this.router.navigateByUrl("/current_user");
        }, function (error) {
            _this.message = (error._body);
        });
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css"), __webpack_require__("../../../../../src/form.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/posts/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(content) {
        this.content = content;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>New Post</h1>\n    {{ message }}\n    <div [hidden]=\"submitted\">\n    <form (ngSubmit)=\"onSubmit()\" #post = \"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input type=\"textarea\" class=\"form-control\" id=\"content\" required placeholder=\"content\"\n        [(ngModel)]=\"model.content\" name=\"content\" rows=\"4\" maxlength=\"140\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!post.form.valid\">Submit</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__("../../../../../src/app/posts/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsComponent = (function () {
    function PostsComponent(_dataService, cookieService, app, router) {
        this._dataService = _dataService;
        this.cookieService = cookieService;
        this.app = app;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__post__["a" /* Post */]('');
        this.submitted = false;
        if (!localStorage.getItem("username")) {
            this.router.navigate(['/login']);
        }
    }
    PostsComponent.prototype.onSubmit = function () {
        if (this.cookieService.get('token') == "") {
            this.message = "Only logged users can post a new twit";
        }
        else {
            this.submitted = true;
            this._dataService.request = this.model;
            this._dataService.newPost()
                .subscribe();
            this.message = "New twit posted";
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */].updatePosts.next(true);
        }
    };
    Object.defineProperty(PostsComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return PostsComponent;
}());
PostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-posts',
        template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css"), __webpack_require__("../../../../../src/form.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Register Form</h1>\n    <!-- {{ diagnostic }} -->\n    <p>Already registerd ?\n      <a routerLink=\"/login\">Login</a>\n    </p>\n    <div [hidden]=\"submitted\">\n    <form (ngSubmit)=\"onSubmit()\" #register = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required placeholder=\"username\"\n        [(ngModel)]=\"model.username\" name=\"username\"\n        #username=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" required placeholder=\"email\"\n        [(ngModel)]=\"model.email\" name=\"email\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" required placeholder=\"password\"\n        [(ngModel)]=\"model.password\" name=\"password\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"conf_password\" required placeholder=\"confirm password\"\n        [(ngModel)]=\"conf_pass\" name=\"conf_pass\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!register.form.valid\">Submit</button>\n\n    </form>\n  </div>\n  {{ message }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/register/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginComponent } from '../login/login.component';
// ,
// private login:LoginComponent
var RegisterComponent = (function () {
    function RegisterComponent(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]('', '', '');
        this.submitted = false;
        this.conf_pass = "";
        this.message = "";
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._dataService.request = this.model;
        if (this.conf_pass == this.model.password) {
            this._dataService.postUsers()
                .subscribe(function (res) {
                _this.message = res;
                if (res == "Inserted successfully") {
                    _this.submitted = true;
                    // this.login.model.username = this.model.username
                    // this.login.model.password = this.model.password
                    // this.login.onSubmit();
                }
            });
        }
        else {
            this.message = "The password and its confirmation must be the same. ";
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css"), __webpack_require__("../../../../../src/form.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/showposts/showposts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showposts/showposts.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{ author }} 's posts</h3>\n\n\n<table *ngFor=\"let post of posts\">\n  <tr><h1>{{ post.title}}</h1></tr>\n  <tr>{{ post.content }}</tr>\n  <tr>{{ post.err }}\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/showposts/showposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowpostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowpostsComponent = (function () {
    function ShowpostsComponent(_dataService, router) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        if (!localStorage.getItem("username")) {
            this.router.navigate(['/login']);
        }
        this.url = this.router.url.split("/");
        this.author = this.url.slice(2).toString();
        this._dataService.request = this.author;
        this._dataService.getPosts()
            .subscribe(function (res) {
            _this.posts = res;
            console.log(_this.posts);
        });
    }
    return ShowpostsComponent;
}());
ShowpostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-showposts',
        template: __webpack_require__("../../../../../src/app/showposts/showposts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/showposts/showposts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ShowpostsComponent);

var _a, _b;
//# sourceMappingURL=showposts.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>List of users</th>\n      <th id=\"test\">Actions</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let user of users\">\n    <tr>\n      <p *ngIf=\"user.username!=currentUser;then show\"></p>\n      <ng-template #show>\n      <td>{{ user.username }}</td>\n\n      <p *ngIf=\"user.followedBy.length>0;then loop else noloop\"></p>\n\n      <ng-template #loop>\n\n        <td *ngFor=\"let followed of user.followedBy; let i = index\">\n          <button *ngIf=\"currentUser==followed\"\n            (click)=\"unfollow(user.username)\"> Unfollow {{ user.username }}</button>\n          <button *ngIf=\"i+1==user.followedBy.length && currentUser != followed\"\n            (click)=\"follow(user.username)\">\n             Follow {{user.username}} </button>\n        </td>\n      </ng-template>\n\n      <ng-template #noloop>\n\n        <td>\n          <button (click)=\"follow(user.username)\">Follow {{ user.username }}</button>\n        </td>\n      </ng-template>\n    </ng-template>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(_dataService, router) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        this.currentUser = localStorage.getItem('username');
        if (!localStorage.getItem("username")) {
            this.router.navigate(['/login']);
        }
        console.log("constr");
        this._dataService.getUsers()
            .subscribe(function (res) {
            _this.users = res;
        });
    }
    UsersComponent.prototype.follow = function (username) {
        var _this = this;
        this._dataService.request = { username: username, follower: localStorage.getItem("username") };
        this._dataService.follow()
            .subscribe(function (res) {
            _this.message = res;
        }, function (error) {
            _this.message = (error._body);
        });
    };
    UsersComponent.prototype.unfollow = function (username) {
        var _this = this;
        this._dataService.request = { username: username, follower: localStorage.getItem("username") };
        this._dataService.unfollow()
            .subscribe(function (res) {
            _this.message = res;
        }, function (error) {
            _this.message = (error._body);
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n background-color:#FAFAFA;\n padding:10px;\n width:280px;\n }\nfieldset {\n padding:0 20px 20px 20px;\n margin-bottom:10px;\n border:1px solid #DF3F3F;\n }\nlegend {\n color:#DF3F3F;\n font-weight:bold\n }\nlabel {\n margin-top:10px;\n display:block;\n }\nlabel.inline {\n display:inline;\n margin-right:50px;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map