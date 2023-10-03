"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_pages_pages_module_ts"],{

/***/ 8877:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/pages/pages-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class PagesRoutingModule {}
_class = PagesRoutingModule;
_class.ɵfac = function PagesRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
    path: 'crud',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-paginator_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-arrowdown_mjs-node_modules_primeng_fesm20-515138"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-selectbutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-windowmaximize_mjs-node_modules_primeng_f-d769f8"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_pages_crud_crud_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crud/crud.module */ 7488)).then(m => m.CrudModule)
  }, {
    path: 'empty',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_empty_emptydemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empty/emptydemo.module */ 1157)).then(m => m.EmptyDemoModule)
  }, {
    path: 'timeline',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_pages_timeline_timelinedemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timelinedemo.module */ 1754)).then(m => m.TimelineDemoModule)
  }, {
    path: '**',
    redirectTo: '/notfound'
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4586:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/pages/pages.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 8877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class PagesModule {}
_class = PagesModule;
_class.ɵfac = function PagesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_pages_pages_module_ts.js.map