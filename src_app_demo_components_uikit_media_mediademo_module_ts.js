"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_uikit_media_mediademo_module_ts"],{

/***/ 1771:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoRoutingModule: () => (/* binding */ MediaDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _mediademo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediademo.component */ 4544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class MediaDemoRoutingModule {}
_class = MediaDemoRoutingModule;
_class.ɵfac = function MediaDemoRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
    path: '',
    component: _mediademo_component__WEBPACK_IMPORTED_MODULE_0__.MediaDemoComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4544:
/*!********************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoComponent: () => (/* binding */ MediaDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/product.service */ 981);
/* harmony import */ var src_app_demo_service_photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/photo.service */ 7533);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/image */ 1266);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/galleria */ 3821);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/carousel */ 1720);
var _class;








function MediaDemoComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "button", 14)(12, "button", 15)(13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", product_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("product-badge status-" + product_r3.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.inventoryStatus);
  }
}
function MediaDemoComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.itemImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MediaDemoComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return {
    "max-width": "800px",
    "margin": "auto"
  };
};
class MediaDemoComponent {
  constructor(productService, photoService) {
    this.productService = productService;
    this.photoService = photoService;
    this.galleriaResponsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 5
    }, {
      breakpoint: '960px',
      numVisible: 4
    }, {
      breakpoint: '768px',
      numVisible: 3
    }, {
      breakpoint: '560px',
      numVisible: 1
    }];
    this.carouselResponsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    }, {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    }, {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }];
  }
  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
      this.products = products;
    });
    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }
}
_class = MediaDemoComponent;
_class.ɵfac = function MediaDemoComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_photo_service__WEBPACK_IMPORTED_MODULE_1__.PhotoService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 20,
  vars: 12,
  consts: [[1, "grid", "p-fluid"], [1, "col-12"], [1, "card"], [3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item"], [1, "flex", "justify-content-center"], ["src", "assets/demo/images/galleria/galleria10.jpg", "alt", "Image", "width", "250", 3, "preview"], [3, "value", "responsiveOptions", "containerStyle", "numVisible", "circular"], ["pTemplate", "thumbnail"], [1, "border-round", "m-2", "text-center", "p-2", 2, "border", "1px solid var(--surface-d)"], [1, "my-5"], ["width", "50%", 1, "shadow-4", 3, "src", "alt"], [1, "mb-1"], [1, "mt-0", "mb-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-search", 1, "mr-2", "p-button-rounded"], ["pButton", "", "pRipple", "", "icon", "pi pi-star-fill", 1, "mr-2", "p-button-rounded", "p-button-success"], ["pButton", "", "pRipple", "", "icon", "pi pi-cog", 1, "p-button-rounded", "p-button-info"], [2, "width", "100%", "display", "block", 3, "src"], [1, "grid", "nogutter", "justify-center"], [2, "display", "block", 3, "src"]],
  template: function MediaDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-carousel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MediaDemoComponent_ng_template_6_Template, 14, 7, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p-image", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Galleria");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-galleria", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MediaDemoComponent_ng_template_18_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MediaDemoComponent_ng_template_19_Template, 2, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("numVisible", 3)("numScroll", 3)("circular", false)("responsiveOptions", ctx.carouselResponsiveOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preview", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.images)("responsiveOptions", ctx.galleriaResponsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0))("numVisible", 6)("circular", true);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_image__WEBPACK_IMPORTED_MODULE_5__.Image, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.Galleria, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.Carousel],
  encapsulation: 2
});

/***/ }),

/***/ 3499:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoModule: () => (/* binding */ MediaDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _mediademo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediademo.component */ 4544);
/* harmony import */ var _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediademo-routing.module */ 1771);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/image */ 1266);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/galleria */ 3821);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/carousel */ 1720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








class MediaDemoModule {}
_class = MediaDemoModule;
_class.ɵfac = function MediaDemoModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MediaDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_image__WEBPACK_IMPORTED_MODULE_5__.ImageModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaDemoModule, {
    declarations: [_mediademo_component__WEBPACK_IMPORTED_MODULE_0__.MediaDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MediaDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_image__WEBPACK_IMPORTED_MODULE_5__.ImageModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselModule]
  });
})();

/***/ }),

/***/ 1720:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-carousel.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselModule: () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevrondown */ 2541);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/chevronleft */ 3642);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronup */ 4210);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class, _class2;













/**
 * Carousel is a content slider featuring various customization options.
 * @group Components
 */
const _c0 = ["itemsContainer"];
function _class_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_div_1_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function _class_button_4_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronLeftIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function _class_button_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronUpIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function _class_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_4_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_4_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.isVertical());
  }
}
function _class_button_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_4_span_2_1_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.previousIconTemplate);
  }
}
const _c1 = function (a1) {
  return {
    "p-carousel-prev p-link": true,
    "p-disabled": a1
  };
};
function _class_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_4_ng_container_1_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_4_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previousIconTemplate);
  }
}
function _class_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a1, a2, a3) {
  return {
    "p-carousel-item p-carousel-item-cloned": true,
    "p-carousel-item-active": a1,
    "p-carousel-item-start": a2,
    "p-carousel-item-end": a3
  };
};
const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};
function _class_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_8_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c2, ctx_r3.totalShiftedItems * -1 === ctx_r3.value.length, 0 === index_r19, ctx_r3.clonedItemsForStarting.length - 1 === index_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, item_r18));
  }
}
function _class_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c4 = function (a1, a2, a3) {
  return {
    "p-carousel-item": true,
    "p-carousel-item-active": a1,
    "p-carousel-item-start": a2,
    "p-carousel-item-end": a3
  };
};
function _class_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_9_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c4, ctx_r4.firstIndex() <= index_r22 && ctx_r4.lastIndex() >= index_r22, ctx_r4.firstIndex() === index_r22, ctx_r4.lastIndex() === index_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, item_r21));
  }
}
function _class_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_10_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const index_r25 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c2, ctx_r5.totalShiftedItems * -1 === ctx_r5.numVisible, 0 === index_r25, ctx_r5.clonedItemsForFinishing.length - 1 === index_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, item_r24));
  }
}
function _class_button_11_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function _class_button_11_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronDownIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function _class_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_11_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_11_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r27.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.isVertical());
  }
}
function _class_button_11_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_11_span_2_1_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.nextIconTemplate);
  }
}
const _c5 = function (a1) {
  return {
    "p-carousel-next p-link": true,
    "p-disabled": a1
  };
};
function _class_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_button_11_ng_container_1_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_11_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c5, ctx_r6.isForwardNavDisabled()))("disabled", ctx_r6.isForwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.nextIconTemplate);
  }
}
const _c6 = function (a1) {
  return {
    "p-carousel-indicator": true,
    "p-highlight": a1
  };
};
function _class_ul_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ul_12_li_1_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);
      const i_r37 = restoredCtx.index;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.onDotClick($event, i_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c6, ctx_r35._page === i_r37));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r35.indicatorStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-link")("ngStyle", ctx_r35.indicatorStyle);
  }
}
function _class_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ul_12_li_1_Template, 2, 7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r7.indicatorsContentClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r7.indicatorsContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.totalDotsArray());
  }
}
function _class_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_div_13_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.footerTemplate);
  }
}
const _c7 = [[["p-header"]], [["p-footer"]]];
const _c8 = function (a1, a2) {
  return {
    "p-carousel p-component": true,
    "p-carousel-vertical": a1,
    "p-carousel-horizontal": a2
  };
};
const _c9 = function (a0) {
  return {
    height: a0
  };
};
const _c10 = ["p-header", "p-footer"];
class Carousel {
  /**
   * Index of the first item.
   * @defaultValue 0
   * @group Props
   */
  get page() {
    return this._page;
  }
  set page(val) {
    if (this.isCreated && val !== this._page) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
        this.allowAutoplay = false;
      }
      if (val > this._page && val <= this.totalDots() - 1) {
        this.step(-1, val);
      } else if (val < this._page) {
        this.step(1, val);
      }
    }
    this._page = val;
  }
  /**
   * Number of items per page.
   * @defaultValue 1
   * @group Props
   */
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(val) {
    this._numVisible = val;
  }
  /**
   * Number of items to scroll.
   * @defaultValue 1
   * @group Props
   */
  get numScroll() {
    return this._numVisible;
  }
  set numScroll(val) {
    this._numScroll = val;
  }
  /**
   * An array of options for responsive design.
   * @see {CarouselResponsiveOptions}
   * @group Props
   */

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
   * Defines if scrolling would be infinite.
   * @group Props
   */

  constructor(el, zone, cd, renderer, document, platformId) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "responsiveOptions", void 0);
    /**
     * Specifies the layout of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "orientation", 'horizontal');
    /**
     * Height of the viewport in vertical layout.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "verticalViewPortHeight", '300px');
    /**
     * Style class of main content.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentClass", '');
    /**
     * Style class of the indicator items.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorsContentClass", '');
    /**
     * Inline style of the indicator items.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorsContentStyle", void 0);
    /**
     * Style class of the indicators.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorStyleClass", '');
    /**
     * Style of the indicators.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorStyle", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "circular", false);
    /**
     * Whether to display indicator container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showIndicators", true);
    /**
     * Whether to display navigation buttons in container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showNavigators", true);
    /**
     * Time in milliseconds to scroll items automatically.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoplayInterval", 0);
    /**
     * Inline style of the component.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Style class of the viewport container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Callback to invoke after scroll.
     * @param {CarouselPageEvent} event - Custom page event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onPage", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemsContainer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numVisible", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numScroll", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_oldNumScroll", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prevState", {
      numScroll: 0,
      numVisible: 0,
      value: []
    });
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultNumScroll", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaultNumVisible", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_page", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_value", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "carouselStyle", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalShiftedItems", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isRemainingItemsAdded", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "animationTimeout", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "translateTimeout", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "remainingItems", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_items", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startPos", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentResizeListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clonedItemsForStarting", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clonedItemsForFinishing", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "allowAutoplay", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "interval", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isCreated", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "swipeThreshold", 20);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previousIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "window", void 0);
    this.el = el;
    this.zone = zone;
    this.cd = cd;
    this.renderer = renderer;
    this.document = document;
    this.platformId = platformId;
    this.totalShiftedItems = this.page * this.numScroll * -1;
    this.window = this.document.defaultView;
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      if (this.circular && this._value) {
        this.setCloneItems();
      }
    }
    if (this.isCreated) {
      if (simpleChange.numVisible) {
        if (this.responsiveOptions) {
          this.defaultNumVisible = this.numVisible;
        }
        if (this.isCircular()) {
          this.setCloneItems();
        }
        this.createStyle();
        this.calculatePosition();
      }
      if (simpleChange.numScroll) {
        if (this.responsiveOptions) {
          this.defaultNumScroll = this.numScroll;
        }
      }
    }
  }
  ngAfterContentInit() {
    this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    this.allowAutoplay = !!this.autoplayInterval;
    if (this.circular) {
      this.setCloneItems();
    }
    if (this.responsiveOptions) {
      this.defaultNumScroll = this._numScroll;
      this.defaultNumVisible = this._numVisible;
    }
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'previousicon':
          this.previousIconTemplate = item.template;
          break;
        case 'nexticon':
          this.nextIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterContentChecked() {
    const isCircular = this.isCircular();
    let totalShiftedItems = this.totalShiftedItems;
    if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
      let page = this._page;
      if (this.totalDots() !== 0 && page >= this.totalDots()) {
        page = this.totalDots() - 1;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      totalShiftedItems = page * this._numScroll * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      if (page === this.totalDots() - 1 && this.remainingItems > 0) {
        totalShiftedItems += -1 * this.remainingItems + this._numScroll;
        this.isRemainingItemsAdded = true;
      } else {
        this.isRemainingItemsAdded = false;
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      this._oldNumScroll = this._numScroll;
      this.prevState.numScroll = this._numScroll;
      this.prevState.numVisible = this._numVisible;
      this.prevState.value = [...this._value];
      if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
      this.isCreated = true;
      if (this.autoplayInterval && this.isAutoplay()) {
        this.startAutoplay();
      }
    }
    if (isCircular) {
      if (this.page === 0) {
        totalShiftedItems = -1 * this._numVisible;
      } else if (totalShiftedItems === 0) {
        totalShiftedItems = -1 * this.value.length;
        if (this.remainingItems > 0) {
          this.isRemainingItemsAdded = true;
        }
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
    }
  }
  createStyle() {
    if (!this.carouselStyle) {
      this.carouselStyle = this.renderer.createElement('style');
      this.carouselStyle.type = 'text/css';
      this.renderer.appendChild(this.document.head, this.carouselStyle);
    }
    let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
    if (this.responsiveOptions) {
      this.responsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.responsiveOptions.length; i++) {
        let res = this.responsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.carouselStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.responsiveOptions) {
      let matchedResponsiveData = {
        numVisible: this.defaultNumVisible,
        numScroll: this.defaultNumScroll
      };
      if (typeof window !== 'undefined') {
        let windowWidth = window.innerWidth;
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
      }
      if (this._numScroll !== matchedResponsiveData.numScroll) {
        let page = this._page;
        page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
        let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
        if (this.isCircular()) {
          totalShiftedItems -= matchedResponsiveData.numVisible;
        }
        this.totalShiftedItems = totalShiftedItems;
        this._numScroll = matchedResponsiveData.numScroll;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      if (this._numVisible !== matchedResponsiveData.numVisible) {
        this._numVisible = matchedResponsiveData.numVisible;
        this.setCloneItems();
      }
      this.cd.markForCheck();
    }
  }
  setCloneItems() {
    this.clonedItemsForStarting = [];
    this.clonedItemsForFinishing = [];
    if (this.isCircular()) {
      this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
      this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
    }
  }
  firstIndex() {
    return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
  }
  lastIndex() {
    return this.firstIndex() + this.numVisible - 1;
  }
  totalDots() {
    return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
  }
  totalDotsArray() {
    const totalDots = this.totalDots();
    return totalDots <= 0 ? [] : Array(totalDots).fill(0);
  }
  isVertical() {
    return this.orientation === 'vertical';
  }
  isCircular() {
    return this.circular && this.value && this.value.length >= this.numVisible;
  }
  isAutoplay() {
    return this.autoplayInterval && this.allowAutoplay;
  }
  isForwardNavDisabled() {
    return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
  }
  isBackwardNavDisabled() {
    return this.isEmpty() || this._page <= 0 && !this.isCircular();
  }
  isEmpty() {
    return !this.value || this.value.length === 0;
  }
  navForward(e, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
      this.allowAutoplay = false;
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
      this.allowAutoplay = false;
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onDotClick(e, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
      this.allowAutoplay = false;
    }
    if (index > page) {
      this.navForward(e, index);
    } else if (index < page) {
      this.navBackward(e, index);
    }
  }
  step(dir, page) {
    let totalShiftedItems = this.totalShiftedItems;
    const isCircular = this.isCircular();
    if (page != null) {
      totalShiftedItems = this._numScroll * page * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      this.isRemainingItemsAdded = false;
    } else {
      totalShiftedItems += this._numScroll * dir;
      if (this.isRemainingItemsAdded) {
        totalShiftedItems += this.remainingItems - this._numScroll * dir;
        this.isRemainingItemsAdded = false;
      }
      let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
      page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
    }
    if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
      totalShiftedItems = -1 * (this.value.length + this._numVisible);
      page = 0;
    } else if (isCircular && this.page === 0 && dir === 1) {
      totalShiftedItems = 0;
      page = this.totalDots() - 1;
    } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
      totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
      this.isRemainingItemsAdded = true;
    }
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
    }
    this.totalShiftedItems = totalShiftedItems;
    this._page = page;
    this.onPage.emit({
      page: this.page
    });
  }
  startAutoplay() {
    this.interval = setInterval(() => {
      if (this.totalDots() > 0) {
        if (this.page === this.totalDots() - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.page + 1);
        }
      }
    }, this.autoplayInterval);
  }
  stopAutoplay() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  onTransitionEnd() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transition = '';
      if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    }
  }
  bindDocumentListeners() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
          this.calculatePosition();
        });
      }
    }
  }
  unbindDocumentListeners() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
  }
  ngOnDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  }
}
_class = Carousel;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Carousel, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Carousel, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-carousel"]],
  contentQueries: function _class_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    page: "page",
    numVisible: "numVisible",
    numScroll: "numScroll",
    responsiveOptions: "responsiveOptions",
    orientation: "orientation",
    verticalViewPortHeight: "verticalViewPortHeight",
    contentClass: "contentClass",
    indicatorsContentClass: "indicatorsContentClass",
    indicatorsContentStyle: "indicatorsContentStyle",
    indicatorStyleClass: "indicatorStyleClass",
    indicatorStyle: "indicatorStyle",
    value: "value",
    circular: "circular",
    showIndicators: "showIndicators",
    showNavigators: "showNavigators",
    autoplayInterval: "autoplayInterval",
    style: "style",
    styleClass: "styleClass"
  },
  outputs: {
    onPage: "onPage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c10,
  decls: 14,
  vars: 22,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend", "touchend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [4, "ngIf"], ["class", "p-carousel-prev-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-carousel-prev-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [1, "p-carousel-footer"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_button_4_Template, 3, 6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function _class_Template_div_transitionend_6_listener() {
        return ctx.onTransitionEnd();
      })("touchend", function _class_Template_div_touchend_6_listener($event) {
        return ctx.onTouchEnd($event);
      })("touchstart", function _class_Template_div_touchstart_6_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function _class_Template_div_touchmove_6_listener($event) {
        return ctx.onTouchMove($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class_div_8_Template, 2, 9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, _class_div_9_Template, 2, 9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class_div_10_Template, 2, 9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, _class_button_11_Template, 3, 6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, _class_ul_12_Template, 2, 5, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, _class_div_13_Template, 3, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c8, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.contentClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-carousel-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForStarting);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForFinishing);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon];
  },
  styles: [".p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Carousel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-carousel',
      template: `
        <div [attr.id]="id" [ngClass]="{ 'p-carousel p-component': true, 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical() }" [ngStyle]="style" [class]="styleClass">
            <div class="p-carousel-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div [class]="contentClass" [ngClass]="'p-carousel-content'">
                <div class="p-carousel-container">
                    <button type="button" *ngIf="showNavigators" [ngClass]="{ 'p-carousel-prev p-link': true, 'p-disabled': isBackwardNavDisabled() }" [disabled]="isBackwardNavDisabled()" (click)="navBackward($event)" pRipple>
                        <ng-container *ngIf="!previousIconTemplate">
                            <ChevronLeftIcon *ngIf="!isVertical()" [styleClass]="'carousel-prev-icon'" />
                            <ChevronUpIcon *ngIf="isVertical()" [styleClass]="'carousel-prev-icon'" />
                        </ng-container>
                        <span *ngIf="previousIconTemplate" class="p-carousel-prev-icon">
                            <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                        </span>
                    </button>
                    <div class="p-carousel-items-content" [ngStyle]="{ height: isVertical() ? verticalViewPortHeight : 'auto' }">
                        <div #itemsContainer class="p-carousel-items-container" (transitionend)="onTransitionEnd()" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                            <div
                                *ngFor="let item of clonedItemsForStarting; let index = index"
                                [ngClass]="{
                                    'p-carousel-item p-carousel-item-cloned': true,
                                    'p-carousel-item-active': totalShiftedItems * -1 === value.length,
                                    'p-carousel-item-start': 0 === index,
                                    'p-carousel-item-end': clonedItemsForStarting.length - 1 === index
                                }"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                            <div
                                *ngFor="let item of value; let index = index"
                                [ngClass]="{ 'p-carousel-item': true, 'p-carousel-item-active': firstIndex() <= index && lastIndex() >= index, 'p-carousel-item-start': firstIndex() === index, 'p-carousel-item-end': lastIndex() === index }"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                            <div
                                *ngFor="let item of clonedItemsForFinishing; let index = index"
                                [ngClass]="{
                                    'p-carousel-item p-carousel-item-cloned': true,
                                    'p-carousel-item-active': totalShiftedItems * -1 === numVisible,
                                    'p-carousel-item-start': 0 === index,
                                    'p-carousel-item-end': clonedItemsForFinishing.length - 1 === index
                                }"
                            >
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </div>
                        </div>
                    </div>
                    <button type="button" *ngIf="showNavigators" [ngClass]="{ 'p-carousel-next p-link': true, 'p-disabled': isForwardNavDisabled() }" [disabled]="isForwardNavDisabled()" (click)="navForward($event)" pRipple>
                        <ng-container *ngIf="!nextIconTemplate">
                            <ChevronRightIcon *ngIf="!isVertical()" [styleClass]="'carousel-prev-icon'" />
                            <ChevronDownIcon *ngIf="isVertical()" [styleClass]="'carousel-prev-icon'" />
                        </ng-container>
                        <span *ngIf="nextIconTemplate" class="p-carousel-prev-icon">
                            <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
                <ul [ngClass]="'p-carousel-indicators p-reset'" [class]="indicatorsContentClass" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators">
                    <li *ngFor="let totalDot of totalDotsArray(); let i = index" [ngClass]="{ 'p-carousel-indicator': true, 'p-highlight': _page === i }">
                        <button type="button" [ngClass]="'p-link'" (click)="onDotClick($event, i)" [class]="indicatorStyleClass" [ngStyle]="indicatorStyle"></button>
                    </li>
                </ul>
            </div>
            <div class="p-carousel-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, {
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    numScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    verticalViewPortHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contentClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorsContentClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorsContentStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoplayInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    itemsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['itemsContainer']
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header]
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();
class CarouselModule {}
_class2 = CarouselModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, Carousel, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      declarations: [Carousel]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3821:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-galleria.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Galleria: () => (/* binding */ Galleria),
/* harmony export */   GalleriaContent: () => (/* binding */ GalleriaContent),
/* harmony export */   GalleriaItem: () => (/* binding */ GalleriaItem),
/* harmony export */   GalleriaItemSlot: () => (/* binding */ GalleriaItemSlot),
/* harmony export */   GalleriaModule: () => (/* binding */ GalleriaModule),
/* harmony export */   GalleriaThumbnails: () => (/* binding */ GalleriaThumbnails)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevronleft */ 3642);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 2282);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/windowminimize */ 3366);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class, _class2, _class3, _class4, _class5, _class6;

















/**
 * Galleria is an advanced content gallery component.
 * @group Components
 */
const _c0 = ["mask"];
const _c1 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c2 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
function _class_div_0_div_1_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@animation.start", function _class_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onAnimationStart($event));
    })("@animation.done", function _class_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onAnimationEnd($event));
    })("maskHide", function _class_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onMaskHide());
    })("activeItemChange", function _class_div_0_div_1_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, ctx_r5.showTransitionOptions, ctx_r5.hideTransitionOptions)))("value", ctx_r5.value)("activeIndex", ctx_r5.activeIndex)("numVisible", ctx_r5.numVisible)("ngStyle", ctx_r5.containerStyle);
  }
}
const _c3 = function (a1) {
  return {
    "p-galleria-mask p-component-overlay p-component-overlay-enter": true,
    "p-galleria-visible": a1
  };
};
function _class_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_div_0_div_1_p_galleriaContent_2_Template, 1, 10, "p-galleriaContent", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, ctx_r3.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.visible);
  }
}
function _class_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_0_div_1_Template, 3, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.maskVisible);
  }
}
function _class_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-galleriaContent", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeItemChange", function _class_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("numVisible", ctx_r2.numVisible);
  }
}
function _class2_div_0_button_1_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "TimesIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-galleria-close-icon");
  }
}
function _class2_div_0_button_1_2_ng_template_0_Template(rf, ctx) {}
function _class2_div_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class2_div_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.maskHide.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_button_1_TimesIcon_1_Template, 1, 1, "TimesIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_button_1_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.closeIconTemplate);
  }
}
function _class2_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-galleriaItemSlot", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}
function _class2_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-galleriaThumbnails", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onActiveIndexChange", function _class2_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onActiveIndexChange($event));
    })("stopSlideShow", function _class2_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
  }
}
function _class2_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-galleriaItemSlot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
  }
}
const _c4 = function (a1, a2, a3) {
  return {
    "p-galleria p-component": true,
    "p-galleria-fullscreen": a1,
    "p-galleria-indicator-onitem": a2,
    "p-galleria-item-nav-onhover": a3
  };
};
const _c5 = function () {
  return {};
};
function _class2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_div_0_button_1_Template, 3, 2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onActiveIndexChange", function _class2_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onActiveIndexChange($event));
    })("startSlideShow", function _class2_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.startSlideShow());
    })("stopSlideShow", function _class2_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class2_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](20, _c4, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
  }
}
function _class3_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function _class4_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronLeftIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-galleria-item-prev-icon");
  }
}
function _class4_button_2_2_ng_template_0_Template(rf, ctx) {}
function _class4_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class4_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c6 = function (a1) {
  return {
    "p-galleria-item-prev p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};
function _class4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class4_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class4_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class4_button_2_2_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c6, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.galleria.itemPreviousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.galleria.itemPreviousIconTemplate);
  }
}
function _class4_button_4_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-galleria-item-next-icon");
  }
}
function _class4_button_4_2_ng_template_0_Template(rf, ctx) {}
function _class4_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class4_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c7 = function (a1) {
  return {
    "p-galleria-item-next p-galleria-item-nav p-link": true,
    "p-disabled": a1
  };
};
function _class4_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class4_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class4_button_4_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class4_button_4_2_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c7, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.itemNextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate);
  }
}
function _class4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-galleriaItemSlot", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
  }
}
function _class4_ul_6_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 17);
  }
}
const _c8 = function (a1) {
  return {
    "p-galleria-indicator": true,
    "p-highlight": a1
  };
};
function _class4_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class4_ul_6_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.onIndicatorClick(index_r16));
    })("mouseenter", function _class4_ul_6_li_1_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onIndicatorMouseEnter(index_r16));
    })("keydown.enter", function _class4_ul_6_li_1_Template_li_keydown_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.onIndicatorKeyDown(index_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class4_ul_6_li_1_button_1_Template, 1, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-galleriaItemSlot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c8, ctx_r14.isIndicatorItemActive(index_r16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("index", index_r16)("templates", ctx_r14.templates);
  }
}
function _class4_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class4_ul_6_li_1_Template, 3, 6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.value);
  }
}
const _c9 = ["itemsContainer"];
function _class5_button_2_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function _class5_button_2_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function _class5_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class5_button_2_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class5_button_2_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isVertical);
  }
}
function _class5_button_2_2_ng_template_0_Template(rf, ctx) {}
function _class5_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class5_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c10 = function (a1) {
  return {
    "p-galleria-thumbnail-prev p-link": true,
    "p-disabled": a1
  };
};
function _class5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class5_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class5_button_2_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class5_button_2_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c10, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.galleria.previousThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.galleria.previousThumbnailIconTemplate);
  }
}
const _c11 = function (a1, a2, a3, a4) {
  return {
    "p-galleria-thumbnail-item": true,
    "p-galleria-thumbnail-item-current": a1,
    "p-galleria-thumbnail-item-active": a2,
    "p-galleria-thumbnail-item-start": a3,
    "p-galleria-thumbnail-item-end": a4
  };
};
function _class5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class5_div_6_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onItemClick(index_r12));
    })("touchend", function _class5_div_6_Template_div_touchend_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onItemClick(index_r12));
    })("keydown.enter", function _class5_div_6_Template_div_keydown_enter_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.onItemClick(index_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](4, _c11, ctx_r2.activeIndex === index_r12, ctx_r2.isItemActive(index_r12), ctx_r2.firstItemAciveIndex() === index_r12, ctx_r2.lastItemActiveIndex() === index_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r11)("templates", ctx_r2.templates);
  }
}
function _class5_button_7_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function _class5_button_7_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronDownIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function _class5_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class5_button_7_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class5_button_7_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r17.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.isVertical);
  }
}
function _class5_button_7_2_ng_template_0_Template(rf, ctx) {}
function _class5_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class5_button_7_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c12 = function (a1) {
  return {
    "p-galleria-thumbnail-next p-link": true,
    "p-disabled": a1
  };
};
function _class5_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class5_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class5_button_7_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class5_button_7_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.galleria.nextThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.galleria.nextThumbnailIconTemplate);
  }
}
const _c13 = function (a0) {
  return {
    height: a0
  };
};
class Galleria {
  /**
   * Index of the first item.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  /**
   * Whether to display the component on fullscreen.
   * @group Props
   */

  /**
   * Specifies the visibility of the mask on fullscreen mode.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(visible) {
    this._visible = visible;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Callback to invoke on active index change.
   * @param {number} number - Active index.
   * @group Emits
   */

  constructor(document, element, cd, config) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "element", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fullScreen", false);
    /**
     * Unique identifier of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    /**
     * An array of objects to display.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    /**
     * Number of items per page.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "numVisible", 3);
    /**
     * An array of options for responsive design.
     * @see {GalleriaResponsiveOptions}
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "responsiveOptions", void 0);
    /**
     * Whether to display navigation buttons in item section.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showItemNavigators", false);
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showThumbnailNavigators", true);
    /**
     * Whether to display navigation buttons on item hover.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showItemNavigatorsOnHover", false);
    /**
     * When enabled, item is changed on indicator hover.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeItemOnIndicatorHover", false);
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "circular", false);
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoPlay", false);
    /**
     * Time in milliseconds to scroll items.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "transitionInterval", 4000);
    /**
     * Whether to display thumbnail container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showThumbnails", true);
    /**
     * Position of thumbnails.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "thumbnailsPosition", 'bottom');
    /**
     * Height of the viewport in vertical thumbnail.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "verticalThumbnailViewPortHeight", '300px');
    /**
     * Whether to display indicator container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showIndicators", false);
    /**
     * When enabled, indicator container is displayed on item container.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showIndicatorsOnItem", false);
    /**
     * Position of indicators.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorsPosition", 'bottom');
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "baseZIndex", 0);
    /**
     * Style class of the mask on fullscreen mode.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "maskClass", void 0);
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerClass", void 0);
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerStyle", void 0);
    /**
     * Transition options of the show animation.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showTransitionOptions", '150ms cubic-bezier(0, 0, 0.2, 1)');
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hideTransitionOptions", '150ms cubic-bezier(0, 0, 0.2, 1)');
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Callback to invoke on visiblity change.
     * @param {boolean} boolean - Visible value.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "visibleChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mask", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_visible", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeIndex", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "footerFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "captionFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previousThumbnailIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextThumbnailIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemPreviousIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemNextIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "maskVisible", false);
    this.document = document;
    this.element = element;
    this.cd = cd;
    this.config = config;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerFacet = item.template;
          break;
        case 'footer':
          this.footerFacet = item.template;
          break;
        case 'indicator':
          this.indicatorFacet = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        case 'itemnexticon':
          this.itemNextIconTemplate = item.template;
          break;
        case 'itempreviousicon':
          this.itemPreviousIconTemplate = item.template;
          break;
        case 'previousthumbnailicon':
          this.previousThumbnailIconTemplate = item.template;
          break;
        case 'nextthumbnailicon':
          this.nextThumbnailIconTemplate = item.template;
          break;
        case 'caption':
          this.captionFacet = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    if (simpleChanges.value && simpleChanges.value.currentValue?.length < this.numVisible) {
      this.numVisible = simpleChanges.value.currentValue.length;
    }
  }
  onMaskHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
  onActiveItemChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeIndexChange.emit(index);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.enableModality();
        break;
      case 'void':
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.mask?.nativeElement, 'p-component-overlay-leave');
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        this.disableModality();
        break;
    }
  }
  enableModality() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.document.body, 'p-overflow-hidden');
    this.cd.markForCheck();
    if (this.mask) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  disableModality() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
    this.maskVisible = false;
    this.cd.markForCheck();
    if (this.mask) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.mask.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.fullScreen) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
    }
    if (this.mask) {
      this.disableModality();
    }
  }
}
_class = Galleria;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Galleria, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Galleria, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-galleria"]],
  contentQueries: function _class_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    activeIndex: "activeIndex",
    fullScreen: "fullScreen",
    id: "id",
    value: "value",
    numVisible: "numVisible",
    responsiveOptions: "responsiveOptions",
    showItemNavigators: "showItemNavigators",
    showThumbnailNavigators: "showThumbnailNavigators",
    showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    circular: "circular",
    autoPlay: "autoPlay",
    transitionInterval: "transitionInterval",
    showThumbnails: "showThumbnails",
    thumbnailsPosition: "thumbnailsPosition",
    verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
    showIndicators: "showIndicators",
    showIndicatorsOnItem: "showIndicatorsOnItem",
    indicatorsPosition: "indicatorsPosition",
    baseZIndex: "baseZIndex",
    maskClass: "maskClass",
    containerClass: "containerClass",
    containerStyle: "containerStyle",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    visible: "visible"
  },
  outputs: {
    activeIndexChange: "activeIndexChange",
    visibleChange: "visibleChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["mask", ""], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange", 4, "ngIf"], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "numVisible", "activeItemChange"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_1_Template, 1, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, GalleriaContent];
  },
  styles: [".p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Galleria, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-galleria',
      template: `
        <div *ngIf="fullScreen; else windowed">
            <div *ngIf="maskVisible" #mask [ngClass]="{ 'p-galleria-mask p-component-overlay p-component-overlay-enter': true, 'p-galleria-visible': this.visible }" [class]="maskClass">
                <p-galleriaContent
                    *ngIf="visible"
                    [@animation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                    (@animation.start)="onAnimationStart($event)"
                    (@animation.done)="onAnimationEnd($event)"
                    [value]="value"
                    [activeIndex]="activeIndex"
                    [numVisible]="numVisible"
                    (maskHide)="onMaskHide()"
                    (activeItemChange)="onActiveItemChange($event)"
                    [ngStyle]="containerStyle"
                ></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisible" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}\n"]
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
    }];
  }, {
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showItemNavigatorsOnHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    transitionInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showThumbnails: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    thumbnailsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    verticalThumbnailViewPortHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicatorsOnItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorsPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maskClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    containerStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['mask']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }]
  });
})();
class GalleriaContent {
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  constructor(galleria, cd, differs) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleria", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "differs", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", []);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "numVisible", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "maskHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItemChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeIndex", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slideShowActive", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "interval", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "differ", void 0);
    this.galleria = galleria;
    this.cd = cd;
    this.differs = differs;
    this.id = this.galleria.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_3__.UniqueComponentId)();
    this.differ = this.differs.find(this.galleria).create();
  }
  ngDoCheck() {
    const changes = this.differ.diff(this.galleria);
    if (changes && changes.forEachItem.length > 0) {
      // Because we change the properties of the parent component,
      // and the children take our entity from the injector.
      // We can tell the children to redraw themselves when we change the properties of the parent component.
      // Since we have an onPush strategy
      this.cd.markForCheck();
    }
  }
  galleriaClass() {
    const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
    const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
    return (this.galleria.containerClass ? this.galleria.containerClass + ' ' : '') + (thumbnailsPosClass ? thumbnailsPosClass + ' ' : '') + (indicatorPosClass ? indicatorPosClass + ' ' : '');
  }
  startSlideShow() {
    this.interval = setInterval(() => {
      let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
      this.onActiveIndexChange(activeIndex);
      this.activeIndex = activeIndex;
    }, this.galleria.transitionInterval);
    this.slideShowActive = true;
  }
  stopSlideShow() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.slideShowActive = false;
  }
  getPositionClass(preClassName, position) {
    const positions = ['top', 'left', 'bottom', 'right'];
    const pos = positions.find(item => item === position);
    return pos ? `${preClassName}-${pos}` : '';
  }
  isVertical() {
    return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
  }
  onActiveIndexChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeItemChange.emit(this.activeIndex);
    }
  }
}
_class2 = GalleriaContent;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaContent, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaContent, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["p-galleriaContent"]],
  inputs: {
    activeIndex: "activeIndex",
    value: "value",
    numVisible: "numVisible"
  },
  outputs: {
    maskHide: "maskHide",
    activeItemChange: "activeItemChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_div_0_Template, 7, 25, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleriaContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-galleriaContent',
      template: `
        <div
            [attr.id]="id"
            *ngIf="value && value.length > 0"
            [ngClass]="{
                'p-galleria p-component': true,
                'p-galleria-fullscreen': this.galleria.fullScreen,
                'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem,
                'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen
            }"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}"
            [class]="galleriaClass()"
        >
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <TimesIcon *ngIf="!galleria.closeIconTemplate" [styleClass]="'p-galleria-close-icon'" />
                <ng-template *ngTemplateOutlet="galleria.closeIconTemplate"></ng-template>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem
                    [value]="value"
                    [activeIndex]="activeIndex"
                    [circular]="galleria.circular"
                    [templates]="galleria.templates"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [showIndicators]="galleria.showIndicators"
                    [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover"
                    [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet"
                    [showItemNavigators]="galleria.showItemNavigators"
                    [autoPlay]="galleria.autoPlay"
                    [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()"
                    (stopSlideShow)="stopSlideShow()"
                ></p-galleriaItem>

                <p-galleriaThumbnails
                    *ngIf="galleria.showThumbnails"
                    [containerId]="id"
                    [value]="value"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [activeIndex]="activeIndex"
                    [templates]="galleria.templates"
                    [numVisible]="numVisible"
                    [responsiveOptions]="galleria.responsiveOptions"
                    [circular]="galleria.circular"
                    [isVertical]="isVertical()"
                    [contentHeight]="galleria.verticalThumbnailViewPortHeight"
                    [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive"
                    (stopSlideShow)="stopSlideShow()"
                ></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: Galleria
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers
    }];
  }, {
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maskHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    activeItemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class GalleriaItemSlot {
  constructor() {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "index", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "context", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_item", void 0);
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
    if (this.templates) {
      this.templates.forEach(item => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case 'item':
            case 'caption':
            case 'thumbnail':
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      if (item.getType() === this.type) {
        switch (this.type) {
          case 'item':
          case 'caption':
          case 'thumbnail':
            this.context = {
              $implicit: this.item
            };
            this.contentTemplate = item.template;
            break;
          case 'indicator':
            this.context = {
              $implicit: this.index
            };
            this.contentTemplate = item.template;
            break;
          default:
            this.context = {};
            this.contentTemplate = item.template;
            break;
        }
      }
    });
  }
}
_class3 = GalleriaItemSlot;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaItemSlot, "\u0275fac", function _class3_Factory(t) {
  return new (t || _class3)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaItemSlot, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["p-galleriaItemSlot"]],
  inputs: {
    templates: "templates",
    index: "index",
    item: "item",
    type: "type"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function _class3_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class3_ng_container_0_Template, 2, 2, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleriaItemSlot, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-galleriaItemSlot',
      template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class GalleriaItem {
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  get activeItem() {
    return this.value && this.value[this._activeIndex];
  }
  constructor(galleria) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleria", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "circular", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showItemNavigators", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showIndicators", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slideShowActive", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeItemOnIndicatorHover", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoPlay", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "captionFacet", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startSlideShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "stopSlideShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onActiveIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeIndex", 0);
    this.galleria = galleria;
  }
  ngOnChanges({
    autoPlay
  }) {
    if (autoPlay?.currentValue) {
      this.startSlideShow.emit();
    }
    if (autoPlay && autoPlay.currentValue === false) {
      this.stopTheSlideShow();
    }
  }
  next() {
    let nextItemIndex = this.activeIndex + 1;
    let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  prev() {
    let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
    let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  navForward(e) {
    this.stopTheSlideShow();
    this.next();
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    this.prev();
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onIndicatorClick(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }
  onIndicatorMouseEnter(index) {
    if (this.changeItemOnIndicatorHover) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }
  onIndicatorKeyDown(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }
  isNavForwardDisabled() {
    return !this.circular && this.activeIndex === this.value.length - 1;
  }
  isNavBackwardDisabled() {
    return !this.circular && this.activeIndex === 0;
  }
  isIndicatorItemActive(index) {
    return this.activeIndex === index;
  }
}
_class4 = GalleriaItem;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaItem, "\u0275fac", function _class4_Factory(t) {
  return new (t || _class4)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Galleria));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaItem, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class4,
  selectors: [["p-galleriaItem"]],
  inputs: {
    circular: "circular",
    value: "value",
    showItemNavigators: "showItemNavigators",
    showIndicators: "showIndicators",
    slideShowActive: "slideShowActive",
    changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
    autoPlay: "autoPlay",
    templates: "templates",
    indicatorFacet: "indicatorFacet",
    captionFacet: "captionFacet",
    activeIndex: "activeIndex"
  },
  outputs: {
    startSlideShow: "startSlideShow",
    stopSlideShow: "stopSlideShow",
    onActiveIndexChange: "onActiveIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 6,
  consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
  template: function _class4_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class4_button_2_Template, 3, 6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-galleriaItemSlot", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class4_button_4_Template, 3, 6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class4_div_5_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class4_ul_6_Template, 2, 1, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.captionFacet);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showIndicators);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleriaItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-galleriaItem',
      template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button
                    *ngIf="showItemNavigators"
                    type="button"
                    [ngClass]="{ 'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled() }"
                    (click)="navBackward($event)"
                    [disabled]="isNavBackwardDisabled()"
                    pRipple
                >
                    <ChevronLeftIcon *ngIf="!galleria.itemPreviousIconTemplate" [styleClass]="'p-galleria-item-prev-icon'" />
                    <ng-template *ngTemplateOutlet="galleria.itemPreviousIconTemplate"></ng-template>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button
                    *ngIf="showItemNavigators"
                    type="button"
                    [ngClass]="{ 'p-galleria-item-next p-galleria-item-nav p-link': true, 'p-disabled': this.isNavForwardDisabled() }"
                    (click)="navForward($event)"
                    [disabled]="isNavForwardDisabled()"
                    pRipple
                >
                    <ChevronRightIcon *ngIf="!galleria.itemNextIconTemplate" [styleClass]="'p-galleria-item-next-icon'" />
                    <ng-template *ngTemplateOutlet="galleria.itemNextIconTemplate"></ng-template>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li
                    *ngFor="let item of value; let index = index"
                    tabindex="0"
                    (click)="onIndicatorClick(index)"
                    (mouseenter)="onIndicatorMouseEnter(index)"
                    (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{ 'p-galleria-indicator': true, 'p-highlight': isIndicatorItemActive(index) }"
                >
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet"></button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: Galleria
    }];
  }, {
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showItemNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    changeItemOnIndicatorHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    indicatorFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    captionFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    startSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class GalleriaThumbnails {
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(numVisible) {
    this._numVisible = numVisible;
    this._oldNumVisible = this.d_numVisible;
    this.d_numVisible = numVisible;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._oldactiveIndex = this._activeIndex;
    this._activeIndex = activeIndex;
  }
  constructor(galleria, document, platformId, renderer, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleria", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isVertical", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slideShowActive", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "circular", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "responsiveOptions", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentHeight", '300px');
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showThumbnailNavigators", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onActiveIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "stopSlideShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemsContainer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "index", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startPos", null);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "thumbnailsStyle", null);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sortedResponsiveOptions", null);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalShiftedItems", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "page", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentResizeListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_numVisible", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "d_numVisible", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_oldNumVisible", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_activeIndex", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_oldactiveIndex", 0);
    this.galleria = galleria;
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
  }
  ngOnInit() {
    this.createStyle();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  }
  ngAfterContentChecked() {
    let totalShiftedItems = this.totalShiftedItems;
    if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
      if (this._activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      }
      if (this._oldactiveIndex !== this._activeIndex) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this._oldactiveIndex = this._activeIndex;
      this._oldNumVisible = this.d_numVisible;
    }
  }
  ngAfterViewInit() {
    this.calculatePosition();
  }
  createStyle() {
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = this.document.createElement('style');
      this.document.body.appendChild(this.thumbnailsStyle);
    }
    let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;
    if (this.responsiveOptions) {
      this.sortedResponsiveOptions = [...this.responsiveOptions];
      this.sortedResponsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
          numeric: true
        });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.thumbnailsStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.itemsContainer && this.sortedResponsiveOptions) {
      let windowWidth = window.innerWidth;
      let matchedResponsiveData = {
        numVisible: this._numVisible
      };
      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        if (parseInt(res.breakpoint, 10) >= windowWidth) {
          matchedResponsiveData = res;
        }
      }
      if (this.d_numVisible !== matchedResponsiveData.numVisible) {
        this.d_numVisible = matchedResponsiveData.numVisible;
        this.cd.markForCheck();
      }
    }
  }
  getTabIndex(index) {
    return this.isItemActive(index) ? 0 : null;
  }
  navForward(e) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;
    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }
    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;
    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }
    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onItemClick(index) {
    this.stopTheSlideShow();
    let selectedItemIndex = index;
    if (selectedItemIndex !== this._activeIndex) {
      const diff = selectedItemIndex + this.totalShiftedItems;
      let dir = 0;
      if (selectedItemIndex < this._activeIndex) {
        dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
        if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianItemIndex() - diff;
        if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }
      this.activeIndex = selectedItemIndex;
      this.onActiveIndexChange.emit(this.activeIndex);
    }
  }
  step(dir) {
    let totalShiftedItems = this.totalShiftedItems + dir;
    if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
      totalShiftedItems = this.d_numVisible - this.value.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }
    if (this.circular) {
      if (dir < 0 && this.value.length - 1 === this._activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this._activeIndex === 0) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      }
    }
    if (this.itemsContainer) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
      this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
    }
    this.totalShiftedItems = totalShiftedItems;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  changePageOnTouch(e, diff) {
    if (diff < 0) {
      // left
      this.navForward(e);
    } else {
      // right
      this.navBackward(e);
    }
  }
  getTotalPageNumber() {
    return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
  }
  getMedianItemIndex() {
    let index = Math.floor(this.d_numVisible / 2);
    return this.d_numVisible % 2 ? index : index - 1;
  }
  onTransitionEnd() {
    if (this.itemsContainer && this.itemsContainer.nativeElement) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
      this.itemsContainer.nativeElement.style.transition = '';
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  isNavBackwardDisabled() {
    return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
  }
  isNavForwardDisabled() {
    return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
  }
  firstItemAciveIndex() {
    return this.totalShiftedItems * -1;
  }
  lastItemActiveIndex() {
    return this.firstItemAciveIndex() + this.d_numVisible - 1;
  }
  isItemActive(index) {
    return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
  }
  bindDocumentListeners() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
      const window = this.document.defaultView || 'window';
      this.documentResizeListener = this.renderer.listen(window, 'resize', () => {
        this.calculatePosition();
      });
    }
  }
  unbindDocumentListeners() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  ngOnDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle);
    }
  }
}
_class5 = GalleriaThumbnails;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaThumbnails, "\u0275fac", function _class5_Factory(t) {
  return new (t || _class5)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaThumbnails, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class5,
  selectors: [["p-galleriaThumbnails"]],
  viewQuery: function _class5_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c9, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    }
  },
  inputs: {
    containerId: "containerId",
    value: "value",
    isVertical: "isVertical",
    slideShowActive: "slideShowActive",
    circular: "circular",
    responsiveOptions: "responsiveOptions",
    contentHeight: "contentHeight",
    showThumbnailNavigators: "showThumbnailNavigators",
    templates: "templates",
    numVisible: "numVisible",
    activeIndex: "activeIndex"
  },
  outputs: {
    onActiveIndexChange: "onActiveIndexChange",
    stopSlideShow: "stopSlideShow"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "touchend", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"], [3, "ngClass", 4, "ngIf"]],
  template: function _class5_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class5_button_2_Template, 3, 6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function _class5_Template_div_transitionend_4_listener() {
        return ctx.onTransitionEnd();
      })("touchstart", function _class5_Template_div_touchstart_4_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function _class5_Template_div_touchmove_4_listener($event) {
        return ctx.onTouchMove($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class5_div_6_Template, 3, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class5_button_7_Template, 3, 6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c13, ctx.isVertical ? ctx.contentHeight : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot];
  },
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleriaThumbnails, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-galleriaThumbnails',
      template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{ 'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled() }" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <ng-container *ngIf="!galleria.previousThumbnailIconTemplate">
                        <ChevronLeftIcon *ngIf="!isVertical" [styleClass]="'p-galleria-thumbnail-prev-icon'" />
                        <ChevronUpIcon *ngIf="isVertical" [styleClass]="'p-galleria-thumbnail-prev-icon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="galleria.previousThumbnailIconTemplate"></ng-template>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{ height: isVertical ? contentHeight : '' }">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                        <div
                            *ngFor="let item of value; let index = index"
                            [ngClass]="{
                                'p-galleria-thumbnail-item': true,
                                'p-galleria-thumbnail-item-current': activeIndex === index,
                                'p-galleria-thumbnail-item-active': isItemActive(index),
                                'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index,
                                'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index
                            }"
                        >
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (touchend)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{ 'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled() }" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <ng-container *ngIf="!galleria.nextThumbnailIconTemplate">
                        <ChevronRightIcon *ngIf="!isVertical" [ngClass]="'p-galleria-thumbnail-next-icon'" />
                        <ChevronDownIcon *ngIf="isVertical" [ngClass]="'p-galleria-thumbnail-next-icon'" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="galleria.nextThumbnailIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: Galleria
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
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
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    containerId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isVertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    slideShowActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    circular: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showThumbnailNavigators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onActiveIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    stopSlideShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    itemsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['itemsContainer']
    }],
    numVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class GalleriaModule {}
_class6 = GalleriaModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaModule, "\u0275fac", function _class6_Factory(t) {
  return new (t || _class6)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class6
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleriaModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_11__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_12__.WindowMinimizeIcon, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleriaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_8__.TimesIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_11__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_12__.WindowMinimizeIcon],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3642:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronLeftIcon: () => (/* binding */ ChevronLeftIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);

var _class;



class ChevronLeftIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
_class = ChevronLeftIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronLeftIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronLeftIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ChevronLeftIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChevronLeftIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ChevronLeftIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
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

/***/ 4210:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronUpIcon: () => (/* binding */ ChevronUpIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);

var _class;



class ChevronUpIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
_class = ChevronUpIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronUpIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ChevronUpIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ChevronUpIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChevronUpIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ChevronUpIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
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

/***/ 1506:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-eye.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EyeIcon: () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);

var _class;



class EyeIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {}
_class = EyeIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EyeIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(EyeIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["EyeIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EyeIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'EyeIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
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

/***/ 7940:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-refresh.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshIcon: () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class;




class RefreshIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(...args) {
    super(...args);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
  }
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
  }
}
_class = RefreshIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RefreshIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(RefreshIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["RefreshIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 7,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RefreshIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'RefreshIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
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

/***/ 9257:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchMinusIcon: () => (/* binding */ SearchMinusIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class;




class SearchMinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(...args) {
    super(...args);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
  }
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
  }
}
_class = SearchMinusIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchMinusIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchMinusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["SearchMinusIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 7,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SearchMinusIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'SearchMinusIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
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

/***/ 7384:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPlusIcon: () => (/* binding */ SearchPlusIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class;




class SearchPlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(...args) {
    super(...args);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
  }
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
  }
}
_class = SearchPlusIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchPlusIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchPlusIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["SearchPlusIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 7,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SearchPlusIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'SearchPlusIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
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

/***/ 844:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-undo.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UndoIcon: () => (/* binding */ UndoIcon)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/baseicon */ 3128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class;




class UndoIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon {
  constructor(...args) {
    super(...args);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pathId", void 0);
  }
  ngOnInit() {
    this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + ')';
  }
}
_class = UndoIcon;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UndoIcon, "\u0275fac", /* @__PURE__ */function () {
  let ɵ_class_BaseFactory;
  return function _class_Factory(t) {
    return (ɵ_class_BaseFactory || (ɵ_class_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}());
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UndoIcon, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["UndoIcon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 7,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UndoIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'UndoIcon',
      standalone: true,
      imports: [primeng_baseicon__WEBPACK_IMPORTED_MODULE_1__.BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
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

/***/ 1266:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-image.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   ImageModule: () => (/* binding */ ImageModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_eye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/eye */ 1506);
/* harmony import */ var primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/refresh */ 7940);
/* harmony import */ var primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/searchminus */ 9257);
/* harmony import */ var primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/searchplus */ 7384);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/times */ 8993);
/* harmony import */ var primeng_icons_undo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/undo */ 844);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ 5861);

var _class, _class2;
















/**
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 * @group Components
 */
const _c0 = ["mask"];
function _class_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.indicatorTemplate);
  }
}
function _class_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "EyeIcon", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-image-preview-icon");
  }
}
function _class_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.indicatorTemplate)("ngIfElse", _r3);
  }
}
function _class_div_3_RefreshIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "RefreshIcon");
  }
}
function _class_div_3_5_ng_template_0_Template(rf, ctx) {}
function _class_div_3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_3_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_div_3_UndoIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "UndoIcon");
  }
}
function _class_div_3_8_ng_template_0_Template(rf, ctx) {}
function _class_div_3_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_3_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_div_3_SearchMinusIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SearchMinusIcon");
  }
}
function _class_div_3_11_ng_template_0_Template(rf, ctx) {}
function _class_div_3_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_3_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_div_3_SearchPlusIcon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "SearchPlusIcon");
  }
}
function _class_div_3_14_ng_template_0_Template(rf, ctx) {}
function _class_div_3_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_3_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_div_3_TimesIcon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "TimesIcon");
  }
}
function _class_div_3_17_ng_template_0_Template(rf, ctx) {}
function _class_div_3_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_div_3_17_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c1 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c2 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
function _class_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@animation.start", function _class_div_3_div_18_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.onAnimationStart($event));
    })("@animation.done", function _class_div_3_div_18_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_div_18_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.onPreviewImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r19.showTransitionOptions, ctx_r19.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r19.imagePreviewStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", ctx_r19.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function _class_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.onMaskClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.handleToolbarClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.rotateRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_div_3_RefreshIcon_4_Template, 1, 0, "RefreshIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_div_3_5_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.rotateLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class_div_3_UndoIcon_7_Template, 1, 0, "UndoIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, _class_div_3_8_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.zoomOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class_div_3_SearchMinusIcon_10_Template, 1, 0, "SearchMinusIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, _class_div_3_11_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.zoomIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, _class_div_3_SearchPlusIcon_13_Template, 1, 0, "SearchPlusIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, _class_div_3_14_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_div_3_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.closePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, _class_div_3_TimesIcon_16_Template, 1, 0, "TimesIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, _class_div_3_17_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, _class_div_3_div_18_Template, 2, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.rotateRightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.rotateLeftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isZoomOutDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.zoomOutIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isZoomInDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.zoomInIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.zoomInIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previewVisible);
  }
}
class Image {
  get isZoomOutDisabled() {
    return this.scale - this.zoomSettings.step <= this.zoomSettings.min;
  }
  get isZoomInDisabled() {
    return this.scale + this.zoomSettings.step >= this.zoomSettings.max;
  }
  constructor(document, config, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    /**
     * Style class of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageClass", void 0);
    /**
     * Inline style of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageStyle", void 0);
    /**
     * Class of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Inline style of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Attribute of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "src", void 0);
    /**
     * Attribute of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alt", void 0);
    /**
     * Attribute of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "width", void 0);
    /**
     * Attribute of the image element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "height", void 0);
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "appendTo", void 0);
    /**
     * Controls the preview functionality.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preview", false);
    /**
     * Transition options of the show animation
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showTransitionOptions", '150ms cubic-bezier(0, 0, 0.2, 1)');
    /**
     * Transition options of the hide animation
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hideTransitionOptions", '150ms cubic-bezier(0, 0, 0.2, 1)');
    /**
     * Triggered when the preview overlay is shown.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Triggered when the preview overlay is hidden.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onImageError", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mask", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indicatorTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rotateRightIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rotateLeftIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zoomOutIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zoomInIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "maskVisible", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previewVisible", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rotate", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scale", 1);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previewClick", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "container", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "wrapper", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zoomSettings", {
      default: 1,
      step: 0.1,
      max: 1.5,
      min: 0.5
    });
    this.document = document;
    this.config = config;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'indicator':
          this.indicatorTemplate = item.template;
          break;
        case 'rotaterighticon':
          this.rotateRightIconTemplate = item.template;
          break;
        case 'rotatelefticon':
          this.rotateLeftIconTemplate = item.template;
          break;
        case 'zoomouticon':
          this.zoomOutIconTemplate = item.template;
          break;
        case 'zoominicon':
          this.zoomInIconTemplate = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        default:
          this.indicatorTemplate = item.template;
          break;
      }
    });
  }
  onImageClick() {
    if (this.preview) {
      this.maskVisible = true;
      this.previewVisible = true;
    }
  }
  onMaskClick() {
    if (!this.previewClick) {
      this.closePreview();
    }
    this.previewClick = false;
  }
  onPreviewImageClick() {
    this.previewClick = true;
  }
  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }
  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }
  zoomIn() {
    this.scale = this.scale + this.zoomSettings.step;
    this.previewClick = true;
  }
  zoomOut() {
    this.scale = this.scale - this.zoomSettings.step;
    this.previewClick = true;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.appendContainer();
        this.moveOnTop();
        break;
      case 'void':
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.clear(this.wrapper);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;
      case 'visible':
        this.onShow.emit({});
        break;
    }
  }
  moveOnTop() {
    primeng_utils__WEBPACK_IMPORTED_MODULE_3__.ZIndexUtils.set('modal', this.wrapper, this.config.zIndex.modal);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === 'body') this.document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }
  imagePreviewStyle() {
    return {
      transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'
    };
  }
  containerClass() {
    return {
      'p-image p-component': true,
      'p-image-preview-container': this.preview
    };
  }
  handleToolbarClick(event) {
    event.stopPropagation();
  }
  closePreview() {
    this.previewVisible = false;
    this.rotate = 0;
    this.scale = this.zoomSettings.default;
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
}
_class = Image;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Image, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Image, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-image"]],
  contentQueries: function _class_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    imageClass: "imageClass",
    imageStyle: "imageStyle",
    styleClass: "styleClass",
    style: "style",
    src: "src",
    alt: "alt",
    width: "width",
    height: "height",
    appendTo: "appendTo",
    preview: "preview",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    onImageError: "onImageError"
  },
  decls: 4,
  vars: 13,
  consts: [[3, "ngClass", "ngStyle"], [3, "ngStyle", "error"], ["class", "p-image-preview-indicator", 3, "click", 4, "ngIf"], ["class", "p-image-mask p-component-overlay p-component-overlay-enter", 3, "click", 4, "ngIf"], [1, "p-image-preview-indicator", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-image-mask", "p-component-overlay", "p-component-overlay-enter", 3, "click"], ["mask", ""], [1, "p-image-toolbar", 3, "click"], ["type", "button", 1, "p-image-action", "p-link", 3, "click"], [4, "ngIf"], ["type", "button", 1, "p-image-action", "p-link", 3, "disabled", "click"], [1, "p-image-preview", 3, "ngStyle", "click"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function _class_Template_img_error_1_listener($event) {
        return ctx.imageError($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_div_3_Template, 19, 13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.imageClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.imageStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.alt)("width", ctx.width)("height", ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.preview);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.maskVisible);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_6__.RefreshIcon, primeng_icons_eye__WEBPACK_IMPORTED_MODULE_7__.EyeIcon, primeng_icons_undo__WEBPACK_IMPORTED_MODULE_8__.UndoIcon, primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_9__.SearchMinusIcon, primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_10__.SearchPlusIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_11__.TimesIcon];
  },
  styles: [".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon.pi{font-size:1.5rem}.p-image-preview-icon.p-icon{scale:1.5}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      transform: 'scale(0.7)',
      opacity: 0
    }))])])]
  },
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Image, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-image',
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <img [attr.src]="src" [attr.alt]="alt" [attr.width]="width" [attr.height]="height" [ngStyle]="imageStyle" [class]="imageClass" (error)="imageError($event)" />
            <div class="p-image-preview-indicator" *ngIf="preview" (click)="onImageClick()">
                <ng-container *ngIf="indicatorTemplate; else defaultTemplate">
                    <ng-container *ngTemplateOutlet="indicatorTemplate"></ng-container>
                </ng-container>
                <ng-template #defaultTemplate>
                    <EyeIcon [styleClass]="'p-image-preview-icon'" />
                </ng-template>
            </div>
            <div #mask class="p-image-mask p-component-overlay p-component-overlay-enter" *ngIf="maskVisible" (click)="onMaskClick()">
                <div class="p-image-toolbar" (click)="handleToolbarClick($event)">
                    <button class="p-image-action p-link" (click)="rotateRight()" type="button">
                        <RefreshIcon *ngIf="!rotateRightIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateRightIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="rotateLeft()" type="button">
                        <UndoIcon *ngIf="!rotateLeftIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateLeftIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomOut()" type="button" [disabled]="isZoomOutDisabled">
                        <SearchMinusIcon *ngIf="!zoomOutIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomOutIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" (click)="zoomIn()" type="button" [disabled]="isZoomInDisabled">
                        <SearchPlusIcon *ngIf="!zoomInIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomInIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-link" type="button" (click)="closePreview()">
                        <TimesIcon *ngIf="!closeIconTemplate" />
                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                    </button>
                </div>
                <div
                    *ngIf="previewVisible"
                    [@animation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                    (@animation.start)="onAnimationStart($event)"
                    (@animation.done)="onAnimationEnd($event)"
                >
                    <img [attr.src]="src" class="p-image-preview" [ngStyle]="imagePreviewStyle()" (click)="onPreviewImageClick()" />
                </div>
            </div>
        </span>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        transform: 'scale(0.7)',
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon.pi{font-size:1.5rem}.p-image-preview-icon.p-icon{scale:1.5}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}\n"]
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    imageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onImageError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    mask: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['mask']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }]
  });
})();
class ImageModule {}
_class2 = ImageModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ImageModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ImageModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ImageModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_6__.RefreshIcon, primeng_icons_eye__WEBPACK_IMPORTED_MODULE_7__.EyeIcon, primeng_icons_undo__WEBPACK_IMPORTED_MODULE_8__.UndoIcon, primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_9__.SearchMinusIcon, primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_10__.SearchPlusIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_11__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_6__.RefreshIcon, primeng_icons_eye__WEBPACK_IMPORTED_MODULE_7__.EyeIcon, primeng_icons_undo__WEBPACK_IMPORTED_MODULE_8__.UndoIcon, primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_9__.SearchMinusIcon, primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_10__.SearchPlusIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_11__.TimesIcon],
      exports: [Image, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
      declarations: [Image]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_media_mediademo_module_ts.js.map