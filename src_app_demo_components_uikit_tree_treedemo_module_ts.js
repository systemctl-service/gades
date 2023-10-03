"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_uikit_tree_treedemo_module_ts"],{

/***/ 28:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoRoutingModule: () => (/* binding */ TreeDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _treedemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treedemo.component */ 5850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class TreeDemoRoutingModule {}
_class = TreeDemoRoutingModule;
_class.ɵfac = function TreeDemoRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
    path: '',
    component: _treedemo_component__WEBPACK_IMPORTED_MODULE_0__.TreeDemoComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5850:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoComponent: () => (/* binding */ TreeDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_demo_service_node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/node.service */ 1609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tree */ 4044);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ 2957);
var _class;






function TreeDemoComponent_ng_template_11_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r4.header, " ");
  }
}
function TreeDemoComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_11_th_1_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r2);
  }
}
function TreeDemoComponent_ng_template_12_td_1_p_treeTableToggler_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeTableToggler", 11);
  }
  if (rf & 2) {
    const rowNode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowNode", rowNode_r5);
  }
}
function TreeDemoComponent_ng_template_12_td_1_p_treeTableCheckbox_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeTableCheckbox", 12);
  }
  if (rf & 2) {
    const rowNode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", rowNode_r5);
  }
}
function TreeDemoComponent_ng_template_12_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_12_td_1_p_treeTableToggler_1_Template, 1, 1, "p-treeTableToggler", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TreeDemoComponent_ng_template_12_td_1_p_treeTableCheckbox_2_Template, 1, 1, "p-treeTableCheckbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const rowData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r10 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r10 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rowData_r6[col_r9.field], " ");
  }
}
function TreeDemoComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_12_td_1_Template, 4, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r7 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r7);
  }
}
class TreeDemoComponent {
  constructor(nodeService) {
    this.nodeService = nodeService;
    this.files1 = [];
    this.files2 = [];
    this.files3 = [];
    this.selectedFiles1 = [];
    this.selectedFiles2 = [];
    this.selectedFiles3 = {};
    this.cols = [];
  }
  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);
    this.nodeService.getFiles().then(files => {
      this.files3 = [{
        label: 'Root',
        children: files
      }];
    });
    this.cols = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'size',
      header: 'Size'
    }, {
      field: 'type',
      header: 'Type'
    }];
  }
}
_class = TreeDemoComponent;
_class.ɵfac = function TreeDemoComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_node_service__WEBPACK_IMPORTED_MODULE_0__.NodeService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 7,
  consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["selectionMode", "checkbox", 3, "value", "selection", "selectionChange"], ["selectionMode", "checkbox", 3, "value", "columns", "selection", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["layout", "horizontal", "selectionMode", "single", 3, "value", "selection", "selectionChange"], [4, "ngFor", "ngForOf"], [3, "rowNode", 4, "ngIf"], [3, "value", 4, "ngIf"], [3, "rowNode"], [3, "value"]],
  template: function TreeDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tree");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-tree", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_tree_selectionChange_5_listener($event) {
        return ctx.selectedFiles1 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "TreeTable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-treeTable", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_treeTable_selectionChange_10_listener($event) {
        return ctx.selectedFiles2 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TreeDemoComponent_ng_template_11_Template, 2, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TreeDemoComponent_ng_template_12_Template, 2, 1, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Horizontal Tree");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p-tree", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_tree_selectionChange_17_listener($event) {
        return ctx.selectedFiles3 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files1)("selection", ctx.selectedFiles1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files2)("columns", ctx.cols)("selection", ctx.selectedFiles2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files3)("selection", ctx.selectedFiles3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_tree__WEBPACK_IMPORTED_MODULE_3__.Tree, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TreeTable, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TTCheckbox],
  encapsulation: 2
});

/***/ }),

/***/ 4551:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoModule: () => (/* binding */ TreeDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _treedemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treedemo.component */ 5850);
/* harmony import */ var _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treedemo-routing.module */ 28);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tree */ 4044);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/treetable */ 2957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class TreeDemoModule {}
_class = TreeDemoModule;
_class.ɵfac = function TreeDemoModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeDemoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_tree__WEBPACK_IMPORTED_MODULE_5__.TreeModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_6__.TreeTableModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TreeDemoModule, {
    declarations: [_treedemo_component__WEBPACK_IMPORTED_MODULE_0__.TreeDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeDemoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_tree__WEBPACK_IMPORTED_MODULE_5__.TreeModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_6__.TreeTableModule]
  });
})();

/***/ }),

/***/ 7613:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-check.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckIcon: () => (/* binding */ CheckIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);

var _class;



class CheckIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
_class = CheckIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["CheckIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'CheckIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8859:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-minus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinusIcon: () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);

var _class;




class MinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
_class = MinusIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MinusIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MinusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["MinusIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MinusIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'MinusIcon',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7186:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-plus.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusIcon: () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class;




class PlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(...args) {
    super(...args);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
  }
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
  }
}
_class = PlusIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlusIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PlusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["PlusIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 7,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 0)(1, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "rect", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.getClassNames());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("clip-path", ctx.pathId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.pathId);
    }
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PlusIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'PlusIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4044:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tree.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree),
/* harmony export */   TreeModule: () => (/* binding */ TreeModule),
/* harmony export */   UITreeNode: () => (/* binding */ UITreeNode)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/scroller */ 1422);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/check */ 7613);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevrondown */ 2541);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/minus */ 8859);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/plus */ 7186);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/search */ 9103);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/spinner */ 9184);

var _class, _class2, _class3;



















const _c0 = function (a0) {
  return {
    "p-treenode-droppoint-active": a0
  };
};
function _class_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function _class_ng_template_0_li_0_Template_li_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onDropPoint($event, -1));
    })("dragover", function _class_ng_template_0_li_0_Template_li_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onDropPointDragOver($event));
    })("dragenter", function _class_ng_template_0_li_0_Template_li_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onDropPointDragEnter($event, -1));
    })("dragleave", function _class_ng_template_0_li_0_Template_li_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onDropPointDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r1.draghoverPrev));
  }
}
function _class_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon");
  }
}
function _class_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronDownIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon");
  }
}
function _class_ng_template_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.node.expanded);
  }
}
function _class_ng_template_0_li_1_span_4_1_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_0_li_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_0_li_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
function _class_ng_template_0_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_span_4_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.tree.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r11.node.expanded));
  }
}
function _class_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function _class_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "MinusIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function _class_ng_template_0_li_1_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template, 1, 1, "CheckIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template, 1, 1, "MinusIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.isSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.node.partialSelected);
  }
}
function _class_ng_template_0_li_1_div_5_3_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_0_li_1_div_5_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_0_li_1_div_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c2 = function (a0) {
  return {
    "p-checkbox-disabled": a0
  };
};
const _c3 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-indeterminate": a1
  };
};
const _c4 = function (a0, a1) {
  return {
    $implicit: a0,
    partialSelected: a1
  };
};
function _class_ng_template_0_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_li_1_div_5_ng_container_2_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_0_li_1_div_5_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx_r12.node.selectable === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx_r12.isSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.tree.checkboxIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.tree.checkboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c4, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
  }
}
function _class_ng_template_0_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r13.getIcon());
  }
}
function _class_ng_template_0_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.node.label);
  }
}
function _class_ng_template_0_li_1_span_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_ng_template_0_li_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_span_9_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.tree.getTemplateForNode(ctx_r15.node))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r15.node));
  }
}
function _class_ng_template_0_li_1_ul_10_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeNode", 21);
  }
  if (rf & 2) {
    const childNode_r28 = ctx.$implicit;
    const firstChild_r29 = ctx.first;
    const lastChild_r30 = ctx.last;
    const index_r31 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", childNode_r28)("parentNode", ctx_r27.node)("firstChild", firstChild_r29)("lastChild", lastChild_r30)("index", index_r31)("itemSize", ctx_r27.itemSize)("level", ctx_r27.level + 1);
  }
}
function _class_ng_template_0_li_1_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_ul_10_p_treeNode_1_Template, 1, 7, "p-treeNode", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r16.node.expanded ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.node.children)("ngForTrackBy", ctx_r16.tree.trackBy);
  }
}
const _c5 = function (a1, a2) {
  return ["p-treenode", a1, a2];
};
const _c6 = function (a0) {
  return {
    height: a0
  };
};
const _c7 = function (a0, a1, a2) {
  return {
    "p-treenode-selectable": a0,
    "p-treenode-dragover": a1,
    "p-highlight": a2
  };
};
function _class_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_0_li_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.onNodeClick($event));
    })("contextmenu", function _class_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.onNodeRightClick($event));
    })("touchend", function _class_ng_template_0_li_1_Template_div_touchend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.onNodeTouchEnd());
    })("drop", function _class_ng_template_0_li_1_Template_div_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.onDropNode($event));
    })("dragover", function _class_ng_template_0_li_1_Template_div_dragover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.onDropNodeDragOver($event));
    })("dragenter", function _class_ng_template_0_li_1_Template_div_dragenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.onDropNodeDragEnter($event));
    })("dragleave", function _class_ng_template_0_li_1_Template_div_dragleave_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.onDropNodeDragLeave($event));
    })("dragstart", function _class_ng_template_0_li_1_Template_div_dragstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.onDragStart($event));
    })("dragend", function _class_ng_template_0_li_1_Template_div_dragend_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.onDragStop($event));
    })("keydown", function _class_ng_template_0_li_1_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_0_li_1_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_0_li_1_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_ng_template_0_li_1_span_4_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_0_li_1_div_5_Template, 4, 14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_0_li_1_span_6_Template, 1, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class_ng_template_0_li_1_span_8_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, _class_ng_template_0_li_1_span_9_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class_ng_template_0_li_1_ul_10_Template, 2, 4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r2.node.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c5, ctx_r2.node.styleClass || "", ctx_r2.isLeaf() ? "p-treenode-leaf" : ""))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c6, ctx_r2.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("padding-left", ctx_r2.level * ctx_r2.indentation + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("draggable", ctx_r2.tree.draggableNodes)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](27, _c7, ctx_r2.tree.selectionMode && ctx_r2.node.selectable !== false, ctx_r2.draghoverNode, ctx_r2.isSelected()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0)("aria-posinset", ctx_r2.index + 1)("aria-expanded", ctx_r2.node.expanded)("aria-selected", ctx_r2.isSelected())("aria-label", ctx_r2.node.label)("data-id", ctx_r2.node.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.tree.togglerAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.tree.selectionMode == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.node.icon || ctx_r2.node.expandedIcon || ctx_r2.node.collapsedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.tree.virtualScroll && ctx_r2.node.children && ctx_r2.node.expanded);
  }
}
function _class_ng_template_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function _class_ng_template_0_li_2_Template_li_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.onDropPoint($event, 1));
    })("dragover", function _class_ng_template_0_li_2_Template_li_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.onDropPointDragOver($event));
    })("dragenter", function _class_ng_template_0_li_2_Template_li_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.onDropPointDragEnter($event, 1));
    })("dragleave", function _class_ng_template_0_li_2_Template_li_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.onDropPointDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r3.draghoverNext));
  }
}
const _c8 = function (a0) {
  return {
    "p-treenode-connector-line": a0
  };
};
function _class_ng_template_0_table_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27)(1, "table", 28)(2, "tbody")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c8, !ctx_r49.firstChild));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c8, !ctx_r49.lastChild));
  }
}
function _class_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "PlusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r57.tree.togglerAriaLabel);
  }
}
function _class_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "MinusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r58.tree.togglerAriaLabel);
  }
}
function _class_ng_template_0_table_3_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template, 1, 2, "PlusIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template, 1, 2, "MinusIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r55.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.node.expanded);
  }
}
function _class_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_0_table_3_span_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_ng_template_0_table_3_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_table_3_span_6_span_2_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r56.tree.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r56.node.expanded));
  }
}
function _class_ng_template_0_table_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r61.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_table_3_span_6_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_table_3_span_6_span_2_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-tree-toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r50.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.tree.togglerIconTemplate);
  }
}
function _class_ng_template_0_table_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r51.getIcon());
  }
}
function _class_ng_template_0_table_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r52.node.label);
  }
}
function _class_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_ng_template_0_table_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.tree.getTemplateForNode(ctx_r53.node))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r53.node));
  }
}
function _class_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeNode", 36);
  }
  if (rf & 2) {
    const childNode_r65 = ctx.$implicit;
    const firstChild_r66 = ctx.first;
    const lastChild_r67 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", childNode_r65)("firstChild", firstChild_r66)("lastChild", lastChild_r67);
  }
}
function _class_ng_template_0_table_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r54.node.expanded ? "table-cell" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r54.node.children)("ngForTrackBy", ctx_r54.tree.trackBy);
  }
}
const _c9 = function (a0) {
  return {
    "p-treenode-collapsed": a0
  };
};
const _c10 = function (a0, a1) {
  return {
    "p-treenode-selectable": a0,
    "p-highlight": a1
  };
};
function _class_ng_template_0_table_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "tbody")(2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_0_table_3_td_3_Template, 7, 6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 23)(5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_0_table_3_Template_div_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r68.onNodeClick($event));
    })("contextmenu", function _class_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r70.onNodeRightClick($event));
    })("touchend", function _class_ng_template_0_table_3_Template_div_touchend_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.onNodeTouchEnd());
    })("keydown", function _class_ng_template_0_table_3_Template_div_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r72.onNodeKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_0_table_3_span_6_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, _class_ng_template_0_table_3_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class_ng_template_0_table_3_span_10_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, _class_ng_template_0_table_3_td_11_Template, 3, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r4.node.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c9, !ctx_r4.node.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c10, ctx_r4.tree.selectionMode, ctx_r4.isSelected()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isLeaf());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.node.icon || ctx_r4.node.expandedIcon || ctx_r4.node.collapsedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.node.children && ctx_r4.node.expanded);
  }
}
function _class_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_0_li_0_Template, 1, 3, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_0_li_1_Template, 11, 31, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_0_li_2_Template, 1, 3, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_0_table_3_Template, 12, 15, "table", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tree.droppableNodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.tree.horizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tree.droppableNodes && ctx_r0.lastChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tree.horizontal);
  }
}
const _c11 = ["filter"];
const _c12 = ["scroller"];
const _c13 = ["wrapper"];
function _class2_div_0_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("p-tree-loading-icon pi-spin " + ctx_r9.loadingIcon);
  }
}
function _class2_div_0_div_1_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function _class2_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class2_div_0_div_1_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_div_0_div_1_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_1_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.loadingIconTemplate);
  }
}
function _class2_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_1_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_div_1_ng_container_2_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.loadingIconTemplate);
  }
}
function _class2_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_1_i_1_Template, 1, 2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_div_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIcon);
  }
}
function _class2_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_0_div_3_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SearchIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-tree-filter-icon");
  }
}
function _class2_div_0_div_3_span_4_1_ng_template_0_Template(rf, ctx) {}
function _class2_div_0_div_3_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_div_3_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_div_0_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_3_span_4_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.filterIconTemplate);
  }
}
function _class2_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function _class2_div_0_div_3_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("input", function _class2_div_0_div_3_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21._filter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_0_div_3_SearchIcon_3_Template, 1, 1, "SearchIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_div_0_div_3_span_4_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", ctx_r4.filterPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.filterIconTemplate);
  }
}
function _class2_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeNode", 28, 29);
  }
  if (rf & 2) {
    const rowNode_r30 = ctx.$implicit;
    const firstChild_r31 = ctx.first;
    const lastChild_r32 = ctx.last;
    const index_r33 = ctx.index;
    const scrollerOptions_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).options;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("level", rowNode_r30.level)("rowNode", rowNode_r30)("node", rowNode_r30.node)("firstChild", firstChild_r31)("lastChild", lastChild_r32)("index", ctx_r29.getIndex(scrollerOptions_r27, index_r33))("itemSize", scrollerOptions_r27.itemSize)("indentation", ctx_r29.indentation);
  }
}
function _class2_div_0_p_scroller_4_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template, 2, 8, "p-treeNode", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const scrollerOptions_r27 = ctx_r36.options;
    const items_r26 = ctx_r36.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](scrollerOptions_r27.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", scrollerOptions_r27.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r28.ariaLabel)("aria-labelledby", ctx_r28.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", items_r26)("ngForTrackBy", ctx_r28.trackBy);
  }
}
function _class2_div_0_p_scroller_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_p_scroller_4_ng_template_2_ul_0_Template, 2, 7, "ul", 25);
  }
  if (rf & 2) {
    const items_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", items_r26);
  }
}
function _class2_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c14 = function (a0) {
  return {
    options: a0
  };
};
function _class2_div_0_p_scroller_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const scrollerOptions_r38 = ctx.options;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r37.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c14, scrollerOptions_r38));
  }
}
function _class2_div_0_p_scroller_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_p_scroller_4_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function _class2_div_0_p_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-scroller", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onScroll", function _class2_div_0_p_scroller_4_Template_p_scroller_onScroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.onScroll.emit($event));
    })("onScrollIndexChange", function _class2_div_0_p_scroller_4_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.onScrollIndexChange.emit($event));
    })("onLazyLoad", function _class2_div_0_p_scroller_4_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_p_scroller_4_ng_template_2_Template, 1, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_0_p_scroller_4_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c6, ctx_r5.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r5.serializedValue)("tabindex", -1)("scrollHeight", ctx_r5.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r5.virtualScrollItemSize || ctx_r5._virtualNodeHeight)("lazy", ctx_r5.lazy)("options", ctx_r5.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.loaderTemplate);
  }
}
function _class2_div_0_ng_container_5_ul_3_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeNode", 37);
  }
  if (rf & 2) {
    const node_r47 = ctx.$implicit;
    const firstChild_r48 = ctx.first;
    const lastChild_r49 = ctx.last;
    const index_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", node_r47)("firstChild", firstChild_r48)("lastChild", lastChild_r49)("index", index_r50)("level", 0);
  }
}
function _class2_div_0_ng_container_5_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_ng_container_5_ul_3_p_treeNode_1_Template, 1, 5, "p-treeNode", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r45.ariaLabel)("aria-labelledby", ctx_r45.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r45.getRootNode())("ngForTrackBy", ctx_r45.trackBy);
  }
}
function _class2_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_0_ng_container_5_ul_3_Template, 2, 4, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx_r6.scrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.getRootNode());
  }
}
function _class2_div_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r51.emptyMessageLabel, " ");
  }
}
function _class2_div_0_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 40);
  }
}
function _class2_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_div_6_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.emptyMessageTemplate)("ngIfElse", ctx_r7.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.emptyMessageTemplate);
  }
}
function _class2_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c15 = function (a1, a2, a3, a4) {
  return {
    "p-tree p-component": true,
    "p-tree-selectable": a1,
    "p-treenode-dragover": a2,
    "p-tree-loading": a3,
    "p-tree-flex-scrollable": a4
  };
};
function _class2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function _class2_div_0_Template_div_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r54.onDrop($event));
    })("dragover", function _class2_div_0_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r56.onDragOver($event));
    })("dragenter", function _class2_div_0_Template_div_dragenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r57.onDragEnter());
    })("dragleave", function _class2_div_0_Template_div_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r58.onDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_0_div_3_Template, 5, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_div_0_p_scroller_4_Template, 4, 11, "p-scroller", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_div_0_ng_container_5_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class2_div_0_div_6_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class2_div_0_ng_container_7_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](11, _c15, ctx_r0.selectionMode, ctx_r0.dragHover, ctx_r0.loading, ctx_r0.scrollHeight === "flex"))("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading && (ctx_r0.getRootNode() == null || ctx_r0.getRootNode().length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
function _class2_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_1_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("p-tree-loading-icon pi-spin " + ctx_r64.loadingIcon);
  }
}
function _class2_div_1_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function _class2_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class2_div_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_div_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r67.loadingIconTemplate);
  }
}
function _class2_div_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_1_div_2_ng_container_2_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r65.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r65.loadingIconTemplate);
  }
}
function _class2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_div_2_i_1_Template, 1, 2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.loadingIcon);
  }
}
function _class2_div_1_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-treeNode", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("node", ctx_r61.value[0])("root", true);
  }
}
function _class2_div_1_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r70.emptyMessageLabel, " ");
  }
}
function _class2_div_1_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, null, 40);
  }
}
function _class2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_1_div_4_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r62.emptyMessageTemplate)("ngIfElse", ctx_r62.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r62.emptyMessageTemplate);
  }
}
function _class2_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c16 = function (a1) {
  return {
    "p-tree p-tree-horizontal p-component": true,
    "p-tree-selectable": a1
  };
};
function _class2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_1_div_2_Template, 3, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_1_table_3_Template, 2, 2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_div_1_div_4_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_div_1_ng_container_5_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c16, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.value && ctx_r1.value[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading && (ctx_r1.getRootNode() == null || ctx_r1.getRootNode().length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
class UITreeNode {
  constructor(tree) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "node", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parentNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "root", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "index", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "firstChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "level", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indentation", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemSize", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tree", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "timeout", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draghoverPrev", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draghoverNext", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draghoverNode", void 0);
    this.tree = tree;
  }
  ngOnInit() {
    this.node.parent = this.parentNode;
    if (this.parentNode) {
      this.tree.syncNodeOption(this.node, this.tree.value, 'parent', this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
    }
  }
  getIcon() {
    let icon;
    if (this.node.icon) icon = this.node.icon;else icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
    return UITreeNode.ICON_CLASS + ' ' + icon;
  }
  isLeaf() {
    return this.tree.isNodeLeaf(this.node);
  }
  toggle(event) {
    if (this.node.expanded) this.collapse(event);else this.expand(event);
    event.stopPropagation();
  }
  expand(event) {
    this.node.expanded = true;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
  }
  collapse(event) {
    this.node.expanded = false;
    if (this.tree.virtualScroll) {
      this.tree.updateSerializedValue();
      this.focusVirtualNode();
    }
    this.tree.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
  }
  onNodeClick(event) {
    this.tree.onNodeClick(event, this.node);
  }
  onNodeKeydown(event) {
    if (event.which === 13) {
      this.tree.onNodeClick(event, this.node);
    }
  }
  onNodeTouchEnd() {
    this.tree.onNodeTouchEnd();
  }
  onNodeRightClick(event) {
    this.tree.onNodeRightClick(event, this.node);
  }
  isSelected() {
    return this.tree.isSelected(this.node);
  }
  onDropPoint(event, position) {
    event.preventDefault();
    let dragNode = this.tree.dragNode;
    let dragNodeIndex = this.tree.dragNodeIndex;
    let dragNodeScope = this.tree.dragNodeScope;
    let isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? position === 1 || dragNodeIndex !== this.index - 1 : true;
    if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
      let dropParams = {
        ...this.createDropPointEventMetadata(position)
      };
      if (this.tree.validateDrop) {
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode: dragNode,
          dropNode: this.node,
          index: this.index,
          accept: () => {
            this.processPointDrop(dropParams);
          }
        });
      } else {
        this.processPointDrop(dropParams);
        this.tree.onNodeDrop.emit({
          originalEvent: event,
          dragNode: dragNode,
          dropNode: this.node,
          index: this.index
        });
      }
    }
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  processPointDrop(event) {
    let newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
    event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
    let dropIndex = this.index;
    if (event.position < 0) {
      dropIndex = event.dragNodeSubNodes === newNodeList ? event.dragNodeIndex > event.index ? event.index : event.index - 1 : event.index;
      newNodeList.splice(dropIndex, 0, event.dragNode);
    } else {
      dropIndex = newNodeList.length;
      newNodeList.push(event.dragNode);
    }
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: event.dragNodeIndex
    });
  }
  createDropPointEventMetadata(position) {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node,
      index: this.index,
      position: position
    };
  }
  onDropPointDragOver(event) {
    event.dataTransfer.dropEffect = 'move';
    event.preventDefault();
  }
  onDropPointDragEnter(event, position) {
    if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
      if (position < 0) this.draghoverPrev = true;else this.draghoverNext = true;
    }
  }
  onDropPointDragLeave(event) {
    this.draghoverPrev = false;
    this.draghoverNext = false;
  }
  onDragStart(event) {
    if (this.tree.draggableNodes && this.node.draggable !== false) {
      event.dataTransfer.setData('text', 'data');
      this.tree.dragDropService.startDrag({
        tree: this,
        node: this.node,
        subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
        index: this.index,
        scope: this.tree.draggableScope
      });
    } else {
      event.preventDefault();
    }
  }
  onDragStop(event) {
    this.tree.dragDropService.stopDrag({
      node: this.node,
      subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
      index: this.index
    });
  }
  onDropNodeDragOver(event) {
    event.dataTransfer.dropEffect = 'move';
    if (this.tree.droppableNodes) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onDropNode(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false) {
      let dragNode = this.tree.dragNode;
      if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
        let dropParams = {
          ...this.createDropNodeEventMetadata()
        };
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: this.node,
            index: this.index,
            accept: () => {
              this.processNodeDrop(dropParams);
            }
          });
        } else {
          this.processNodeDrop(dropParams);
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: this.node,
            index: this.index
          });
        }
      }
    }
    event.preventDefault();
    event.stopPropagation();
    this.draghoverNode = false;
  }
  createDropNodeEventMetadata() {
    return {
      dragNode: this.tree.dragNode,
      dragNodeIndex: this.tree.dragNodeIndex,
      dragNodeSubNodes: this.tree.dragNodeSubNodes,
      dropNode: this.node
    };
  }
  processNodeDrop(event) {
    let dragNodeIndex = event.dragNodeIndex;
    event.dragNodeSubNodes.splice(dragNodeIndex, 1);
    if (event.dropNode.children) event.dropNode.children.push(event.dragNode);else event.dropNode.children = [event.dragNode];
    this.tree.dragDropService.stopDrag({
      node: event.dragNode,
      subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
      index: dragNodeIndex
    });
  }
  onDropNodeDragEnter(event) {
    if (this.tree.droppableNodes && this.node?.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
      this.draghoverNode = true;
    }
  }
  onDropNodeDragLeave(event) {
    if (this.tree.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
        this.draghoverNode = false;
      }
    }
  }
  onKeyDown(event) {
    const nodeElement = event.target.parentElement?.parentElement;
    if (nodeElement?.nodeName !== 'P-TREENODE' || this.tree.contextMenu && this.tree.contextMenu.containerViewChild.nativeElement.style.display === 'block') {
      return;
    }
    switch (event.which) {
      //down arrow
      case 40:
        const listElement = this.tree.droppableNodes ? nodeElement.children[1].children[1] : nodeElement.children[0].children[1];
        if (listElement && listElement.children.length > 0) {
          this.focusNode(listElement.children[0]);
        } else {
          const nextNodeElement = nodeElement.nextElementSibling;
          if (nextNodeElement) {
            this.focusNode(nextNodeElement);
          } else {
            let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
            if (nextSiblingAncestor) {
              this.focusNode(nextSiblingAncestor);
            }
          }
        }
        event.preventDefault();
        break;
      //up arrow
      case 38:
        if (nodeElement.previousElementSibling) {
          this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
        } else {
          let parentNodeElement = this.getParentNodeElement(nodeElement);
          if (parentNodeElement) {
            this.focusNode(parentNodeElement);
          }
        }
        event.preventDefault();
        break;
      //right arrow
      case 39:
        if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
          this.expand(event);
        }
        event.preventDefault();
        break;
      //left arrow
      case 37:
        if (this.node?.expanded) {
          this.collapse(event);
        } else {
          let parentNodeElement = this.getParentNodeElement(nodeElement);
          if (parentNodeElement) {
            this.focusNode(parentNodeElement);
          }
        }
        event.preventDefault();
        break;
      //enter
      case 13:
        this.tree.onNodeClick(event, this.node);
        event.preventDefault();
        break;
      default:
        //no op
        break;
    }
  }
  findNextSiblingOfAncestor(nodeElement) {
    let parentNodeElement = this.getParentNodeElement(nodeElement);
    if (parentNodeElement) {
      if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
    } else {
      return null;
    }
  }
  findLastVisibleDescendant(nodeElement) {
    const listElement = Array.from(nodeElement.children).find(el => primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(el, 'p-treenode'));
    const childrenListElement = listElement.children[1];
    if (childrenListElement && childrenListElement.children.length > 0) {
      const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
      return this.findLastVisibleDescendant(lastChildElement);
    } else {
      return nodeElement;
    }
  }
  getParentNodeElement(nodeElement) {
    const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
    return parentNodeElement?.tagName === 'P-TREENODE' ? parentNodeElement : null;
  }
  focusNode(element) {
    if (this.tree.droppableNodes) element.children[1].children[0].focus();else element.children[0].children[0].focus();
  }
  focusVirtualNode() {
    this.timeout = setTimeout(() => {
      let node = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(document.body, `[data-id="${this.node?.key ?? this.node?.data}"]`);
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.focus(node);
    }, 1);
  }
}
_class = UITreeNode;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UITreeNode, "ICON_CLASS", 'p-treenode-icon ');
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UITreeNode, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Tree)));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UITreeNode, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-treeNode"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    rowNode: "rowNode",
    node: "node",
    parentNode: "parentNode",
    root: "root",
    index: "index",
    firstChild: "firstChild",
    lastChild: "lastChild",
    level: "level",
    indentation: "indentation",
    itemSize: "itemSize"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "style", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave"], [3, "ngClass", "ngStyle"], ["role", "treeitem", 1, "p-treenode-content", 3, "draggable", "ngClass", "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", "keydown"], ["type", "button", "pRipple", "", "tabindex", "-1", 1, "p-tree-toggler", "p-link", 3, "click"], [4, "ngIf"], ["class", "p-tree-toggler-icon", 4, "ngIf"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], [1, "p-treenode-label"], ["class", "p-treenode-children", "style", "display: none;", "role", "group", 3, "display", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-toggler-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-checkbox-box", 3, "ngClass"], ["role", "group", 1, "p-treenode-children", 2, "display", "none"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "ngClass", "click", "contextmenu", "touchend", "keydown"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "display", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [3, "ngClass", "click"], [3, "styleClass", "ariaLabel", 4, "ngIf"], [3, "styleClass", "ariaLabel"], [1, "p-treenode-children-container"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_0_Template, 4, 4, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.node);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_8__.MinusIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_9__.PlusIcon, _class];
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UITreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeNode',
      template: `
        <ng-template [ngIf]="node">
            <li
                *ngIf="tree.droppableNodes"
                class="p-treenode-droppoint"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverPrev }"
                (drop)="onDropPoint($event, -1)"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, -1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>
            <li *ngIf="!tree.horizontal" [ngClass]="['p-treenode', node.styleClass || '', isLeaf() ? 'p-treenode-leaf' : '']" [ngStyle]="{ height: itemSize + 'px' }" [style]="node.style">
                <div
                    class="p-treenode-content"
                    [style.paddingLeft]="level * indentation + 'rem'"
                    (click)="onNodeClick($event)"
                    (contextmenu)="onNodeRightClick($event)"
                    (touchend)="onNodeTouchEnd()"
                    (drop)="onDropNode($event)"
                    (dragover)="onDropNodeDragOver($event)"
                    (dragenter)="onDropNodeDragEnter($event)"
                    (dragleave)="onDropNodeDragLeave($event)"
                    [draggable]="tree.draggableNodes"
                    (dragstart)="onDragStart($event)"
                    (dragend)="onDragStop($event)"
                    [attr.tabindex]="0"
                    [ngClass]="{ 'p-treenode-selectable': tree.selectionMode && node.selectable !== false, 'p-treenode-dragover': draghoverNode, 'p-highlight': isSelected() }"
                    role="treeitem"
                    (keydown)="onKeyDown($event)"
                    [attr.aria-posinset]="this.index + 1"
                    [attr.aria-expanded]="this.node.expanded"
                    [attr.aria-selected]="isSelected()"
                    [attr.aria-label]="node.label"
                    [attr.data-id]="node.key"
                >
                    <button type="button" [attr.aria-label]="tree.togglerAriaLabel" class="p-tree-toggler p-link" (click)="toggle($event)" pRipple tabindex="-1">
                        <ng-container *ngIf="!tree.togglerIconTemplate">
                            <ChevronRightIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                            <ChevronDownIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" />
                        </ng-container>
                        <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                            <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                        </span>
                    </button>
                    <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-disabled': node.selectable === false }" *ngIf="tree.selectionMode == 'checkbox'" [attr.aria-checked]="isSelected()">
                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(), 'p-indeterminate': node.partialSelected }">
                            <ng-container *ngIf="!tree.checkboxIconTemplate">
                                <CheckIcon *ngIf="isSelected()" [styleClass]="'p-checkbox-icon'" />
                                <MinusIcon *ngIf="node.partialSelected" [styleClass]="'p-checkbox-icon'" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="tree.checkboxIconTemplate; context: { $implicit: isSelected(), partialSelected: node.partialSelected }"></ng-template>
                        </div>
                    </div>
                    <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                    <span class="p-treenode-label">
                        <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                        <span *ngIf="tree.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </span>
                    </span>
                </div>
                <ul class="p-treenode-children" style="display: none;" *ngIf="!tree.virtualScroll && node.children && node.expanded" [style.display]="node.expanded ? 'block' : 'none'" role="group">
                    <p-treeNode
                        *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; let index = index; trackBy: tree.trackBy"
                        [node]="childNode"
                        [parentNode]="node"
                        [firstChild]="firstChild"
                        [lastChild]="lastChild"
                        [index]="index"
                        [itemSize]="itemSize"
                        [level]="level + 1"
                    ></p-treeNode>
                </ul>
            </li>
            <li
                *ngIf="tree.droppableNodes && lastChild"
                class="p-treenode-droppoint"
                [ngClass]="{ 'p-treenode-droppoint-active': draghoverNext }"
                (drop)="onDropPoint($event, 1)"
                (dragover)="onDropPointDragOver($event)"
                (dragenter)="onDropPointDragEnter($event, 1)"
                (dragleave)="onDropPointDragLeave($event)"
            ></li>
            <table *ngIf="tree.horizontal" [class]="node.styleClass">
                <tbody>
                    <tr>
                        <td class="p-treenode-connector" *ngIf="!root">
                            <table class="p-treenode-connector-table">
                                <tbody>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !firstChild }"></td>
                                    </tr>
                                    <tr>
                                        <td [ngClass]="{ 'p-treenode-connector-line': !lastChild }"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="p-treenode" [ngClass]="{ 'p-treenode-collapsed': !node.expanded }">
                            <div
                                class="p-treenode-content"
                                tabindex="0"
                                [ngClass]="{ 'p-treenode-selectable': tree.selectionMode, 'p-highlight': isSelected() }"
                                (click)="onNodeClick($event)"
                                (contextmenu)="onNodeRightClick($event)"
                                (touchend)="onNodeTouchEnd()"
                                (keydown)="onNodeKeydown($event)"
                            >
                                <span *ngIf="!isLeaf()" [ngClass]="'p-tree-toggler'" (click)="toggle($event)">
                                    <ng-container *ngIf="!tree.togglerIconTemplate">
                                        <PlusIcon *ngIf="!node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                        <MinusIcon *ngIf="node.expanded" [styleClass]="'p-tree-toggler-icon'" [ariaLabel]="tree.togglerAriaLabel" />
                                    </ng-container>
                                    <span *ngIf="tree.togglerIconTemplate" class="p-tree-toggler-icon">
                                        <ng-template *ngTemplateOutlet="tree.togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                    </span>
                                </span>
                                <span [class]="getIcon()" *ngIf="node.icon || node.expandedIcon || node.collapsedIcon"></span>
                                <span class="p-treenode-label">
                                    <span *ngIf="!tree.getTemplateForNode(node)">{{ node.label }}</span>
                                    <span *ngIf="tree.getTemplateForNode(node)">
                                        <ng-container *ngTemplateOutlet="tree.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                                    </span>
                                </span>
                            </div>
                        </td>
                        <td class="p-treenode-children-container" *ngIf="node.children && node.expanded" [style.display]="node.expanded ? 'table-cell' : 'none'">
                            <div class="p-treenode-children">
                                <p-treeNode *ngFor="let childNode of node.children; let firstChild = first; let lastChild = last; trackBy: tree.trackBy" [node]="childNode" [firstChild]="firstChild" [lastChild]="lastChild"></p-treeNode>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Tree,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => Tree)]
      }]
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    node: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parentNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    firstChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lastChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indentation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Tree is used to display hierarchical data.
 * @group Components
 */
class Tree {
  get virtualNodeHeight() {
    return this._virtualNodeHeight;
  }
  set virtualNodeHeight(val) {
    this._virtualNodeHeight = val;
    console.warn('The virtualNodeHeight property is deprecated, use virtualScrollItemSize property instead.');
  }
  /**
   * Callback to invoke on selection change.
   * @param {(TreeNode<any> | TreeNode<any>[] | null)} event - Custom selection change event.
   * @group Emits
   */

  constructor(el, dragDropService, config, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragDropService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    /**
     * An array of treenodes.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    /**
     * Defines the selection mode.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionMode", void 0);
    /**
     * A single treenode instance or an array to refer to the selections.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selection", void 0);
    /**
     * Inline style of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Style class of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Context menu instance.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenu", void 0);
    /**
     * Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "layout", 'vertical');
    /**
     * Scope of the draggable nodes to match a droppableScope.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draggableScope", void 0);
    /**
     * Scope of the droppable nodes to match a draggableScope.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "droppableScope", void 0);
    /**
     * Whether the nodes are draggable.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draggableNodes", void 0);
    /**
     * Whether the nodes are droppable.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "droppableNodes", void 0);
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "metaKeySelection", true);
    /**
     * Whether checkbox selections propagate to ancestor nodes.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "propagateSelectionUp", true);
    /**
     * Whether checkbox selections propagate to descendant nodes.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "propagateSelectionDown", true);
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIcon", void 0);
    /**
     * Text to display when there is no data.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyMessage", '');
    /**
     * Used to define a string that labels the tree.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabel", void 0);
    /**
     * Defines a string that labels the toggler icon for accessibility.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "togglerAriaLabel", void 0);
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabelledBy", void 0);
    /**
     * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "validateDrop", void 0);
    /**
     * When specified, displays an input field to filter the items.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filter", void 0);
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterBy", 'label');
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterMode", 'lenient');
    /**
     * Placeholder text to show when filter input is empty.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterPlaceholder", void 0);
    /**
     * No description available.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filteredNodes", void 0);
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterLocale", void 0);
    /**
     * Height of the scrollable viewport.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeight", void 0);
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazy", false);
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScroll", void 0);
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollItemSize", void 0);
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollOptions", void 0);
    /**
     * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indentation", 1.5);
    /**
     * Custom templates of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_templateMap", void 0);
    /**
     * Function to optimize the node list rendering, default algorithm checks for object identity.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "trackBy", (index, item) => item);
    /**
     * Height of the node.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_virtualNodeHeight", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNodeSelectEvent} event - Node select event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeSelect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNodeUnSelectEvent} event - Node unselect event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeUnselect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNodeExpandEvent} event - Node expand event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeExpand", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNodeCollapseEvent} event - Node collapse event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeCollapse", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is selected with right click.
     * @param {onNodeContextMenuSelect} event - Node context menu select event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeContextMenuSelect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is dropped.
     * @param {TreeNodeDropEvent} event - Node drop event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeDrop", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {TreeLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLazyLoad", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke in virtual scroll mode when scroll position changes.
     * @param {TreeScrollEvent} event - Custom scroll event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onScroll", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
     * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onScrollIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when data is filtered.
     * @param {TreeFilterEvent} event - Custom filter event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scroller", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "wrapperViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "serializedValue", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loaderTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyMessageTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "togglerIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkboxIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nodeTouched", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragNodeTree", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragNodeSubNodes", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragNodeIndex", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragNodeScope", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragHover", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragStartSubscription", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragStopSubscription", void 0);
    this.el = el;
    this.dragDropService = dragDropService;
    this.config = config;
    this.cd = cd;
  }
  ngOnInit() {
    if (this.droppableNodes) {
      this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(event => {
        this.dragNodeTree = event.tree;
        this.dragNode = event.node;
        this.dragNodeSubNodes = event.subNodes;
        this.dragNodeIndex = event.index;
        this.dragNodeScope = event.scope;
      });
      this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(event => {
        this.dragNodeTree = null;
        this.dragNode = null;
        this.dragNodeSubNodes = null;
        this.dragNodeIndex = null;
        this.dragNodeScope = null;
        this.dragHover = false;
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      this.updateSerializedValue();
    }
  }
  get horizontal() {
    return this.layout == 'horizontal';
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_10__.TranslationKeys.EMPTY_MESSAGE);
  }
  ngAfterContentInit() {
    if (this.templates.length) {
      this._templateMap = {};
    }
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'empty':
          this.emptyMessageTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        case 'togglericon':
          this.togglerIconTemplate = item.template;
          break;
        case 'checkboxicon':
          this.checkboxIconTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'filtericon':
          this.filterIconTemplate = item.template;
          break;
        default:
          this._templateMap[item.name] = item.template;
          break;
      }
    });
  }
  updateSerializedValue() {
    this.serializedValue = [];
    this.serializeNodes(null, this.getRootNode(), 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node: node,
          parent: parent,
          level: level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(eventTarget, 'p-tree-toggler') || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(eventTarget, 'p-tree-toggler-icon')) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      if (this.hasFilteredNodes()) {
        node = this.getNodeWithKey(node.key, this.value);
        if (!node) {
          return;
        }
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.isCheckboxSelectionMode()) {
        if (selected) {
          if (this.propagateSelectionDown) this.propagateDown(node, false);else this.selection = this.selection.filter((val, i) => i != index);
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, false);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node: node
          });
        } else {
          if (this.propagateSelectionDown) this.propagateDown(node, true);else this.selection = [...(this.selection || []), node];
          if (this.propagateSelectionUp && node.parent) {
            this.propagateUp(node.parent, true);
          }
          this.selectionChange.emit(this.selection);
          this.onNodeSelect.emit({
            originalEvent: event,
            node: node
          });
        }
      } else {
        let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
        if (metaSelection) {
          let metaKey = event.metaKey || event.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(null);
            } else {
              this.selection = this.selection.filter((val, i) => i != index);
              this.selectionChange.emit(this.selection);
            }
            this.onNodeUnselect.emit({
              originalEvent: event,
              node: node
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = !metaKey ? [] : this.selection || [];
              this.selection = [...this.selection, node];
              this.selectionChange.emit(this.selection);
            }
            this.onNodeSelect.emit({
              originalEvent: event,
              node: node
            });
          }
        } else {
          if (this.isSingleSelectionMode()) {
            if (selected) {
              this.selection = null;
              this.onNodeUnselect.emit({
                originalEvent: event,
                node: node
              });
            } else {
              this.selection = node;
              this.onNodeSelect.emit({
                originalEvent: event,
                node: node
              });
            }
          } else {
            if (selected) {
              this.selection = this.selection.filter((val, i) => i != index);
              this.onNodeUnselect.emit({
                originalEvent: event,
                node: node
              });
            } else {
              this.selection = [...(this.selection || []), node];
              this.onNodeSelect.emit({
                originalEvent: event,
                node: node
              });
            }
          }
          this.selectionChange.emit(this.selection);
        }
      }
    }
    this.nodeTouched = false;
  }
  onNodeTouchEnd() {
    this.nodeTouched = true;
  }
  onNodeRightClick(event, node) {
    if (this.contextMenu) {
      let eventTarget = event.target;
      if (eventTarget.className && eventTarget.className.indexOf('p-tree-toggler') === 0) {
        return;
      } else {
        let index = this.findIndexInSelection(node);
        let selected = index >= 0;
        if (!selected) {
          if (this.isSingleSelectionMode()) this.selectionChange.emit(node);else this.selectionChange.emit([node]);
        }
        this.contextMenu.show(event);
        this.onNodeContextMenuSelect.emit({
          originalEvent: event,
          node: node
        });
      }
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.isSingleSelectionMode()) {
        let areNodesEqual = this.selection.key && this.selection.key === node.key || this.selection == node;
        index = areNodesEqual ? 0 : -1;
      } else {
        for (let i = 0; i < this.selection.length; i++) {
          let selectedNode = this.selection[i];
          let areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;
          if (areNodesEqual) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  syncNodeOption(node, parentNodes, option, value) {
    // to synchronize the node option between the filtered nodes and the original nodes(this.value)
    const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
    if (_node) {
      _node[option] = value || node[option];
    }
  }
  hasFilteredNodes() {
    return this.filter && this.filteredNodes && this.filteredNodes.length;
  }
  getNodeWithKey(key, nodes) {
    for (let node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        let matchedNode = this.getNodeWithKey(key, node.children);
        if (matchedNode) {
          return matchedNode;
        }
      }
    }
  }
  propagateUp(node, select) {
    if (node.children && node.children.length) {
      let selectedCount = 0;
      let childPartialSelected = false;
      for (let child of node.children) {
        if (this.isSelected(child)) {
          selectedCount++;
        } else if (child.partialSelected) {
          childPartialSelected = true;
        }
      }
      if (select && selectedCount == node.children.length) {
        this.selection = [...(this.selection || []), node];
        node.partialSelected = false;
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this.selection = this.selection.filter((val, i) => i != index);
          }
        }
        if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
      }
      this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, select);
    }
  }
  propagateDown(node, select) {
    let index = this.findIndexInSelection(node);
    if (select && index == -1) {
      this.selection = [...(this.selection || []), node];
    } else if (!select && index > -1) {
      this.selection = this.selection.filter((val, i) => i != index);
    }
    node.partialSelected = false;
    this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, select);
      }
    }
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  isSingleSelectionMode() {
    return this.selectionMode && this.selectionMode == 'single';
  }
  isMultipleSelectionMode() {
    return this.selectionMode && this.selectionMode == 'multiple';
  }
  isCheckboxSelectionMode() {
    return this.selectionMode && this.selectionMode == 'checkbox';
  }
  isNodeLeaf(node) {
    return node.leaf == false ? false : !(node.children && node.children.length);
  }
  getRootNode() {
    return this.filteredNodes ? this.filteredNodes : this.value;
  }
  getTemplateForNode(node) {
    if (this._templateMap) return node.type ? this._templateMap[node.type] : this._templateMap['default'];else return null;
  }
  onDragOver(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
    }
  }
  onDrop(event) {
    if (this.droppableNodes && (!this.value || this.value.length === 0)) {
      event.preventDefault();
      let dragNode = this.dragNode;
      if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
        let dragNodeIndex = this.dragNodeIndex;
        this.value = this.value || [];
        if (this.validateDrop) {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: null,
            index: dragNodeIndex,
            accept: () => {
              this.processTreeDrop(dragNode, dragNodeIndex);
            }
          });
        } else {
          this.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: null,
            index: dragNodeIndex
          });
          this.processTreeDrop(dragNode, dragNodeIndex);
        }
      }
    }
  }
  processTreeDrop(dragNode, dragNodeIndex) {
    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
    this.value.push(dragNode);
    this.dragDropService.stopDrag({
      node: dragNode
    });
  }
  onDragEnter() {
    if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
      this.dragHover = true;
    }
  }
  onDragLeave(event) {
    if (this.droppableNodes) {
      let rect = event.currentTarget.getBoundingClientRect();
      if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
        this.dragHover = false;
      }
    }
  }
  allowDrop(dragNode, dropNode, dragNodeScope) {
    if (!dragNode) {
      //prevent random html elements to be dragged
      return false;
    } else if (this.isValidDragScope(dragNodeScope)) {
      let allow = true;
      if (dropNode) {
        if (dragNode === dropNode) {
          allow = false;
        } else {
          let parent = dropNode.parent;
          while (parent != null) {
            if (parent === dragNode) {
              allow = false;
              break;
            }
            parent = parent.parent;
          }
        }
      }
      return allow;
    } else {
      return false;
    }
  }
  isValidDragScope(dragScope) {
    let dropScope = this.droppableScope;
    if (dropScope) {
      if (typeof dropScope === 'string') {
        if (typeof dragScope === 'string') return dropScope === dragScope;else if (Array.isArray(dragScope)) return dragScope.indexOf(dropScope) != -1;
      } else if (Array.isArray(dropScope)) {
        if (typeof dragScope === 'string') {
          return dropScope.indexOf(dragScope) != -1;
        } else if (Array.isArray(dragScope)) {
          for (let s of dropScope) {
            for (let ds of dragScope) {
              if (s === ds) {
                return true;
              }
            }
          }
        }
      }
      return false;
    } else {
      return true;
    }
  }
  _filter(value) {
    let filterValue = value;
    if (filterValue === '') {
      this.filteredNodes = null;
    } else {
      this.filteredNodes = [];
      const searchFields = this.filterBy.split(',');
      const filterText = primeng_utils__WEBPACK_IMPORTED_MODULE_11__.ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
      const isStrictMode = this.filterMode === 'strict';
      for (let node of this.value) {
        let copyNode = {
          ...node
        };
        let paramsWithoutNode = {
          searchFields,
          filterText,
          isStrictMode
        };
        if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
          this.filteredNodes.push(copyNode);
        }
      }
    }
    this.updateSerializedValue();
    this.onFilter.emit({
      filter: filterValue,
      filteredValue: this.filteredNodes
    });
  }
  /**
   * Resets filter.
   * @group Method
   */
  resetFilter() {
    this.filteredNodes = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = '';
    }
  }
  /**
   * Scrolls to virtual index.
   * @param {number} number - Index to be scrolled.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller?.scrollToIndex(index);
  }
  /**
   * Scrolls to virtual index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = {
            ...childNode
          };
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        node.expanded = true;
        return true;
      }
    }
  }
  isFilterMatched(node, params) {
    let {
      searchFields,
      filterText,
      isStrictMode
    } = params;
    let matched = false;
    for (let field of searchFields) {
      let fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_11__.ObjectUtils.removeAccents(String(primeng_utils__WEBPACK_IMPORTED_MODULE_11__.ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
      if (fieldValue.indexOf(filterText) > -1) {
        matched = true;
      }
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        searchFields,
        filterText,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  getIndex(options, index) {
    const getItemOptions = options['getItemOptions'];
    return getItemOptions ? getItemOptions(index).index : index;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngOnDestroy() {
    if (this.dragStartSubscription) {
      this.dragStartSubscription.unsubscribe();
    }
    if (this.dragStopSubscription) {
      this.dragStopSubscription.unsubscribe();
    }
  }
}
_class2 = Tree;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Tree, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.TreeDragDropService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Tree, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["p-tree"]],
  contentQueries: function _class2_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class2_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c11, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c12, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c13, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapperViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    value: "value",
    selectionMode: "selectionMode",
    selection: "selection",
    style: "style",
    styleClass: "styleClass",
    contextMenu: "contextMenu",
    layout: "layout",
    draggableScope: "draggableScope",
    droppableScope: "droppableScope",
    draggableNodes: "draggableNodes",
    droppableNodes: "droppableNodes",
    metaKeySelection: "metaKeySelection",
    propagateSelectionUp: "propagateSelectionUp",
    propagateSelectionDown: "propagateSelectionDown",
    loading: "loading",
    loadingIcon: "loadingIcon",
    emptyMessage: "emptyMessage",
    ariaLabel: "ariaLabel",
    togglerAriaLabel: "togglerAriaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    validateDrop: "validateDrop",
    filter: "filter",
    filterBy: "filterBy",
    filterMode: "filterMode",
    filterPlaceholder: "filterPlaceholder",
    filteredNodes: "filteredNodes",
    filterLocale: "filterLocale",
    scrollHeight: "scrollHeight",
    lazy: "lazy",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    indentation: "indentation",
    _templateMap: "_templateMap",
    trackBy: "trackBy",
    virtualNodeHeight: "virtualNodeHeight"
  },
  outputs: {
    selectionChange: "selectionChange",
    onNodeSelect: "onNodeSelect",
    onNodeUnselect: "onNodeUnselect",
    onNodeExpand: "onNodeExpand",
    onNodeCollapse: "onNodeCollapse",
    onNodeContextMenuSelect: "onNodeContextMenuSelect",
    onNodeDrop: "onNodeDrop",
    onLazyLoad: "onLazyLoad",
    onScroll: "onScroll",
    onScrollIndexChange: "onScrollIndexChange",
    onFilter: "onFilter"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle", "drop", "dragover", "dragenter", "dragleave"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tree-filter-container", 4, "ngIf"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "style", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-tree-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-tree-loading-icon"], [1, "p-tree-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], ["filter", ""], [3, "styleClass", 4, "ngIf"], ["class", "p-tree-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-filter-icon"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["class", "p-tree-container", "role", "tree", 3, "ngClass", "style", 4, "ngIf"], ["role", "tree", 1, "p-tree-container", 3, "ngClass"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation"], ["treeNode", ""], ["pTemplate", "loader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-tree-wrapper"], ["wrapper", ""], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level"], [1, "p-tree-empty-message"], [4, "ngIf", "ngIfElse"], ["emptyFilter", ""], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_Template, 8, 16, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_1_Template, 6, 11, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.horizontal);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.horizontal);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_12__.Scroller, primeng_icons_search__WEBPACK_IMPORTED_MODULE_13__.SearchIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_14__.SpinnerIcon, UITreeNode];
  },
  styles: [".p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}\n"],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Tree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-tree',
      template: `
        <div
            [ngClass]="{ 'p-tree p-component': true, 'p-tree-selectable': selectionMode, 'p-treenode-dragover': dragHover, 'p-tree-loading': loading, 'p-tree-flex-scrollable': scrollHeight === 'flex' }"
            [ngStyle]="style"
            [class]="styleClass"
            *ngIf="!horizontal"
            (drop)="onDrop($event)"
            (dragover)="onDragOver($event)"
            (dragenter)="onDragEnter()"
            (dragleave)="onDragLeave($event)"
        >
            <div class="p-tree-loading-overlay p-component-overlay" *ngIf="loading">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div *ngIf="filter" class="p-tree-filter-container">
                <input #filter type="text" autocomplete="off" class="p-tree-filter p-inputtext p-component" [attr.placeholder]="filterPlaceholder" (keydown.enter)="$event.preventDefault()" (input)="_filter($event.target.value)" />
                <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-tree-filter-icon'" />
                <span *ngIf="filterIconTemplate" class="p-tree-filter-icon">
                    <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                </span>
            </div>

            <p-scroller
                #scroller
                *ngIf="virtualScroll"
                [items]="serializedValue"
                [tabindex]="-1"
                styleClass="p-tree-wrapper"
                [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                [itemSize]="virtualScrollItemSize || _virtualNodeHeight"
                [lazy]="lazy"
                (onScroll)="onScroll.emit($event)"
                (onScrollIndexChange)="onScrollIndexChange.emit($event)"
                (onLazyLoad)="onLazyLoad.emit($event)"
                [options]="virtualScrollOptions"
            >
                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                    <ul *ngIf="items" class="p-tree-container" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode
                            #treeNode
                            *ngFor="let rowNode of items; let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [level]="rowNode.level"
                            [rowNode]="rowNode"
                            [node]="rowNode.node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="getIndex(scrollerOptions, index)"
                            [itemSize]="scrollerOptions.itemSize"
                            [indentation]="indentation"
                        ></p-treeNode>
                    </ul>
                </ng-template>
                <ng-container *ngIf="loaderTemplate">
                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                    </ng-template>
                </ng-container>
            </p-scroller>
            <ng-container *ngIf="!virtualScroll">
                <div #wrapper class="p-tree-wrapper" [style.max-height]="scrollHeight">
                    <ul class="p-tree-container" *ngIf="getRootNode()" role="tree" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy">
                        <p-treeNode
                            *ngFor="let node of getRootNode(); let firstChild = first; let lastChild = last; let index = index; trackBy: trackBy"
                            [node]="node"
                            [firstChild]="firstChild"
                            [lastChild]="lastChild"
                            [index]="index"
                            [level]="0"
                        ></p-treeNode>
                    </ul>
                </div>
            </ng-container>

            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
        <div [ngClass]="{ 'p-tree p-tree-horizontal p-component': true, 'p-tree-selectable': selectionMode }" [ngStyle]="style" [class]="styleClass" *ngIf="horizontal">
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            <div class="p-tree-loading-mask p-component-overlay" *ngIf="loading">
                <i *ngIf="loadingIcon" [class]="'p-tree-loading-icon pi-spin ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-tree-loading-icon'" />
                    <span *ngIf="loadingIconTemplate" class="p-tree-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <table *ngIf="value && value[0]">
                <p-treeNode [node]="value[0]" [root]="true"></p-treeNode>
            </table>
            <div class="p-tree-empty-message" *ngIf="!loading && (getRootNode() == null || getRootNode().length === 0)">
                <ng-container *ngIf="!emptyMessageTemplate; else emptyFilter">
                    {{ emptyMessageLabel }}
                </ng-container>
                <ng-container #emptyFilter *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-tree-horizontal{width:auto;padding-left:0;padding-right:0;overflow:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal tr,.p-tree.p-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{font-weight:400;padding:.4em 1em .4em .2em;display:flex;align-items:center}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-x scroll center center transparent;padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf,.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{padding:0;margin:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=) repeat-y scroll 0 0 transparent;width:1px}.p-tree.p-tree-horizontal table{height:0}.p-scroller .p-tree-container{overflow:visible}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.TreeDragDropService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeNGConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    layout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    draggableScope: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    droppableScope: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    draggableNodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    droppableNodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    propagateSelectionUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    propagateSelectionDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    togglerAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    validateDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filteredNodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indentation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    _templateMap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualNodeHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeContextMenuSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onScrollIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate]
    }],
    filterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['filter']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scroller']
    }],
    wrapperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['wrapper']
    }]
  });
})();
class TreeModule {}
_class3 = TreeModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeModule, "\u0275fac", function _class3_Factory(t) {
  return new (t || _class3)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class3
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_12__.ScrollerModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_8__.MinusIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_13__.SearchIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_14__.SpinnerIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_9__.PlusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_12__.ScrollerModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_12__.ScrollerModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_8__.MinusIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_13__.SearchIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_14__.SpinnerIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_9__.PlusIcon],
      exports: [Tree, primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_12__.ScrollerModule],
      declarations: [Tree, UITreeNode]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2957:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-treetable.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTBody: () => (/* binding */ TTBody),
/* harmony export */   TTCheckbox: () => (/* binding */ TTCheckbox),
/* harmony export */   TTContextMenuRow: () => (/* binding */ TTContextMenuRow),
/* harmony export */   TTEditableColumn: () => (/* binding */ TTEditableColumn),
/* harmony export */   TTHeaderCheckbox: () => (/* binding */ TTHeaderCheckbox),
/* harmony export */   TTReorderableColumn: () => (/* binding */ TTReorderableColumn),
/* harmony export */   TTResizableColumn: () => (/* binding */ TTResizableColumn),
/* harmony export */   TTRow: () => (/* binding */ TTRow),
/* harmony export */   TTScrollableView: () => (/* binding */ TTScrollableView),
/* harmony export */   TTSelectableRow: () => (/* binding */ TTSelectableRow),
/* harmony export */   TTSelectableRowDblClick: () => (/* binding */ TTSelectableRowDblClick),
/* harmony export */   TTSortIcon: () => (/* binding */ TTSortIcon),
/* harmony export */   TTSortableColumn: () => (/* binding */ TTSortableColumn),
/* harmony export */   TreeTable: () => (/* binding */ TreeTable),
/* harmony export */   TreeTableCellEditor: () => (/* binding */ TreeTableCellEditor),
/* harmony export */   TreeTableModule: () => (/* binding */ TreeTableModule),
/* harmony export */   TreeTableService: () => (/* binding */ TreeTableService),
/* harmony export */   TreeTableToggler: () => (/* binding */ TreeTableToggler)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/paginator */ 5302);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scroller */ 1422);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/sortamountdown */ 4949);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/arrowdown */ 3114);
/* harmony import */ var primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/arrowup */ 2790);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/check */ 7613);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/icons/chevrondown */ 2541);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/icons/minus */ 8859);
/* harmony import */ var primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/sortalt */ 5539);
/* harmony import */ var primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/sortamountupalt */ 354);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/spinner */ 9184);

var _class, _class2, _class3, _class4, _class5, _class6, _class7, _class8, _class9, _class10, _class11, _class12, _class13, _class14, _class15, _class16, _class17, _class18;

























const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["table"];
const _c5 = ["scrollableView"];
const _c6 = ["scrollableFrozenView"];
function _class2_div_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("p-treetable-loading-icon pi-spin " + ctx_r11.loadingIcon);
  }
}
function _class2_div_2_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SpinnerIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spin", true)("styleClass", "p-treetable-loading-icon");
  }
}
function _class2_div_2_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class2_div_2_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_2_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_div_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_2_ng_container_3_span_2_1_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.loadingIconTemplate);
  }
}
function _class2_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_2_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_2_ng_container_3_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.loadingIconTemplate);
  }
}
function _class2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_2_i_2_Template, 1, 2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_2_ng_container_3_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loadingIcon);
  }
}
function _class2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_3_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.captionTemplate);
  }
}
function _class2_p_paginator_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.paginatorFirstPageLinkIconTemplate);
  }
}
function _class2_p_paginator_4_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.paginatorPreviousPageLinkIconTemplate);
  }
}
function _class2_p_paginator_4_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.paginatorLastPageLinkIconTemplate);
  }
}
function _class2_p_paginator_4_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_4_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.paginatorNextPageLinkIconTemplate);
  }
}
function _class2_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPageChange", function _class2_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_p_paginator_4_ng_template_1_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_p_paginator_4_ng_template_2_Template, 1, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_p_paginator_4_ng_template_3_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_p_paginator_4_ng_template_4_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks);
  }
}
function _class2_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c7 = function (a0) {
  return {
    $implicit: a0
  };
};
function _class2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_5_ng_container_3_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_div_5_ng_container_5_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "tbody", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tfoot", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class2_div_5_ng_container_8_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c7, ctx_r4.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c7, ctx_r4.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.bodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c7, ctx_r4.columns));
  }
}
const _c8 = function (a0) {
  return {
    width: a0
  };
};
function _class2_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 38, 39);
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ttScrollableView", ctx_r32.frozenColumns)("frozen", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c8, ctx_r32.frozenWidth))("scrollHeight", ctx_r32.scrollHeight);
  }
}
const _c9 = function (a0, a1) {
  return {
    left: a0,
    width: a1
  };
};
function _class2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_6_div_1_Template, 2, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ttScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
  }
}
function _class2_p_paginator_7_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_7_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r35.paginatorFirstPageLinkIconTemplate);
  }
}
function _class2_p_paginator_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r36.paginatorPreviousPageLinkIconTemplate);
  }
}
function _class2_p_paginator_7_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_7_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r37.paginatorLastPageLinkIconTemplate);
  }
}
function _class2_p_paginator_7_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_p_paginator_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_p_paginator_7_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r38.paginatorNextPageLinkIconTemplate);
  }
}
function _class2_p_paginator_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-paginator", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPageChange", function _class2_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_p_paginator_7_ng_template_1_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_p_paginator_7_ng_template_2_Template, 1, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_p_paginator_7_ng_template_3_Template, 1, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_p_paginator_7_ng_template_4_Template, 1, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showFirstLastIcon", ctx_r6.showFirstLastIcon)("dropdownItemTemplate", ctx_r6.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks);
  }
}
function _class2_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.summaryTemplate);
  }
}
function _class2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 42, 43);
  }
}
function _class2_span_10_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ArrowDownIcon");
  }
}
function _class2_span_10_3_ng_template_0_Template(rf, ctx) {}
function _class2_span_10_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_span_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_span_10_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_span_10_3_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.reorderIndicatorUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.reorderIndicatorUpIconTemplate);
  }
}
function _class2_span_11_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ArrowUpIcon");
  }
}
function _class2_span_11_3_ng_template_0_Template(rf, ctx) {}
function _class2_span_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_span_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_span_11_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_span_11_3_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.reorderIndicatorDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.reorderIndicatorDownIconTemplate);
  }
}
const _c10 = function (a1, a2, a3, a4, a5) {
  return {
    "p-treetable p-component": true,
    "p-treetable-hoverable-rows": a1,
    "p-treetable-auto-layout": a2,
    "p-treetable-resizable": a3,
    "p-treetable-resizable-fit": a4,
    "p-treetable-flex-scrollable": a5
  };
};
const _c11 = ["pTreeTableBody", ""];
function _class3_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c12 = function (a0, a1, a2, a3) {
  return {
    $implicit: a0,
    node: a1,
    rowData: a2,
    columns: a3
  };
};
function _class3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const serializedNode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c12, serializedNode_r2, serializedNode_r2.node, serializedNode_r2.node.data, ctx_r4.columns));
  }
}
function _class3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class3_ng_template_0_ng_container_0_Template, 2, 7, "ng-container", 1);
  }
  if (rf & 2) {
    const serializedNode_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serializedNode_r2.visible);
  }
}
function _class3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c13 = function (a0, a1) {
  return {
    $implicit: a0,
    frozen: a1
  };
};
function _class3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c13, ctx_r1.columns, ctx_r1.frozen));
  }
}
const _c14 = ["scrollHeader"];
const _c15 = ["scrollHeaderBox"];
const _c16 = ["scrollBody"];
const _c17 = ["scrollTable"];
const _c18 = ["loadingTable"];
const _c19 = ["scrollFooter"];
const _c20 = ["scrollFooterBox"];
const _c21 = ["scrollableAligner"];
const _c22 = ["scroller"];
const _c23 = ["ttScrollableView", ""];
function _class4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class4_p_scroller_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c24 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function _class4_p_scroller_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class4_p_scroller_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const items_r12 = ctx.$implicit;
    const scrollerOptions_r13 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c24, items_r12, scrollerOptions_r13));
  }
}
function _class4_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c25 = function (a0) {
  return {
    options: a0
  };
};
function _class4_p_scroller_8_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class4_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c25, scrollerOptions_r16));
  }
}
function _class4_p_scroller_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class4_p_scroller_8_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
const _c26 = function (a0) {
  return {
    height: a0
  };
};
function _class4_p_scroller_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-scroller", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLazyLoad", function _class4_p_scroller_8_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.tt.onLazyItemLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class4_p_scroller_8_ng_template_2_Template, 1, 5, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class4_p_scroller_8_ng_container_3_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c26, ctx_r4.tt.scrollHeight !== "flex" ? ctx_r4.tt.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r4.tt.serializedValue)("scrollHeight", ctx_r4.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r4.tt.virtualScrollItemSize || ctx_r4.tt._virtualRowHeight)("lazy", ctx_r4.tt.lazy)("options", ctx_r4.tt.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.loaderTemplate);
  }
}
function _class4_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c27 = function (a0, a1) {
  return {
    "max-height": a0,
    "overflow-y": a1
  };
};
const _c28 = function () {
  return {};
};
function _class4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class4_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c27, ctx_r5.tt.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined, !ctx_r5.frozen && ctx_r5.tt.scrollHeight ? "scroll" : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c24, ctx_r5.serializedValue, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c28)));
  }
}
function _class4_ng_template_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class4_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 21, 22);
  }
}
function _class4_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class4_ng_template_10_ng_container_2_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class4_ng_template_10_div_4_Template, 2, 0, "div", 20);
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r23 = ctx.options;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](scrollerOptions_r23.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r7.tt.tableStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", scrollerOptions_r23.contentStyleClass)("ngStyle", ctx_r7.tt.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.tt.frozenColGroupTemplate || ctx_r7.tt.colGroupTemplate : ctx_r7.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c7, ctx_r7.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTreeTableBody", ctx_r7.columns)("pTreeTableBodyTemplate", ctx_r7.frozen ? ctx_r7.tt.frozenBodyTemplate || ctx_r7.tt.bodyTemplate : ctx_r7.tt.bodyTemplate)("serializedNodes", items_r22)("frozen", ctx_r7.frozen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.frozen);
  }
}
function _class4_div_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class4_div_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24)(2, "div", 25, 26)(4, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class4_div_12_ng_container_5_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tfoot", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class4_div_12_ng_container_7_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r8.tt.tableStyleClass)("ngStyle", ctx_r8.tt.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.frozen ? ctx_r8.tt.frozenColGroupTemplate || ctx_r8.tt.colGroupTemplate : ctx_r8.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c7, ctx_r8.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.frozen ? ctx_r8.tt.frozenFooterTemplate || ctx_r8.tt.footerTemplate : ctx_r8.tt.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c7, ctx_r8.columns));
  }
}
function _class6_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SortAltIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function _class6_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SortAmountUpAltIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function _class6_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SortAmountDownIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function _class6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class6_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class6_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class6_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === -1);
  }
}
function _class6_span_1_1_ng_template_0_Template(rf, ctx) {}
function _class6_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class6_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class6_span_1_1_Template, 1, 0, null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tt.sortIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c7, ctx_r1.sortOrder));
  }
}
function _class12_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function _class12_ng_container_5_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "MinusIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function _class12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class12_ng_container_5_CheckIcon_1_Template, 1, 1, "CheckIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class12_ng_container_5_MinusIcon_2_Template, 1, 1, "MinusIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.rowNode.node.partialSelected);
  }
}
function _class12_span_6_1_ng_template_0_Template(rf, ctx) {}
function _class12_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class12_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c29 = function (a0, a1) {
  return {
    $implicit: a0,
    partialSelected: a1
  };
};
function _class12_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class12_span_6_1_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.tt.checkboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c29, ctx_r2.checked, ctx_r2.rowNode.node.partialSelected));
  }
}
const _c30 = function (a0) {
  return {
    "p-checkbox-focused": a0
  };
};
const _c31 = function (a1, a2, a3, a4) {
  return {
    "p-checkbox-box": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-indeterminate": a3,
    "p-disabled": a4
  };
};
const _c32 = ["box"];
function _class13_ng_container_6_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "CheckIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function _class13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class13_ng_container_6_CheckIcon_1_Template, 1, 1, "CheckIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.checked);
  }
}
function _class13_span_7_1_ng_template_0_Template(rf, ctx) {}
function _class13_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class13_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class13_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class13_span_7_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.tt.headerCheckboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c7, ctx_r3.checked));
  }
}
const _c33 = function (a1, a2, a3) {
  return {
    "p-checkbox-box": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
function _class15_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class15_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class15_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function _class15_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class15_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.outputTemplate);
  }
}
function _class17_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function _class17_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function _class17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class17_ng_container_1_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class17_ng_container_1_ChevronRightIcon_2_Template, 1, 0, "ChevronRightIcon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.rowNode.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.rowNode.node.expanded);
  }
}
function _class17_2_ng_template_0_Template(rf, ctx) {}
function _class17_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class17_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
class TreeTableService {
  constructor() {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortSource", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionSource", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuSource", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "uiUpdateSource", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalRecordsSource", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortSource$", this.sortSource.asObservable());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionSource$", this.selectionSource.asObservable());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuSource$", this.contextMenuSource.asObservable());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "uiUpdateSource$", this.uiUpdateSource.asObservable());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalRecordsSource$", this.totalRecordsSource.asObservable());
  }
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(node) {
    this.contextMenuSource.next(node);
  }
  onUIUpdate(value) {
    this.uiUpdateSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
}
_class = TreeTableService;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableService, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableService, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeTableService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/**
 * TreeTable is used to display hierarchical data in tabular format.
 * @group Components
 */
class TreeTable {
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @defaultValue 1
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @defaultValue null
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @defaultValue null
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Indicates the height of rows to be scrolled.
   * @defaultValue 28
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.warn('The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.');
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit && !this.virtualScroll) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'summary':
          this.summaryTemplate = item.template;
          break;
        case 'colgroup':
          this.colGroupTemplate = item.template;
          break;
        case 'emptymessage':
          this.emptyMessageTemplate = item.template;
          break;
        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;
        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;
        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case 'frozenheader':
          this.frozenHeaderTemplate = item.template;
          break;
        case 'frozenbody':
          this.frozenBodyTemplate = item.template;
          break;
        case 'frozenfooter':
          this.frozenFooterTemplate = item.template;
          break;
        case 'frozencolgroup':
          this.frozenColGroupTemplate = item.template;
          break;
        case 'loadingicon':
          this.loadingIconTemplate = item.template;
          break;
        case 'reorderindicatorupicon':
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case 'reorderindicatordownicon':
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case 'sorticon':
          this.sortIconTemplate = item.template;
          break;
        case 'checkboxicon':
          this.checkboxIconTemplate = item.template;
          break;
        case 'headercheckboxicon':
          this.headerCheckboxIconTemplate = item.template;
          break;
        case 'togglericon':
          this.togglerIconTemplate = item.template;
          break;
        case 'paginatorfirstpagelinkicon':
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case 'paginatorlastpagelinkicon':
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case 'paginatorpreviouspagelinkicon':
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case 'paginatornextpagelinkicon':
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  constructor(document, renderer, el, cd, zone, tableService, filterService) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterService", void 0);
    /**
     * An array of objects to represent dynamic columns.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", void 0);
    /**
     * Inline style of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Style class of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Inline style of the table.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableStyle", void 0);
    /**
     * Style class of the table.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableStyleClass", void 0);
    /**
     * Whether the cell widths scale according to their content or not.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoLayout", void 0);
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazy", false);
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lazyLoadOnInit", true);
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginator", void 0);
    /**
     * Number of rows to display per page.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rows", void 0);
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "first", 0);
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageLinks", 5);
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowsPerPageOptions", void 0);
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alwaysShowPaginator", true);
    /**
     * Position of the paginator.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorPosition", 'bottom');
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorDropdownAppendTo", void 0);
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentPageReportTemplate", '{currentPage} of {totalPages}');
    /**
     * Whether to display current page report.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showCurrentPageReport", void 0);
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showJumpToPageDropdown", void 0);
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showFirstLastIcon", true);
    /**
     * Whether to show page links.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showPageLinks", true);
    /**
     * Sort order to use when an unsorted column gets sorted by user interaction.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultSortOrder", 1);
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortMode", 'single');
    /**
     * When true, resets paginator to first page after sorting.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resetPageOnSort", true);
    /**
     * Whether to use the default sorting or a custom one using sortFunction.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "customSort", void 0);
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionMode", void 0);
    /**
     * Selected row with a context menu.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuSelection", void 0);
    /**
     * Mode of the contet menu selection.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuSelectionMode", 'separate');
    /**
     * A property to uniquely identify a record in data.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dataKey", void 0);
    /**
     * Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "metaKeySelection", void 0);
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "compareSelectionBy", 'deepEquals');
    /**
     * Adds hover effect to rows without the need for selectionMode.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowHover", void 0);
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIcon", void 0);
    /**
     * Whether to show the loading mask when loading property is true.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showLoader", true);
    /**
     * When specifies, enables horizontal and/or vertical scrolling.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollable", void 0);
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeight", void 0);
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScroll", void 0);
    /**
     * Height of a row to use in calculations of virtual scrolling.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollItemSize", void 0);
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollOptions", void 0);
    /**
     * The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "virtualScrollDelay", 150);
    /**
     * Width of the frozen columns container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenWidth", void 0);
    /**
     * An array of objects to represent dynamic columns that are frozen.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenColumns", void 0);
    /**
     * When enabled, columns can be resized using drag and drop.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizableColumns", void 0);
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columnResizeMode", 'fit');
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderableColumns", void 0);
    /**
     * Local ng-template varilable of a ContextMenu.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenu", void 0);
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowTrackBy", (index, item) => item);
    /**
     * An array of FilterMetadata objects to provide external filters.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", {});
    /**
     * An array of fields as string to use in global filtering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "globalFilterFields", void 0);
    /**
     * Delay in milliseconds before filtering the data.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterDelay", 300);
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterMode", 'lenient');
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterLocale", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_virtualRowHeight", 28);
    /**
     * Callback to invoke on selected node change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke on context menu selection change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuSelectionChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when data is filtered.
     * @param {TreeTableFilterEvent} event - Custom filter event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onFilter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeExpand", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeTableNodeCollapseEvent} event - Node collapse event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeCollapse", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when pagination occurs.
     * @param {TreeTablePaginatorState} object - Paginator state.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onPage", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a column gets sorted.
     * @param {Object} Object - Sort data.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSort", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {TreeTableLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onLazyLoad", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * An event emitter to invoke on custom sorting, refer to sorting section for details.
     * @param {TreeTableSortEvent} event - Custom sort event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortFunction", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a column is resized.
     * @param {TreeTableColResizeEvent} event - Custom column resize event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onColResize", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a column is reordered.
     * @param {TreeTableColumnReorderEvent} event - Custom column reorder.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onColReorder", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeSelect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeTableNodeUnSelectEvent} event - Custom node unselect event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onNodeUnselect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a node is selected with right click.
     * @param {TreeTableContextMenuSelectEvent} event - Custom context menu select event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onContextMenuSelect", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when state of header checkbox changes.
     * @param {TreeTableHeaderCheckboxToggleEvent} event - Custom checkbox toggle event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHeaderCheckboxToggle", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when a cell switches to edit mode.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onEditInit", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when cell edit is completed.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onEditComplete", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onEditCancel", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizeHelperViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIndicatorUpViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIndicatorDownViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollableViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollableFrozenViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_value", []);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "serializedValue", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_totalRecords", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_multiSortMeta", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_sortField", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_sortOrder", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filteredNodes", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterTimeout", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "colGroupTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "captionTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bodyTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "summaryTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyMessageTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorLeftTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorRightTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorDropdownItemTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenHeaderTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenBodyTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenFooterTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenColGroupTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadingIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIndicatorUpIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIndicatorDownIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checkboxIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerCheckboxIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "togglerIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorFirstPageLinkIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorLastPageLinkIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorPreviousPageLinkIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginatorNextPageLinkIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastResizerHelperX", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIconWidth", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "reorderIconHeight", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "draggedColumn", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dropPosition", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preventSelectionSetterPropagation", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selection", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionKeys", {});
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowTouched", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editingCell", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editingCellData", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editingCellField", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editingCellClick", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentEditListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "initialized", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleRowIndex", void 0);
    this.document = document;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.zone = zone;
    this.tableService = tableService;
    this.filterService = filterService;
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter())
          //sort already filters
          this._filter();
      }
      this.updateSerializedValue();
      this.tableService.onUIUpdate(this.value);
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === 'multiple') {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  updateSerializedValue() {
    this.serializedValue = [];
    if (this.paginator) this.serializePageNodes();else this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node: node,
          parent: parent,
          level: level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  serializePageNodes() {
    let data = this.filteredNodes || this.value;
    this.serializedValue = [];
    if (data && data.length) {
      const first = this.lazy ? 0 : this.first;
      for (let i = first; i < first + this.rows; i++) {
        let node = data[i];
        if (node) {
          this.serializedValue.push({
            node: node,
            parent: null,
            level: 0,
            visible: true
          });
          this.serializeNodes(node, node.children, 1, true);
        }
      }
    }
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let node of this._selection) {
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) this.onLazyLoad.emit(this.createLazyLoadMetadata());else this.serializePageNodes();
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    this.tableService.onUIUpdate(this.value);
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === 'single') {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      this.sortSingle();
      if (this.resetPageOnSort && this.scrollable) {
        this.resetScrollTop();
      }
    }
    if (this.sortMode === 'multiple') {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        }
        this.multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
  }
  sortSingle() {
    if (this.sortField && this.sortOrder) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field: this.sortField,
        order: this.sortOrder
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
      this.updateSerializedValue();
    }
  }
  sortNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: nodes,
        mode: this.sortMode,
        field: this.sortField,
        order: this.sortOrder
      });
    } else {
      nodes.sort((node1, node2) => {
        let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node1.data, this.sortField);
        let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node2.data, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
    }
    for (let node of nodes) {
      this.sortNodes(node.children);
    }
  }
  sortMultiple() {
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortMultipleNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.updateSerializedValue();
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  sortMultipleNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: this.value,
        mode: this.sortMode,
        multiSortMeta: this.multiSortMeta
      });
    } else {
      nodes.sort((node1, node2) => {
        return this.multisortField(node1, node2, this.multiSortMeta, 0);
      });
    }
    for (let node of nodes) {
      this.sortMultipleNodes(node.children);
    }
  }
  multisortField(node1, node2, multiSortMeta, index) {
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(this.multiSortMeta) || primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.isEmpty(multiSortMeta[index])) {
      return 0;
    }
    let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
    let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
    let result = null;
    if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;
    if (typeof value1 == 'string' || value1 instanceof String) {
      if (value1.localeCompare && value1 != value2) {
        return multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
          numeric: true
        });
      }
    } else {
      result = value1 < value2 ? -1 : 1;
    }
    if (value1 == value2) {
      return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
    }
    return multiSortMeta[index].order * result;
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === 'single') {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === 'multiple') {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit({
      ...this.createLazyLoadMetadata(),
      ...event,
      rows: event.last - event.first
    });
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
  }
  isEmpty() {
    let data = this.filteredNodes || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onColumnResizeBegin(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + 'px';
    this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + 'px';
    this.resizeHelperViewChild.nativeElement.style.display = 'block';
  }
  onColumnResizeEnd(event, column) {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = column.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = column.style.minWidth || 15;
    if (columnWidth + delta > parseInt(minWidth)) {
      if (this.columnResizeMode === 'fit') {
        let nextColumn = column.nextElementSibling;
        while (!nextColumn.offsetParent) {
          nextColumn = nextColumn.nextElementSibling;
        }
        if (nextColumn) {
          let nextColumnWidth = nextColumn.offsetWidth - delta;
          let nextColumnMinWidth = nextColumn.style.minWidth || 15;
          if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
            if (this.scrollable) {
              let scrollableView = this.findParentScrollableView(column);
              let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
              let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
              let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
              let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(column);
              this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            } else {
              column.style.width = newColumnWidth + 'px';
              if (nextColumn) {
                nextColumn.style.width = nextColumnWidth + 'px';
              }
            }
          }
        }
      } else if (this.columnResizeMode === 'expand') {
        if (this.scrollable) {
          let scrollableView = this.findParentScrollableView(column);
          let scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport');
          let scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-header');
          let scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-footer');
          let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
          let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
          let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
          scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
          scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
          if (scrollableFooterTable) {
            scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + 'px';
          }
          let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(column);
          const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          const isContainerInViewport = this.containerViewChild?.nativeElement.offsetWidth >= scrollableBodyTableWidth;
          let setWidth = (container, table, width, isContainerInViewport) => {
            if (container && table) {
              container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
              table.style.width = width + 'px';
            }
          };
          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
          this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        } else {
          this.tableViewChild.nativeElement.style.width = this.tableViewChild?.nativeElement.offsetWidth + delta + 'px';
          column.style.width = newColumnWidth + 'px';
          let containerWidth = this.tableViewChild?.nativeElement.style.width;
          this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
        }
      }
      this.onColResize.emit({
        element: column,
        delta: delta
      });
    }
    this.resizeHelperViewChild.nativeElement.style.display = 'none';
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
  }
  findParentScrollableView(column) {
    if (column) {
      let parent = column.parentElement;
      while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
        parent = parent.parentElement;
      }
      return parent;
    } else {
      return null;
    }
  }
  resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
    if (table) {
      let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
      if (colGroup) {
        let col = colGroup.children[resizeColumnIndex];
        let nextCol = col.nextElementSibling;
        col.style.width = newColumnWidth + 'px';
        if (nextCol && nextColumnWidth) {
          nextCol.style.width = nextColumnWidth + 'px';
        }
      } else {
        throw 'Scrollable tables require a colgroup to support resizable columns';
      }
    }
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData('text', 'b'); // For firefox
  }

  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.containerViewChild?.nativeElement);
      let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
      } else {
        event.dataTransfer.dropEffect = 'none';
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
      this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
      this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
      let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex: dragIndex,
          dropIndex: dropIndex,
          columns: this.columns
        });
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
      this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  handleRowClick(event) {
    let targetNode = event.originalEvent.target.nodeName;
    if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
      return;
    }
    if (this.selectionMode) {
      this.preventSelectionSetterPropagation = true;
      let rowNode = event.rowNode;
      let selected = this.isSelected(rowNode.node);
      let metaSelection = this.rowTouched ? false : this.metaKeySelection;
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
      if (metaSelection) {
        let keyboardEvent = event.originalEvent;
        let metaKey = keyboardEvent.metaKey || keyboardEvent.ctrlKey;
        if (selected && metaKey) {
          if (this.isSingleSelectionMode()) {
            this._selection = null;
            this.selectionKeys = {};
            this.selectionChange.emit(null);
          } else {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          }
          this.onNodeUnselect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: 'row'
          });
        } else {
          if (this.isSingleSelectionMode()) {
            this._selection = rowNode.node;
            this.selectionChange.emit(rowNode.node);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            if (metaKey) {
              this._selection = this.selection || [];
            } else {
              this._selection = [];
              this.selectionKeys = {};
            }
            this._selection = [...this.selection, rowNode.node];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
          this.onNodeSelect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: 'row',
            index: event.rowIndex
          });
        }
      } else {
        if (this.selectionMode === 'single') {
          if (selected) {
            this._selection = null;
            this.selectionKeys = {};
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row'
            });
          } else {
            this._selection = rowNode.node;
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row',
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        } else if (this.selectionMode === 'multiple') {
          if (selected) {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row'
            });
            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row',
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
      }
      this.tableService.onSelectionChange();
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const node = event.rowNode.node;
      if (this.contextMenuSelectionMode === 'separate') {
        this.contextMenuSelection = node;
        this.contextMenuSelectionChange.emit(node);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node: node
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(node);
      } else if (this.contextMenuSelectionMode === 'joint') {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(node);
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
        if (!selected) {
          if (this.isSingleSelectionMode()) {
            this.selection = node;
            this.selectionChange.emit(node);
          } else if (this.isMultipleSelectionMode()) {
            this.selection = [node];
            this.selectionChange.emit(this.selection);
          }
          if (dataKeyValue) {
            this.selectionKeys[dataKeyValue] = 1;
          }
        }
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node: node
        });
      }
    }
  }
  toggleNodeWithCheckbox(event) {
    this.selection = this.selection || [];
    this.preventSelectionSetterPropagation = true;
    let node = event.rowNode.node;
    let selected = this.isSelected(node);
    if (selected) {
      this.propagateSelectionDown(node, false);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, false);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeUnselect.emit({
        originalEvent: event,
        node: node
      });
    } else {
      this.propagateSelectionDown(node, true);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, true);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeSelect.emit({
        originalEvent: event,
        node: node
      });
    }
    this.tableService.onSelectionChange();
  }
  toggleNodesWithCheckbox(event, check) {
    let data = this.filteredNodes || this.value;
    this._selection = check && data ? data.slice() : [];
    if (check) {
      if (data && data.length) {
        for (let node of data) {
          this.propagateSelectionDown(node, true);
        }
      }
    } else {
      this._selection = [];
      this.selectionKeys = {};
    }
    this.preventSelectionSetterPropagation = true;
    this.selectionChange.emit(this._selection);
    this.tableService.onSelectionChange();
    this.onHeaderCheckboxToggle.emit({
      originalEvent: event,
      checked: check
    });
  }
  propagateSelectionUp(node, select) {
    if (node.children && node.children.length) {
      let selectedChildCount = 0;
      let childPartialSelected = false;
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
      for (let child of node.children) {
        if (this.isSelected(child)) selectedChildCount++;else if (child.partialSelected) childPartialSelected = true;
      }
      if (select && selectedChildCount == node.children.length) {
        this._selection = [...(this.selection || []), node];
        node.partialSelected = false;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
              delete this.selectionKeys[dataKeyValue];
            }
          }
        }
        if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
      }
    }
    let parent = node.parent;
    if (parent) {
      this.propagateSelectionUp(parent, select);
    }
  }
  propagateSelectionDown(node, select) {
    let index = this.findIndexInSelection(node);
    let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
    if (select && index == -1) {
      this._selection = [...(this.selection || []), node];
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    } else if (!select && index > -1) {
      this._selection = this.selection.filter((val, i) => i != index);
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    }
    node.partialSelected = false;
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateSelectionDown(child, select);
      }
    }
  }
  isSelected(node) {
    if (node && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== undefined;
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(node) > -1;else return this.equals(node, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(node, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isSingleSelectionMode() {
    return this.selectionMode === 'single';
  }
  isMultipleSelectionMode() {
    return this.selectionMode === 'multiple';
  }
  equals(node1, node2) {
    return this.compareSelectionBy === 'equals' ? node1 === node2 : primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.equals(node1.data, node2.data, this.dataKey);
  }
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value: value,
        matchMode: matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
  }
  filterGlobal(value, matchMode) {
    this.filter(value, 'global', matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== undefined) {
      if (typeof filter === 'string' && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;else return false;
    }
    return true;
  }
  _filter() {
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredNodes = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters['global']) {
          if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredNodes = [];
        const isStrictMode = this.filterMode === 'strict';
        let isValueChanged = false;
        for (let node of this.value) {
          let copyNode = {
            ...node
          };
          let localMatch = true;
          let globalMatch = false;
          let paramsWithoutNode;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
              let filterMeta = this.filters[prop];
              let filterField = prop;
              let filterValue = filterMeta.value;
              let filterMatchMode = filterMeta.matchMode || 'startsWith';
              let filterConstraint = this.filterService.filters[filterMatchMode];
              paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                isStrictMode
              };
              if (isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                localMatch = false;
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let copyNodeForGlobal = {
                ...copyNode
              };
              let filterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              let filterValue = this.filters['global'].value;
              let filterConstraint = this.filterService.filters[this.filters['global'].matchMode];
              paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                isStrictMode
              };
              if (isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
                globalMatch = true;
                copyNode = copyNodeForGlobal;
              }
            }
          }
          let matches = localMatch;
          if (this.filters['global']) {
            matches = localMatch && globalMatch;
          }
          if (matches) {
            this.filteredNodes.push(copyNode);
          }
          isValueChanged = isValueChanged || !localMatch || globalMatch || localMatch && this.filteredNodes.length > 0 || !globalMatch && this.filteredNodes.length === 0;
        }
        if (!isValueChanged) {
          this.filteredNodes = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
        }
      }
    }
    this.first = 0;
    const filteredValue = this.filteredNodes || this.value;
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: filteredValue
    });
    this.tableService.onUIUpdate(filteredValue);
    this.updateSerializedValue();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = {
            ...childNode
          };
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        return true;
      }
    }
  }
  isFilterMatched(node, filterOptions) {
    let {
      filterField,
      filterValue,
      filterConstraint,
      isStrictMode
    } = filterOptions;
    let matched = false;
    let dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ObjectUtils.resolveFieldData(node.data, filterField);
    if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
      matched = true;
    }
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        filterField,
        filterValue,
        filterConstraint,
        isStrictMode
      }) || matched;
    }
    return matched;
  }
  isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  /**
   * Clears the sort and paginator state.
   * @group Method
   */
  reset() {
    this._sortField = null;
    this._sortOrder = 1;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.filteredNodes = null;
    this.filters = {};
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  updateEditingCell(cell, data, field) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, 'click', event => {
        if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.editingCell, 'p-cell-editing');
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.unbindDocumentEditListener();
        }
        this.editingCellClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.editingCellField = null;
    this.editingCellData = null;
    this.initialized = null;
  }
}
_class2 = TreeTable;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTable, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTable, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["p-treeTable"]],
  contentQueries: function _class2_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class2_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollableFrozenViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: "columns",
    style: "style",
    styleClass: "styleClass",
    tableStyle: "tableStyle",
    tableStyleClass: "tableStyleClass",
    autoLayout: "autoLayout",
    lazy: "lazy",
    lazyLoadOnInit: "lazyLoadOnInit",
    paginator: "paginator",
    rows: "rows",
    first: "first",
    pageLinks: "pageLinks",
    rowsPerPageOptions: "rowsPerPageOptions",
    alwaysShowPaginator: "alwaysShowPaginator",
    paginatorPosition: "paginatorPosition",
    paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
    currentPageReportTemplate: "currentPageReportTemplate",
    showCurrentPageReport: "showCurrentPageReport",
    showJumpToPageDropdown: "showJumpToPageDropdown",
    showFirstLastIcon: "showFirstLastIcon",
    showPageLinks: "showPageLinks",
    defaultSortOrder: "defaultSortOrder",
    sortMode: "sortMode",
    resetPageOnSort: "resetPageOnSort",
    customSort: "customSort",
    selectionMode: "selectionMode",
    contextMenuSelection: "contextMenuSelection",
    contextMenuSelectionMode: "contextMenuSelectionMode",
    dataKey: "dataKey",
    metaKeySelection: "metaKeySelection",
    compareSelectionBy: "compareSelectionBy",
    rowHover: "rowHover",
    loading: "loading",
    loadingIcon: "loadingIcon",
    showLoader: "showLoader",
    scrollable: "scrollable",
    scrollHeight: "scrollHeight",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    virtualScrollDelay: "virtualScrollDelay",
    frozenWidth: "frozenWidth",
    frozenColumns: "frozenColumns",
    resizableColumns: "resizableColumns",
    columnResizeMode: "columnResizeMode",
    reorderableColumns: "reorderableColumns",
    contextMenu: "contextMenu",
    rowTrackBy: "rowTrackBy",
    filters: "filters",
    globalFilterFields: "globalFilterFields",
    filterDelay: "filterDelay",
    filterMode: "filterMode",
    filterLocale: "filterLocale",
    totalRecords: "totalRecords",
    sortField: "sortField",
    sortOrder: "sortOrder",
    multiSortMeta: "multiSortMeta",
    selection: "selection",
    value: "value",
    virtualRowHeight: "virtualRowHeight"
  },
  outputs: {
    selectionChange: "selectionChange",
    contextMenuSelectionChange: "contextMenuSelectionChange",
    onFilter: "onFilter",
    onNodeExpand: "onNodeExpand",
    onNodeCollapse: "onNodeCollapse",
    onPage: "onPage",
    onSort: "onSort",
    onLazyLoad: "onLazyLoad",
    sortFunction: "sortFunction",
    onColResize: "onColResize",
    onColReorder: "onColReorder",
    onNodeSelect: "onNodeSelect",
    onNodeUnselect: "onNodeUnselect",
    onContextMenuSelect: "onContextMenuSelect",
    onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
    onEditInit: "onEditInit",
    onEditComplete: "onEditComplete",
    onEditCancel: "onEditCancel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([TreeTableService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 12,
  vars: 20,
  consts: [["data-scrollselectors", ".p-treetable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-treetable-loading", 4, "ngIf"], ["class", "p-treetable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-wrapper", 4, "ngIf"], ["class", "p-treetable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-up", "style", "display: none;", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-down", "style", "display: none;", 4, "ngIf"], [1, "p-treetable-loading"], [1, "p-treetable-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-treetable-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-treetable-loading-icon"], [4, "ngTemplateOutlet"], [1, "p-treetable-header"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [1, "p-treetable-wrapper"], [3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], [1, "p-treetable-tfoot"], [1, "p-treetable-scrollable-wrapper"], ["class", "p-treetable-scrollable-view p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-treetable-scrollable-view", 3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-treetable-scrollable-view", "p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-treetable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "p-treetable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "p-treetable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_p_paginator_4_Template, 5, 15, "p-paginator", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_div_5_Template, 9, 16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class2_div_6_Template, 4, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class2_p_paginator_7_Template, 5, 15, "p-paginator", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class2_div_8_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, _class2_div_9_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class2_span_10_Template, 4, 2, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, _class2_span_11_Template, 4, 2, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](14, _c10, ctx.rowHover || ctx.selectionMode === "single" || ctx.selectionMode === "multiple", ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable && ctx.scrollHeight === "flex"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.captionTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.scrollable);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scrollable);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resizableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_7__.Paginator, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_8__.SpinnerIcon, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_9__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_10__.ArrowUpIcon, TTScrollableView, TTBody];
  },
  styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTable',
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            data-scrollselectors=".p-treetable-scrollable-body"
            [ngClass]="{
                'p-treetable p-component': true,
                'p-treetable-hoverable-rows': rowHover || selectionMode === 'single' || selectionMode === 'multiple',
                'p-treetable-auto-layout': autoLayout,
                'p-treetable-resizable': resizableColumns,
                'p-treetable-resizable-fit': resizableColumns && columnResizeMode === 'fit',
                'p-treetable-flex-scrollable': scrollable && scrollHeight === 'flex'
            }"
        >
            <div class="p-treetable-loading" *ngIf="loading && showLoader">
                <div class="p-treetable-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-treetable-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-treetable-loading-icon'" />
                        <span *ngIf="loadingIconTemplate" class="p-treetable-loading-icon">
                            <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <div *ngIf="captionTemplate" class="p-treetable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
            >
                <ng-template pTemplate="firstpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div class="p-treetable-wrapper" *ngIf="!scrollable">
                <table #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                    <tbody class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-treetable-scrollable-wrapper" *ngIf="scrollable">
                <div
                    class="p-treetable-scrollable-view p-treetable-frozen-view"
                    *ngIf="frozenColumns || frozenBodyTemplate"
                    #scrollableFrozenView
                    [ttScrollableView]="frozenColumns"
                    [frozen]="true"
                    [ngStyle]="{ width: frozenWidth }"
                    [scrollHeight]="scrollHeight"
                ></div>
                <div class="p-treetable-scrollable-view" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{ left: frozenWidth, width: 'calc(100% - ' + frozenWidth + ')' }"></div>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
            >
                <ng-template pTemplate="firstpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>
            <div *ngIf="summaryTemplate" class="p-treetable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="p-treetable-reorder-indicator-up" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown class="p-treetable-reorder-indicator-down" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `,
      providers: [TreeTableService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"]
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: TreeTableService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tableStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    tableStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lazyLoadOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    alwaysShowPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    paginatorPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    paginatorDropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultSortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sortMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resetPageOnSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contextMenuSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contextMenuSelectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    compareSelectionBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rowHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showLoader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualScrollDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    frozenWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    frozenColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resizableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    columnResizeMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reorderableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rowTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    globalFilterFields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sortField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiSortMeta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    virtualRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    contextMenuSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    sortFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onColResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onColReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onNodeUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onContextMenuSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onHeaderCheckboxToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEditInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEditComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEditCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['container']
    }],
    resizeHelperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['resizeHelper']
    }],
    reorderIndicatorUpViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['reorderIndicatorUp']
    }],
    reorderIndicatorDownViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['reorderIndicatorDown']
    }],
    tableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['table']
    }],
    scrollableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollableView']
    }],
    scrollableFrozenViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollableFrozenView']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate]
    }]
  });
})();
class TTBody {
  constructor(tt, treeTableService, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "treeTableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "template", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozen", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "serializedNodes", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollerOptions", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    this.treeTableService = treeTableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      if (this.tt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  getScrollerOption(option, options) {
    if (this.tt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const getItemOptions = this.getScrollerOption('getItemOptions');
    return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class3 = TTBody;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTBody, "\u0275fac", function _class3_Factory(t) {
  return new (t || _class3)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTBody, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["", "pTreeTableBody", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: ["pTreeTableBody", "columns"],
    template: ["pTreeTableBodyTemplate", "template"],
    frozen: "frozen",
    serializedNodes: "serializedNodes",
    scrollerOptions: "scrollerOptions"
  },
  attrs: _c11,
  decls: 2,
  vars: 3,
  consts: [["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class3_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class3_ng_template_0_Template, 1, 1, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_ng_container_1_Template, 2, 5, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.serializedNodes || ctx.tt.serializedValue)("ngForTrackBy", ctx.tt.rowTrackBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.isEmpty());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: '[pTreeTableBody]',
      template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="serializedNodes || tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container *ngTemplateOutlet="template; context: { $implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns }"></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['pTreeTableBody']
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['pTreeTableBodyTemplate']
    }],
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    serializedNodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollerOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TTScrollableView {
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
    if (val != null && (val.includes('%') || val.includes('calc'))) {
      console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
    }
  }
  constructor(platformId, renderer, tt, el, zone) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozen", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeaderViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollHeaderBoxViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollBodyViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollTableViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollLoadingTableViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollFooterViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollFooterBoxViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollableAlignerViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scroller", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerScrollListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bodyScrollListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerScrollListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "frozenSiblingBody", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalRecordsSubscription", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_scrollHeight", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preventBodyScrollPropagation", void 0);
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (!this.frozen) {
      if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-treetable-unfrozen-view');
      }
      let frozenView = this.el.nativeElement.previousElementSibling;
      if (frozenView) {
        if (this.tt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(frozenView, '.p-scroller-viewport');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
      }
      let scrollBarWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.calculateScrollbarWidth();
      this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
      if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
        this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
      }
    } else {
      if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
        this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.calculateScrollbarHeight() + 'px';
      }
    }
    this.bindEvents();
  }
  bindEvents() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
          this.headerScrollListener = this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement, 'scroll', this.onHeaderScroll.bind(this));
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
          this.footerScrollListener = this.renderer.listen(this.scrollFooterViewChild.nativeElement, 'scroll', this.onFooterScroll.bind(this));
        }
        if (!this.frozen) {
          if (this.tt.virtualScroll) {
            this.bodyScrollListener = this.renderer.listen((this.scroller?.getElementRef()).nativeElement, 'scroll', this.onBodyScroll.bind(this));
          } else {
            this.bodyScrollListener = this.renderer.listen(this.scrollBodyViewChild?.nativeElement, 'scroll', this.onBodyScroll.bind(this));
          }
        }
      });
    }
  }
  unbindEvents() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
        if (this.headerScrollListener) {
          this.headerScrollListener();
          this.headerScrollListener = null;
        }
      }
      if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
        if (this.footerScrollListener) {
          this.footerScrollListener();
          this.footerScrollListener = null;
        }
      }
      if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
      if (this.scroller && this.scroller.getElementRef()) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
    }
  }
  onHeaderScroll() {
    const scrollLeft = this.scrollHeaderViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onFooterScroll() {
    const scrollLeft = this.scrollFooterViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onBodyScroll(event) {
    if (this.preventBodyScrollPropagation) {
      this.preventBodyScrollPropagation = false;
      return;
    }
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
    }
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
    }
    if (this.frozenSiblingBody) {
      this.frozenSiblingBody.scrollTop = event.target.scrollTop;
    }
  }
  scrollToVirtualIndex(index) {
    if (this.scroller) {
      this.scroller.scrollToIndex(index);
    }
  }
  scrollTo(options) {
    if (this.scroller) {
      this.scroller.scrollTo(options);
    } else {
      if (this.scrollBodyViewChild?.nativeElement.scrollTo) {
        this.scrollBodyViewChild.nativeElement.scrollTo(options);
      } else {
        this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
        this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  ngOnDestroy() {
    this.unbindEvents();
    this.frozenSiblingBody = null;
  }
}
_class4 = TTScrollableView;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTScrollableView, "\u0275fac", function _class4_Factory(t) {
  return new (t || _class4)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTScrollableView, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class4,
  selectors: [["", "ttScrollableView", ""]],
  viewQuery: function _class4_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c14, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c15, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c16, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c17, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c18, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c19, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c20, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c21, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c22, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollHeaderViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollHeaderBoxViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollBodyViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollTableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollLoadingTableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollFooterViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollFooterBoxViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollableAlignerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: ["ttScrollableView", "columns"],
    frozen: "frozen",
    scrollHeight: "scrollHeight"
  },
  attrs: _c23,
  decls: 13,
  vars: 13,
  consts: [[1, "p-treetable-scrollable-header"], ["scrollHeader", ""], [1, "p-treetable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-treetable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], ["styleClass", "p-treetable-scrollable-body", 3, "items", "style", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["buildInItems", ""], ["class", "p-treetable-scrollable-footer", 4, "ngIf"], ["styleClass", "p-treetable-scrollable-body", 3, "items", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], [1, "p-treetable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngClass", "ngStyle"], ["scrollTable", ""], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "serializedNodes", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "p-treetable-scrollable-footer"], ["scrollFooter", ""], [1, "p-treetable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-treetable-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "p-treetable-tfoot"]],
  template: function _class4_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3)(4, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class4_ng_container_5_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class4_ng_container_7_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class4_p_scroller_8_Template, 4, 10, "p-scroller", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, _class4_ng_container_9_Template, 4, 10, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class4_ng_template_10_Template, 5, 15, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, _class4_div_12_Template, 8, 10, "div", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tt.tableStyleClass)("ngStyle", ctx.tt.tableStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt.colGroupTemplate : ctx.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c7, ctx.columns));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt.headerTemplate : ctx.tt.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c7, ctx.columns));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.Scroller, TTBody],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTScrollableView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: '[ttScrollableView]',
      template: `
        <div #scrollHeader class="p-treetable-scrollable-header">
            <div #scrollHeaderBox class="p-treetable-scrollable-header-box">
                <table class="p-treetable-scrollable-header-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate || tt.headerTemplate : tt.headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                </table>
            </div>
        </div>

        <p-scroller
            *ngIf="tt.virtualScroll"
            #scroller
            [items]="tt.serializedValue"
            styleClass="p-treetable-scrollable-body"
            [style]="{ height: tt.scrollHeight !== 'flex' ? tt.scrollHeight : undefined }"
            [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
            [itemSize]="tt.virtualScrollItemSize || tt._virtualRowHeight"
            [lazy]="tt.lazy"
            (onLazyLoad)="tt.onLazyItemLoad($event)"
            [options]="tt.virtualScrollOptions"
        >
            <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
            </ng-template>
            <ng-container *ngIf="loaderTemplate">
                <ng-template pTemplate="loader" let-scrollerOptions="options">
                    <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                </ng-template>
            </ng-container>
        </p-scroller>
        <ng-container *ngIf="!tt.virtualScroll">
            <div #scrollBody class="p-treetable-scrollable-body" [ngStyle]="{ 'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined }">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: serializedValue, options: {} }"></ng-container>
            </div>
        </ng-container>

        <ng-template #buildInItems let-items let-scrollerOptions="options">
            <table #scrollTable [class]="tt.tableStyleClass" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="tt.tableStyle" [style]="scrollerOptions.contentStyle">
                <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                <tbody class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate || tt.bodyTemplate : tt.bodyTemplate" [serializedNodes]="items" [frozen]="frozen"></tbody>
            </table>
            <div #scrollableAligner style="background-color:transparent" *ngIf="frozen"></div>
        </ng-template>

        <div #scrollFooter *ngIf="tt.footerTemplate" class="p-treetable-scrollable-footer">
            <div #scrollFooterBox class="p-treetable-scrollable-footer-box">
                <table class="p-treetable-scrollable-footer-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <tfoot class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate || tt.footerTemplate : tt.footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttScrollableView']
    }],
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollHeaderViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollHeader']
    }],
    scrollHeaderBoxViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollHeaderBox']
    }],
    scrollBodyViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollBody']
    }],
    scrollTableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollTable']
    }],
    scrollLoadingTableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['loadingTable']
    }],
    scrollFooterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollFooter']
    }],
    scrollFooterBoxViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollFooterBox']
    }],
    scrollableAlignerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scrollableAligner']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['scroller']
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TTSortableColumn {
  constructor(tt) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "field", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttSortableColumnDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sorted", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    this.sorted = this.tt.isSorted(this.field);
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.updateSortState();
      this.tt.sort({
        originalEvent: event,
        field: this.field
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
  }
  isEnabled() {
    return this.ttSortableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class5 = TTSortableColumn;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSortableColumn, "\u0275fac", function _class5_Factory(t) {
  return new (t || _class5)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSortableColumn, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class5,
  selectors: [["", "ttSortableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 6,
  hostBindings: function _class5_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class5_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function _class5_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKey($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    }
  },
  inputs: {
    field: ["ttSortableColumn", "field"],
    ttSortableColumnDisabled: "ttSortableColumnDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTSortableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttSortableColumn]',
      host: {
        class: 'p-element',
        '[class.p-sortable-column]': 'isEnabled()',
        '[class.p-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null',
        '[attr.role]': '"columnheader"'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttSortableColumn']
    }],
    ttSortableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown.enter', ['$event']]
    }]
  });
})();
class TTSortIcon {
  constructor(tt, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "field", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabelDesc", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ariaLabelAsc", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortOrder", void 0);
    this.tt = tt;
    this.cd = cd;
    this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
      this.updateSortState();
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.tt.sortMode === 'single') {
      this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
    } else if (this.tt.sortMode === 'multiple') {
      let sortMeta = this.tt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class6 = TTSortIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSortIcon, "\u0275fac", function _class6_Factory(t) {
  return new (t || _class6)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSortIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class6,
  selectors: [["p-treeTableSortIcon"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    ariaLabelDesc: "ariaLabelDesc",
    ariaLabelAsc: "ariaLabelAsc"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class6_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class6_ng_container_0_Template, 4, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class6_span_1_Template, 2, 4, "span", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.sortIconTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.sortIconTemplate);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_12__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_13__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_14__.SortAmountDownIcon];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTSortIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTableSortIcon',
      template: ` <ng-container *ngIf="!tt.sortIconTemplate">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="tt.sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="tt.sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabelDesc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabelAsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TTResizableColumn {
  constructor(document, platformId, renderer, tt, el, zone) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttResizableColumnDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resizerMouseDownListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentMouseMoveListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentMouseUpListener", void 0);
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      if (this.isEnabled()) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
        this.resizer = this.renderer.createElement('span');
        this.renderer.addClass(this.resizer, 'p-column-resizer');
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, 'mousedown', this.onMouseDown.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, 'mousemove', this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, 'mouseup', this.onDocumentMouseUp.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
  }
  onMouseDown(event) {
    this.tt.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onDocumentMouseMove(event) {
    this.tt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.tt.onColumnResizeEnd(event, this.el.nativeElement);
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.ttResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
}
_class7 = TTResizableColumn;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTResizableColumn, "\u0275fac", function _class7_Factory(t) {
  return new (t || _class7)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTResizableColumn, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class7,
  selectors: [["", "ttResizableColumn", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    ttResizableColumnDisabled: "ttResizableColumnDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTResizableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttResizableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    ttResizableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TTReorderableColumn {
  constructor(document, platformId, renderer, tt, el, zone) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttReorderableColumnDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragStartListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragOverListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragEnterListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dragLeaveListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseDownListener", void 0);
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, 'dragstart', this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.onDragEnter.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, 'dragenter', this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, 'dragleave', this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      if (this.mouseDownListener) {
        this.mouseDownListener();
        this.mouseDownListener = null;
      }
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
      if (this.dragEnterListener) {
        this.dragEnterListener();
        this.dragEnterListener = null;
      }
      if (this.dragLeaveListener) {
        this.dragLeaveListener();
        this.dragLeaveListener = null;
      }
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(event.target, 'p-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.tt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.tt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.tt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.tt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.ttReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
}
_class8 = TTReorderableColumn;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTReorderableColumn, "\u0275fac", function _class8_Factory(t) {
  return new (t || _class8)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTReorderableColumn, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class8,
  selectors: [["", "ttReorderableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function _class8_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function _class8_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    ttReorderableColumnDisabled: "ttReorderableColumnDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTReorderableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttReorderableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    ttReorderableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();
class TTSelectableRow {
  constructor(tt, tableService) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttSelectableRowDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selected", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  onEnterKey(event) {
    if (event.which === 13) {
      this.onClick(event);
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.tt.handleRowTouchEnd(event);
    }
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class9 = TTSelectableRow;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSelectableRow, "\u0275fac", function _class9_Factory(t) {
  return new (t || _class9)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSelectableRow, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class9,
  selectors: [["", "ttSelectableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function _class9_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class9_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function _class9_keydown_HostBindingHandler($event) {
        return ctx.onEnterKey($event);
      })("touchend", function _class9_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-highlight", ctx.selected);
    }
  },
  inputs: {
    rowNode: ["ttSelectableRow", "rowNode"],
    ttSelectableRowDisabled: "ttSelectableRowDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTSelectableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttSelectableRow]',
      host: {
        class: 'p-element',
        '[class.p-highlight]': 'selected'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttSelectableRow']
    }],
    ttSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown', ['$event']]
    }],
    onTouchEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['touchend', ['$event']]
    }]
  });
})();
class TTSelectableRowDblClick {
  constructor(tt, tableService) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttSelectableRowDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selected", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class10 = TTSelectableRowDblClick;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSelectableRowDblClick, "\u0275fac", function _class10_Factory(t) {
  return new (t || _class10)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTSelectableRowDblClick, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class10,
  selectors: [["", "ttSelectableRowDblClick", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function _class10_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function _class10_dblclick_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-highlight", ctx.selected);
    }
  },
  inputs: {
    rowNode: ["ttSelectableRowDblClick", "rowNode"],
    ttSelectableRowDisabled: "ttSelectableRowDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTSelectableRowDblClick, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttSelectableRowDblClick]',
      host: {
        class: 'p-element',
        '[class.p-highlight]': 'selected'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttSelectableRowDblClick']
    }],
    ttSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['dblclick', ['$event']]
    }]
  });
})();
class TTContextMenuRow {
  constructor(tt, tableService, el) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttContextMenuRowDisabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selected", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.contextMenuSource$.subscribe(node => {
        this.selected = this.tt.equals(this.rowNode.node, node);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.tt.handleRowRightClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.ttContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class11 = TTContextMenuRow;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTContextMenuRow, "\u0275fac", function _class11_Factory(t) {
  return new (t || _class11)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTContextMenuRow, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class11,
  selectors: [["", "ttContextMenuRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 3,
  hostBindings: function _class11_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function _class11_contextmenu_HostBindingHandler($event) {
        return ctx.onContextMenu($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("p-highlight-contextmenu", ctx.selected);
    }
  },
  inputs: {
    rowNode: ["ttContextMenuRow", "rowNode"],
    ttContextMenuRowDisabled: "ttContextMenuRowDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTContextMenuRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttContextMenuRow]',
      host: {
        class: 'p-element',
        '[class.p-highlight-contextmenu]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttContextMenuRow']
    }],
    ttContextMenuRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class TTCheckbox {
  constructor(tt, tableService, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checked", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.tt.isSelected(this.rowNode.node);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.tt.isSelected(this.rowNode.node);
  }
  onClick(event) {
    if (!this.disabled) {
      this.tt.toggleNodeWithCheckbox({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class12 = TTCheckbox;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTCheckbox, "\u0275fac", function _class12_Factory(t) {
  return new (t || _class12)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTCheckbox, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class12,
  selectors: [["p-treeTableCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    rowNode: ["value", "rowNode"]
  },
  decls: 7,
  vars: 13,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class12_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class12_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function _class12_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function _class12_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class12_ng_container_5_Template, 3, 2, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class12_span_6_Template, 2, 5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c30, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](8, _c31, ctx.checked, ctx.focused, ctx.rowNode.node.partialSelected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.checkboxIconTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.checkboxIconTemplate);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_15__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__.MinusIcon];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTableCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-indeterminate': rowNode.node.partialSelected, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.checkboxIconTemplate">
                    <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="checked" />
                    <MinusIcon [styleClass]="'p-checkbox-icon'" *ngIf="rowNode.node.partialSelected" />
                </ng-container>
                <span *ngIf="tt.checkboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.checkboxIconTemplate; context: { $implicit: checked, partialSelected: rowNode.node.partialSelected }"></ng-template>
                </span>
            </div>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['value']
    }]
  });
})();
class TTHeaderCheckbox {
  constructor(tt, tableService, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tableService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "boxViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "checked", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "disabled", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectionChangeSubscription", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "valueChangeSubscription", void 0);
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event, checked) {
    if (this.tt.value && this.tt.value.length > 0) {
      this.tt.toggleNodesWithCheckbox(event, !checked);
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    let checked;
    const data = this.tt.filteredNodes || this.tt.value;
    if (data) {
      for (let node of data) {
        if (this.tt.isSelected(node)) {
          checked = true;
        } else {
          checked = false;
          break;
        }
      }
    } else {
      checked = false;
    }
    return checked;
  }
}
_class13 = TTHeaderCheckbox;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTHeaderCheckbox, "\u0275fac", function _class13_Factory(t) {
  return new (t || _class13)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTHeaderCheckbox, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class13,
  selectors: [["p-treeTableHeaderCheckbox"]],
  viewQuery: function _class13_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c32, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.boxViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  decls: 8,
  vars: 13,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class13_Template(rf, ctx) {
    if (rf & 1) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class13_Template_div_click_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onClick($event, _r0.checked));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function _class13_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function _class13_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class13_ng_container_6_Template, 2, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class13_span_7_Template, 2, 4, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c30, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.checked)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](9, _c33, ctx.checked, ctx.focused, !ctx.tt.value || ctx.tt.value.length === 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.headerCheckboxIconTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.headerCheckboxIconTemplate);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_15__.CheckIcon];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTHeaderCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTableHeaderCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event, cb.checked)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value || tt.value.length === 0" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': !tt.value || tt.value.length === 0 }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.headerCheckboxIconTemplate">
                    <CheckIcon *ngIf="checked" [styleClass]="'p-checkbox-icon'" />
                </ng-container>
                <span class="p-checkbox-icon" *ngIf="tt.headerCheckboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TreeTableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    boxViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['box']
    }]
  });
})();
class TTEditableColumn {
  constructor(tt, el, zone) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "field", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ttEditableColumnDisabled", void 0);
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.editingCellClick = true;
      if (this.tt.editingCell) {
        if (this.tt.editingCell !== this.el.nativeElement) {
          if (!this.tt.isEditingCellValid()) {
            return;
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.tt.updateEditingCell(this.el.nativeElement, this.data, this.field);
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
    this.tt.onEditInit.emit({
      field: this.field,
      data: this.data
    });
    this.tt.editingCellClick = true;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.el.nativeElement, 'input, textarea');
        if (focusable) {
          focusable.focus();
        }
      }, 50);
    });
  }
  closeEditingCell() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.tt.editingCell, 'p-checkbox-icon');
    this.tt.editingCell = null;
    this.tt.unbindDocumentEditListener();
  }
  onKeyDown(event) {
    if (this.isEnabled()) {
      //enter
      if (event.keyCode == 13) {
        if (this.tt.isEditingCellValid()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
          this.closeEditingCell();
          this.tt.onEditComplete.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      }
      //escape
      else if (event.keyCode == 27) {
        if (this.tt.isEditingCellValid()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
          this.closeEditingCell();
          this.tt.onEditCancel.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      }
      //tab
      else if (event.keyCode == 9) {
        this.tt.onEditComplete.emit({
          field: this.field,
          data: this.data
        });
        if (event.shiftKey) this.moveToPreviousCell(event);else this.moveToNextCell(event);
      }
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(cell, 'p-cell-editing')) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findPreviousEditableColumn(currentCell);
    if (targetCell) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
      event.preventDefault();
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findNextEditableColumn(currentCell);
    if (targetCell) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.invokeElementMethod(targetCell, 'click');
      event.preventDefault();
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.ttEditableColumnDisabled !== true;
  }
}
_class14 = TTEditableColumn;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTEditableColumn, "\u0275fac", function _class14_Factory(t) {
  return new (t || _class14)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTEditableColumn, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class14,
  selectors: [["", "ttEditableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function _class14_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class14_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function _class14_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    data: ["ttEditableColumn", "data"],
    field: ["ttEditableColumnField", "field"],
    ttEditableColumnDisabled: "ttEditableColumnDisabled"
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTEditableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttEditableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttEditableColumn']
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttEditableColumnField']
    }],
    ttEditableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class TreeTableCellEditor {
  constructor(tt, editableColumn) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "editableColumn", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inputTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "outputTemplate", void 0);
    this.tt = tt;
    this.editableColumn = editableColumn;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;
        case 'output':
          this.outputTemplate = item.template;
          break;
      }
    });
  }
}
_class15 = TreeTableCellEditor;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableCellEditor, "\u0275fac", function _class15_Factory(t) {
  return new (t || _class15)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TTEditableColumn));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableCellEditor, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class15,
  selectors: [["p-treeTableCellEditor"]],
  contentQueries: function _class15_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
  template: function _class15_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class15_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class15_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeTableCellEditor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTableCellEditor',
      template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: TTEditableColumn
    }];
  }, {
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate]
    }]
  });
})();
class TTRow {
  constructor(tt, el, zone) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  onKeyDown(event) {
    switch (event.which) {
      //down arrow
      case 40:
        let nextRow = this.el.nativeElement.nextElementSibling;
        if (nextRow) {
          nextRow.focus();
        }
        event.preventDefault();
        break;
      //down arrow
      case 38:
        let prevRow = this.el.nativeElement.previousElementSibling;
        if (prevRow) {
          prevRow.focus();
        }
        event.preventDefault();
        break;
      //left arrow
      case 37:
        if (this.rowNode.node.expanded) {
          this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(this.el.nativeElement);
          this.rowNode.node.expanded = false;
          this.tt.onNodeCollapse.emit({
            originalEvent: event,
            node: this.rowNode.node
          });
          this.tt.updateSerializedValue();
          this.tt.tableService.onUIUpdate(this.tt.value);
          this.restoreFocus();
        }
        break;
      //right arrow
      case 39:
        if (!this.rowNode.node.expanded) {
          this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.index(this.el.nativeElement);
          this.rowNode.node.expanded = true;
          this.tt.onNodeExpand.emit({
            originalEvent: event,
            node: this.rowNode.node
          });
          this.tt.updateSerializedValue();
          this.tt.tableService.onUIUpdate(this.tt.value);
          this.restoreFocus();
        }
        break;
    }
  }
  restoreFocus() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let row = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.tt.containerViewChild?.nativeElement, '.p-treetable-tbody').children[this.tt.toggleRowIndex];
        if (row) {
          row.focus();
        }
      }, 25);
    });
  }
}
_class16 = TTRow;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTRow, "\u0275fac", function _class16_Factory(t) {
  return new (t || _class16)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TTRow, "\u0275dir", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _class16,
  selectors: [["", "ttRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 1,
  hostBindings: function _class16_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function _class16_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", "0");
    }
  },
  inputs: {
    rowNode: ["ttRow", "rowNode"]
  }
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TTRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[ttRow]',
      host: {
        class: 'p-element',
        '[attr.tabindex]': '"0"'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['ttRow']
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class TreeTableToggler {
  constructor(tt) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tt", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rowNode", void 0);
    this.tt = tt;
  }
  onClick(event) {
    this.rowNode.node.expanded = !this.rowNode.node.expanded;
    if (this.rowNode.node.expanded) {
      this.tt.onNodeExpand.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    } else {
      this.tt.onNodeCollapse.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    }
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    event.preventDefault();
  }
}
_class17 = TreeTableToggler;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableToggler, "\u0275fac", function _class17_Factory(t) {
  return new (t || _class17)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TreeTable));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableToggler, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class17,
  selectors: [["p-treeTableToggler"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    rowNode: "rowNode"
  },
  decls: 3,
  vars: 9,
  consts: [["type", "button", "tabindex", "-1", "pRipple", "", 1, "p-treetable-toggler", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class17_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class17_Template_button_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class17_ng_container_1_Template, 3, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class17_2_Template, 1, 0, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden")("margin-left", ctx.rowNode.level * 16 + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tt.togglerIconTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.tt.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c7, ctx.rowNode.node.expanded));
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_18__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_19__.ChevronRightIcon];
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeTableToggler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-treeTableToggler',
      template: `
        <button
            type="button"
            class="p-treetable-toggler p-link"
            (click)="onClick($event)"
            tabindex="-1"
            pRipple
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'"
            [style.marginLeft]="rowNode.level * 16 + 'px'"
        >
            <ng-container *ngIf="!tt.togglerIconTemplate">
                <ChevronDownIcon *ngIf="rowNode.node.expanded" />
                <ChevronRightIcon *ngIf="!rowNode.node.expanded" />
            </ng-container>
            <ng-template *ngTemplateOutlet="tt.togglerIconTemplate; context: { $implicit: rowNode.node.expanded }"></ng-template>
        </button>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: TreeTable
    }];
  }, {
    rowNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TreeTableModule {}
_class18 = TreeTableModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableModule, "\u0275fac", function _class18_Factory(t) {
  return new (t || _class18)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class18
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TreeTableModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_7__.PaginatorModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_8__.SpinnerIcon, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_9__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_10__.ArrowUpIcon, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_12__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_13__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_14__.SortAmountDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_15__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__.MinusIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_18__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_19__.ChevronRightIcon, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_7__.PaginatorModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_8__.SpinnerIcon, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_9__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_10__.ArrowUpIcon, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_12__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_13__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_14__.SortAmountDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_15__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_16__.MinusIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_18__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_19__.ChevronRightIcon],
      exports: [TreeTable, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule],
      declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_tree_treedemo_module_ts.js.map