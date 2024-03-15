"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/notfound/notfound.component */ 62841);
/* harmony import */ var _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app.layout.component */ 79206);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _layout_ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/ordenes-trabajo/ordenes-trabajo.component */ 3776);
/* harmony import */ var _layout_mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/mostrar-tarea/mostrar-tarea.component */ 64388);
/* harmony import */ var _layout_gastos_gastos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/gastos/gastos.component */ 27954);
/* harmony import */ var _layout_pdv_pdv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/pdv/pdv.component */ 72668);
/* harmony import */ var _layout_ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component */ 34746);
/* harmony import */ var _layout_almacen_almacen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/almacen/almacen.component */ 70555);
/* harmony import */ var _layout_almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/almacen/ingresar-stock/ingresar-stock.component */ 58555);
/* harmony import */ var _layout_almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/almacen/crear-producto/crear-producto.component */ 55524);
/* harmony import */ var _layout_almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/almacen/crear-producto-propio/crear-producto-propio.component */ 23678);
/* harmony import */ var _layout_almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/almacen/escaner/escaner.component */ 78909);
/* harmony import */ var _layout_factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/factura-reader/factura-reader.component */ 30938);
/* harmony import */ var _layout_confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/confirmar-orden-compra/confirmar-orden-compra.component */ 8416);
/* harmony import */ var _layout_barcode_scanner_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/barcode-scanner/barcode-scanner.component */ 68026);
/* harmony import */ var _layout_confirmar_orden_compra_revisar_cantidad_linea_orden_compra_revisar_cantidad_linea_orden_compra_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/confirmar-orden-compra/revisar-cantidad-linea-orden-compra/revisar-cantidad-linea-orden-compra.component */ 73944);
/* harmony import */ var _layout_devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/devoluciones/devoluciones.component */ 88902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;





















class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot([{
    path: '',
    component: _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__.AppLayoutComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/dashboard/dashboard.module */ 18431)).then(m => m.DashboardModule)
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
      path: 'tarea/:id/:idOrden',
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
      path: 'confirmar-orden-compra',
      component: _layout_confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_14__.ConfirmarOrdenCompraComponent
    }, {
      path: 'reivisar-cantidad-linea-orden-compra/:idOrden/:ubiId',
      component: _layout_confirmar_orden_compra_revisar_cantidad_linea_orden_compra_revisar_cantidad_linea_orden_compra_component__WEBPACK_IMPORTED_MODULE_16__.RevisarCantidadLineaOrdenCompraComponent
    }, {
      path: 'finalizar-orden-compra/:idOrden',
      loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/confirmar-orden-compra/finalizar-orden-compra/finalizar-orden-compra.component */ 56996)).then(c => c.FinalizarOrdenCompraComponent)
    }, {
      path: 'ordenes-trabajos-historico',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_layout_ordenes-trabajo-historico_ordenes-trabajo-historico_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/ordenes-trabajo-historico/ordenes-trabajo-historico.component */ 74907)).then(c => c.OrdenesTrabajoHistoricoComponent)
    }, {
      path: 'factura-reader',
      component: _layout_factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_13__.FacturaReaderComponent
    }, {
      path: 'barcode-scanner',
      component: _layout_barcode_scanner_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_15__.BarcodeScannerComponent
    }, {
      path: 'devoluciones',
      component: _layout_devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_17__.DevolucionesComponent
    }]
  }, {
    path: 'auth',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 14788)).then(m => m.AuthModule)
  }, {
    path: '**',
    component: _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundComponent
  }], {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 68313);
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

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app.layout.module */ 84295);
/* harmony import */ var _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/notfound/notfound.component */ 62841);
/* harmony import */ var _services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth/auth-interceptor.service */ 2347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var _layout_confirmar_orden_compra_finalizar_orden_compra_finalizar_orden_compra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/confirmar-orden-compra/finalizar-orden-compra/finalizar-orden-compra.component */ 56996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;










class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _services_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptorService,
    multi: true
  }],
  imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__.PrimeNgModule, _layout_confirmar_orden_compra_finalizar_orden_compra_finalizar_orden_compra_component__WEBPACK_IMPORTED_MODULE_6__.FinalizarOrdenCompraComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layout_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__.NotfoundComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _layout_shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_5__.PrimeNgModule, _layout_confirmar_orden_compra_finalizar_orden_compra_finalizar_orden_compra_component__WEBPACK_IMPORTED_MODULE_6__.FinalizarOrdenCompraComponent]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/usuario.service */ 41063);
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

/***/ 70555:
/*!*****************************************************!*\
  !*** ./src/app/layout/almacen/almacen.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlmacenComponent: () => (/* binding */ AlmacenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
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
class AlmacenComponent {}
_class = AlmacenComponent;
_class.ɵfac = function AlmacenComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-almacen"]],
  decls: 22,
  vars: 12,
  consts: [[1, "grid"], [1, "col-6", "lg:col-3", "xl:col-3"], [1, "card", "mb-0", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-cart", "text-orange-500", "text-xl"], [1, "block", "text-500", "text-center", "font-medium", "mt-2"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-bag", "text-green-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-bag", "text-indigo-500", "text-xl"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23678:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/almacen/crear-producto-propio/crear-producto-propio.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearProductoPropioComponent: () => (/* binding */ CrearProductoPropioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/producto.service */ 65466);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/enum.service */ 58241);
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-compress */ 93500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function CrearProductoPropioComponent_div_1_div_30_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_30_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.cantidadAPoner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_30_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.agregarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.cantidadAPoner)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r12.cantidadAPoner === null || ctx_r12.cantidadAPoner < 1 || !ctx_r12.esEntero(ctx_r12.cantidadAPoner));
  }
}
function CrearProductoPropioComponent_div_1_div_30_br_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoPropioComponent_div_1_div_30_p_table_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoPropioComponent_div_1_div_30_p_table_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 48)(2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 48)(6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 50)(11, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_30_p_table_6_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const compoenente_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.eliminarComponente(compoenente_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const compoenente_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r23.nombre ? compoenente_r23.nombre : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r23.cantidad ? compoenente_r23.cantidad : "N/A", " ");
  }
}
function CrearProductoPropioComponent_div_1_div_30_p_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoPropioComponent_div_1_div_30_p_table_6_ng_template_2_Template, 9, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoPropioComponent_div_1_div_30_p_table_6_ng_template_3_Template, 12, 2, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r14.componentesPrevios)("rowHover", true);
  }
}
function CrearProductoPropioComponent_div_1_div_30_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Si el Producto es compuesto debe haber al menos un componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_div_30_hr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function CrearProductoPropioComponent_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ingresar componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_30_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.componenteSeleccionado = $event);
    })("onChange", function CrearProductoPropioComponent_div_1_div_30_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.seleccionarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CrearProductoPropioComponent_div_1_div_30_div_4_Template, 3, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CrearProductoPropioComponent_div_1_div_30_br_5_Template, 1, 0, "br", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CrearProductoPropioComponent_div_1_div_30_p_table_6_Template, 4, 2, "p-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CrearProductoPropioComponent_div_1_div_30_small_7_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CrearProductoPropioComponent_div_1_div_30_hr_8_Template, 1, 0, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r5.selectComponents)("ngModel", ctx_r5.componenteSeleccionado)("filter", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.newProducto.get("compuestoSn").value === "Si" && ctx_r5.componentesPrevios !== null && ctx_r5.componentesPrevios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && ctx_r5.componentesPrevios.length === 0 && ctx_r5.newProducto.controls.compuestoSn.value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
  }
}
function CrearProductoPropioComponent_div_1_div_35_br_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoPropioComponent_div_1_div_35_p_table_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoPropioComponent_div_1_div_35_p_table_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 48)(2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidadUb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 48)(6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "unidadMedida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 50)(11, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_35_p_table_8_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const unidadMedida_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.eliminarUnidad(unidadMedida_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const unidadMedida_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r35.nombre ? unidadMedida_r35.nombre : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r35.unidadMedida ? unidadMedida_r35.unidadMedida : "N/A", " ");
  }
}
function CrearProductoPropioComponent_div_1_div_35_p_table_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoPropioComponent_div_1_div_35_p_table_8_ng_template_2_Template, 7, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoPropioComponent_div_1_div_35_p_table_8_ng_template_3_Template, 12, 2, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r30.unidadesPrevias)("rowHover", true);
  }
}
function CrearProductoPropioComponent_div_1_div_35_hr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function CrearProductoPropioComponent_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Unidades de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_35_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.ValorNulleable = $event);
    })("onChange", function CrearProductoPropioComponent_div_1_div_35_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.seleccionarProductoUnidad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 38)(5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoPropioComponent_div_1_div_35_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.unidadSeleccionada.unidadMedida = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_div_35_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.agregarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CrearProductoPropioComponent_div_1_div_35_br_7_Template, 1, 0, "br", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CrearProductoPropioComponent_div_1_div_35_p_table_8_Template, 4, 2, "p-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CrearProductoPropioComponent_div_1_div_35_hr_9_Template, 1, 0, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r6.selectProductosUnidades)("filter", true)("ngModel", ctx_r6.ValorNulleable)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.unidadSeleccionada.unidadMedida)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r6.unidadSeleccionada.unidadMedida === 0 || ctx_r6.unidadSeleccionada.unidadMedida === null || ctx_r6.unidadSeleccionada.unidadMedida === undefined || ctx_r6.ValorNulleable === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.unidadSeleccionadaControl && ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
  }
}
function CrearProductoPropioComponent_div_1_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_small_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_57_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_ng_template_57_p_button_1_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.uploadAndResize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_57_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_ng_template_57_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoPropioComponent_div_1_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoPropioComponent_div_1_ng_template_57_p_button_1_Template, 1, 0, "p-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoPropioComponent_div_1_ng_template_57_p_button_2_Template, 1, 0, "p-button", 59);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.imagenSubida);
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
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "LoteSn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8)(27, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Es Compuesto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CrearProductoPropioComponent_div_1_div_30_Template, 9, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8)(32, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Tiene Unidades de Medida?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "p-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CrearProductoPropioComponent_div_1_div_35_Template, 10, 12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Precio de Venta al Publico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CrearProductoPropioComponent_div_1_small_40_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 8)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Porcentaje del IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, CrearProductoPropioComponent_div_1_small_45_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Tipo de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "p-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, CrearProductoPropioComponent_div_1_div_51_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CrearProductoPropioComponent_div_1_small_52_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 8)(54, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p-fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, CrearProductoPropioComponent_div_1_ng_template_57_Template, 3, 2, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 30)(61, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CrearProductoPropioComponent_div_1_Template_p_button_onClick_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoPropioComponent_div_1_Template_p_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("nombre")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.newProducto.controls.nombre.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.newProducto.get("compuestoSn").value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.selectSiNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadesSn.value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("pvp")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("pvp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("iva")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("iva"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.tiposProductos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("tipoProducto")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingTipos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("tipoProducto"));
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
    this.imageCompress = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(ngx_image_compress__WEBPACK_IMPORTED_MODULE_6__.NgxImageCompressService);
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
      productoUnidadMedida: null,
      unidadMedida: null,
      nombre: null
    };
    this.unidadesPrevias = [];
    this.unidadesMedidasSN = 'No';
    this.selectSiNo = ['Si', 'No'];
    this.newProducto = this.Form.group({
      nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionInterna: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionFactura: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      compuestoSn: ['No'],
      unidadesSn: ['No'],
      loteSn: ['No'],
      componentes: [[]],
      unidadMedida: [[]],
      pvp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      iva: [21, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      tipoProducto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
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
  get unidadesSn() {
    return this.newProducto.get('unidadesSn');
  }
  get loteSn() {
    return this.newProducto.get('loteSn');
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
    this.cargarProductosUnidades();
    this.cargarProductosComponentes();
  }
  back() {
    this.router.navigateByUrl('/almacen');
  }
  validar(campo) {
    return this.newProducto.get(campo)?.valid;
  }
  esEntero(num) {
    if (num === null) return true;
    if (num === 0) return true;
    if (Number.isInteger(num)) {
      return true;
    } else return false;
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
  seleccionarProductoUnidad(event) {
    this.unidadSeleccionada.nombre = event.value.nombre;
    this.unidadSeleccionada.productoUnidadMedida = event.value.id;
    this.unidadSeleccionadaControl = true;
  }
  agregarComponente() {
    if (this.componenteSeleccionado !== null) {
      this.componenteSeleccionado.cantidad = this.cantidadAPoner;
      let componenteAGuardar = JSON.parse(JSON.stringify(this.componenteSeleccionado));
      this.componentesPrevios.push(componenteAGuardar);
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
        productoUnidadMedida: null,
        unidadMedida: null,
        nombre: null
      };
      this.ValorNulleable = null;
    }
  }
  eliminarUnidad(unidad) {
    this.unidadesPrevias = this.unidadesPrevias.filter(unidadP => unidadP !== unidad);
  }
  eliminarComponente(componente) {
    this.componentesPrevios = this.componentesPrevios.filter(component => component !== componente);
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newProducto.invalid || this.componentesPrevios.length === 0 && this.newProducto.get('compuestoSn')?.value === 'Si') {
      console.log(this.newProducto.invalid);
      this.messageService.error('Verifique los campos');
      this.loading = false;
      return;
    }
    if (this.newProducto.get('compuestoSn')?.value === 'No') {
      this.newProducto.get('componentes')?.setValue([]);
    }
    let productoToSend = this.newProducto.value;
    productoToSend.componentes = this.componentesPrevios;
    console.log(this.componentesPrevios);
    productoToSend.unidadesMedidas = this.unidadesPrevias;
    productoToSend.imagen = this.imagenSubida;
    console.log(productoToSend);
    this.reqNewProducto(productoToSend);
  }
  // dinamica de la imagen -----------------------------------------------------------------------
  uploadAndResize() {
    return this.imageCompress.uploadFile().then(({
      image,
      orientation
    }) => {
      console.warn('el tamano era: ', this.imageCompress.byteCount(image), ' bytes');
      console.warn('Comprimiendo and redimencionando a un tamano de 244x244px...');
      this.imageCompress.compressFile(image, orientation, 50, 50, 244, 244).then(result => {
        this.imagenSubida = result;
        console.warn('El tamano ahora es:', this.imageCompress.byteCount(result), ' bytes');
      });
    });
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
  cargarProductosUnidades() {
    this.productoService.getProductos().subscribe(response => {
      this.selectProductosUnidades = response;
    }, error => {
      console.error(error);
      this.messageService.error(error.error.detail);
    });
  }
  // cargo los tipos de productos del select homonimo
  cargarTiposProductos() {
    this.enumService.getEnum('tipo_producto').subscribe({
      next: res => {
        this.tiposProductos = res;
        this.loadingTipos = false;
        console.log(this.tiposProductos);
      },
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
        this.router.navigateByUrl('/productos/mostrar/' + response.id);
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
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh;", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "mb-2", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "nombre", 1, "w-full"], ["autocomplete", "nope", "id", "nombre", "type", "text", "placeholder", "Ingrese el nombre", "pInputText", "", "formControlName", "nombre", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "field", "pl-0", "pt-0", "pb-0", "md:col-12"], ["for", "descripcion", 1, "w-full"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la descripcion interna", "formControlName", "descripcionInterna", 3, "ngClass"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la descripcion factura", "formControlName", "descripcionFactura", 3, "ngClass"], ["formControlName", "loteSn", "placeholder", "Si o No", "optionValue", "value", "optionLabel", "label", 3, "options"], ["formControlName", "compuestoSn", "optionValue", "value", "optionLabel", "label", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12", 4, "ngIf"], ["formControlName", "unidadesSn", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12 m-0", 4, "ngIf"], ["autocomplete", "nope", "id", "pvp", "type", "number", "pInputText", "", "placeholder", "Ingrese el pvp", "formControlName", "pvp", 3, "ngClass"], ["autocomplete", "nope", "id", "iva", "type", "number", "pInputText", "", "placeholder", "Ingrese el iva", "formControlName", "iva", 3, "ngClass"], [1, "flex", "flex-row"], ["formControlName", "tipoProducto", "placeholder", "Selecciona", 1, "w-full", 3, "options", "ngClass"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "width", "100%", "max-width", "244px", 3, "src"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "p-error"], ["placeholder", "Seleccione un componente", "optionLabel", "nombre", 3, "options", "ngModel", "filter", "ngModelOptions", "ngModelChange", "onChange"], ["class", "col-12 pr-0 pl-0 flex", 4, "ngIf"], [4, "ngIf"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover", 4, "ngIf"], [1, "col-12", "pr-0", "pl-0", "flex"], ["type", "number", "pInputText", "", "placeholder", "Cantidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pButton", "", "pRipple", "", "label", "Agregar", "icon", "pi pi-check", 1, "p-button-primary", "ml-2", 3, "disabled", "click"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover"], ["dt", ""], ["pTemplate", "body"], ["pSortableColumn", "cantidad"], ["field", "cantidad"], ["pSortableColumn", "nombre"], ["field", "nombre"], [2, "min-width", "10rem"], [1, "p-column-title"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12", "m-0"], ["inputId", "selectProductosUnidades", "placeholder", "Seleccione una Unidad", "optionLabel", "nombre", 3, "options", "filter", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["type", "number", "pInputText", "", "placeholder", "Cantidad de la unidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "flex", "align-items-center", "text-primary"], ["icon", "pi pi-plus", "label", "Seleccione", "styleClass", "p-button-primary mr-3", 3, "click", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["icon", "pi pi-plus", "label", "Seleccione", "styleClass", "p-button-primary mr-3", 3, "click"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"]],
  template: function CrearProductoPropioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CrearProductoPropioComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoPropioComponent_div_1_Template, 63, 33, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_fieldset__WEBPACK_IMPORTED_MODULE_13__.Fieldset, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SortIcon, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextarea],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 55524:
/*!***************************************************************************!*\
  !*** ./src/app/layout/almacen/crear-producto/crear-producto.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearProductoComponent: () => (/* binding */ CrearProductoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/enum.service */ 58241);
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/producto.service */ 65466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function CrearProductoComponent_div_1_div_30_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_30_div_4_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.cantidadAPoner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_30_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.agregarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.cantidadAPoner)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r11.cantidadAPoner === null || ctx_r11.cantidadAPoner < 1 || !ctx_r11.esEntero(ctx_r11.cantidadAPoner));
  }
}
function CrearProductoComponent_div_1_div_30_br_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoComponent_div_1_div_30_p_table_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoComponent_div_1_div_30_p_table_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 45)(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 47)(11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_30_p_table_6_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const compoenente_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.eliminarComponente(compoenente_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const compoenente_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r22.cantidad ? compoenente_r22.cantidad : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compoenente_r22.nombre ? compoenente_r22.nombre : "N/A", " ");
  }
}
function CrearProductoComponent_div_1_div_30_p_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoComponent_div_1_div_30_p_table_6_ng_template_2_Template, 9, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoComponent_div_1_div_30_p_table_6_ng_template_3_Template, 12, 2, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r13.componentesPrevios)("rowHover", true);
  }
}
function CrearProductoComponent_div_1_div_30_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Si el Producto es compuesto debe haber al menos un componente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_div_30_hr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function CrearProductoComponent_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ingresar componentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_30_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.componenteSeleccionado = $event);
    })("onChange", function CrearProductoComponent_div_1_div_30_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.seleccionarComponente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CrearProductoComponent_div_1_div_30_div_4_Template, 3, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CrearProductoComponent_div_1_div_30_br_5_Template, 1, 0, "br", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CrearProductoComponent_div_1_div_30_p_table_6_Template, 4, 2, "p-table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CrearProductoComponent_div_1_div_30_small_7_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CrearProductoComponent_div_1_div_30_hr_8_Template, 1, 0, "hr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r5.selectComponents)("filter", true)("ngModel", ctx_r5.componenteSeleccionado)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.componenteSeleccionadoControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componentesPrevios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && ctx_r5.componentesPrevios.length === 0 && ctx_r5.newProducto.controls.compuestoSn.value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.componenteSeleccionadoControl);
  }
}
function CrearProductoComponent_div_1_div_35_br_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
  }
}
function CrearProductoComponent_div_1_div_35_p_table_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CrearProductoComponent_div_1_div_35_p_table_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 45)(2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cantidadUb");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "unidadMedida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "div", 47)(11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_35_p_table_8_ng_template_3_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const unidadMedida_r34 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.eliminarUnidad(unidadMedida_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const unidadMedida_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r34.nombre ? unidadMedida_r34.nombre : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", unidadMedida_r34.unidadMedida ? unidadMedida_r34.unidadMedida : "N/A", " ");
  }
}
function CrearProductoComponent_div_1_div_35_p_table_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearProductoComponent_div_1_div_35_p_table_8_ng_template_2_Template, 7, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearProductoComponent_div_1_div_35_p_table_8_ng_template_3_Template, 12, 2, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r29.unidadesPrevias)("rowHover", true);
  }
}
function CrearProductoComponent_div_1_div_35_hr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "hr");
  }
}
function CrearProductoComponent_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Unidades de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_35_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.ValorNulleable = $event);
    })("onChange", function CrearProductoComponent_div_1_div_35_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.seleccionarProductoUnidad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 34)(5, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearProductoComponent_div_1_div_35_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.unidadSeleccionada.unidadMedida = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_div_35_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.agregarUnidades());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CrearProductoComponent_div_1_div_35_br_7_Template, 1, 0, "br", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CrearProductoComponent_div_1_div_35_p_table_8_Template, 4, 2, "p-table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CrearProductoComponent_div_1_div_35_hr_9_Template, 1, 0, "hr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r6.selectProductosUnidades)("filter", true)("ngModel", ctx_r6.ValorNulleable)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.unidadSeleccionada.unidadMedida)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r6.unidadSeleccionada.unidadMedida === 0 || ctx_r6.unidadSeleccionada.unidadMedida === null || ctx_r6.unidadSeleccionada.unidadMedida === undefined || ctx_r6.ValorNulleable === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.unidadSeleccionadaControl && ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.unidadesPrevias && ctx_r6.unidadesPrevias.length > 0);
  }
}
function CrearProductoComponent_div_1_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CrearProductoComponent_div_1_small_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Campo requerido.");
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
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "LoteSn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8)(27, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Es Compuesto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CrearProductoComponent_div_1_div_30_Template, 9, 11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8)(32, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Tiene Unidades de Medida?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "p-dropdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CrearProductoComponent_div_1_div_35_Template, 10, 12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Precio de Venta al Publico");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CrearProductoComponent_div_1_small_40_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 8)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Porcentaje del IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, CrearProductoComponent_div_1_small_45_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Tipo de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "p-dropdown", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, CrearProductoComponent_div_1_div_51_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, CrearProductoComponent_div_1_small_52_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 26)(54, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CrearProductoComponent_div_1_Template_p_button_onClick_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearProductoComponent_div_1_Template_p_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("nombre")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.newProducto.controls.nombre.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionInterna"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c2, ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("descripcionFactura"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.compuestoSnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.newProducto.get("compuestoSn").value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.selectSiNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.unidadesSn.value === "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("pvp")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("pvp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("iva")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("iva"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.tiposProductos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("tipoProducto")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingTipos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("tipoProducto"));
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
      productoUnidadMedida: null,
      unidadMedida: null,
      nombre: null
    };
    this.unidadesPrevias = [];
    this.cantidadAPoner = null;
    this.selectSiNo = ['Si', 'No'];
    this.subs = [];
    this.unidadesMedidasSN = 'No';
    this.newProducto = this.Form.group({
      nombre: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionInterna: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      descripcionFactura: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      compuestoSn: ['No'],
      unidadesSn: ['No'],
      loteSn: ['No'],
      componentes: [[]],
      unidadMedida: [[]],
      pvp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      iva: [21, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      codigoEan: [null],
      tipoProducto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
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
  get unidadesSn() {
    return this.newProducto.get('unidadesSn');
  }
  get loteSn() {
    return this.newProducto.get('loteSn');
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
    this.cargarProductosUnidades();
    this.subs.push(this.activatedRoutes.params.subscribe(params => {
      this.barcode = params['barcode'];
    }));
  }
  back() {
    this.router.navigateByUrl('/almacen/scanner');
  }
  validar(campo) {
    return this.newProducto.get(campo)?.valid;
  }
  esEntero(num) {
    if (num === null) return true;
    if (num === 0) return true;
    if (Number.isInteger(num)) {
      return true;
    } else return false;
  }
  // dinamica de los componentes y unidades -------------------------------------------------------------------
  seleccionarComponente() {
    this.componenteSeleccionadoControl = true;
  }
  seleccionarProductoUnidad(event) {
    this.unidadSeleccionada.nombre = event.value.nombre;
    this.unidadSeleccionada.productoUnidadMedida = event.value.id;
    this.unidadSeleccionadaControl = true;
  }
  agregarComponente() {
    if (this.componenteSeleccionado !== null) {
      this.componenteSeleccionado.cantidad = this.cantidadAPoner;
      let componenteAGuardar = JSON.parse(JSON.stringify(this.componenteSeleccionado));
      this.componentesPrevios.push(componenteAGuardar);
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
        productoUnidadMedida: null,
        unidadMedida: null,
        nombre: null
      };
      this.ValorNulleable = null;
    }
  }
  eliminarUnidad(unidad) {
    this.unidadesPrevias = this.unidadesPrevias.filter(unidadP => unidadP !== unidad);
  }
  eliminarComponente(componente) {
    this.componentesPrevios = this.componentesPrevios.filter(component => component !== componente);
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newProducto.invalid || this.componentesPrevios.length === 0 && this.newProducto.get('compuestoSn')?.value === 'Si') {
      console.log(this.newProducto.invalid);
      this.messageService.error('Verifique los campos');
      this.loading = false;
      return;
    }
    if (this.newProducto.get('compuestoSn')?.value === 'No') {
      this.newProducto.get('componentes')?.setValue([]);
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
    this.router.navigateByUrl(`productos/scanner`);
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
  cargarProductosUnidades() {
    this.subs.push(this.productoService.getProductos().subscribe(response => {
      this.selectProductosUnidades = response;
    }, error => {
      console.error(error);
      this.messageService.error(error.error.detail);
    }));
  }
  // cargo los tipos de productos del select homonimo
  cargarTiposProductos() {
    this.subs.push(this.enumService.getEnum('tipo_producto').subscribe({
      next: res => {
        this.tiposProductos = res;
        this.loadingTipos = false;
        console.log(this.tiposProductos);
      },
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
      this.router.navigateByUrl('/productos/scanner');
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
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "nombre", 1, "w-full"], ["autocomplete", "nope", "id", "nombre", "type", "text", "pInputText", "", "placeholder", "Ingrese el nombre", "formControlName", "nombre", 3, "ngClass"], ["class", "p-error", 4, "ngIf"], [1, "field", "pl-0", "pt-0", "pb-0", "md:col-12"], ["for", "descripcion", 1, "w-full"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la Descripcion Interna", "formControlName", "descripcionInterna", 3, "ngClass"], ["id", "descripcion", "pInputTextarea", "", "rows", "3", "cols", "20", "placeholder", "Ingrese la Descripcion Factura", "formControlName", "descripcionFactura", 3, "ngClass"], ["formControlName", "loteSn", "placeholder", "Si o No", "optionValue", "value", "optionLabel", "label", 3, "options"], ["formControlName", "compuestoSn", "placeholder", "Si o No", "optionValue", "value", "optionLabel", "label", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12", 4, "ngIf"], ["formControlName", "unidadesSn", 3, "options"], ["class", "field pl-0 pt-1 pb-0 md:col-12 m-0", 4, "ngIf"], ["autocomplete", "nope", "id", "pvp", "type", "number", "pInputText", "", "placeholder", "Ingrese el pvp", "formControlName", "pvp", 3, "ngClass"], ["autocomplete", "nope", "id", "iva", "type", "number", "pInputText", "", "placeholder", "Ingrese el iva", "formControlName", "iva", 3, "ngClass"], [1, "flex", "flex-row"], ["formControlName", "tipoProducto", "placeholder", "Selecciona", 1, "w-full", 3, "options", "ngClass"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "p-error"], ["placeholder", "Seleccione un componente", "optionLabel", "nombre", 3, "options", "filter", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["class", "col-12 pr-0 pl-0 flex", 4, "ngIf"], [4, "ngIf"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover", 4, "ngIf"], [1, "col-12", "pr-0", "pl-0", "flex"], ["type", "number", "pInputText", "", "placeholder", "Cantidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["pButton", "", "pRipple", "", "label", "Agregar", "icon", "pi pi-check", 1, "p-button-primary", "ml-2", 3, "disabled", "click"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "rowHover"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "cantidad"], ["field", "cantidad"], ["pSortableColumn", "nombre"], ["field", "nombre"], [2, "min-width", "10rem"], [1, "p-column-title"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12", "m-0"], ["inputId", "selectProductosUnidades", "placeholder", "Seleccione una Unidad", "optionLabel", "nombre", 3, "options", "filter", "ngModel", "ngModelOptions", "ngModelChange", "onChange"], ["type", "number", "pInputText", "", "placeholder", "Cantidad de la unidad", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"]],
  template: function CrearProductoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CrearProductoComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CrearProductoComponent_div_1_Template, 56, 33, "div", 1);
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

/***/ 78909:
/*!*************************************************************!*\
  !*** ./src/app/layout/almacen/escaner/escaner.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EscanerComponent: () => (/* binding */ EscanerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mercancia.service */ 37098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autofocus */ 34194);
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

/***/ 58555:
/*!***************************************************************************!*\
  !*** ./src/app/layout/almacen/ingresar-stock/ingresar-stock.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngresarStockComponent: () => (/* binding */ IngresarStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/producto.service */ 65466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mercancia.service */ 37098);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 29156);
/* harmony import */ var src_app_services_almacenes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/almacenes.service */ 15498);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 44123);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 57411);
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
function IngresarStockComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_14_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El Codigo debe ser estar compuesto de solo numeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_14_br_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "br");
  }
}
function IngresarStockComponent_div_1_ng_container_14_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El Codigo debe tener exactamente 13 digitos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_14_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No existe un producto registrado con este Codigo de Barras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, IngresarStockComponent_div_1_ng_container_14_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, IngresarStockComponent_div_1_ng_container_14_br_2_Template, 1, 0, "br", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, IngresarStockComponent_div_1_ng_container_14_small_3_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, IngresarStockComponent_div_1_ng_container_14_small_4_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.codeInputLength > 0 && !ctx_r4.codigoEanValido && !ctx_r4.soloNumeros);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.codeInputLength > 0 && ctx_r4.codeInputLength > 0 && !ctx_r4.soloNumeros && ctx_r4.codeInputLength !== 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.codeInputLength > 0 && !ctx_r4.codigoEanValido && ctx_r4.codeInputLength !== 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.codigoEanValido && !ctx_r4.codigoValido);
  }
}
function IngresarStockComponent_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor minimo es 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_22_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_22_ng_container_8_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_ng_container_22_ng_container_8_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Si hay numero de lote la fecha de caducidad es requerida. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c4 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function IngresarStockComponent_div_1_ng_container_22_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Fecha de Caducidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p-calendar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, IngresarStockComponent_div_1_ng_container_22_ng_container_8_small_6_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, IngresarStockComponent_div_1_ng_container_22_ng_container_8_small_7_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showOnFocus", false)("showIcon", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c4, ctx_r19.hadSubmit && !ctx_r19.validar("fechaCaducidad")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.hadSubmit && ctx_r19.fechaCaducidad.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.hadSubmit && ctx_r19.numeroLote.value && !ctx_r19.fechaCaducidad.value);
  }
}
function IngresarStockComponent_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9)(2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Numero de Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11)(5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function IngresarStockComponent_div_1_ng_container_22_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.buscarFechaCaducidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, IngresarStockComponent_div_1_ng_container_22_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, IngresarStockComponent_div_1_ng_container_22_small_7_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, IngresarStockComponent_div_1_ng_container_22_ng_container_8_Template, 8, 7, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c4, ctx_r8.hadSubmit && ctx_r8.numeroLote.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.loadingFechaCaducidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.hadSubmit && !ctx_r8.numeroLote.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.numeroLote.value && ctx_r8.mostrarFechaCaducidad);
  }
}
function IngresarStockComponent_div_1_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Esta ubicacion no esta registrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor minimo es 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IngresarStockComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ingresar Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 8)(7, "div", 9)(8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Codigo de barras del Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11)(11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function IngresarStockComponent_div_1_Template_input_input_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.validarCodigo($event));
    })("blur", function IngresarStockComponent_div_1_Template_input_blur_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.crearNuevoProducto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, IngresarStockComponent_div_1_div_12_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, IngresarStockComponent_div_1_small_13_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, IngresarStockComponent_div_1_ng_container_14_Template, 5, 4, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, IngresarStockComponent_div_1_small_20_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, IngresarStockComponent_div_1_small_21_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, IngresarStockComponent_div_1_ng_container_22_Template, 9, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 9)(24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function IngresarStockComponent_div_1_Template_input_input_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.validarUbicacion($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, IngresarStockComponent_div_1_small_27_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, IngresarStockComponent_div_1_small_28_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 9)(30, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, IngresarStockComponent_div_1_small_33_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, IngresarStockComponent_div_1_small_34_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 23)(36, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function IngresarStockComponent_div_1_Template_p_button_onClick_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IngresarStockComponent_div_1_Template_p_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.newStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c4, ctx_r1.hadSubmit && (!ctx_r1.codigoValido || ctx_r1.codigoEan.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loadingProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.codigoEan.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.loadingProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c4, ctx_r1.hadSubmit && ctx_r1.precio.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.precio.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.precio.value < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.producto && ctx_r1.producto.loteSn == "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c4, ctx_r1.hadSubmit && (ctx_r1.ubicacion.invalid || !ctx_r1.ubicacionValida)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.ubicacion.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ubicacionValida && ctx_r1.ubicacion.value !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c4, ctx_r1.hadSubmit && ctx_r1.validar("stock")));
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
    this.almacenService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_almacenes_service__WEBPACK_IMPORTED_MODULE_4__.AlmacenesService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__.MercanciaService);
    this.ubicacionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionesService);
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
    this.ubicacionValida = false;
    this.ubicacionFocus = false;
    this.almacenValida = false;
    this.almacenFocus = false;
    this.mercanciaValida = false;
    this.mercanciaFocus = false;
    this.loading = false;
    this.mostrarFechaCaducidad = false;
    this.newStock = this.Form.group({
      codigoEan: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')]],
      almacen: [null],
      mercancia: [null],
      precio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)]],
      stock: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)]],
      ubicacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      numeroLote: [null],
      fechaCaducidad: [null]
    });
    this.hadSubmit = false;
    this.loadingFechaCaducidad = false;
    this.loadingProducto = false;
  }
  ngOnInit() {
    // this.productoService.getProductos().subscribe({
    //   next: (resp) => {
    //     console.log(resp);
    //     this.listProductos = resp;
    //     this.filteredProductos = resp;
    //     this.cargarUbicaciones();
    //   },
    // });
    this.cargarUbicaciones();
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
  get numeroLote() {
    return this.newStock.get('numeroLote');
  }
  get fechaCaducidad() {
    return this.newStock.get('fechaCaducidad');
  }
  get formValue() {
    return this.newStock.value;
  }
  // end form getter --------------------------------------------------------------------------------
  back() {
    const lastUrl = sessionStorage.getItem('lastUrl');
    if (lastUrl === 'null') {
      this.router.navigateByUrl('/mercancias');
    } else this.router.navigateByUrl(lastUrl);
    // const urlAntSideBar = sessionStorage.getItem('urlAntSideBar')
    // const urlAntDashBoard = sessionStorage.getItem('urlAntDashBoard')
    // setTimeout(() => {
    //   console.log(urlAntSideBar);
    //   console.log(urlAntDashBoard);
    //   if (urlAntSideBar) {
    //     let urlAnt = urlAntSideBar;
    //     sessionStorage.removeItem('urlAntSideBar')
    //     this.router.navigateByUrl(urlAnt)
    //   } else if (urlAntDashBoard) {
    //     let urlAnt = urlAntDashBoard;
    //     sessionStorage.removeItem('urlAntDashBoard')
    //     this.router.navigateByUrl(urlAnt)
    //   } else {
    //     this.router.navigateByUrl('/mercancias')
    //   }
    // }, 100);
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
  cargarProducto(codigoEan) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.loadingProducto = true;
      this.mercanciaService.getMercanciaFromBarcode(codigoEan).subscribe({
        next: res => {
          console.log('EL PRODUCTO => ', res);
          this.producto = res;
          if (this.producto) {
            console.log('validooooooooo');
            this.codigoValido = true;
            this.idProducto = this.producto.id;
            // setTimeout(() => {
            //   console.log(this.precioInput.nativeElement);
            //   this.precioInput.nativeElement.focus();
            // }, 100);
          } else {
            this.codigoValido = false;
            this.producto = null;
          }
          this.loadingProducto = false;
        },
        error: error => {
          console.error(error.error.detail);
          this.messageService.error(error.error.detail);
          this.producto = null;
          if (this.producto) {
            this.codigoValido = true;
            this.idProducto = this.producto.id;
            // setTimeout(() => {
            //   console.log(this.precioInput.nativeElement);
            //   this.precioInput.nativeElement.focus();
            // }, 100);
          } else {
            this.codigoValido = false;
            this.producto = null;
          }
          this.loadingProducto = false;
        }
      });
    }, 500);
  }
  cargarUbicaciones() {
    this.ubicacionService.getUbicaciones().subscribe({
      next: res => {
        console.log(res);
        this.ubicaciones = res;
        // this.focusUbicacion();
      },

      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    });
  }
  cargarMercancias(idProducto) {
    this.mercanciaService.getMercanciasByProducto(idProducto).subscribe({
      next: res => {
        console.log(res);
        this.mercancias = res;
        // this.focusMercancia();
      },

      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    });
  }
  buscarFechaCaducidad() {
    console.log('hey');
    if (this.codigoEan && this.numeroLote) {
      this.loadingFechaCaducidad = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.mercanciaService.getFechaCaducidad({
          codigoEan: this.codigoEan.value,
          numeroLote: this.numeroLote.value
        }).subscribe({
          next: res => {
            console.log('FECHA DE CADUCIDAD => ', res);
            this.loadingFechaCaducidad = false;
            this.fechaCaducidad.setValue(res.fechaCaducidad);
            if (res.fechaCaducidad === null) {
              this.mostrarFechaCaducidad = true;
            } else {
              this.mostrarFechaCaducidad = false;
            }
            // console.log('la condicion (numeroLote.value && mostrarFechaCaducidad) => ');
          },

          error: error => {
            console.error(error);
            this.loadingFechaCaducidad = false;
            this.messageService.error(error.error.detail);
          }
        });
      }, 500);
    }
  }
  enableFechaCaducidad() {
    this.fechaCaducidad.enable();
  }
  crearNuevoProducto() {
    let interval = setInterval(() => {
      if (!this.loadingProducto) {
        if (this.codigoEanValido && !this.codigoValido) {
          this.confirmationService.confirm({
            key: 'crearNuevoProducto',
            accept: () => {
              this.confirmationService.close();
              this.router.navigateByUrl('/productos/nuevo/' + this.codigoEan.value);
            },
            reject: () => {
              this.confirmationService.close();
            }
          });
        }
        clearInterval(interval);
      }
    }, 500);
  }
  submit() {
    this.hadSubmit = true;
    this.loading = true;
    if (this.newStock.invalid || this.producto.loteSn == 'Si' && !this.numeroLote.value || this.numeroLote.value && !this.fechaCaducidad.value) {
      this.loading = false;
      this.messageService.error('Revise los campos');
      return;
    }
    if (this.numeroLote.value === '') this.numeroLote.setValue(null);
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
        this.producto = null;
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
  // focusNLote() {
  //   setTimeout(() => {
  //     document.getElementById('numeroLote').focus();
  //     //@ts-ignore
  //     document.getElementById('numeroLote').value = null;
  //   }, 100);
  // }
  // focusStock() {
  //   setTimeout(() => {
  //     document.getElementById('stock').focus();
  //     //@ts-ignore
  //     document.getElementById('stock').value = null;
  //   }, 100);
  // }
  // focusUbicacion() {
  //   setTimeout(() => {
  //     document.getElementById('ubicacion').focus();
  //     //@ts-ignore
  //     document.getElementById('ubicacion').value = null;
  //   }, 100);
  // }
  // focusAlmacen() {
  //   setTimeout(() => {
  //     document.getElementById('almacen').focus();
  //   }, 100);
  // }
  // focusMercancia() {
  //   setTimeout(() => {
  //     document.getElementById('mercancia').focus();
  //     //@ts-ignore
  //     document.getElementById('mercancia').value = null;
  //   }, 100);
  // }
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
    // let productoSeleccionado = this.listProductos.find(
    //   (producto) => producto.codigoEan == this.barcode
    // );
    if (this.codeInputLength === 13 && this.soloNumeros) {
      this.codigoEanValido = true;
      this.cargarProducto(this.barcode);
    } else {
      this.codigoEanValido = false;
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
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["header", "Confirmacion", "key", "crearNuevoProducto", "icon", "pi pi-exclamation-triangle", "message", "Parece que el codigo de barras introducido no pertenece a ningun producto registrado. \n  Desea registrarlo?", "acceptLabel", "Crear Producto Nuevo", "rejectLabel", "Cancelar", "acceptButtonStyleClass", "p-button-text p-button-primary", "rejectButtonStyleClass", "p-button-text p-button-secondary"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["for", "codigoEan", 1, "w-full"], [1, "flex", "flex-row"], ["type", "text", "formControlName", "codigoEan", "placeholder", "Codigo de Barras del producto", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngClass", "input", "blur"], ["class", "pt-2 ml-2", 4, "ngIf"], ["class", "p-error", 4, "ngIf"], [4, "ngIf"], ["for", "precio", 1, "w-full"], ["autocomplete", "nope", "type", "number", "placeholder", "Ingrese el precio", "pInputText", "", "formControlName", "precio", 3, "ngClass"], ["precioI", ""], ["for", "ubicacion", 1, "w-full"], ["id", "ubicacion", "type", "text", "formControlName", "ubicacion", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngClass", "input"], ["for", "stock", 1, "w-full"], ["inputId", "stock", "autocomplete", "nope", "id", "stock", "type", "number", "pInputText", "", "placeholder", "Ingrese el stock", "formControlName", "stock", 3, "ngClass"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "onClick"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "disabled", "click"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "p-error"], ["for", "numeroLote", 1, "w-full"], ["id", "numeroLote", "type", "text", "formControlName", "numeroLote", "placeholder", "Numero de Lote", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngClass", "input"], ["for", "fechaCaducidad", 1, "w-full"], ["inputId", "icon", "placeholder", "Fecha de Caducidad", "formControlName", "fechaCaducidad", "dateFormat", "yy-mm-dd", 1, "w-full", 3, "showOnFocus", "showIcon", "ngClass"]],
  template: function IngresarStockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, IngresarStockComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, IngresarStockComponent_div_1_Template, 38, 24, "div", 1);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 79206:
/*!************************************************!*\
  !*** ./src/app/layout/app.layout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutComponent: () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/topbar/app.topbar.component */ 27905);
/* harmony import */ var _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/sidebar/app.sidebar.component */ 1554);
/* harmony import */ var _services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/custom-message.service */ 58062);
/* harmony import */ var _services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/usuario.service */ 41063);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _config_app_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/app.config.component */ 1111);
/* harmony import */ var _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/app.footer.component */ 6877);
var _class;














function AppLayoutComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function AppLayoutComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppLayoutComponent_ng_container_5_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.iniciarJornada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
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
          const isOutsideClicked = !(this.appSidebar?.el?.nativeElement?.isSameNode(event.target) || this.appSidebar?.el?.nativeElement?.contains(event.target) || this.appTopbar?.menuButton?.nativeElement?.isSameNode(event.target) || this.appTopbar?.menuButton?.nativeElement?.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar?.menu?.nativeElement?.isSameNode(event.target) || this.appTopbar?.menu?.nativeElement?.contains(event.target) || this.appTopbar?.topbarMenuButton?.nativeElement?.isSameNode(event.target) || this.appTopbar?.topbarMenuButton?.nativeElement?.contains(event.target));
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
    let jornadaIniciadadStatus = sessionStorage.getItem('jornadaIniciadadStatus');
    console.log('jornadaIniciadadStatus => ', jornadaIniciadadStatus);
    if (jornadaIniciadadStatus == '1') this.jornadaIniciada = true;
    this.subs.push(this.usuarioService.comprobarTimeUsuario(this.usuario.id).subscribe({
      next: response => {
        console.log(response);
        this.jornadaIniciada = response.jornadaIniciada;
        sessionStorage.setItem('jornadaIniciadadStatus', this.jornadaIniciada ? "1" : "0");
      },
      error: error => {
        console.log(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
    this.jornadaIniciada = true;
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
        this.jornadaIniciada = false;
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
  consts: [[1, "layout-wrapper", 3, "ngClass"], [3, "jornadaIniciada", "estadotjornadaIniciada"], [1, "layout-main-container", "ml-0", "pt-6"], [1, "layout-main", 3, "ngClass"], [4, "ngIf"], [1, "layout-mask"], [1, "col-12", "flex", "justify-content-center", "align-items-center", "flex-column"], [1, "flex", "align-items-center", "justify-content-center", "w-4", "h-7rem", 2, "background-color", "#2ec867", "border-radius", "10%", "max-width", "8rem", 3, "click"], [1, "pi", "pi-caret-right", "text-5xl", "text-white"]],
  template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("estadotjornadaIniciada", function AppLayoutComponent_Template_app_topbar_estadotjornadaIniciada_1_listener($event) {
        return ctx.jornadaIniciada = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AppLayoutComponent_ng_container_4_Template, 2, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AppLayoutComponent_ng_container_5_Template, 4, 0, "ng-container", 4);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, !ctx.jornadaIniciada));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.jornadaIniciada);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.jornadaIniciada);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _config_app_config_component__WEBPACK_IMPORTED_MODULE_5__.AppConfigComponent, _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.AppTopBarComponent, _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__.AppFooterComponent],
  encapsulation: 2
});

/***/ }),

/***/ 84295:
/*!*********************************************!*\
  !*** ./src/app/layout/app.layout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutModule: () => (/* binding */ AppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/topbar/app.topbar.component */ 27905);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config.module */ 92913);
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.layout.component */ 79206);
/* harmony import */ var _shared_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/menu/app.menu.component */ 40075);
/* harmony import */ var _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/app.footer.component */ 6877);
/* harmony import */ var _shared_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/menu/app.menuitem.component */ 90036);
/* harmony import */ var _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/sidebar/app.sidebar.component */ 1554);
/* harmony import */ var _ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordenes-trabajo/ordenes-trabajo.component */ 3776);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea.component */ 64388);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _gastos_gastos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gastos/gastos.component */ 27954);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var _pdv_pdv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pdv/pdv.component */ 72668);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component */ 50986);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-tiempo/mostrar-tarea-tiempo.component */ 84507);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-documentacion/mostrar-tarea-documentacion.component */ 14572);
/* harmony import */ var _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component */ 90742);
/* harmony import */ var _mostrar_tarea_mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mostrar-tarea/mostrar-tarea-movimiento/mostrar-tarea-movimiento.component */ 92068);
/* harmony import */ var _ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component */ 34746);
/* harmony import */ var _almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./almacen/ingresar-stock/ingresar-stock.component */ 58555);
/* harmony import */ var _almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./almacen/crear-producto/crear-producto.component */ 55524);
/* harmony import */ var _almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./almacen/crear-producto-propio/crear-producto-propio.component */ 23678);
/* harmony import */ var _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./almacen/almacen.component */ 70555);
/* harmony import */ var _almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./almacen/escaner/escaner.component */ 78909);
/* harmony import */ var _factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./factura-reader/factura-reader.component */ 30938);
/* harmony import */ var _confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./confirmar-orden-compra/confirmar-orden-compra.component */ 8416);
/* harmony import */ var _barcode_scanner_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./barcode-scanner/barcode-scanner.component */ 68026);
/* harmony import */ var _confirmar_orden_compra_revisar_cantidad_linea_orden_compra_revisar_cantidad_linea_orden_compra_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./confirmar-orden-compra/revisar-cantidad-linea-orden-compra/revisar-cantidad-linea-orden-compra.component */ 73944);
/* harmony import */ var _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./devoluciones/devoluciones.component */ 88902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;














































class AppLayoutModule {}
_class = AppLayoutModule;
_class.ɵfac = function AppLayoutModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_35__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_38__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_39__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_1__.AppConfigModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_40__.PanelMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_42__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_43__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_44__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_45__.FileUploadModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__.PrimeNgModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppLayoutModule, {
    declarations: [_shared_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_5__.AppMenuitemComponent, _shared_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.AppTopBarComponent, _shared_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _shared_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_3__.AppMenuComponent, _shared_sidebar_app_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.AppSidebarComponent, _app_layout_component__WEBPACK_IMPORTED_MODULE_2__.AppLayoutComponent, _ordenes_trabajo_ordenes_trabajo_component__WEBPACK_IMPORTED_MODULE_7__.OrdenesTrabajoComponent, _mostrar_tarea_mostrar_tarea_component__WEBPACK_IMPORTED_MODULE_8__.MostrarTareaComponent, _gastos_gastos_component__WEBPACK_IMPORTED_MODULE_9__.GastosComponent, _pdv_pdv_component__WEBPACK_IMPORTED_MODULE_10__.PdvComponent, _mostrar_tarea_mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_11__.MostrarTareaFinalizacionComponent, _mostrar_tarea_mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_12__.MostrarTareaTiempoComponent, _mostrar_tarea_mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_13__.MostrarTareaDocumentacionComponent, _mostrar_tarea_mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_15__.MostrarTareaPreRecComponent, _mostrar_tarea_mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_16__.MostrarTareaMovimientoComponent, _ordenes_trabajo_mostrar_orden_trabajo_mostrar_orden_trabajo_component__WEBPACK_IMPORTED_MODULE_17__.MostrarOrdenTrabajoComponent, _almacen_ingresar_stock_ingresar_stock_component__WEBPACK_IMPORTED_MODULE_18__.IngresarStockComponent, _almacen_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_19__.CrearProductoComponent, _almacen_crear_producto_propio_crear_producto_propio_component__WEBPACK_IMPORTED_MODULE_20__.CrearProductoPropioComponent, _almacen_almacen_component__WEBPACK_IMPORTED_MODULE_21__.AlmacenComponent, _almacen_escaner_escaner_component__WEBPACK_IMPORTED_MODULE_22__.EscanerComponent, _factura_reader_factura_reader_component__WEBPACK_IMPORTED_MODULE_23__.FacturaReaderComponent, _confirmar_orden_compra_confirmar_orden_compra_component__WEBPACK_IMPORTED_MODULE_24__.ConfirmarOrdenCompraComponent, _barcode_scanner_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_25__.BarcodeScannerComponent, _confirmar_orden_compra_revisar_cantidad_linea_orden_compra_revisar_cantidad_linea_orden_compra_component__WEBPACK_IMPORTED_MODULE_26__.RevisarCantidadLineaOrdenCompraComponent, _devoluciones_devoluciones_component__WEBPACK_IMPORTED_MODULE_27__.DevolucionesComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_34__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_35__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_36__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_37__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_38__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_39__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_1__.AppConfigModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_40__.PanelMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_42__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_43__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_44__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_45__.FileUploadModule, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_14__.PrimeNgModule],
    exports: [_app_layout_component__WEBPACK_IMPORTED_MODULE_2__.AppLayoutComponent]
  });
})();

/***/ }),

/***/ 68026:
/*!*********************************************************************!*\
  !*** ./src/app/layout/barcode-scanner/barcode-scanner.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScannerComponent: () => (/* binding */ BarcodeScannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 33041);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @zxing/ngx-scanner */ 93843);
var _class;


// the scanner!







function BarcodeScannerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "zxing-scanner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scanSuccess", function BarcodeScannerComponent_ng_container_6_Template_zxing_scanner_scanSuccess_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.mostrarCodigo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formats", ctx_r0.allowedFormats);
  }
}
function BarcodeScannerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " El Codigo de Barras:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.codigoEan, " ");
  }
}
class BarcodeScannerComponent {
  constructor() {
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.scannerActivo = false;
    this.notFound = false;
    this.codigoEan = null;
    this.hadSubmit = false;
    this.allowedFormats = [_zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.EAN_8, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.UPC_A, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.UPC_E, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.UPC_EAN_EXTENSION, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.DATA_MATRIX, _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat.QR_CODE];
  }
  enableScanner() {
    this.scannerActivo = true;
  }
  mostrarCodigo(codigo) {
    this.scannerActivo = false;
    this.codigoEan = codigo;
  }
}
_class = BarcodeScannerComponent;
_class.ɵfac = function BarcodeScannerComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-barcode-scanner"]],
  decls: 8,
  vars: 2,
  consts: [[1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "table-responsive"], ["pRipple", "", "label", "Escannear", "icon", "pi pi-camera", 1, "p-button-primary", 3, "click"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["data-dismiss", "modal", 3, "formats", "scanSuccess"], [1, "text-center"]],
  template: function BarcodeScannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Escanner de Codigo de Barras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "p-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BarcodeScannerComponent_Template_p_button_click_5_listener() {
        return ctx.enableScanner();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BarcodeScannerComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BarcodeScannerComponent_ng_container_7_Template, 5, 1, "ng-container", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.scannerActivo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.codigoEan != null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_7__.ZXingScannerComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 43859);
/* harmony import */ var _shared_menu_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/menu/app.menu.service */ 42089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
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

/***/ 92913:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigModule: () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 81763);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 1111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/fecha.service */ 71728);
/* harmony import */ var src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ordenes.service */ 48862);
/* harmony import */ var src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/proveedores.service */ 58192);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 29156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 39177);
var _class;
















function ConfirmarOrdenCompraComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_ng_template_5_Template(rf, ctx) {}
function ConfirmarOrdenCompraComponent_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmarOrdenCompraComponent_ng_container_1_ng_template_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_small_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Orden de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p-dropdown", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_div_6_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_small_7_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r8.ordenesCompras)("filter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx_r8.hadSubmit && !ctx_r8.validar("ordenCompra")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.ordenesCompras);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.hadSubmit && !ctx_r8.validar("ordenCompra"));
  }
}
function ConfirmarOrdenCompraComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "p-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ConfirmarOrdenCompraComponent_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ConfirmarOrdenCompraComponent_ng_container_1_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Recepcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 10)(11, "div", 11)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ConfirmarOrdenCompraComponent_ng_container_1_div_16_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfirmarOrdenCompraComponent_ng_container_1_small_17_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12)(22, "p-dropdown", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function ConfirmarOrdenCompraComponent_ng_container_1_Template_p_dropdown_onChange_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.cargarOrdenesComprasDelProveedor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ConfirmarOrdenCompraComponent_ng_container_1_div_23_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ConfirmarOrdenCompraComponent_ng_container_1_small_24_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ConfirmarOrdenCompraComponent_ng_container_1_ng_container_25_Template, 8, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17)(27, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfirmarOrdenCompraComponent_ng_container_1_Template_p_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.getLineasOrdenCompraRQBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.ubicaciones)("filter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r1.hadSubmit && !ctx_r1.validar("ubicacion")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.ubicaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("ubicacion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.proveedores)("filter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx_r1.hadSubmit && !ctx_r1.validar("proveedor")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.proveedores);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("proveedor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loadingOrdenes);
  }
}
class ConfirmarOrdenCompraComponent {
  constructor() {
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__.UbicacionesService);
    this.proveedoresService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_proveedores_service__WEBPACK_IMPORTED_MODULE_3__.ProveedoresService);
    this.ordenesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__.OrdenesService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.fechaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_1__.FechaService);
    this.subs = [];
    this.hadSubmit = false;
    this.loadingView = false;
    this.loadingOrdenes = false;
    this.getLineasOrdenCompraRQBody = this.Form.group({
      ubicacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      proveedor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      ordenCompra: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  get ubicacion() {
    return this.getLineasOrdenCompraRQBody.get('ubicacion');
  }
  get proveedor() {
    return this.getLineasOrdenCompraRQBody.get('proveedor');
  }
  get ordenCompra() {
    return this.getLineasOrdenCompraRQBody.get('ordenCompra');
  }
  ngOnInit() {
    this.cargarUbicaciones();
    this.cargarProveedores();
  }
  back() {
    this.router.navigateByUrl('/');
  }
  validar(campo) {
    return this.getLineasOrdenCompraRQBody.get(campo).valid;
  }
  cargarUbicaciones() {
    this.subs.push(this.ubicacionesService.getUbicacionesDeEntrada().subscribe({
      next: res => {
        console.log('UBICACIONES => ', res);
        this.ubicaciones = res;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  cargarProveedores() {
    this.subs.push(this.proveedoresService.getProveedores().subscribe({
      next: res => {
        console.log('PROVEEDORES => ', res);
        this.proveedores = res;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  cargarOrdenesComprasDelProveedor() {
    console.log('VOY A BUSCAR AL PROVEEDOR => ', this.proveedor);
    this.loadingOrdenes = true;
    this.ordenesCompras = null;
    this.subs.push(this.ordenesService.getOrdenesComprasByProveedor(this.proveedor.value.id).subscribe({
      next: res => {
        console.log('ORDENES DE COMPRAS => ', res);
        this.ordenesCompras = res;
        this.ordenesCompras.forEach(orden => {
          const fecheDeLaOrden = orden.fechaEjecucion ? this.fechaService.formatFechaAbsoluta(orden.fechaEjecucion) : 'N/A';
          const ordenNumero = orden.numero ? orden.numero : 'N/A';
          //@ts-ignore
          orden.label = `${ordenNumero} - ${fecheDeLaOrden}`;
        });
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  submit() {
    this.hadSubmit = true;
    if (this.getLineasOrdenCompraRQBody.invalid) {
      this.messageService.error('Verifique los campos');
      return;
    }
    this.loadingView = true; //cargando
    this.router.navigateByUrl(`/reivisar-cantidad-linea-orden-compra/${this.ordenCompra.value}/${this.ubicacion.value}`);
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = ConfirmarOrdenCompraComponent;
_class.ɵfac = function ConfirmarOrdenCompraComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-confirmar-orden-compra"]],
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], [1, "flex", "flex-row"], ["formControlName", "ubicacion", "placeholder", "Selecciona", "filterBy", "ubicacionId", "optionLabel", "ubicacionId", "optionValue", "ubicacionId", 1, "w-full", 3, "options", "filter", "ngClass"], ["class", "pt-2 ml-2", 4, "ngIf"], ["class", "p-error", 4, "ngIf"], ["formControlName", "proveedor", "filterBy", "nombre", "placeholder", "Selecciona", "optionLabel", "nombre", 1, "w-full", 3, "options", "filter", "ngClass", "onChange"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Iniciar recepcion", "icon", "pi pi-truck", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", 3, "click"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "p-error"], ["formControlName", "ordenCompra", "filterBy", "label", "placeholder", "Selecciona", "optionLabel", "label", "optionValue", "id", 1, "w-full", 3, "options", "filter", "ngClass"]],
  template: function ConfirmarOrdenCompraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ConfirmarOrdenCompraComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ConfirmarOrdenCompraComponent_ng_container_1_Template, 28, 16, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadingView);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loadingView);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 56996:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/confirmar-orden-compra/finalizar-orden-compra/finalizar-orden-compra.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinalizarOrdenCompraComponent: () => (/* binding */ FinalizarOrdenCompraComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ordenes.service */ 48862);
/* harmony import */ var _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 29156);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ 44123);

var _class;




















function FinalizarOrdenCompraComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FinalizarOrdenCompraComponent_ng_container_1_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
function FinalizarOrdenCompraComponent_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "button", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ubicacion ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FinalizarOrdenCompraComponent_ng_container_1_ng_template_19_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ubicacion_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.eliminarUbicacion(ubicacion_r11.ubicacionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ubicacion_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ubicacion_r11.ubicacionId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ubicacion_r11.detalles, " ");
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Agregue las ubicaciones de entrada * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Reporte al menos una ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FinalizarOrdenCompraComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "p-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FinalizarOrdenCompraComponent_ng_container_1_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FinalizarOrdenCompraComponent_ng_container_1_ng_template_6_Template, 1, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Reportar ubicaciones de entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "p-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FinalizarOrdenCompraComponent_ng_container_1_Template_p_dropdown_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.ubiSeleccinada = $event);
    })("onChange", function FinalizarOrdenCompraComponent_ng_container_1_Template_p_dropdown_onChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.agregarUbicacion($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FinalizarOrdenCompraComponent_ng_container_1_div_15_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 15)(17, "p-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, FinalizarOrdenCompraComponent_ng_container_1_ng_template_18_Template, 7, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, FinalizarOrdenCompraComponent_ng_container_1_ng_template_19_Template, 7, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, FinalizarOrdenCompraComponent_ng_container_1_ng_template_20_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FinalizarOrdenCompraComponent_ng_container_1_small_21_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 21)(23, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FinalizarOrdenCompraComponent_ng_container_1_Template_p_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.confirmarOrden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.ubiSeleccinada)("options", ctx_r1.selectUbicaciones)("filter", true)("resetFilterOnHide", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.selectUbicaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r1.ubicacionesToSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.ubicacionesToSend.length == 0);
  }
}
const _c1 = function () {
  return {
    width: "350px"
  };
};
class FinalizarOrdenCompraComponent {
  constructor() {
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
    this.ordenesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__.OrdenesService);
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__.UbicacionesService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService);
    this.subs = [];
    this.ordenID = null;
    this.personaID = null;
    this.hadSubmit = false;
    this.loadingView = false;
    this.selectUbicaciones = [];
    this.ubicacionesToSend = [];
    this.ubiSeleccinada = null;
  }
  ngOnInit() {
    var _this = this;
    this.activatedRoute.params.subscribe({
      next: function () {
        var _ref = (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.ordenID = yield params['idOrden'];
          _this.personaID = JSON.parse(localStorage.getItem('usuario')).id;
          _this.cargarUbicaciones();
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }
  back() {
    var _this2 = this;
    return (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lastUrl = yield sessionStorage.getItem('lastUrl');
      _this2.router.navigateByUrl(lastUrl);
    })();
  }
  cargarUbicaciones() {
    this.subs.push(this.ubicacionesService.getUbicacionesDeEntrada().subscribe({
      next: res => {
        console.log('UBICACIONES => ', res);
        this.selectUbicaciones = res;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  agregarUbicacion(ubicacionSelected) {
    this.ubicacionesToSend.push(ubicacionSelected);
    setTimeout(() => {
      this.ubiSeleccinada = null;
      this.selectUbicaciones = this.selectUbicaciones.filter(ubicacion => {
        return ubicacion != ubicacionSelected;
      });
    }, 100);
  }
  eliminarUbicacion(ubicacionId) {
    this.ubicacionesToSend = this.ubicacionesToSend.filter(ubicacion => {
      if (ubicacion.ubicacionId == ubicacionId) {
        this.selectUbicaciones = [ubicacion].concat(this.selectUbicaciones);
      }
      return ubicacion.ubicacionId != ubicacionId;
    });
  }
  confirmarOrden() {
    this.hadSubmit = true;
    if (!this.ubicacionesToSend || !this.ordenID || this.ubicacionesToSend.length == 0) {
      this.messageService.error('Verifique los campos');
      return;
    }
    let ubicacionesToSendFinal = [];
    this.ubicacionesToSend.forEach(ubicacion => {
      ubicacionesToSendFinal.push(ubicacion.ubicacionId);
    });
    const requestJson = {
      id: this.ordenID,
      rrhh: this.personaID,
      ubicaciones: ubicacionesToSendFinal
    };
    this.confirmationService.confirm({
      key: 'confirmarOrden',
      accept: () => {
        this.confirmationService.close();
        this.ordenesService.confirmarOrdenRecibida(requestJson).subscribe({
          next: res => {
            this.messageService.win('Orden de compra confirmada');
            this.router.navigateByUrl('/confirmar-orden-compra');
          },
          error: error => {
            console.error(error);
            error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
          }
        });
      },
      reject: () => {
        this.confirmationService.close();
      }
    });
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = FinalizarOrdenCompraComponent;
_class.ɵfac = function FinalizarOrdenCompraComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-finalizar-orden-compra"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 5,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], ["header", "Confirmacion", "key", "confirmarOrden", "icon", "pi pi-exclamation-triangle", "message", "Esta accion no se puede deshacer, por favor asegurese de haber reportado todas las ubicaciones", "acceptLabel", "Continuar", "rejectLabel", "Cancelar", "acceptButtonStyleClass", "p-button-text p-button-primary", "rejectButtonStyleClass", "p-button-text p-button-secondary"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], [1, "flex", "flex-row"], ["placeholder", "Selecciona", "filterBy", "ubicacionId", "optionLabel", "ubicacionId", 1, "w-full", 3, "ngModel", "options", "filter", "resetFilterOnHide", "ngModelChange", "onChange"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "flex", "flex-column", "justify-content-center", "align-items-center"], ["selectionMode", "single", 1, "w-full", "max-w-full", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "p-error", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Finalizar recepcion", "icon", "pi pi-check-square", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", 3, "routerLink"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "3", 1, "text-center"], [1, "p-error"]],
  template: function FinalizarOrdenCompraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FinalizarOrdenCompraComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FinalizarOrdenCompraComponent_ng_container_1_Template, 24, 7, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "p-confirmDialog", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadingView);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loadingView);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_3__.PrimeNgModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialog, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 73944:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/layout/confirmar-orden-compra/revisar-cantidad-linea-orden-compra/revisar-cantidad-linea-orden-compra.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevisarCantidadLineaOrdenCompraComponent: () => (/* binding */ RevisarCantidadLineaOrdenCompraComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mercancia.service */ 37098);
/* harmony import */ var src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ordenes.service */ 48862);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 44123);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 57411);

var _class;


















function RevisarCantidadLineaOrdenCompraComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "button", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Campo requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La cantidad debe ser entera");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "La cantidad debe ser positiva");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_p_button_19_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.enableFechaCaducidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_5_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_6_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_7_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 12)(9, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Numero de Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_Template_input_input_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.buscarFechaCaducidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_12_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fecha de Caducidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p-calendar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_div_18_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_p_button_19_Template, 1, 0, "p-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_small_20_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx_r5.hadSubmit && !ctx_r5.validar("cantidad")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && !ctx_r5.validar("cantidad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && !ctx_r5.esEntero(ctx_r5.confirmarLineaOrdenCompraRQBody.value.cantidad));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && !ctx_r5.esPositivo(ctx_r5.confirmarLineaOrdenCompraRQBody.value.cantidad));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx_r5.hadSubmit && ctx_r5.numeroLote.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && ctx_r5.numeroLote.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showOnFocus", false)("showIcon", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, ctx_r5.hadSubmit && !ctx_r5.validar("fechaCaducidad")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.loadingFechaCaducidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.fechaCaducidad.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.hadSubmit && ctx_r5.fechaCaducidad.invalid);
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15)(2, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_17_Template_p_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(ctx_r6.cantidad.value != null && ctx_r6.esEntero(ctx_r6.cantidad.value) && ctx_r6.esPositivo(ctx_r6.cantidad.value)));
  }
}
function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "p-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_template_6_Template, 1, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Revisar cantidad recibida de la orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 11)(11, "div", 12)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Codigo Ean");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_Template_input_input_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.cargarLineaOrdenCompra($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_small_15_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_16_Template, 21, 18, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_ng_container_17_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 15)(19, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function RevisarCantidadLineaOrdenCompraComponent_ng_container_1_Template_p_button_onClick_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.navegarFinalizarOrden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.confirmarLineaOrdenCompraRQBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("codigoEan")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && !ctx_r1.validar("codigoEan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.idUbicacion.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.idUbicacion.valid);
  }
}
const _c2 = function () {
  return {
    width: "350px"
  };
};
class RevisarCantidadLineaOrdenCompraComponent {
  constructor() {
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.ordenesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_ordenes_service__WEBPACK_IMPORTED_MODULE_3__.OrdenesService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__.CustomMessageService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_2__.MercanciaService);
    this.subs = [];
    this.lineaOrdenCompraSeleccionada = null;
    this.ordenID = null;
    this.ubicacionId = null;
    this.hadSubmit = false;
    this.loadingView = true;
    this.loadingFechaCaducidad = false;
    this.confirmarLineaOrdenCompraRQBody = this.Form.group({
      idOrdenCompraLinea: [null],
      idUbicacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      codigoEan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      cantidad: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      numeroLote: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      fechaCaducidad: [null]
    });
  }
  get idOrdenCompraLinea() {
    return this.confirmarLineaOrdenCompraRQBody.get('idOrdenCompraLinea');
  }
  get idUbicacion() {
    return this.confirmarLineaOrdenCompraRQBody.get('idUbicacion');
  }
  get codigoEan() {
    return this.confirmarLineaOrdenCompraRQBody.get('codigoEan');
  }
  get cantidad() {
    return this.confirmarLineaOrdenCompraRQBody.get('cantidad');
  }
  get numeroLote() {
    return this.confirmarLineaOrdenCompraRQBody.get('numeroLote');
  }
  get fechaCaducidad() {
    return this.confirmarLineaOrdenCompraRQBody.get('fechaCaducidad');
  }
  ngOnInit() {
    var _this = this;
    this.activatedRoute.params.subscribe({
      next: function () {
        var _ref = (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          const requestJson = {
            ubicacion: yield params['ubiId'],
            ordenCompra: yield params['idOrden']
          };
          _this.ordenID = yield params['idOrden'];
          _this.ubicacionId = yield params['ubiId'];
          _this.recibirCamionDeOrdenCompraRQ(requestJson);
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
    // setTimeout(() => {
    //   console.log('LAS LINEAS CON LAS QUE VAMOS A TRABAJAR =>', this.lineasOrdenCompra);
    // }, 2000);
  }

  back() {
    this.router.navigateByUrl('/confirmar-orden-compra');
  }
  validar(campo) {
    return this.confirmarLineaOrdenCompraRQBody.get(campo).valid;
  }
  esEntero(num) {
    if (num === null) return true;
    if (num === 0) return true;
    if (Number.isInteger(num)) {
      return true;
    } else return false;
  }
  esPositivo(num) {
    if (num < 0) {
      return false;
    }
    return true;
  }
  navegarFinalizarOrden() {
    sessionStorage.setItem('lastUrl', `/reivisar-cantidad-linea-orden-compra/${this.ordenID}/${this.ubicacionId}`);
    this.router.navigateByUrl('/finalizar-orden-compra/' + this.ordenID);
  }
  buscarFechaCaducidad() {
    if (this.codigoEan && this.numeroLote) {
      this.loadingFechaCaducidad = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.mercanciaService.getFechaCaducidad({
          codigoEan: this.codigoEan.value,
          numeroLote: this.numeroLote.value
        }).subscribe({
          next: res => {
            console.log('FECHA DE CADUCIDAD => ', res);
            this.loadingFechaCaducidad = false;
            this.fechaCaducidad.setValue(res.fechaCaducidad);
            if (res.fechaCaducidad !== null) {
              this.fechaCaducidad.disable();
            } else {
              this.fechaCaducidad.enable();
            }
          },
          error: error => {
            console.error(error);
            this.loadingFechaCaducidad = false;
            this.messageService.error(error.error.detail);
          }
        });
      }, 500);
    }
  }
  enableFechaCaducidad() {
    this.fechaCaducidad.enable();
  }
  cargarLineaOrdenCompra(barcode) {
    this.lineaOrdenCompraSeleccionada = null;
    this.lineasOrdenCompra.forEach(linea => {
      if (linea.codigoEan == barcode) {
        this.lineaOrdenCompraSeleccionada = linea;
        this.confirmarLineaOrdenCompraRQBody.reset(this.lineaOrdenCompraSeleccionada);
      }
    });
    if (this.lineaOrdenCompraSeleccionada == null) {
      const regex = /^[0-9]*$/;
      const barcodeString = barcode.toString();
      if (regex.test(barcodeString) && barcodeString.length == 13) {
        this.codigoEan.setValue(parseInt(barcodeString));
        this.idUbicacion.setValue(this.ubicacionId);
        this.idOrdenCompraLinea.setValue(null);
        this.cantidad.setValue(null);
      }
    }
    console.log(this.confirmarLineaOrdenCompraRQBody.value);
  }
  submit() {
    this.hadSubmit = true;
    const formValue = this.confirmarLineaOrdenCompraRQBody.value;
    console.log('el form => ', formValue);
    if (this.confirmarLineaOrdenCompraRQBody.invalid || !this.esEntero(formValue.cantidad) || !this.esPositivo(formValue.cantidad)) {
      this.messageService.error('Verifique los campos');
      return;
    }
    this.loadingView = true; //cargando
    const requestJson = JSON.parse(JSON.stringify(formValue));
    this.cofirmarCantidadLineaOrdenCompra(requestJson);
  }
  cofirmarCantidadLineaOrdenCompra(requestJson) {
    console.log('LAS LINEAS ESTABAN ASI => ', this.lineasOrdenCompra);
    this.subs.push(this.ordenesService.moverMercanciaUbicacionEntrada(requestJson).subscribe({
      next: res => {
        console.log('LINEA CONFIRMADA => ', res);
        this.messageService.win('Cantidad confirmada');
        this.hadSubmit = false;
        this.loadingView = false; // dejar de cargar
        if (this.lineaOrdenCompraSeleccionada != null) {
          this.lineaOrdenCompraSeleccionada.cantidad = this.lineaOrdenCompraSeleccionada.cantidad - this.cantidad.value;
          console.log('SU CANTIDAD QUEDO EN => ', this.lineaOrdenCompraSeleccionada.cantidad);
          if (this.lineaOrdenCompraSeleccionada.cantidad < 1) {
            this.lineasOrdenCompra = this.lineasOrdenCompra.filter(linea => {
              return linea.idOrdenCompraLinea != this.lineaOrdenCompraSeleccionada.idOrdenCompraLinea;
            });
          }
          console.log('LAS LINEAS QUEDARON ASI => ', this.lineasOrdenCompra);
          this.lineaOrdenCompraSeleccionada = null;
        }
        this.confirmarLineaOrdenCompraRQBody.reset();
      },
      error: error => {
        console.error(error);
        this.loadingView = false; // dejar de cargar
        error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  recibirCamionDeOrdenCompraRQ(requestJson) {
    this.subs.push(this.ordenesService.ordenCompraRecibirCamion(requestJson).subscribe({
      next: res => {
        console.log('LINEAS RECIBIDAS => ', res);
        this.lineasOrdenCompra = res;
        this.hadSubmit = false;
        this.loadingView = false;
      },
      error: error => {
        console.error(error);
        this.loadingView = false; // dejar de cargar
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
        this.router.navigateByUrl('/confirmar-orden-compra');
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = RevisarCantidadLineaOrdenCompraComponent;
_class.ɵfac = function RevisarCantidadLineaOrdenCompraComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-revisar-cantidad-linea-orden-compra"]],
  decls: 3,
  vars: 5,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], ["header", "Confirmacion", "key", "confirmarOrden", "icon", "pi pi-exclamation-triangle", "message", "Esta accion no se puede deshacer, por favor asegurese de haber revisado todo los productos", "acceptLabel", "Continuar", "rejectLabel", "Cancelar", "acceptButtonStyleClass", "p-button-text p-button-primary", "rejectButtonStyleClass", "p-button-text p-button-secondary"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-12"], ["autocomplete", "nope", "id", "codigoEan", "type", "number", "pInputText", "", "placeholder", "Ingrese el codigoEan", "formControlName", "codigoEan", 3, "ngClass", "input"], ["class", "p-error", 4, "ngIf"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Terminar recepcion", "icon", "pi pi-check-square", "styleClass", "p-button-primary", 1, "m-2", 3, "onClick"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", 3, "routerLink"], [1, "p-error"], ["autocomplete", "nope", "id", "cantidad", "type", "number", "pInputText", "", "placeholder", "Ingrese la Cantidad", "formControlName", "cantidad", 3, "ngClass"], ["for", "numeroLote", 1, "w-full"], ["id", "numeroLote", "type", "text", "formControlName", "numeroLote", "placeholder", "Numero de Lote", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngClass", "input"], ["for", "fechaCaducidad", 1, "w-full"], [1, "flex", "flex-row"], ["inputId", "icon", "placeholder", "Fecha de Caducidad", "formControlName", "fechaCaducidad", "dateFormat", "yy-mm-dd", 1, "w-full", 3, "showOnFocus", "showIcon", "ngClass"], ["class", "pt-2 ml-2", 4, "ngIf"], ["label", "Editar", "icon", "pi pi-pencil ", "class", "ml-2 w-6 lg:w-2", "styleClass", "p-button-outlined", 3, "onClick", 4, "ngIf"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], ["label", "Editar", "icon", "pi pi-pencil ", "styleClass", "p-button-outlined", 1, "ml-2", "w-6", "lg:w-2", 3, "onClick"], ["label", "Confirmar cantidad recibida", "icon", "pi pi-shopping-cart", "styleClass", "p-button-primary p-button-warning", 1, "m-2", 3, "disabled", "click"]],
  template: function RevisarCantidadLineaOrdenCompraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RevisarCantidadLineaOrdenCompraComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RevisarCantidadLineaOrdenCompraComponent_ng_container_1_Template, 20, 7, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-confirmDialog", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loadingView);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialog, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.Calendar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 88902:
/*!***************************************************************!*\
  !*** ./src/app/layout/devoluciones/devoluciones.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevolucionesComponent: () => (/* binding */ DevolucionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/enum.service */ 58241);
/* harmony import */ var src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/presupuesto.service */ 48369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 39177);
var _class;















function DevolucionesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
function DevolucionesComponent_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function DevolucionesComponent_ng_container_1_ng_template_6_Template(rf, ctx) {}
function DevolucionesComponent_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La cantidad debe ser un entero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La cantidad debe ser positiva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " La cantidad np puede ser cero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DevolucionesComponent_ng_container_1_small_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
function DevolucionesComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "p-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DevolucionesComponent_ng_container_1_ng_template_5_Template, 1, 2, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DevolucionesComponent_ng_container_1_ng_template_6_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Devoluciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 10)(11, "div", 11)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "p-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function DevolucionesComponent_ng_container_1_Template_p_dropdown_onChange_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.obtenerCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DevolucionesComponent_ng_container_1_div_16_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DevolucionesComponent_ng_container_1_small_17_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Codigo EAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function DevolucionesComponent_ng_container_1_Template_input_input_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.obtenerCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DevolucionesComponent_ng_container_1_small_23_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DevolucionesComponent_ng_container_1_div_29_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DevolucionesComponent_ng_container_1_small_30_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DevolucionesComponent_ng_container_1_small_31_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DevolucionesComponent_ng_container_1_small_32_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DevolucionesComponent_ng_container_1_small_33_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "p-dropdown", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, DevolucionesComponent_ng_container_1_small_39_Template, 2, 0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19)(41, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DevolucionesComponent_ng_container_1_Template_p_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.formDevolucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.presupuestos)("filter", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("presupuesto")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingPresupuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.presupuesto.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("codigoEan")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.codigoEan.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, ctx_r1.hadSubmit && (!ctx_r1.validar("cantidad") || ctx_r1.validarCantidad() > 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingCantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.cantidad.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.validarCantidad() == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.validarCantidad() == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.validarCantidad() == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.selectEstado)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c1, ctx_r1.hadSubmit && !ctx_r1.validar("estado")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadSubmit && ctx_r1.estado.invalid);
  }
}
class DevolucionesComponent {
  constructor() {
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.Form = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    this.presupuestoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PresupuestoService);
    this.enumService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_1__.EnumService);
    this.subs = [];
    this.hadSubmit = false;
    this.loading = false;
    this.loadingCantidad = false;
    this.loadingPresupuestos = false;
    this.cantidadOptenida = null;
    this.selectEstado = [];
    this.formDevolucion = this.Form.group({
      presupuesto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      codigoEan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cantidad: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      estado: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  get presupuesto() {
    return this.formDevolucion.get('presupuesto');
  }
  get codigoEan() {
    return this.formDevolucion.get('codigoEan');
  }
  get cantidad() {
    return this.formDevolucion.get('cantidad');
  }
  get estado() {
    return this.formDevolucion.get('estado');
  }
  ngOnInit() {
    this.cargarPresupuestos();
    this.cargarEstados();
  }
  validar(campo) {
    return this.formDevolucion.get(campo).valid;
  }
  esEntero(num) {
    if (num === null) return true;
    if (num === 0) return true;
    if (Number.isInteger(num)) {
      return true;
    } else return false;
  }
  esPositivo(num) {
    if (num < 0) {
      return false;
    }
    return true;
  }
  validarCantidad() {
    const cant = this.cantidad.value;
    if (!this.esEntero(cant)) {
      return 1;
    }
    if (!this.esPositivo(cant)) {
      return 2;
    }
    if (cant === 0) return 3;
    return 0;
  }
  cargarEstados() {
    this.subs.push(this.enumService.getEnum('estado_devolucion').subscribe({
      next: res => this.selectEstado = res,
      error: error => this.messageService.error(error.error.detail)
    }));
  }
  cargarPresupuestos() {
    this.loadingPresupuestos = true;
    this.subs.push(this.presupuestoService.getPresupuestos().subscribe({
      next: res => {
        console.log('PRESUPUESTOS => ', res);
        this.presupuestos = res;
        this.loadingPresupuestos = false;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
        this.loadingPresupuestos = false;
      }
    }));
  }
  obtenerCantidad() {
    clearTimeout(this.timeout);
    console.log(this.codigoEan.value?.toString().length);
    if (this.validarCantidad() > 0 || this.presupuesto.invalid || this.codigoEan.invalid || this.codigoEan.value?.toString().length < 13) {
      return;
    }
    this.loadingCantidad = true;
    this.timeout = setTimeout(() => {
      this.cantidad.enable();
      const body = {
        presupuesto: this.presupuesto.value,
        codigoEan: this.codigoEan.value
      };
      this.subs.push(this.presupuestoService.getCantidadProductoEnPresupuesto(body).subscribe({
        next: res => {
          console.log('CANTIDAD OPTENIDA => ', res);
          this.cantidadOptenida = res.cantidad;
          this.cantidad.setValue(res.cantidad);
          this.loadingCantidad = false;
        },
        error: error => {
          console.error(error);
          this.loadingCantidad = false;
          this.messageService.error(error.error.detail);
          this.cantidadOptenida = null;
          this.cantidad.disable();
        }
      }));
    }, 500);
  }
  submit() {
    this.hadSubmit = true;
    if (this.formDevolucion.invalid || !this.cantidadOptenida || this.validarCantidad() > 0) {
      this.messageService.error('Revise los campos');
      return;
    }
    this.loading = true;
    const devolucionToSend = this.formDevolucion.value;
    this.subs.push(this.presupuestoService.registrarDevolucionDePresupuesto(devolucionToSend).subscribe({
      next: res => {
        console.log('LA DEVOLUCION => ', res);
        this.messageService.win('Devulcion registrada con exito');
        this.formDevolucion.reset();
        this.loading = false;
        this.hadSubmit = false;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
        this.loading = false;
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
_class = DevolucionesComponent;
_class.ɵfac = function DevolucionesComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-devoluciones"]],
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "flex", "flex-row"], ["formControlName", "presupuesto", "placeholder", "Selecciona", "optionLabel", "nombre", "optionValue", "id", "filterBy", "nombre", 1, "w-full", 3, "options", "filter", "ngClass", "onChange"], ["class", "pt-2 ml-2", 4, "ngIf"], ["class", "p-error", 4, "ngIf"], ["pInputText", "", "inputId", "codigoEan", "id", "codigoEan", "type", "number", "autocomplete", "nope", "placeholder", "Ingrese el codigoEan", "formControlName", "codigoEan", 3, "ngClass", "input"], ["pInputText", "", "inputId", "cantidad", "id", "cantidad", "type", "number", "autocomplete", "nope", "placeholder", "Ingrese el cantidad", "formControlName", "cantidad", 3, "ngClass"], ["formControlName", "estado", "placeholder", "Selecciona", 1, "w-full", 3, "options", "ngClass"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "routerLink"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "p-error"]],
  template: function DevolucionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DevolucionesComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DevolucionesComponent_ng_container_1_Template, 42, 25, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 30938:
/*!*******************************************************************!*\
  !*** ./src/app/layout/factura-reader/factura-reader.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacturaReaderComponent: () => (/* binding */ FacturaReaderComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tesseract.js */ 68433);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 56192);

var _class;












const _c0 = ["outputImage"];
const _c1 = ["inputImage"];
function FacturaReaderComponent_ng_template_6_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-fileUpload", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FacturaReaderComponent_ng_template_6_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FacturaReaderComponent_ng_template_6_p_button_2_Template, 1, 0, "p-button", 10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FacturaReaderComponent_p_button_10_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.subirImagen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FacturaReaderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function FacturaReaderComponent_ng_container_12_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 19)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Imagen caputarada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_ng_container_12_div_3_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cant");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Imp");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_ng_container_12_div_3_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const registroFactura_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r22.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", registroFactura_r22.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", registroFactura_r22.importe, " \u20AC");
  }
}
function FacturaReaderComponent_ng_container_12_div_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FacturaReaderComponent_ng_container_12_div_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const linea_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", linea_r23.text, " ");
  }
}
function FacturaReaderComponent_ng_container_12_div_3_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23)(2, "h5")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "HUBO UN ERROR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.imagenes[0] == null ? null : ctx_r21.imagenes[0].errorFunc);
  }
}
function FacturaReaderComponent_ng_container_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FacturaReaderComponent_ng_container_12_div_3_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const imagen_r14 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.borrarImagen(imagen_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23)(4, "h6")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "CIF de la factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "N de la factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FacturaReaderComponent_ng_container_12_div_3_ng_template_13_Template, 7, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FacturaReaderComponent_ng_container_12_div_3_ng_template_14_Template, 7, 3, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "canvas", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "img", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function FacturaReaderComponent_ng_container_12_div_3_Template_img_load_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.cargarDataDectectedImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 23)(23, "h6")(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "TEXTO DETECTADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, FacturaReaderComponent_ng_container_12_div_3_ng_template_27_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, FacturaReaderComponent_ng_container_12_div_3_ng_template_28_Template, 3, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br")(30, "br")(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, FacturaReaderComponent_ng_container_12_div_3_ng_container_32_Template, 7, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const imagen_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.cif, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.nFactura, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", imagen_r14.tabla);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", imagen_r14.imagen || "https://source.unsplash.com/random", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r13.textDeLaImagen.data.lines);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.imagenes[0] == null ? null : ctx_r13.imagenes[0].errorFunc);
  }
}
function FacturaReaderComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FacturaReaderComponent_ng_container_12_label_1_Template, 3, 0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FacturaReaderComponent_ng_container_12_div_3_Template, 33, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.imagenes && ctx_r3.imagenes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.imagenes);
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
    this.loading = false;
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
    //       error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
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
      let errorH = false;
      let errorFuncion = null;
      _this.loading = true;
      const worker = yield (0,tesseract_js__WEBPACK_IMPORTED_MODULE_3__.createWorker)('spa', 2, {
        legacyCore: true,
        legacyLang: true
      });
      // this.textDeLaImagen = await recognize(this.imagenSubida, 'spa', {
      //   legacyCore: true,
      //   legacyLang: true
      // });
      _this.textDeLaImagen = yield worker.recognize(_this.imagenSubida);
      _this.loading = false;
      if (!errorH) {
        // ver las lineas en la consola
        console.log(_this.textDeLaImagen.data);
        const algo = document.getElementById('algo');
        // setTimeout(() => {
        //   console.log('algo => ', this.textDeLaImagen.data['hocr']);
        //   algo.innerHTML = this.textDeLaImagen.data['hocr'];
        // }, 1000);
        // buscando cif
        try {
          _this.cif = _this.buscarCifFactura(_this.textDeLaImagen);
          _this.cif = _this.cif ? _this.cif.data : 'not Found';
        } catch {
          errorFuncion = 'error en buscarCifFactura()';
        }
        // buscando numero de factura
        // this.nFactura = this.buscarNFactura(this.textDeLaImagen);
        // this.nFactura = this.nFactura ? this.nFactura : 'not Found';
        let j = 1;
        let cabeceraIndex = null;
        try {
          cabeceraIndex = _this.buscarCabeceraFactura(_this.textDeLaImagen);
        } catch {
          errorFuncion = 'error en buscarCabeceraFactura()';
        }
        if (cabeceraIndex != null) {
          console.log('LA CABECERA => ', _this.textDeLaImagen.data.lines[cabeceraIndex].text);
          let subtotalIndex = null;
          try {
            subtotalIndex = _this.buscarSubtotalFactura(_this.textDeLaImagen, cabeceraIndex);
          } catch {
            errorFuncion = 'error en buscarSubtotalFactura()';
          }
          if (subtotalIndex != null) {
            console.log('EL "SUBTOTAL" => ', _this.textDeLaImagen.data.lines[subtotalIndex].text);
            console.log('-------EMPEZAMOS A METER PRODUCTOS----------');
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
                console.log('LA LINEA QUE ESTAMOS VIENDO => ', linea.text);
                palabras.forEach(palabra => {
                  if (buscandoCantidad && _this.contieneNumeros(palabra.text)) {
                    buscandoCantidad = false;
                    cantidadDeLaLinea = palabra.text;
                    laPalabraDeCantidad = palabra;
                  }
                });
                if (laPalabraDeCantidad != null) {
                  palabras = palabras.filter(palabra => palabra != laPalabraDeCantidad);
                }
                palabrasLenght = palabras.length;
                let importeDeLaLinea = null;
                let laPalabraDeImporte = null;
                let buscandoImporte = true;
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
                if (laPalabraDeImporte != null) {
                  palabras = palabras.filter(palabra => palabra != laPalabraDeImporte);
                }
                palabras.forEach(palabra => {
                  descripcion += palabra.text + ' ';
                });
                console.log('LA DESCRIPCION DEL PRODUCTO => ', descripcion);
                let registro = {
                  id: j,
                  cantidad: cantidadDeLaLinea ? parseInt(cantidadDeLaLinea.replace(',', '.')) : 'N/A',
                  importe: importeDeLaLinea ? parseFloat(importeDeLaLinea.replace(',', '.')) : 'N/A',
                  precio: null,
                  descripcion: descripcion ? descripcion : 'N/A'
                };
                // registro.precio = registro.importe / registro.cantidad;
                _this.tabla.push(registro);
              }
              j++;
              if (i < subtotalIndex - 1) console.log('-------SIGUIENTE PRODUCTO----------');
              console.log('1,80 a parseFloat => ', parseFloat('1,80'));
            }
          } else {
            console.log('NO HAY SUBTOTAL');
          }
        } else {
          console.log('NO HAY CABECERA');
        }
        console.log('-------TERMINAMOS DE METER PRODUCTOS----------');
        console.log('la tabla => ', _this.tabla);
      }
      const imagenToSave = {
        id: Math.floor(Math.random() * 100),
        imagen: '' + _this.imagenSubida,
        texto: errorH ? 'HUBO UN ERROR AL CARGAR LA IMAGEN' : _this.textDeLaImagen.data.text,
        tabla: JSON.parse(JSON.stringify(_this.tabla)),
        errorFunc: errorFuncion ? errorFuncion : null
      };
      _this.tabla = [];
      if (_this.imagenes.length > 0) _this.imagenes.pop();
      _this.imagenes.push(imagenToSave);
      _this.imagenSubida = null;
    })();
  }
  cargarDataDectectedImg() {
    setTimeout(() => {
      const canvasElement = this.outputImage.nativeElement;
      const imageElement = this.inputImage.nativeElement;
      const {
        naturalWidth,
        naturalHeight
      } = imageElement;
      this.cx = canvasElement.getContext('2d');
      this.cx.lineWidth = 5;
      this.cx.lineCap = 'square';
      this.cx.strokeStyle = 'green';
      canvasElement.width = naturalWidth;
      canvasElement.height = naturalHeight;
      this.textDeLaImagen.data.words.forEach(w => {
        const bounding = w.bbox; // [1,1,2,2]
        console.log(bounding);
        this.cx.strokeStyle = 'red';
        this.cx.strokeRect(bounding.x0, bounding.y0, bounding.x1 - bounding.x0, bounding.y1 - bounding.y0);
        this.cx.beginPath();
        // this.cx.moveTo(w.baseline.x0, w.baseline.y0);
        // this.cx.lineTo(w.baseline.x1, w.baseline.y1);
        this.cx.stroke();
      });
    }, 1000);
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
    let indiceRecord = null;
    let i = 0;
    textDeLaImagen.data.lines.forEach(linea => {
      let contCabecera = 0;
      linea.words.forEach(palabraDeLaLinea => {
        cabeceraKeys.forEach(palabraDeLaCabecera => {
          if (this.similitud(palabraDeLaLinea.text, palabraDeLaCabecera) * 100 == 100) {
            contCabecera++;
          }
        });
      });
      if (contCabecera >= 2 && indiceRecord == null) {
        record = contCabecera;
        indiceRecord = 0 + i;
      }
      i++;
    });
    return indiceRecord;
    // console.log(
    //   'la cabecera con un record de (' + record + ') => ',
    //   textDeLaImagen.data.lines[indiceRecord],
    // );
    // return indiceRecord;
  }

  buscarSubtotalFactura(textDeLaImagen, cabeceraIndex) {
    const subtotalKeys = ['total', 'base', 'iva', 'i.v.a', 'subtotal', 'total:', 'base:', 'iva:', 'i.v.a:', 'subtotal:'];
    let porcentajeRecord = 50;
    let indiceSubtotal = null;
    let i = 0;
    textDeLaImagen.data.lines.forEach(linea => {
      linea.words.forEach(palabraDeLaLinea => {
        subtotalKeys.forEach(subtotalKey => {
          if (i > cabeceraIndex &&
          // true = esta debajo de la cabecera
          indiceSubtotal == null &&
          // true = si no hemos encontrado el subtotal aun
          this.similitud(palabraDeLaLinea.text, subtotalKey) * 100 == 100 // true = si es igual
          ) {
            indiceSubtotal = 0 + i;
          }
        });
      });
      i++;
    });
    // console.log(
    //   'el sub total esta en la linea (' +
    //     indiceSubtotal +
    //     ') con un ' +
    //     porcentajeRecord +
    //     '% => ',
    //   textDeLaImagen.data.lines[indiceSubtotal]
    // );
    return indiceSubtotal;
  }
  buscarCifFactura(textDeLaImagen) {
    let porcentajeRecord = 50;
    let indiceCif = null;
    const cifRegex = /^[a-zA-Z][0-9]{8}$/;
    const cifRegex2 = /^[a-zA-Z]-[0-9]{8}$/;
    const cifRegex3 = /^\([a-zA-Z][0-9]{8}\)$/;
    const cifRegex4 = /^\([a-zA-Z]-[0-9]{8}\)$/;
    const cifRegex5 = /^[48][0-9]{8}$/;
    const cifRegex6 = /^[48]-[0-9]{8}$/;
    const cifRegex7 = /^\([48][0-9]{8}\)$/;
    const cifRegex8 = /^\([48]-[0-9]{8}\)$/;
    let i = 0; // determina la linea
    // console.log(
    //   `EL TEXTO "(B81241796)" ES UN CIF ? => `,
    //   cifRegex.test('(B81241796)') ||
    //     cifRegex2.test('(B81241796)') ||
    //     cifRegex3.test('(B81241796)') ||
    //     cifRegex4.test('(B81241796)')
    // );
    console.log('ESTOY BUSCANDO EL CIF');
    textDeLaImagen.data.lines.forEach(linea => {
      let j = 0; // determina la palabra
      linea.words.forEach(palabraDeLaLinea => {
        // console.log('ESTOY BUSCANDO EL CIF EN => ', palabraDeLaLinea);
        if (indiceCif == null) {
          if (cifRegex.test(palabraDeLaLinea.text) || cifRegex2.test(palabraDeLaLinea.text)) {
            let cifAGuardar = ''.concat(palabraDeLaLinea.text);
            if (cifAGuardar[0] == '4') {
              cifAGuardar = 'A'.concat(cifAGuardar.substring(1, cifAGuardar.length));
            }
            if (cifAGuardar[0] == '8') {
              cifAGuardar = 'B'.concat(cifAGuardar.substring(1, cifAGuardar.length));
            }
            indiceCif = {
              linea: i,
              palabra: j,
              data: cifAGuardar
            };
            console.log('El CIF es => ', indiceCif.data);
            console.log('El CIF esta en la linea (' + indiceCif.linea + ') => ', textDeLaImagen.data.lines[indiceCif.linea].text);
            return indiceCif;
          } else if (cifRegex3.test(palabraDeLaLinea.text) || cifRegex4.test(palabraDeLaLinea.text)) {
            let cifAGuardar = ''.concat(palabraDeLaLinea.text);
            cifAGuardar = cifAGuardar.replace('(', '').replace(')', '');
            if (cifAGuardar[0] == '4') {
              cifAGuardar = 'A'.concat(cifAGuardar.substring(1, cifAGuardar.length));
            }
            if (cifAGuardar[0] == '8') {
              cifAGuardar = 'B'.concat(cifAGuardar.substring(1, cifAGuardar.length));
            }
            indiceCif = {
              linea: i,
              palabra: j,
              data: cifAGuardar
            };
            console.log('El CIF es => ', indiceCif.data);
            console.log('El CIF esta en la linea (' + indiceCif.linea + ') => ', textDeLaImagen.data.lines[indiceCif.linea].text);
            return indiceCif;
          }
        }
        j++;
      });
      if (indiceCif == null) {
        linea.words.forEach(palabraDeLaLinea => {
          // console.log('ESTOY BUSCANDO EL CIF EN => ', palabraDeLaLinea);
          if (indiceCif == null) {
            if (cifRegex5.test(palabraDeLaLinea.text) || cifRegex6.test(palabraDeLaLinea.text)) {
              let cifAGuardar = ''.concat(palabraDeLaLinea.text);
              if (cifAGuardar[0] == '4') {
                cifAGuardar = 'A'.concat(cifAGuardar.substring(1, cifAGuardar.length));
              }
              if (cifAGuardar[0] == '8') {
                cifAGuardar = 'B'.concat(cifAGuardar.substring(1, cifAGuardar.length));
              }
              indiceCif = {
                linea: i,
                palabra: j,
                data: cifAGuardar
              };
              console.log('El CIF es => ', indiceCif.data);
              console.log('El CIF esta en la linea (' + indiceCif.linea + ') => ', textDeLaImagen.data.lines[indiceCif.linea].text);
              return indiceCif;
            } else if (cifRegex7.test(palabraDeLaLinea.text) || cifRegex8.test(palabraDeLaLinea.text)) {
              let cifAGuardar = ''.concat(palabraDeLaLinea.text);
              cifAGuardar = cifAGuardar.replace('(', '').replace(')', '');
              if (cifAGuardar[0] == '4') {
                cifAGuardar = 'A'.concat(cifAGuardar.substring(1, cifAGuardar.length));
              }
              if (cifAGuardar[0] == '8') {
                cifAGuardar = 'B'.concat(cifAGuardar.substring(1, cifAGuardar.length));
              }
              indiceCif = {
                linea: i,
                palabra: j,
                data: cifAGuardar
              };
              console.log('El CIF es => ', indiceCif.data);
              console.log('El CIF esta en la linea (' + indiceCif.linea + ') => ', textDeLaImagen.data.lines[indiceCif.linea].text);
              return indiceCif;
            }
          }
          j++;
        });
      }
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
  viewQuery: function FacturaReaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.outputImage = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inputImage = _t.first);
    }
  },
  decls: 13,
  vars: 4,
  consts: [[1, "card"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "max-width", "10rem", 3, "src"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "20vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], ["class", "w-full", 4, "ngIf"], ["id", "algo", 1, "grid", "mt-1"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "w-full"], [1, "col-12"], [1, "card", "mb-0", 2, "position", "relative"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", 2, "position", "absolute", "top", "0", "right", "0", 3, "click"], [1, "flex", "flex-column", "justify-content-center", "align-items-center"], ["selectionMode", "single", 1, "max-w-full", 3, "value"], ["pTemplate", "body"], [1, "justify-content-center", "align-items-center"], [1, "canvas-overlay"], ["outputImage", ""], ["alt", "", 1, "input-image", 3, "src", "load"], ["inputImage", ""], ["selectionMode", "single", 3, "value"], [2, "padding", "0", "border-color", "black"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FacturaReaderComponent_ng_container_11_Template, 3, 0, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FacturaReaderComponent_ng_container_12_Template, 4, 2, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.imagenSubida);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_10__.FileUpload, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table],
  styles: ["@media screen and (min-width: 768px) {\n  .canvas-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 60rem;\n    width: 50rem;\n    object-fit: contain;\n    background-color: rgba(229, 237, 255, 0.3803921569);\n    box-shadow: 0 0 10px #efefef;\n  }\n  .input-image[_ngcontent-%COMP%] {\n    height: 60rem;\n    width: 50rem;\n    object-fit: contain;\n  }\n}\n@media screen and (min-width: 481px) and (max-width: 767px) {\n  .canvas-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 50rem;\n    width: 40rem;\n    object-fit: contain;\n    background-color: rgba(229, 237, 255, 0.3803921569);\n    box-shadow: 0 0 10px #efefef;\n  }\n  .input-image[_ngcontent-%COMP%] {\n    height: 50rem;\n    width: 40rem;\n    object-fit: contain;\n  }\n}\n@media screen and (max-width: 480px) {\n  .canvas-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 50rem;\n    width: 25rem;\n    object-fit: contain;\n    background-color: rgba(229, 237, 255, 0.3803921569);\n    box-shadow: 0 0 10px #efefef;\n  }\n  .input-image[_ngcontent-%COMP%] {\n    height: 50rem;\n    width: 25rem;\n    object-fit: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2ZhY3R1cmEtcmVhZGVyL2ZhY3R1cmEtcmVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxtREFBQTtJQUNBLDRCQUFBO0VBQ0Y7RUFFQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLG1EQUFBO0lBQ0EsNEJBQUE7RUFERjtFQUlBO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsbURBQUE7SUFDQSw0QkFBQTtFQUhGO0VBTUE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBSkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYW52YXMtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNjByZW07XG4gICAgd2lkdGg6IDUwcmVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWRmZjYxO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlZmVmZWY7XG4gIH1cbiAgXG4gIC5pbnB1dC1pbWFnZSB7XG4gICAgaGVpZ2h0OiA2MHJlbTtcbiAgICB3aWR0aDogNTByZW07XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG59IFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FudmFzLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDUwcmVtO1xuICAgIHdpZHRoOiA0MHJlbTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWVkZmY2MTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZWZlZmVmO1xuICB9XG4gIFxuICAuaW5wdXQtaW1hZ2Uge1xuICAgIGhlaWdodDogNTByZW07XG4gICAgd2lkdGg6IDQwcmVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxufSBcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jYW52YXMtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNTByZW07XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWRmZjYxO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNlZmVmZWY7XG4gIH1cbiAgXG4gIC5pbnB1dC1pbWFnZSB7XG4gICAgaGVpZ2h0OiA1MHJlbTtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 27954:
/*!***************************************************!*\
  !*** ./src/app/layout/gastos/gastos.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosComponent: () => (/* binding */ GastosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/presupuesto.service */ 48369);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pruebas.service */ 88500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fileupload */ 88285);
var _class;















function GastosComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GastosComponent_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GastosComponent_ng_container_1_ng_template_20_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-fileUpload", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelect", function GastosComponent_ng_container_1_ng_template_20_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onSelectImg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showUploadButton", false);
  }
}
function GastosComponent_ng_container_1_ng_template_20_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GastosComponent_ng_container_1_ng_template_20_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function GastosComponent_ng_container_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GastosComponent_ng_container_1_ng_template_20_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GastosComponent_ng_container_1_ng_template_20_p_button_2_Template, 1, 0, "p-button", 24);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.imagenSubida);
  }
}
const _c0 = function () {
  return ["/"];
};
function GastosComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Registrar PDV");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Rellene los campos a editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7)(10, "div", 8)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Seleccione un presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function GastosComponent_ng_container_1_Template_p_dropdown_onChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.cargarImagenPreviaDelPresupuesto($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, GastosComponent_ng_container_1_div_15_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GastosComponent_ng_container_1_ng_template_20_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GastosComponent_ng_container_1_Template_p_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.newPDV);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.presupuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loadingPresupuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
  }
}
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
    this.loadingPresupuestos = true;
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
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
    }));
  }
  // cargo los presupeustos del select homonimo
  cargarPresupuestos() {
    // this.presupuestos = this.pruebaService.getPresupuestos()
    this.loadingPresupuestos = true;
    this.subs.push(this.presupuestoService.getPresupuestos().subscribe(response => {
      this.loadingPresupuestos = false;
      this.presupuestos = response;
      console.log(this.presupuestos);
    }, error => {
      console.log(error);
      this.loadingPresupuestos = false;
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
    }));
  }
  cargarImagenPresupuesto(gastoToSend) {
    console.log(gastoToSend);
    this.loading = true;
    this.subs.push(this.presupuestoService.editPresupuesto(gastoToSend).subscribe(response => {
      console.log(response);
      this.loading = false;
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
      error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
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
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [1, "", 3, "formGroup"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "flex", "flex-row"], ["formControlName", "presupuesto", "placeholder", "Selecciona", "optionLabel", "nombre", "optionValue", "id", 1, "w-15rem", 3, "options", "onChange"], ["class", "pt-2 ml-2", 4, "ngIf"], [1, "field", "pl-0", "pt-1", "pb-0", "md:col-6"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "width", "100%", 3, "src"], [1, "flex", "flex-column", "md:flex-row"], ["label", "Cancelar", "icon", "pi pi-times", "styleClass", "p-button-secondary mr-3", 1, "m-2", 3, "routerLink"], ["label", "Guardar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], [1, "pt-2", "ml-2"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "1.4rem"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"]],
  template: function GastosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GastosComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GastosComponent_ng_container_1_Template, 26, 6, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_fieldset__WEBPACK_IMPORTED_MODULE_10__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_11__.FileUpload],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14572:
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-documentacion/mostrar-tarea-documentacion.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaDocumentacionComponent: () => (/* binding */ MostrarTareaDocumentacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ 88285);
var _class;










function MostrarTareaDocumentacionComponent_ng_template_5_p_fileUpload_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-fileUpload", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function MostrarTareaDocumentacionComponent_ng_template_5_p_fileUpload_1_Template_p_fileUpload_onSelect_0_listener($event) {
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
function MostrarTareaDocumentacionComponent_ng_template_5_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_ng_template_5_p_button_2_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onRemoveImg());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MostrarTareaDocumentacionComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MostrarTareaDocumentacionComponent_ng_template_5_p_fileUpload_1_Template, 1, 1, "p-fileUpload", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MostrarTareaDocumentacionComponent_ng_template_5_p_button_2_Template, 1, 0, "p-button", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.imagenSubida);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imagenSubida);
  }
}
function MostrarTareaDocumentacionComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 15);
  }
}
function MostrarTareaDocumentacionComponent_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_p_button_10_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.subirImagen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MostrarTareaDocumentacionComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaDocumentacionComponent_ng_container_15_div_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const imagen_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.borrarImagen(imagen_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const imagen_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r15.loadingDelete && ctx_r15.idOnDelete === imagen_r16.id ? "pi pi-spin pi-spinner" : "pi pi-trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imagen_r16.imagen || "https://source.unsplash.com/random", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MostrarTareaDocumentacionComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MostrarTareaDocumentacionComponent_ng_container_15_div_1_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.imagenes);
  }
}
function MostrarTareaDocumentacionComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No hay imagenes guardadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function MostrarTareaDocumentacionComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function MostrarTareaDocumentacionComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
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
    this.imagenes = [];
    this.loadingImgs = true;
    this.loadingSubmit = false;
    this.loadingDelete = false;
    this.idOnDelete = null;
  }
  ngOnInit() {
    this.subcripciones.push(this.tareaService.getImagenesLineaTarea(this.tarea.id).subscribe({
      next: response => {
        // console.log(response);
        this.loadingImgs = false;
        this.imagenes = response;
      },
      error: error => {
        this.loadingImgs = false;
        console.log(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
    this.loadingSubmit = true;
    this.subcripciones.push(this.tareaService.subirImagenLineaTarea({
      id: this.tarea.id,
      imagen: this.imagenSubida
    }).subscribe({
      next: response => {
        this.loadingSubmit = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'la imagen a sido subida'
        });
        this.onRemoveImg();
        this.loadingImgs = true;
        this.ngOnInit();
      },
      error: error => {
        this.loadingSubmit = false;
        console.log(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  borrarImagen(id) {
    this.loadingDelete = true;
    this.idOnDelete = id;
    this.subcripciones.push(this.tareaService.borrarImagenLineaTarea(id).subscribe({
      next: response => {
        this.loadingDelete = false;
        this.idOnDelete = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'la imagen a sido borrada'
        });
        this.ngOnInit();
      },
      error: error => {
        this.loadingDelete = false;
        this.idOnDelete = null;
        console.log(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
  decls: 19,
  vars: 7,
  consts: [[1, "field", "pl-0", "pt-1", "pb-0", "md:col-4"], [1, "mb-3"], ["pTemplate", "header"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["alt", "", 1, "p-3", "shadow-lg", "rounded-lg", 2, "height", "auto", "max-width", "10rem", 3, "src"], ["class", "pi pi-spin pi-spinner", "style", "font-size: 2rem", 4, "ngIf"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click", 4, "ngIf"], [1, "w-full"], [1, "grid", "mt-1"], [4, "ngIf"], [1, "flex", "align-items-center", "text-primary"], ["class", "img-custom-width", "mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 3, "showUploadButton", "onSelect", 4, "ngIf"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click", 4, "ngIf"], ["mode", "basic", "chooseLabel", "Seleccione", "accept", "image/*", 1, "img-custom-width", 3, "showUploadButton", "onSelect"], ["label", "Eliminar", "icon", "pi pi-trash ", "styleClass", "p-button-danger", 3, "click"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], ["label", "Subir", "icon", "pi pi-arrow-up ", "styleClass", "p-button-primary", 3, "click"], ["class", "col-6 lg:col-3 xl:col-3", 4, "ngFor", "ngForOf"], [1, "col-6", "lg:col-3", "xl:col-3"], [1, "card", "mb-0", 2, "position", "relative"], ["pButton", "", "type", "button", 1, "p-button-danger", 2, "position", "absolute", "top", "0", "right", "0", 3, "icon", "click"], [1, "flex", "justify-content-center", "align-items-center"], ["alt", "", 2, "height", "auto", "width", "18vw", "max-width", "18vw", "max-height", "18vw", "height", "18vw", "border-radius", "10%", 3, "src"], [1, "col-12", "align-items-center", "justify-content-center"], [1, "card", "mb-0", "text-center", 2, "position", "relative"], [1, "col-6", "lg:col-3", "xl:col-3", "align-items-center", "justify-content-center"], [1, "card", "mb-0", "flex", "align-items-center", "justify-content-center", "text-center", "h-full", 2, "position", "relative"]],
  template: function MostrarTareaDocumentacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Agregar Imagen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MostrarTareaDocumentacionComponent_ng_template_5_Template, 3, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MostrarTareaDocumentacionComponent_i_8_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MostrarTareaDocumentacionComponent_p_button_10_Template, 1, 0, "p-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7)(12, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Imagenes guardadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MostrarTareaDocumentacionComponent_ng_container_15_Template, 2, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MostrarTareaDocumentacionComponent_ng_container_16_Template, 5, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MostrarTareaDocumentacionComponent_ng_container_17_Template, 4, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MostrarTareaDocumentacionComponent_ng_container_18_Template, 4, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imagenSubida, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingSubmit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenSubida);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenes.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenes.length == 0 && !ctx.loadingImgs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenes.length > 0 && ctx.loadingImgs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.imagenes.length == 0 && ctx.loadingImgs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__.Fieldset, primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__.FileUpload],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 50986:
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaFinalizacionComponent: () => (/* binding */ MostrarTareaFinalizacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 32947);
var _class;








function MostrarTareaFinalizacionComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MostrarTareaFinalizacionComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.finalizar(ctx_r1.tarea.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MostrarTareaFinalizacionComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
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
        error.error?.datail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  back() {
    this.router.navigateByUrl('/ordenes-trabajo');
  }
  finalizar(id) {
    console.log('FINALIZAR?');
    this.subcripciones.push(this.tareaService.finalizarTareaPadre(id).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'la tarea a sido finalizada'
        });
        this.back();
      },
      error: error => {
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
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
  vars: 1,
  consts: [[1, "field", "pl-0", "pt-1", "pb-0", "flex", "align-items-center", "justify-content-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Finalizar", "class", "p-button-danger w-3", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Finalizar", 1, "p-button-danger", "w-3", 3, "click"]],
  template: function MostrarTareaFinalizacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MostrarTareaFinalizacionComponent_button_2_Template, 1, 0, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tarea.estado !== "finalizado");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 92068:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-movimiento/mostrar-tarea-movimiento.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaMovimientoComponent: () => (/* binding */ MostrarTareaMovimientoComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mercancia.service */ 37098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 29156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 34194);

var _class;












function MostrarTareaMovimientoComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El Codigo no pertenece al producto asignado a esta tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Deben Moverse exactamente ", ctx_r6.tarea.ref2, " Undiades");
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ubicacion Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.ubicacionAntigua = $event);
    })("blur", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.validarUbicaciones());
    })("keyup.enter", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.focusBarcode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_5_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Codigo de Barras de la Mercancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.barcode = $event);
    })("blur", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.validarCodigo());
    })("keyup.enter", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_keyup_enter_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_10_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.cantidad = $event);
    })("blur", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_input_blur_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.validarCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_small_15_Template, 2, 1, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_p_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template_p_button_onClick_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.submit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionAntigua)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx_r2.ubicacionInvalida));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.ubicacionInvalida);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.barcode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c0, ctx_r2.codigoInvalido));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.codigoInvalido);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.cantidad)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.cantidadInvalida);
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Nueva Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.ubicacionNueva = $event);
    })("blur", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.validarUbicacionesDestino());
    })("keyup.enter", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template_input_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_small_5_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9)(7, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template_p_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.submitProceso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.ubicacionNueva)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.ubicacionInvalidaDestino));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.ubicacionInvalidaDestino);
  }
}
function MostrarTareaMovimientoComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MostrarTareaMovimientoComponent_ng_container_2_ng_container_1_Template, 19, 14, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MostrarTareaMovimientoComponent_ng_container_2_ng_container_2_Template, 8, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.tarea.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.tarea.estado === "proceso");
  }
}
class MostrarTareaMovimientoComponent {
  constructor() {
    this.actualizar = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__.UbicacionesService);
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_3__.TareaService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_1__.MercanciaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__.CustomMessageService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
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
    this.ordenID = null;
    this.tareaActualID = null;
    this.tareaSig = null;
    this.loading = false;
  }
  ngOnInit() {
    var _this = this;
    console.log('ON INITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
    this.cantidadExigidad = parseInt(this.tarea.ref2);
    this.subs.push(this.activatedRoute.params.subscribe({
      next: function () {
        var _ref = (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.ordenID = yield params['idOrden'];
          _this.tareaActualID = yield params['id'];
          _this.cargarTareaSig();
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    }));
  }
  back() {
    let lastUrl = sessionStorage.getItem('lastUrl');
    this.router.navigateByUrl(lastUrl);
  }
  cargarTareaSig() {
    console.log('ME EJECUTOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    this.tareaSig = null;
    this.subs.push(this.tareaService.getOrdenTrabajo(this.ordenID).subscribe({
      next: res => {
        // console.log(res);
        console.log('BUSCO EN => ', res.lineasTareas);
        res.lineasTareas.forEach(lineaTarea => {
          console.log('VEO => ', lineaTarea);
          if (this.tareaSig == null && lineaTarea.id != this.tareaActualID && lineaTarea.estado !== 'finalizado' && (lineaTarea.tipo === 'pre_rec' || lineaTarea.tipo === 'movimiento')) {
            this.tareaSig = lineaTarea.id;
            // console.log('DE => ', res.lineasTareas);
            console.log('AGARRE => ', lineaTarea.id);
          }
        });
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  siguienteTarea() {
    if (this.tareaSig == null) {
      this.back();
    } else {
      this.router.navigateByUrl('/tarea/' + this.tareaSig + '/' + this.ordenID);
      this.actualizar.emit();
    }
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
      if (this.ubicacionAntigua === this.tarea.preparaciones?.origen) {
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
      if (this.ubicacionNueva === this.tarea.preparaciones.destino) {
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
  submit(sig = false) {
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
    this.loading = true;
    this.subs.push(this.tareaService.registrarMoviemientoParte1(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.barcode = null;
        this.ubicacionAntigua = null;
        this.cantidad = null;
        if (sig) {
          // this.siguienteTarea()
          this.back();
        } else {
          this.actualizar.emit(true);
        }
      },
      error: error => {
        this.loading = false;
        console.error(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  submitProceso(sig = false) {
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
    this.loading = true;
    this.subs.push(this.tareaService.registrarMoviemientoParte2(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.ubicacionNueva = null;
        if (sig) {
          // this.siguienteTarea()
          this.back();
        } else {
          this.back();
        }
      },
      error: error => {
        console.error(error);
        this.loading = false;
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-movimiento"]],
  inputs: {
    tarea: "tarea",
    loading: "loading"
  },
  outputs: {
    actualizar: "actualizar"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "p-fluid"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "10rem"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "field", "pl-0", "pt-1", "pb-0"], ["id", "ubicacion", "type", "text", "autofocus", "", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["class", "p-error", 4, "ngIf"], ["id", "barcode", "type", "text", "placeholder", "Codigo de Barras", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["id", "cantidad", "type", "number", "pInputText", "", "pAutoFocus", "", "placeholder", "Ingrese la cantidad", 1, "mb-2", 3, "ngModel", "ngModelOptions", "ngModelChange", "blur"], [1, "flex"], ["label", "Pasar a ubicacion destino", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["label", "Siguiente Tarea pasar ubicacion temporal", "icon", "pi pi-check", "styleClass", "p-button-secondary", 1, "m-2", 3, "onClick"], [1, "p-error"], ["id", "ubicacion", "type", "text", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["label", "Terminar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"]],
  template: function MostrarTareaMovimientoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MostrarTareaMovimientoComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MostrarTareaMovimientoComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90742:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaPreRecComponent: () => (/* binding */ MostrarTareaPreRecComponent)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mercancia.service */ 37098);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ubicaciones.service */ 29156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autofocus */ 34194);

var _class;












function MostrarTareaPreRecComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "El Codigo no pertenece al producto asignado a esta tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Deben Moverse exactamente ", ctx_r6.tarea.ref2, " Undiades");
  }
}
const _c0 = function (a0) {
  return {
    "ng-invalid ng-dirty": a0
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ubicacion Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.ubicacionAntigua = $event);
    })("blur", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.validarUbicaciones());
    })("keyup.enter", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.focusBarcode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_5_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Codigo de Barras de la Mercancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.barcode = $event);
    })("blur", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_blur_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.validarCodigo());
    })("keyup.enter", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_keyup_enter_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_10_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.cantidad = $event);
    })("blur", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_input_blur_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.validarCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MostrarTareaPreRecComponent_ng_container_2_ng_container_1_small_15_Template, 2, 1, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9)(17, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_p_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClick", function MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template_p_button_onClick_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.submit(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.ubicacionAntigua)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx_r2.ubicacionInvalida));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.ubicacionInvalida);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.barcode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c0, ctx_r2.codigoInvalido));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.codigoInvalido);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.cantidad)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.cantidadInvalida);
  }
}
function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "la ubicacion no es la asignada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Nueva Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.ubicacionNueva = $event);
    })("blur", function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.validarUbicacionesDestino());
    })("keyup.enter", function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template_input_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.focusCantidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MostrarTareaPreRecComponent_ng_container_2_ng_container_2_small_5_Template, 2, 0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9)(7, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template_p_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.submitProceso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.ubicacionNueva)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r3.ubicacionInvalidaDestino));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.ubicacionInvalidaDestino);
  }
}
function MostrarTareaPreRecComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MostrarTareaPreRecComponent_ng_container_2_ng_container_1_Template, 19, 14, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MostrarTareaPreRecComponent_ng_container_2_ng_container_2_Template, 8, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.tarea.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.tarea.estado === "proceso");
  }
}
class MostrarTareaPreRecComponent {
  constructor() {
    this.actualizar = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.ubicacionesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_ubicaciones_service__WEBPACK_IMPORTED_MODULE_4__.UbicacionesService);
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_3__.TareaService);
    this.mercanciaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_mercancia_service__WEBPACK_IMPORTED_MODULE_1__.MercanciaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__.CustomMessageService);
    this.activatedRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
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
    this.ordenID = null;
    this.tareaActualID = null;
    this.tareaSig = null;
    this.loading = false;
  }
  ngOnInit() {
    var _this = this;
    console.log(this.tarea);
    this.cantidadExigidad = parseInt(this.tarea.ref2);
    this.subs.push(this.activatedRoute.params.subscribe({
      next: function () {
        var _ref = (0,_home_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.ordenID = yield params['idOrden'];
          _this.tareaActualID = yield params['id'];
          _this.cargarTareaSig();
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    }));
    if (this.tarea.preparaciones.tipo === 'Recurso') {
      this.cargarUbicaciones();
    }
  }
  back() {
    let lastUrl = sessionStorage.getItem('lastUrl');
    this.router.navigateByUrl(lastUrl);
  }
  cargarUbicaciones() {
    this.subs.push(this.ubicacionesService.getUbicaciones().subscribe({
      next: res => {
        console.log('UBICACIONES =>', res);
        this.ubicaciones = res;
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  cargarTareaSig() {
    this.tareaSig = null;
    this.subs.push(this.tareaService.getOrdenTrabajo(this.ordenID).subscribe({
      next: res => {
        // console.log(res);
        res.lineasTareas.forEach(lineaTarea => {
          if (this.tareaSig == null && lineaTarea.id != this.tareaActualID && lineaTarea.estado !== 'finalizado' && (lineaTarea.tipo === 'pre_rec' || lineaTarea.tipo === 'movimiento')) {
            this.tareaSig = lineaTarea.id;
            console.log('DE => ', res.lineasTareas);
            console.log('AGARRE => ', lineaTarea.id);
          }
        });
      },
      error: error => {
        console.error(error);
        this.messageService.error(error.error.detail);
      }
    }));
  }
  siguienteTarea() {
    if (this.tareaSig == null) {
      this.back();
    } else {
      this.router.navigateByUrl('/tarea/' + this.tareaSig + '/' + this.ordenID);
      this.actualizar.emit();
    }
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
    // si la ubicacion ingresada es vacio o null es invalido
    if (this.ubicacionAntigua === null || this.ubicacionAntigua === '') {
      this.ubicacionInvalida = true;
      return false;
    }
    // si estamos en un recurso y tenemos ubicaciones
    // esta condicion se salta si no tenemos ubicaiones por lo que no estamos en un recurso
    // if (this.ubicaciones.length > 0) {
    //   const existe = this.ubicaciones.find(
    //     (ubi) => ubi.ubicacionId === this.ubicacionAntigua
    //   );
    //   // verificamos si la ubicacion ingresada existe y retornamos valido si es asi
    //   if (existe) {
    //     this.ubicacionInvalida = false;
    //     return true;
    //   } else {
    //     this.ubicacionInvalida = true;
    //     return false;
    //   }
    // }
    // si la ubicacion de origen ingresada es igual a la solicitada es valido
    if (this.ubicacionAntigua === this.tarea.preparaciones?.origen) {
      this.ubicacionInvalida = false;
      return true;
    } else {
      this.ubicacionInvalida = true;
      return false;
    }
  }
  validarUbicacionesDestino() {
    if (this.ubicacionNueva !== null && this.ubicacionNueva !== '') {
      if (this.ubicacionNueva === this.tarea.preparaciones.destino) {
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
  submit(sig = false) {
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
    this.loading = true;
    this.subs.push(this.tareaService.registrarPreRecParte1(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.ubicacionAntigua = null;
        this.barcode = null;
        this.cantidad = null;
        if (sig) {
          // this.siguienteTarea()
          this.back();
        } else {
          this.actualizar.emit(true);
        }
      },
      error: error => {
        this.loading = false;
        console.error(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  submitProceso(sig = false) {
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
    this.loading = true;
    this.subs.push(this.tareaService.registrarPreRecParte2(body).subscribe({
      next: res => {
        console.log(res);
        this.messageService.add({
          summary: 'Exito',
          severity: 'success',
          detail: 'Registra de Movimiento realizado con exito'
        });
        this.ubicacionNueva = null;
        if (sig) {
          // this.siguienteTarea()
          this.back();
        } else {
          this.back();
        }
      },
      error: error => {
        console.error(error);
        this.loading = false;
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = MostrarTareaPreRecComponent;
_class.ɵfac = function MostrarTareaPreRecComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mostrar-tarea-pre-rec"]],
  inputs: {
    tarea: "tarea",
    loading: "loading"
  },
  outputs: {
    actualizar: "actualizar"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "p-fluid"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "10rem"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "field", "pl-0", "pt-1", "pb-0"], ["id", "ubicacion", "type", "text", "autofocus", "", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["class", "p-error", 4, "ngIf"], ["id", "barcode", "type", "text", "placeholder", "Codigo de Barras", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["id", "cantidad", "type", "number", "pInputText", "", "pAutoFocus", "", "placeholder", "Ingrese la cantidad", 1, "mb-2", 3, "ngModel", "ngModelOptions", "ngModelChange", "blur"], [1, "flex"], ["label", "Pasar a ubicacion destino", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"], ["label", "Siguiente Tarea pasar ubicacion temporal", "icon", "pi pi-check", "styleClass", "p-button-secondary", 1, "m-2", 3, "onClick"], [1, "p-error"], ["id", "ubicacion", "type", "text", "placeholder", "Codigo de Ubicacion", "pInputText", "", "autocomplete", "off", "spellcheck", "false", 3, "ngModel", "ngClass", "ngModelChange", "blur", "keyup.enter"], ["label", "Terminar", "icon", "pi pi-check", "styleClass", "p-button-primary", 1, "m-2", 3, "click"]],
  template: function MostrarTareaPreRecComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MostrarTareaPreRecComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MostrarTareaPreRecComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_autofocus__WEBPACK_IMPORTED_MODULE_11__.AutoFocus],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 84507:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea-tiempo/mostrar-tarea-tiempo.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaTiempoComponent: () => (/* binding */ MostrarTareaTiempoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
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
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
          error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
          error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
          error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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

/***/ 64388:
/*!*****************************************************************!*\
  !*** ./src/app/layout/mostrar-tarea/mostrar-tarea.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarTareaComponent: () => (/* binding */ MostrarTareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var _mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mostrar-tarea-finalizacion/mostrar-tarea-finalizacion.component */ 50986);
/* harmony import */ var _mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mostrar-tarea-tiempo/mostrar-tarea-tiempo.component */ 84507);
/* harmony import */ var _mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mostrar-tarea-documentacion/mostrar-tarea-documentacion.component */ 14572);
/* harmony import */ var _mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mostrar-tarea-pre-rec/mostrar-tarea-pre-rec.component */ 90742);
/* harmony import */ var _mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostrar-tarea-movimiento/mostrar-tarea-movimiento.component */ 92068);
var _class;















function MostrarTareaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MostrarTareaComponent_ng_container_1_div_1_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_template_3_Template(rf, ctx) {}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_8_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 15);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_8_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 16);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostrarTareaComponent_ng_container_1_div_1_ng_container_8_i_1_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostrarTareaComponent_ng_container_1_div_1_ng_container_8_i_2_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.estadoTareaIniciada === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.estadoTareaIniciada === false);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" : ", ctx_r6.tarea.ref2, " unidad/es ");
  }
}
function MostrarTareaComponent_ng_container_1_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r7.tarea.preparaciones == null ? null : ctx_r7.tarea.preparaciones.origen, " a ", ctx_r7.tarea.preparaciones == null ? null : ctx_r7.tarea.preparaciones.destino, " ");
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-mostrar-tarea-tiempo", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cambioEstadoTareaInciada", function MostrarTareaComponent_ng_container_1_div_1_ng_container_15_Template_app_mostrar_tarea_tiempo_cambioEstadoTareaInciada_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.cambioEstadoTareaInciada($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r8.tarea)("estadoTareaIniciada", ctx_r8.estadoTareaIniciada);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-mostrar-tarea-documentacion", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r9.tarea);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-mostrar-tarea-finalizacion", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r10.tarea);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-mostrar-tarea-pre-rec", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("actualizar", function MostrarTareaComponent_ng_container_1_div_1_ng_container_18_Template_app_mostrar_tarea_pre_rec_actualizar_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.ngOnInit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r11.tarea)("loading", ctx_r11.loadingTareaMov);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-mostrar-tarea-movimiento", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("actualizar", function MostrarTareaComponent_ng_container_1_div_1_ng_container_19_Template_app_mostrar_tarea_movimiento_actualizar_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.ngOnInit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tarea", ctx_r12.tarea)("loading", ctx_r12.loadingTareaMov);
  }
}
function MostrarTareaComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "p-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MostrarTareaComponent_ng_container_1_div_1_ng_template_2_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MostrarTareaComponent_ng_container_1_div_1_ng_template_3_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 9)(5, "div")(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, MostrarTareaComponent_ng_container_1_div_1_ng_container_8_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MostrarTareaComponent_ng_container_1_div_1_ng_container_12_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MostrarTareaComponent_ng_container_1_div_1_p_13_Template, 2, 2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, MostrarTareaComponent_ng_container_1_div_1_ng_container_15_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MostrarTareaComponent_ng_container_1_div_1_ng_container_16_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MostrarTareaComponent_ng_container_1_div_1_ng_container_17_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MostrarTareaComponent_ng_container_1_div_1_ng_container_18_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MostrarTareaComponent_ng_container_1_div_1_ng_container_19_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.tarea.accion, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.estadoTareaIniciada !== null && ctx_r2.tarea.tipo === "tiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.tarea.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "tiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "documentacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "finalizacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "pre_rec");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.tarea.tipo === "movimiento");
  }
}
function MostrarTareaComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostrarTareaComponent_ng_container_1_div_1_Template, 21, 10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tarea);
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
    this.tareasPendientes = [];
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
    this.loading = true;
    this.loadingTareaMov = false;
  }
  ngOnInit() {
    this.loadingTareaMov = true;
    this.subcripciones.push(this.activatedRoute.params.subscribe(params => {
      this.idTarea = params['id'];
      this.subcripciones.push(this.tareaService.getLineaTarea(this.idTarea).subscribe(response => {
        this.loading = false;
        this.loadingTareaMov = false;
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
            error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
          }
        });
      }, error => {
        this.loading = false;
        this.loadingTareaMov = false;
        console.log(error);
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
      }));
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
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], ["class", "card", 4, "ngIf"], [1, "card"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], [1, "flex", "align-items-center", "justify-content-between", "mb-0"], [1, "text-2xl", "text-center"], ["class", "text-2xl text-center", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "click"], ["class", "pi pi-play text-green-500", 4, "ngIf"], ["class", "pi pi-pause text-indigo-200", 4, "ngIf"], [1, "pi", "pi-play", "text-green-500"], [1, "pi", "pi-pause", "text-indigo-200"], [3, "tarea", "estadoTareaIniciada", "cambioEstadoTareaInciada"], [3, "tarea"], [3, "tarea", "loading", "actualizar"]],
  template: function MostrarTareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MostrarTareaComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MostrarTareaComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, _mostrar_tarea_finalizacion_mostrar_tarea_finalizacion_component__WEBPACK_IMPORTED_MODULE_2__.MostrarTareaFinalizacionComponent, _mostrar_tarea_tiempo_mostrar_tarea_tiempo_component__WEBPACK_IMPORTED_MODULE_3__.MostrarTareaTiempoComponent, _mostrar_tarea_documentacion_mostrar_tarea_documentacion_component__WEBPACK_IMPORTED_MODULE_4__.MostrarTareaDocumentacionComponent, _mostrar_tarea_pre_rec_mostrar_tarea_pre_rec_component__WEBPACK_IMPORTED_MODULE_5__.MostrarTareaPreRecComponent, _mostrar_tarea_movimiento_mostrar_tarea_movimiento_component__WEBPACK_IMPORTED_MODULE_6__.MostrarTareaMovimientoComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62841:
/*!*******************************************************!*\
  !*** ./src/app/layout/notfound/notfound.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundComponent: () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
var _class;





const _c0 = function () {
  return ["/"];
};
class NotfoundComponent {
  constructor() {
    this.actRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location);
  }
  ngOnInit() {
    // @ts-ignore
    console.log(this.actRoute.url.value);
    this.url = '';
    // @ts-ignore
    this.actRoute.url.value.forEach(segment => {
      console.log(segment.path);
      this.url = this.url + `/${segment.path}`;
    });
  }
  back() {
    this.location.back();
  }
}
_class = NotfoundComponent;
_class.ɵfac = function NotfoundComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-notfound"]],
  decls: 25,
  vars: 3,
  consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["src", "assets/demo/images/notfound/logo-blue.svg", "alt", "Sakai logo", 1, "mb-5", "w-6rem", "flex-shrink-0"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(\n          180deg,\n          rgba(33, 150, 243, 0.4) 10%,\n          rgba(33, 150, 243, 0) 30%\n        )"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", "flex", "flex-column", "align-items-center", 2, "border-radius", "53px"], [1, "text-blue-500", "font-bold", "text-3xl"], [1, "text-900", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-600", "mb-5"], [1, "w-full", "flex", "align-items-center", "py-5", "border-300", "border-bottom-1", 3, "click"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "text-50", "pi", "pi-fw", "pi-arrow-left", "text-2xl"], [1, "ml-4", "flex", "flex-column"], [1, "text-900", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "w-full", "flex", "align-items-center", "py-5", "border-300", "border-bottom-1", 3, "routerLink"], [1, "flex", "justify-content-center", "align-items-center", "bg-cyan-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "text-50", "pi", "pi-fw", "pi-home", "text-2xl"]],
  template: function NotfoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No existe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No hay contenido en la pagina ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotfoundComponent_Template_a_click_13_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11)(17, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Volver a la pagina anterior ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13)(20, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11)(23, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ir al Inicio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.url);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 34746:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/ordenes-trabajo/mostrar-orden-trabajo/mostrar-orden-trabajo.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MostrarOrdenTrabajoComponent: () => (/* binding */ MostrarOrdenTrabajoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pruebas.service */ 88500);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 39177);
var _class;












function MostrarOrdenTrabajoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MostrarOrdenTrabajoComponent_ng_container_1_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_template_5_Template(rf, ctx) {}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_p_button_6_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.toggleVerUbicaciones());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", !ctx_r8.verUbicaciones ? "pi pi-eye" : "pi pi-eye-slash");
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_10_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Origen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Destino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_10_ng_container_5_Template, 7, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_7_Template(rf, ctx) {
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
    const lineaTarea_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r16.preparacion == null ? null : lineaTarea_r16.preparacion.origen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r16.preparacion == null ? null : lineaTarea_r16.preparacion.destino);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const lineaTarea_r16 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.mostrarLineaTarea(lineaTarea_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_2_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_3_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_4_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_ng_container_7_Template, 5, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r16 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r16.estado === "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r16.estado === "proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r16.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r16.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_15_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Origen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Destino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_15_ng_container_5_Template, 7, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_7_Template(rf, ctx) {
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
    const lineaTarea_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r25.preparacion == null ? null : lineaTarea_r25.preparacion.origen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r25.preparacion == null ? null : lineaTarea_r25.preparacion.destino);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const lineaTarea_r25 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.mostrarLineaTarea(lineaTarea_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_2_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_3_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_4_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_ng_container_7_Template, 5, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lineaTarea_r25 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r25.estado === "finalizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r25.estado === "proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", lineaTarea_r25.estado === "iniciado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](lineaTarea_r25.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.verUbicaciones);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_p_button_6_Template, 1, 1, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_10_Template, 6, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_11_Template, 8, 5, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Tareas Finalizadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_15_Template, 6, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_ng_template_16_Template, 8, 5, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.ordenDeTrabajo.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.ordenDeTrabajo.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.hayMovimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.lineasToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.lineasFinalizadoToShow);
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *No hay tareas asigandas a este Usuario* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MostrarOrdenTrabajoComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "p-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MostrarOrdenTrabajoComponent_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MostrarOrdenTrabajoComponent_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_6_Template, 17, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MostrarOrdenTrabajoComponent_ng_container_1_ng_container_7_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ordenDeTrabajo && ctx_r1.ordenDeTrabajo.lineasTareas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ordenDeTrabajo && ctx_r1.ordenDeTrabajo.lineasTareas.length === 0);
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
    this.loading = true;
  }
  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: params => {
        this.ordenDeTrabajoID = params['id'];
      }
    });
    this.otrasSubscripciones.push(this.tareaService.getOrdenTrabajo(this.ordenDeTrabajoID).subscribe(response => {
      this.loading = false;
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
      this.loading = false;
      console.log(error);
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
    }));
  }
  back() {
    const lastUrlOrden = sessionStorage.getItem('lastUrlOrden');
    this.router.navigateByUrl(lastUrlOrden);
  }
  toggleVerUbicaciones() {
    this.verUbicaciones = !this.verUbicaciones;
  }
  mostrarLineaTarea(lineaTarea) {
    sessionStorage.setItem('lastUrl', '/ordenes-trabajo/mostrar/' + this.ordenDeTrabajoID);
    if (lineaTarea.tipo == 'pre_rec' || 'movimiento') {
      this.router.navigateByUrl('/tarea/' + lineaTarea.id + '/' + this.ordenDeTrabajoID);
    } else {}
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
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "col-12"], [1, "card", "card-w-title"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "click"], ["label", "Ver Ubicaciones", "styleClass", "p-button-primary", 3, "icon", "onClick", 4, "ngIf"], [1, "m-0"], ["selectionMode", "single", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-red-500"], ["label", "Ver Ubicaciones", "styleClass", "p-button-primary", 3, "icon", "onClick"], [2, "width", "0.5rem"], ["pSortableColumn", "preparacion.origenId"], ["field", "preparacion.origenId"], ["pSortableColumn", "preparacion.destinoId"], ["field", "preparacion.destinoId"], [3, "click"], [2, "display", "flex", "justify-content", "center"], [1, "pi", "pi-check", 2, "font-size", "1.5rem"], [1, "pi", "pi-truck", 2, "font-size", "1.5rem"], [1, "pi", "pi-play", 2, "font-size", "1.5rem"]],
  template: function MostrarOrdenTrabajoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MostrarOrdenTrabajoComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MostrarOrdenTrabajoComponent_ng_container_1_Template, 8, 2, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pruebas.service */ 88500);
/* harmony import */ var src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tarea.service */ 62814);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 39177);
var _class;













function OrdenesTrabajoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
function OrdenesTrabajoComponent_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "button", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function OrdenesTrabajoComponent_ng_container_1_ng_template_5_Template(rf, ctx) {}
function OrdenesTrabajoComponent_ng_container_1_ng_container_6_p_panelMenu_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-panelMenu", 11);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx_r6.ordenesTrabajoToShow);
  }
}
function OrdenesTrabajoComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ordenes de Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OrdenesTrabajoComponent_ng_container_1_ng_container_6_p_panelMenu_3_Template, 1, 1, "p-panelMenu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.ordenesTrabajoToShow.length > 0);
  }
}
function OrdenesTrabajoComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *No hay tareas asigandas a este Usuario* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function OrdenesTrabajoComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "p-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OrdenesTrabajoComponent_ng_container_1_ng_template_4_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OrdenesTrabajoComponent_ng_container_1_ng_template_5_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, OrdenesTrabajoComponent_ng_container_1_ng_container_6_Template, 4, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, OrdenesTrabajoComponent_ng_container_1_ng_container_7_Template, 2, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ordenesTrabajoToShow.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ordenesTrabajoToShow.length === 0 && ctx_r1.ordenesTrabajoFinalizadoToShow.length === 0);
  }
}
class OrdenesTrabajoComponent {
  constructor() {
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_tarea_service__WEBPACK_IMPORTED_MODULE_2__.TareaService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__.CustomMessageService);
    this.pruebasService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_1__.PruebasService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.ordenesTrabajoToShow = [];
    this.ordenesTrabajoProcesoToShow = [];
    this.ordenesTrabajoFinalizadoToShow = [];
    this.loading = true;
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
      this.loading = false;
      console.log(response);
      this.ordenesTrabajo = response;
      this.ordenesTrabajo.forEach(orden => {
        let icon = null;
        if (orden.estado === 'en proceso') {
          icon = 'pi pi-cog';
        } else if (orden.estado === 'finalizada') {
          icon = 'pi pi-check-circle';
        } else {
          icon = 'pi pi-play';
        }
        this.ordenesTrabajoToShow.push({
          label: orden.nombre,
          icon: icon,
          // routerLink: `/ordenes-trabajo/mostrar/${orden.id}`,
          command: () => {
            sessionStorage.setItem('lastUrlOrden', '/ordenes-trabajo');
            this.router.navigateByUrl(`/ordenes-trabajo/mostrar/${orden.id}`);
          }
        });
      });
      console.log(this.ordenesTrabajoToShow);
    }, error => {
      console.log(error);
      this.loading = false;
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
  decls: 2,
  vars: 2,
  consts: [["class", "flex align-items-center justify-content-center", "style", "height: 80vh", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-center", 2, "height", "80vh"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "col-12"], [1, "card", "card-w-title"], ["styleClass", "toolbar-sin-bordes mb-3"], ["pTemplate", "left"], ["pTemplate", "right"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-replay", 1, "p-button-rounded", 3, "routerLink"], [3, "model", 4, "ngIf"], [3, "model"]],
  template: function OrdenesTrabajoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OrdenesTrabajoComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrdenesTrabajoComponent_ng_container_1_Template, 8, 2, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_8__.PanelMenu, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 72668:
/*!*********************************************!*\
  !*** ./src/app/layout/pdv/pdv.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdvComponent: () => (/* binding */ PdvComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_presupuesto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/presupuesto.service */ 48369);
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/producto.service */ 65466);
/* harmony import */ var src_app_services_pruebas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pruebas.service */ 88500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 94553);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "PDV");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "PDV");
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
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
      error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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

/***/ 43859:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 43859);
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

/***/ 40075:
/*!**********************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuComponent: () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 90036);
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
        label: 'PDV',
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

/***/ 42089:
/*!********************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menu.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
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

/***/ 90036:
/*!**************************************************************!*\
  !*** ./src/app/layout/shared/menu/app.menuitem.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuitemComponent: () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 43859);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.service */ 42089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 51339);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 51339);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ 85583);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 30652);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 94553);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 65362);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/multiselect */ 77524);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/autocomplete */ 74823);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/messages */ 79404);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 44123);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/skeleton */ 32953);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 57411);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/splitbutton */ 64323);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/menu */ 95518);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/breadcrumb */ 31500);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/autofocus */ 34194);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @zxing/ngx-scanner */ 93843);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/badge */ 67650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
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
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__.MultiSelectModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__.FieldsetModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule, primeng_messages__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__.SkeletonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__.SplitButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_25__.MenuModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__.AutoFocusModule, primeng_badge__WEBPACK_IMPORTED_MODULE_28__.BadgeModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_29__.ZXingScannerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNgModule, {
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.ToolbarModule, primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_18__.MultiSelectModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_19__.FieldsetModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule, primeng_messages__WEBPACK_IMPORTED_MODULE_2__.MessagesModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_4__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_22__.SkeletonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__.SplitButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_25__.MenuModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.BreadcrumbModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_27__.AutoFocusModule, primeng_badge__WEBPACK_IMPORTED_MODULE_28__.BadgeModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_29__.ZXingScannerModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.layout.service */ 43859);
/* harmony import */ var _menu_app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/app.menu.component */ 40075);
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

/***/ 27905:
/*!**************************************************************!*\
  !*** ./src/app/layout/shared/topbar/app.topbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTopBarComponent: () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/usuario.service */ 41063);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_app_services_window_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/window-size.service */ 17342);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
var _class;









const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
function AppTopBarComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_ng_container_18_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toogleTarea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
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
        error.error?.detail ? this.messageService.error(error.error.detail) : error.error.message == 'JWT Token not found' ? this.messageService.alert('Sesion Expirada') : this.messageService.error('Ocurrio un error desconocido en local');
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
      this.jornadaIniciada = false;
      this.emitir();
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
          this.jornadaIniciada = true;
          this.emitir();
          error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
        }
      }));
    } else {
      this.jornadaIniciada = true;
      this.emitir();
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
          this.jornadaIniciada = false;
          this.emitir();
          error.error?.detail ? this.messageService.error(error.error.detail) : this.messageService.error('Ocurrio un error desconocido en local');
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
  consts: [[1, "layout-topbar"], [1, "flex", 3, "ngClass"], ["routerLink", "", 1, "layout-topbar-logo", "w-max"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], ["topbarmenubutton", ""], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["topbarmenu", ""], [1, "p-link", "layout-topbar-button"], [1, "pi", "pi-user"], [1, "p-link", "layout-topbar-button", 3, "routerLink"], [1, "pi", "pi-external-link"], [4, "ngIf"], [1, "w-screen", "h-4rem", "relative", "mt-8", "p-0", "justify-content-center", "align-items-center", 2, "background-color", "red", "display", "grid", 3, "click"], [1, "pi", "pi-pause", "text-2xl", "text-white"]],
  template: function AppTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "GADES FUSI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_5_listener() {
        return ctx.layoutService.showProfileSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6, 7)(10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AppTopBarComponent_ng_container_18_Template, 3, 0, "ng-container", 12);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c3, ctx.sm || ctx.xs || ctx.md));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c4, ctx.layoutService.state.profileSidebarVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.jornadaIniciada != undefined && ctx.jornadaIniciada);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 15498:
/*!***********************************************!*\
  !*** ./src/app/services/almacenes.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlmacenesService: () => (/* binding */ AlmacenesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario.service */ 41063);
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
    // console.log('ENTRA EN INTERCEPTOR');
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

/***/ 41063:
/*!**************************************************!*\
  !*** ./src/app/services/auth/usuario.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioService: () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
var _class;





// import Swal from 'sweetalert2'
class UsuarioService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
    this.ejecutarRefresh = true;
  }
  getUsuarios() {
    const url = this.API_URL + `/usuarios`;
    return this.http.get(url);
  }
  refreshToken() {
    const refresh_token = localStorage.getItem('refresh_token') || '';
    const url = this.API_URL + `/token/refresh`;
    const refresh = {
      refresh_token: refresh_token,
      aplicacion: 'Movil'
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

/***/ 58062:
/*!****************************************************!*\
  !*** ./src/app/services/custom-message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomMessageService: () => (/* binding */ CustomMessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 98026);
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

/***/ 58241:
/*!******************************************!*\
  !*** ./src/app/services/enum.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnumService: () => (/* binding */ EnumService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
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

/***/ 71728:
/*!*******************************************!*\
  !*** ./src/app/services/fecha.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FechaService: () => (/* binding */ FechaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;

class FechaService {
  fechaAbsoluta(fecha) {
    // console.log('LA FECHA ABSOLUTA');
    if (!fecha) return null;
    // console.log(fecha);
    const partesFecha = fecha.split('T')[0].split('-');
    const partesHora = fecha.split('T')[1].split(':');
    const ano = parseInt(partesFecha[0]);
    const mes = parseInt(partesFecha[1]) - 1;
    const dia = parseInt(partesFecha[2]);
    const hora = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);
    // console.log(`${dia} / ${mes + 1} / ${ano} - ${hora}:${minutos}`);
    const laFechaAbsoluta = new Date(ano, mes, dia, hora, minutos);
    // console.log(laFechaAbsoluta);
    return laFechaAbsoluta;
  }
  fechaAbsolutaToString(fecha) {
    // console.log('LA FECHA ABSOLUTA A ENVIAR');
    const ano = fecha.getFullYear();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const laFechaAbsolutaToSend = `${ano}-${mes}-${dia}T${hora}:${minutos}:00+00:00`;
    // console.log(laFechaAbsolutaToSend);
    return laFechaAbsolutaToSend;
  }
  formatFechaAbsoluta(fecha) {
    const fechaAbsouta = this.fechaAbsoluta(fecha);
    const ano = fechaAbsouta.getFullYear();
    const mes = fechaAbsouta.getMonth() + 1;
    const dia = fechaAbsouta.getDate();
    return `${dia}/${mes}/${ano}`;
  }
  validarFechaFin(fechaInicio, fechaFin) {
    // Convertir las fechas a milisegundos usando Date.parse()
    if (fechaInicio === null || fechaInicio === undefined || fechaInicio === '') return false;
    if (fechaFin === null || fechaFin === undefined || fechaFin === '') return false;
    const fechaInicioMs = fechaInicio.getTime();
    const fechaFinMs = fechaFin.getTime();
    // console.log('las fechas son validas?', fechaFinMs ,' > ', fechaInicioMs , ' => ', fechaFinMs > fechaInicioMs);
    // Comparar las fechas
    return fechaFinMs > fechaInicioMs;
  }
}
_class = FechaService;
_class.ɵfac = function FechaService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 37098:
/*!***********************************************!*\
  !*** ./src/app/services/mercancia.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MercanciaService: () => (/* binding */ MercanciaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
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
  getFechaCaducidad(body) {
    const url = this.API_URL + `/mercancia/fecha_caducidad`;
    return this.http.post(url, body);
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

/***/ 48862:
/*!*********************************************!*\
  !*** ./src/app/services/ordenes.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesService: () => (/* binding */ OrdenesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
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
  getOrdenesComprasByProveedor(idProveedor) {
    const url = this.API_URL + `/ordenes_compras/proveedor/${idProveedor}`;
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
  // devuelve las lineas de una orden de compra
  ordenCompraRecibirCamion(requestJson) {
    const url = this.API_URL + `/ordenes_compras/recibir_camion`;
    return this.http.post(url, requestJson);
  }
  // confirma la cantidad recibida de una linea de una orden de compra 
  // y ejecuta los movimientos pertinentes
  moverMercanciaUbicacionEntrada(requestJson) {
    const url = this.API_URL + `/ordenes_compras/mover_entrada`;
    return this.http.post(url, requestJson);
  }
  confirmarOrdenRecibida(requestJson) {
    const url = this.API_URL + `/orden_compra/finalizar`;
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

/***/ 48369:
/*!*************************************************!*\
  !*** ./src/app/services/presupuesto.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PresupuestoService: () => (/* binding */ PresupuestoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
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
  getCantidadProductoEnPresupuesto(body) {
    const url = this.API_URL + `/devoluciones_presupuestos/cantidad`;
    return this.http.post(url, body);
  }
  registrarDevolucionDePresupuesto(body) {
    const url = this.API_URL + `/devoluciones_presupuestos`;
    return this.http.post(url, body);
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

/***/ 65466:
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductoService: () => (/* binding */ ProductoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
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

/***/ 58192:
/*!*************************************************!*\
  !*** ./src/app/services/proveedores.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresService: () => (/* binding */ ProveedoresService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
var _class;




class ProveedoresService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
  }
  getProveedores() {
    const url = this.API_URL + `/proveedores`;
    return this.http.get(url);
  }
  getProveedor(id) {
    const url = this.API_URL + `/proveedor/${id}`;
    return this.http.get(url);
  }
  getProveedoresPaginados(url) {
    return this.http.get(url);
  }
  createProveedor(newPresupeusto) {
    const url = this.API_URL + `/proveedor`;
    return this.http.post(url, newPresupeusto);
  }
  editProveedor(newPresupeusto) {
    const url = this.API_URL + `/proveedor`;
    return this.http.put(url, newPresupeusto);
  }
  deleteProveedor(id) {
    const url = this.API_URL + `/proveedor/${id}`;
    return this.http.delete(url);
  }
}
_class = ProveedoresService;
_class.ɵfac = function ProveedoresService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 88500:
/*!*********************************************!*\
  !*** ./src/app/services/pruebas.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PruebasService: () => (/* binding */ PruebasService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);
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
    // private ordenesDeTrabajo: OrdenTrabajo[] = [
    //   {
    //     id: 1,
    //     nombre: 'nombre ordentrabajo1',
    //     descripcion: 'descripcion ordentrabajo1',
    //     rrhh: {
    //       id: 1,
    //       nombre: 'persona 1',
    //     },
    //     estado: EstadoFinalizado.iniciado,
    //     lineasTareas: [
    //       {
    //         id: 1,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea1',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[0],
    //       },
    //       {
    //         id: 2,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea2',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[1],
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     nombre: 'nombre ordentrabajo2',
    //     descripcion: 'descripcion ordentrabajo2',
    //     rrhh: {
    //       id: 2,
    //       nombre: 'persona 2',
    //     },
    //     estado: EstadoFinalizado.iniciado,
    //     lineasTareas: [
    //       {
    //         id: 1,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea1',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[0],
    //       },
    //       {
    //         id: 2,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea2',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[1],
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     nombre: 'nombre ordentrabajo3',
    //     descripcion: 'descripcion ordentrabajo3',
    //     rrhh: {
    //       id: 3,
    //       nombre: 'persona 3',
    //     },
    //     estado: EstadoFinalizado.iniciado,
    //     lineasTareas: [
    //       {
    //         id: 1,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea1',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[0],
    //       },
    //       {
    //         id: 2,
    //         accion: 'accion lineatarea1',
    //         descripcion: 'descripcion lineatarea2',
    //         estado: EstadoFinalizado.iniciado,
    //         tarea: this.tareas[1],
    //       },
    //     ],
    //   },
    // ];
    // private lineasTareas: LineaTarea[] = [
    //   {
    //     id: 1,
    //     accion: 'accion lineatarea1',
    //     descripcion: 'descripcion lineatarea1',
    //     estado: EstadoFinalizado.iniciado,
    //     tarea: this.tareas[0],
    //     ordenTrabajo: this.ordenesDeTrabajo[0],
    //   },
    //   {
    //     id: 2,
    //     accion: 'accion lineatarea1',
    //     descripcion: 'descripcion lineatarea2',
    //     estado: EstadoFinalizado.iniciado,
    //     tarea: this.tareas[1],
    //     ordenTrabajo: this.ordenesDeTrabajo[0],
    //   },
    //   {
    //     id: 3,
    //     accion: 'accion lineatarea1',
    //     descripcion: 'descripcion lineatarea3',
    //     estado: EstadoFinalizado.iniciado,
    //     tarea: this.tareas[2],
    //     ordenTrabajo: this.ordenesDeTrabajo[0],
    //   },
    //   {
    //     id: 4,
    //     accion: 'accion lineatarea1',
    //     descripcion: 'descripcion lineatarea4',
    //     estado: EstadoFinalizado.iniciado,
    //     tarea: this.tareas[3],
    //     ordenTrabajo: this.ordenesDeTrabajo[0],
    //   },
    // ];
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
  // getLineasTareas(): LineaTarea[] {
  //   return this.lineasTareas;
  // }
  // getLineaTarea(id: number): LineaTarea {
  //   console.log(
  //     `buscando la linea tarea con el id: ${id} en => `,
  //     this.lineasTareas,
  //   );
  //   return this.lineasTareas.find(
  //     (lineaTarea) => lineaTarea.id == id,
  //   ) as LineaTarea;
  // }
  // getLineasTareasFromTarea(id: number): LineaTarea[] {
  //   return this.lineasTareas.filter((lineaTarea) => lineaTarea.tarea.id == id);
  // }
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
  // getOrdenesTrabajos(): OrdenTrabajo[] {
  //   return this.ordenesDeTrabajo;
  // }
  // getOrdenTrabajo(id: number): OrdenTrabajo {
  //   return this.ordenesDeTrabajo.find((ordenTrabajo) => ordenTrabajo.id == id);
  // }
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
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 62814:
/*!*******************************************!*\
  !*** ./src/app/services/tarea.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TareaService: () => (/* binding */ TareaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
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
    const url = this.API_URL + `/lineas_tareas/finalizacion`;
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
  registrarMoviemientoParte1(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/movimiento/parte1`;
    return this.http.post(url, body);
  }
  registrarMoviemientoParte2(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/movimiento/parte2`;
    return this.http.post(url, body);
  }
  registrarPreRecParte1(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/pre_rec/parte1`;
    return this.http.post(url, body);
  }
  registrarPreRecParte2(body) {
    const url = this.API_URL + `/linea_tarea/ejecutar/pre_rec/parte2`;
    return this.http.post(url, body);
  }
  getOrdenesTrabajosPaginadas(url) {
    return this.http.get(url);
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

/***/ 29156:
/*!*************************************************!*\
  !*** ./src/app/services/ubicaciones.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UbicacionesService: () => (/* binding */ UbicacionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
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
  getUbicacionesDeEntrada() {
    const url = this.API_URL + `/ubicaciones?tipo=entrada`;
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

/***/ 17342:
/*!*************************************************!*\
  !*** ./src/app/services/window-size.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowSizeService: () => (/* binding */ WindowSizeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
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

/***/ 20553:
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

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.d921a70b822c44f4.js.map