webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! C:\Users\zl\IdeaProjects\RandomName\RandomName\node_modules\webpack-dev-server\client\index.js?http://localhost:3000 */1);
	module.exports = __webpack_require__(/*! ./www/app */74);


/***/ },

/***/ 74:
/*!********************!*\
  !*** ./www/app.ts ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../node_modules/angular2/ts/typings/tsd.d.ts"/>
	///<reference path="../node_modules/rxjs/Rx.d.ts"/>
	"use strict";
	var router_1 = __webpack_require__(/*! angular2/router */ 75);
	var http_1 = __webpack_require__(/*! angular2/http */ 217);
	var app_1 = __webpack_require__(/*! ./components/app */ 232);
	var bootstrap_1 = __webpack_require__(/*! angular2/bootstrap */ 284);
	var debug = __webpack_require__(/*! debug */ 20);
	debug.enable('ng:*');
	bootstrap_1.bootstrap(app_1.default, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);


/***/ },

/***/ 232:
/*!*************************************!*\
  !*** ./www/components/app/index.ts ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 103);
	var common_1 = __webpack_require__(/*! angular2/common */ 233);
	var debug = __webpack_require__(/*! debug */ 20)('ng:app');
	var template = __webpack_require__(/*! ./template.html */ 282);
	var style = __webpack_require__(/*! ./style.less */ 283);
	var App = (function () {
	    function App() {
	        var _this = this;
	        this.students = [];
	        this.selectedStudents = [];
	        this.multiStudent = false;
	        this._studentNum = 1;
	        this.studentNo = [1];
	        this.curr = [];
	        this.timer = [];
	        this.running = false;
	        setInterval(function () {
	            if (nameArr) {
	                _this.students = nameArr;
	            }
	        }, 200);
	        // for (let i = 0; i < 100; i++) {
	        //     this.students.push({id: i, name: '张' + i})
	        // }
	        this.randAll();
	    }
	    Object.defineProperty(App.prototype, "studentNum", {
	        get: function () {
	            return this._studentNum;
	        },
	        set: function (val) {
	            this._studentNum = val;
	            this.studentNo = [];
	            for (var i = 1; i <= val; i++) {
	                this.studentNo.push(i);
	            }
	            this.randAll();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    App.prototype.begin = function (event) {
	        var _this = this;
	        if (this.running) {
	            return;
	        }
	        this.running = true;
	        this.timer.push(setInterval(function () { return _this.randAll(); }, 100));
	    };
	    App.prototype.rand = function () {
	        return this.students[parseInt(Math.random() * this.students.length + '')]
	            || { name: '', id: '' };
	    };
	    App.prototype.randAll = function () {
	        this.curr = [];
	        for (var i = 0; i < this.studentNum; i++) {
	            this.curr.push(this.rand());
	        }
	    };
	    App.prototype.end = function (event) {
	        if (this.running) {
	            this.running = false;
	            this.timer.forEach(function (i) { return clearInterval(i); });
	            for (var _i = 0, _a = this.curr; _i < _a.length; _i++) {
	                var i = _a[_i];
	                this.selectedStudents.push(i);
	            }
	        }
	    };
	    App.prototype.clear = function (event) {
	        this.selectedStudents = [];
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: template,
	            styles: [style],
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },

/***/ 282:
/*!******************************************!*\
  !*** ./www/components/app/template.html ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">所有学生</div>\r\n                <table class=\"table table-bordered table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>学号</td>\r\n                        <td>姓名</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"#student of students\">\r\n                        <td>{{student.id}}</td>\r\n                        <td>{{student.name}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label for=\"fileInput\">打开文件</label>\r\n                <input id=\"fileInput\" type=\"file\" class=\"form-control\" onchange=\"onChangeFile(this.value)\">\r\n            </div>\r\n\r\n            <div class=\"checkbox\">\r\n                <label for=\"multi-student\">\r\n                    <input id=\"multi-student\" type=\"checkbox\" [(ngModel)]=\"multiStudent\">\r\n                    抽取多个学生\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\" [class.hidden]=\"!multiStudent\">\r\n                <label for=\"studentNum\">抽取数量</label>\r\n                <input id=\"studentNum\" type=\"number\" class=\"form-control\" [(ngModel)]=\"studentNum\">\r\n            </div>\r\n            <div class=\"form-inline rand-group\" *ngFor=\"#i of studentNo\">\r\n                <div class=\"form-group \">\r\n                    <label for=\"studentId\">学号{{i}}:</label>\r\n                    <input [value]=\"curr[i-1].id\" id=\"studentId\" type=\"text\" class=\"form-control\" disabled>\r\n                </div>\r\n                <div class=\"form-group \">\r\n                    <label for=\"studentName\">姓名{{i}}:</label>\r\n                    <input [value]=\"curr[i-1].name\" id=\"studentName\" type=\"text\" class=\"form-control\" disabled>\r\n                </div>\r\n            </div>\r\n\r\n            <button class=\"btn btn-success\" [class.disabled]=\"running\" (click)=\"begin($event)\">开始摇号</button>\r\n            <button class=\"btn btn-danger\" [class.disabled]=\"!running\" (click)=\"end($event)\">停止摇号</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">选中学生 <button class=\"btn btn-success\" [class.disabled]=\"!selectedStudents.length\" (click)=\"clear($event)\">清除列表</button></div>\r\n                <table class=\"table table-bordered table-condensed\">\r\n                    <thead>\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>学号</td>\r\n                        <td>姓名</td>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"#student of selectedStudents;#i=index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{student.id}}</td>\r\n                        <td>{{student.name}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 283:
/*!***************************************!*\
  !*** ./www/components/app/style.less ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = ".panel-heading {\n  text-align: center;\n}\n.rand-group {\n  margin-bottom: 15px;\n}\n.rand-group > div:last-child {\n  margin-left: 15px;\n}\n"

/***/ },

/***/ 284:
/*!*********************************!*\
  !*** ./~/angular2/bootstrap.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * See {@link bootstrap} for more information.
	 * @deprecated
	 */
	var browser_1 = __webpack_require__(/*! angular2/platform/browser */ 285);
	exports.bootstrap = browser_1.bootstrap;
	var angular_entrypoint_1 = __webpack_require__(/*! angular2/src/core/angular_entrypoint */ 286);
	exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILHdCQUF3QiwyQkFBMkIsQ0FBQztBQUE1Qyx3Q0FBNEM7QUFDcEQsbUNBQWdDLHNDQUFzQyxDQUFDO0FBQS9ELG1FQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2VlIHtAbGluayBib290c3RyYXB9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuZXhwb3J0IHtBbmd1bGFyRW50cnlwb2ludH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbiJdfQ==

/***/ }

});
//# sourceMappingURL=app.bundle.js.map