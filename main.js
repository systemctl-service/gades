"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/notfound/notfound.component */ 2841);
/* harmony import */ var _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app.layout.component */ 9206);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _layout_ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/ordenes-trabajo/ordenes-trabajo.component */ 3776);
/* harmony import */ var _layout_mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/mostrar-tarea/mostrar-tarea.component */ 4388);
/* harmony import */ var _layout_gastos_gastos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/gastos/gastos.component */ 7954);
/* harmony import */ var _layout_pdv_pdv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/pdv/pdv.component */ 2668);
/* harmony import */ var _layout_ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component */ 4746);
/* harmony import */ var _layout_almacen_almacen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/almacen/almacen.component */ 555);
/* harmony import */ var _layout_almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/almacen/ingresar-stock/ingresar-stock.component */ 8555);
/* harmony import */ var _layout_almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/almacen/crear-producto/crear-producto.component */ 5524);
/* harmony import */ var _layout_almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/almacen/crear-producto-propio/crear-producto-propio.component */ 3678);
/* harmony import */ var _layout_almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/almacen/escaner/escaner.component */ 8909);
/* harmony import */ var _layout_factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/factura-reader/factura-reader.component */ 938);
/* harmony import */ var _layout_confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/confirmar-orden-compra/confirmar-orden-compra.component */ 8416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


















class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot([{
    path: '',
    component: _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__.AppLayoutComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/dashboard/dashboard.module */ 8431)).then(m => m.DashboardModule)
    }, {
      path: 'ordenes-trabajo',
      component: _layout_ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_3__.OrdenesTrabajoComponent
    }, {
      path: 'ordenes-trabajo/mostrar/:id',
      component: _layout_ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_7__.MostrarOrdenTrabajoComponent
    }, {
      path: 'tarea/:id',
      component: _layout_mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_4__.MostrarTareaComponent
    }, {
      path: 'gastos',
      component: _layout_gastos_gastos_component__WEBPACK_IMPORTED_MODULE_5__.GastosComponent
    }, {
      path: 'pdv',
      component: _layout_pdv_pdv_component__WEBPACK_IMPORTED_MODULE_6__.PdvComponent
    }, {
      path: 'almacen',
      component: _layout_almacen_almacen_component__WEBPACK_IMPORTED_MODULE_8__.AlmacenComponent
    }, {
      path: 'almacen/ingresar-stock',
      component: _layout_almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_9__.IngresarStockComponent
    }, {
      path: 'almacen/scanner',
      component: _layout_almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_12__.EscanerComponent
    }, {
      path: 'almacen/nuevo-producto/:barcode',
      component: _layout_almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_10__.CrearProductoComponent
    }, {
      path: 'almacen/nuevo-producto-propio',
      component: _layout_almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_11__.CrearProductoPropioComponent
    }, {
      path: 'almacen/confirmar-orden-compra',
      component: _layout_confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmarOrdenCompraComponent
    }, {
      path: 'factura-reader/:id',
      component: _layout_factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_13__.FacturaReaderComponent
    }]
  }, {
    path: 'auth',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 4788)).then(m => m.AuthModule)
  }, {
    path: 'notfound',
    component: _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundComponent
  }, {
    path: '**',
    redirectTo: '/notfound'
  }], {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/service/app.layout.service */ 3859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 8313);
var _class;






class AppComponent {
  constructor() {
    this.primengConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig);
    this.layoutService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService);
  }
  ngOnInit() {
    this.layoutService.onMenuToggle();
    this.primengConfig.ripple = true;
    //optional configuration with the default configuration
    this.layoutService.config = {
      ripple: false,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'dark',
      theme: 'bootstrap4-dark-blue',
      scale: 14 //size of the body font size to scale the whole application
    };
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.Toast],
  encapsulation: 2
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app.layout.module */ 4295);
/* harmony import */ var _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/notfound/notfound.component */ 2841);
/* harmony import */ var _services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth/auth-interceptor.service */ 2347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;









class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptorService,
    multi: true
  }],
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__.PrimeNgModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__.NotfoundComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__.PrimeNgModule]
  });
})();

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/usuario.service */ 1063);
var _class;



class AuthGuard {
  constructor(router, usuarioService) {
    this.router = router;
    this.usuarioService = usuarioService;
  }
  canActivate(route, state) {
    console.log('PASO POR EL GUARD AUTH');
    this.usuarioService.verificarCaducudadToken();
    let token = localStorage.getItem('token');
    let refreshToken = localStorage.getItem('refresh_token');
    let usuario = localStorage.getItem('usuario');
    if (token && refreshToken && usuario) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
_class = AuthGuard;
_class.ɵfac = function AuthGuard_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1693:
/*!***********************************************!*\
  !*** ./src/app/interfaces/tarea.interface.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EstadoFinalizado: () => (/* binding */ EstadoFinalizado)
/* harmony export */ });
var EstadoFinalizado;
(function (EstadoFinalizado) {
  EstadoFinalizado["finalizado"] = "finalizado";
  EstadoFinalizado["iniciado"] = "iniciado";
})(EstadoFinalizado || (EstadoFinalizado = {}));

/***/ }),

/***/ 555:
/*!*****************************************************!*\
  !*** ./src/app/layout/almacen/almacen.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlmacenComponent: () => (/* binding */ AlmacenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



const _c0 = function () {
  return ["ingresar-stock"];
};
const _c1 = function () {
  return {
    width: "2.5rem",
    height: "2.5rem"
  };
};
const _c2 = function () {
  return ["scanner"];
};
const _c3 = function () {
  return ["nuevo-producto-propio"];
};
const _c4 = function () {
  return ["confirmar-orden-compra"];
};
class AlmacenComponent {}
_class = AlmacenComponent;
_class.ɵfac = function AlmacenComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-almacen"]],
  decls: 29,
  vars: 16,
  consts: [[1, "grid"], [1, "col-6", "lg:col-3", "xl:col-3"], [1, "card", "mb-0", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-cart", "text-orange-500", "text-xl"], [1, "block", "text-500", "text-center", "font-medium", "mt-2"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-bag", "text-green-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-bag", "text-indigo-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-red-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-truck", "text-red-500", "text-xl"]],
  template: function AlmacenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ingresar Stock ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Nuevo Producto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nuevo Producto Propio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Confirmar Orden de Compra ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3678:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/almacen/crear-producto-propio/crear-producto-propio.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearProductoPropioComponent: () => (/* binding */ CrearProductoPropioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/producto.service */ 5466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/enum.service */ 8241);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
var _class;



















function CrearProductoPropioComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function CrearProductoPropioComponent_div_1_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_26_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.cantidadAPoner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_26_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.agregarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r17.cantidadAPoner)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.cantidadAPoner < 1);
  }
}
function CrearProductoPropioComponent_div_1_div_26_br_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoPropioComponent_div_1_div_26_p_table_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoPropioComponent_div_1_div_26_p_table_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 47)(2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 47)(6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 49)(11, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_26_p_table_6_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const compoenente_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.eliminarComponente(compoenente_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const compoenente_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r26.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r26.cantidad, " ");
  }
}
function CrearProductoPropioComponent_div_1_div_26_p_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoPropioComponent_div_1_div_26_p_table_6_ng_template_2_Template, 9, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoPropioComponent_div_1_div_26_p_table_6_ng_template_3_Template, 12, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r19.componentesPrevios)("rowHover", true);
  }
}
function CrearProductoPropioComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ingresar componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_26_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.componenteSeleccionado = $event);
    })("onChange", function CrearProductoPropioComponent_div_1_div_26_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.seleccionarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CrearProductoPropioComponent_div_1_div_26_div_4_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CrearProductoPropioComponent_div_1_div_26_br_5_Template, 1, 0, "br", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CrearProductoPropioComponent_div_1_div_26_p_table_6_Template, 4, 2, "p-table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r5.selectComponents)("ngModel", ctx_r5.componenteSeleccionado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.newProducto.get("compuestoSn").value === "Si");
  }
}
function CrearProductoPropioComponent_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "p-dropdown", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_31_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.unidadSeleccionada.unidadBase = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_31_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.unidadSeleccionada.cantidadUb = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r6.selectSiNo)("ngModel", ctx_r6.unidadSeleccionada.unidadBase)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.unidadSeleccionada.cantidadUb)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("disabled", ctx_r6.checkUp());
  }
}
function CrearProductoPropioComponent_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_32_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.unidadSeleccionada.nombre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_32_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.agregarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.unidadSeleccionada.nombre)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.unidadSeleccionada.cantidadUb < 1 || ctx_r7.unidadSeleccionada.nombre === "" || ctx_r7.unidadSeleccionada.nombre === null || ctx_r7.checkUBase() && ctx_r7.unidadSeleccionada.unidadBase === "Si");
  }
}
function CrearProductoPropioComponent_div_1_br_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoPropioComponent_div_1_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cantidad Unidad Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unidad Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 47)(2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidadUb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 47)(6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 47)(10, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "unidadBase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 47)(14, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "unidadMedida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "div", 49)(19, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_ng_template_37_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const unidadMedida_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.eliminarUnidad(unidadMedida_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const unidadMedida_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r38.cantidadUb, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r38.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r38.unidadBase, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r38.unidadMedida, " ");
  }
}
function CrearProductoPropioComponent_div_1_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debe haber una unidad de medida con Unidad Base ('Si')");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_60_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-fileUpload", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelect", function CrearProductoPropioComponent_div_1_ng_template_60_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.onSelectImg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showUploadButton", false);
  }
}
function CrearProductoPropioComponent_div_1_ng_template_60_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_ng_template_60_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoPropioComponent_div_1_ng_template_60_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoPropioComponent_div_1_ng_template_60_p_button_2_Template, 1, 0, "p-button", 59);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r16.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.imagenSubida);
  }
}
const _c1 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c2 = function (a0) {
  return {
    "\n                  ng-invalid ng-dirty": a0
  };
};
function CrearProductoPropioComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nuevo Producto Propio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 7)(7, "div", 8)(8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CrearProductoPropioComponent_div_1_small_11_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Descripcion Interna");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrearProductoPropioComponent_div_1_small_16_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Descripcion Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CrearProductoPropioComponent_div_1_small_21_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Es Compuesto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CrearProductoPropioComponent_div_1_div_26_Template, 8, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8)(28, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Unidades de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_Template_p_dropdown_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.unidadSeleccionada.unidadMedida = $event);
    })("onChange", function CrearProductoPropioComponent_div_1_Template_p_dropdown_onChange_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.seleccionarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CrearProductoPropioComponent_div_1_div_31_Template, 3, 8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CrearProductoPropioComponent_div_1_div_32_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CrearProductoPropioComponent_div_1_br_33_Template, 1, 0, "br", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CrearProductoPropioComponent_div_1_ng_template_36_Template, 11, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CrearProductoPropioComponent_div_1_ng_template_37_Template, 20, 4, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CrearProductoPropioComponent_div_1_small_38_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Precio de Venta al Publico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CrearProductoPropioComponent_div_1_small_44_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 8)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Porcentaje del IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CrearProductoPropioComponent_div_1_small_49_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 8)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Tipo de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "p-dropdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CrearProductoPropioComponent_div_1_div_55_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 8)(57, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p-fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, CrearProductoPropioComponent_div_1_ng_template_60_Template, 3, 2, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 34)(64, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CrearProductoPropioComponent_div_1_Template_p_button_onClick_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_Template_p_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.newProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("nombre")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.newProducto.controls.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.newProducto.get("compuestoSn").value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.selectUnidades)("ngModel", ctx_r1.unidadSeleccionada.unidadMedida)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.unidadesPrevias)("rowHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.checkUBase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("pvp")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("pvp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("iva")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("iva"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.tiposProductos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingTipos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class CrearProductoPropioComponent {
  constructor() {
    // servicios requeridos
    this.productoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService);
    this.activatedRoutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location);
    this.enumService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_2__.EnumService);
    this.compuestoSnOptions = [{
      value: 'Si',
      label: 'Si'
    }, {
      value: 'No',
      label: 'No'
    }];
    this.componentesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    this.arrayComponentesID = [];
    this.tiposProductos = [];
    this.hadSubmit = false;
    this.componenteSeleccionadoControl = false;
    this.componenteSeleccionado = null;
    this.componentesPrevios = [];
    this.cantidadAPoner = null;
    this.loading = false;
    this.loadingTipos = true;
    this.componentesSN = false;
    this.controlSelectConponent = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.arrayComponents = [];
    this.unidadSeleccionadaControl = false;
    this.unidadSeleccionada = {
      nombre: null,
      cantidadUb: null,
      unidadBase: 'No',
      unidadMedida: null
    };
    this.unidadesPrevias = [];
    this.selectUnidades = ['Horas', 'Litros', 'Unidad', 'Botellas', 'Cajas', 'Palet'];
    this.selectSiNo = ['Si', 'No'];
    this.newProducto = this.Form.group({
      nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionInterna: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionFactura: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      compuestoSn: [null],
      componentes: [[]],
      unidadMedida: [[]],
      pvp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      iva: [null],
      tipoProducto: [null],
      imagen: [null]
    });
  }
  // form getters ----------------------------------------------------------------------------------
  get nombre() {
    return this.newProducto.get('nombre');
  }
  get descripcionInterna() {
    return this.newProducto.get('descripcionInterna');
  }
  get descripcionFactura() {
    return this.newProducto.get('descripcionFactura');
  }
  get compuestoSn() {
    return this.newProducto.get('compuestoSn');
  }
  get componentes() {
    return this.newProducto.get('componentes');
  }
  get unidadMedida() {
    return this.newProducto.get('unidadMedida');
  }
  get pvp() {
    return this.newProducto.get('pvp');
  }
  get tipoProducto() {
    return this.newProducto.get('tipoProducto');
  }
  get imagen() {
    return this.newProducto.get('imagen');
  }
  // end form getter --------------------------------------------------------------------------------
  ngOnInit() {
    this.cargarTiposProductos();
    this.cargarProductosComponentes();
  }
  back() {
    this.location.back();
  }
  validar(campo) {
    return this.newProducto.get(campo)?.valid;
  }
  // dinamica de los componentes -------------------------------------------------------------------
  cargarComponentesPrevios() {
    this.productoAEditar.componentes.forEach(componente => {
      this.componentesPrevios.push(componente);
    });
  }
  seleccionarComponente() {
    this.componenteSeleccionadoControl = true;
  }
  seleccionarUnidades() {
    this.unidadSeleccionadaControl = true;
  }
  agregarComponente() {
    if (this.componenteSeleccionado !== null) {
      this.componenteSeleccionado.cantidad = this.cantidadAPoner;
      this.componentesPrevios.push(this.componenteSeleccionado);
      this.cantidadAPoner = null;
      this.componenteSeleccionadoControl = false;
      this.componenteSeleccionado = null;
    }
  }
  agregarUnidades() {
    if (this.unidadSeleccionada !== null) {
      console.log(this.unidadSeleccionada);
      this.unidadesPrevias.push(this.unidadSeleccionada);
      console.log(this.unidadesPrevias);
      this.unidadSeleccionadaControl = false;
      this.unidadSeleccionada = {
        nombre: null,
        cantidadUb: null,
        unidadBase: null,
        unidadMedida: null
      };
    }
  }
  eliminarUnidad(unidad) {
    this.unidadesPrevias = this.unidadesPrevias.filter(component => component.nombre !== unidad.nombre);
  }
  eliminarComponente(id) {
    this.componentesPrevios = this.componentesPrevios.filter(componente => componente.id !== id);
    this.componentesPrevios = this.componentesPrevios.filter(componente => componente.id !== id);
  }
  checkUp() {
    if (this.unidadSeleccionada.unidadBase == 'Si') {
      this.unidadSeleccionada.cantidadUb = 1;
      return true;
    }
    return false;
  }
  checkUBase() {
    let aux = false;
    this.unidadesPrevias.forEach(unidad => {
      if (unidad.unidadBase == 'Si') {
        aux = true;
      }
    });
    return aux;
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newProducto.invalid || !this.checkUBase()) {
      console.log(this.newProducto.invalid);
      this.loading = false;
      this.messageService.error('Verifique los campos');
      return;
    }
    let productoToSend = this.newProducto.value;
    productoToSend.componentes = this.componentesPrevios;
    console.log(this.componentesPrevios);
    productoToSend.unidadesMedidas = this.unidadesPrevias;
    this.reqNewProducto(productoToSend);
  }
  // dinamica de la imagen -----------------------------------------------------------------------
  onSelectImg(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event['currentFiles'][0]);
    fileReader.onload = () => {
      this.imagen.setValue(fileReader.result);
      this.imagenSubida = fileReader.result;
    };
  }
  onRemoveImg() {
    this.imagen.setValue(null);
    this.imagenSubida = null;
  }
  // llamadas al back -----------------------------------------------------------------------------
  // carga los componentes del select de componentes
  cargarProductosComponentes() {
    this.productoService.getProductos().subscribe({
      next: response => {
        this.selectComponents = response;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    });
  }
  // cargo los tipos de productos del select homonimo
  cargarTiposProductos() {
    this.enumService.getEnum('tipo_producto').subscribe({
      next: res => this.tiposProductos = res,
      error: error => this.messageService.error(error.error.detail)
    });
  }
  reqNewProducto(productoToSend) {
    console.log('el producto que envio: ', productoToSend);
    this.productoService.generarBarcode(productoToSend).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito!',
          detail: 'Producto editado con exito!'
        });
        console.log(response);
        this.router.navigateByUrl('/almacen');
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
        return;
      }
    });
  }
}
_class = CrearProductoPropioComponent;
_class.ɵfac = function CrearProductoPropioComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-crear-producto-propio"]],
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh;", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "mb-2", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "nombre", 1, "w-full"], ["autocomplete", "nope", "id", "nombre", "type", "text", "placeholder", "Ingrese el nombre", "pInputText", "", "formControlName", "nombre", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "field", "pl-0", "pt-0", "pb-0", "md:col-12"], ["for", "descripcion", 1, "w-full"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la descripcion interna", "formControlName", "descripcionInterna", 3, "ngClass"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la descripcion factura", "formControlName", "descripcionFactura", 3, "ngClass"], ["formControlName", "compuestoSn", "placeholder", "Si o No", "optionValue", "value", "optionLabel", "label", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12", 4, "ngIf"], ["placeholder", "Seleccione una Unidad", 3, "options", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["class", "col-12 pr-0 pl-0 pb-0 flex", 4, "ngIf"], ["class", "col-12 pr-0 pl-0 flex", 4, "ngIf"], [4, "ngIf"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["autocomplete", "nope", "id", "pvp", "type", "number", "pInputText", "", "placeholder", "Ingrese el pvp", "formControlName", "pvp", 3, "ngClass"], ["autocomplete", "nope", "id", "iva", "type", "number", "pInputText", "", "placeholder", "Ingrese el iva", "formControlName", "iva", 3, "ngClass"], [1, "flex", "flex-row"], ["formControlName", "tipoProducto", "placeholder", "Selecciona", 1, "w-full", 3, "options"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "mb-3"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "width", "100%", 3, "src"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "p-error"], ["placeholder", "Seleccione un componente", "optionLabel", "nombre", 3, "options", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover", 4, "ngIf"], [1, "col-12", "pr-0", "pl-0", "flex"], ["type", "number", "pInputText", "", "placeholder", "Cantidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pButton", "", "pRipple", "", "label", "Agregar", "icon", "pi pi-check", 1, "p-button-primary", "ml-2", 3, "disabled", "click"], ["pSortableColumn", "cantidad"], ["field", "cantidad"], ["pSortableColumn", "nombre"], ["field", "nombre"], [2, "min-width", "10rem"], [1, "p-column-title"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "col-12", "pr-0", "pl-0", "pb-0", "flex"], ["placeholder", "Unidad Base", 1, "mr-2", 3, "options", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "number", "pInputText", "", "placeholder", "Cantidad Unica Base", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Nombre de la unidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"]],
  template: function CrearProductoPropioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CrearProductoPropioComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoPropioComponent_div_1_Template, 66, 36, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_fieldset__WEBPACK_IMPORTED_MODULE_12__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUpload, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortIcon, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextarea],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5524:
/*!***************************************************************************!*\
  !*** ./src/app/layout/almacen/crear-producto/crear-producto.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearProductoComponent: () => (/* binding */ CrearProductoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/enum.service */ 8241);
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/producto.service */ 5466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
var _class;
















function CrearProductoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function CrearProductoComponent_div_1_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_26_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.cantidadAPoner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_26_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.agregarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r16.cantidadAPoner)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r16.cantidadAPoner < 1);
  }
}
function CrearProductoComponent_div_1_div_26_br_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoComponent_div_1_div_26_p_table_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoComponent_div_1_div_26_p_table_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 44)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 44)(6, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 46)(11, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_26_p_table_6_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const compoenente_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.eliminarComponente(compoenente_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const compoenente_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r25.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r25.nombre, " ");
  }
}
function CrearProductoComponent_div_1_div_26_p_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoComponent_div_1_div_26_p_table_6_ng_template_2_Template, 9, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoComponent_div_1_div_26_p_table_6_ng_template_3_Template, 12, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r18.componentesPrevios)("rowHover", true);
  }
}
function CrearProductoComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ingresar componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_26_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.componenteSeleccionado = $event);
    })("onChange", function CrearProductoComponent_div_1_div_26_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.seleccionarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CrearProductoComponent_div_1_div_26_div_4_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CrearProductoComponent_div_1_div_26_br_5_Template, 1, 0, "br", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CrearProductoComponent_div_1_div_26_p_table_6_Template, 4, 2, "p-table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r5.selectComponents)("ngModel", ctx_r5.componenteSeleccionado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.newProducto.get("compuestoSn").value === "Si");
  }
}
function CrearProductoComponent_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "p-dropdown", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_31_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.unidadSeleccionada.unidadBase = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_31_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.unidadSeleccionada.cantidadUb = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r6.selectSiNo)("ngModel", ctx_r6.unidadSeleccionada.unidadBase)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.unidadSeleccionada.cantidadUb)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("disabled", ctx_r6.checkUp());
  }
}
function CrearProductoComponent_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_32_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.unidadSeleccionada.nombre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_32_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.agregarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.unidadSeleccionada.nombre)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.unidadSeleccionada.cantidadUb < 1 || ctx_r7.unidadSeleccionada.nombre === "" || ctx_r7.unidadSeleccionada.nombre === null || ctx_r7.checkUBase() && ctx_r7.unidadSeleccionada.unidadBase === "Si");
  }
}
function CrearProductoComponent_div_1_br_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoComponent_div_1_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cantidad Unidad Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Unidad Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoComponent_div_1_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 44)(2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidadUb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 44)(6, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 44)(10, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "unidadBase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 44)(14, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "unidadMedida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "div", 46)(19, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_ng_template_37_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const unidadMedida_r37 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.eliminarUnidad(unidadMedida_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const unidadMedida_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r37.cantidadUb, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r37.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r37.unidadBase, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r37.unidadMedida, " ");
  }
}
function CrearProductoComponent_div_1_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debe haber una unidad de medida con Unidad Base ('Si')");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c2 = function (a0) {
  return {
    "\n                ng-invalid ng-dirty": a0
  };
};
function CrearProductoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 7)(7, "div", 8)(8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CrearProductoComponent_div_1_small_11_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Descripcion Interna");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrearProductoComponent_div_1_small_16_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Descripcion Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CrearProductoComponent_div_1_small_21_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Es Compuesto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CrearProductoComponent_div_1_div_26_Template, 8, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8)(28, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Unidades de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_Template_p_dropdown_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.unidadSeleccionada.unidadMedida = $event);
    })("onChange", function CrearProductoComponent_div_1_Template_p_dropdown_onChange_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.seleccionarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CrearProductoComponent_div_1_div_31_Template, 3, 8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CrearProductoComponent_div_1_div_32_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CrearProductoComponent_div_1_br_33_Template, 1, 0, "br", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CrearProductoComponent_div_1_ng_template_36_Template, 11, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CrearProductoComponent_div_1_ng_template_37_Template, 20, 4, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CrearProductoComponent_div_1_small_38_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Precio de Venta al Publico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CrearProductoComponent_div_1_small_44_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 8)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Porcentaje del IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CrearProductoComponent_div_1_small_49_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 8)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Tipo de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "p-dropdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CrearProductoComponent_div_1_div_55_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 31)(57, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CrearProductoComponent_div_1_Template_p_button_onClick_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_Template_p_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Nuevo Producto (", ctx_r1.barcode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.newProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("nombre")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.newProducto.controls.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.newProducto.get("compuestoSn").value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.selectUnidades)("ngModel", ctx_r1.unidadSeleccionada.unidadMedida)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.unidadSeleccionadaControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.unidadesPrevias)("rowHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.checkUBase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("pvp")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("pvp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("iva")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("iva"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.tiposProductos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingTipos);
  }
}
class CrearProductoComponent {
  constructor() {
    // servicios requeridos
    this.productoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__.ProductoService);
    this.activatedRoutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.enumService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_1__.EnumService);
    this.compuestoSnOptions = [{
      value: 'Si',
      label: 'Si'
    }, {
      value: 'No',
      label: 'No'
    }];
    this.tiposProductos = [];
    this.hadSubmit = false;
    this.loading = false;
    this.loadingTipos = true;
    this.componenteSeleccionadoControl = false;
    this.unidadSeleccionadaControl = false;
    this.componenteSeleccionado = null;
    this.componentesPrevios = [];
    this.unidadSeleccionada = {
      nombre: null,
      cantidadUb: null,
      unidadBase: 'No',
      unidadMedida: null
    };
    this.unidadesPrevias = [];
    this.cantidadAPoner = null;
    this.selectUnidades = ['Horas', 'Litros', 'Unidad', 'Botellas', 'Cajas', 'Palet'];
    this.selectSiNo = ['Si', 'No'];
    this.subs = [];
    this.newProducto = this.Form.group({
      nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionInterna: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionFactura: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      compuestoSn: [null],
      componentes: [[]],
      unidadMedida: [[]],
      pvp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      iva: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      codigoEan: [null],
      tipoProducto: [null]
    });
  }
  // form getters ----------------------------------------------------------------------------------
  get nombre() {
    return this.newProducto.get('nombre');
  }
  get descripcionInterna() {
    return this.newProducto.get('descripcionInterna');
  }
  get descripcionFactura() {
    return this.newProducto.get('descripcionFactura');
  }
  get compuestoSn() {
    return this.newProducto.get('compuestoSn');
  }
  get componentes() {
    return this.newProducto.get('componentes');
  }
  get unidadMedida() {
    return this.newProducto.get('unidadMedida');
  }
  get pvp() {
    return this.newProducto.get('pvp');
  }
  get codigoEan() {
    return this.newProducto.get('codigoEan');
  }
  get tipoProducto() {
    return this.newProducto.get('tipoProducto');
  }
  // end form getter --------------------------------------------------------------------------------
  ngOnInit() {
    this.cargarTiposProductos();
    this.cargarProductosComponentes();
    this.subs.push(this.activatedRoutes.params.subscribe(params => {
      this.barcode = params['barcode'];
    }));
  }
  back() {
    let lastUrl = sessionStorage.getItem('lastUrl');
    this.router.navigateByUrl(lastUrl);
  }
  validar(campo) {
    return this.newProducto.get(campo)?.valid;
  }
  // dinamica de los componentes y unidades -------------------------------------------------------------------
  seleccionarComponente() {
    this.componenteSeleccionadoControl = true;
  }
  seleccionarUnidades() {
    this.unidadSeleccionadaControl = true;
  }
  agregarComponente() {
    if (this.componenteSeleccionado !== null) {
      this.componenteSeleccionado.cantidad = this.cantidadAPoner;
      this.componentesPrevios.push(this.componenteSeleccionado);
      this.selectComponents = this.selectComponents.filter(componente => componente.id !== this.componenteSeleccionado.id);
      this.cantidadAPoner = null;
      this.componenteSeleccionadoControl = false;
      this.componenteSeleccionado = null;
    }
  }
  agregarUnidades() {
    if (this.unidadSeleccionada !== null) {
      console.log(this.unidadSeleccionada);
      this.unidadesPrevias.push(this.unidadSeleccionada);
      console.log(this.unidadesPrevias);
      this.unidadSeleccionadaControl = false;
      this.unidadSeleccionada = {
        nombre: null,
        cantidadUb: null,
        unidadBase: null,
        unidadMedida: null
      };
    }
  }
  eliminarUnidad(unidad) {
    this.unidadesPrevias = this.unidadesPrevias.filter(component => component.nombre !== unidad.nombre);
  }
  eliminarComponente(componente) {
    this.componentesPrevios = this.componentesPrevios.filter(component => component.id !== componente.id);
    this.selectComponents.push(componente);
  }
  checkUp() {
    if (this.unidadSeleccionada.unidadBase == 'Si') {
      this.unidadSeleccionada.cantidadUb = 1;
      return true;
    }
    return false;
  }
  checkUBase() {
    let aux = false;
    this.unidadesPrevias.forEach(unidad => {
      if (unidad.unidadBase == 'Si') {
        aux = true;
      }
    });
    return aux;
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newProducto.invalid || !this.checkUBase()) {
      console.log(this.newProducto.invalid);
      this.loading = false;
      this.messageService.error('Verifique los campos');
      return;
    }
    this.codigoEan.enable();
    let productoToSend = this.newProducto.value;
    if (this.componentesPrevios.length > 0) {
      productoToSend.componentes = this.componentesPrevios;
    } else productoToSend.componentes = null;
    productoToSend.codigoEan = this.barcode.toString();
    productoToSend.unidadesMedidas = this.unidadesPrevias;
    this.reqCreateProducto(productoToSend);
  }
  navigarAlScanner() {
    this.router.navigateByUrl(`almacen/scanner`);
  }
  // llamadas al back -----------------------------------------------------------------------------
  // carga los componentes del select de componentes
  cargarProductosComponentes() {
    this.subs.push(this.productoService.getProductos().subscribe(response => {
      this.selectComponents = response;
      this.selectComponents = this.selectComponents.filter(component => {
        return !this.componentesPrevios.includes(component);
      });
    }, error => {
      console.error(error);
      this.messageService.error(error.error.detail);
    }));
  }
  // cargo los tipos de productos del select homonimo
  cargarTiposProductos() {
    this.subs.push(this.enumService.getEnum('tipo_producto').subscribe({
      next: res => this.tiposProductos = res,
      error: error => this.messageService.error(error.error.detail)
    }));
  }
  reqCreateProducto(productoToSend) {
    this.subs.push(this.productoService.createProducto(productoToSend).subscribe(response => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Exito!',
        detail: 'Producto creado con exito!'
      });
      console.log(response);
      this.router.navigateByUrl('almacen/scanner');
    }, error => {
      console.error(error);
      this.loading = false;
      this.messageService.error(error.error.detail);
      return;
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = CrearProductoComponent;
_class.ɵfac = function CrearProductoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-crear-producto"]],
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "nombre", 1, "w-full"], ["autocomplete", "nope", "id", "nombre", "type", "text", "pInputText", "", "placeholder", "Ingrese el nombre", "formControlName", "nombre", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "field", "pl-0", "pt-0", "pb-0", "md:col-12"], ["for", "descripcion", 1, "w-full"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la Descripcion Interna", "formControlName", "descripcionInterna", 3, "ngClass"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la Descripcion Factura", "formControlName", "descripcionFactura", 3, "ngClass"], ["formControlName", "compuestoSn", "placeholder", "Si o No", "optionValue", "value", "optionLabel", "label", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12", 4, "ngIf"], ["placeholder", "Seleccione una Unidad", 3, "options", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["class", "col-12 pr-0 pl-0 pb-0 flex", 4, "ngIf"], ["class", "col-12 pr-0 pl-0 flex", 4, "ngIf"], [4, "ngIf"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["autocomplete", "nope", "id", "pvp", "type", "number", "pInputText", "", "placeholder", "Ingrese el pvp", "formControlName", "pvp", 3, "ngClass"], ["autocomplete", "nope", "id", "iva", "type", "number", "pInputText", "", "placeholder", "Ingrese el iva", "formControlName", "iva", 3, "ngClass"], [1, "flex", "flex-row"], ["formControlName", "tipoProducto", "placeholder", "Selecciona", 1, "w-full", 3, "options"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "p-error"], ["placeholder", "Seleccione un componente", "optionLabel", "nombre", 3, "options", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover", 4, "ngIf"], [1, "col-12", "pr-0", "pl-0", "flex"], ["type", "number", "pInputText", "", "placeholder", "Cantidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pButton", "", "pRipple", "", "label", "Agregar", "icon", "pi pi-check", 1, "p-button-primary", "ml-2", 3, "disabled", "click"], ["pSortableColumn", "cantidad"], ["field", "cantidad"], ["pSortableColumn", "nombre"], ["field", "nombre"], [2, "min-width", "10rem"], [1, "p-column-title"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "col-12", "pr-0", "pl-0", "pb-0", "flex"], ["placeholder", "Unidad Base", 1, "mr-2", 3, "options", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "number", "pInputText", "", "placeholder", "Cantidad Unica Base", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Nombre de la unidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"]],
  template: function CrearProductoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CrearProductoComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoComponent_div_1_Template, 59, 36, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8909:
/*!*************************************************************!*\
  !*** ./src/app/layout/almacen/escaner/escaner.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EscanerComponent: () => (/* binding */ EscanerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mercancia.service */ 7098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autofocus */ 4194);
var _class;











function EscanerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EscanerComponent_div_1_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El Codigo no puede tener mas de 13 numeros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EscanerComponent_div_1_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El Codigo solo puede tener numeros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function EscanerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nuevo Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Ingrese el codigo de barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EscanerComponent_div_1_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.codigoEan = $event);
    })("input", function EscanerComponent_div_1_Template_input_input_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.espera($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EscanerComponent_div_1_small_12_Template, 2, 0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EscanerComponent_div_1_small_13_Template, 2, 0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EscanerComponent_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.buscar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.codigoEan)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r1.codeInputLength > 13 || !ctx_r1.soloNumeros))("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.codeInputLength > 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.soloNumeros && ctx_r1.codeInputLength > 0);
  }
}
class EscanerComponent {
  constructor() {
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__.MercanciaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.scannerActivo = false;
    this.codigoEan = '';
    this.hadSubmit = false;
    this.loading = false;
    this.timeout = null;
    this.codeInputLength = 0;
  }
  // allowedFormats = [
  //   BarcodeFormat.EAN_13,
  //   BarcodeFormat.EAN_8,
  //   BarcodeFormat.CODE_128,
  //   BarcodeFormat.UPC_A,
  //   BarcodeFormat.UPC_E,
  //   BarcodeFormat.UPC_EAN_EXTENSION,
  // ];
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  buscar() {
    console.log(this.codigoEan);
    this.getCodigo(this.codigoEan);
  }
  // navigateToAnadirMercancia(codigoEan, idMercancia, cantidad = 0) {
  //   this.router.navigateByUrl(
  //     `/anadir-mercancia/${codigoEan}/${idMercancia}/${cantidad}`
  //   );
  // }
  espera(event) {
    this.codeInputLength = event.target.value.length;
    const regex = /^[0-9]*$/;
    this.soloNumeros = regex.test(event.target.value);
    if (event.target.value.length === 13 && this.soloNumeros) {
      this.buscar();
    }
  }
  navigateToNuevoProducto(codigoEan) {
    this.router.navigateByUrl(`almacen/nuevo-producto/${codigoEan}`);
  }
  getCodigo(codigoEan) {
    this.hadSubmit = true;
    if (codigoEan === '') {
      return;
    }
    // 1234567891011 codigo correcto para purebas
    // barcode = 1234567891011234; //codigo incorrecto para pruebas
    this.loading = true;
    // console.log(codigoEan);
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Codigo Obtenido',
    //   detail: '',
    // });
    this.mercanciaService.getMercanciaFromBarcode(codigoEan).subscribe(response => {
      console.log(response);
      // this.disableScanner();
      this.loading = false;
      this.messageService.alert('Ese codigo ya esta registrado, intente con otro');
      // this.navigateToAnadirMercancia(codigoEan, response.id, response.stock);
    }, error => {
      if (error.status == 404 && error.error.detail == 'Codigo de Barras no encontrado') {
        // this.disableScanner();
        this.navigateToNuevoProducto(codigoEan);
        this.loading = false;
      } else {
        console.error(error);
        this.loading = false;
        this.messageService.error('Error al verificar el codigo producto');
        return;
      }
    });
  }
}
_class = EscanerComponent;
_class.ɵfac = function EscanerComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-escaner"]],
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "col-12", "l-0", "pt-0", "align-items-center", 2, "text-align", "center"], [1, "l-0", "pt-0", "col-12", "md:col-6", 2, "margin", "0 auto"], ["pInputText", "", "placeholder", "Ingrese el codigo de barras", "autocomplete", "nope", "pAutoFocus", "", 3, "ngModel", "ngClass", "autofocus", "ngModelChange", "input"], ["class", "p-error", 4, "ngIf"], ["pButton", "", "pRipple", "", "label", "Registrar", "icon", "pi pi-search", 1, "p-button-primary", "w-10rem", 2, "margin", "0 auto", 3, "click"], [1, "p-error"]],
  template: function EscanerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EscanerComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EscanerComponent_div_1_Template, 15, 7, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__.AutoFocus],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8555:
/*!***************************************************************************!*\
  !*** ./src/app/layout/almacen/ingresar-stock/ingresar-stock.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngresarStockComponent: () => (/* binding */ IngresarStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/producto.service */ 5466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mercancia.service */ 7098);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 9156);
/* harmony import */ var src_app_services_almacenes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/almacenes.service */ 5498);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
var _class;
















const _c0 = ["precioI"];
const _c1 = ["stock"];
const _c2 = ["mercancia"];
const _c3 = ["ubicacion"];
function IngresarStockComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor minimo es 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Esta ubicacion no esta registrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor minimo es 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c4 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function IngresarStockComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ingresar Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 8)(7, "div", 9)(8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Codigo de barras del Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function IngresarStockComponent_div_1_Template_input_input_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.validarCodigo($event));
    })("keyup.enter", function IngresarStockComponent_div_1_Template_input_keyup_enter_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.precioInput.nativeElement.focus());
    })("blur", function IngresarStockComponent_div_1_Template_input_blur_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.crearNuevoProducto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function IngresarStockComponent_div_1_Template_input_keyup_enter_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.focusUbicacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, IngresarStockComponent_div_1_small_16_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, IngresarStockComponent_div_1_small_17_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function IngresarStockComponent_div_1_Template_input_blur_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.validarUbicacion($event));
    })("keyup.enter", function IngresarStockComponent_div_1_Template_input_keyup_enter_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.focusStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, IngresarStockComponent_div_1_small_22_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, IngresarStockComponent_div_1_small_23_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9)(25, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function IngresarStockComponent_div_1_Template_input_keyup_enter_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, IngresarStockComponent_div_1_small_28_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, IngresarStockComponent_div_1_small_29_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20)(31, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function IngresarStockComponent_div_1_Template_p_button_onClick_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IngresarStockComponent_div_1_Template_p_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.newStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c4, ctx_r1.hadSubmit && ctx_r1.precio.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.precio.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.precio.value < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c4, ctx_r1.hadSubmit && (ctx_r1.ubicacion.invalid || !ctx_r1.ubicacionValida)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.ubicacion.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ubicacionValida !== null && !ctx_r1.ubicacionValida && ctx_r1.ubicacion.value !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c4, ctx_r1.hadSubmit && ctx_r1.validar("stock")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.stock.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.stock.value < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.newStock.invalid);
  }
}
const _c5 = function () {
  return {
    width: "350px"
  };
};
class IngresarStockComponent {
  constructor(el) {
    this.el = el;
    this.productoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService);
    this.almacenesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_almacenes_service__WEBPACK_IMPORTED_MODULE_4__.AlmacenesService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__.MercanciaService);
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router);
    this.filteredProductos = [];
    this.mercancias = [];
    this.ubicaciones = [];
    this.filteredUbicaciones = [];
    this.filteredMercancias = [];
    this.codeInputLength = 0;
    this.codigoValido = false;
    this.codigoEanValido = false;
    this.ubicacionValida = null;
    this.ubicacionFocus = false;
    this.almacenValida = false;
    this.almacenFocus = false;
    this.mercanciaValida = false;
    this.mercanciaFocus = false;
    this.loading = false;
    this.newStock = this.Form.group({
      codigoEan: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')]],
      almacen: [null],
      mercancia: [null],
      precio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)]],
      stock: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)]],
      ubicacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.hadSubmit = false;
  }
  ngOnInit() {
    this.productoService.getProductos().subscribe({
      next: resp => {
        console.log(resp);
        this.listProductos = resp;
        this.filteredProductos = resp;
        this.cargarUbicaciones();
      }
    });
  }
  // form getters ----------------------------------------------------------------------------------
  get codigoEan() {
    return this.newStock.get('codigoEan');
  }
  get almacen() {
    return this.newStock.get('almacen');
  }
  get mercancia() {
    return this.newStock.get('mercancia');
  }
  get precio() {
    return this.newStock.get('precio');
  }
  get stock() {
    return this.newStock.get('stock');
  }
  get ubicacion() {
    return this.newStock.get('ubicacion');
  }
  get formValue() {
    return this.newStock.value;
  }
  // end form getter --------------------------------------------------------------------------------
  back() {
    this.router.navigateByUrl('/almacen');
  }
  validar(campo) {
    if (campo === 'stock' || campo === 'precio') {
      if (this.newStock.get(campo)?.value > 0) {
        return this.newStock.get(campo)?.invalid;
      } else {
        return true;
      }
    }
    return this.newStock.get(campo)?.invalid;
  }
  cargarUbicaciones() {
    this.ubicacionesService.getUbicaciones().subscribe({
      next: res => {
        console.log(res);
        this.ubicaciones = res;
        // this.focusUbicacion();
      },

      error: error => {
        console.error(error);
        this.messageService.error('Hubo un error al cargar las ubicaciones');
      }
    });
  }
  cargarMercancias(idProducto) {
    this.mercanciaService.getMercanciasByProducto(idProducto).subscribe({
      next: res => {
        console.log(res);
        this.mercancias = res;
        this.focusMercancia();
      },
      error: error => {
        console.error(error);
        this.messageService.error('Hubo un error al cargar las mercancias de ese producto');
      }
    });
  }
  crearNuevoProducto() {
    // if (this.codigoEanValido && !this.codigoValido) {
    if (!this.codigoValido && this.codeInputLength > 0) {
      this.confirmationService.confirm({
        key: 'crearNuevoProducto',
        accept: () => {
          this.confirmationService.close();
          sessionStorage.setItem('lastUrl', '/almacen/ingresar-stock');
          this.router.navigateByUrl('/almacen/nuevo-producto/' + this.codigoEan.value);
        },
        reject: () => {
          this.confirmationService.close();
        }
      });
    }
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newStock.invalid) {
      this.loading = false;
      this.messageService.error('Revise los campos');
      return;
    }
    console.log(this.formValue);
    this.mercanciaService.actualizarStock(this.formValue).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito!',
          detail: 'Stock Actualizado con exito!'
        });
        console.log(response);
        this.hadSubmit = false;
        this.loading = false;
        this.newStock.reset();
      },
      error: error => {
        console.error(error);
        this.loading = false;
        this.messageService.error(error.error.detail);
        return;
      }
    });
    console.log('enviado');
  }
  focusStock() {
    setTimeout(() => {
      document.getElementById('stock').focus();
      //@ts-ignore
      document.getElementById('stock').value = null;
    }, 100);
  }
  focusUbicacion() {
    setTimeout(() => {
      document.getElementById('ubicacion').focus();
      //@ts-ignore
      document.getElementById('ubicacion').value = null;
    }, 100);
  }
  focusAlmacen() {
    setTimeout(() => {
      document.getElementById('almacen').focus();
    }, 100);
  }
  focusMercancia() {
    setTimeout(() => {
      document.getElementById('mercancia').focus();
      //@ts-ignore
      document.getElementById('mercancia').value = null;
    }, 100);
  }
  validarUbicacion(event) {
    setTimeout(() => {
      this.ubicacion.setValue(event.target.value);
      let ubicacionSeleccionada = this.ubicaciones.find(ubi => ubi.ubicacionId == this.ubicacion.value);
      if (ubicacionSeleccionada !== undefined) {
        this.ubicacionValida = true;
        // setTimeout(() => {
        //   console.log(this.stockInput.nativeElement);
        //   this.stockInput.nativeElement.focus();
        // }, 100);
      } else {
        this.ubicacionValida = false;
        ubicacionSeleccionada = null;
      }
    }, 100);
  }
  validarMercancia(newMercancia) {
    setTimeout(() => {
      this.mercancia.setValue(newMercancia);
      let mercanciaSeleccionada = this.mercancias.find(mercancia => mercancia.id == this.mercancia.value);
      if (mercanciaSeleccionada !== undefined) {
        this.mercanciaValida = true;
        setTimeout(() => {
          console.log(this.precioInput.nativeElement);
          this.precioInput.nativeElement.focus();
        }, 100);
      } else {
        this.mercanciaValida = false;
        mercanciaSeleccionada = null;
      }
    }, 100);
  }
  validarCodigo(event) {
    this.barcode = event.target.value;
    this.codeInputLength = this.barcode.length;
    const regex = /^[0-9]*$/;
    this.soloNumeros = regex.test(this.barcode);
    let productoSeleccionado = this.listProductos.find(producto => producto.codigoEan == this.barcode);
    if (this.codeInputLength === 13 && this.soloNumeros) {
      this.codigoEanValido = true;
    } else {
      this.codigoEanValido = false;
    }
    if (productoSeleccionado !== undefined) {
      this.codigoValido = true;
      this.idProducto = productoSeleccionado.id;
      // setTimeout(() => {
      //   console.log(this.precioInput.nativeElement);
      //   this.precioInput.nativeElement.focus();
      // }, 100);
    } else {
      this.codigoValido = false;
      productoSeleccionado = null;
    }
  }
}
_class = IngresarStockComponent;
_class.ɵfac = function IngresarStockComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-ingresar-stock"]],
  viewQuery: function IngresarStockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.precioInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stockInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mercanciaInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ubicacionInput = _t.first);
    }
  },
  decls: 3,
  vars: 5,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["header", "Confirmacion", "key", "crearNuevoProducto", "icon", "pi pi-exclamation-triangle", "message", "Parece que el codigo de barras introducido no pertenece a ningun producto registrado. \n  Desea registrarlo?", "acceptLabel", "Crear Producto Nuevo", "rejectLabel", "Cancelar", "acceptButtonStyleClass", "p-button-text p-button-primary", "rejectButtonStyleClass", "p-button-text p-button-secondary"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "codigoEan", 1, "w-full"], ["autofocus", "", "type", "text", "formControlName", "codigoEan", "placeholder", "Codigo de Barras del producto", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "input", "keyup.enter", "blur"], ["for", "precio", 1, "w-full"], ["autocomplete", "nope", "type", "number", "placeholder", "Ingrese el precio", "pInputText", "", "formControlName", "precio", 3, "ngClass", "keyup.enter"], ["precioI", ""], ["class", "p-error", 4, "ngIf"], ["for", "ubicacion", 1, "w-full"], ["id", "ubicacion", "type", "text", "formControlName", "ubicacion", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngClass", "blur", "keyup.enter"], ["for", "stock", 1, "w-full"], ["inputId", "stock", "autocomplete", "nope", "id", "stock", "type", "number", "pInputText", "", "placeholder", "Ingrese el stock", "formControlName", "stock", 3, "ngClass", "keyup.enter"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "disabled", "click"], [1, "p-error"]],
  template: function IngresarStockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, IngresarStockComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, IngresarStockComponent_div_1_Template, 33, 17, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-confirmDialog", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c5));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9206:
/*!************************************************!*\
  !*** ./src/app/layout/app.layout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutComponent: () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/topbar/app.topbar.component */ 7905);
/* harmony import */ var _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/sidebar/app.sidebar.component */ 1554);
/* harmony import */ var _services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-message.service */ 8062);
/* harmony import */ var _services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/usuario.service */ 1063);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/app.layout.service */ 3859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var _config_app_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/app.config.component */ 1111);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/app.footer.component */ 6877);
var _class;
















function AppLayoutComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return ["/auth/login"];
};
function AppLayoutComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6)(2, "h4", 7)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Parece que no haz iniciado tu jornada laboral!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 8)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Inicia tu jornada en la barra superior para poder empezar a trabajar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppLayoutComponent_ng_container_5_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.iniciarJornada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 10)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "O puedes salir de la aplicacion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 13)(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", "Iniciar jornada");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
  }
}
const _c1 = function (a0) {
  return {
    grid: a0
  };
};
class AppLayoutComponent {
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.jornadaIniciada = false;
    this.subs = [];
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__.CustomMessageService);
    this.usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService);
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.subs.push(this.usuarioService.comprobarTimeUsuario(this.usuario.id).subscribe({
      next: response => {
        console.log(response);
        this.jornadaIniciada = response.jornadaIniciada;
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
    console.log();
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
    };
  }
  // --------------------------------------------------------------
  iniciarJornada() {
    this.subs.push(this.usuarioService.iniciarTimeUsuario(this.usuario.id).subscribe({
      next: response => {
        console.log(response);
        this.jornadaIniciada = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'La jornada a sido iniciada'
        });
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = AppLayoutComponent;
_class.ɵfac = function AppLayoutComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_4__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-layout"]],
  viewQuery: function AppLayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.AppSidebarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.AppTopBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
    }
  },
  decls: 9,
  vars: 7,
  consts: [[1, "layout-wrapper", 3, "ngClass"], [3, "jornadaIniciada", "estadotjornadaIniciada"], [1, "layout-main-container", "ml-0"], [1, "layout-main", 3, "ngClass"], [4, "ngIf"], [1, "layout-mask"], [1, "col-12", "flex", "justify-content-center", "align-items-center", "flex-column", 2, "padding-top", "25vh"], [1, "text-gray-500", "text-center"], [1, "text-xl", "text-gray-500", "text-center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-play", 1, "p-button-rounded", "p-button-success", "my-3", 3, "label", "click"], [1, "text-lg", "text-gray-500", "mt-3", "text-center"], [1, "col-12", "flex", "justify-content-center", "align-items-center", "flex-column", "pt-0", 2, "padding-bottom", "30vh", 3, "routerLink"], [1, "pi", "pi-external-link", "text-gray-500", "text-6xl", "boton-transparente"], [1, "text-xl", "text-gray-500"]],
  template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("estadotjornadaIniciada", function AppLayoutComponent_Template_app_topbar_estadotjornadaIniciada_1_listener($event) {
        return ctx.jornadaIniciada = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AppLayoutComponent_ng_container_4_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AppLayoutComponent_ng_container_5_Template, 17, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-config")(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.containerClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("jornadaIniciada", ctx.jornadaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, !ctx.jornadaIniciada));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.jornadaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.jornadaIniciada);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _config_app_config_component__WEBPACK_IMPORTED_MODULE_5__.AppConfigComponent, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.AppTopBarComponent, _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__.AppFooterComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4295:
/*!*********************************************!*\
  !*** ./src/app/layout/app.layout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutModule: () => (/* binding */ AppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/badge */ 7650);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputswitch */ 1763);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/topbar/app.topbar.component */ 7905);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config.module */ 2913);
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.layout.component */ 9206);
/* harmony import */ var _shared_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/menu/app.menu.component */ 75);
/* harmony import */ var _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/app.footer.component */ 6877);
/* harmony import */ var _shared_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/menu/app.menuitem.component */ 36);
/* harmony import */ var _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/sidebar/app.sidebar.component */ 1554);
/* harmony import */ var _ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordenes-trabajo/ordenes-trabajo.component */ 3776);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea.component */ 4388);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var _gastos_gastos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gastos/gastos.component */ 7954);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _pdv_pdv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pdv/pdv.component */ 2668);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component */ 986);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-tiempo/mostrar-tarea-tiempo.component */ 4507);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-documentacion/mostrar-tarea-documentacion.component */ 4572);
/* harmony import */ var _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component */ 742);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-movimiento/mostrar-tarea-movimiento.component */ 2068);
/* harmony import */ var _ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component */ 4746);
/* harmony import */ var _almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./almacen/ingresar-stock/ingresar-stock.component */ 8555);
/* harmony import */ var _almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./almacen/crear-producto/crear-producto.component */ 5524);
/* harmony import */ var _almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./almacen/crear-producto-propio/crear-producto-propio.component */ 3678);
/* harmony import */ var _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./almacen/almacen.component */ 555);
/* harmony import */ var _almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./almacen/escaner/escaner.component */ 8909);
/* harmony import */ var _factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./factura-reader/factura-reader.component */ 938);
/* harmony import */ var _confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./confirmar-orden-compra/confirmar-orden-compra.component */ 8416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;











































class AppLayoutModule {}
_class = AppLayoutModule;
_class.ɵfac = function AppLayoutModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_31__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_32__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_35__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_1__.AppConfigModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_37__.PanelMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_38__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_39__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_42__.FileUploadModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__.PrimeNgModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppLayoutModule, {
    declarations: [_shared_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_5__.AppMenuitemComponent, _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.AppTopBarComponent, _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _shared_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_3__.AppMenuComponent, _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.AppSidebarComponent, _app_layout_component__WEBPACK_IMPORTED_MODULE_2__.AppLayoutComponent, _ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_7__.OrdenesTrabajoComponent, _mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_8__.MostrarTareaComponent, _gastos_gastos_component__WEBPACK_IMPORTED_MODULE_9__.GastosComponent, _pdv_pdv_component__WEBPACK_IMPORTED_MODULE_10__.PdvComponent, _mostrar_tarea_mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_11__.MostrarTareaFinalizacionComponent, _mostrar_tarea_mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_12__.MostrarTareaTiempoComponent, _mostrar_tarea_mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_13__.MostrarTareaDocumentacionComponent, _mostrar_tarea_mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_15__.MostrarTareaPreRecComponent, _mostrar_tarea_mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_16__.MostrarTareaMovimientoComponent, _ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_17__.MostrarOrdenTrabajoComponent, _almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_18__.IngresarStockComponent, _almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_19__.CrearProductoComponent, _almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_20__.CrearProductoPropioComponent, _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_21__.AlmacenComponent, _almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_22__.EscanerComponent, _factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_23__.FacturaReaderComponent, _confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_24__.ConfirmarOrdenCompraComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_30__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_31__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_32__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_33__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_35__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_1__.AppConfigModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_37__.PanelMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_38__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_39__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_41__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_42__.FileUploadModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__.PrimeNgModule],
    exports: [_app_layout_component__WEBPACK_IMPORTED_MODULE_2__.AppLayoutComponent]
  });
})();

/***/ }),

/***/ 1111:
/*!*******************************************************!*\
  !*** ./src/app/layout/config/app.config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigComponent: () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 3859);
/* harmony import */ var _shared_menu_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/menu/app.menu.service */ 2089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 1763);
var _class;









const _c0 = function (a0) {
  return {
    "text-primary-500": a0
  };
};
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 44);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, s_r3 === ctx_r0.scale));
  }
}
function AppConfigComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45)(4, "p-radioButton", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 45)(8, "p-radioButton", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.menuMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Overlay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.menuMode);
  }
}
function AppConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Input Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 50)(4, "div", 51)(5, "p-radioButton", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 51)(9, "p-radioButton", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.inputStyle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ripple Effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-inputSwitch", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_inputSwitch_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.ripple = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.ripple);
  }
}
class AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.scales = [12, 13, 14, 15, 16];
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config.scale;
  }
  set scale(_val) {
    this.layoutService.config.scale = _val;
  }
  get menuMode() {
    return this.layoutService.config.menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.menuMode = _val;
  }
  get inputStyle() {
    return this.layoutService.config.inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.inputStyle = _val;
  }
  get ripple() {
    return this.layoutService.config.ripple;
  }
  set ripple(_val) {
    this.layoutService.config.ripple = _val;
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme, colorScheme) {
    const themeLink = document.getElementById('theme-css');
    const newHref = themeLink.getAttribute('href').replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }
  replaceThemeLink(href, onComplete) {
    const id = 'theme-css';
    const themeLink = document.getElementById('theme-css');
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
}
_class = AppConfigComponent;
_class.ɵfac = function AppConfigComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_menu_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-config"]],
  inputs: {
    minimal: "minimal"
  },
  decls: 135,
  vars: 7,
  consts: [["type", "button", 1, "layout-config-button", "p-link", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar w-20rem", 3, "visible", "transitionOptions", "visibleChange"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "disabled", "click"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "disabled", "click"], [4, "ngIf"], [1, "grid"], [1, "col-3"], [1, "p-link", "w-2rem", "h-2rem", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark Deep Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple", 1, "w-2rem", "h-2rem"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], [1, "field-radiobutton"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModel", "ngModelChange"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModel", "ngModelChange"], ["for", "mode2"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModel", "ngModelChange"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModel", "ngModelChange"], ["for", "filled_input"], [3, "ngModel", "ngModelChange"]],
  template: function AppConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_0_listener() {
        return ctx.onConfigButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
        return ctx.visible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Scale");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_6_listener() {
        return ctx.decrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppConfigComponent_i_8_Template, 1, 3, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_9_listener() {
        return ctx.incrementScale();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppConfigComponent_ng_container_10_Template, 11, 2, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppConfigComponent_ng_container_11_Template, 15, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Bootstrap");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_16_listener() {
        return ctx.changeTheme("bootstrap4-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_19_listener() {
        return ctx.changeTheme("bootstrap4-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_22_listener() {
        return ctx.changeTheme("bootstrap4-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_25_listener() {
        return ctx.changeTheme("bootstrap4-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Material Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_31_listener() {
        return ctx.changeTheme("md-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_34_listener() {
        return ctx.changeTheme("md-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10)(37, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_37_listener() {
        return ctx.changeTheme("md-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_40_listener() {
        return ctx.changeTheme("md-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Material Design Compact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_46_listener() {
        return ctx.changeTheme("mdc-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 10)(49, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_49_listener() {
        return ctx.changeTheme("mdc-light-deeppurple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 10)(52, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_52_listener() {
        return ctx.changeTheme("mdc-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10)(55, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_55_listener() {
        return ctx.changeTheme("mdc-dark-deeppurple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Tailwind");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 9)(60, "div", 10)(61, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() {
        return ctx.changeTheme("tailwind-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Fluent UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9)(66, "div", 10)(67, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_67_listener() {
        return ctx.changeTheme("fluent-light", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "PrimeOne Design - 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 9)(72, "div", 10)(73, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() {
        return ctx.changeTheme("lara-light-indigo", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 10)(76, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() {
        return ctx.changeTheme("lara-light-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10)(79, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() {
        return ctx.changeTheme("lara-light-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 10)(82, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_82_listener() {
        return ctx.changeTheme("lara-light-teal", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 10)(85, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() {
        return ctx.changeTheme("lara-dark-indigo", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 10)(88, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_88_listener() {
        return ctx.changeTheme("lara-dark-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 10)(91, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() {
        return ctx.changeTheme("lara-dark-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 10)(94, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_94_listener() {
        return ctx.changeTheme("lara-dark-teal", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "PrimeOne Design - 2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 9)(99, "div", 10)(100, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() {
        return ctx.changeTheme("saga-blue", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 10)(103, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() {
        return ctx.changeTheme("saga-green", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 10)(106, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() {
        return ctx.changeTheme("saga-orange", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 10)(109, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() {
        return ctx.changeTheme("saga-purple", "light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 10)(112, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() {
        return ctx.changeTheme("vela-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 10)(115, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() {
        return ctx.changeTheme("vela-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 10)(118, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() {
        return ctx.changeTheme("vela-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 10)(121, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_121_listener() {
        return ctx.changeTheme("vela-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 10)(124, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_124_listener() {
        return ctx.changeTheme("arya-blue", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 10)(127, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_127_listener() {
        return ctx.changeTheme("arya-green", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 10)(130, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_130_listener() {
        return ctx.changeTheme("arya-orange", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 10)(133, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_133_listener() {
        return ctx.changeTheme("arya-purple", "dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.visible)("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.scales);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitch],
  encapsulation: 2
});

/***/ }),

/***/ 2913:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigModule: () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 1763);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 1111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








class AppConfigModule {}
_class = AppConfigModule;
_class.ɵfac = function AppConfigModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppConfigModule, {
    declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule],
    exports: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent]
  });
})();

/***/ }),

/***/ 8416:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/confirmar-orden-compra/confirmar-orden-compra.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmarOrdenCompraComponent: () => (/* binding */ ConfirmarOrdenCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/ordenes.service */ 8862);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 9156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 4553);
var _class;












function ConfirmarOrdenCompraComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
class ConfirmarOrdenCompraComponent {
  constructor() {
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_2__.UbicacionesService);
    this.ordenesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_1__.OrdenesService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.subs = [];
    this.productoSeleccionado = null;
    this.hadSubmit = false;
    this.solicitarCantidadRQ = this.Form.group({
      ubicacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ordenCompra: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      codigoEan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.cargarUbicaciones();
    this.cargarOrdenesCompras();
  }
  back() {
    this.router.navigateByUrl('/almacen');
  }
  validar(campo) {
    return this.solicitarCantidadRQ.get(campo).valid;
  }
  cargarUbicaciones() {
    this.subs.push(this.ubicacionesService.getUbicaciones().subscribe({
      next: res => {
        console.log('UBICACIONES => ', res);
        this.ubicaciones = res;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.datail);
      }
    }));
  }
  cargarOrdenesCompras() {
    this.subs.push(this.ordenesService.getOrdenesCompras().subscribe({
      next: res => {
        console.log('ORDENES DE COMPRAS => ', res);
        this.ordenesCompras = res;
        this.ordenesCompras.forEach(orden => {
          //@ts-ignore
          orden.nombre = `orden ${orden.id}`;
        });
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.datail);
      }
    }));
  }
  submit() {
    this.hadSubmit = true;
    if (this.solicitarCantidadRQ.invalid) {
      this.messageService.error('Verifique los campos');
      return;
    }
    const requestJson = {
      ubicacion: this.solicitarCantidadRQ.value.ubicacion,
      ordenCompra: this.solicitarCantidadRQ.value.ordenCompra,
      codigoEan: this.solicitarCantidadRQ.value.codigoEan
    };
    this.buscarCantidadDeOrdenesCompras(requestJson);
  }
  buscarCantidadDeOrdenesCompras(requestJson) {
    this.subs.push(this.ordenesService['getCantidadDeOrdenCompra'](requestJson).subscribe({
      next: res => {
        console.log('CANTIDAD ENCONTRADA => ', res);
        this.messageService.win(res);
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = ConfirmarOrdenCompraComponent;
_class.ɵfac = function ConfirmarOrdenCompraComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-confirmar-orden-compra"]],
  decls: 27,
  vars: 10,
  consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], [1, "flex", "flex-row"], ["formControlName", "ubicacion", "placeholder", "Selecciona", "optionLabel", "ubicacionId", "optionValue", "id", 1, "w-full", 3, "options"], ["class", "pt-2 ml-2", 4, "ngIf"], ["formControlName", "ordenCompra", "filterBy", "nombre", "placeholder", "Selecciona", "optionLabel", "nombre", "optionValue", "id", 1, "w-full", 3, "options", "filter"], ["autocomplete", "nope", "id", "codigoEan", "type", "number", "pInputText", "", "placeholder", "Ingrese el codigoEan", "formControlName", "codigoEan", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "p-error"]],
  template: function ConfirmarOrdenCompraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Confirmar Orden de Compra");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3)(7, "div", 4)(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ubicacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "p-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ConfirmarOrdenCompraComponent_div_12_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Orden de compra");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "p-dropdown", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ConfirmarOrdenCompraComponent_div_18_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4)(20, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Codigo Ean");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ConfirmarOrdenCompraComponent_small_23_Template, 2, 0, "small", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "p-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ConfirmarOrdenCompraComponent_Template_p_button_onClick_25_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmarOrdenCompraComponent_Template_p_button_click_26_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.solicitarCantidadRQ);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.ubicaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ubicaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.ordenesCompras)("filter", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ordenesCompras);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.hadSubmit && !ctx.validar("codigoEan")));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hadSubmit && !ctx.validar("codigoEan"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 938:
/*!*******************************************************************!*\
  !*** ./src/app/layout/factura-reader/factura-reader.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacturaReaderComponent: () => (/* binding */ FacturaReaderComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tesseract.js */ 8433);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 6192);

var _class;












function FacturaReaderComponent_ng_template_6_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-fileUpload", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelect", function FacturaReaderComponent_ng_template_6_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onSelectImg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showUploadButton", false);
  }
}
function FacturaReaderComponent_ng_template_6_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FacturaReaderComponent_ng_template_6_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FacturaReaderComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FacturaReaderComponent_ng_template_6_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FacturaReaderComponent_ng_template_6_p_button_2_Template, 1, 0, "p-button", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.imagenSubida);
  }
}
function FacturaReaderComponent_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FacturaReaderComponent_p_button_10_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.subirImagen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FacturaReaderComponent_label_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 16)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Imagenes guardadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_div_13_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_div_13_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const registroFactura_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r17.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r17.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r17.precio, " \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r17.importe, " \u20AC ");
  }
}
function FacturaReaderComponent_div_13_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_div_13_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const linea_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", linea_r18.text, " ");
  }
}
function FacturaReaderComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FacturaReaderComponent_div_13_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const imagen_r12 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.borrarImagen(imagen_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20)(4, "h6")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "CIF de la factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "N de la factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FacturaReaderComponent_div_13_ng_template_13_Template, 9, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FacturaReaderComponent_div_13_ng_template_14_Template, 9, 4, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 20)(18, "h6")(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "TEXTO DETECTADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, FacturaReaderComponent_div_13_ng_template_22_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FacturaReaderComponent_div_13_ng_template_23_Template, 3, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const imagen_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.cif, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.nFactura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", imagen_r12.tabla);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", imagen_r12.imagen || "https://source.unsplash.com/random", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.textDeLaImagen.data.lines);
  }
}
class FacturaReaderComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    // @Input() tarea: LineaTarea;
    this.subcripciones = [];
    this.idTarea = -1;
    this.estadoTareaIniciada = null;
    this.imagenes = [];
    this.tabla = [];
    this.nFactura = null;
    this.cif = null;
    this.textDeLaImagen = null;
  }
  ngOnInit() {
    // this.activatedRoute.params.subscribe({
    //   next: params => this.tareaID = params['id']
    // })
    // this.subcripciones.push(
    //   this.tareaService.getImagenesLineaTarea(this.tareaID).subscribe({
    //     next: (response) => {
    //       // console.log(response);
    //       this.imagenes = response;
    //     },
    //     error: (error) => {
    //       console.log(error);
    //       this.messageService.error(error.error.detail);
    //     },
    //   }),
    // );
    // this.verParecido()
    console.log('oninit');
  }
  // dinamica de la imagen -----------------------------------------------------------------------
  onSelectImg(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event['currentFiles'][0]);
    fileReader.onload = () => {
      this.imagenSubida = fileReader.result;
    };
  }
  onRemoveImg() {
    this.imagenSubida = null;
  }
  subirImagen() {
    var _this = this;
    return (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.textDeLaImagen = yield (0,tesseract_js__WEBPACK_IMPORTED_MODULE_3__.recognize)(_this.imagenSubida, 'spa', {
        logger: loadingTextProgress => {
          // console.log('loadingTextProgress => ', loadingTextProgress);
        }
      });
      // ver las lineas en la consola
      console.log(_this.textDeLaImagen.data.lines);
      // buscando cif
      _this.cif = _this.buscarCifFactura(_this.textDeLaImagen);
      _this.cif = _this.cif ? _this.cif.data : 'not Found';
      // buscando numero de factura
      _this.nFactura = _this.buscarNFactura(_this.textDeLaImagen);
      _this.nFactura = _this.nFactura ? _this.nFactura : 'not Found';
      let j = 1;
      let cabeceraIndex = _this.buscarCabeceraFactura(_this.textDeLaImagen);
      if (cabeceraIndex != null) {
        let subtotalIndex = _this.buscarSubtotalFactura(_this.textDeLaImagen);
        for (let i = cabeceraIndex + 1; i < subtotalIndex; i++) {
          let linea = _this.textDeLaImagen.data.lines[i];
          let palabras = [].concat(linea.words);
          let palabrasLenght = palabras.length;
          // console.log(`ejecuto la linea ${i}`);
          if (palabrasLenght >= 3) {
            let descripcion = '';
            // for (let k = 1; k < palabrasLenght - 2; k++) {
            //   descripcion = descripcion + palabras[k].text + ' ';
            // }
            let cantidadDeLaLinea = null;
            let laPalabraDeCantidad = null;
            let buscandoCantidad = true;
            palabras.forEach(palabra => {
              if (buscandoCantidad && _this.contieneNumeros(palabra.text)) {
                buscandoCantidad = false;
                cantidadDeLaLinea = palabra.text;
                laPalabraDeCantidad = palabra;
              }
            });
            palabras = palabras.filter(palabra => palabra != laPalabraDeCantidad);
            palabrasLenght = palabras.length;
            let importeDeLaLinea = null;
            let laPalabraDeImporte = null;
            let buscandoImporte = true;
            console.log(palabras);
            for (let i = palabrasLenght - 1; i > 0; i -= 1) {
              // console.log('iteracion ', i);
              const palabra = palabras[i];
              // console.log(palabra);
              if (buscandoImporte && _this.contieneNumeros(palabra.text)) {
                buscandoImporte = false;
                importeDeLaLinea = palabra.text;
                laPalabraDeImporte = palabra;
              }
            }
            palabras = palabras.filter(palabra => palabra != laPalabraDeImporte);
            palabras.forEach(palabra => {
              descripcion += palabra.text + ' ';
            });
            console.log(palabras);
            let registro = {
              id: j,
              cantidad: cantidadDeLaLinea,
              importe: importeDeLaLinea,
              precio: null,
              descripcion: descripcion
            };
            registro.precio = registro.importe / registro.cantidad;
            _this.tabla.push(registro);
          }
          j++;
        }
      }
      console.log('la tabla => ', _this.tabla);
      const imagenToSave = {
        id: Math.floor(Math.random() * 100),
        imagen: '' + _this.imagenSubida,
        texto: _this.textDeLaImagen.data.text,
        tabla: JSON.parse(JSON.stringify(_this.tabla))
      };
      _this.tabla = [];
      if (_this.imagenes.length > 0) _this.imagenes.pop();
      _this.imagenes.push(imagenToSave);
      _this.imagenSubida = null;
    })();
  }
  borrarImagen(id) {
    this.imagenes = this.imagenes.filter(imagen => imagen.id !== id);
  }
  // ---------------------------------------------------------------------
  editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) costs[j] = j;else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
  similitud(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
      return 1.0;
    }
    return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
  }
  buscarLineaNfactura(textDeLaImagen) {
    const nFacturaKeys = ['n"', 'n*', 'num', 'numero', 'codigo'];
    // const postNFacturaKeys = ['de', 'factura'];
    let porcentajeRecord = 50;
    let indiceRecord = 0;
    // let refuerzo = 0;
    // let refuerzoRecord = 0;
    let palabraRecord = '';
    let i = 0;
    textDeLaImagen.data.lines.forEach(linea => {
      linea.words.forEach(palabraDeLaLinea => {
        nFacturaKeys.forEach(palabraDeLaFactura => {
          let candidato = false;
          let porcentajeDeLaPalabra = this.similitud(palabraDeLaLinea.text, palabraDeLaFactura) * 100;
          // console.log('itero mas');
          if (porcentajeDeLaPalabra > porcentajeRecord) {
            porcentajeRecord = porcentajeDeLaPalabra;
            palabraRecord = palabraDeLaLinea.text;
            indiceRecord = i;
            console.log(`encontre un candito de ${palabraDeLaFactura} => ${palabraRecord}`);
            // candidato = true;
          }
          // if (candidato) {
          //   refuerzo = 0;
          //   postNFacturaKeys.forEach((postNFacturaKey) => {
          //     if (this.similitud(postNFacturaKey, palabraDeLaLinea)) {
          //       refuerzo++;
          //     }
          //     if (this.contieneNumeros(palabraDeLaLinea)) {
          //       refuerzo++
          //     }
          //   });
          // }
        });
      });

      i++;
    });
    return {
      lineaSelected: textDeLaImagen.data.lines[indiceRecord],
      palabraRecord: palabraRecord
    };
  }
  buscarNFactura(textDeLaImagen) {
    const busquedaLinea = this.buscarLineaNfactura(textDeLaImagen);
    const lineaSelected = busquedaLinea.lineaSelected;
    const palabras = lineaSelected.words;
    const lineaLenght = palabras.length;
    const palabraRecord = busquedaLinea.palabraRecord;
    let palabraEncontrada = false;
    let numeroDeLaFactura = null;
    for (let i = 0; i < lineaLenght; i += 1) {
      console.log(`estoy buscando ${palabraRecord} en ${palabras[i].text}`);
      if (!palabraEncontrada) {
        if (palabras[i].text == palabraRecord) {
          palabraEncontrada = true;
        }
      } else {
        if (this.contieneNumeros(palabras[i].text)) {
          numeroDeLaFactura = palabras[i].text;
          console.log('la linea con el numero de la factura  (' + numeroDeLaFactura + ') => ', lineaSelected);
        }
      }
    }
    return numeroDeLaFactura;
  }
  contieneNumeros(text) {
    let i = 0;
    let salida = text.includes(i.toString());
    while (!salida && i <= 9) {
      i++;
      salida = text.includes(i.toString());
    }
    return salida;
  }
  buscarCabeceraFactura(textDeLaImagen) {
    const cabeceraKeys = ['cant', 'can', 'cantidad', 'unidades', 'descripcion', 'producto', 'nombre', 'titulo', 'precio', 'unitario', 'valor', 'tarifa', 'precio', 'total', 'imp', 'importe'];
    let record = 0;
    let indiceRecord = 0;
    let i = 0;
    textDeLaImagen.data.lines.forEach(linea => {
      let contCabecera = 0;
      linea.words.forEach(palabraDeLaLinea => {
        cabeceraKeys.forEach(palabraDeLaCabecera => {
          if (this.similitud(palabraDeLaLinea.text, palabraDeLaCabecera) * 100 > 50) {
            contCabecera++;
          }
        });
      });
      if (contCabecera >= 2) {
        record = contCabecera;
        indiceRecord = i;
        return indiceRecord;
      }
      return null;
      i++;
    });
    // console.log(
    //   'la cabecera con un record de (' + record + ') => ',
    //   textDeLaImagen.data.lines[indiceRecord],
    // );
    // return indiceRecord;
  }

  buscarSubtotalFactura(textDeLaImagen) {
    let porcentajeRecord = 50;
    let indiceSubtotal = 0;
    let i = 0;
    textDeLaImagen.data.lines.forEach(linea => {
      linea.words.forEach(palabraDeLaLinea => {
        const porcentajeDeLaPalabra = this.similitud(palabraDeLaLinea.text, 'subtotal') * 100;
        if (porcentajeDeLaPalabra > porcentajeRecord) {
          indiceSubtotal = i;
          porcentajeRecord = porcentajeDeLaPalabra;
        }
      });
      i++;
    });
    console.log('el sub total esta en la linea (' + indiceSubtotal + ') con un ' + porcentajeRecord + '% => ', textDeLaImagen.data.lines[indiceSubtotal]);
    return indiceSubtotal;
  }
  buscarCifFactura(textDeLaImagen) {
    let porcentajeRecord = 50;
    let indiceCif = null;
    const cifRegex = /^[a-zA-Z][0-9]{8}$/;
    const cifRegex2 = /^[a-zA-Z]-[0-9]{8}$/;
    let i = 0; // determina la linea
    textDeLaImagen.data.lines.forEach(linea => {
      let j = 0; // determina la palabra
      linea.words.forEach(palabraDeLaLinea => {
        if (cifRegex.test(palabraDeLaLinea.text) || cifRegex2.test(palabraDeLaLinea.text)) {
          indiceCif = {
            linea: i,
            palabra: j,
            data: textDeLaImagen.data.lines[i].words[j].text
          };
          console.log('El CIF es => ', indiceCif.data);
          console.log('El CIF esta en la linea (' + indiceCif.linea + ') => ', textDeLaImagen.data.lines[indiceCif.linea].text);
          return indiceCif;
        }
        j++;
      });
      i++;
    });
    return indiceCif;
  }
  // verParecido() {
  //   // Ejemplo de uso:
  //   let palabra1 = 'cantidad';
  //   let palabra2 = 'CANTIDAD. T';
  //   let similitudPorcentaje = this.similitud(palabra1, palabra2);
  //   console.log(
  //     `La similitud entre "${palabra1}" y "${palabra2}" es aproximadamente ${Math.round(
  //       similitudPorcentaje * 100,
  //     )}%`,
  //   );
  // }
  ngOnDestroy() {
    this.subcripciones.forEach(subcripcion => {
      subcripcion.unsubscribe();
    });
  }
}
_class = FacturaReaderComponent;
_class.ɵfac = function FacturaReaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-factura-reader"]],
  decls: 14,
  vars: 4,
  consts: [[1, "card"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "max-width", "10rem", 3, "src"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], ["class", "w-full", 4, "ngIf"], [1, "grid", "mt-1"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click"], [1, "w-full"], [1, "col-12"], [1, "card", "mb-0", 2, "position", "relative"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", 2, "position", "absolute", "top", "0", "right", "0", 3, "click"], [1, "flex", "flex-column", "justify-content-center", "align-items-center"], ["selectionMode", "single", 3, "value"], ["pTemplate", "body"], ["alt", "", 2, "height", "auto", "/* width", "18vw", "max-width", "18vw", "max-height", "18vw", "height", "18vw", "*/\n              width", "50%", "max-width", "50%", "border-radius", "10%", 3, "src"], [2, "padding", "0", "border-color", "black"]],
  template: function FacturaReaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Agregar Imagen");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FacturaReaderComponent_ng_template_6_Template, 3, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FacturaReaderComponent_p_button_10_Template, 1, 0, "p-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FacturaReaderComponent_label_11_Template, 3, 0, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FacturaReaderComponent_div_13_Template, 24, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imagenSubida);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imagenes && ctx.imagenes.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.imagenes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__.FileUpload, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7954:
/*!***************************************************!*\
  !*** ./src/app/layout/gastos/gastos.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosComponent: () => (/* binding */ GastosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/presupuesto.service */ 8369);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pruebas.service */ 8500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fileupload */ 8285);
var _class;















function GastosComponent_ng_template_18_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-fileUpload", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelect", function GastosComponent_ng_template_18_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onSelectImg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showUploadButton", false);
  }
}
function GastosComponent_ng_template_18_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GastosComponent_ng_template_18_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GastosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GastosComponent_ng_template_18_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GastosComponent_ng_template_18_p_button_2_Template, 1, 0, "p-button", 17);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.imagenSubida);
  }
}
const _c0 = function () {
  return ["/"];
};
class GastosComponent {
  constructor() {
    // servicios requeridos
    this.pruebaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_2__.PruebasService);
    this.presupuestoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__.PresupuestoService);
    this.activatedRoutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.compuestoSnOptions = [{
      value: 'Si',
      label: 'Si'
    }, {
      value: 'No',
      label: 'No'
    }];
    this.hadSubmit = false;
    this.loading = false;
    this.loadingTipos = true;
    this.presupuestos = [];
    this.subs = [];
    this.newPDV = this.Form.group({
      presupuesto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      imagen: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  // form getters ----------------------------------------------------------------------------------
  get presupuesto() {
    return this.newPDV.get('presupuesto');
  }
  get imagen() {
    return this.newPDV.get('imagen');
  }
  // end form getter --------------------------------------------------------------------------------
  ngOnInit() {
    this.cargarPresupuestos();
  }
  validar(campo) {
    return this.newPDV.get(campo).valid;
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newPDV.invalid) {
      console.log(this.newPDV.invalid);
      this.loading = false;
      this.messageService.error('Verifique los campos');
      return;
    }
    const gastoToSend = {
      imagen: this.imagen.value,
      id: this.presupuesto.value
    };
    this.cargarImagenPresupuesto(gastoToSend);
  }
  // dinamica de la imagen -----------------------------------------------------------------------
  onSelectImg(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event['currentFiles'][0]);
    fileReader.onload = () => {
      this.imagen.setValue(fileReader.result);
      this.imagenSubida = fileReader.result;
    };
  }
  onRemoveImg() {
    this.imagen.setValue(null);
    this.imagenSubida = null;
  }
  // llamadas al back -----------------------------------------------------------------------------
  // cargo los tipos de productos del select homonimo
  cargarImagenPreviaDelPresupuesto(id) {
    console.log(id);
    // this.presupuestos = this.pruebaService.getPresupuestos()
    this.subs.push(this.presupuestoService.getPresupuesto(id).subscribe(response => {
      this.imagenSubida = response.imagen;
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    }));
  }
  // cargo los presupeustos del select homonimo
  cargarPresupuestos() {
    // this.presupuestos = this.pruebaService.getPresupuestos()
    this.subs.push(this.presupuestoService.getPresupuestos().subscribe(response => {
      this.presupuestos = response;
      console.log(this.presupuestos);
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    }));
  }
  cargarImagenPresupuesto(gastoToSend) {
    console.log(gastoToSend);
    this.subs.push(this.presupuestoService.editPresupuesto(gastoToSend).subscribe(response => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Exito!',
        detail: 'PDV registrado con exito!'
      });
      console.log(response);
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
      this.loading = false;
      this.messageService.error(error.error.detail);
      return;
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = GastosComponent;
_class.ɵfac = function GastosComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-gastos"]],
  decls: 24,
  vars: 5,
  consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "flex", "flex-row"], ["formControlName", "presupuesto", "placeholder", "Selecciona", "optionLabel", "nombre", "optionValue", "id", 1, "w-15rem", 3, "options", "onChange"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-6"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "width", "100%", 3, "src"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "routerLink"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"]],
  template: function GastosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Registrar PDV");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Rellene los campos a editar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 3)(9, "div", 4)(10, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Seleccione un presupuesto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "p-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function GastosComponent_Template_p_dropdown_onChange_13_listener($event) {
        return ctx.cargarImagenPreviaDelPresupuesto($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Imagen");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, GastosComponent_ng_template_18_Template, 3, 2, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "p-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GastosComponent_Template_p_button_click_23_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.newPDV);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.presupuestos);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__.FileUpload],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4572:
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-documentacion/mostrar-tarea-documentacion.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaDocumentacionComponent: () => (/* binding */ MostrarTareaDocumentacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ 8285);
var _class;










function MostrarTareaDocumentacionComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 9)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Imagenes guardadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MostrarTareaDocumentacionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_div_2_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const imagen_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.borrarImagen(imagen_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const imagen_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imagen_r4.imagen || "https://source.unsplash.com/random", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MostrarTareaDocumentacionComponent_ng_template_8_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-fileUpload", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function MostrarTareaDocumentacionComponent_ng_template_8_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onSelectImg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showUploadButton", false);
  }
}
function MostrarTareaDocumentacionComponent_ng_template_8_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_ng_template_8_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MostrarTareaDocumentacionComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MostrarTareaDocumentacionComponent_ng_template_8_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MostrarTareaDocumentacionComponent_ng_template_8_p_button_2_Template, 1, 0, "p-button", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.imagenSubida);
  }
}
function MostrarTareaDocumentacionComponent_p_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_p_button_12_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.subirImagen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MostrarTareaDocumentacionComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.subcripciones = [];
    this.idTarea = -1;
    this.estadoTareaIniciada = null;
  }
  ngOnInit() {
    this.subcripciones.push(this.tareaService.getImagenesLineaTarea(this.tarea.id).subscribe({
      next: response => {
        // console.log(response);
        this.imagenes = response;
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  // dinamica de la imagen -----------------------------------------------------------------------
  onSelectImg(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event['currentFiles'][0]);
    fileReader.onload = () => {
      this.imagenSubida = fileReader.result;
    };
  }
  onRemoveImg() {
    this.imagenSubida = null;
  }
  subirImagen() {
    this.subcripciones.push(this.tareaService.subirImagenLineaTarea({
      id: this.tarea.id,
      imagen: this.imagenSubida
    }).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'la imagen a sido subida'
        });
        this.onRemoveImg();
        this.ngOnInit();
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  borrarImagen(id) {
    this.subcripciones.push(this.tareaService.borrarImagenLineaTarea(id).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'la imagen a sido borrada'
        });
        this.ngOnInit();
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  ngOnDestroy() {
    this.subcripciones.forEach(subcripcion => {
      subcripcion.unsubscribe();
    });
  }
}
_class = MostrarTareaDocumentacionComponent;
_class.ɵfac = function MostrarTareaDocumentacionComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-documentacion"]],
  inputs: {
    tarea: "tarea"
  },
  decls: 13,
  vars: 4,
  consts: [["class", "w-full", 4, "ngIf"], [1, "grid", "mt-1"], ["class", "col-6 lg:col-3 xl:col-3", 4, "ngFor", "ngForOf"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "max-width", "10rem", 3, "src"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], [1, "w-full"], [1, "col-6", "lg:col-3", "xl:col-3"], [1, "card", "mb-0", 2, "position", "relative"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", 2, "position", "absolute", "top", "0", "right", "0", 3, "click"], [1, "flex", "justify-content-center", "align-items-center"], ["alt", "", 2, "height", "auto", "width", "18vw", "max-width", "18vw", "max-height", "18vw", "height", "18vw", "border-radius", "10%", 3, "src"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click"]],
  template: function MostrarTareaDocumentacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MostrarTareaDocumentacionComponent_label_0_Template, 3, 0, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MostrarTareaDocumentacionComponent_div_2_Template, 5, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "label", 4)(5, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Agregar Imagen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MostrarTareaDocumentacionComponent_ng_template_8_Template, 3, 2, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MostrarTareaDocumentacionComponent_p_button_12_Template, 1, 0, "p-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenes && ctx.imagenes.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.imagenes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenSubida);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUpload],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 986:
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaFinalizacionComponent: () => (/* binding */ MostrarTareaFinalizacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 2947);
var _class;







class MostrarTareaFinalizacionComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.subcripciones = [];
    this.idTarea = -1;
    this.estadoTareaIniciada = null;
  }
  ngOnInit() {
    this.subcripciones.push(this.tareaService.getEstadoTimeTarea(this.tarea.id).subscribe({
      next: response => {
        console.log(response);
        this.estadoTareaIniciada = response.tareaIniciada;
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  finalizar(id) {
    console.log('FINALIZAR?');
    // this.subcripciones.push(
    //   this.tareaService.finalizarTareaPadre(id).subscribe({
    //     next: (response) => {
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Exito',
    //         detail: 'la tarea a sido finalizada'
    //       })
    //     },
    //     error: (error) => {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: 'Hubo un error, no se pudo finalizar la tarea'
    //       })
    //     }
    //   })
    // )
  }

  ngOnDestroy() {
    this.subcripciones.forEach(subcripcion => {
      subcripcion.unsubscribe();
    });
  }
}
_class = MostrarTareaFinalizacionComponent;
_class.ɵfac = function MostrarTareaFinalizacionComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-finalizacion"]],
  inputs: {
    tarea: "tarea"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "field", "pl-0", "pt-1", "pb-0", "flex", "align-items-center", "justify-content-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Finalizar", 1, "p-button-danger", "w-3", 3, "click"]],
  template: function MostrarTareaFinalizacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaFinalizacionComponent_Template_button_click_2_listener() {
        return ctx.finalizar(ctx.tarea.id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2068:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-movimiento/mostrar-tarea-movimiento.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaMovimientoComponent: () => (/* binding */ MostrarTareaMovimientoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mercancia.service */ 7098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 9156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autofocus */ 4194);
var _class;












function MostrarTareaMovimientoComponent_div_1_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function MostrarTareaMovimientoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ubicacion Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_div_1_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.ubicacionAntigua = $event);
    })("blur", function MostrarTareaMovimientoComponent_div_1_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.validarUbicaciones());
    })("keyup.enter", function MostrarTareaMovimientoComponent_div_1_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.focusBarcode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaMovimientoComponent_div_1_small_4_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.ubicacionAntigua)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r0.ubicacionInvalida));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.ubicacionInvalida);
  }
}
function MostrarTareaMovimientoComponent_div_2_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Codigo no pertenece al producto asignado a esta tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Codigo de Barras de la Mercancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_div_2_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.barcode = $event);
    })("blur", function MostrarTareaMovimientoComponent_div_2_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.validarCodigo());
    })("keyup.enter", function MostrarTareaMovimientoComponent_div_2_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaMovimientoComponent_div_2_small_4_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.barcode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r1.codigoInvalido));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.codigoInvalido);
  }
}
function MostrarTareaMovimientoComponent_div_3_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nueva Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_div_3_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.ubicacionNueva = $event);
    })("blur", function MostrarTareaMovimientoComponent_div_3_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.validarUbicacionesDestino());
    })("keyup.enter", function MostrarTareaMovimientoComponent_div_3_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaMovimientoComponent_div_3_small_4_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionNueva)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r2.ubicacionInvalidaDestino));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.ubicacionInvalidaDestino);
  }
}
function MostrarTareaMovimientoComponent_div_4_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deben Moverse exactamente ", ctx_r22.tarea.ref2, " Undiades");
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function MostrarTareaMovimientoComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_div_4_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.cantidad = $event);
    })("blur", function MostrarTareaMovimientoComponent_div_4_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.validarCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaMovimientoComponent_div_4_small_4_Template, 2, 1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.cantidad)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.cantidadInvalida);
  }
}
function MostrarTareaMovimientoComponent_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MostrarTareaMovimientoComponent_p_button_6_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MostrarTareaMovimientoComponent_p_button_7_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.submitProceso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function MostrarTareaMovimientoComponent_p_button_8_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class MostrarTareaMovimientoComponent {
  constructor() {
    this.actualizar = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService);
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__.MercanciaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.ubicaciones = [];
    this.mercancias = [];
    this.cantidad = null;
    this.barcode = '';
    this.mercanciaSeleccionada = null;
    this.ubicacionAntiguaSeleccionada = null;
    this.ubicacionNuevaSeleccionada = null;
    this.codeInputLength = 0;
    this.codigoInvalido = false;
    this.cantidadInvalida = false;
    this.ubicacionAntigua = null;
    this.ubicacionNueva = null;
    this.subs = [];
    this.cantidadExigidad = -1;
    this.ubicacionInvalida = false;
    this.ubicacionInvalidaDestino = false;
  }
  ngOnInit() {
    console.log(this.tarea);
    this.cantidadExigidad = parseInt(this.tarea.ref2);
  }
  back() {
    let lastUrl = sessionStorage.getItem('lastUrl');
    this.router.navigateByUrl(lastUrl);
  }
  focusCantidad() {
    setTimeout(() => {
      document.getElementById('cantidad').focus();
      //@ts-ignore
      document.getElementById('cantidad').value = null;
    }, 100);
  }
  focusBarcode() {
    setTimeout(() => {
      document.getElementById('barcode').focus();
      //@ts-ignore
      document.getElementById('barcode').value = null;
    }, 100);
  }
  // validarTodo() {
  //   if (this.tarea.estado === 'iniciado') {
  //     return (
  //       !this.ubicacionInvalida && this.codigoInvalido && !this.cantidadInvalida
  //     );
  //   } else if (this.tarea.estado === 'proceso') {
  //     return !this.ubicacionInvalida;
  //   }
  //   return false;
  // }
  validarUbicaciones() {
    if (this.ubicacionAntigua !== null && this.ubicacionAntigua !== '') {
      if (this.ubicacionAntigua === this.tarea.preparaciones[0].origen) {
        this.ubicacionInvalida = false;
        return true;
      } else {
        this.ubicacionInvalida = true;
        return false;
      }
    } else {
      this.ubicacionInvalida = true;
      return false;
    }
  }
  validarUbicacionesDestino() {
    if (this.ubicacionNueva !== null && this.ubicacionNueva !== '') {
      if (this.ubicacionNueva === this.tarea.preparaciones[0].destino) {
        this.ubicacionInvalidaDestino = false;
        return true;
      } else {
        this.ubicacionInvalidaDestino = true;
        return false;
      }
    } else {
      this.ubicacionInvalidaDestino = true;
      return false;
    }
  }
  validarCodigo() {
    // this.codeInputLength = this.barcode.length;
    // const regex = /^[0-9]*$/;
    // this.soloNumeros = regex.test(this.barcode);
    if (this.barcode !== null && this.barcode !== undefined && this.barcode !== '' && this.barcode == this.tarea.ref1) {
      this.codigoInvalido = false;
      return true;
    } else {
      this.codigoInvalido = true;
      return false;
    }
  }
  validarCantidad() {
    if (this.cantidad !== null && this.cantidad > 0 && this.cantidad == parseInt(this.tarea.ref2)) {
      this.cantidadInvalida = false;
      return true;
    }
    this.cantidadInvalida = true;
    return false;
  }
  submit() {
    this.validarTodoV = true;
    if (!this.validarUbicaciones()) {
      this.validarTodoV = false;
    }
    if (!this.validarCodigo()) {
      this.validarTodoV = false;
    }
    if (!this.validarCantidad()) {
      this.validarTodoV = false;
    }
    if (!this.validarTodoV) return;
    const body = {
      id: this.tarea.id,
      codigoEan: this.barcode,
      origen: this.ubicacionAntigua,
      cantidad: this.cantidad
    };
    console.log(body);
    this.subs.push(this.tareaService.registrarMoviemientoParte1(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.actualizar.emit(true);
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  submitProceso() {
    this.validarTodoV = true;
    if (!this.validarUbicacionesDestino()) {
      this.validarTodoV = false;
    }
    if (!this.validarTodoV) return;
    const body = {
      id: this.tarea.id,
      destino: this.ubicacionNueva
    };
    console.log(body);
    this.subs.push(this.tareaService.registrarMoviemientoParte2(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.back();
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = MostrarTareaMovimientoComponent;
_class.ɵfac = function MostrarTareaMovimientoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-movimiento"]],
  inputs: {
    tarea: "tarea"
  },
  outputs: {
    actualizar: "actualizar"
  },
  decls: 9,
  vars: 7,
  consts: [[1, "p-fluid"], ["class", "field pl-0 pt-1 pb-0", 4, "ngIf"], [1, "flex"], ["class", "m-2", "label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], ["class", "m-2", "label", "Terminar", "icon", "pi pi-check", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], ["class", "m-2", "label", "Siguiente Tarea", "icon", "pi pi-check", "styleClass", "p-button-secondary", 3, "onClick", 4, "ngIf"], [1, "field", "pl-0", "pt-1", "pb-0"], ["id", "ubicacion", "type", "text", "autofocus", "", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["class", "p-error", 4, "ngIf"], [1, "p-error"], ["id", "barcode", "type", "text", "placeholder", "Codigo de Barras", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["id", "ubicacion", "type", "text", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["id", "cantidad", "type", "number", "pInputText", "", "pAutoFocus", "", "placeholder", "Ingrese la cantidad", 1, "mb-2", 3, "ngModel", "ngModelOptions", "ngModelChange", "blur"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["label", "Terminar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["label", "Siguiente Tarea", "icon", "pi pi-check", "styleClass", "p-button-secondary", 1, "m-2", 3, "onClick"]],
  template: function MostrarTareaMovimientoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MostrarTareaMovimientoComponent_div_1_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MostrarTareaMovimientoComponent_div_2_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MostrarTareaMovimientoComponent_div_3_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaMovimientoComponent_div_4_Template, 5, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MostrarTareaMovimientoComponent_p_button_6_Template, 1, 0, "p-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MostrarTareaMovimientoComponent_p_button_7_Template, 1, 0, "p-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MostrarTareaMovimientoComponent_p_button_8_Template, 1, 0, "p-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "iniciado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "iniciado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "proceso");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "iniciado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "iniciado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "proceso");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tarea.estado === "proceso");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocus],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 742:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaPreRecComponent: () => (/* binding */ MostrarTareaPreRecComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mercancia.service */ 7098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 9156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 4194);
var _class;













function MostrarTareaPreRecComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ubicacion_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ubicacion_r4.ubicacionId);
  }
}
function MostrarTareaPreRecComponent_div_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mercancia_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mercancia_r12.codigoEan);
  }
}
function MostrarTareaPreRecComponent_div_6_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Codigo no puede tener mas de 13 numeros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_div_6_br_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
  }
}
function MostrarTareaPreRecComponent_div_6_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Codigo solo puede tener numeros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_div_6_br_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
  }
}
function MostrarTareaPreRecComponent_div_6_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Codigo no esta dentro de la ubicacion especificada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_div_6_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "El Codigo no pertenece al producto asignado a esta tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function MostrarTareaPreRecComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Mercancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-autoComplete", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function MostrarTareaPreRecComponent_div_6_Template_p_autoComplete_completeMethod_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.filter($event, "codigoEan", "mercancias"));
    })("onSelect", function MostrarTareaPreRecComponent_div_6_Template_p_autoComplete_onSelect_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.selectMercancia($event));
    })("onClear", function MostrarTareaPreRecComponent_div_6_Template_p_autoComplete_onClear_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.clearMercancia());
    })("input", function MostrarTareaPreRecComponent_div_6_Template_p_autoComplete_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.validarCodigo($event));
    })("paste", function MostrarTareaPreRecComponent_div_6_Template_p_autoComplete_paste_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.paste($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaPreRecComponent_div_6_ng_template_4_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MostrarTareaPreRecComponent_div_6_small_5_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MostrarTareaPreRecComponent_div_6_br_6_Template, 1, 0, "br", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MostrarTareaPreRecComponent_div_6_small_7_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MostrarTareaPreRecComponent_div_6_br_8_Template, 1, 0, "br", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MostrarTareaPreRecComponent_div_6_small_9_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MostrarTareaPreRecComponent_div_6_small_10_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autofocus", ctx_r1.mercancias.length > 0)("suggestions", ctx_r1.filteredMercancias)("forceSelection", true)("completeOnFocus", true)("showClear", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c0, ctx_r1.codeInputLength > 13 || !ctx_r1.soloNumeros));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.codeInputLength > 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.codeInputLength > 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.soloNumeros && ctx_r1.codeInputLength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.soloNumeros && ctx_r1.codeInputLength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.codigoValido && !(ctx_r1.mercanciaSeleccionada && !ctx_r1.mercanciaSeleccionada.codigoEan !== ctx_r1.tarea.ref1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.mercanciaSeleccionada && !ctx_r1.mercanciaSeleccionada.codigoEan !== ctx_r1.tarea.ref1);
  }
}
function MostrarTareaPreRecComponent_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ubicacion_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ubicacion_r21.ubicacionId);
  }
}
function MostrarTareaPreRecComponent_div_7_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ambas ubicaciones son requeridas y no pueden ser las mismas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nueva Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-autoComplete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function MostrarTareaPreRecComponent_div_7_Template_p_autoComplete_completeMethod_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.filter($event, "ubicacionId", "ubicaciones"));
    })("onSelect", function MostrarTareaPreRecComponent_div_7_Template_p_autoComplete_onSelect_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.selectUbicacion($event, "Nueva"));
    })("onClear", function MostrarTareaPreRecComponent_div_7_Template_p_autoComplete_onClear_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.clearUbicacion("Nueva"));
    })("input", function MostrarTareaPreRecComponent_div_7_Template_p_autoComplete_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.inputUbicacion($event, "Nueva"));
    })("paste", function MostrarTareaPreRecComponent_div_7_Template_p_autoComplete_paste_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.paste($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaPreRecComponent_div_7_ng_template_4_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MostrarTareaPreRecComponent_div_7_small_5_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autofocus", true)("suggestions", ctx_r2.filteredUbicaciones)("forceSelection", true)("completeOnFocus", true)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.validarUbicaciones());
  }
}
function MostrarTareaPreRecComponent_div_8_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Solo hay ", ctx_r28.mercanciaSeleccionada.cantidad, " disponibles para mover");
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function MostrarTareaPreRecComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MostrarTareaPreRecComponent_div_8_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.cantidad = $event);
    })("input", function MostrarTareaPreRecComponent_div_8_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.validarCantidad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MostrarTareaPreRecComponent_div_8_small_4_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autofocus", true)("ngModel", ctx_r3.cantidad)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.mercanciaSeleccionada);
  }
}
class MostrarTareaPreRecComponent {
  constructor() {
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService);
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__.MercanciaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.ubicaciones = [];
    this.mercancias = [];
    this.cantidad = 0;
    this.barcode = null;
    this.mercanciaSeleccionada = null;
    this.ubicacionAntiguaSeleccionada = null;
    this.ubicacionNuevaSeleccionada = null;
    this.codeInputLength = 0;
    this.codigoValido = false;
    this.cantidadValida = false;
    this.subs = [];
  }
  ngOnInit() {
    this.cargarUbicaciones();
  }
  cargarUbicaciones() {
    this.subs.push(this.ubicacionesService.getUbicaciones().subscribe({
      next: res => {
        console.log(res);
        this.ubicaciones = res;
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  cargarMercancias(idUbi) {
    this.subs.push(this.mercanciaService.getMercanciasByUbicacion(idUbi).subscribe({
      next: res => {
        console.log(res);
        this.mercancias = res;
        setTimeout(() => {
          const mercaAC = document.getElementById('MercanciasAutocomplete');
          mercaAC?.focus();
        }, 50);
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  validarTodo() {
    return this.validarUbicaciones() && this.codigoValido && this.cantidadValida;
  }
  validarUbicaciones() {
    // console.log('se valida ', this.ubicacionAntiguaSeleccionada, ' y ', this.ubicacionNuevaSeleccionada);
    if (this.ubicacionAntiguaSeleccionada == null || this.ubicacionAntiguaSeleccionada == undefined) {
      return false;
    } else if (this.ubicacionNuevaSeleccionada == null || this.ubicacionNuevaSeleccionada == undefined) {
      return false;
    } else if (this.ubicacionAntiguaSeleccionada.id === this.ubicacionNuevaSeleccionada.id) {
      return false;
    }
    return true;
  }
  validarCodigo(event) {
    console.log('hey');
    setTimeout(() => {
      console.log('hey2');
      this.barcode = event.target.value;
      this.codeInputLength = this.barcode.length;
      const regex = /^[0-9]*$/;
      this.soloNumeros = regex.test(this.barcode);
      this.mercanciaSeleccionada = this.mercancias.find(mercancia => mercancia.codigoEan == this.barcode);
      if (this.mercanciaSeleccionada !== undefined && this.mercanciaSeleccionada.codigoEan === this.tarea.ref1) {
        this.codigoValido = true;
      } else {
        this.codigoValido = false;
        this.mercanciaSeleccionada = null;
      }
    }, 500);
  }
  validarCantidad(event) {
    let cantidad = event.target.value;
    if (cantidad > 0 && cantidad <= this.mercanciaSeleccionada.cantidad) {
      this.cantidadValida = true;
      return;
    }
    this.cantidadValida = false;
  }
  submit() {
    if (!this.validarTodo()) {
      return;
    }
    const body = {
      id: this.tarea.id,
      ubicacionAntigua: this.ubicacionAntiguaSeleccionada.id,
      ubicacionNueva: this.ubicacionNuevaSeleccionada.id,
      mercancia: this.mercanciaSeleccionada.mercanciaId,
      cantidad: this.cantidad
    };
    console.log(body);
    this.subs.push(this.tareaService.registrarPreRec(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Preparacion / Recepcion realizado con exito'
        });
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  filter(event, campo, array) {
    let filtered = [];
    let query = event.query;
    console.log(query);
    if (query === '') {
      this[array].forEach(element => {
        element[campo] = element[campo].toString();
        filtered.push(element);
      });
    } else {
      this[array].forEach(element => {
        element[campo] = element[campo].toString();
        if (element[campo].toLowerCase().indexOf(query.toLowerCase()) == 0 || element[campo].toString().toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(element);
        }
      });
    }
    if (array === 'mercancias') this.filteredMercancias = filtered;
    if (array === 'ubicaciones') this.filteredUbicaciones = filtered;
  }
  selectMercancia(event) {
    this.codigoEan = event.codigoEan;
    this.codeInputLength = this.codigoEan.length;
    this.soloNumeros = true;
    this.codigoValido = true;
    this.mercanciaSeleccionada = this.mercancias.find(mercancia => mercancia.codigoEan === this.codigoEan);
    if (this.mercanciaSeleccionada.codigoEan !== this.tarea.ref1) {
      this.codigoValido = false;
    }
  }
  clearMercancia() {
    this.codigoEan = null;
  }
  selectUbicacion(event, variacion) {
    this['ubicacion' + variacion] = event.ubicacionId;
    this['ubicacion' + variacion + 'Seleccionada'] = this.ubicaciones.find(ubicacion => ubicacion.ubicacionId === this['ubicacion' + variacion]);
    if (variacion === 'Antigua') this.cargarMercancias(this.ubicacionAntiguaSeleccionada.id);
  }
  inputUbicacion(event, variacion) {
    console.log('typing ', event.target.value);
    this['ubicacion' + variacion] = event.target.value;
    this['ubicacion' + variacion + 'Seleccionada'] = this.ubicaciones.find(ubicacion => ubicacion.ubicacionId === this['ubicacion' + variacion]);
    if (variacion === 'Antigua' && this.ubicacionAntiguaSeleccionada) {
      this.cargarMercancias(this.ubicacionAntiguaSeleccionada.id);
    }
    if (this.ubicacionAntiguaSeleccionada === undefined || this.ubicacionAntigua === null) this.mercancias = [];
    this.clearMercancia();
    this.clearUbicacion('Nueva');
    this.cantidad = 0;
  }
  clearUbicacion(variacion) {
    this['ubicacion' + variacion] = null;
    if (this.ubicacionAntigua === null) this.mercancias = [];
  }
  paste(event) {
    // limpia el valor del input y cuando esto ocurra el evento input con la funcion corresponiente le pondra el valor pegado
    event.target.value = '';
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = MostrarTareaPreRecComponent;
_class.ɵfac = function MostrarTareaPreRecComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-pre-rec"]],
  inputs: {
    tarea: "tarea"
  },
  decls: 10,
  vars: 9,
  consts: [[1, "p-fluid"], [1, "field", "pl-0", "pt-1", "pb-0"], ["field", "ubicacionId", "placeholder", "Inserte la Ubicacion Antigua", 3, "autofocus", "suggestions", "forceSelection", "completeOnFocus", "showClear", "completeMethod", "onSelect", "onClear", "input", "paste"], ["pTemplate", "item"], ["class", "field pl-0 pt-1 pb-0", 4, "ngIf"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "mt-2", 3, "disabled", "click"], ["field", "codigoEan", "placeholder", "Codigo de barras", 3, "autofocus", "suggestions", "forceSelection", "completeOnFocus", "showClear", "ngClass", "completeMethod", "onSelect", "onClear", "input", "paste"], ["class", "p-error", 4, "ngIf"], [4, "ngIf"], [1, "p-error"], ["field", "ubicacionId", "placeholder", "Inserte la Ubicacion Nueva", 3, "autofocus", "suggestions", "forceSelection", "completeOnFocus", "showClear", "completeMethod", "onSelect", "onClear", "input", "paste"], ["type", "number", "pInputText", "", "pAutoFocus", "", "placeholder", "Ingrese la cantidad", 1, "mb-2", 3, "autofocus", "ngModel", "ngModelOptions", "ngModelChange", "input"]],
  template: function MostrarTareaPreRecComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Ubicacion Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p-autoComplete", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function MostrarTareaPreRecComponent_Template_p_autoComplete_completeMethod_4_listener($event) {
        return ctx.filter($event, "ubicacionId", "ubicaciones");
      })("onSelect", function MostrarTareaPreRecComponent_Template_p_autoComplete_onSelect_4_listener($event) {
        return ctx.selectUbicacion($event, "Antigua");
      })("onClear", function MostrarTareaPreRecComponent_Template_p_autoComplete_onClear_4_listener() {
        return ctx.clearUbicacion("Antigua");
      })("input", function MostrarTareaPreRecComponent_Template_p_autoComplete_input_4_listener($event) {
        return ctx.inputUbicacion($event, "Antigua");
      })("paste", function MostrarTareaPreRecComponent_Template_p_autoComplete_paste_4_listener($event) {
        return ctx.paste($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MostrarTareaPreRecComponent_ng_template_5_Template, 2, 1, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MostrarTareaPreRecComponent_div_6_Template, 11, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MostrarTareaPreRecComponent_div_7_Template, 6, 6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MostrarTareaPreRecComponent_div_8_Template, 5, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MostrarTareaPreRecComponent_Template_p_button_click_9_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autofocus", true)("suggestions", ctx.filteredUbicaciones)("forceSelection", true)("completeOnFocus", true)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ubicacionAntiguaSeleccionada && ctx.mercancias.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ubicacionAntiguaSeleccionada && ctx.codigoValido);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ubicacionAntiguaSeleccionada && ctx.validarUbicaciones());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.validarTodo());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutoComplete, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4507:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-tiempo/mostrar-tarea-tiempo.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaTiempoComponent: () => (/* binding */ MostrarTareaTiempoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;






const _c0 = function () {
  return {
    padding: "15px",
    width: "30%"
  };
};
const _c1 = function (a0) {
  return {
    "custom-big-button-disabled": a0
  };
};
const _c2 = function () {
  return {
    padding: "20px",
    width: "30%"
  };
};
class MostrarTareaTiempoComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.cambioEstadoTareaInciada = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.subcripciones = [];
  }
  ngOnInit() {
    this.subcripciones.push(this.tareaService.getEstadoTimeTarea(this.tarea.id).subscribe({
      next: response => {
        console.log(response);
        this.estadoTareaIniciada = response.tareaIniciada;
      },
      error: error => {
        this.messageService.error(error.error.detail);
      }
    }));
  }
  empezarTarea() {
    if (!this.estadoTareaIniciada) {
      this.tareaService.startTimeTarea(this.tarea.id).subscribe({
        next: response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'la tarea a sido iniciada'
          });
          this.cambioEstadoTareaInciada.emit(this.estadoTareaIniciada);
          this.ngOnInit();
        },
        error: error => {
          this.messageService.error(error.error.detail);
        }
      });
    }
  }
  pausarTarea() {
    if (this.estadoTareaIniciada) {
      this.tareaService.pauseTimeTarea(this.tarea.id).subscribe({
        next: response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'la tarea a sido pausada'
          });
          this.cambioEstadoTareaInciada.emit(this.estadoTareaIniciada);
          this.ngOnInit();
        },
        error: error => {
          this.messageService.error(error.error.detail);
        }
      });
    }
  }
  detenerTarea() {
    if (this.estadoTareaIniciada) {
      this.tareaService.pauseTimeTarea(this.tarea.id).subscribe({
        next: response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'la tarea a sido pausada'
          });
          this.cambioEstadoTareaInciada.emit(this.estadoTareaIniciada);
          this.ngOnInit();
        },
        error: error => {
          this.messageService.error(error.error.detail);
        }
      });
    }
  }
  ngOnDestroy() {
    this.subcripciones.forEach(subcripcion => {
      subcripcion.unsubscribe();
    });
  }
}
_class = MostrarTareaTiempoComponent;
_class.ɵfac = function MostrarTareaTiempoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-tiempo"]],
  inputs: {
    tarea: "tarea",
    estadoTareaIniciada: "estadoTareaIniciada"
  },
  outputs: {
    cambioEstadoTareaInciada: "cambioEstadoTareaInciada"
  },
  decls: 7,
  vars: 15,
  consts: [[1, "grid", "grid-cols-3", "mx-1", "my-1", "gap-3"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle", "ngClass", "click"], [1, "pi", "pi-play", "text-green-500", 2, "font-size", "2rem"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-100", "border-round", 3, "ngStyle", "ngClass", "click"], [1, "pi", "pi-pause", "text-indigo-500", 2, "font-size", "2rem"], [1, "flex", "align-items-center", "justify-content-center", "bg-red-100", "border-round", 3, "ngStyle", "ngClass", "click"], [1, "pi", "pi-stop", "text-red-500", 2, "font-size", "2rem"]],
  template: function MostrarTareaTiempoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaTiempoComponent_Template_div_click_1_listener() {
        return ctx.empezarTarea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaTiempoComponent_Template_div_click_3_listener() {
        return ctx.pausarTarea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaTiempoComponent_Template_div_click_5_listener() {
        return ctx.detenerTarea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.estadoTareaIniciada));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, !ctx.estadoTareaIniciada));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, !ctx.estadoTareaIniciada));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4388:
/*!*****************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaComponent: () => (/* binding */ MostrarTareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 9177);
/* harmony import */ var _mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component */ 986);
/* harmony import */ var _mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mostrar-tarea-tiempo/mostrar-tarea-tiempo.component */ 4507);
/* harmony import */ var _mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mostrar-tarea-documentacion/mostrar-tarea-documentacion.component */ 4572);
/* harmony import */ var _mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component */ 742);
/* harmony import */ var _mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostrar-tarea-movimiento/mostrar-tarea-movimiento.component */ 2068);
var _class;















function MostrarTareaComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MostrarTareaComponent_div_0_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MostrarTareaComponent_div_0_ng_template_3_Template(rf, ctx) {}
function MostrarTareaComponent_div_0_ng_container_8_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 12);
  }
}
function MostrarTareaComponent_div_0_ng_container_8_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 13);
  }
}
function MostrarTareaComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostrarTareaComponent_div_0_ng_container_8_i_1_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostrarTareaComponent_div_0_ng_container_8_i_2_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.estadoTareaIniciada === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.estadoTareaIniciada === false);
  }
}
function MostrarTareaComponent_div_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" : ", ctx_r4.tarea.ref2, " unidad/es ");
  }
}
function MostrarTareaComponent_div_0_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r5.tarea.preparaciones[0].origen, " a ", ctx_r5.tarea.preparaciones[0].destino, " ");
  }
}
function MostrarTareaComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-mostrar-tarea-tiempo", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cambioEstadoTareaInciada", function MostrarTareaComponent_div_0_ng_container_15_Template_app_mostrar_tarea_tiempo_cambioEstadoTareaInciada_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.cambioEstadoTareaInciada($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r6.tarea)("estadoTareaIniciada", ctx_r6.estadoTareaIniciada);
  }
}
function MostrarTareaComponent_div_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-mostrar-tarea-documentacion", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r7.tarea);
  }
}
function MostrarTareaComponent_div_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-mostrar-tarea-finalizacion", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r8.tarea);
  }
}
function MostrarTareaComponent_div_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-mostrar-tarea-pre-rec", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r9.tarea);
  }
}
function MostrarTareaComponent_div_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-mostrar-tarea-movimiento", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("actualizar", function MostrarTareaComponent_div_0_ng_container_19_Template_app_mostrar_tarea_movimiento_actualizar_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.ngOnInit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r10.tarea);
  }
}
function MostrarTareaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "p-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostrarTareaComponent_div_0_ng_template_2_Template, 1, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MostrarTareaComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5)(5, "div")(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, MostrarTareaComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MostrarTareaComponent_div_0_ng_container_12_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MostrarTareaComponent_div_0_p_13_Template, 2, 2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, MostrarTareaComponent_div_0_ng_container_15_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MostrarTareaComponent_div_0_ng_container_16_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MostrarTareaComponent_div_0_ng_container_17_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MostrarTareaComponent_div_0_ng_container_18_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MostrarTareaComponent_div_0_ng_container_19_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.tarea.accion, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.estadoTareaIniciada !== null && ctx_r0.tarea.tipo !== "movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.tarea.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "tiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "documentacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "finalizacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "pre_rec");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tarea.tipo === "movimiento");
  }
}
class MostrarTareaComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.subcripciones = [];
    this.idTarea = -1;
    this.estadoTareaIniciada = null;
    this.tipoTareaOptions = [{
      value: 'tiempo',
      label: 'tiempo'
    }, {
      value: 'documentacion',
      label: 'documentacion'
    }, {
      value: 'finalizacion',
      label: 'finalizacion'
    }];
  }
  ngOnInit() {
    this.subcripciones.push(this.activatedRoute.params.subscribe(params => {
      this.idTarea = params['id'];
    }));
    this.subcripciones.push(this.tareaService.getLineaTarea(this.idTarea).subscribe(response => {
      console.log(response);
      this.tarea = response;
      this.tipoTarea = response.tipo;
      this.tareaService.getEstadoTimeTarea(this.idTarea).subscribe({
        next: response => {
          console.log(response);
          this.estadoTareaIniciada = response.tareaIniciada;
        },
        error: error => {
          console.log(error);
          this.messageService.error(error.error.detail);
        }
      });
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    }));
  }
  back() {
    let lastUrl = sessionStorage.getItem('lastUrl');
    this.router.navigateByUrl(lastUrl);
  }
  cambioEstadoTareaInciada(event) {
    this.ngOnInit();
  }
  cambiarTipoTarea() {
    this.tareaService.editarLineaTarea({
      id: this.tarea.id,
      tipo: this.tipoTarea
    }).subscribe(response => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Exito',
        detail: 'El tipo de la tarea ha sido actualizado'
      });
      this.ngOnInit();
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    });
  }
  ngOnDestroy() {
    this.subcripciones.forEach(subcripcion => {
      subcripcion.unsubscribe();
    });
  }
}
_class = MostrarTareaComponent;
_class.ɵfac = function MostrarTareaComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea"]],
  decls: 1,
  vars: 1,
  consts: [["class", "card", 4, "ngIf"], [1, "card"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "flex", "align-items-center", "justify-content-between", "mb-0"], [4, "ngIf"], [1, "text-2xl", "text-center"], ["class", "text-2xl text-center\t", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "click"], ["class", "pi pi-play text-green-500", 4, "ngIf"], ["class", "pi pi-pause text-indigo-200", 4, "ngIf"], [1, "pi", "pi-play", "text-green-500"], [1, "pi", "pi-pause", "text-indigo-200"], [3, "tarea", "estadoTareaIniciada", "cambioEstadoTareaInciada"], [3, "tarea"], [3, "tarea", "actualizar"]],
  template: function MostrarTareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MostrarTareaComponent_div_0_Template, 21, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tarea);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, _mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_2__.MostrarTareaFinalizacionComponent, _mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_3__.MostrarTareaTiempoComponent, _mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_4__.MostrarTareaDocumentacionComponent, _mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_5__.MostrarTareaPreRecComponent, _mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_6__.MostrarTareaMovimientoComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2841:
/*!*******************************************************!*\
  !*** ./src/app/layout/notfound/notfound.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundComponent: () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


const _c0 = function () {
  return ["/"];
};
class NotfoundComponent {}
_class = NotfoundComponent;
_class.ɵfac = function NotfoundComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-notfound"]],
  decls: 35,
  vars: 6,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["src", "assets/demo/images/notfound/logo-blue.svg", "alt", "Sakai logo", 1, "mb-5", "w-6rem", "flex-shrink-0"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "text-blue-500", "font-bold", "text-3xl"], [1, "text-900", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-600", "mb-5"], [1, "w-full", "flex", "align-items-center", "py-5", "border-300", "border-bottom-1", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center", "bg-cyan-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "text-50", "pi", "pi-fw", "pi-table", "text-2xl"], [1, "ml-4", "flex", "flex-column"], [1, "text-900", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-600", "lg:text-xl"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-question-circle", "text-50", "text-2xl"], [1, "text-900", "lg:text-xl", "font-medium", "mb-0"], [1, "w-full", "flex", "align-items-center", "mb-5", "py-5", "border-300", "border-bottom-1", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center", "bg-indigo-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-unlock", "text-50", "text-2xl"]],
  template: function NotfoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requested resource is not available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8)(12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11)(15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Frequently Asked Questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ultricies mi quis hendrerit dolor.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8)(20, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11)(23, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solution Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phasellus faucibus scelerisque eleifend.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17)(28, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11)(31, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Permission Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Accumsan in nisl nisi scelerisque");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 4746:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarOrdenTrabajoComponent: () => (/* binding */ MostrarOrdenTrabajoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pruebas.service */ 8500);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 9177);
var _class;













const _c0 = function () {
  return ["/ordenes-trabajo"];
};
function MostrarOrdenTrabajoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function MostrarOrdenTrabajoComponent_ng_template_4_Template(rf, ctx) {}
function MostrarOrdenTrabajoComponent_ng_container_5_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function MostrarOrdenTrabajoComponent_ng_container_5_p_button_6_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.toggleVerUbicaciones());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", !ctx_r4.verUbicaciones ? "pi pi-eye" : "pi pi-eye-slash");
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Origen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Destino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Tarea ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_10_ng_container_5_Template, 7, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r12.preparacion.origen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r12.preparacion.destino);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const lineaTarea_r12 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.mostrarLineaTarea(lineaTarea_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_2_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_4_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_ng_container_7_Template, 5, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r12 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r12.estado === "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r12.estado === "proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r12.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r12.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_15_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Origen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Destino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Tarea ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_15_ng_container_5_Template, 7, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r21.preparacion.origen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r21.preparacion.destino);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const lineaTarea_r21 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.mostrarLineaTarea(lineaTarea_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_2_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_3_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_4_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_ng_container_7_Template, 5, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r21 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r21.estado === "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r21.estado === "proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r21.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r21.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MostrarOrdenTrabajoComponent_ng_container_5_p_button_6_Template, 1, 1, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_10_Template, 6, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_11_Template, 8, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Tareas Finalizadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_15_Template, 6, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MostrarOrdenTrabajoComponent_ng_container_5_ng_template_16_Template, 8, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.ordenDeTrabajo.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.ordenDeTrabajo.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hayMovimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.lineasToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.lineasFinalizadoToShow);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *No hay tareas asigandas a este Usuario* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
class MostrarOrdenTrabajoComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.pruebasService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__.PruebasService);
    this.activateRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.ordenDeTrabajoID = null;
    this.ordenDeTrabajo = null;
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.lineasToShow = [];
    this.lineasProcesoToShow = [];
    this.lineasFinalizadoToShow = [];
    this.otrasSubscripciones = [];
    this.hayMovimiento = false;
    this.verUbicaciones = false;
  }
  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: params => {
        this.ordenDeTrabajoID = params['id'];
      }
    });
    this.otrasSubscripciones.push(this.tareaService.getOrdenTrabajo(this.ordenDeTrabajoID).subscribe(response => {
      console.log(response);
      this.ordenDeTrabajo = response;
      this.ordenDeTrabajo.lineasTareas.forEach(linea => {
        //@ts-ignore
        if (linea.preparacion !== null) {
          this.hayMovimiento = true;
        }
        if (linea.estado === 'finalizado') {
          this.lineasFinalizadoToShow.push(linea);
        } else {
          this.lineasToShow.push(linea);
        }
      });
      console.log(this.lineasToShow);
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    }));
  }
  toggleVerUbicaciones() {
    this.verUbicaciones = !this.verUbicaciones;
  }
  mostrarLineaTarea(lineaTarea) {
    sessionStorage.setItem('lastUrl', '/ordenes-trabajo/mostrar/' + this.ordenDeTrabajoID);
    this.router.navigateByUrl('/tarea/' + lineaTarea.id);
  }
  ngOnDestroy() {
    this.otrasSubscripciones.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = MostrarOrdenTrabajoComponent;
_class.ɵfac = function MostrarOrdenTrabajoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-orden-trabajo"]],
  decls: 7,
  vars: 2,
  consts: [[1, "col-12"], [1, "card", "card-w-title"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "routerLink"], ["label", "Ver Ubicaciones", "styleClass", "p-button-primary", 3, "icon", "onClick", 4, "ngIf"], [1, "m-0"], ["selectionMode", "single", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-red-500"], ["label", "Ver Ubicaciones", "styleClass", "p-button-primary", 3, "icon", "onClick"], [2, "width", "0.5rem"], ["pSortableColumn", "preparacion.origenId"], ["field", "preparacion.origenId"], ["pSortableColumn", "preparacion.destinoId"], ["field", "preparacion.destinoId"], [3, "click"], [2, "display", "flex", "justify-content", "center"], [1, "pi", "pi-check", 2, "font-size", "1.5rem"], [1, "pi", "pi-truck", 2, "font-size", "1.5rem"], [1, "pi", "pi-play", 2, "font-size", "1.5rem"]],
  template: function MostrarOrdenTrabajoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MostrarOrdenTrabajoComponent_ng_template_3_Template, 1, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_template_4_Template, 0, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_5_Template, 17, 5, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MostrarOrdenTrabajoComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordenDeTrabajo && ctx.ordenDeTrabajo.lineasTareas.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordenDeTrabajo && ctx.ordenDeTrabajo.lineasTareas.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3776:
/*!*********************************************************************!*\
  !*** ./src/app/layout/ordenes-trabajo/ordenes-trabajo.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesTrabajoComponent: () => (/* binding */ OrdenesTrabajoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pruebas.service */ 8500);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 2814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 9177);
var _class;












const _c0 = function () {
  return ["/"];
};
function OrdenesTrabajoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function OrdenesTrabajoComponent_ng_template_4_Template(rf, ctx) {}
function OrdenesTrabajoComponent_ng_container_5_p_panelMenu_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-panelMenu", 8);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r4.ordenesTrabajoToShow);
  }
}
function OrdenesTrabajoComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ordenes de Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OrdenesTrabajoComponent_ng_container_5_p_panelMenu_3_Template, 1, 1, "p-panelMenu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.ordenesTrabajoToShow.length > 0);
  }
}
function OrdenesTrabajoComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *No hay tareas asigandas a este Usuario* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
class OrdenesTrabajoComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.pruebasService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__.PruebasService);
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.ordenesTrabajoToShow = [];
    this.ordenesTrabajoProcesoToShow = [];
    this.ordenesTrabajoFinalizadoToShow = [];
    this.otrasSubscripciones = [];
  }
  ngOnInit() {
    // this.ordenesTrabajo = this.pruebasService.getOrdenesTrabajos();
    // this.ordenesTrabajo.forEach((orden) => {
    //   let lineas = [];
    //   orden.lineasTareas.forEach((lineaTarea) => {
    //     lineas.push({
    //       id: lineaTarea.id,
    //       label: lineaTarea.accion,
    //       icon: 'pi pi-fw pi-plus',
    //       routerLink: `/tarea/${lineaTarea.id}`,
    //     });
    //   });
    //   this.ordenesTrabajoToShow.push({
    //     label: orden.nombre,
    //     items: lineas,
    //   });
    // });
    this.otrasSubscripciones.push(this.tareaService.getOrdenesTrabajosDe(this.usuario.id).subscribe(response => {
      console.log(response);
      this.ordenesTrabajo = response;
      this.ordenesTrabajo.forEach(orden => {
        this.ordenesTrabajoToShow.push({
          label: orden.nombre,
          routerLink: `/ordenes-trabajo/mostrar/${orden.id}`
        });
      });
      console.log(this.ordenesTrabajoToShow);
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
    }));
  }
  ngOnDestroy() {
    this.otrasSubscripciones.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = OrdenesTrabajoComponent;
_class.ɵfac = function OrdenesTrabajoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-ordenes-trabajo"]],
  decls: 7,
  vars: 2,
  consts: [[1, "col-12"], [1, "card", "card-w-title"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "routerLink"], [3, "model", 4, "ngIf"], [3, "model"]],
  template: function OrdenesTrabajoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OrdenesTrabajoComponent_ng_template_3_Template, 1, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OrdenesTrabajoComponent_ng_template_4_Template, 0, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrdenesTrabajoComponent_ng_container_5_Template, 4, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrdenesTrabajoComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordenesTrabajoToShow.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ordenesTrabajoToShow.length === 0 && ctx.ordenesTrabajoFinalizadoToShow.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__.PanelMenu, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2668:
/*!*********************************************!*\
  !*** ./src/app/layout/pdv/pdv.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdvComponent: () => (/* binding */ PdvComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/presupuesto.service */ 8369);
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/producto.service */ 5466);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pruebas.service */ 8500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 4553);
var _class;














function PdvComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PdvComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
function PdvComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "DPV");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Rellene los campos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Seleccione un presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "p-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PdvComponent_div_2_div_13_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function PdvComponent_div_2_Template_p_button_onClick_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.openProductos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r1.presupuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loadingPrespuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.presupuesto.value);
  }
}
function PdvComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PdvComponent_div_3_div_2_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const producto_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.selectProducto(producto_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 24)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const producto_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", producto_r8.imagen || "https://source.unsplash.com/random", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](producto_r8.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", producto_r8.pvp, "$ ");
  }
}
function PdvComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PdvComponent_div_3_div_2_Template, 9, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 13)(4, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function PdvComponent_div_3_Template_p_button_onClick_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.openPresupuesto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.productos);
  }
}
function PdvComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "DPV");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Rellene los campos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 13)(13, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function PdvComponent_div_4_Template_p_button_onClick_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.openProductos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function PdvComponent_div_4_Template_p_button_onClick_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.cantidad.value <= 0);
  }
}
class PdvComponent {
  constructor() {
    // servicios requeridos
    this.pruebaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_3__.PruebasService);
    this.presupuestoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__.PresupuestoService);
    this.productoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__.ProductoService);
    this.activatedRoutes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.compuestoSnOptions = [{
      value: 'Si',
      label: 'Si'
    }, {
      value: 'No',
      label: 'No'
    }];
    this.hadSubmit = false;
    this.loading = false;
    this.loadingPrespuestos = true;
    this.showPresupuesto = true;
    this.showProductos = false;
    this.showCantidad = false;
    this.presupuestos = [];
    this.subs = [];
    this.newPDV = this.Form.group({
      presupuesto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      producto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      cantidad: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  // form getters ----------------------------------------------------------------------------------
  get presupuesto() {
    return this.newPDV.get('presupuesto');
  }
  get producto() {
    return this.newPDV.get('producto');
  }
  get cantidad() {
    return this.newPDV.get('cantidad');
  }
  // end form getter --------------------------------------------------------------------------------
  ngOnInit() {
    this.cargarPresupuestos();
  }
  validar(campo) {
    return this.newPDV.get(campo).valid;
  }
  openProductos() {
    this.loading = true;
    this.cargarProductos();
    this.showPresupuesto = false;
    this.showCantidad = false;
    this.showProductos = true;
  }
  openCantidad() {
    this.showProductos = false;
    this.showPresupuesto = false;
    this.showCantidad = true;
  }
  openPresupuesto() {
    this.loading = true;
    this.cargarPresupuestos();
    this.showProductos = false;
    this.showCantidad = false;
    this.showPresupuesto = true;
  }
  selectProducto(idProducto) {
    this.producto.setValue(idProducto);
    this.openCantidad();
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newPDV.invalid) {
      console.log(this.newPDV.invalid);
      this.loading = false;
      this.messageService.error('Verfique los campos');
      return;
    }
    const pdvToSend = {
      presupuesto: this.presupuesto.value,
      producto: this.producto.value,
      cantidad: this.cantidad.value
    };
    this.reqCreatePdv(pdvToSend);
  }
  // llamadas al back -----------------------------------------------------------------------------
  // cargo los tipos de productos del select homonimo
  cargarPresupuestos() {
    this.subs.push(this.presupuestoService.getPresupuestos().subscribe(response => {
      this.presupuestos = response;
      this.loadingPrespuestos = false;
      this.loading = false;
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
      return;
    }));
  }
  // cargo los tipos de productos del select homonimo
  cargarProductos() {
    this.subs.push(this.productoService.getProductos().subscribe(response => {
      this.productos = response;
      this.loading = false;
      console.log(this.productos);
    }, error => {
      console.log(error);
      this.messageService.error(error.error.detail);
      return;
    }));
  }
  reqCreatePdv(pdvToSend) {
    console.log(pdvToSend);
    this.subs.push(this.presupuestoService.createLineaPresupuesto(pdvToSend).subscribe(response => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Exito!',
        detail: 'Pdv registrado con exito!'
      });
      console.log(response);
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
      this.loading = false;
      this.messageService.error(error.error.detail);
      return;
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
}
_class = PdvComponent;
_class.ɵfac = function PdvComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-pdv"]],
  decls: 5,
  vars: 5,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [1, "", 3, "formGroup"], ["class", "grid", 4, "ngIf"], ["class", "card p-fluid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "flex", "flex-row"], ["formControlName", "presupuesto", "placeholder", "Selecciona", "optionLabel", "nombre", "optionValue", "id", 1, "w-15rem", 3, "options"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-arrow-left", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "routerLink"], ["label", "Siguiente", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "disabled", "onClick"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], ["class", "col-6 lg:col-3 xl:col-3", 4, "ngFor", "ngForOf"], ["label", "Presupuesto", "icon", "pi pi-arrow-left", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], [1, "col-6", "lg:col-3", "xl:col-3"], [1, "card", "mb-0", 2, "height", "100%"], [1, "flex", "justify-content-center", "align-items-center", 3, "click"], ["alt", "", 2, "height", "18vw", "width", "18vw", "border-radius", "10%", 3, "src"], [1, "block", "text-white-500", "text-center", "font-medium", "mt-2"], [1, "block", "text-cyan-500", "text-center", "font-medium", "mt-2"], ["type", "number", "pInputText", "", "placeholder", "Ingrese la cantidad", "formControlName", "cantidad"], ["label", "Producto", "icon", "pi pi-arrow-left", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "disabled", "onClick"]],
  template: function PdvComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PdvComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PdvComponent_div_2_Template, 17, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PdvComponent_div_3_Template, 5, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PdvComponent_div_4_Template, 15, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newPDV);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPresupuesto && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProductos && !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCantidad && !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3859:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class LayoutService {
  constructor() {
    this.config = {
      ripple: false,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'light',
      theme: 'lara-light-indigo',
      scale: 14
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config.menuMode === 'overlay';
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }
}
_class = LayoutService;
_class.ɵfac = function LayoutService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6877:
/*!**************************************************************!*\
  !*** ./src/app/layout/shared/footer/app.footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 3859);
var _class;


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
}
_class = AppFooterComponent;
_class.ɵfac = function AppFooterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 0,
  consts: [[1, "layout-footer"], [1, "font-medium", "ml-2"]],
  template: function AppFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Disigned, builded, and maintained by SystemCTL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 75:
/*!**********************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuComponent: () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 3859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 36);
var _class;




function AppMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const item_r1 = ctx_r5.$implicit;
    const i_r2 = ctx_r5.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1)("index", i_r2)("root", true);
  }
}
function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 5);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_li_1_Template, 1, 3, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.separator);
  }
}
class AppMenuComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.model = [];
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
  ngOnInit() {
    // console.log(this.usuario);
    this.model = [{
      label: `Bienvenido ${this.usuario.nombre} ${this.usuario.apellido1}`,
      items: [{
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      }, {
        label: 'Ordenes de Trabajo',
        icon: 'pi pi-fw pi-list',
        routerLink: [`/ordenes-trabajo/${this.usuario.id}`]
      }, {
        label: 'Gastos',
        icon: 'pi pi-fw pi-credit-card',
        routerLink: [`/404/${this.usuario.id}`]
      }, {
        label: 'DPV',
        icon: 'pi pi-fw pi-desktop',
        routerLink: [`/404/${this.usuario.id}`]
      }]
    }
    // {
    //     label: 'Home',
    //     items: [
    //         {
    //             label: 'Dashboard',
    //             icon: 'pi pi-fw pi-home',
    //             routerLink: ['/'],
    //         },
    //     ],
    // },
    // {
    //     label: 'UI Components',
    //     items: [
    //         {
    //             label: 'Form Layout',
    //             icon: 'pi pi-fw pi-id-card',
    //             routerLink: ['/uikit/formlayout'],
    //         },
    //         {
    //             label: 'Input',
    //             icon: 'pi pi-fw pi-check-square',
    //             routerLink: ['/uikit/input'],
    //         },
    //         {
    //             label: 'Float Label',
    //             icon: 'pi pi-fw pi-bookmark',
    //             routerLink: ['/uikit/floatlabel'],
    //         },
    //         {
    //             label: 'Invalid State',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             routerLink: ['/uikit/invalidstate'],
    //         },
    //         {
    //             label: 'Button',
    //             icon: 'pi pi-fw pi-box',
    //             routerLink: ['/uikit/button'],
    //         },
    //         {
    //             label: 'Table',
    //             icon: 'pi pi-fw pi-table',
    //             routerLink: ['/uikit/table'],
    //         },
    //         {
    //             label: 'List',
    //             icon: 'pi pi-fw pi-list',
    //             routerLink: ['/uikit/list'],
    //         },
    //         {
    //             label: 'Tree',
    //             icon: 'pi pi-fw pi-share-alt',
    //             routerLink: ['/uikit/tree'],
    //         },
    //         {
    //             label: 'Panel',
    //             icon: 'pi pi-fw pi-tablet',
    //             routerLink: ['/uikit/panel'],
    //         },
    //         {
    //             label: 'Overlay',
    //             icon: 'pi pi-fw pi-clone',
    //             routerLink: ['/uikit/overlay'],
    //         },
    //         {
    //             label: 'Media',
    //             icon: 'pi pi-fw pi-image',
    //             routerLink: ['/uikit/media'],
    //         },
    //         {
    //             label: 'Menu',
    //             icon: 'pi pi-fw pi-bars',
    //             routerLink: ['/uikit/menu'],
    //             routerLinkActiveOptions: {
    //                 paths: 'subset',
    //                 queryParams: 'ignored',
    //                 matrixParams: 'ignored',
    //                 fragment: 'ignored',
    //             },
    //         },
    //         {
    //             label: 'Message',
    //             icon: 'pi pi-fw pi-comment',
    //             routerLink: ['/uikit/message'],
    //         },
    //         {
    //             label: 'File',
    //             icon: 'pi pi-fw pi-file',
    //             routerLink: ['/uikit/file'],
    //         },
    //         {
    //             label: 'Chart',
    //             icon: 'pi pi-fw pi-chart-bar',
    //             routerLink: ['/uikit/charts'],
    //         },
    //         {
    //             label: 'Misc',
    //             icon: 'pi pi-fw pi-circle',
    //             routerLink: ['/uikit/misc'],
    //         },
    //     ],
    // },
    // {
    //     label: 'Prime Blocks',
    //     items: [
    //         {
    //             label: 'Free Blocks',
    //             icon: 'pi pi-fw pi-eye',
    //             routerLink: ['/blocks'],
    //             badge: 'NEW',
    //         },
    //         {
    //             label: 'All Blocks',
    //             icon: 'pi pi-fw pi-globe',
    //             url: ['https://www.primefaces.org/primeblocks-ng'],
    //             target: '_blank',
    //         },
    //     ],
    // },
    // {
    //     label: 'Utilities',
    //     items: [
    //         {
    //             label: 'PrimeIcons',
    //             icon: 'pi pi-fw pi-prime',
    //             routerLink: ['/utilities/icons'],
    //         },
    //         {
    //             label: 'PrimeFlex',
    //             icon: 'pi pi-fw pi-desktop',
    //             url: ['https://www.primefaces.org/primeflex/'],
    //             target: '_blank',
    //         },
    //     ],
    // },
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             routerLink: ['/landing'],
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     routerLink: ['/auth/login'],
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     routerLink: ['/auth/error'],
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     routerLink: ['/auth/access'],
    //                 },
    //             ],
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             routerLink: ['/pages/crud'],
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi pi-fw pi-calendar',
    //             routerLink: ['/pages/timeline'],
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             routerLink: ['/notfound'],
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             routerLink: ['/pages/empty'],
    //         },
    //     ],
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {
    //                             label: 'Submenu 1.1.1',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                         {
    //                             label: 'Submenu 1.1.2',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                         {
    //                             label: 'Submenu 1.1.3',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {
    //                             label: 'Submenu 1.2.1',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {
    //                             label: 'Submenu 2.1.1',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                         {
    //                             label: 'Submenu 2.1.2',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         {
    //                             label: 'Submenu 2.2.1',
    //                             icon: 'pi pi-fw pi-bookmark',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-question',
    //             routerLink: ['/documentation'],
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-search',
    //             url: ['https://github.com/primefaces/sakai-ng'],
    //             target: '_blank',
    //         },
    //     ],
    // },
    ];
  }
}
_class = AppMenuComponent;
_class.ɵfac = function AppMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-menu"]],
  decls: 2,
  vars: 1,
  consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]],
  template: function AppMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.model);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent],
  encapsulation: 2
});

/***/ }),

/***/ 2089:
/*!********************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menu.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
}
_class = MenuService;
_class.ɵfac = function MenuService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 36:
/*!**************************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menuitem.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuitemComponent: () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 3859);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.service */ 2089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 1339);
var _class;









const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r1.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r1.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
const _c1 = function () {
  return {
    paths: "exact",
    queryParams: "ignored",
    matrixParams: "ignored",
    fragment: "ignored"
  };
};
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.class)("routerLink", ctx_r2.item.routerLink)("routerLinkActiveOptions", ctx_r2.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("fragment", ctx_r2.item.fragment)("queryParamsHandling", ctx_r2.item.queryParamsHandling)("preserveFragment", ctx_r2.item.preserveFragment)("skipLocationChange", ctx_r2.item.skipLocationChange)("replaceUrl", ctx_r2.item.replaceUrl)("state", ctx_r2.item.state)("queryParams", ctx_r2.item.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r2.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r11.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r11)("index", i_r12)("parentKey", ctx_r10.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r3.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(params => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
_class = AppMenuitemComponent;
_class.ɵfac = function AppMenuitemComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["", "app-menuitem", ""]],
  hostVars: 4,
  hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  },
  inputs: {
    item: "item",
    index: "index",
    root: "root",
    parentKey: "parentKey"
  },
  attrs: _c0,
  decls: 5,
  vars: 4,
  consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
  template: function AppMenuitemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _class],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
  }
});

/***/ }),

/***/ 9692:
/*!***********************************************************!*\
  !*** ./src/app/layout/shared/prime-ng/prime-ng.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeNgModule: () => (/* binding */ PrimeNgModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 9177);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ 5583);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 5362);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/multiselect */ 7524);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/messages */ 9404);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/skeleton */ 2953);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/splitbutton */ 4323);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/breadcrumb */ 1500);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/autofocus */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





























class PrimeNgModule {}
_class = PrimeNgModule;
_class.ɵfac = function PrimeNgModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService, primeng_messages__WEBPACK_IMPORTED_MODULE_2__.MessagesModule],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__.MultiSelectModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__.FieldsetModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule, primeng_messages__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__.SkeletonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__.SplitButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_25__.MenuModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__.AutoFocusModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNgModule, {
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__.MultiSelectModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__.FieldsetModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule, primeng_messages__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__.SkeletonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__.SplitButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_25__.MenuModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__.AutoFocusModule]
  });
})();

/***/ }),

/***/ 1554:
/*!****************************************************************!*\
  !*** ./src/app/layout/shared/sidebar/app.sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarComponent: () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 3859);
/* harmony import */ var _menu_app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/app.menu.component */ 75);
var _class;



class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
}
_class = AppSidebarComponent;
_class.ɵfac = function AppSidebarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-sidebar"]],
  decls: 1,
  vars: 0,
  template: function AppSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu");
    }
  },
  dependencies: [_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
  encapsulation: 2
});

/***/ }),

/***/ 7905:
/*!**************************************************************!*\
  !*** ./src/app/layout/shared/topbar/app.topbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTopBarComponent: () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/usuario.service */ 1063);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 8062);
/* harmony import */ var src_app_services_window_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window-size.service */ 7342);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/app.layout.service */ 3859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 2947);
var _class;











const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
function AppTopBarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toogleTarea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", !ctx_r0.xs ? "Pausar jornada" : "");
  }
}
const _c3 = function (a0) {
  return {
    "flex-row-reverse": a0
  };
};
const _c4 = function (a0) {
  return {
    "layout-topbar-menu-mobile-active": a0
  };
};
const _c5 = function () {
  return ["/auth/login"];
};
class AppTopBarComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.windowSizeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_window_size_service__WEBPACK_IMPORTED_MODULE_2__.WindowSizeService);
    this.subs = [];
    this.estadotjornadaIniciada = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.subs.push(this.usuarioService.comprobarTimeUsuario(this.usuario.id).subscribe({
      next: response => {
        console.log(response);
        this.jornadaIniciada = response.jornadaIniciada;
        this.emitir();
      },
      error: error => {
        console.log(error);
        this.messageService.error(error.error.detail);
        this.router.navigateByUrl('/auth/login');
      }
    }));
    this.subs.push(this.windowSizeService.windowSize$().subscribe(pantalla => {
      this.xs = pantalla === 'xs';
      this.sm = pantalla === 'sm';
      this.md = pantalla === 'md';
    }));
  }
  toogleTarea() {
    if (this.jornadaIniciada) {
      this.subs.push(this.usuarioService.pausarTimeUsuario(this.usuario.id).subscribe({
        next: response => {
          console.log(response);
          this.jornadaIniciada = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'La jornada a sido pausada'
          });
          this.emitir();
        },
        error: error => {
          console.log(error);
          this.messageService.error(error.error.detail);
        }
      }));
    } else {
      this.subs.push(this.usuarioService.iniciarTimeUsuario(this.usuario.id).subscribe({
        next: response => {
          console.log(response);
          this.jornadaIniciada = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Exito',
            detail: 'La jornada a sido iniciada'
          });
          this.emitir();
        },
        error: error => {
          console.log(error);
          this.messageService.error(error.error.detail);
        }
      }));
    }
  }
  emitir() {
    this.estadotjornadaIniciada.emit(this.jornadaIniciada);
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = AppTopBarComponent;
_class.ɵfac = function AppTopBarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-topbar"]],
  viewQuery: function AppTopBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.topbarMenuButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    }
  },
  inputs: {
    jornadaIniciada: "jornadaIniciada"
  },
  outputs: {
    estadotjornadaIniciada: "estadotjornadaIniciada"
  },
  decls: 19,
  vars: 9,
  consts: [[1, "layout-topbar"], [1, "flex", 3, "ngClass"], ["routerLink", "", 1, "layout-topbar-logo", "w-max"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pause", "class", "p-button-rounded p-button-danger ml-4", 3, "label", "click", 4, "ngIf"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], ["topbarmenubutton", ""], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["topbarmenu", ""], [1, "p-link", "layout-topbar-button"], [1, "pi", "pi-user"], [1, "p-link", "layout-topbar-button", 3, "routerLink"], [1, "pi", "pi-external-link"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pause", 1, "p-button-rounded", "p-button-danger", "ml-4", 3, "label", "click"]],
  template: function AppTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "GADES FUSI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppTopBarComponent_button_5_Template, 1, 1, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_6_listener() {
        return ctx.layoutService.showProfileSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7, 8)(11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c3, ctx.sm || ctx.xs || ctx.md));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.jornadaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c4, ctx.layoutService.state.profileSidebarVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c5));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective],
  encapsulation: 2
});

/***/ }),

/***/ 5498:
/*!***********************************************!*\
  !*** ./src/app/services/almacenes.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlmacenesService: () => (/* binding */ AlmacenesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
var _class;




class AlmacenesService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getAlmacenes() {
    const url = this.API_URL + `/almacenes`;
    return this.http.get(url);
  }
  getAlmacenesPaginados(url) {
    return this.http.get(url);
  }
  getAlmacen(id) {
    const url = this.API_URL + `/almacen/${id}`;
    return this.http.get(url);
  }
  createAlmacen(newPresupeusto) {
    const url = this.API_URL + `/almacen`;
    return this.http.post(url, newPresupeusto);
  }
  editAlmacen(newPresupeusto) {
    const url = this.API_URL + `/almacen`;
    return this.http.put(url, newPresupeusto);
  }
  deleteAlmacen(id) {
    const url = this.API_URL + `/almacen/${id}`;
    return this.http.delete(url);
  }
}
_class = AlmacenesService;
_class.ɵfac = function AlmacenesService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2347:
/*!***********************************************************!*\
  !*** ./src/app/services/auth/auth-interceptor.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptorService: () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.service */ 1063);
var _class;






class AuthInterceptorService {
  constructor(router, usuarioService) {
    this.router = router;
    this.usuarioService = usuarioService;
  }
  intercept(req, next) {
    this.usuarioService.verificarCaducudadToken();
    const token = localStorage.getItem('token');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().append('Content-Type', 'application/json').append('authorization', `Bearer ${token}`);
    // .append('Access-Control-Allow-Origin', '"*"')
    console.log('ENTRA EN INTERCEPTOR');
    let request = req;
    if (token) {
      request = req.clone({
        headers
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      if (err.status === 401) {
        this.router.navigateByUrl('/auth/login');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
    }));
  }
}
_class = AuthInterceptorService;
_class.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1063:
/*!**************************************************!*\
  !*** ./src/app/services/auth/usuario.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioService: () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;





// import Swal from 'sweetalert2'
class UsuarioService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
    this.ejecutarRefresh = true;
  }
  refreshToken() {
    const refresh_token = localStorage.getItem('refresh_token') || '';
    const url = this.API_URL + `/token/refresh`;
    const refresh = {
      refresh_token: refresh_token
    };
    return this.http.post(url, refresh).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(resp => {
      this.guardarStorage(resp.token, resp.refresh_token, resp.data);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => true)
    // catchError(err => of(false))
    );
  }

  guardarStorage(token, refresh_token, usuario) {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  removeStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('urldebusqueda');
  }
  login(formdata) {
    // console.log('log-data =>', formdata);
    console.log(formdata);
    // localStorage.setItem('username', formdata)
    const url = this.API_URL + `/login_check`;
    return this.http.post(url, formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(resp => {
      this.guardarStorage(resp.token, resp.refresh_token, resp.data);
    }));
  }
  logout() {
    this.removeStorage();
    this.router.navigateByUrl('/auth/login');
  }
  verificarCaducudadToken() {
    let token = localStorage.getItem('token');
    if (token) {
      let payload = JSON.parse(atob(token.split('.')[1]));
      let expirado = this.expirado(payload.exp);
      if (expirado) {
        console.log('LOGIN EXPIRADO');
        this.logout();
        return;
      }
      this.verificaRenueva(payload.exp);
    }
  }
  verificaRenueva(fechaExp) {
    let tokenExp = new Date(fechaExp * 1000);
    let ahora = new Date();
    ahora.setTime(ahora.getTime() + 30 * 60 * 1000);
    // console.log('Hora del Token', tokenExp);
    // console.log('Hora actual', ahora);
    if (this.ejecutarRefresh) {
      if (tokenExp.getTime() < ahora.getTime()) {
        this.ejecutarRefresh = false;
        this.refreshToken().subscribe(respuesta => {
          this.ejecutarRefresh = true;
        }, err => {
          this.ejecutarRefresh = true;
          // console.log(err);
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'error',
          //   title: 'Refresh Token',
          //   html: 'Tenemos problemas al refrescar el token.',
          //   showConfirmButton: false,
          //   timer: 4000
          // })
        });
      }
    }
  }

  expirado(fechaExp) {
    // getTime nos llega en milisegundos por eso lo dividimos entre 1000
    let ahora = new Date().getTime() / 1000;
    // console.log(ahora);
    // ahora = ahora + 3730;
    // console.log('ahora = ', ahora);
    // console.log('fechaExp = ', fechaExp);
    // console.log('fechaExp - ahora = ', fechaExp - ahora);
    // console.log('fechaExp < ahora = ',fechaExp < ahora);
    if (fechaExp < ahora) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }
  changePassword(formdata) {
    console.log(formdata);
    const url = this.API_URL + `/users/change-password`;
    return this.http.post(url, formdata);
  }
  // -----------------------------------------------------------------------------------------------
  iniciarTimeUsuario(id) {
    const url = this.API_URL + `/time_usuarios_inicio`;
    return this.http.post(url, {
      id: id
    });
  }
  pausarTimeUsuario(id) {
    const url = this.API_URL + `/time_usuarios_pausa`;
    return this.http.post(url, {
      id: id
    });
  }
  comprobarTimeUsuario(id) {
    const url = this.API_URL + `/time_usuarios_comprobar`;
    return this.http.post(url, {
      id: id
    });
  }
}
_class = UsuarioService;
_class.ɵfac = function UsuarioService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8062:
/*!****************************************************!*\
  !*** ./src/app/services/custom-message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMessageService: () => (/* binding */ CustomMessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 8026);
var _class;



class CustomMessageService {
  constructor() {
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService);
  }
  add(message) {
    // let messageConfig: SweetAlertOptions = {
    //   title: `<strong>${message.summary}</strong>`,
    //   icon: message.severity,
    //   text: message.detail,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   toast: true,
    //   position: 'top-right',
    //   timer: 4000,
    //   background: '#343e4d',
    //   color: '#ffffff',
    // };
    // Swal.fire(messageConfig);
    this.messageService.add({
      severity: message.severity,
      summary: message.summary,
      detail: message.detail
    });
  }
  error(detail) {
    // let messageConfig: SweetAlertOptions = {
    //   title: `<strong>ERROR</strong>`,
    //   icon: 'error',
    //   text: detail,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   toast: true,
    //   position: 'top-right',
    //   timer: 4000,
    //   background: '#343e4d',
    //   color: '#ffffff',
    // };
    // Swal.fire(messageConfig);
    this.messageService.add({
      severity: 'error',
      summary: 'ERROR',
      detail: detail
    });
  }
  win(detail) {
    // let messageConfig: SweetAlertOptions = {
    //   title: `<strong>EXITO</strong>`,
    //   icon: 'success',
    //   text: detail,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   toast: true,
    //   position: 'top-right',
    //   timer: 4000,
    //   background: '#343e4d',
    //   color: '#ffffff',
    // };
    // Swal.fire(messageConfig);
    this.messageService.add({
      severity: 'success',
      summary: 'EXITO',
      detail: detail
    });
  }
  alert(detail) {
    // let messageConfig: SweetAlertOptions = {
    //   title: `<strong>ALERTA</strong>`,
    //   icon: 'warning',
    //   text: detail,
    //   showCloseButton: true,
    //   showConfirmButton: false,
    //   toast: true,
    //   position: 'top-right',
    //   timer: 4000,
    //   background: '#343e4d',
    //   color: '#ffffff',
    // };
    // Swal.fire(messageConfig);
    this.messageService.add({
      severity: 'warn',
      summary: 'ALERTA',
      detail: detail
    });
  }
}
_class = CustomMessageService;
_class.ɵfac = function CustomMessageService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8241:
/*!******************************************!*\
  !*** ./src/app/services/enum.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnumService: () => (/* binding */ EnumService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
var _class;




class EnumService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getEnum(enumToSearch) {
    const url = this.API_URL + `/util/enum/${enumToSearch}`;
    return this.http.get(url);
  }
}
_class = EnumService;
_class.ɵfac = function EnumService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7098:
/*!***********************************************!*\
  !*** ./src/app/services/mercancia.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MercanciaService: () => (/* binding */ MercanciaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class MercanciaService {
  constructor(http) {
    this.http = http;
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getMercanciaFromBarcode(codigoEan) {
    const url = this.API_URL + `/producto/verificar_codigo_ean/${codigoEan}`;
    return this.http.get(url);
  }
  createMercancia(newMercancia) {
    const url = this.API_URL + `/mercancia`;
    return this.http.post(url, newMercancia);
  }
  getMercancias() {
    const url = this.API_URL + `/mercancias`;
    return this.http.get(url);
  }
  getMercanciasPaginadas(url) {
    return this.http.get(url);
  }
  getMercanciasByProducto(idProducto) {
    const url = this.API_URL + `/mercancias/producto/${idProducto}`;
    return this.http.get(url);
  }
  // getMercanciasByUbi(idMerc): Observable<Mercancia[]> {
  //   const url = this.API_URL + `/mercancias/ubicacion/${idMerc}`;
  //   return this.http.get<Mercancia[]>(url);
  // }
  actualizarStock(body) {
    const url = this.API_URL + `/producto/cambiar_stock`;
    return this.http.post(url, body);
  }
  cambiarStockEnUbi(body) {
    const url = this.API_URL + `/mercancia_ubicacion`;
    return this.http.put(url, body);
  }
  cambiarPrecioMerca(body) {
    const url = this.API_URL + `/mercancia`;
    return this.http.put(url, body);
  }
  getMercanciasByUbicacion(idUbi) {
    const url = this.API_URL + `/mercancias/ubicacion/${idUbi}`;
    return this.http.get(url);
  }
}
_class = MercanciaService;
_class.ɵfac = function MercanciaService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8862:
/*!*********************************************!*\
  !*** ./src/app/services/ordenes.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesService: () => (/* binding */ OrdenesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
var _class;




class OrdenesService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getOrdenesCompras() {
    const url = this.API_URL + `/ordenes_compras`;
    return this.http.get(url);
  }
  getOrdenesComprasPaginadas(url) {
    return this.http.get(url);
  }
  getOrdenCompra(id) {
    const url = this.API_URL + `/orden_compra/${id}`;
    return this.http.get(url);
  }
  createOrdenCompra(newPresupeusto) {
    const url = this.API_URL + `/orden_compra`;
    return this.http.post(url, newPresupeusto);
  }
  editOrdenCompra(newPresupeusto) {
    const url = this.API_URL + `/orden_compra`;
    return this.http.put(url, newPresupeusto);
  }
  deleteOrdenCompra(id) {
    const url = this.API_URL + `/orden_compra/${id}`;
    return this.http.delete(url);
  }
  //-------------------------------------------------------------------------------------------
  getLineasOrdenesComprasDisponibles() {
    const url = this.API_URL + `/ordenes_compras_lineas_disponibles`;
    return this.http.get(url);
  }
  getLineasOrdenesComprasByOrdenCompra(id) {
    const url = this.API_URL + `/ordenes_compras/ordenes_compras_lineas/${id}`;
    return this.http.get(url);
  }
  createLineaOrdenCompra(newLineaOrdenCompra) {
    const url = this.API_URL + `/orden_compra_linea`;
    return this.http.post(url, newLineaOrdenCompra);
  }
  editLineaOrdenCompra(newLineaOrdenCompra) {
    const url = this.API_URL + `/orden_compra_linea`;
    return this.http.put(url, newLineaOrdenCompra);
  }
  deleteLineaOrdenCompra(id) {
    const url = this.API_URL + `/orden_compra_linea/${id}`;
    return this.http.delete(url);
  }
  agregarOrdenesComprasAOrden(body) {
    const url = this.API_URL + `/orden_compra/ordenes_compras_lineas`;
    return this.http.post(url, body);
  }
  getCantidadDeOrdenCompra(requestJson) {
    const url = this.API_URL + `/orden_compra_linea/cantidad`;
    return this.http.post(url, requestJson);
  }
}
_class = OrdenesService;
_class.ɵfac = function OrdenesService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8369:
/*!*************************************************!*\
  !*** ./src/app/services/presupuesto.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresupuestoService: () => (/* binding */ PresupuestoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
var _class;




class PresupuestoService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getPresupuestos() {
    const url = this.API_URL + `/presupuestos`;
    return this.http.get(url);
  }
  getPresupuesto(id) {
    const url = this.API_URL + `/presupuesto/${id}`;
    return this.http.get(url);
  }
  createPresupuesto(newPresupeusto) {
    const url = this.API_URL + `/presupuesto`;
    return this.http.post(url, newPresupeusto);
  }
  editPresupuesto(newPresupeusto) {
    const url = this.API_URL + `/presupuesto`;
    return this.http.put(url, newPresupeusto);
  }
  deletePresupuesto(id) {
    const url = this.API_URL + `/presupuesto/${id}`;
    return this.http.delete(url);
  }
  //-------------------------------------------------------------------------------------------
  getLineasPresupuestosByPresupuesto(id) {
    const url = this.API_URL + `/presupuestos/presupuesto_linea/${id}`;
    return this.http.get(url);
  }
  createLineaPresupuesto(newLineaPresupuesto) {
    const url = this.API_URL + `/presupuesto_linea`;
    return this.http.post(url, newLineaPresupuesto);
  }
  deleteLineaPresupuesto(id) {
    const url = this.API_URL + `/presupuesto_linea/${id}`;
    return this.http.delete(url);
  }
}
_class = PresupuestoService;
_class.ɵfac = function PresupuestoService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5466:
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductoService: () => (/* binding */ ProductoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class ProductoService {
  constructor(http) {
    this.http = http;
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getTiposProducto() {
    const url = this.API_URL + `/tipos_productos`;
    return this.http.get(url);
  }
  // getTiposProductoPrueba(): string[] {
  //   const tiposProductoPrueba: string[] = ['tiempo', 'documentacion', 'finalizacion'];
  //   return tiposProductoPrueba;
  // }
  createProducto(newProducto) {
    const url = this.API_URL + `/producto`;
    return this.http.post(url, newProducto);
  }
  getProductos() {
    const url = this.API_URL + `/productos`;
    return this.http.get(url);
  }
  getProducto(id) {
    const url = this.API_URL + `/producto/${id}`;
    return this.http.get(url);
  }
  // getProductosPrueba(): Producto[] {
  //   // const url = this.API_URL + `/productos`;
  //   // return this.http.get<Producto[]>(url);
  //   const productosPrueba: Producto[] = [
  //     {
  //       id: 112,
  //       nombre: 'Nombre Prueba 1',
  //       descripcionFactura: 'descripcionFactura Prueba 1',
  //       descripcionInterna: 'descripcionInterna Prueba 1',
  //       pvp: 12,
  //       codigoEan: '1478348972348',
  //       compuestoSn: 'No',
  //       tipoProducto: ['1'],
  //     },
  //     {
  //       id: 234,
  //       nombre: 'Nombre Prueba 2',
  //       descripcionFactura: 'descripcionFactura Prueba 2',
  //       descripcionInterna: 'descripcionInterna Prueba 2',
  //       pvp: 12,
  //       codigoEan: '1478348972349',
  //       compuestoSn: 'No',
  //       tipoProducto: ['1'],
  //     },
  //   ];
  //   return productosPrueba;
  // }
  generarBarcode(newProducto) {
    const url = this.API_URL + `/producto_barcode`;
    return this.http.post(url, newProducto);
  }
  editarProducto(productoEditado) {
    const url = this.API_URL + `/producto`;
    return this.http.put(url, productoEditado);
  }
  eliminarProducto(id) {
    const url = this.API_URL + `/producto/${id}`;
    console.log('eliminando producto en => ', url);
    return this.http.delete(url);
  }
}
_class = ProductoService;
_class.ɵfac = function ProductoService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8500:
/*!*********************************************!*\
  !*** ./src/app/services/pruebas.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PruebasService: () => (/* binding */ PruebasService)
/* harmony export */ });
/* harmony import */ var _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/tarea.interface */ 1693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class PruebasService {
  constructor(http) {
    this.http = http;
    // private API_URL = environment.API_URL;
    // CRUD TAREAS
    this.tareas = [{
      id: 1,
      nombre: 'Nombre Prueba 1',
      tipoTarea: {
        id: 1,
        nombre: 'nombre tipotarea1',
        descripcion: 'descripcion tipotarea1'
      }
    }, {
      id: 2,
      nombre: 'Nombre Prueba 2',
      tipoTarea: {
        id: 2,
        nombre: 'nombre tipotarea2',
        descripcion: 'descripcion tipotarea2'
      }
    }, {
      id: 3,
      nombre: 'Nombre Prueba 3',
      tipoTarea: {
        id: 3,
        nombre: 'nombre tipotarea3',
        descripcion: 'descripcion tipotarea3'
      }
    }];
    this.ordenesDeTrabajo = [{
      id: 1,
      nombre: 'nombre ordentrabajo1',
      descripcion: 'descripcion ordentrabajo1',
      rrhh: {
        id: 1,
        nombre: 'persona 1'
      },
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      lineasTareas: [{
        id: 1,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea1',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[0]
      }, {
        id: 2,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea2',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[1]
      }]
    }, {
      id: 2,
      nombre: 'nombre ordentrabajo2',
      descripcion: 'descripcion ordentrabajo2',
      rrhh: {
        id: 2,
        nombre: 'persona 2'
      },
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      lineasTareas: [{
        id: 1,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea1',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[0]
      }, {
        id: 2,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea2',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[1]
      }]
    }, {
      id: 3,
      nombre: 'nombre ordentrabajo3',
      descripcion: 'descripcion ordentrabajo3',
      rrhh: {
        id: 3,
        nombre: 'persona 3'
      },
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      lineasTareas: [{
        id: 1,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea1',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[0]
      }, {
        id: 2,
        accion: 'accion lineatarea1',
        descripcion: 'descripcion lineatarea2',
        estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
        tarea: this.tareas[1]
      }]
    }];
    this.lineasTareas = [{
      id: 1,
      accion: 'accion lineatarea1',
      descripcion: 'descripcion lineatarea1',
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      tarea: this.tareas[0],
      ordenTrabajo: this.ordenesDeTrabajo[0]
    }, {
      id: 2,
      accion: 'accion lineatarea1',
      descripcion: 'descripcion lineatarea2',
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      tarea: this.tareas[1],
      ordenTrabajo: this.ordenesDeTrabajo[0]
    }, {
      id: 3,
      accion: 'accion lineatarea1',
      descripcion: 'descripcion lineatarea3',
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      tarea: this.tareas[2],
      ordenTrabajo: this.ordenesDeTrabajo[0]
    }, {
      id: 4,
      accion: 'accion lineatarea1',
      descripcion: 'descripcion lineatarea4',
      estado: _interfaces_tarea_interface__WEBPACK_IMPORTED_MODULE_0__.EstadoFinalizado.iniciado,
      tarea: this.tareas[3],
      ordenTrabajo: this.ordenesDeTrabajo[0]
    }];
    this.presupuestos = [{
      id: 1,
      nombre: 'Presupuesto 1',
      descripcion: 'Descripción del presupuesto 1',
      fechaPrevista: '2023-10-15',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }, {
      id: 2,
      nombre: 'Presupuesto 2',
      descripcion: 'Descripción del presupuesto 2',
      fechaPrevista: '2023-10-20',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }, {
      id: 3,
      nombre: 'Presupuesto 3',
      descripcion: 'Descripción del presupuesto 3',
      fechaPrevista: '2023-10-25',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }, {
      id: 4,
      nombre: 'Presupuesto 4',
      descripcion: 'Descripción del presupuesto 4',
      fechaPrevista: '2023-10-30',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }, {
      id: 5,
      nombre: 'Presupuesto 5',
      descripcion: 'Descripción del presupuesto 5',
      fechaPrevista: '2023-11-05',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }, {
      id: 6,
      nombre: 'Presupuesto6',
      descripcion: 'Descripcion del presupuesto6',
      fechaPrevista: '2023-11-10',
      estado: 'En proceso',
      estadoFacturacion: 'Pendiente'
    }];
  }
  // private productos: Producto[] = [
  //   {
  //     id: 1,
  //     nombre: 'Producto 1',
  //     descripcionInterna: 'Descripción interna del producto 1',
  //     descripcionFactura: 'Descripción para la factura del producto 1',
  //     compuestoSn: 'Si',
  //     pvp: 10.99,
  //     codigoEan: '1234567890123',
  //     tipoProducto: ['tiempo', 'documentacion'],
  //     categoria_producto_id: 1,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Producto 2',
  //     descripcionInterna: 'Descripción interna del producto 2',
  //     descripcionFactura: 'Descripción para la factura del producto 2',
  //     compuestoSn: 'No',
  //     pvp: 5.99,
  //     codigoEan: '1234567890124',
  //     categoria_producto_id: 2,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Producto 3',
  //     descripcionInterna: 'Descripción interna del producto 3',
  //     descripcionFactura: 'Descripción para la factura del producto 3',
  //     compuestoSn: 'Si',
  //     pvp: 15.99,
  //     codigoEan: '1234567890125',
  //     tipoProducto: ['finalizacion'],
  //     categoria_producto_id: 3,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 4,
  //     nombre: 'Producto 4',
  //     descripcionInterna: 'Descripción interna del producto 4',
  //     descripcionFactura: 'Descripción para la factura del producto 4',
  //     compuestoSn: 'No',
  //     pvp: 7.99,
  //     codigoEan: '1234567890126',
  //     categoria_producto_id: 4,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 5,
  //     nombre: 'Producto 5',
  //     descripcionInterna: 'Descripción interna del producto 5',
  //     descripcionFactura: 'Descripción para la factura del producto 5',
  //     compuestoSn: 'Si',
  //     pvp: 20.99,
  //     codigoEan: '1234567890127',
  //     tipoProducto: ['Tipo 4', 'Tipo 5'],
  //     categoria_producto_id: null,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 6,
  //     nombre: 'Producto6',
  //     descripcionInterna: 'Descripcion interna del producto6',
  //     descripcionFactura: 'Descripcion para la factura del producto6',
  //     compuestoSn: 'No',
  //     pvp: 12.99,
  //     codigoEan: '1234567890128',
  //     categoria_producto_id: null,
  //     imagen: 'https://via.placeholder.com/150',
  //   },
  // ];
  getTiposTarea() {
    return ['tiempo', 'documentacion', 'finalizacion', 'pre_rec'];
  }
  // createTarea(newTarea: TareaPost): Tarea {
  //   let tareaNueva = {
  //     id: this.tareas.length + 1,
  //     nombre: newTarea.nombre,
  //     descripcion: newTarea.descripcion,
  //   };
  //   this.tareas.push(tareaNueva);
  //   return tareaNueva;
  // }
  getTareas() {
    return this.tareas;
  }
  getTareasPaginadas(page, itemsPerPage) {
    return this.tareas;
  }
  getTarea(id) {
    return this.tareas.find(tarea => tarea.id == id);
  }
  // editarTarea(tareaEditada: Tarea): Tarea {
  //   let idTareaOriginal = this.tareas.findIndex(
  //     (tarea) => tarea.id == tareaEditada.id
  //   );
  //   this.tareas[idTareaOriginal] = tareaEditada;
  //   return tareaEditada;
  // }
  // eliminarTarea(id: number): Tarea {
  //   let idTareaAEliminar = this.tareas.findIndex((tarea) => tarea.id == id);
  //   let tareaEliminada = this.tareas[idTareaAEliminar];
  //   this.tareas.splice(idTareaAEliminar, 1);
  //   let i = 0;
  //   this.tareas.forEach((tarea) => {
  //     i++;
  //     tarea.id = i;
  //   });
  //   return tareaEliminada;
  // }
  getTiposTareas() {
    return [{
      id: 1,
      nombre: 'nombre tipotarea1',
      descripcion: 'descripcion tipotarea1'
    }, {
      id: 2,
      nombre: 'nombre tipotarea2',
      descripcion: 'descripcion tipotarea2'
    }, {
      id: 3,
      nombre: 'nombre tipotarea3',
      descripcion: 'descripcion tipotarea3'
    }, {
      id: 4,
      nombre: 'nombre tipotarea4',
      descripcion: 'descripcion tipotarea4'
    }];
  }
  //CRUD LINEAS DE TAREA
  getLineasTareas() {
    return this.lineasTareas;
  }
  getLineaTarea(id) {
    console.log(`buscando la linea tarea con el id: ${id} en => `, this.lineasTareas);
    return this.lineasTareas.find(lineaTarea => lineaTarea.id == id);
  }
  getLineasTareasFromTarea(id) {
    return this.lineasTareas.filter(lineaTarea => lineaTarea.tarea.id == id);
  }
  // createLineaTarea(newLineaTarea: LineaTareaPost): LineaTarea {
  //   let lineaTareaNueva: LineaTarea = {
  //     id: this.lineasTareas.length + 1,
  //     accion: newLineaTarea.accion,
  //     descripcion: newLineaTarea.descripcion,
  //     tarea: this.tareas[0],
  //     estado: EstadoFinalizado.iniciado,
  //   };
  //   this.lineasTareas.push(lineaTareaNueva);
  //   return lineaTareaNueva;
  // }
  // eliminarLineaTarea(id: number): LineaTarea {
  //   let idLineaTareaAEliminar = this.lineasTareas.findIndex(
  //     (lineaTarea) => lineaTarea.id == id
  //   );
  //   let lineaTareaEliminada = this.lineasTareas[idLineaTareaAEliminar];
  //   this.lineasTareas.splice(idLineaTareaAEliminar, 1);
  //   let i = 0;
  //   this.lineasTareas.forEach((lineaTarea) => {
  //     i++;
  //     lineaTarea.id = i;
  //   });
  //   return lineaTareaEliminada;
  // }
  // getLineasTareasSinOrdenTrabajo(): LineaTarea[] {
  //   return this.lineasTareas.filter(
  //     (lineaTarea) =>
  //       lineaTarea.ordenTrabajo == null ||
  //       lineaTarea.ordenTrabajo == undefined
  //   );
  // }
  // CRUD ORDENES DE TRABAJO
  getOrdenesTrabajos() {
    return this.ordenesDeTrabajo;
  }
  getOrdenTrabajo(id) {
    return this.ordenesDeTrabajo.find(ordenTrabajo => ordenTrabajo.id == id);
  }
  // getOrdenesTrabajosFromLineaTarea(id: number): OrdenTrabajo[] {
  //   const url = `/lineas_tareas/tarea/${id}`
  //   return this.http.get<OrdenTrabajo[]>(url);
  // }
  // createOrdenTrabajo(newOrdenTrabajo: OrdenTrabajoPost): OrdenTrabajo {
  //   let ordenTrabajoNueva: OrdenTrabajo = {
  //     id: this.ordenesDeTrabajo.length + 1,
  //     nombre: newOrdenTrabajo.nombre,
  //     descripcion: newOrdenTrabajo.descripcion,
  //     estado: EstadoFinalizado.iniciado,
  //     rrhh: newOrdenTrabajo.rrhh,
  //     lineasTareas: this.lineasTareas.filter(lineaTarea => newOrdenTrabajo.idsLineasTareas.includes(lineaTarea.id))
  //   };
  //   this.ordenesDeTrabajo.push(ordenTrabajoNueva);
  //   return ordenTrabajoNueva;
  // }
  // agregarTareasAOrden(lineaTarea: LineaTarea): OrdenTrabajo {
  //   this.ordenesDeTrabajo.find(orden => lineaTarea.ordenTrabajo.id ==)
  // }
  // quitarTareasDeOrden(id: number): OrdenTrabajo {
  //   const url = `/lineas_tareas/quitar_orden/${id}`;
  //   return this.http.put<OrdenTrabajo>(url, {});
  // }
  // editarOrdenTrabajo(newOrdenTrabajo: OrdenTrabajo): OrdenTrabajo {
  //   const url = `/orden_trabajo`;
  //   return this.http.put<OrdenTrabajo>(url, newOrdenTrabajo);
  // }
  // getOrdenesTrabajosDe(id: number): OrdenTrabajo[] {
  //   const url = `/ordenes_trabajo/usuario/${id}`;
  //   return this.http.get<OrdenTrabajo[]>(url);
  // }
  // eliminarOrdenTrabajo(id: number): OrdenTrabajo {
  //   const url = `/lineas_tarea/${id}`;
  //   return this.http.delete<OrdenTrabajo>(url);
  // }
  getPresupuestos() {
    return this.presupuestos;
  }
}
_class = PruebasService;
_class.ɵfac = function PruebasService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2814:
/*!*******************************************!*\
  !*** ./src/app/services/tarea.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TareaService: () => (/* binding */ TareaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class TareaService {
  constructor(http) {
    this.http = http;
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  // CRUD TAREAS
  getTiposTarea() {
    const url = this.API_URL + `/tipos_tareas`;
    return this.http.get(url);
  }
  // getTiposTareaPrueba(): string[] {
  //   const tiposTareaPrueba: string[] = ['tiempo', 'documentacion', 'finalizacion'];
  //   return tiposTareaPrueba;
  // }
  createTarea(newTarea) {
    const url = this.API_URL + `/tarea`;
    return this.http.post(url, newTarea);
  }
  getTareas() {
    const url = this.API_URL + `/tareas`;
    return this.http.get(url);
  }
  getTareasPaginadas(page, itemsPerPage) {
    const url = this.API_URL + `/tareas_paginate?page=${page}&itemsPerPage=${itemsPerPage}`;
    return this.http.get(url);
  }
  getTarea(id) {
    const url = this.API_URL + `/tarea/${id}`;
    return this.http.get(url);
  }
  // getTareasPrueba(): Tarea[] {
  //   // const url = this.API_URL + `/tareas`;
  //   // return this.http.get<Tarea[]>(url);
  //   const tareasPrueba: Tarea[] = [
  //     {
  //       id: 112,
  //       nombre: 'Nombre Prueba 1',
  //       descripcionFactura: 'descripcionFactura Prueba 1',
  //       descripcionInterna: 'descripcionInterna Prueba 1',
  //       pvp: 12,
  //       codigoEan: '1478348972348',
  //       compuestoSn: 'No',
  //       tipoTarea: ['1'],
  //     },
  //     {
  //       id: 234,
  //       nombre: 'Nombre Prueba 2',
  //       descripcionFactura: 'descripcionFactura Prueba 2',
  //       descripcionInterna: 'descripcionInterna Prueba 2',
  //       pvp: 12,
  //       codigoEan: '1478348972349',
  //       compuestoSn: 'No',
  //       tipoTarea: ['1'],
  //     },
  //   ];
  //   return tareasPrueba;
  // }
  editarTarea(tareaEditada) {
    const url = this.API_URL + `/tarea`;
    return this.http.put(url, tareaEditada);
  }
  eliminarTarea(id) {
    const url = this.API_URL + `/tarea/${id}`;
    return this.http.delete(url);
  }
  getTiposTareas() {
    const url = this.API_URL + `/tipos_tareas`;
    return this.http.get(url);
  }
  //CRUD LINEAS DE TAREA
  getLineasTareas() {
    const url = this.API_URL + `/lineas_tareas`;
    return this.http.get(url);
  }
  getLineaTarea(id) {
    const url = this.API_URL + `/lineas_tarea/${id}`;
    return this.http.get(url);
  }
  getLineasTareasFromTarea(id) {
    const url = this.API_URL + `/lineas_tareas/tarea/${id}`;
    return this.http.get(url);
  }
  createLineaTarea(newLineaTarea) {
    const url = this.API_URL + `/lineas_tarea`;
    return this.http.post(url, newLineaTarea);
  }
  eliminarLineaTarea(id) {
    const url = this.API_URL + `/lineas_tarea/${id}`;
    return this.http.delete(url);
  }
  editarLineaTarea(lineaTareaEditada) {
    const url = this.API_URL + `/lineas_tarea`;
    return this.http.put(url, lineaTareaEditada);
  }
  getLineasTareasSinOrdenTrabajo() {
    const url = this.API_URL + `/lineas_tareas_disponibles`;
    return this.http.get(url);
  }
  getImagenesLineaTarea(id) {
    const url = this.API_URL + `/lineas_tareas/imagenes/${id}`;
    return this.http.get(url);
  }
  subirImagenLineaTarea(imagen) {
    const url = this.API_URL + `/lineas_tareas_imagen`;
    return this.http.post(url, imagen);
  }
  borrarImagenLineaTarea(id) {
    const url = this.API_URL + `/lineas_tareas_imagen/${id}`;
    return this.http.delete(url);
  }
  finalizarTareaPadre(id) {
    const url = this.API_URL + `/lineas_tareas/estado`;
    return this.http.post(url, {
      id: id
    });
  }
  // CRUD ORDENES DE TRABAJO
  getOrdenesTrabajos() {
    const url = this.API_URL + `/ordenes_trabajo`;
    return this.http.get(url);
  }
  getOrdenTrabajo(id) {
    const url = this.API_URL + `/orden_trabajo/${id}`;
    return this.http.get(url);
  }
  // getOrdenesTrabajosFromLineaTarea(id: number): Observable<OrdenTrabajo[]> {
  //   const url = this.API_URL + `/lineas_tareas/tarea/${id}`
  //   return this.http.get<OrdenTrabajo[]>(url);
  // }
  createOrdenTrabajo(newOrdenTrabajo) {
    const url = this.API_URL + `/orden_trabajo`;
    return this.http.post(url, newOrdenTrabajo);
  }
  agregarTareasAOrden(lineasTareas) {
    const url = this.API_URL + `/orden_trabajo/lineas_tareas`;
    return this.http.post(url, lineasTareas);
  }
  quitarTareasDeOrden(id) {
    const url = this.API_URL + `/lineas_tareas/quitar_orden/${id}`;
    return this.http.put(url, {});
  }
  editarOrdenTrabajo(newOrdenTrabajo) {
    const url = this.API_URL + `/orden_trabajo`;
    return this.http.put(url, newOrdenTrabajo);
  }
  getOrdenesTrabajosDe(id) {
    const url = this.API_URL + `/ordenes_trabajo/usuario/${id}`;
    return this.http.get(url);
  }
  // eliminarOrdenTrabajo(id: number): Observable<OrdenTrabajo> {
  //   const url = this.API_URL + `/lineas_tarea/${id}`;
  //   return this.http.delete<OrdenTrabajo>(url);
  // }
  getEstadoTimeTarea(id) {
    const url = this.API_URL + `/time_tareas_comprobar`;
    const body = {
      id: id
    };
    return this.http.post(url, body);
  }
  startTimeTarea(id) {
    const url = this.API_URL + `/time_tareas_inicio`;
    const body = {
      id: id
    };
    return this.http.post(url, body);
  }
  pauseTimeTarea(id) {
    const url = this.API_URL + `/time_tareas_pausa`;
    const body = {
      id: id
    };
    return this.http.post(url, body);
  }
  stopTimeTarea(id) {
    const url = this.API_URL + `/time_tareas_detener`;
    const body = {
      id: id
    };
    return this.http.post(url, body);
  }
  registrarPreRec(body) {
    const url = this.API_URL + `/lineas_tareas/pre_rec`;
    return this.http.post(url, body);
  }
  registrarMoviemientoParte1(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/movimiento/parte1`;
    return this.http.post(url, body);
  }
  registrarMoviemientoParte2(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/movimiento/parte2`;
    return this.http.post(url, body);
  }
}
_class = TareaService;
_class.ɵfac = function TareaService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9156:
/*!*************************************************!*\
  !*** ./src/app/services/ubicaciones.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UbicacionesService: () => (/* binding */ UbicacionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
var _class;




class UbicacionesService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getUbicaciones() {
    const url = this.API_URL + `/ubicaciones`;
    return this.http.get(url);
  }
  getUbicacion(id) {
    const url = this.API_URL + `/ubicacion/${id}`;
    return this.http.get(url);
  }
  createUbicacion(newUbicacion) {
    const url = this.API_URL + `/ubicacion`;
    return this.http.post(url, newUbicacion);
  }
  editUbicacion(newUbicacion) {
    const url = this.API_URL + `/ubicacion`;
    return this.http.put(url, newUbicacion);
  }
  deleteUbicacion(id) {
    const url = this.API_URL + `/ubicacion/${id}`;
    return this.http.delete(url);
  }
  getUbicacionesPaginadas(url) {
    return this.http.get(url);
  }
  getUbicacionesByAlmacen(idAlmacen) {
    const url = this.API_URL + `/ubicaciones/almacen/${idAlmacen}`;
    return this.http.get(url);
  }
}
_class = UbicacionesService;
_class.ɵfac = function UbicacionesService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7342:
/*!*************************************************!*\
  !*** ./src/app/services/window-size.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowSizeService: () => (/* binding */ WindowSizeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class WindowSizeService {
  constructor() {
    this.windowSize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getWindowSize());
    window.addEventListener('resize', () => {
      this.windowSize.next(this.getWindowSize());
    });
  }
  getWindowSize() {
    const width = window.innerWidth;
    if (width < 576) {
      return 'xs'; // Extra small devices (portrait phones, less than 576px)
    } else if (width < 768) {
      return 'sm'; // Small devices (landscape phones, 576px and up)
    } else if (width < 992) {
      return 'md'; // Medium devices (tablets, 768px and up)
    } else if (width < 1200) {
      return 'lg'; // Large devices (desktops, 992px and up)
    } else {
      return 'xl'; // Extra large devices (large desktops, 1200px and up)
    }
  }

  windowSize$() {
    return this.windowSize.asObservable();
  }
}
_class = WindowSizeService;
_class.ɵfac = function WindowSizeService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  //API_URL: 'http://rrhh.systemctl-service.com/api',
  //STORAGE_URL: 'http://rrhh.systemctl-service.com/storage/default/',
  API_URL: 'https://www.foca-back.systemctl-service.com/api',
  STORAGE_URL: 'https://www.foca-back.systemctl-service.com/storage/default/',
  AVATAR_URL: '../../../../../assets/img/img_avatar.png'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map