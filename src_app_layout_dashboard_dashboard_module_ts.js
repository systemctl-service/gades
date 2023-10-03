"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_layout_dashboard_dashboard_module_ts"],{

/***/ 1301:
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardsRoutingModule: () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 6722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class DashboardsRoutingModule {}
_class = DashboardsRoutingModule;
_class.ɵfac = function DashboardsRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
    path: '',
    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6722:
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/usuario.service */ 1063);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/product.service */ 981);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 3859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;







const _c0 = function () {
  return ["/ordenes-trabajo"];
};
const _c1 = function () {
  return {
    width: "2.5rem",
    height: "2.5rem"
  };
};
class DashboardComponent {
  constructor(productService, layoutService) {
    this.productService = productService;
    this.layoutService = layoutService;
    this.otrasSubscripciones = [];
    this.usuarioID = JSON.parse(localStorage.getItem('usuario')).id;
    this.usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService);
    this.subscription = this.layoutService.configUpdate$.subscribe(() => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.initChart();
    this.productService.getProductsSmall().then(data => this.products = data);
    this.items = [{
      label: 'Add New',
      icon: 'pi pi-fw pi-plus'
    }, {
      label: 'Remove',
      icon: 'pi pi-fw pi-minus'
    }];
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
        borderColor: documentStyle.getPropertyValue('--bluegray-700'),
        tension: .4
      }, {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: documentStyle.getPropertyValue('--green-600'),
        borderColor: documentStyle.getPropertyValue('--green-600'),
        tension: .4
      }]
    };
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.otrasSubscripciones.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = DashboardComponent;
_class.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 22,
  vars: 12,
  consts: [[1, "grid"], [1, "col-6", "lg:col-2", "xl:col-2"], [1, "card", "mb-0", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-list", "text-orange-500", "text-xl"], [1, "block", "text-500", "text-center", "font-medium", "mt-2"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-money-bill", "text-green-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-desktop", "text-indigo-500", "text-xl"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Tareas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Gastos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " DPV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 8431:
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 6722);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chart */ 3530);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/styleclass */ 152);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 1301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;











class DashboardModule {}
_class = DashboardModule;
_class.ɵfac = function DashboardModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_5__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_5__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_layout_dashboard_dashboard_module_ts.js.map