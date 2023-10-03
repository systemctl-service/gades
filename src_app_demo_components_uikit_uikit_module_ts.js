"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_uikit_uikit_module_ts"],{

/***/ 720:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitRoutingModule: () => (/* binding */ UIkitRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class UIkitRoutingModule {}
_class = UIkitRoutingModule;
_class.ɵfac = function UIkitRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
    path: 'button',
    data: {
      breadcrumb: 'Button'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("src_app_demo_components_uikit_button_buttondemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./button/buttondemo.module */ 2796)).then(m => m.ButtonDemoModule)
  }, {
    path: 'charts',
    data: {
      breadcrumb: 'Charts'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chart_mjs"), __webpack_require__.e("src_app_demo_components_uikit_charts_chartsdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/chartsdemo.module */ 8284)).then(m => m.ChartsDemoModule)
  }, {
    path: 'file',
    data: {
      breadcrumb: 'File'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fileupload_mjs"), __webpack_require__.e("src_app_demo_components_uikit_file_filedemo_module_ts-node_modules_primeng_fesm2022_primeng-i-49ce5b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./file/filedemo.module */ 2576)).then(m => m.FileDemoModule)
  }, {
    path: 'floatlabel',
    data: {
      breadcrumb: 'Float Label'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs-node_modules_primeng_fesm2022_-6bca96"), __webpack_require__.e("src_app_demo_components_uikit_floatlabel_floatlabeldemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./floatlabel/floatlabeldemo.module */ 9482)).then(m => m.FloatlabelDemoModule)
  }, {
    path: 'formlayout',
    data: {
      breadcrumb: 'Form Layout'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs-node_modules_primeng_fesm2022_-6bca96"), __webpack_require__.e("src_app_demo_components_uikit_formlayout_formlayoutdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./formlayout/formlayoutdemo.module */ 7025)).then(m => m.FormLayoutDemoModule)
  }, {
    path: 'input',
    data: {
      breadcrumb: 'Input'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-selectbutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs-node_modules_primeng_fesm2022_-6bca96"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chip_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-slider_mjs"), __webpack_require__.e("src_app_demo_components_uikit_input_inputdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./input/inputdemo.module */ 3874)).then(m => m.InputDemoModule)
  }, {
    path: 'invalidstate',
    data: {
      breadcrumb: 'Invalid State'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-autocomplete_mjs-node_modules_primeng_fesm2022_-6bca96"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("src_app_demo_components_uikit_invalid_invalidstatedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./invalid/invalidstatedemo.module */ 2226)).then(m => m.InvalidStateDemoModule)
  }, {
    path: 'list',
    data: {
      breadcrumb: 'List'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-paginator_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_interval_js-node_modules_primeng_fesm2-dfece2"), __webpack_require__.e("src_app_demo_components_uikit_list_listdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/listdemo.module */ 900)).then(m => m.ListDemoModule)
  }, {
    path: 'media',
    data: {
      breadcrumb: 'Media'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-windowmaximize_mjs-node_modules_primeng_f-d769f8"), __webpack_require__.e("src_app_demo_components_uikit_media_mediademo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./media/mediademo.module */ 3499)).then(m => m.MediaDemoModule)
  }, {
    path: 'message',
    data: {
      breadcrumb: 'Message'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("src_app_demo_components_uikit_messages_messagesdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messagesdemo.module */ 1254)).then(m => m.MessagesDemoModule)
  }, {
    path: 'misc',
    data: {
      breadcrumb: 'Misc'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chip_mjs"), __webpack_require__.e("src_app_demo_components_uikit_misc_miscdemo_module_ts-node_modules_primeng_fesm2022_primeng-i-755f46")]).then(__webpack_require__.bind(__webpack_require__, /*! ./misc/miscdemo.module */ 3658)).then(m => m.MiscDemoModule)
  }, {
    path: 'overlay',
    data: {
      breadcrumb: 'Overlay'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-paginator_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-arrowdown_mjs-node_modules_primeng_fesm20-515138"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-selectbutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-windowmaximize_mjs-node_modules_primeng_f-d769f8"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dialog_mjs"), __webpack_require__.e("src_app_demo_components_uikit_overlays_overlaysdemo_module_ts-node_modules_primeng_fesm2022_p-d263a6")]).then(__webpack_require__.bind(__webpack_require__, /*! ./overlays/overlaysdemo.module */ 3817)).then(m => m.OverlaysDemoModule)
  }, {
    path: 'panel',
    data: {
      breadcrumb: 'Panel'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-divider_mjs-node_modules_primeng_fesm2022_prime-b64a27"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_panels_panelsdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./panels/panelsdemo.module */ 7351)).then(m => m.PanelsDemoModule)
  }, {
    path: 'table',
    data: {
      breadcrumb: 'Table'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-calendar_mjs-node_modules_primeng_fesm2022_prim-7a3c9e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-paginator_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-multiselect_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-arrowdown_mjs-node_modules_primeng_fesm20-515138"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-selectbutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-exclamationtriangle_mjs-node_modules_prim-2a668a"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-table_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-rating_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-toast_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-togglebutton_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-slider_mjs"), __webpack_require__.e("src_app_demo_components_uikit_table_tabledemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./table/tabledemo.module */ 9795)).then(m => m.TableDemoModule)
  }, {
    path: 'tree',
    data: {
      breadcrumb: 'Tree'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-dropdown_mjs-node_modules_primeng_fesm2022_prim-113d2f"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-paginator_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-icons-arrowdown_mjs-node_modules_primeng_fesm20-515138"), __webpack_require__.e("src_app_demo_components_uikit_tree_treedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tree/treedemo.module */ 4551)).then(m => m.TreeDemoModule)
  }, {
    path: 'menu',
    data: {
      breadcrumb: 'Menu'
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_interval_js-node_modules_primeng_fesm2-dfece2"), __webpack_require__.e("src_app_demo_components_uikit_menus_menus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menus/menus.module */ 3525)).then(m => m.MenusModule)
  }, {
    path: '**',
    redirectTo: '/notfound'
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIkitRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 3250:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitModule: () => (/* binding */ UIkitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit-routing.module */ 720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class UIkitModule {}
_class = UIkitModule;
_class.ɵfac = function UIkitModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UIkitModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_uikit_module_ts.js.map