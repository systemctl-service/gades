"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_pages_empty_emptydemo_module_ts"],{

/***/ 5844:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoRoutingModule: () => (/* binding */ EmptyDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _emptydemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptydemo.component */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class EmptyDemoRoutingModule {}
_class = EmptyDemoRoutingModule;
_class.ɵfac = function EmptyDemoRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
    path: '',
    component: _emptydemo_component__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmptyDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5903:
/*!********************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoComponent: () => (/* binding */ EmptyDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class EmptyDemoComponent {}
_class = EmptyDemoComponent;
_class.ɵfac = function EmptyDemoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 7,
  vars: 0,
  consts: [[1, "grid"], [1, "col-12"], [1, "card"]],
  template: function EmptyDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Empty Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This is your empty page template to start building beautiful applications.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 1157:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoModule: () => (/* binding */ EmptyDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptydemo-routing.module */ 5844);
/* harmony import */ var _emptydemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptydemo.component */ 5903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class EmptyDemoModule {}
_class = EmptyDemoModule;
_class.ɵfac = function EmptyDemoModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmptyDemoModule, {
    declarations: [_emptydemo_component__WEBPACK_IMPORTED_MODULE_1__.EmptyDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_pages_empty_emptydemo_module_ts.js.map