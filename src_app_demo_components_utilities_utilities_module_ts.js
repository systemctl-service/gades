"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_utilities_utilities_module_ts"],{

/***/ 2317:
/*!********************************************************************!*\
  !*** ./src/app/demo/components/utilities/icons/icons.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsComponent: () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_demo_service_icon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/icon.service */ 4528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 873);
var _class;




function IconsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-2xl pi pi-", icon_r1.properties.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("pi-", icon_r1.properties.name, "");
  }
}
class IconsComponent {
  constructor(iconService) {
    this.iconService = iconService;
    this.icons = [];
    this.filteredIcons = [];
  }
  ngOnInit() {
    this.iconService.getIcons().subscribe(data => {
      data = data.filter(value => {
        return value.icon.tags.indexOf('deprecate') === -1;
      });
      let icons = data;
      icons.sort((icon1, icon2) => {
        if (icon1.properties.name < icon2.properties.name) return -1;else if (icon1.properties.name < icon2.properties.name) return 1;else return 0;
      });
      this.icons = icons;
      this.filteredIcons = data;
    });
  }
  onFilter(event) {
    const searchText = event.target.value;
    if (!searchText) {
      this.filteredIcons = this.icons;
    } else {
      this.filteredIcons = this.icons.filter(it => {
        return it.icon.tags[0].includes(searchText);
      });
    }
  }
}
_class = IconsComponent;
_class.ɵfac = function IconsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_icon_service__WEBPACK_IMPORTED_MODULE_0__.IconService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 59,
  vars: 1,
  consts: [[1, "card"], [1, "app-code"], [1, "pi", "pi-check", 2, "margin-right", ".5rem"], [1, "pi", "pi-times"], [1, "pi", "pi-check"], [1, "pi", "pi-check", 2, "font-size", "2rem"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], ["href", "https://github.com/primefaces/primeicons/issues", 1, "text-primary", "hover:underline"], ["pInputText", "", "placeholder", "Search an icon", 1, "w-full", "p-3", "mt-3", "mb-5", "w-full", "p-3", "mt-3", "mb-5", 3, "input"], [1, "grid", "text-center"], ["class", "col-6 sm:col-4 lg:col-3 xl:col-2 pb-5", 4, "ngFor", "ngForOf"], [1, "col-6", "sm:col-4", "lg:col-3", "xl:col-2", "pb-5"]],
  template: function IconsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Download");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pre", 1)(6, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "npm install primeicons --save");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Getting Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "PrimeIcons use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "pi pi-{icon}");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " syntax such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "pi pi-check");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ". A standalone icon can be displayed using an element such as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pre", 1)(24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "<i class=\"pi pi-check\"></i>\n<i class=\"pi pi-times\"></i>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 2)(27, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Size of the icons can easily be changed using font-size property.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "pre", 1)(33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "<i class=\"pi pi-check\"></i>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "pre", 1)(37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "<i class=\"pi pi-check\" style=\"font-size: 2rem\"></i>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Spinning Animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Special pi-spin class applies infinite rotate to an icon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "pre", 1)(45, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "<i class=\"pi pi-spin pi-spinner\" style=\"font-size: 2rem\"></i>");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "List of Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Here is the current list of PrimeIcons, more icons will be added periodically. You may also ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "request new icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " at the issue tracker.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function IconsComponent_Template_input_input_56_listener($event) {
        return ctx.onFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, IconsComponent_div_58_Template, 4, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredIcons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText],
  encapsulation: 2
});

/***/ }),

/***/ 9372:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/utilities/utilities-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesRoutingModule: () => (/* binding */ UtilitiesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/icons.component */ 2317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class UtilitiesRoutingModule {}
_class = UtilitiesRoutingModule;
_class.ɵfac = function UtilitiesRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
    path: 'icons',
    data: {
      breadcrumb: 'Prime Icons'
    },
    component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent
  }, {
    path: '**',
    redirectTo: '/notfound'
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UtilitiesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1178:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/utilities/utilities.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilitiesModule: () => (/* binding */ UtilitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/icons.component */ 2317);
/* harmony import */ var _utilities_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities-routing.module */ 9372);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class UtilitiesModule {}
_class = UtilitiesModule;
_class.ɵfac = function UtilitiesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _utilities_routing_module__WEBPACK_IMPORTED_MODULE_1__.UtilitiesRoutingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UtilitiesModule, {
    declarations: [_icons_icons_component__WEBPACK_IMPORTED_MODULE_0__.IconsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _utilities_routing_module__WEBPACK_IMPORTED_MODULE_1__.UtilitiesRoutingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_utilities_utilities_module_ts.js.map