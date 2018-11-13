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

module.exports = "<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n      <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Company name</a>\n      <ul class=\"navbar-nav px-3\">\n        <li class=\"nav-item text-nowrap\">\n          <a class=\"nav-link\" href=\"#\">Admin</a>\n        </li>\n      </ul>\n    </nav>\n    \n    <main role=\"main\">\n  <router-outlet></router-outlet>\n    </main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'EmployeeData';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _employee_find_employee_find_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/find-employee/find-employee.component */ "./src/app/employee/find-employee/find-employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee-edit/employee-edit.component */ "./src/app/employee/employee-edit/employee-edit.component.ts");
/* harmony import */ var _employee_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee-detail/employee-detail.component */ "./src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'employees', component: _employee_find_employee_find_employee_component__WEBPACK_IMPORTED_MODULE_5__["FindEmployeeComponent"] },
    { path: 'employee/view/:id', component: _employee_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailComponent"] },
    { path: 'employee/edit/:id', component: _employee_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"] },
    { path: 'employee/edit', component: _employee_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"] },
    { path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _employee_find_employee_find_employee_component__WEBPACK_IMPORTED_MODULE_5__["FindEmployeeComponent"],
                _employee_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeEditComponent"],
                _employee_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container txt\" *ngIf=\"employee\">  \n    <div class =\"row col-sm-12 text-right\">\n    \t<a [routerLink]=\"['/employees']\"> Back </a>\n    </div>\n    <div class=\"row col-sm-6\">\n    <h1>Employee Details </h1>\n    </div>\n    <div class=\"row col-sm-12\">\n    <hr align=\"left\"/>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Name: </strong> &nbsp;  {{employee?.name}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Employee ID: </strong> &nbsp;  {{employee?.employeeId}}\n    \t</div>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Date of Birth: </strong> &nbsp;  {{employee?.dob}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Gender: </strong> &nbsp;  {{employee?.gender}}\n    \t</div>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Address: </strong> &nbsp;  {{employee?.address.street}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> City: </strong> &nbsp;  {{employee?.address.city}}\n    \t</div>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> State: </strong> &nbsp;  {{employee?.address.state}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Zip: </strong> &nbsp;  {{employee?.address.zip}}\n    \t</div>\n    </div>\n\t<div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Contact Number: </strong> &nbsp;  {{employee?.phoneNumber}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Email ID: </strong> &nbsp;  {{employee?.email}}\n    \t</div>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Department: </strong> &nbsp;  {{employee?.department}}\n    \t</div>\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Manager: </strong> &nbsp;  {{employee?.manager}}\n    \t</div>\n    </div>\n    <br>\n    <div class=\"row\">\n    \t<div class = \"col-sm-6\">\n    \t\t<strong> Salary Information: </strong> \n    \t</div>\n    </div>\n    <div class=\"row\">\n    \t<div class = \"col-sm-10\">\n    \t\t<table>\n    \t\t\t<tr>\n    \t\t\t\t<th colspan=\"3\"> Earnings</th>\n    \t\t\t\t<th colspan=\"3\"> Deductions</th>\n    \t\t\t\t<th rowspan=\"2\">Take home Salary</th>\n    \t\t\t</tr>\n    \t\t\t<tr>\n    \t\t\t\t<th>Base Salary</th>\n    \t\t\t\t<th>Incentive</th>\n    \t\t\t\t<th>Other Allowance</th>\n    \t\t\t\t<th>Taxes</th>\n    \t\t\t\t<th>Medical</th>\n    \t\t\t\t<th>401K</th>\n    \t\t\t</tr>   \n    \t\t\t<tr>\n    \t\t\t\t<td>{{employee?.baseSalary}}</td>\n    \t\t\t\t<td>{{employee?.incentive}}</td>\n    \t\t\t\t<td>{{employee?.otherAllowance}}</td>\n    \t\t\t\t<td>{{employee?.deduction?.taxes}}</td>\n    \t\t\t\t<td>{{employee?.deduction?.healthInsurance}}</td>\n    \t\t\t\t<td>{{employee?.deduction['401k']}}</td>\n    \t\t\t\t<td>{{inHaandSalary()}}</td>\n       \t\t\t</tr>    \t\t\t \t\t\t\n    \t\t</table>\n    \t</div>    \t\n    </div>\n    <br>\n    <div class=\"row col-sm-6\">\n    \t\t<button type=\"button\" class = \"btn\" (click)=\"edit(employee._id)\">Edit</button>\n    \t\t&nbsp;\n            <button type=\"button\"  class = \"btn\" (click)=\"delete(employee._id)\">Delete</button>\n    \t</div>  \t\n</div>\n\n"

/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 70px;\n  font-family: \"Times New Roman\"; }\n\nhr {\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: black;\n  height: 1px; }\n\ntable, th, td {\n  border: 1px solid black; }\n\ntd {\n  width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsL0c6XFxFbXBsb3llZSBTYWxhcnlcXEVtcGxveWVlRGF0YS9zcmNcXGFwcFxcZW1wbG95ZWVcXGVtcGxveWVlLWRldGFpbFxcZW1wbG95ZWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQWdCO0VBQ2hCLCtCQUNELEVBQUM7O0FBRUQ7RUFDRSxZQUFVO0VBQ1YsZUFBYTtFQUNiLFdBQVU7RUFDVix3QkFBc0I7RUFDdEIsWUFBVyxFQUNaOztBQUVEO0VBQ0ksd0JBQXVCLEVBRTFCOztBQUNEO0VBQ0UsV0FBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IDcwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCJcclxufVxyXG5cclxuaHIge1xyXG4gIGNsZWFyOmJvdGg7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDogOTYlOyAgICAgICAgICAgICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbnRhYmxlLCB0aCx0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIFxyXG59XHJcbnRkIHtcclxuICB3aWR0aDogMTAlIDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(employeeService, router, route) {
        var _this = this;
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
        route.params.subscribe(function (params) {
            _this.fetchEmployee(params['id']);
        });
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailComponent.prototype.fetchEmployee = function (id) {
        var _this = this;
        this.employeeService.findOne(id)
            .subscribe(function (employee) {
            _this.employee = employee;
        });
    };
    EmployeeDetailComponent.prototype.back = function () {
        this.router.navigate(['employees']);
    };
    EmployeeDetailComponent.prototype.edit = function (employeeId) {
        this.router.navigate(['employee/edit/' + employeeId]);
    };
    EmployeeDetailComponent.prototype.delete = function (employeeId) {
        var _this = this;
        this.employeeService.delete(employeeId).subscribe(function () {
            _this.back();
        });
    };
    EmployeeDetailComponent.prototype.inHaandSalary = function () {
        console.log(this.employee.baseSalary);
        console.log(this.employee.incentive);
        console.log(this.employee.otherAllowance);
        console.log(this.employee.deduction.taxes);
        console.log(this.employee.deduction.helthInsurance);
        console.log(this.employee.deduction['401k']);
        return ((this.employee.baseSalary + this.employee.incentive + (this.employee.otherAllowance || 0))
            - (this.employee.deduction.taxes + this.employee.deduction.healthInsurance + this.employee.deduction['401k']));
    };
    EmployeeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-detail',
            template: __webpack_require__(/*! ./employee-detail.component.html */ "./src/app/employee/employee-detail/employee-detail.component.html"),
            styles: [__webpack_require__(/*! ./employee-detail.component.scss */ "./src/app/employee/employee-detail/employee-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-edit/employee-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/employee/employee-edit/employee-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class = \"row col-sm-12\">\n\t\t<h2> Emploee Details Form</h2>\n\t\t<hr align=\"left\"/>\n\t</div>\t\t\n\t<form #employeeForm=\"ngForm\" (ngSubmit)=\"submit()\" ngNativeValidate>\n\t\t<div class = \"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Name</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.name\" name=\"name\" required #name=\"ngModel\">\n\t\t\t    <div [hidden]=\"name.valid || name.pristine\"\n\t\t\t     class=\"alert alert-danger\">\n\t\t\t     Name is required\n\t\t\t    </div>\n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Employee Id</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.employeeId\" name=\"employeeId\" required #employeeId=\"ngModel\">\n\t\t\t    <div [hidden]=\"employeeId.valid || employeeId.pristine\"\n\t\t\t     class=\"alert alert-danger\">\n\t\t\t     employee Id is required\n\t\t\t    </div>\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Gender</label><br>\n\t\t\t    <input type=\"radio\" [(ngModel)]=\"employee.gender\" name=\"gender\" [value]=\"'male'\"> Male\n                <input type=\"radio\" [(ngModel)]=\"employee.gender\" name=\"gender\" [value]=\"'female'\"> Female\n                <input type=\"radio\" [(ngModel)]=\"employee.gender\" name=\"gender\" [value]=\"'other'\"> Other\n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Date of Birth</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.dob\" name=\"dob\" required #dob=\"ngModel\">\t\t\t    \n\t\t\t</div>\t\t\t\t\t\n\t\t</div>\n\t\t<Strong> Address Information:</Strong>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Street</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.address.street\" name=\"street\" required >\n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >City</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.address.city\" name=\"city\" required >\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"form-group col-sm-3\">\n\t\t\t <label class=\"required\" >State</label>\n\t\t\t <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.address.state\" name=\"state\" required>\n\t\t     </div>\n\t\t    <div class=\"form-group col-sm-3\">\n\t\t\t <label class=\"required\" >Zip</label>\n\t\t\t <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.address.zip\" name=\"zip\" required >\n\t\t    </div>\n\t\t</div>\n\t\t<br>\n\t\t<Strong> Contact Information:</Strong>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Phone Number</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.phoneNumber\" name=\"phoneNumber\" required >\n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Email Id</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.email\" name=\"email\" required >\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<Strong> Department Information:</Strong>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Department Name</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.department\" name=\"department\" required >   \n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Manager</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.manager\" name=\"manager\" required >\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<Strong> Salary Information:</Strong><br>\n\t\t<Strong> Earning:</Strong>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Base Salary</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.baseSalary\" name=\"baseSalary\" required > \n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Incentive</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.incentive\" name=\"incentive\" required > \n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Other Allowance</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.otherAllowance\" name=\"othetAllowance\" required > \n\t\t\t</div>\n\t\t</div>\n\t\t<Strong> Deduction:</Strong>\n\t\t<div class=\"row\">\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Taxes</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.deduction.taxes\" name=\"taxes\" required > \n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >Medical</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.deduction.healthInsurance\" name=\"medical\" required > \n\t\t\t</div>\n\t\t\t<div class = \"form-group col-sm-3\">\n\t\t\t\t<label class=\"required\" >401K</label>\n\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.deduction['401k']\" name=\"401k\" required > \n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"form-group col-sm-6\">\t\t\t \n\t\t\t <button type=\"submit\" class = \"btn\"  [disabled]=\"!employeeForm.form.valid\">Submit</button>\n\t\t\t &nbsp;\n\t\t\t <button type=\"submit\" class = \"btn\"  (click) = \"goList()\">Cancel</button>\n\t\t</div>\n\t\t</div>\n\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee-edit/employee-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employee/employee-edit/employee-edit.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required:after {\n  content: \" *\"; }\n\n.container {\n  margin-top: 70px;\n  font-family: \"Times New Roman\"; }\n\nhr {\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: black;\n  height: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZWRpdC9HOlxcRW1wbG95ZWUgU2FsYXJ5XFxFbXBsb3llZURhdGEvc3JjXFxhcHBcXGVtcGxveWVlXFxlbXBsb3llZS1lZGl0XFxlbXBsb3llZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBWSxFQUNYOztBQUVGO0VBQ0MsaUJBQWdCO0VBQ2hCLCtCQUNELEVBQUM7O0FBR0Q7RUFDRSxZQUFVO0VBQ1YsZUFBYTtFQUNiLFdBQVU7RUFDVix3QkFBc0I7RUFDdEIsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkOmFmdGVyIHtcclxuIGNvbnRlbnQ6XCIgKlwiOyBcclxuIH1cclxuIFxyXG4uY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiA3MHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiXHJcbn1cdFxyXG5cclxuXHJcbmhyIHtcclxuICBjbGVhcjpib3RoO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6IDk2JTsgICAgICAgICAgICAgICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gIGhlaWdodDogMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/employee/employee-edit/employee-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-edit/employee-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(route, employeeService, router) {
        var _this = this;
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.employee = {
            address: {},
            deduction: {}
        };
        route.params.subscribe(function (params) {
            if (params['id']) {
                _this.addMode = false;
                _this.fetchEmployee(params['id']);
            }
            else {
                _this.addMode = true;
            }
        });
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
    };
    EmployeeEditComponent.prototype.fetchEmployee = function (id) {
        var _this = this;
        this.employeeService.findOne(id)
            .subscribe(function (employee) {
            if (!employee.address) {
                employee.address = {};
            }
            if (!employee.deduction) {
                employee.deduction = {};
            }
            _this.employee = employee;
        });
    };
    EmployeeEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.addMode) {
            this.employeeService.create(this.employee)
                .subscribe(function (employee) {
                _this.goList();
            });
        }
        else {
            this.employeeService.update(this.employee._id, this.employee)
                .subscribe(function (employee) {
                _this.goList();
            });
        }
    };
    EmployeeEditComponent.prototype.goList = function () {
        this.router.navigate(['employees']);
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/employee/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.scss */ "./src/app/employee/employee-edit/employee-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.find = function () {
        return this.http.get('/api/employees');
    };
    EmployeeService.prototype.findOne = function (id) {
        return this.http.get('/api/employees/' + id);
    };
    EmployeeService.prototype.create = function (employee) {
        return this.http.post('/api/employees', employee);
    };
    EmployeeService.prototype.update = function (id, employee) {
        return this.http.put('api/employees/' + id, employee);
    };
    EmployeeService.prototype.delete = function (id) {
        return this.http.delete('/api/employees/' + id);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee/find-employee/find-employee.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/employee/find-employee/find-employee.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h2>Employees</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-10\">\r\n    <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"keyword\" (keyup)=\"filter()\" placeholder=\"Search\">\r\n  </div>\r\n</div>\r\n<div class=\"col-md-2 text-right\">\r\n   <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add Employee</button>\r\n</div>\r\n</div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-sm\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Employee ID</th>\r\n                  <th>Name</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let employee of displayedEmployees;let i=index\">\r\n                  <td>{{employee.employeeId}}</td>\r\n                  <td>{{employee.name}}</td>\r\n                  <td class=\"text-right\">\r\n                  <button type=\"button\" class=\"btn btn-link m-r-5\" (click)=\"view(employee._id)\">View</button>\r\n                  |\r\n                  <button type=\"button\" class=\"btn btn-link m-r-5\" (click)=\"edit(employee._id)\">Edit</button>\r\n                  |\r\n                  <button type=\"button\" class=\"btn btn-link\" (click)=\"delete(employee._id)\">Delete</button>\r\n                  </td>\r\n\r\n                </tr>               \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          </div>"

/***/ }),

/***/ "./src/app/employee/find-employee/find-employee.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employee/find-employee/find-employee.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-r-5 {\n  margin-right: 5px; }\n\n.container {\n  margin-top: 70px; }\n\n.text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZmluZC1lbXBsb3llZS9HOlxcRW1wbG95ZWUgU2FsYXJ5XFxFbXBsb3llZURhdGEvc3JjXFxhcHBcXGVtcGxveWVlXFxmaW5kLWVtcGxveWVlXFxmaW5kLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0MsaUJBQWdCLEVBQ2hCOztBQUNEO0VBQ0Msa0JBQWlCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZmluZC1lbXBsb3llZS9maW5kLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tci01IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/find-employee/find-employee.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/find-employee/find-employee.component.ts ***!
  \*******************************************************************/
/*! exports provided: FindEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindEmployeeComponent", function() { return FindEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindEmployeeComponent = /** @class */ (function () {
    function FindEmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.displayedEmployees = [];
    }
    FindEmployeeComponent.prototype.ngOnInit = function () {
        this.find();
    };
    FindEmployeeComponent.prototype.find = function () {
        var _this = this;
        this.employeeService.find().subscribe(function (employees) {
            _this.employees = employees;
            _this.filter();
        });
    };
    FindEmployeeComponent.prototype.filter = function () {
        var _this = this;
        if (!this.keyword || this.keyword.length === 0) {
            this.displayedEmployees = this.employees;
            return;
        }
        this.displayedEmployees = this.employees.filter(function (o) { return o.name.indexOf(_this.keyword) > -1; });
    };
    FindEmployeeComponent.prototype.view = function (employeeId) {
        this.router.navigate(['employee/view/' + employeeId]);
    };
    FindEmployeeComponent.prototype.add = function () {
        this.router.navigate(['employee/edit']);
    };
    FindEmployeeComponent.prototype.edit = function (employeeId) {
        this.router.navigate(['employee/edit/' + employeeId]);
    };
    FindEmployeeComponent.prototype.delete = function (employeeId) {
        var _this = this;
        this.employeeService.delete(employeeId).subscribe(function () {
            _this.find();
        });
    };
    FindEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'find-employee',
            styles: [__webpack_require__(/*! ./find-employee.component.scss */ "./src/app/employee/find-employee/find-employee.component.scss")],
            template: __webpack_require__(/*! ./find-employee.component.html */ "./src/app/employee/find-employee/find-employee.component.html"),
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FindEmployeeComponent);
    return FindEmployeeComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Employee Salary\EmployeeData\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map