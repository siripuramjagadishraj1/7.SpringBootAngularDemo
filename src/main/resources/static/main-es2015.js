(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./NewLazyModule": [
		"./src/app/NewLazyModule.ts",
		"NewLazyModule"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./guards/auth.guards.ts":
/*!*******************************!*\
  !*** ./guards/auth.guards.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



//import { JwtHelperService } from '@auth0/angular-jwt';
//const helper = new JwtHelperService();
let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        /*
        let hasTokenExpired = helper.isTokenExpired(localStorage.getItem('auth_token'))
        console.log(hasTokenExpired);
        if(localStorage.getItem('currentUser') && !hasTokenExpired){
            return true;
        }else{
            this.router.navigate(['/login'],{queryParams:{ }})
            return false;
        }
        */
        this.router.navigate(['/InstallingStuffComponent'], { queryParams: {} });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width: 20%; background-color: green; float: left;\">\r\n    <ul>\r\n      <li><a routerLink=\"InstallingStuffComponent\"><div class=\"eachHeading\">1.Installing Stuff</div></a></li>\r\n      <li><a routerLink=\"AngularProjectStructureComponent\"><div class=\"eachHeading\">2.Angular Project Structure</div></a></li>\r\n      <li><a routerLink=\"IntegrationOfFrameworksComponent\"><div class=\"eachHeading\">3. Integration of BootStrap and JQuery</div></a></li>\r\n      <li><a routerLink=\"LearnTypeScriptComponent\"><div class=\"eachHeading\">4. Learn TypeScript</div></a></li>\r\n      <li><a routerLink=\"RoutingCheatComponent\"><div class=\"eachHeading\">5. Routing & AuthGuards</div></a></li>\r\n      <li><a routerLink=\"BindingsComponent\"><div class=\"eachHeading\">6. Bindings in HTML</div></a></li>\r\n      <li><a routerLink=\"LocalReferencesAndTricksComponent\"><div class=\"eachHeading\">7. LocalReferences and Tricks</div></a></li>\r\n      <li><a routerLink=\"InputElementsComponent\"><div class=\"eachHeading\">8. @Input [Inputs]</div></a></li>\r\n      <li><a routerLink=\"OutputElementsComponent\"><div class=\"eachHeading\">9. @Output [Event Emitters]</div></a></li>\r\n      <li><a routerLink=\"CustomPipesComponent\"><div class=\"eachHeading\">10. @Pipe [Custom Pipes]</div></a></li>\r\n      <li><a routerLink=\"ObservablesDemoComponent\"><div class=\"eachHeading\">10. Observables</div></a></li>\r\n      <li><a routerLink=\"HttpCallsDemoComponent\"><div class=\"eachHeading\">11. Http-Calls</div></a></li>\r\n      <li><a routerLink=\"FormDemoComponent\"><div class=\"eachHeading\">12. Form's & File upload</div></a></li>\r\n      <li><a routerLink=\"DirectivesCustomComponent\"><div class=\"eachHeading\">13. Directives</div></a></li>\r\n      <li><a routerLink=\"DecoratorCustomComponent\"><div class=\"eachHeading\">14. Decorator</div></a></li>\r\n      <!-- <li><a routerLink=\"LazyLoadingComponent\"><div class=\"eachHeading\">15. Lazy Loading</div></a></li> -->\r\n\r\n      <li><a routerLink=\"LazyLoadingComponent/dashBoard\"><div class=\"eachHeading\">15.Lazy [DashBoard]</div></a></li>\r\n      <li><a routerLink=\"LazyLoadingComponent/userList\"><div class=\"eachHeading\">15.Lazy [UserList]</div></a></li>\r\n      <li><a routerLink=\"ComponentLifeCycleComponent\"><div class=\"eachHeading\">16. Component Life Cycle</div></a></li>\r\n      <li><a routerLink=\"BuildMiscInstallsComponent\"><div class=\"eachHeading\">17. Build and Other Commands ???</div></a></li>\r\n    </ul>\r\n  </div>\r\n  <div style=\"width: 80%; float: right;\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"contentTest\" style=\"display: none;\">Hello World</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/angular-project-structure/angular-project-structure.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/angular-project-structure/angular-project-structure.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\nAngular Project Structure:\r\n==========================\r\npackage.json\t\t\tContains package specific information like bower, gulp, grung etc.\r\nkarma.conf.js\t\t\tContains testing related information\r\nangular.json\t\t\tContains angular components related information.\r\nstyle.css\t\t\t\tContaions global styles\r\ntest.ts\t\t\t\t\t//\r\npolyfills.ts\t\t\tContaions browser compatibility scripts\r\n\r\nindex.html\t\t\t\tContains Global styles, Js files\r\nmain.ts\r\napp> app.module.ts\r\n        app.component.ts\r\n        app.component.spec.ts\r\n        app.component.html\t\t\t\t//Main Html page for Landing page...\r\n        app.component.css\r\n        app-routing.module.ts\r\n        \r\nassets> images\r\n\r\n>mkdir loggedin\r\n>ng g c loggedin/homePage\t\t\t//Check if its working.\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/bindings/bindings.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/bindings/bindings.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\n4. Binding:\r\n===========\r\nimport { FormsModule} from '@angular/forms';\r\n1. One way binding:\r\n-------------------\r\n{ {oneWayBinded} }\r\n2. Two way binding:\r\n-------------------\r\n<input type=\"text\" [(ngModel)]=\"name\">\r\n<p>{ {name} }</p>\r\n3. Id binding:\r\n--------------\r\n<input type=\"text\" value=\"hello\" [(ngModel)]=\"newServerName\" #testMe>\r\n{ {testMe.value} }\r\n        \r\n]]>\r\n\r\n</pre>\r\n1. One way binding Example <br>{{oneWayBinded}} <br>\r\n\r\n2. Two way binding Example <br>\r\n<input type=\"text\" [(ngModel)]=\"twoWayBinded\"> <span>{{twoWayBinded}}</span> <br>\r\n\r\n3. Id binding Example <br>\r\n<input type=\"text\" value=\"hello\" [(ngModel)]=\"idWayBinded\" #testMe>\r\n{{testMe.value}}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/build-misc-installs/build-misc-installs.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/build-misc-installs/build-misc-installs.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nFew Commands to Install:\r\n========================\r\nnpm i ng-multiselect-dropdown --save\r\nnpm install angular-smart-table --save\r\nnpm install ng2-smart-table --save\r\nnpm install ng2-completer --save\r\nhttps://akveo.github.io/ng2-smart-table/#/demo\r\nhttps://l-lin.github.io/angular-datatables/#/getting-started\r\nnpm install jquery --save\r\nnpm install datatables.net --save\r\nnpm install datatables.net-dt --save\r\nnpm install angular-datatables --save\r\nnpm install @types/jquery --save\r\nnpm install @types/datatables.net --save\r\nnpm install --save @types/datatables.net\r\nnpm i @aabegg/auth-guard --save\r\n\r\nBuild:\r\n======\r\nng build --base-href http://www.ml-equipment-optimizations.com.s3-website-us-east-1.amazonaws.com  --prod\r\n\r\nTest:\r\n=====\r\nng test\r\nKarma, Jasmine, Protractor\r\n\r\nIncomplete:????\r\n===========\r\nInternalization,\r\nForms-Template\r\nObservables, map, filter, take, merge, reduce\r\n\r\n]]>\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/component-life-cycle/component-life-cycle.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/component-life-cycle/component-life-cycle.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nComponent LifeCycle:\r\n====================\r\nconstructor: \r\n1. ngOnChange  : component created, input property is changed\r\n2. ngOnInit    :   Component is initialized\r\n3. ngDoCheck   :  called during every change detection run\r\n4. ngAfterContentInit: after ng-content is initialized.\r\n5. ngAfterContentChecked: \r\n6. ngAfterViewInit: \r\n7. ngAfterViewChecked: \r\n8. ngOnDestroy:\r\n9. ngOnChanges: \r\n]]>\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/custom-pipes/custom-pipes.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/custom-pipes/custom-pipes.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nCreate a Class:\r\n---------------\r\n@Pipe({name:'myCustomPipe'})\r\nexport class myCustomPipe implements PipeTransform{\r\n\r\n    transform(value: any, ...args: any[]): any{\r\n        console.log(value);\r\n        console.log(args);\r\n        return \"Hanuman\";\r\n    }\r\n}\r\nNote: add it in app.module.ts as :import { myCustomPipe } from './myCustomPipe';\r\n\r\nUsage in any HTML:  { {'Joga Rao' | myCustomPipe }}\r\n\r\n]]>\r\n</pre>\r\n<hr>\r\n<b>Example</b>\r\n<div>\r\n        {{'Joga Rao' | myCustomPipe }}\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/decorator-custom/decorator-custom.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/decorator-custom/decorator-custom.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"testFunction()\">CLICK to see Decorator Working..</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/directives-custom/directives-custom.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/directives-custom/directives-custom.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nTypes of Directives:\r\n====================\r\n1. Components—directives with a template. [Components]\r\n2. Structural directives—change the DOM layout by adding and removing DOM elements. [ngIf, ngFor, ngSwitch, ngStyle, ngClass]\r\n3. Attribute directives—change the appearance or behavior of an element, component, or another directive.\r\n\r\n*ngIf\r\n*ngFor=\"let each of List\"\r\n[ngStyle]=\"{background-color: getColor()}\"\r\n[ngClass]=\"{online: serverStatus === 'online'}\"\r\n  If server status is online thne only online css is loaded.\r\n<app-server *ngFor=\"let  server of servers; let i = index\"></app-server>\r\n\r\nCustom Directives:\r\n==================\r\nCreate a ts file\r\n----------------\r\n@Directive({\r\n  selector: '[appHighlight]'\r\n})\r\nexport class HighlightDirective {\r\n  constructor(el: ElementRef) {\r\n    el.nativeElement.style.backgroundColor = 'yellow';\r\n  }\r\n}\r\n\r\nin app.module.ts:\r\n-----------------\r\ndeclarations: [HighlightDirective]\r\n]]>\r\n</pre>\r\n<hr>\r\n<b>Examples</b><br>\r\n<u>*ngIf</u>\r\n<div *ngIf=\"ngIfTest\">\r\n Testing NgIf..\r\n</div>\r\n<br>\r\n\r\n<u>*ngFor</u>\r\n<div *ngFor=\"let each of ngForTest\">\r\n  {{each}}\r\n </div>\r\n\r\n <u>Custom Directive</u>\r\n <div appHighlight>Highlighting in Yellow..Now Hoover over me..</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/form-demo/form-demo.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/form-demo/form-demo.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nForm-Example[Reactive-Forms]:\r\n=============\r\napp.module.ts:\r\n--------------\r\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\r\nimports: [ ReactiveFormsModule ]\r\n\r\nparent.html:\r\n------------\r\n<form (ngSubmit)=\"submitForm()\" [formGroup]=\"signupForm\">\r\n\t<input type=\"text\"  formControlName=\"ruleName\">\r\n\t\t<div *ngIf=\"submitted && f.ruleName.errors\">\r\n\t\t\t<div *ngIf=\"f.ruleName.errors.required\">First Name is required</div>\r\n\t\t\t<div *ngIf=\"f.ruleName.errors.pattern\">Name should not contain any characters except alphabets</div>\r\n\t\t</div>\r\n\t<input type=\"number\"  formControlName=\"value\">\r\n\t\t<div *ngIf=\"submitted && f.value.errors\">\r\n\t\t\t<div *ngIf=\"f.value.errors.required\">value is required</div>\r\n\t\t</div>\r\n\t<input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\" />\r\n\t\t\r\n\t<button type=\"submit\">SUBMIT</button>\r\n</form>\r\n\r\nimport { Validators, FormGroup, FormBuilder } from '@angular/forms';\r\nconstructor(private formBuilder: FormBuilder, public services:CommonServices) { }\r\nsignupForm:FormGroup;\r\nget f() { return this.signupForm.controls; }\r\n\r\nparent.ts:\r\n----------\r\nngOnInit() {\r\n    this.signupForm = this.formBuilder.group({\r\n      'ruleName':['',[Validators.required, Validators.pattern(\"^[a-zA-Z0-9_]+$\")]],\r\n      'value':[10, [Validators.required]]\r\n    });\r\n}\r\n\r\nsubmitForm(){\r\n    this.submitted = true;\r\n    //console.log(this.signupForm.controls);\r\n    if (this.signupForm.invalid) { return }\r\n\telse{//Porcess Form}\r\n}\r\n\r\nonFileChange(event) {\r\n    if (event.target.files.length > 0) {\r\n      const file = event.target.files[0];\r\n      this.form.get('avatar').setValue(file);\r\n    }\r\n}\r\n]]>\r\n</pre>\r\n\r\n<hr>\r\n<b>Example</b>\r\n<form (ngSubmit)=\"submitForm()\" [formGroup]=\"signupForm\">\r\n\t<input type=\"text\"  formControlName=\"ruleName\">\r\n\t\t<div *ngIf=\"submitted && f.ruleName.errors\">\r\n\t\t\t<div *ngIf=\"f.ruleName.errors.required\">First Name is required</div>\r\n\t\t\t<div *ngIf=\"f.ruleName.errors.pattern\">Name should not contain any characters except alphabets</div>\r\n        </div>\r\n\r\n    <br>\r\n\t<input type=\"number\"  formControlName=\"value\">\r\n\t\t<div *ngIf=\"submitted && f.value.errors\">\r\n\t\t\t<div *ngIf=\"f.value.errors.required\">value is required</div>\r\n\t\t</div>\r\n    <input type=\"file\" name=\"avatar\" (change)=\"onFileChange($event)\" />\r\n\r\n    <br>\r\n\t<button type=\"submit\">SUBMIT</button>\r\n</form>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/http-calls-demo/http-calls-demo.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/http-calls-demo/http-calls-demo.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n    <![CDATA[\r\nExample-2: [Latest Style]\r\n==========\r\napp.module.ts\r\n-------------\r\nimport { HttpClientModule } from '@angular/common/http';\r\nimports: [HttpClientModule] //Last line..\r\nproviders: [GlobalServices]\r\n\r\nGlobalServices.ts\r\n------------------\r\nimport { HttpClient } from '@angular/common/http';\r\nimport { map, filter, catchError, mergeMap } from 'rxjs/operators';\r\n httpOptions:{};\r\n constructor(private http:HttpClient){ }\r\n getAllPlantsList(){\r\n        return this.http.get('http://localhost:8080/employee',this.httpOptions).pipe( \r\n            map (\r\n                (data)=>{return data;}\r\n            )\r\n        );\r\n }\r\n\r\nExample-1:[Old Style]\r\n==========\r\nimport { HttpModule } from '@angular/http';\r\napp.module.ts: imports[HttpModule], providers[YourService]\r\nYourService\r\n-----------\r\nimport { Http, Response } from '@angular/http';\r\nimport { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';\r\nimport { Injectable, OnInit } from '@angular/core';\r\nimport 'rxjs/Rx';\r\n\r\n@Injectable()\r\nconstructor(private http:HttpClient)\r\n\r\naddNewEquipment(body){\r\n        JSON.stringify(body);\r\n        return this.http.post('url...', body, this.httpOptions).map(\r\n            (response: Response) => {\r\n                return response;\r\n            }\r\n        )\r\n}\r\nthis.services.addNewEquipment(body).subscribe(\r\n\t(data)=>{//Success Handler},\r\n\t(error)=>{//Error Handler},\r\n\t()=>{//Other Handler}\r\n)\r\n\r\ngetAllPlantsList(){\r\n      return this.http.get(this.INIT_PLANTS_URL).map((response:Response)=>{\r\n            return response.json();\r\n        });\r\n}\r\n ]]>\r\n</pre>\r\n\r\n<hr>\r\n<b>Example</b><br>\r\n<button (click)=\"getClick()\">HTTP Call..! [Example-2]</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/input-elements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/input-elements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n    <![CDATA[\r\n7.@Inputs:\r\n==========\r\nParent Code:\r\n------------\r\napp.component.html\r\n<app-side-bar-div *ngFor=\"let each of sideBarHeading\" [element]='each'></app-side-bar-div>\r\n<app-side-bar-div [element]='each'></app-side-bar-div>\r\n\r\nChild Component:\r\n------------------\r\n<li><a routerLink='{ {element.sidebarLink}}'>{ {element.sidebarName}}</a></li>\r\n@Input('element') element:{sidebarName: string, sidebarLink:string};    \r\n    ]]>\r\n</pre>\r\n<hr>\r\n<b>Example Code</b>\r\n<h6>Single Element</h6>\r\n<app-nested-input [element]='singleItem'></app-nested-input>\r\n\r\n\r\n<h6>Nesting Element</h6>\r\n\r\n<app-nested-input *ngFor=\"let each of userList\" [element]='each'></app-nested-input>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/nested-input/nested-input.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/nested-input/nested-input.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"color: green\">\r\n    {{element.userId}} -- {{element.userName}} -- {{element.userType}}\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/installing-stuff/installing-stuff.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/installing-stuff/installing-stuff.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showDisplay\">\r\n\r\n3.1,2 [1hr]<br>\r\n1.2 [grow] [1hr]<br>\r\n2.1,2 [grow] [2-3 hours]<br>\r\n<br>\r\n2.3,4<br>\r\nSBI, LIC, HR-BERRTY, KAVYA Hospital, Resume, Fridge.\r\n\r\n<h1>Topics Completed</h1>\r\n<table class=\"\" border=\"1\">\r\n        <tr style=\"background-color: grey;\"> \r\n            <td>Sl NO:</td>\r\n            <td>Category</td>\r\n            <td>Topic</td>\r\n            <td>Time Taken</td> \r\n            <td>FromTo</td> \r\n            <td>Status</td> \r\n            <td>Content</td>\r\n            <td>Comment</td>\r\n        </tr>\r\n        <tr *ngFor=\"let  eachTopic of uiTopicsCompleted; let i = index\" [ngStyle]=\"{'background-color': getColor(i)}\" > \r\n            <td>{{i+1}}</td>\r\n            <td>{{eachTopic.category}}</td>\r\n            <td>{{eachTopic.topic}}</td>\r\n            <td>{{eachTopic.duration}}</td>\r\n            <td>{{eachTopic.fromTo}}</td>\r\n            <td [ngClass]=\"{pendingClass: eachTopic.status == 'PENDING', notPendingClass: eachTopic.status != 'PENDING'}\">{{eachTopic.status}}</td>\r\n            <td><div *ngFor=\"let each of eachTopic.content;\"><a href=\"{{each.link}}\">{{each.topic}}</a></div></td>\r\n            <td>{{eachTopic.comment}}</td>\r\n        </tr>\r\n</table>\r\n<br>\r\n<table class=\"\" border=\"1\">\r\n        <tr style=\"background-color: grey;\"> \r\n            <td>Sl NO:</td>\r\n            <td>Category</td>\r\n            <td>Topic</td>\r\n            <td>Time Taken</td> \r\n            <td>FromTo</td> \r\n            <td>Status</td> \r\n            <td>Content</td>\r\n            <td>Comment</td>\r\n        </tr>\r\n        <tr *ngFor=\"let  eachTopic of backEndTopicsCompleted; let i = index\" [ngStyle]=\"{'background-color': getColor(i)}\" > \r\n            <td>{{i+1}}</td>\r\n            <td>{{eachTopic.category}}</td>\r\n            <td>{{eachTopic.topic}}</td>\r\n            <td>{{eachTopic.duration}}</td>\r\n            <td>{{eachTopic.fromTo}}</td>\r\n            <td [ngClass]=\"{pendingClass: eachTopic.status == 'PENDING', notPendingClass: eachTopic.status != 'PENDING'}\">{{eachTopic.status}}</td>\r\n            <td><div *ngFor=\"let each of eachTopic.content;\"><a href=\"{{each}}\">{{each}}</a></div></td>\r\n            <td>{{eachTopic.comment}}</td>\r\n        </tr>\r\n</table>\r\n<br>\r\n<table class=\"\" border=\"1\">\r\n    <tr style=\"background-color: grey;\"> \r\n        <td>Sl NO:</td>\r\n        <td>Category</td>\r\n        <td>Topic</td>\r\n        <td>Time Taken</td> \r\n        <td>FromTo</td> \r\n        <td>Status</td> \r\n        <td>Content</td>\r\n        <td>Comment</td>\r\n    </tr>\r\n    <tr *ngFor=\"let  eachTopic of otherTopicsCompleted; let i = index\" [ngStyle]=\"{'background-color': getColor(i)}\" > \r\n        <td>{{i+1}}</td>\r\n        <td>{{eachTopic.category}}</td>\r\n        <td>{{eachTopic.topic}}</td>\r\n        <td>{{eachTopic.duration}}</td>\r\n        <td>{{eachTopic.fromTo}}</td>\r\n        <td [ngClass]=\"{pendingClass: eachTopic.status == 'PENDING', notPendingClass: eachTopic.status != 'PENDING'}\">{{eachTopic.status}}</td>\r\n        <td><div *ngFor=\"let each of eachTopic.content;\"><a href=\"{{each.link}}\">{{each.topic}}</a></div></td>\r\n        <td>{{eachTopic.comment}}</td>\r\n    </tr>\r\n</table>\r\n\r\n</div>\r\n\r\n<pre>\r\nInstalling NodeJS: (https://nodejs.org/dist/v10.16.3/node-v10.16.3-win-x64.zip)\r\n==================\r\nDownload node.js portabale binaries\r\nunzip it.\r\nset path variable as per os..\r\n>node -v  //Node js\r\nv10.16.3\r\n>npm -v   //Package Manager\r\n6.9.0\r\n\r\nInstalling IDE's(VS-Code https://code.visualstudio.com/download#):\r\n================\r\nunzip it and add to path variable. and run it to open project.\r\n\r\nInstalling Anguar using NPM:\r\n============================\r\nInstall NG Client: https://cli.angular.io/\r\nAngular Intro: https://angular.io/docs\r\n>npm install -g @angular/cli\r\n>ng --version\r\n>ng new my-dream-app  //Add routing, Style sheet option.\r\n>cd my-dream-app\r\n>ng serve\t\t\t  //localhost:4200\r\n\r\nFew other commands to try:\r\n==========================\r\n>ng help\r\n>ng generate --help\r\n\r\n>ng build my-dream-app -c production\r\n>npm i rxjs-compat --save\r\n>ng g c cockpit --spec false\r\n</pre>\r\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\nBootStrap and Jquery Integration:\r\n=================================\r\nnpm install --save bootstrap@3\r\nnpm install jquery --save\r\n\r\ndeclare var $:any;\r\n\r\nangular.json>\r\n    \"assets\": [\r\n        \"src/favicon.ico\",\r\n        \"src/assets\"\r\n    ],\r\n    \"styles\": [\r\n        \"src/styles.css\",\r\n        \"node_modules/bootstrap/dist/css/bootstrap.min.css\"\r\n    ],\r\n    \"scripts\": [\r\n        \"node_modules/jquery/dist/jquery.min.js\",\r\n        \"node_modules/bootstrap/dist/js/bootstrap.js\"\r\n    ]\r\n\r\n]]>\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-loading.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-loading.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>lazy-loading works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>lazy-module works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/learn-type-script/learn-type-script.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/learn-type-script/learn-type-script.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n    <![CDATA[\r\n(dataType) string, number, boolean, any,[], Array<number>\r\n        let animal:{name:string, size:number}\r\n(functions)\r\nstatic numberOfWheels():number {\r\n    return 4;\r\n}\r\n(Interface)\r\ninterface User{\r\n    username: string;\r\n    password: string;\r\n    confirmPassword?: string; //optional parameter\r\n}\r\ninterface CanDrive{\r\n    accelerate(speed: number): void;\r\n}\r\n(Generics)*let numberArray: Array<number>=[1,2,3];\r\n\r\n    ]]>\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\n5. Local references(innerHtml)\r\n==============================\r\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"newServerName\" #heading>\r\n@ViewChild('heading', {static: false}) heading:ElementRef;\r\nconsole.log(this.heading.nativeElement.value);\r\n\r\n6. Tricks:\r\n==========\r\n{ { 'Server' }}\r\n{ { serverId }}\r\n{ { getServerStatus() }}\r\n]]>\r\n</pre>\r\n\r\n\r\n<hr>\r\n<b>Working Examples</b>\r\n<br>\r\n{{ 'Server' }}<br>\r\n{{ serverId }}<br>\r\n{{ getServerStatus() }}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/observables-demo/observables-demo.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/observables-demo/observables-demo.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\n\r\n10. Observables:\r\n================\r\nNote: :HTTP Calls are Observables.\r\n\r\nMethod-1:\r\n---------\r\nimport { Observable, Subscription } from 'rxjs';\r\n\r\nmainSubscriber:Subscription;\r\n\r\nmainObject:any;\r\nmainObjectRef = new Observable( (e)=>{\r\nthis.mainObject = e;\r\n});\r\n\r\nngOnInit() {\r\nthis.mainSubscriber = this.mainObjectRef.subscribe(\r\n\t\t(data)=>{ console.log('Data'+data); }\r\n\t)\r\n}\r\nthis.mainSubscriber.unsubscribe();\r\n\r\n\r\nMethod-2:\r\n---------\r\nlet userActivated = new Subject();\r\n\r\nuserActivate.subscribe(\r\n      (data)=>{\r\n        console.log('Data'+data);\r\n      }\r\n);\r\n\r\nuserActivate.next(100*Math.random());\r\nuserActivate.unsubscribe();\r\n\r\n]]>\r\n</pre>\r\n<hr>\r\n<b>Example (Method-2)</b><br>\r\n\r\n<button (click)=\"showtestSubject()\">Click To Publish Event</button>\r\n{{testSubject.data}}\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/nested-output/nested-output.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/nested-output/nested-output.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Open console to Check demo of emitting Events from Child-Component \r\n<div style=\"color: grey;\"> <button (click)=\"generateEvent()\"> [Click ME] {{element}}</button></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/output-elements.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/output-elements.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\n9.@Output:(Emitting Events)\r\n===========================\r\nChildComponent Code:\r\nimport {EventEmitter, Output} from '@angular/core';\r\n\r\n<div style=\"color: grey;\">{{element}} <button (click)=\"generateEvent()\">CLICK</button></div>\r\n@Input('element') element:string;\r\n@Output() generatedEvent = new EventEmitter<{name:string,type:string}>();\r\ngenerateEvent(){\r\n    this.generatedEvent.emit({name: 'good Name', type: 'good Name'});\r\n}\r\n\r\nparentCompoent Code:\r\n<app-selector [element]='Jagadish' (generatedEvent)=\"eventGenerated($event)\"></app-selector>\r\neventGenerated(event){\r\n    console.log(event);\r\n}\r\n]]>\r\n</pre>\r\n<hr>\r\n<b>Example</b><br>\r\n<app-nested-output [element]='eachElement' (generatedEvent)=\"eventGenerated($event)\"></app-nested-output>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/routing-cheat.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/routing-cheat.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\n<![CDATA[\r\n<ul>\r\n    <li><a routerLink='DemoBarDivComponent'>DemoBarDivComponent</a></li>\r\n    <li><a routerLink='SideBarDivComponent'>SideBarDivComponent</a></li>\r\n</ul>\r\n<router-outlet></router-outlet>\r\n]]>\r\n</pre>\r\n<pre>\r\n        <![CDATA[\r\napp-routing.module.ts\r\n---------------------\r\nconst routes: Routes = [\r\n    {\r\n    path:'',\r\n    component: LoginComponent\r\n    },\r\n    {\r\n    path:'loggedin',\r\n    component: LoggedComponent,\r\n    children:[\r\n        {\r\n        path:'',\r\n        component:DashboardComponent,\r\n        canActivate: [AuthGuard]\r\n        },\r\n        {\r\n        path:'opc_connector',\r\n        component:OPCConnectorComponent,\r\n        canActivate: [AuthGuard]\r\n        }\r\n    ]\r\n    },\r\n    {\r\n    path:'**',\r\n    redirectTo: ''\r\n    }\r\n];\r\n\r\n\r\nAuthGurards:\r\n------------\r\n>mkdir guards\r\n>cd guards\r\n>notepad++ auth.guards.ts\r\n>Comment out un required code\r\nimport { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from \"@angular/router\";\r\nimport { Injectable } from \"@angular/core\";\r\nimport { JwtHelperService } from '@auth0/angular-jwt';\r\n\r\nconst helper = new JwtHelperService();\r\n\r\n@Injectable()\r\nexport class AuthGuard implements CanActivate{\r\n\r\n    constructor(private router: Router){}\r\n\r\n    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){\r\n        let hasTokenExpired = helper.isTokenExpired(localStorage.getItem('auth_token'))\r\n        console.log(hasTokenExpired);\r\n        if(localStorage.getItem('currentUser') && !hasTokenExpired){\r\n            return true;\r\n        }else{\r\n            this.router.navigate(['/login'],{queryParams:{ }})\r\n            return false;\r\n        }\r\n    }\r\n\r\n}\r\n]]>\r\n</pre>\r\n\r\n<pre>\r\nExample showing child routing and AuthGuads:\r\n============================================\r\n</pre>\r\n\r\n<div>\r\n    <div style=\"width: 20%; background-color: #EEEEEE; float: left;\">\r\n    <ul>\r\n        <li><a routerLink=\"childRouteDemo1\"><div class=\"eachHeading\">1.Child Route Demo</div></a></li>\r\n        <li><a routerLink=\"childRouteDemo2\"><div class=\"eachHeading\">2.AuthGuads Child Route Demo</div></a></li>\r\n    </ul>\r\n    </div>\r\n    <div style=\"width: 80%; float: right; background-color: ivory;\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre>\r\nsub-route1 works!\r\n==================\r\nopen: auth.guards.ts file and play around returning true false.. \r\nin the authguards..\r\n</pre>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sub-route2 works!</p>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loggedin_installing_stuff_installing_stuff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loggedin/installing-stuff/installing-stuff.component */ "./src/app/loggedin/installing-stuff/installing-stuff.component.ts");
/* harmony import */ var _loggedin_angular_project_structure_angular_project_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loggedin/angular-project-structure/angular-project-structure.component */ "./src/app/loggedin/angular-project-structure/angular-project-structure.component.ts");
/* harmony import */ var _loggedin_integration_of_frameworks_integration_of_frameworks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loggedin/integration-of-frameworks/integration-of-frameworks.component */ "./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.ts");
/* harmony import */ var _loggedin_learn_type_script_learn_type_script_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loggedin/learn-type-script/learn-type-script.component */ "./src/app/loggedin/learn-type-script/learn-type-script.component.ts");
/* harmony import */ var _loggedin_routing_cheat_routing_cheat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loggedin/routing-cheat/routing-cheat.component */ "./src/app/loggedin/routing-cheat/routing-cheat.component.ts");
/* harmony import */ var _loggedin_routing_cheat_sub_route1_sub_route1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loggedin/routing-cheat/sub-route1/sub-route1.component */ "./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.ts");
/* harmony import */ var _loggedin_routing_cheat_sub_route2_sub_route2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loggedin/routing-cheat/sub-route2/sub-route2.component */ "./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.ts");
/* harmony import */ var guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! guards/auth.guards */ "./guards/auth.guards.ts");
/* harmony import */ var _loggedin_bindings_bindings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loggedin/bindings/bindings.component */ "./src/app/loggedin/bindings/bindings.component.ts");
/* harmony import */ var _loggedin_local_references_and_tricks_local_references_and_tricks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loggedin/local-references-and-tricks/local-references-and-tricks.component */ "./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.ts");
/* harmony import */ var _loggedin_input_elements_input_elements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loggedin/input-elements/input-elements.component */ "./src/app/loggedin/input-elements/input-elements.component.ts");
/* harmony import */ var _loggedin_output_elements_output_elements_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loggedin/output-elements/output-elements.component */ "./src/app/loggedin/output-elements/output-elements.component.ts");
/* harmony import */ var _loggedin_custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loggedin/custom-pipes/custom-pipes.component */ "./src/app/loggedin/custom-pipes/custom-pipes.component.ts");
/* harmony import */ var _loggedin_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loggedin/observables-demo/observables-demo.component */ "./src/app/loggedin/observables-demo/observables-demo.component.ts");
/* harmony import */ var _loggedin_http_calls_demo_http_calls_demo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loggedin/http-calls-demo/http-calls-demo.component */ "./src/app/loggedin/http-calls-demo/http-calls-demo.component.ts");
/* harmony import */ var _loggedin_form_demo_form_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loggedin/form-demo/form-demo.component */ "./src/app/loggedin/form-demo/form-demo.component.ts");
/* harmony import */ var _loggedin_directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loggedin/directives-custom/directives-custom.component */ "./src/app/loggedin/directives-custom/directives-custom.component.ts");
/* harmony import */ var _loggedin_decorator_custom_decorator_custom_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loggedin/decorator-custom/decorator-custom.component */ "./src/app/loggedin/decorator-custom/decorator-custom.component.ts");
/* harmony import */ var _loggedin_component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loggedin/component-life-cycle/component-life-cycle.component */ "./src/app/loggedin/component-life-cycle/component-life-cycle.component.ts");
/* harmony import */ var _loggedin_build_misc_installs_build_misc_installs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loggedin/build-misc-installs/build-misc-installs.component */ "./src/app/loggedin/build-misc-installs/build-misc-installs.component.ts");



/*
import { DashboardComponent } from './loggedin/dashboard/dashboard.component';
import { UserListComponent } from './loggedin/user-list/user-list.component';
import { SettingsComponent } from './loggedin/settings/settings.component';
import { FeaturesComponent } from './loggedin/features/features.component';
import { CustomersComponent } from './loggedin/customers/customers.component';
import { OrdersComponent } from './loggedin/orders/orders.component';
import { AboutUsComponent } from './loggedin/about-us/about-us.component';
*/




















const routes = [
    { path: 'InstallingStuffComponent', component: _loggedin_installing_stuff_installing_stuff_component__WEBPACK_IMPORTED_MODULE_3__["InstallingStuffComponent"] },
    { path: 'AngularProjectStructureComponent', component: _loggedin_angular_project_structure_angular_project_structure_component__WEBPACK_IMPORTED_MODULE_4__["AngularProjectStructureComponent"] },
    { path: 'IntegrationOfFrameworksComponent', component: _loggedin_integration_of_frameworks_integration_of_frameworks_component__WEBPACK_IMPORTED_MODULE_5__["IntegrationOfFrameworksComponent"] },
    { path: 'LearnTypeScriptComponent', component: _loggedin_learn_type_script_learn_type_script_component__WEBPACK_IMPORTED_MODULE_6__["LearnTypeScriptComponent"] },
    { path: 'RoutingCheatComponent', component: _loggedin_routing_cheat_routing_cheat_component__WEBPACK_IMPORTED_MODULE_7__["RoutingCheatComponent"],
        children: [
            { path: 'childRouteDemo1', component: _loggedin_routing_cheat_sub_route1_sub_route1_component__WEBPACK_IMPORTED_MODULE_8__["SubRoute1Component"] },
            { path: 'childRouteDemo2', component: _loggedin_routing_cheat_sub_route2_sub_route2_component__WEBPACK_IMPORTED_MODULE_9__["SubRoute2Component"], canActivate: [guards_auth_guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
        ]
    },
    { path: 'BindingsComponent', component: _loggedin_bindings_bindings_component__WEBPACK_IMPORTED_MODULE_11__["BindingsComponent"] },
    { path: 'LocalReferencesAndTricksComponent', component: _loggedin_local_references_and_tricks_local_references_and_tricks_component__WEBPACK_IMPORTED_MODULE_12__["LocalReferencesAndTricksComponent"] },
    { path: 'InputElementsComponent', component: _loggedin_input_elements_input_elements_component__WEBPACK_IMPORTED_MODULE_13__["InputElementsComponent"] },
    { path: 'OutputElementsComponent', component: _loggedin_output_elements_output_elements_component__WEBPACK_IMPORTED_MODULE_14__["OutputElementsComponent"] },
    { path: 'CustomPipesComponent', component: _loggedin_custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_15__["CustomPipesComponent"] },
    { path: 'ObservablesDemoComponent', component: _loggedin_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_16__["ObservablesDemoComponent"] },
    { path: 'HttpCallsDemoComponent', component: _loggedin_http_calls_demo_http_calls_demo_component__WEBPACK_IMPORTED_MODULE_17__["HttpCallsDemoComponent"] },
    { path: 'FormDemoComponent', component: _loggedin_form_demo_form_demo_component__WEBPACK_IMPORTED_MODULE_18__["FormDemoComponent"] },
    { path: 'DirectivesCustomComponent', component: _loggedin_directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_19__["DirectivesCustomComponent"] },
    { path: 'DecoratorCustomComponent', component: _loggedin_decorator_custom_decorator_custom_component__WEBPACK_IMPORTED_MODULE_20__["DecoratorCustomComponent"] },
    //{ path: 'LazyLoadingComponent', component:LazyLoadingComponent },
    //{ path: 'LazyLoadingComponent', loadChildren:() => import('./NewLazyModule').then(mod => mod.CustomersModule) }
    { path: 'LazyLoadingComponent', loadChildren: './NewLazyModule#CustomersModule' },
    { path: 'ComponentLifeCycleComponent', component: _loggedin_component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_21__["ComponentLifeCycleComponent"] },
    { path: 'BuildMiscInstallsComponent', component: _loggedin_build_misc_installs_build_misc_installs_component__WEBPACK_IMPORTED_MODULE_22__["BuildMiscInstallsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul{ list-style-type: none; \r\n    padding-left: 0px; \r\n    margin-bottom: 0px; \r\n    background-color: #EEEEEE;\r\n  }\r\nli{ border-style: solid; \r\n    border-top-width: 0px; \r\n    border-bottom-width:0.1px; \r\n    border-right-width: 0; \r\n    border-left-width: 0;  \r\n    border-color: black;\r\n  }\r\n.eachHeading{\r\n  height: 3em;\r\n  padding: 1em;\r\n  font-size: 11;\r\n  font-weight: bold;\r\n  color: #666666;\r\n}\r\nli:hover {\r\n  background-color: #BBBBBB;\r\n  cursor: pointer;\r\n}\r\nli a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFDRixJQUFJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCO0FBRUY7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVseyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgfVxyXG5saXsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7IFxyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDowLjFweDsgXHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7IFxyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7ICBcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuLmVhY2hIZWFkaW5ne1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBmb250LXNpemU6IDExO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCQkJCQjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubGkgYXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-dream-app';
    }
    ngOnInit() { }
    ngOnDestroy() { }
    testFocus() {
        console.log('--hello--');
        return "active";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loggedin_installing_stuff_installing_stuff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loggedin/installing-stuff/installing-stuff.component */ "./src/app/loggedin/installing-stuff/installing-stuff.component.ts");
/* harmony import */ var _loggedin_angular_project_structure_angular_project_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loggedin/angular-project-structure/angular-project-structure.component */ "./src/app/loggedin/angular-project-structure/angular-project-structure.component.ts");
/* harmony import */ var _loggedin_integration_of_frameworks_integration_of_frameworks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loggedin/integration-of-frameworks/integration-of-frameworks.component */ "./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.ts");
/* harmony import */ var _loggedin_learn_type_script_learn_type_script_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loggedin/learn-type-script/learn-type-script.component */ "./src/app/loggedin/learn-type-script/learn-type-script.component.ts");
/* harmony import */ var _loggedin_routing_cheat_routing_cheat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loggedin/routing-cheat/routing-cheat.component */ "./src/app/loggedin/routing-cheat/routing-cheat.component.ts");
/* harmony import */ var _loggedin_routing_cheat_sub_route1_sub_route1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loggedin/routing-cheat/sub-route1/sub-route1.component */ "./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.ts");
/* harmony import */ var _loggedin_routing_cheat_sub_route2_sub_route2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loggedin/routing-cheat/sub-route2/sub-route2.component */ "./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.ts");
/* harmony import */ var guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! guards/auth.guards */ "./guards/auth.guards.ts");
/* harmony import */ var _loggedin_bindings_bindings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loggedin/bindings/bindings.component */ "./src/app/loggedin/bindings/bindings.component.ts");
/* harmony import */ var _loggedin_local_references_and_tricks_local_references_and_tricks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loggedin/local-references-and-tricks/local-references-and-tricks.component */ "./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.ts");
/* harmony import */ var _loggedin_input_elements_input_elements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loggedin/input-elements/input-elements.component */ "./src/app/loggedin/input-elements/input-elements.component.ts");
/* harmony import */ var _loggedin_output_elements_output_elements_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loggedin/output-elements/output-elements.component */ "./src/app/loggedin/output-elements/output-elements.component.ts");
/* harmony import */ var _myCustomPipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./myCustomPipe */ "./src/app/myCustomPipe.ts");
/* harmony import */ var _loggedin_input_elements_nested_input_nested_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loggedin/input-elements/nested-input/nested-input.component */ "./src/app/loggedin/input-elements/nested-input/nested-input.component.ts");
/* harmony import */ var _loggedin_output_elements_nested_output_nested_output_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loggedin/output-elements/nested-output/nested-output.component */ "./src/app/loggedin/output-elements/nested-output/nested-output.component.ts");
/* harmony import */ var _loggedin_custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loggedin/custom-pipes/custom-pipes.component */ "./src/app/loggedin/custom-pipes/custom-pipes.component.ts");
/* harmony import */ var _loggedin_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loggedin/observables-demo/observables-demo.component */ "./src/app/loggedin/observables-demo/observables-demo.component.ts");
/* harmony import */ var _loggedin_http_calls_demo_http_calls_demo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loggedin/http-calls-demo/http-calls-demo.component */ "./src/app/loggedin/http-calls-demo/http-calls-demo.component.ts");
/* harmony import */ var _global_services__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./global.services */ "./src/app/global.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _loggedin_form_demo_form_demo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loggedin/form-demo/form-demo.component */ "./src/app/loggedin/form-demo/form-demo.component.ts");
/* harmony import */ var _loggedin_directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loggedin/directives-custom/directives-custom.component */ "./src/app/loggedin/directives-custom/directives-custom.component.ts");
/* harmony import */ var _loggedin_decorator_custom_decorator_custom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./loggedin/decorator-custom/decorator-custom.component */ "./src/app/loggedin/decorator-custom/decorator-custom.component.ts");
/* harmony import */ var _loggedin_lazy_loading_lazy_loading_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./loggedin/lazy-loading/lazy-loading.component */ "./src/app/loggedin/lazy-loading/lazy-loading.component.ts");
/* harmony import */ var _loggedin_lazy_loading_lazy_module_lazy_module_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./loggedin/lazy-loading/lazy-module/lazy-module.component */ "./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.ts");
/* harmony import */ var _loggedin_directives_custom_highlight_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loggedin/directives-custom/highlight.directive */ "./src/app/loggedin/directives-custom/highlight.directive.ts");
/* harmony import */ var _loggedin_component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./loggedin/component-life-cycle/component-life-cycle.component */ "./src/app/loggedin/component-life-cycle/component-life-cycle.component.ts");
/* harmony import */ var _loggedin_build_misc_installs_build_misc_installs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./loggedin/build-misc-installs/build-misc-installs.component */ "./src/app/loggedin/build-misc-installs/build-misc-installs.component.ts");






/*
import { DashboardComponent } from './loggedin/dashboard/dashboard.component';
import { UserListComponent } from './loggedin/user-list/user-list.component';
import { SettingsComponent } from './loggedin/settings/settings.component';
import { FeaturesComponent } from './loggedin/features/features.component';
import { CustomersComponent } from './loggedin/customers/customers.component';
import { OrdersComponent } from './loggedin/orders/orders.component';
import { AboutUsComponent } from './loggedin/about-us/about-us.component';
*/




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            /*
            DashboardComponent,
            UserListComponent,
            SettingsComponent,
            FeaturesComponent,
            CustomersComponent,
            OrdersComponent,
            AboutUsComponent,
            */
            _loggedin_installing_stuff_installing_stuff_component__WEBPACK_IMPORTED_MODULE_6__["InstallingStuffComponent"],
            _loggedin_angular_project_structure_angular_project_structure_component__WEBPACK_IMPORTED_MODULE_7__["AngularProjectStructureComponent"],
            _loggedin_integration_of_frameworks_integration_of_frameworks_component__WEBPACK_IMPORTED_MODULE_8__["IntegrationOfFrameworksComponent"],
            _loggedin_learn_type_script_learn_type_script_component__WEBPACK_IMPORTED_MODULE_9__["LearnTypeScriptComponent"],
            _loggedin_routing_cheat_routing_cheat_component__WEBPACK_IMPORTED_MODULE_10__["RoutingCheatComponent"],
            _loggedin_routing_cheat_sub_route1_sub_route1_component__WEBPACK_IMPORTED_MODULE_11__["SubRoute1Component"],
            _loggedin_routing_cheat_sub_route2_sub_route2_component__WEBPACK_IMPORTED_MODULE_12__["SubRoute2Component"],
            _loggedin_bindings_bindings_component__WEBPACK_IMPORTED_MODULE_14__["BindingsComponent"],
            _loggedin_local_references_and_tricks_local_references_and_tricks_component__WEBPACK_IMPORTED_MODULE_15__["LocalReferencesAndTricksComponent"],
            _loggedin_input_elements_input_elements_component__WEBPACK_IMPORTED_MODULE_16__["InputElementsComponent"],
            _loggedin_output_elements_output_elements_component__WEBPACK_IMPORTED_MODULE_17__["OutputElementsComponent"],
            _myCustomPipe__WEBPACK_IMPORTED_MODULE_18__["myCustomPipe"],
            _loggedin_input_elements_nested_input_nested_input_component__WEBPACK_IMPORTED_MODULE_19__["NestedInputComponent"],
            _loggedin_output_elements_nested_output_nested_output_component__WEBPACK_IMPORTED_MODULE_20__["NestedOutputComponent"],
            _loggedin_custom_pipes_custom_pipes_component__WEBPACK_IMPORTED_MODULE_21__["CustomPipesComponent"],
            _loggedin_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_22__["ObservablesDemoComponent"],
            _loggedin_http_calls_demo_http_calls_demo_component__WEBPACK_IMPORTED_MODULE_23__["HttpCallsDemoComponent"],
            _loggedin_form_demo_form_demo_component__WEBPACK_IMPORTED_MODULE_26__["FormDemoComponent"],
            _loggedin_directives_custom_directives_custom_component__WEBPACK_IMPORTED_MODULE_27__["DirectivesCustomComponent"],
            _loggedin_decorator_custom_decorator_custom_component__WEBPACK_IMPORTED_MODULE_28__["DecoratorCustomComponent"],
            _loggedin_lazy_loading_lazy_loading_component__WEBPACK_IMPORTED_MODULE_29__["LazyLoadingComponent"],
            _loggedin_lazy_loading_lazy_module_lazy_module_component__WEBPACK_IMPORTED_MODULE_30__["LazyModuleComponent"],
            _loggedin_directives_custom_highlight_directive__WEBPACK_IMPORTED_MODULE_31__["HighlightDirective"],
            _loggedin_component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_32__["ComponentLifeCycleComponent"],
            _loggedin_build_misc_installs_build_misc_installs_component__WEBPACK_IMPORTED_MODULE_33__["BuildMiscInstallsComponent"]
        ],
        exports: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]
        ],
        providers: [guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _global_services__WEBPACK_IMPORTED_MODULE_24__["GlobalServices"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/global.services.ts":
/*!************************************!*\
  !*** ./src/app/global.services.ts ***!
  \************************************/
/*! exports provided: GlobalServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServices", function() { return GlobalServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




//import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
let GlobalServices = class GlobalServices {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() { }
    getAllPlantsList() {
        return this.http.get('http://localhost:8081/getTestData', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => { return data; }));
    }
};
GlobalServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GlobalServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalServices);



/***/ }),

/***/ "./src/app/loggedin/angular-project-structure/angular-project-structure.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/loggedin/angular-project-structure/angular-project-structure.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2FuZ3VsYXItcHJvamVjdC1zdHJ1Y3R1cmUvYW5ndWxhci1wcm9qZWN0LXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/angular-project-structure/angular-project-structure.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/loggedin/angular-project-structure/angular-project-structure.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AngularProjectStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularProjectStructureComponent", function() { return AngularProjectStructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AngularProjectStructureComponent = class AngularProjectStructureComponent {
    constructor() { }
    ngOnInit() {
    }
};
AngularProjectStructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-angular-project-structure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./angular-project-structure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/angular-project-structure/angular-project-structure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./angular-project-structure.component.css */ "./src/app/loggedin/angular-project-structure/angular-project-structure.component.css")).default]
    })
], AngularProjectStructureComponent);



/***/ }),

/***/ "./src/app/loggedin/bindings/bindings.component.css":
/*!**********************************************************!*\
  !*** ./src/app/loggedin/bindings/bindings.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2JpbmRpbmdzL2JpbmRpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/bindings/bindings.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/loggedin/bindings/bindings.component.ts ***!
  \*********************************************************/
/*! exports provided: BindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingsComponent", function() { return BindingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BindingsComponent = class BindingsComponent {
    constructor() {
        this.oneWayBinded = "One Way Binded...";
        this.twoWayBinded = "Two way binded...";
        this.idWayBinded = "Id way binded...";
    }
    ngOnInit() {
    }
};
BindingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bindings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bindings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/bindings/bindings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bindings.component.css */ "./src/app/loggedin/bindings/bindings.component.css")).default]
    })
], BindingsComponent);



/***/ }),

/***/ "./src/app/loggedin/build-misc-installs/build-misc-installs.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/loggedin/build-misc-installs/build-misc-installs.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2J1aWxkLW1pc2MtaW5zdGFsbHMvYnVpbGQtbWlzYy1pbnN0YWxscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/build-misc-installs/build-misc-installs.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/loggedin/build-misc-installs/build-misc-installs.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BuildMiscInstallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildMiscInstallsComponent", function() { return BuildMiscInstallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BuildMiscInstallsComponent = class BuildMiscInstallsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BuildMiscInstallsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-build-misc-installs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./build-misc-installs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/build-misc-installs/build-misc-installs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./build-misc-installs.component.css */ "./src/app/loggedin/build-misc-installs/build-misc-installs.component.css")).default]
    })
], BuildMiscInstallsComponent);



/***/ }),

/***/ "./src/app/loggedin/component-life-cycle/component-life-cycle.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/loggedin/component-life-cycle/component-life-cycle.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2NvbXBvbmVudC1saWZlLWN5Y2xlL2NvbXBvbmVudC1saWZlLWN5Y2xlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/component-life-cycle/component-life-cycle.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/loggedin/component-life-cycle/component-life-cycle.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ComponentLifeCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLifeCycleComponent", function() { return ComponentLifeCycleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentLifeCycleComponent = class ComponentLifeCycleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComponentLifeCycleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component-life-cycle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component-life-cycle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/component-life-cycle/component-life-cycle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component-life-cycle.component.css */ "./src/app/loggedin/component-life-cycle/component-life-cycle.component.css")).default]
    })
], ComponentLifeCycleComponent);



/***/ }),

/***/ "./src/app/loggedin/custom-pipes/custom-pipes.component.css":
/*!******************************************************************!*\
  !*** ./src/app/loggedin/custom-pipes/custom-pipes.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2N1c3RvbS1waXBlcy9jdXN0b20tcGlwZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/custom-pipes/custom-pipes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/loggedin/custom-pipes/custom-pipes.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomPipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipesComponent", function() { return CustomPipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomPipesComponent = class CustomPipesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomPipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-pipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-pipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/custom-pipes/custom-pipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-pipes.component.css */ "./src/app/loggedin/custom-pipes/custom-pipes.component.css")).default]
    })
], CustomPipesComponent);



/***/ }),

/***/ "./src/app/loggedin/decorator-custom/decorator-custom.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/loggedin/decorator-custom/decorator-custom.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2RlY29yYXRvci1jdXN0b20vZGVjb3JhdG9yLWN1c3RvbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/decorator-custom/decorator-custom.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loggedin/decorator-custom/decorator-custom.component.ts ***!
  \*************************************************************************/
/*! exports provided: DecoratorCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratorCustomComponent", function() { return DecoratorCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DecoratorCustomComponent = class DecoratorCustomComponent {
    constructor() {
        console.log('DecoratorCustomComponent');
    }
    ngOnInit() {
    }
    testFunction() {
        let asim = new Person("Asim", "Hussain");
        console.log(asim.name());
    }
};
DecoratorCustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-decorator-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./decorator-custom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/decorator-custom/decorator-custom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./decorator-custom.component.css */ "./src/app/loggedin/decorator-custom/decorator-custom.component.css")).default]
    })
], DecoratorCustomComponent);

function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: () => config.course });
    };
}
let Person = class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
};
Person.ctorParameters = () => [
    null,
    null
];
Person = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Student({
        course: "angular3"
    })
], Person);


/***/ }),

/***/ "./src/app/loggedin/directives-custom/directives-custom.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/loggedin/directives-custom/directives-custom.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2RpcmVjdGl2ZXMtY3VzdG9tL2RpcmVjdGl2ZXMtY3VzdG9tLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/directives-custom/directives-custom.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loggedin/directives-custom/directives-custom.component.ts ***!
  \***************************************************************************/
/*! exports provided: DirectivesCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesCustomComponent", function() { return DirectivesCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DirectivesCustomComponent = class DirectivesCustomComponent {
    constructor() {
        this.ngIfTest = true;
        this.ngForTest = ["Sai", "Kumar"];
    }
    ngOnInit() {
    }
};
DirectivesCustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-directives-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./directives-custom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/directives-custom/directives-custom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./directives-custom.component.css */ "./src/app/loggedin/directives-custom/directives-custom.component.css")).default]
    })
], DirectivesCustomComponent);



/***/ }),

/***/ "./src/app/loggedin/directives-custom/highlight.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/loggedin/directives-custom/highlight.directive.ts ***!
  \*******************************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(el) {
        this.el = el;
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    onmouseenter() {
        this.highlight('red');
    }
    onmouseleave() {
        this.highlight(null);
    }
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], HighlightDirective.prototype, "onmouseenter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], HighlightDirective.prototype, "onmouseleave", null);
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/loggedin/form-demo/form-demo.component.css":
/*!************************************************************!*\
  !*** ./src/app/loggedin/form-demo/form-demo.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2Zvcm0tZGVtby9mb3JtLWRlbW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/form-demo/form-demo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/loggedin/form-demo/form-demo.component.ts ***!
  \***********************************************************/
/*! exports provided: FormDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDemoComponent", function() { return FormDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let FormDemoComponent = class FormDemoComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    get f() { return this.signupForm.controls; }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            'ruleName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_]+$")]],
            'value': [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'avatar': ''
        });
    }
    submitForm() {
        this.submitted = true;
        //console.log(this.signupForm.controls);
        if (this.signupForm.invalid) {
            return;
        }
        else { //Porcess Form
            console.log(this.signupForm.value);
        }
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.signupForm.get('avatar').setValue(file);
        }
    }
};
FormDemoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/form-demo/form-demo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-demo.component.css */ "./src/app/loggedin/form-demo/form-demo.component.css")).default]
    })
], FormDemoComponent);



/***/ }),

/***/ "./src/app/loggedin/http-calls-demo/http-calls-demo.component.css":
/*!************************************************************************!*\
  !*** ./src/app/loggedin/http-calls-demo/http-calls-demo.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2h0dHAtY2FsbHMtZGVtby9odHRwLWNhbGxzLWRlbW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/http-calls-demo/http-calls-demo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/loggedin/http-calls-demo/http-calls-demo.component.ts ***!
  \***********************************************************************/
/*! exports provided: HttpCallsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCallsDemoComponent", function() { return HttpCallsDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_global_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global.services */ "./src/app/global.services.ts");



let HttpCallsDemoComponent = class HttpCallsDemoComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    getClick() {
        this.service.getAllPlantsList().subscribe((data) => { console.log(data); });
    }
};
HttpCallsDemoComponent.ctorParameters = () => [
    { type: src_app_global_services__WEBPACK_IMPORTED_MODULE_2__["GlobalServices"] }
];
HttpCallsDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-http-calls-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./http-calls-demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/http-calls-demo/http-calls-demo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./http-calls-demo.component.css */ "./src/app/loggedin/http-calls-demo/http-calls-demo.component.css")).default]
    })
], HttpCallsDemoComponent);



/***/ }),

/***/ "./src/app/loggedin/input-elements/input-elements.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/loggedin/input-elements/input-elements.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2lucHV0LWVsZW1lbnRzL2lucHV0LWVsZW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/input-elements/input-elements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/loggedin/input-elements/input-elements.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputElementsComponent", function() { return InputElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputElementsComponent = class InputElementsComponent {
    constructor() {
        this.singleItem = { userId: 1, userName: "Jagadish", userType: "ADMIN" };
        this.userList = [
            { userId: 1, userName: "Jagadish", userType: "ADMIN" },
            { userId: 2, userName: "Rohit", userType: "ADMIN" },
            { userId: 3, userName: "Rajaneesh", userType: "DEFAULT" },
            { userId: 4, userName: "Sohan", userType: "VIEWER" },
        ];
    }
    ngOnInit() {
    }
};
InputElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-elements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/input-elements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-elements.component.css */ "./src/app/loggedin/input-elements/input-elements.component.css")).default]
    })
], InputElementsComponent);



/***/ }),

/***/ "./src/app/loggedin/input-elements/nested-input/nested-input.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/loggedin/input-elements/nested-input/nested-input.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2lucHV0LWVsZW1lbnRzL25lc3RlZC1pbnB1dC9uZXN0ZWQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/input-elements/nested-input/nested-input.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/loggedin/input-elements/nested-input/nested-input.component.ts ***!
  \********************************************************************************/
/*! exports provided: NestedInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedInputComponent", function() { return NestedInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NestedInputComponent = class NestedInputComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('element')
], NestedInputComponent.prototype, "element", void 0);
NestedInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nested-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nested-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/input-elements/nested-input/nested-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nested-input.component.css */ "./src/app/loggedin/input-elements/nested-input/nested-input.component.css")).default]
    })
], NestedInputComponent);



/***/ }),

/***/ "./src/app/loggedin/installing-stuff/installing-stuff.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/loggedin/installing-stuff/installing-stuff.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pendingClass{\r\n    background-color: red;\r\n}\r\n\r\n.notPendingClass{\r\n    background-color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nZ2VkaW4vaW5zdGFsbGluZy1zdHVmZi9pbnN0YWxsaW5nLXN0dWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dnZWRpbi9pbnN0YWxsaW5nLXN0dWZmL2luc3RhbGxpbmctc3R1ZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZW5kaW5nQ2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ub3RQZW5kaW5nQ2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loggedin/installing-stuff/installing-stuff.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loggedin/installing-stuff/installing-stuff.component.ts ***!
  \*************************************************************************/
/*! exports provided: InstallingStuffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallingStuffComponent", function() { return InstallingStuffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InstallingStuffComponent = class InstallingStuffComponent {
    constructor() {
        this.showDisplay = true;
        this.otherTopicsCompleted = [
            { sl: 1,
                category: 'OTHER',
                topic: 'Solid Principles, Design Patterns',
                duration: '2 Weeks',
                fromTo: '',
                status: 'DONE',
                comment: 'REVISE_AGAIN>DONE',
                content: [{ topic: 'basics-of-software-architecture-design-in-java[udemy]', link: 'https://www.udemy.com/course/basics-of-software-architecture-design-in-java' },
                    { topic: 'Java-Design-Patterns.pdf[doc]', link: 'http://enos.itcollege.ee/~jpoial/java/naited/Java-Design-Patterns.pdf' },
                    { topic: 'Hands-On[git]', link: 'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src' }
                ]
            },
            { sl: 2,
                category: 'OTHER',
                topic: 'JVM',
                duration: '2 Weeks',
                fromTo: '',
                status: 'DONE',
                comment: 'REVISE_AGAIN>DONE',
                content: [
                    { topic: 'java-application-performance-and-memory-management[udemy]', link: 'https://www.udemy.com/course/java-application-performance-and-memory-management' },
                    { topic: 'java-memory-management[udemy]', link: 'https://www.udemy.com/course/java-memory-management' },
                    { topic: 'Hands-On[git]', link: 'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/blob/master/src/JVMCommand.test' }
                ]
            },
            { sl: 3,
                category: 'OTHER',
                topic: 'Browser Deeper',
                duration: '2 Weeks',
                fromTo: '',
                status: 'PENDING',
                comment: '--',
                content: [
                    { topic: 'JavaScript Basics with Browser[youtube]', link: 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts' }
                ]
            },
            { sl: 4,
                category: 'OTHER',
                topic: 'JavaScript Design Patterns',
                duration: '2 Weeks',
                fromTo: '',
                status: 'PENDING',
                comment: '--',
                content: [
                    { topic: 'javascript-design-patterns[pluralsights]', link: 'https://app.pluralsight.com/library/courses/javascript-design-patterns/table-of-contents' },
                ]
            },
            { sl: 5,
                category: 'OTHER',
                topic: 'Algorithms & DataStructures',
                duration: '2 Weeks',
                fromTo: '',
                status: 'PENDING',
                comment: '--',
                content: [
                    { topic: 'Geeks for Geeks[geeks for geeks]', link: 'https://www.geeksforgeeks.org/data-structures/' }
                ]
            },
            { sl: 6,
                category: 'OTHER',
                topic: 'SQL Deeper',
                duration: '2 Weeks',
                fromTo: '',
                status: 'PENDING',
                comment: '--',
                content: [
                    { topic: 'learn-database-design-using-postgresql[udemy]', link: 'https://www.udemy.com/course/learn-database-design-using-postgresql/' },
                    { topic: 'postgresql-from-zero-to-hero[udemy]', link: 'https://www.udemy.com/course/postgresql-from-zero-to-hero/' },
                    { topic: 'Normalization rules', link: '--' }
                ]
            }
        ];
        this.uiTopicsCompleted = [
            { sl: 1,
                category: 'BACK_END',
                topic: 'HTML-5, CSS-3',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'DONE',
                content: []
            },
            { sl: 2,
                category: 'FRONT_END',
                topic: 'JavaScript, Jasmine',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'REVISE_AGAIN>DONE',
                content: []
            },
            { sl: 3,
                category: 'FRONT_END',
                topic: 'Angular',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'DONE',
                content: [{ topic: 'Angular All Concepts[GIT]', link: 'https://github.com/siripuramjagadishraj1/4.UI_angular_all_concepts' }
                ]
            },
            { sl: 4,
                category: 'FRONT_END',
                topic: 'JQuery',
                duration: '',
                fromTo: '',
                status: 'PENDING',
                comment: 'DONE',
                content: []
            }
        ];
        this.backEndTopicsCompleted = [
            { sl: 1,
                category: 'BACK_END',
                topic: 'JAVA-8',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'REVISE_AGAIN',
                content: []
            },
            { sl: 2,
                category: 'BACK_END',
                topic: 'Concurrency',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'REVISE_AGAIN',
                content: ['https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent',
                    'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/atomic',
                    'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/lock',
                    'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/streams',
                    'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/java8'
                ]
            },
            { sl: 3,
                category: 'BACK_END',
                topic: 'Spring Boot',
                duration: '',
                fromTo: '',
                status: 'DONE',
                comment: 'AT_LAST',
                content: ['Exception Handling(3 ways)',
                    'LomobokJar, MapStract',
                    'Testing: Junit, mockito, pwr mock,Unit vs Integraton testing',
                    'Mock, spy, stub',
                    'High Level Concepts: Gateway, security, configserver, service-service'
                ]
            },
            { sl: 4,
                category: 'BACK_END',
                topic: 'Hibernate',
                duration: '',
                fromTo: '',
                status: 'PENDING',
                comment: 'AT_LAST',
                content: []
            }
        ];
    }
    ngOnInit() {
    }
    getColor(a) {
        if (a % 2 == 0)
            return '#EEEEEE';
        else
            return '#DDDDDD';
    }
    getIncomplete(color) {
        if (color == 'PENDING')
            return 'red';
        else
            return 'none';
    }
};
InstallingStuffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installing-stuff',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./installing-stuff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/installing-stuff/installing-stuff.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./installing-stuff.component.css */ "./src/app/loggedin/installing-stuff/installing-stuff.component.css")).default]
    })
], InstallingStuffComponent);



/***/ }),

/***/ "./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2ludGVncmF0aW9uLW9mLWZyYW1ld29ya3MvaW50ZWdyYXRpb24tb2YtZnJhbWV3b3Jrcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IntegrationOfFrameworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationOfFrameworksComponent", function() { return IntegrationOfFrameworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntegrationOfFrameworksComponent = class IntegrationOfFrameworksComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntegrationOfFrameworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-integration-of-frameworks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./integration-of-frameworks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./integration-of-frameworks.component.css */ "./src/app/loggedin/integration-of-frameworks/integration-of-frameworks.component.css")).default]
    })
], IntegrationOfFrameworksComponent);



/***/ }),

/***/ "./src/app/loggedin/lazy-loading/lazy-loading.component.css":
/*!******************************************************************!*\
  !*** ./src/app/loggedin/lazy-loading/lazy-loading.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2xhenktbG9hZGluZy9sYXp5LWxvYWRpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/lazy-loading/lazy-loading.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/loggedin/lazy-loading/lazy-loading.component.ts ***!
  \*****************************************************************/
/*! exports provided: LazyLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingComponent", function() { return LazyLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyLoadingComponent = class LazyLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LazyLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lazy-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lazy-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lazy-loading.component.css */ "./src/app/loggedin/lazy-loading/lazy-loading.component.css")).default]
    })
], LazyLoadingComponent);



/***/ }),

/***/ "./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2xhenktbG9hZGluZy9sYXp5LW1vZHVsZS9sYXp5LW1vZHVsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.ts ***!
  \****************************************************************************/
/*! exports provided: LazyModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModuleComponent", function() { return LazyModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyModuleComponent = class LazyModuleComponent {
    constructor() { }
    ngOnInit() {
    }
};
LazyModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lazy-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lazy-module.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lazy-module.component.css */ "./src/app/loggedin/lazy-loading/lazy-module/lazy-module.component.css")).default]
    })
], LazyModuleComponent);



/***/ }),

/***/ "./src/app/loggedin/learn-type-script/learn-type-script.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/loggedin/learn-type-script/learn-type-script.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2xlYXJuLXR5cGUtc2NyaXB0L2xlYXJuLXR5cGUtc2NyaXB0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/learn-type-script/learn-type-script.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loggedin/learn-type-script/learn-type-script.component.ts ***!
  \***************************************************************************/
/*! exports provided: LearnTypeScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnTypeScriptComponent", function() { return LearnTypeScriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearnTypeScriptComponent = class LearnTypeScriptComponent {
    constructor() { }
    ngOnInit() {
    }
};
LearnTypeScriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-type-script',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learn-type-script.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/learn-type-script/learn-type-script.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learn-type-script.component.css */ "./src/app/loggedin/learn-type-script/learn-type-script.component.css")).default]
    })
], LearnTypeScriptComponent);



/***/ }),

/***/ "./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL2xvY2FsLXJlZmVyZW5jZXMtYW5kLXRyaWNrcy9sb2NhbC1yZWZlcmVuY2VzLWFuZC10cmlja3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LocalReferencesAndTricksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalReferencesAndTricksComponent", function() { return LocalReferencesAndTricksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalReferencesAndTricksComponent = class LocalReferencesAndTricksComponent {
    constructor() {
        this.serverId = "ServerID-String..Example";
    }
    ngOnInit() {
    }
    getServerStatus() {
        return 'getServerStatus--Example';
    }
};
LocalReferencesAndTricksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-local-references-and-tricks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./local-references-and-tricks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./local-references-and-tricks.component.css */ "./src/app/loggedin/local-references-and-tricks/local-references-and-tricks.component.css")).default]
    })
], LocalReferencesAndTricksComponent);



/***/ }),

/***/ "./src/app/loggedin/observables-demo/observables-demo.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/loggedin/observables-demo/observables-demo.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL29ic2VydmFibGVzLWRlbW8vb2JzZXJ2YWJsZXMtZGVtby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/loggedin/observables-demo/observables-demo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loggedin/observables-demo/observables-demo.component.ts ***!
  \*************************************************************************/
/*! exports provided: ObservablesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesDemoComponent", function() { return ObservablesDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ObservablesDemoComponent = class ObservablesDemoComponent {
    constructor() {
        this.testSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    showtestSubject() {
        this.testSubject.next(Math.round((Math.random() * 100)));
    }
    ngOnInit() {
        this.testSubject.subscribe((data) => { console.log(data); });
    }
    ngOnDestroy() {
        this.testSubject.unsubscribe();
    }
};
ObservablesDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-observables-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./observables-demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/observables-demo/observables-demo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./observables-demo.component.css */ "./src/app/loggedin/observables-demo/observables-demo.component.css")).default]
    })
], ObservablesDemoComponent);



/***/ }),

/***/ "./src/app/loggedin/output-elements/nested-output/nested-output.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/loggedin/output-elements/nested-output/nested-output.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL291dHB1dC1lbGVtZW50cy9uZXN0ZWQtb3V0cHV0L25lc3RlZC1vdXRwdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/output-elements/nested-output/nested-output.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/loggedin/output-elements/nested-output/nested-output.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NestedOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedOutputComponent", function() { return NestedOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NestedOutputComponent = class NestedOutputComponent {
    constructor() {
        this.element = "Hello";
        this.generatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    generateEvent() {
        this.generatedEvent.emit({ name: 'good Name', type: 'good Name' });
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('element')
], NestedOutputComponent.prototype, "element", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NestedOutputComponent.prototype, "generatedEvent", void 0);
NestedOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nested-output',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nested-output.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/nested-output/nested-output.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nested-output.component.css */ "./src/app/loggedin/output-elements/nested-output/nested-output.component.css")).default]
    })
], NestedOutputComponent);



/***/ }),

/***/ "./src/app/loggedin/output-elements/output-elements.component.css":
/*!************************************************************************!*\
  !*** ./src/app/loggedin/output-elements/output-elements.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL291dHB1dC1lbGVtZW50cy9vdXRwdXQtZWxlbWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loggedin/output-elements/output-elements.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/loggedin/output-elements/output-elements.component.ts ***!
  \***********************************************************************/
/*! exports provided: OutputElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputElementsComponent", function() { return OutputElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OutputElementsComponent = class OutputElementsComponent {
    constructor() {
        this.eachElement = "Jagadish";
    }
    ngOnInit() {
    }
    eventGenerated(event) {
        console.log(event);
    }
};
OutputElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-output-elements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./output-elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/output-elements/output-elements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./output-elements.component.css */ "./src/app/loggedin/output-elements/output-elements.component.css")).default]
    })
], OutputElementsComponent);



/***/ }),

/***/ "./src/app/loggedin/routing-cheat/routing-cheat.component.css":
/*!********************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/routing-cheat.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul{ list-style-type: none; \r\n    padding-left: 0px; \r\n    margin-bottom: 0px; \r\n    background-color: #EEEEEE;\r\n  }\r\nli{ border-style: solid; \r\n    border-top-width: 0px; \r\n    border-bottom-width:0.1px; \r\n    border-right-width: 0; \r\n    border-left-width: 0;  \r\n    border-color: black;\r\n  }\r\n.eachHeading{\r\n  height: 4em;\r\n  padding: 1.5em;\r\n  font-size: 14;\r\n  font-weight: bold;\r\n  color: #666666;\r\n}\r\nli:hover {\r\n  background-color: #BBBBBB;\r\n  cursor: pointer;\r\n}\r\nli a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nZ2VkaW4vcm91dGluZy1jaGVhdC9yb3V0aW5nLWNoZWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFDRixJQUFJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCO0FBRUY7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dnZWRpbi9yb3V0aW5nLWNoZWF0L3JvdXRpbmctY2hlYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVseyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgfVxyXG5saXsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7IFxyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDowLjFweDsgXHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7IFxyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7ICBcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuLmVhY2hIZWFkaW5ne1xyXG4gIGhlaWdodDogNGVtO1xyXG4gIHBhZGRpbmc6IDEuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJCQkJCO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5saSBhe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/loggedin/routing-cheat/routing-cheat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/routing-cheat.component.ts ***!
  \*******************************************************************/
/*! exports provided: RoutingCheatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingCheatComponent", function() { return RoutingCheatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoutingCheatComponent = class RoutingCheatComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoutingCheatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routing-cheat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./routing-cheat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/routing-cheat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./routing-cheat.component.css */ "./src/app/loggedin/routing-cheat/routing-cheat.component.css")).default]
    })
], RoutingCheatComponent);



/***/ }),

/***/ "./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL3JvdXRpbmctY2hlYXQvc3ViLXJvdXRlMS9zdWItcm91dGUxLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubRoute1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRoute1Component", function() { return SubRoute1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubRoute1Component = class SubRoute1Component {
    constructor() { }
    ngOnInit() {
    }
};
SubRoute1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-route1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-route1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-route1.component.css */ "./src/app/loggedin/routing-cheat/sub-route1/sub-route1.component.css")).default]
    })
], SubRoute1Component);



/***/ }),

/***/ "./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZGluL3JvdXRpbmctY2hlYXQvc3ViLXJvdXRlMi9zdWItcm91dGUyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubRoute2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRoute2Component", function() { return SubRoute2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SubRoute2Component = class SubRoute2Component {
    constructor() { }
    ngOnInit() {
    }
};
SubRoute2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sub-route2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sub-route2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sub-route2.component.css */ "./src/app/loggedin/routing-cheat/sub-route2/sub-route2.component.css")).default]
    })
], SubRoute2Component);



/***/ }),

/***/ "./src/app/myCustomPipe.ts":
/*!*********************************!*\
  !*** ./src/app/myCustomPipe.ts ***!
  \*********************************/
/*! exports provided: myCustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCustomPipe", function() { return myCustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let myCustomPipe = class myCustomPipe {
    transform(value, ...args) {
        console.log(value);
        console.log(args);
        return "Hanuman";
    }
};
myCustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myCustomPipe' })
], myCustomPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CODE_BASE\4.UI_angular_all_concepts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map