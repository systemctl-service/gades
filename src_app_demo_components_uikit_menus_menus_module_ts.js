"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_demo_components_uikit_menus_menus_module_ts"],{

/***/ 4932:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/confirmation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationComponent: () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ConfirmationComponent {
  constructor() {}
}
_class = ConfirmationComponent;
_class.ɵfac = function ConfirmationComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 0,
  consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-check", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
  template: function ConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmation Component Content via Child Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8577:
/*!****************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/menus.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenusComponent: () => (/* binding */ MenusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/breadcrumb */ 1500);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ 499);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabmenu */ 9048);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/steps */ 4745);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tieredmenu */ 3462);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/contextmenu */ 104);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/megamenu */ 8518);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 873);
var _class;














function MenusComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 20)(2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    icon: "pi pi-home"
  };
};
const _c1 = function () {
  return {
    "width": "200px"
  };
};
class MenusComponent {
  constructor() {
    this.breadcrumbItems = [];
    this.tieredItems = [];
    this.items = [];
    this.routeItems = [];
    this.megaMenuItems = [];
    this.panelMenuItems = [];
    this.stepsItems = [];
    this.slideItems = [];
    this.menuItems = [];
    this.plainMenuItems = [];
    this.pageIndex = 0;
  }
  ngOnInit() {
    this.tieredItems = [{
      label: 'Customers',
      icon: 'pi pi-fw pi-table',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [{
          label: 'Customer',
          icon: 'pi pi-fw pi-plus'
        }, {
          label: 'Duplicate',
          icon: 'pi pi-fw pi-copy'
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }]
    }, {
      label: 'Orders',
      icon: 'pi pi-fw pi-shopping-cart',
      items: [{
        label: 'View',
        icon: 'pi pi-fw pi-list'
      }, {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }]
    }, {
      label: 'Shipments',
      icon: 'pi pi-fw pi-envelope',
      items: [{
        label: 'Tracker',
        icon: 'pi pi-fw pi-compass'
      }, {
        label: 'Map',
        icon: 'pi pi-fw pi-map-marker'
      }, {
        label: 'Manage',
        icon: 'pi pi-fw pi-pencil'
      }]
    }, {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      items: [{
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
      }, {
        label: 'Billing',
        icon: 'pi pi-fw pi-file'
      }]
    }, {
      separator: true
    }, {
      label: 'Quit',
      icon: 'pi pi-fw pi-sign-out'
    }];
    this.items = [{
      label: 'Customers',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus'
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }]
    }, {
      label: 'Orders',
      items: [{
        label: 'View',
        icon: 'pi pi-fw pi-list'
      }, {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }]
    }, {
      label: 'Shipments',
      items: [{
        label: 'Tracker',
        icon: 'pi pi-fw pi-compass'
      }, {
        label: 'Map',
        icon: 'pi pi-fw pi-map-marker'
      }, {
        label: 'Manage',
        icon: 'pi pi-fw pi-pencil'
      }]
    }];
    this.menuItems = [{
      label: 'Save',
      icon: 'pi pi-fw pi-check'
    }, {
      label: 'Update',
      icon: 'pi pi-fw pi-refresh'
    }, {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash'
    }, {
      separator: true
    }, {
      label: 'Home',
      icon: 'pi pi-fw pi-home'
    }];
    this.slideItems = [{
      label: 'Customers',
      icon: 'pi pi-fw pi-table',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus'
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }]
    }, {
      label: 'Orders',
      icon: 'pi pi-fw pi-shopping-cart',
      items: [{
        label: 'View',
        icon: 'pi pi-fw pi-list'
      }, {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }]
    }, {
      label: 'Shipments',
      icon: 'pi pi-fw pi-envelope',
      items: [{
        label: 'Tracker',
        icon: 'pi pi-fw pi-compass'
      }, {
        label: 'Map',
        icon: 'pi pi-fw pi-map-marker'
      }, {
        label: 'Manage',
        icon: 'pi pi-fw pi-pencil'
      }]
    }, {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      items: [{
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
      }, {
        label: 'Billing',
        icon: 'pi pi-fw pi-file'
      }]
    }];
    this.plainMenuItems = [{
      label: 'Customers',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus'
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }]
    }, {
      label: 'Orders',
      items: [{
        label: 'View',
        icon: 'pi pi-fw pi-list'
      }, {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }]
    }];
    this.breadcrumbItems = [];
    this.breadcrumbItems.push({
      label: 'Electronics'
    });
    this.breadcrumbItems.push({
      label: 'Computer'
    });
    this.breadcrumbItems.push({
      label: 'Notebook'
    });
    this.breadcrumbItems.push({
      label: 'Accessories'
    });
    this.breadcrumbItems.push({
      label: 'Backpacks'
    });
    this.breadcrumbItems.push({
      label: 'Item'
    });
    this.routeItems = [{
      label: 'Personal',
      routerLink: 'personal'
    }, {
      label: 'Seat',
      routerLink: 'seat'
    }, {
      label: 'Payment',
      routerLink: 'payment'
    }, {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }];
    this.megaMenuItems = [{
      label: 'Fashion',
      icon: 'pi pi-fw pi-tag',
      items: [[{
        label: 'Women',
        items: [{
          label: 'Women Item'
        }, {
          label: 'Women Item'
        }, {
          label: 'Women Item'
        }]
      }, {
        label: 'Men',
        items: [{
          label: 'Men Item'
        }, {
          label: 'Men Item'
        }, {
          label: 'Men Item'
        }]
      }], [{
        label: 'Kids',
        items: [{
          label: 'Kids Item'
        }, {
          label: 'Kids Item'
        }]
      }, {
        label: 'Luggage',
        items: [{
          label: 'Luggage Item'
        }, {
          label: 'Luggage Item'
        }, {
          label: 'Luggage Item'
        }]
      }]]
    }, {
      label: 'Electronics',
      icon: 'pi pi-fw pi-desktop',
      items: [[{
        label: 'Computer',
        items: [{
          label: 'Computer Item'
        }, {
          label: 'Computer Item'
        }]
      }, {
        label: 'Camcorder',
        items: [{
          label: 'Camcorder Item'
        }, {
          label: 'Camcorder Item'
        }, {
          label: 'Camcorder Item'
        }]
      }], [{
        label: 'TV',
        items: [{
          label: 'TV Item'
        }, {
          label: 'TV Item'
        }]
      }, {
        label: 'Audio',
        items: [{
          label: 'Audio Item'
        }, {
          label: 'Audio Item'
        }, {
          label: 'Audio Item'
        }]
      }], [{
        label: 'Sports.7',
        items: [{
          label: 'Sports.7.1'
        }, {
          label: 'Sports.7.2'
        }]
      }]]
    }, {
      label: 'Furniture',
      icon: 'pi pi-fw pi-image',
      items: [[{
        label: 'Living Room',
        items: [{
          label: 'Living Room Item'
        }, {
          label: 'Living Room Item'
        }]
      }, {
        label: 'Kitchen',
        items: [{
          label: 'Kitchen Item'
        }, {
          label: 'Kitchen Item'
        }, {
          label: 'Kitchen Item'
        }]
      }], [{
        label: 'Bedroom',
        items: [{
          label: 'Bedroom Item'
        }, {
          label: 'Bedroom Item'
        }]
      }, {
        label: 'Outdoor',
        items: [{
          label: 'Outdoor Item'
        }, {
          label: 'Outdoor Item'
        }, {
          label: 'Outdoor Item'
        }]
      }]]
    }, {
      label: 'Sports',
      icon: 'pi pi-fw pi-star',
      items: [[{
        label: 'Basketball',
        items: [{
          label: 'Basketball Item'
        }, {
          label: 'Basketball Item'
        }]
      }, {
        label: 'Football',
        items: [{
          label: 'Football Item'
        }, {
          label: 'Football Item'
        }, {
          label: 'Football Item'
        }]
      }], [{
        label: 'Tennis',
        items: [{
          label: 'Tennis Item'
        }, {
          label: 'Tennis Item'
        }]
      }]]
    }];
    this.panelMenuItems = [{
      label: 'Customers',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [{
          label: 'Customer',
          icon: 'pi pi-fw pi-plus'
        }, {
          label: 'Duplicate',
          icon: 'pi pi-fw pi-copy'
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-user-edit'
      }]
    }, {
      label: 'Orders',
      items: [{
        label: 'View',
        icon: 'pi pi-fw pi-list'
      }, {
        label: 'Search',
        icon: 'pi pi-fw pi-search'
      }]
    }, {
      label: 'Shipments',
      items: [{
        label: 'Tracker',
        icon: 'pi pi-fw pi-compass'
      }, {
        label: 'Map',
        icon: 'pi pi-fw pi-map-marker'
      }, {
        label: 'Manage',
        icon: 'pi pi-fw pi-pencil'
      }]
    }, {
      label: 'Profile',
      items: [{
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
      }, {
        label: 'Billing',
        icon: 'pi pi-fw pi-file'
      }]
    }];
  }
}
_class = MenusComponent;
_class.ɵfac = function MenusComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 59,
  vars: 19,
  consts: [[1, "grid", "p-fluid"], [1, "col-12"], [1, "card", "card-w-title"], [3, "model"], ["pTemplate", "end"], [3, "model", "home"], [1, "card", "card-w-title", "flex", "flex-wrap"], [1, "col-12", "md:col-8", "h-full"], ["styleClass", "mb-5", 3, "model"], ["styleClass", "mt-5", 3, "model", "readonly"], [1, "col-12", "md:col-4", "mt-5", "md:mt-0"], [1, "col-12", "md:col-4"], [3, "popup", "model"], ["menu", ""], ["type", "button", "pButton", "", "icon", "pi pi-chevron-down", "label", "Options", 2, "width", "auto", 3, "click"], ["anchor", ""], [3, "target", "model"], [1, "col-12", "md:col-6"], ["orientation", "vertical", 3, "model"], [1, "p-input-icon-right"], ["type", "text", "pInputText", "", "placeholder", "Search"], [1, "pi", "pi-search"]],
  template: function MenusComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MenuBar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-menubar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenusComponent_ng_template_6_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Breadcrumb");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-breadcrumb", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1)(13, "div", 6)(14, "div", 7)(15, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TabMenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-tabMenu", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Steps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-steps", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div", 2)(25, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "TieredMenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p-tieredMenu", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "div", 2)(30, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Plain Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p-menu", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 2)(35, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Overlay Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "p-menu", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenusComponent_Template_button_click_39_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.toggle($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2, 15)(42, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ContextMenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Right click to display. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p-contextMenu", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17)(47, "div", 2)(48, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MegaMenu - Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "p-megaMenu", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "MegaMenu - Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p-megaMenu", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17)(55, "div", 2)(56, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PanelMenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p-panelMenu", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.tieredItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.breadcrumbItems)("home", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.routeItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.routeItems)("readonly", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.tieredItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.plainMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", _r2)("model", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.megaMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.megaMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.panelMenuItems);
    }
  },
  dependencies: [primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__.TabMenu, primeng_steps__WEBPACK_IMPORTED_MODULE_6__.Steps, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_7__.TieredMenu, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenu, primeng_megamenu__WEBPACK_IMPORTED_MODULE_11__.MegaMenu, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__.PanelMenu, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText],
  styles: ["[_nghost-%COMP%]     .p-menubar-root-list {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3Vpa2l0L21lbnVzL21lbnVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTtFQUNJLGVBQUE7QUFBWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICA6aG9zdCA6Om5nLWRlZXAgLnAtbWVudWJhci1yb290LWxpc3Qge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3525:
/*!*************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/menus.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenusModule: () => (/* binding */ MenusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _menus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus.component */ 8577);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component */ 5497);
/* harmony import */ var _seat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seat.component */ 4119);
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal.component */ 3058);
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmation.component */ 4932);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/breadcrumb */ 1500);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menubar */ 499);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tabmenu */ 9048);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/steps */ 4745);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tieredmenu */ 3462);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ 104);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/megamenu */ 8518);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




















class MenusModule {}
_class = MenusModule;
_class.ɵfac = function MenusModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.MenubarModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__.TabMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.StepsModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__.TieredMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__.ContextMenuModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__.MegaMenuModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__.PanelMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild([{
    path: '',
    component: _menus_component__WEBPACK_IMPORTED_MODULE_0__.MenusComponent,
    children: [{
      path: '',
      redirectTo: 'personal',
      pathMatch: 'full'
    }, {
      path: 'personal',
      component: _personal_component__WEBPACK_IMPORTED_MODULE_3__.PersonalComponent
    }, {
      path: 'confirmation',
      component: _confirmation_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationComponent
    }, {
      path: 'seat',
      component: _seat_component__WEBPACK_IMPORTED_MODULE_2__.SeatComponent
    }, {
      path: 'payment',
      component: _payment_component__WEBPACK_IMPORTED_MODULE_1__.PaymentComponent
    }]
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MenusModule, {
    declarations: [_menus_component__WEBPACK_IMPORTED_MODULE_0__.MenusComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.MenubarModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__.TabMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.StepsModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__.TieredMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__.ContextMenuModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__.MegaMenuModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__.PanelMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 5497:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/payment.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PaymentComponent {
  constructor() {}
}
_class = PaymentComponent;
_class.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 0,
  consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-money-bill", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Component Content via Child Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3058:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/personal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalComponent: () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class PersonalComponent {
  constructor() {}
}
_class = PersonalComponent;
_class.ɵfac = function PersonalComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 0,
  consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-user", "mr-2", "text-2xl"], [1, "mt-5", "text-center", "text-lg"]],
  template: function PersonalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Component Content via Child Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4119:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/seat.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeatComponent: () => (/* binding */ SeatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class SeatComponent {
  constructor() {}
}
_class = SeatComponent;
_class.ɵfac = function SeatComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 0,
  consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-ticket", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
  template: function SeatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seat Component Content via Child Route");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9329:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 4114);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 2707);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 5678);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 384);




function debounce(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    const emit = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      hasValue = true;
      lastValue = value;
      durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, emit, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop);
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber);
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = durationSubscriber = null;
    }));
  });
}

/***/ }),

/***/ 1500:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-breadcrumb.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb),
/* harmony export */   BreadcrumbModule: () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_icons_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/home */ 6737);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 1251);

var _class, _class2;












/**
 * Breadcrumb provides contextual information about page hierarchy.
 * @group Components
 */
function _class_li_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r5.home.icon)("ngStyle", ctx_r5.home.iconStyle);
  }
}
function _class_li_2_a_1_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "HomeIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-menuitem-icon");
  }
}
function _class_li_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.home.label);
  }
}
function _class_li_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r10.home.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_li_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_2_a_1_ng_container_3_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.home.escape !== false)("ngIfElse", _r9);
  }
}
function _class_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_2_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.itemClick($event, ctx_r11.home));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_2_a_1_span_1_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_1_HomeIcon_2_Template, 1, 1, "HomeIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r3.home.url ? ctx_r3.home.url : null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", ctx_r3.home.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r3.homeAriaLabel)("title", ctx_r3.home.title)("id", ctx_r3.home.id)("tabindex", ctx_r3.home.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.home.label);
  }
}
function _class_li_2_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r13.home.icon)("ngStyle", ctx_r13.home.iconStyle);
  }
}
function _class_li_2_a_2_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "HomeIcon", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-menuitem-icon");
  }
}
function _class_li_2_a_2_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.home.label);
  }
}
function _class_li_2_a_2_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r18.home.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_li_2_a_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_2_a_2_ng_container_3_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_2_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.home.escape !== false)("ngIfElse", _r17);
  }
}
const _c0 = function () {
  return {
    exact: false
  };
};
function _class_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_2_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.itemClick($event, ctx_r19.home));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_2_a_2_span_1_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_2_HomeIcon_2_Template, 1, 1, "HomeIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_2_a_2_ng_container_3_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r4.home.routerLink)("queryParams", ctx_r4.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.home.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0))("target", ctx_r4.home.target)("fragment", ctx_r4.home.fragment)("queryParamsHandling", ctx_r4.home.queryParamsHandling)("preserveFragment", ctx_r4.home.preserveFragment)("skipLocationChange", ctx_r4.home.skipLocationChange)("replaceUrl", ctx_r4.home.replaceUrl)("state", ctx_r4.home.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r4.homeAriaLabel)("title", ctx_r4.home.title)("id", ctx_r4.home.id)("tabindex", ctx_r4.home.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.home.label);
  }
}
const _c1 = function (a1) {
  return {
    "p-breadcrumb-home": true,
    "p-disabled": a1
  };
};
function _class_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_2_a_1_Template, 4, 9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_2_Template, 4, 19, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.home.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.home.disabled))("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.home.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.home.routerLink);
  }
}
function _class_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function _class_li_3_2_ng_template_0_Template(rf, ctx) {}
function _class_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_3_2_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.separatorTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function _class_ng_template_4_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r24.icon)("ngStyle", item_r24.iconStyle);
  }
}
function _class_ng_template_4_a_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.label);
  }
}
function _class_ng_template_4_a_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r24.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_4_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_a_1_ng_container_2_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_a_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.escape !== false)("ngIfElse", _r33);
  }
}
function _class_ng_template_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_4_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.itemClick($event, item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_a_1_span_1_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_a_1_ng_container_2_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", item_r24.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", item_r24.url ? item_r24.url : null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", item_r24.title)("id", item_r24.id)("tabindex", item_r24.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.label);
  }
}
function _class_ng_template_4_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r24.icon)("ngStyle", item_r24.iconStyle);
  }
}
function _class_ng_template_4_a_2_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.label);
  }
}
function _class_ng_template_4_a_2_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r24.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_a_2_ng_container_2_span_1_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_a_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.escape !== false)("ngIfElse", _r46);
  }
}
function _class_ng_template_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_4_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.itemClick($event, item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_a_2_span_1_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_a_2_ng_container_2_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r24.routerLink)("queryParams", item_r24.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r24.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0))("target", item_r24.target)("fragment", item_r24.fragment)("queryParamsHandling", item_r24.queryParamsHandling)("preserveFragment", item_r24.preserveFragment)("skipLocationChange", item_r24.skipLocationChange)("replaceUrl", item_r24.replaceUrl)("state", item_r24.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", item_r24.title)("id", item_r24.id)("tabindex", item_r24.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.label);
  }
}
function _class_ng_template_4_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function _class_ng_template_4_li_3_2_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_4_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_4_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_ng_template_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_li_3_2_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r28.separatorTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.separatorTemplate);
  }
}
const _c2 = function (a0) {
  return {
    "p-disabled": a0
  };
};
function _class_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_4_a_1_Template, 3, 7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_4_a_2_Template, 3, 17, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_4_li_3_Template, 3, 2, "li", 2);
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const end_r25 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r24.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", item_r24.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c2, item_r24.disabled))("tooltipOptions", item_r24.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r24.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !end_r25);
  }
}
class Breadcrumb {
  constructor() {
    /**
     * An array of menuitems.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
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
     * MenuItem configuration for the home icon.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "home", void 0);
    /**
     * Defines a string that labels the home icon for accessibility.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "homeAriaLabel", void 0);
    /**
     * Fired when an item is selected.
     * @param {BreadcrumbItemClickEvent} event - custom click event.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onItemClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "separatorTemplate", void 0);
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item: item
    });
  }
  onHomeClick(event) {
    if (this.home) {
      this.itemClick(event, this.home);
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'separator':
          this.separatorTemplate = item.template;
          break;
      }
    });
  }
}
_class = Breadcrumb;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Breadcrumb, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Breadcrumb, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-breadcrumb"]],
  contentQueries: function _class_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    style: "style",
    styleClass: "styleClass",
    home: "home",
    homeAriaLabel: "homeAriaLabel"
  },
  outputs: {
    onItemClick: "onItemClick"
  },
  decls: 5,
  vars: 7,
  consts: [[3, "ngStyle", "ngClass"], ["pTooltip", "", 3, "class", "ngClass", "ngStyle", "tooltipOptions", 4, "ngIf"], ["class", "p-breadcrumb-chevron", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-menuitem-link", 3, "href", "target", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "href", "target", "click"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [3, "styleClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlHomeLabel", ""], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlHomeRouteLabel", ""], [1, "p-breadcrumb-chevron"], [4, "ngTemplateOutlet"], ["pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", 3, "target", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "target", "click"], ["htmlLabel", ""], ["htmlRouteLabel", ""]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_Template, 3, 9, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_3_Template, 3, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_ng_template_4_Template, 4, 10, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.home);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model && ctx.home);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_7__.HomeIcon];
  },
  styles: [".p-breadcrumb{overflow-x:auto}.p-breadcrumb ul{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;cursor:pointer}.p-breadcrumb::-webkit-scrollbar{display:none}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Breadcrumb, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-breadcrumb',
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-breadcrumb p-component'">
            <ul>
                <li [class]="home.styleClass" [ngClass]="{ 'p-breadcrumb-home': true, 'p-disabled': home.disabled }" [ngStyle]="home.style" *ngIf="home" pTooltip [tooltipOptions]="home.tooltipOptions">
                    <a
                        *ngIf="!home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        [href]="home.url ? home.url : null"
                        class="p-menuitem-link"
                        (click)="itemClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.id]="home.id"
                        [attr.tabindex]="home.disabled ? null : '0'"
                    >
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iconStyle"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-menuitem-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeLabel" class="p-menuitem-text">{{ home.label }}</span>
                            <ng-template #htmlHomeLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                    <a
                        *ngIf="home.routerLink"
                        [routerLink]="home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        [queryParams]="home.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                        class="p-menuitem-link"
                        (click)="itemClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.id]="home.id"
                        [attr.tabindex]="home.disabled ? null : '0'"
                        [fragment]="home.fragment"
                        [queryParamsHandling]="home.queryParamsHandling"
                        [preserveFragment]="home.preserveFragment"
                        [skipLocationChange]="home.skipLocationChange"
                        [replaceUrl]="home.replaceUrl"
                        [state]="home.state"
                    >
                        <span *ngIf="home.icon" class="p-menuitem-icon" [ngClass]="home.icon" [ngStyle]="home.iconStyle"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-menuitem-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" class="p-menuitem-text">{{ home.label }}</span>
                            <ng-template #htmlHomeRouteLabel><span class="p-menuitem-text" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                </li>
                <li *ngIf="model && home" class="p-breadcrumb-chevron">
                    <ChevronRightIcon *ngIf="!separatorTemplate" />
                    <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-item let-end="last" [ngForOf]="model">
                    <li [class]="item.styleClass" [ngStyle]="item.style" [ngClass]="{ 'p-disabled': item.disabled }" pTooltip [tooltipOptions]="item.tooltipOptions">
                        <a
                            *ngIf="!item.routerLink"
                            [attr.href]="item.url ? item.url : null"
                            class="p-menuitem-link"
                            (click)="itemClick($event, item)"
                            [target]="item.target"
                            [attr.title]="item.title"
                            [attr.id]="item.id"
                            [attr.tabindex]="item.disabled ? null : '0'"
                        >
                            <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                            <ng-container *ngIf="item.label">
                                <span *ngIf="item.escape !== false; else htmlLabel" class="p-menuitem-text">{{ item.label }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            </ng-container>
                        </a>
                        <a
                            *ngIf="item.routerLink"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActive]="'p-menuitem-link-active'"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            class="p-menuitem-link"
                            (click)="itemClick($event, item)"
                            [target]="item.target"
                            [attr.title]="item.title"
                            [attr.id]="item.id"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                        >
                            <span *ngIf="item.icon" class="p-menuitem-icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                            <ng-container *ngIf="item.label">
                                <span *ngIf="item.escape !== false; else htmlRouteLabel" class="p-menuitem-text">{{ item.label }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            </ng-container>
                        </a>
                    </li>
                    <li *ngIf="!end" class="p-breadcrumb-chevron">
                        <ChevronRightIcon *ngIf="!separatorTemplate" />
                        <ng-template *ngTemplateOutlet="separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ul>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-breadcrumb{overflow-x:auto}.p-breadcrumb ul{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;cursor:pointer}.p-breadcrumb::-webkit-scrollbar{display:none}\n"]
    }]
  }], null, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    home: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    homeAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onItemClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate]
    }]
  });
})();
class BreadcrumbModule {}
_class2 = BreadcrumbModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BreadcrumbModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BreadcrumbModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BreadcrumbModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_7__.HomeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BreadcrumbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_7__.HomeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      exports: [Breadcrumb, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
      declarations: [Breadcrumb]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 104:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-contextmenu.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu),
/* harmony export */   ContextMenuModule: () => (/* binding */ ContextMenuModule),
/* harmony export */   ContextMenuSub: () => (/* binding */ ContextMenuSub)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angleright */ 5486);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 274);

var _class, _class2, _class3;

















const _c0 = ["sublist"];
const _c1 = ["menuitem"];
const _c2 = function (a0) {
  return {
    "p-hidden": a0
  };
};
function _class_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 5, 6);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, child_r2.visible === false));
  }
}
function _class_ng_template_2_li_1_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r2.icon)("ngStyle", child_r2.iconStyle);
  }
}
function _class_ng_template_2_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r2.label);
  }
}
function _class_ng_template_2_li_1_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", child_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_2_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r2.badge);
  }
}
function _class_ng_template_2_li_1_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleRightIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class_ng_template_2_li_1_a_2_ng_container_6_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_2_li_1_a_2_ng_container_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_2_li_1_a_2_ng_container_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_ng_template_2_li_1_a_2_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_2_ng_container_6_span_2_1_Template, 1, 0, null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.contextMenu.submenuIconTemplate);
  }
}
function _class_ng_template_2_li_1_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 1, "AngleRightIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_li_1_a_2_ng_container_6_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r17.contextMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.contextMenu.submenuIconTemplate);
  }
}
const _c3 = function (a1) {
  return {
    "p-menuitem-link": true,
    "p-disabled": a1
  };
};
function _class_ng_template_2_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_2_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const child_r2 = ctx_r27.$implicit;
      const index_r3 = ctx_r27.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.onItemClick($event, child_r2, _r8, ctx_r26.getKey(index_r3)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_2_span_1_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_li_1_a_2_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_2_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_2_li_1_a_2_span_5_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_2_li_1_a_2_ng_container_6_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const child_r2 = ctx_r29.$implicit;
    const index_r3 = ctx_r29.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", child_r2.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c3, child_r2.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", child_r2.url ? child_r2.url : null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled ? null : "0")("aria-haspopup", ctx_r9.item.items != null)("aria-expanded", ctx_r9.isActive(ctx_r9.getKey(index_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.escape !== false)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function _class_ng_template_2_li_1_a_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r2.icon)("ngStyle", child_r2.iconStyle);
  }
}
function _class_ng_template_2_li_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r2.label);
  }
}
function _class_ng_template_2_li_1_a_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", child_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_2_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r2.badge);
  }
}
function _class_ng_template_2_li_1_a_3_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleRightIcon", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class_ng_template_2_li_1_a_3_ng_container_6_span_2_1_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_2_li_1_a_3_ng_container_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_2_li_1_a_3_ng_container_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_ng_template_2_li_1_a_3_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_3_ng_container_6_span_2_1_Template, 1, 0, null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r41.contextMenu.submenuIconTemplate);
  }
}
function _class_ng_template_2_li_1_a_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_3_ng_container_6_AngleRightIcon_1_Template, 1, 1, "AngleRightIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_li_1_a_3_ng_container_6_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.contextMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.contextMenu.submenuIconTemplate);
  }
}
const _c4 = function () {
  return {
    exact: false
  };
};
function _class_ng_template_2_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_2_li_1_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const child_r2 = ctx_r45.$implicit;
      const index_r3 = ctx_r45.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.onItemClick($event, child_r2, _r8, ctx_r44.getKey(index_r3)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_a_3_span_1_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_li_1_a_3_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_2_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_2_li_1_a_3_span_5_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_2_li_1_a_3_ng_container_6_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", child_r2.routerLink)("queryParams", child_r2.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r2.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4))("target", child_r2.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c3, child_r2.disabled))("fragment", child_r2.fragment)("queryParamsHandling", child_r2.queryParamsHandling)("preserveFragment", child_r2.preserveFragment)("skipLocationChange", child_r2.skipLocationChange)("replaceUrl", child_r2.replaceUrl)("state", child_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.escape !== false)("ngIfElse", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function _class_ng_template_2_li_1_p_contextMenuSub_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-contextMenuSub", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leafClick", function _class_ng_template_2_li_1_p_contextMenuSub_4_Template_p_contextMenuSub_leafClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.onLeafClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r3 = ctx_r50.index;
    const child_r2 = ctx_r50.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentItemKey", ctx_r11.getKey(index_r3))("item", child_r2);
  }
}
const _c5 = function (a1, a2) {
  return {
    "p-menuitem": true,
    "p-menuitem-active": a1,
    "p-hidden": a2
  };
};
function _class_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function _class_ng_template_2_li_1_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const child_r2 = ctx_r52.$implicit;
      const index_r3 = ctx_r52.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.onItemMouseEnter($event, child_r2, ctx_r51.getKey(index_r3)));
    })("mouseleave", function _class_ng_template_2_li_1_Template_li_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);
      const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r54.onItemMouseLeave($event, child_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_li_1_a_2_Template, 7, 15, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_2_li_1_a_3_Template, 7, 23, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_ng_template_2_li_1_p_contextMenuSub_4_Template, 1, 2, "p-contextMenuSub", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const child_r2 = ctx_r56.$implicit;
    const index_r3 = ctx_r56.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](child_r2.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c5, ctx_r5.isActive(ctx_r5.getKey(index_r3)), child_r2.visible === false))("ngStyle", child_r2.style)("tooltipOptions", child_r2.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-ik", ctx_r5.getKey(index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !child_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function _class_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_2_li_0_Template, 2, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_2_li_1_Template, 5, 12, "li", 4);
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !child_r2.separator);
  }
}
const _c6 = function (a0) {
  return {
    "p-submenu-list": a0
  };
};
const _c7 = ["container"];
class ContextMenuSub {
  constructor(contextMenu) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "item", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "root", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parentItemKey", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "leafClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sublistViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuitemViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenu", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItemKey", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hideTimeout", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItemKeyChangeSubscription", void 0);
    this.contextMenu = contextMenu;
  }
  ngOnInit() {
    this.activeItemKeyChangeSubscription = this.contextMenu.contextMenuService.activeItemKeyChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.contextMenu.ngDestroy$)).subscribe(activeItemKey => {
      this.activeItemKey = activeItemKey;
      if (this.isActive(this.parentItemKey) && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(this.sublistViewChild?.nativeElement, 'p-submenu-list-active')) {
        this.contextMenu.positionSubmenu(this.sublistViewChild?.nativeElement);
      }
      this.contextMenu.cd.markForCheck();
    });
  }
  onItemMouseEnter(event, item, key) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    if (item.disabled) {
      this.activeItemKey = null;
      return;
    }
    if (item.items) {
      let childSublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(event.currentTarget, '.p-submenu-list');
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(childSublist, 'p-submenu-list-active');
    }
    this.contextMenu.contextMenuService.changeKey(key);
  }
  onItemMouseLeave(event, item) {
    if (item.disabled) {
      return;
    }
    if (this.contextMenu.el.nativeElement.contains(event.target)) {
      if (item.items) {
        this.contextMenu.removeActiveFromSubLists(event.currentTarget);
      }
      if (!this.root) {
        this.contextMenu.contextMenuService.changeKey(this.parentItemKey);
      }
    }
  }
  onItemClick(event, item, menuitem, key) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    if (item.items) {
      let childSublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(menuitem, '.p-submenu-list');
      if (childSublist) {
        if (this.isActive(key) && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(childSublist, 'p-submenu-list-active')) {
          this.contextMenu.removeActiveFromSubLists(menuitem);
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(childSublist, 'p-submenu-list-active');
        }
        this.contextMenu.contextMenuService.changeKey(key);
      }
    }
    if (!item.items) {
      this.onLeafClick();
    }
  }
  onLeafClick() {
    if (this.root) {
      this.contextMenu.hide();
    }
    this.leafClick.emit();
  }
  getKey(index) {
    return this.root ? String(index) : this.parentItemKey + '_' + index;
  }
  isActive(key) {
    return this.activeItemKey && (this.activeItemKey.startsWith(key + '_') || this.activeItemKey === key);
  }
}
_class = ContextMenuSub;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenuSub, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ContextMenu)));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenuSub, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-contextMenuSub"]],
  viewQuery: function _class_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sublistViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuitemViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    item: "item",
    root: "root",
    parentItemKey: "parentItemKey"
  },
  outputs: {
    leafClick: "leafClick"
  },
  decls: 3,
  vars: 4,
  consts: [[3, "ngClass"], ["sublist", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["pTooltip", "", "role", "none", 3, "ngClass", "ngStyle", "class", "tooltipOptions", "mouseenter", "mouseleave", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["menuitem", ""], ["pTooltip", "", "role", "none", 3, "ngClass", "ngStyle", "tooltipOptions", "mouseenter", "mouseleave"], ["pRipple", "", 3, "target", "ngClass", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentItemKey", "item", "leafClick", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", "click"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-submenu-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-submenu-icon"], [4, "ngTemplateOutlet"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentItemKey", "item", "leafClick"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_2_Template, 2, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c6, !ctx.root));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.root ? ctx.item : ctx.item == null ? null : ctx.item.items);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon, _class];
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContextMenuSub, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-contextMenuSub',
      template: `
        <ul #sublist [ngClass]="{ 'p-submenu-list': !root }">
            <ng-template ngFor let-child let-index="index" [ngForOf]="root ? item : item?.items">
                <li *ngIf="child.separator" #menuitem class="p-menu-separator" [ngClass]="{ 'p-hidden': child.visible === false }" role="separator"></li>
                <li
                    *ngIf="!child.separator"
                    #menuitem
                    [ngClass]="{ 'p-menuitem': true, 'p-menuitem-active': isActive(getKey(index)), 'p-hidden': child.visible === false }"
                    [ngStyle]="child.style"
                    [class]="child.styleClass"
                    pTooltip
                    [tooltipOptions]="child.tooltipOptions"
                    (mouseenter)="onItemMouseEnter($event, child, getKey(index))"
                    (mouseleave)="onItemMouseLeave($event, child)"
                    role="none"
                    [attr.data-ik]="getKey(index)"
                >
                    <a
                        *ngIf="!child.routerLink"
                        [attr.href]="child.url ? child.url : null"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        [attr.tabindex]="child.disabled ? null : '0'"
                        (click)="onItemClick($event, child, menuitem, getKey(index))"
                        [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': child.disabled }"
                        pRipple
                        [attr.aria-haspopup]="item.items != null"
                        [attr.aria-expanded]="isActive(getKey(index))"
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{ child.label }}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <ng-container *ngIf="child.items">
                            <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" />
                            <span *ngIf="contextMenu.submenuIconTemplate" class="p-submenu-icon">
                                <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </a>
                    <a
                        *ngIf="child.routerLink"
                        [routerLink]="child.routerLink"
                        [queryParams]="child.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        role="menuitem"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions || { exact: false }"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        [attr.tabindex]="child.disabled ? null : '0'"
                        (click)="onItemClick($event, child, menuitem, getKey(index))"
                        [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': child.disabled }"
                        pRipple
                        [fragment]="child.fragment"
                        [queryParamsHandling]="child.queryParamsHandling"
                        [preserveFragment]="child.preserveFragment"
                        [skipLocationChange]="child.skipLocationChange"
                        [replaceUrl]="child.replaceUrl"
                        [state]="child.state"
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{ child.label }}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <ng-container *ngIf="child.items">
                            <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" />
                            <span *ngIf="contextMenu.submenuIconTemplate" class="p-submenu-icon">
                                <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </a>
                    <p-contextMenuSub [parentItemKey]="getKey(index)" [item]="child" *ngIf="child.items" (leafClick)="onLeafClick()"></p-contextMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: ContextMenu,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ContextMenu)]
      }]
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parentItemKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    leafClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    sublistViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['sublist']
    }],
    menuitemViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['menuitem']
    }]
  });
})();
/**
 * ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.
 * @group Components
 */
class ContextMenu {
  constructor(document, el, renderer, cd, zone, contextMenuService, config) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "zone", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contextMenuService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
    /**
     * An array of menuitems.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
    /**
     * Attaches the menu to document instead of a particular item.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "global", void 0);
    /**
     * Local template variable name of the element to attach the context menu.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "target", void 0);
    /**
     * Inline style of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Class of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "appendTo", void 0);
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoZIndex", true);
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "baseZIndex", 0);
    /**
     * Event for which the menu must be displayed.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "triggerEvent", 'contextmenu');
    /**
     * Displays the popup menu.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onShow", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    /**
     * Hides the popup menu.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHide", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "containerViewChild", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentClickListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentTriggerListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentKeydownListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "windowResizeListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "triggerEventListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ngDestroy$", new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "preventDocumentDefault", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "window", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submenuIconTemplate", void 0);
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.contextMenuService = contextMenuService;
    this.config = config;
    this.window = this.document.defaultView;
  }
  ngAfterViewInit() {
    if (this.global) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.triggerEventListener = this.renderer.listen(documentTarget, this.triggerEvent, event => {
        if (this.containerViewChild && this.containerViewChild.nativeElement.style.display !== 'none') {
          this.hide();
        }
        this.show(event);
        event.preventDefault();
      });
    } else if (this.target) {
      this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, event => {
        if (this.containerViewChild && this.containerViewChild.nativeElement.style.display !== 'none') {
          this.hide();
        }
        this.show(event);
        event.preventDefault();
      });
    }
    if (this.appendTo) {
      if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.containerViewChild?.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.containerViewChild?.nativeElement, this.appendTo);
    }
  }
  show(event) {
    this.clearActiveItem();
    this.position(event);
    this.moveOnTop();
    this.containerViewChild.nativeElement.style.display = 'block';
    this.preventDocumentDefault = true;
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.fadeIn(this.containerViewChild?.nativeElement, 250);
    this.bindGlobalListeners();
    if (event) {
      event.preventDefault();
    }
    this.onShow.emit();
  }
  hide() {
    this.containerViewChild.nativeElement.style.display = 'none';
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.clear(this.containerViewChild?.nativeElement);
    }
    this.clearActiveItem();
    this.unbindGlobalListeners();
    this.onHide.emit();
  }
  moveOnTop() {
    if (this.autoZIndex && this.containerViewChild && this.containerViewChild.nativeElement.style.display !== 'block') {
      primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.set('menu', this.containerViewChild.nativeElement, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  toggle(event) {
    if (this.containerViewChild.nativeElement.offsetParent) this.hide();else this.show(event);
  }
  position(event) {
    if (event) {
      let left = event.pageX + 1;
      let top = event.pageY + 1;
      let width = this.containerViewChild?.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(this.containerViewChild?.nativeElement);
      let height = this.containerViewChild?.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterHeight(this.containerViewChild?.nativeElement);
      let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
      //flip
      if (left + width - this.document.scrollingElement.scrollLeft > viewport.width) {
        left -= width;
      }
      //flip
      if (top + height - this.document.scrollingElement.scrollTop > viewport.height) {
        top -= height;
      }
      //fit
      if (left < this.document.scrollingElement.scrollLeft) {
        left = this.document.scrollingElement.scrollLeft;
      }
      //fit
      if (top < this.document.scrollingElement.scrollTop) {
        top = this.document.scrollingElement.scrollTop;
      }
      this.containerViewChild.nativeElement.style.left = left + 'px';
      this.containerViewChild.nativeElement.style.top = top + 'px';
    }
  }
  positionSubmenu(sublist) {
    let parentMenuItem = sublist.parentElement?.parentElement;
    let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
    let sublistWidth = sublist.offsetParent ? sublist.offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(sublist);
    let sublistHeight = sublist.offsetHeight ? sublist.offsetHeight : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterHeight(sublist);
    let itemOuterWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(parentMenuItem?.children[0]);
    let itemOuterHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(parentMenuItem?.children[0]);
    let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(parentMenuItem?.parentElement);
    sublist.style.zIndex = (++primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.zindex).toString();
    if (parseInt(containerOffset.top) + itemOuterHeight + sublistHeight > viewport.height - primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarHeight()) {
      sublist.style.removeProperty('top');
      sublist.style.bottom = '0px';
    } else {
      sublist.style.removeProperty('bottom');
      sublist.style.top = '0px';
    }
    if (parseInt(containerOffset.left) + itemOuterWidth + sublistWidth > viewport.width - primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarWidth()) {
      sublist.style.left = -sublistWidth + 'px';
    } else {
      sublist.style.left = itemOuterWidth + 'px';
    }
  }
  isItemMatched(menuitem) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(menuitem, 'p-menuitem') && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(menuitem.children[0], 'p-disabled');
  }
  findNextItem(menuitem, isRepeated) {
    let nextMenuitem = menuitem.nextElementSibling;
    if (nextMenuitem) {
      return this.isItemMatched(nextMenuitem) ? nextMenuitem : this.findNextItem(nextMenuitem, isRepeated);
    } else {
      let firstItem = menuitem.parentElement?.children[0];
      return this.isItemMatched(firstItem) ? firstItem : !isRepeated ? this.findNextItem(firstItem, true) : null;
    }
  }
  findPrevItem(menuitem, isRepeated) {
    let prevMenuitem = menuitem.previousElementSibling;
    if (prevMenuitem) {
      return this.isItemMatched(prevMenuitem) ? prevMenuitem : this.findPrevItem(prevMenuitem, isRepeated);
    } else {
      let lastItem = menuitem.parentElement?.children[menuitem.parentElement.children.length - 1];
      return this.isItemMatched(lastItem) ? lastItem : !isRepeated ? this.findPrevItem(lastItem, true) : null;
    }
  }
  getActiveItem() {
    let activeItemKey = this.contextMenuService.activeItemKey;
    return activeItemKey == null ? null : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild?.nativeElement, '.p-menuitem[data-ik="' + activeItemKey + '"]');
  }
  clearActiveItem() {
    if (this.contextMenuService.activeItemKey) {
      this.removeActiveFromSubLists(this.containerViewChild?.nativeElement);
      this.contextMenuService.reset();
    }
  }
  removeActiveFromSubLists(el) {
    let sublists = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(el, '.p-submenu-list-active');
    for (let sublist of sublists) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(sublist, 'p-submenu-list-active');
    }
  }
  removeActiveFromSublist(menuitem) {
    if (menuitem) {
      let sublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(menuitem, '.p-submenu-list');
      if (sublist && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(menuitem, 'p-submenu-list-active')) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(menuitem, 'p-submenu-list-active');
      }
    }
  }
  bindGlobalListeners() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
        if (this.containerViewChild?.nativeElement.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2 && this.triggerEvent !== 'click') {
          this.hide();
        }
      });
      this.documentTriggerListener = this.renderer.listen(documentTarget, this.triggerEvent, event => {
        if (this.containerViewChild?.nativeElement.offsetParent && this.isOutsideClicked(event) && !this.preventDocumentDefault) {
          this.hide();
        }
        this.preventDocumentDefault = false;
      });
    }
    this.zone.runOutsideAngular(() => {
      if (!this.windowResizeListener) {
        this.renderer.listen(this.window, 'resize', this.onWindowResize.bind(this));
      }
    });
    if (!this.documentKeydownListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentKeydownListener = this.renderer.listen(documentTarget, 'keydown', event => {
        let activeItem = this.getActiveItem();
        switch (event.key) {
          case 'ArrowDown':
            if (activeItem) {
              this.removeActiveFromSublist(activeItem);
              activeItem = this.findNextItem(activeItem);
            } else {
              let firstItem = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild?.nativeElement, '.p-menuitem-link').parentElement;
              activeItem = this.isItemMatched(firstItem) ? firstItem : this.findNextItem(firstItem);
            }
            if (activeItem) {
              this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
            }
            event.preventDefault();
            break;
          case 'ArrowUp':
            if (activeItem) {
              this.removeActiveFromSublist(activeItem);
              activeItem = this.findPrevItem(activeItem);
            } else {
              let sublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild?.nativeElement, 'ul');
              let lastItem = sublist.children[sublist.children.length - 1];
              activeItem = this.isItemMatched(lastItem) ? lastItem : this.findPrevItem(lastItem);
            }
            if (activeItem) {
              this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
            }
            event.preventDefault();
            break;
          case 'ArrowRight':
            if (activeItem) {
              let sublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(activeItem, '.p-submenu-list');
              if (sublist) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(sublist, 'p-submenu-list-active');
                activeItem = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(sublist, '.p-menuitem-link:not(.p-disabled)').parentElement;
                if (activeItem) {
                  this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                }
              }
            }
            event.preventDefault();
            break;
          case 'ArrowLeft':
            if (activeItem) {
              let sublist = activeItem.parentElement;
              if (sublist && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(sublist, 'p-submenu-list-active')) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(sublist, 'p-submenu-list-active');
                activeItem = sublist.parentElement.parentElement;
                if (activeItem) {
                  this.contextMenuService.changeKey(activeItem.getAttribute('data-ik'));
                }
              }
            }
            event.preventDefault();
            break;
          case 'Escape':
            this.hide();
            event.preventDefault();
            break;
          case 'Enter':
            if (activeItem) {
              this.handleItemClick(event, this.findModelItemFromKey(this.contextMenuService.activeItemKey), activeItem);
            }
            event.preventDefault();
            break;
          default:
            break;
        }
      });
    }
  }
  findModelItemFromKey(key) {
    if (key == null || !this.model) {
      return null;
    }
    let indexes = key.split('_');
    return indexes.reduce((item, currentIndex) => {
      return item ? item.items[currentIndex] : this.model[currentIndex];
    }, null);
  }
  handleItemClick(event, item, menuitem) {
    if (!item || item.disabled) {
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    if (item.items) {
      let childSublist = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(menuitem, '.p-submenu-list');
      if (childSublist) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(childSublist, 'p-submenu-list-active')) {
          this.removeActiveFromSubLists(menuitem);
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(childSublist, 'p-submenu-list-active');
          this.positionSubmenu(childSublist);
        }
      }
    }
    if (!item.items) {
      this.hide();
    }
  }
  unbindGlobalListeners() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
    if (this.documentTriggerListener) {
      this.documentTriggerListener();
      this.documentTriggerListener = null;
    }
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.documentKeydownListener) {
      this.documentKeydownListener();
      this.documentKeydownListener = null;
    }
  }
  onWindowResize() {
    if (this.containerViewChild?.nativeElement.offsetParent) {
      this.hide();
    }
  }
  isOutsideClicked(event) {
    return !(this.containerViewChild?.nativeElement.isSameNode(event.target) || this.containerViewChild?.nativeElement.contains(event.target));
  }
  ngOnDestroy() {
    this.unbindGlobalListeners();
    if (this.triggerEventListener) {
      this.triggerEventListener();
      this.triggerEventListener = null;
    }
    if (this.containerViewChild && this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.clear(this.containerViewChild.nativeElement);
    }
    if (this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.containerViewChild?.nativeElement);
    }
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
_class2 = ContextMenu;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenu, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeNGConfig));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenu, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["p-contextMenu"]],
  contentQueries: function _class2_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class2_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    global: "global",
    target: "target",
    style: "style",
    styleClass: "styleClass",
    appendTo: "appendTo",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    triggerEvent: "triggerEvent"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  decls: 3,
  vars: 6,
  consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "item", "root"]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-contextMenuSub", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "p-contextmenu p-component")("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.model)("root", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ContextMenuSub],
  styles: [".p-contextmenu{position:absolute;display:none}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list.p-submenu-list-active{display:block!important}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContextMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-contextMenu',
      template: `
        <div #container [ngClass]="'p-contextmenu p-component'" [class]="styleClass" [ngStyle]="style">
            <p-contextMenuSub [item]="model" [root]="true"></p-contextMenuSub>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-contextmenu{position:absolute;display:none}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1;display:none}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list.p-submenu-list-active{display:block!important}\n"]
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
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.ContextMenuService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeNGConfig
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    global: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    triggerEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['container']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate]
    }]
  });
})();
class ContextMenuModule {}
_class3 = ContextMenuModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenuModule, "\u0275fac", function _class3_Factory(t) {
  return new (t || _class3)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenuModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class3
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContextMenuModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [primeng_api__WEBPACK_IMPORTED_MODULE_11__.ContextMenuService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_11__.SharedModule, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_11__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContextMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_11__.SharedModule, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon],
      exports: [ContextMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_11__.SharedModule],
      declarations: [ContextMenu, ContextMenuSub],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_11__.ContextMenuService]
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

/***/ 8518:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-megamenu.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenu: () => (/* binding */ MegaMenu),
/* harmony export */   MegaMenuModule: () => (/* binding */ MegaMenuModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angledown */ 2269);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/angleright */ 5486);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 1251);

var _class, _class2;














/**
 * MegaMenu is navigation component that displays submenus together.
 * @group Components
 */
function _class_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
const _c0 = function (a0) {
  return {
    "p-hidden": a0
  };
};
function _class_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 10);
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, category_r6.visible === false));
  }
}
function _class_ng_template_3_li_1_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", category_r6.icon);
  }
}
function _class_ng_template_3_li_1_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.label);
  }
}
function _class_ng_template_3_li_1_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", category_r6.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_3_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", category_r6.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.badge);
  }
}
function _class_ng_template_3_li_1_a_1_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleDownIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class_ng_template_3_li_1_a_1_ng_container_6_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleRightIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class_ng_template_3_li_1_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_a_1_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_a_1_ng_container_6_AngleRightIcon_2_Template, 1, 1, "AngleRightIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.orientation === "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.orientation === "vertical");
  }
}
function _class_ng_template_3_li_1_a_1_7_ng_template_0_Template(rf, ctx) {}
function _class_ng_template_3_li_1_a_1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_3_li_1_a_1_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c1 = function (a1) {
  return {
    "p-menuitem-link": true,
    "p-disabled": a1
  };
};
function _class_ng_template_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_3_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.onCategoryClick($event, category_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_a_1_span_1_Template, 1, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_3_li_1_a_1_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_3_li_1_a_1_ng_container_6_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class_ng_template_3_li_1_a_1_7_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](category_r6.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", category_r6.url || "#", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", category_r6.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, category_r6.disabled))("ngStyle", category_r6.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", category_r6.title)("id", category_r6.id)("tabindex", category_r6.tabindex ? category_r6.tabindex : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.escape !== false)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.submenuIconTemplate);
  }
}
function _class_ng_template_3_li_1_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", category_r6.icon);
  }
}
function _class_ng_template_3_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.label);
  }
}
function _class_ng_template_3_li_1_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", category_r6.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_3_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", category_r6.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.badge);
  }
}
const _c2 = function () {
  return {
    exact: false
  };
};
function _class_ng_template_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_3_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.onCategoryClick($event, category_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_a_2_span_1_Template, 1, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_3_li_1_a_2_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](category_r6.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", category_r6.routerLink)("queryParams", category_r6.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", category_r6.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c2))("target", category_r6.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c1, category_r6.disabled))("ngStyle", category_r6.style)("fragment", category_r6.fragment)("queryParamsHandling", category_r6.queryParamsHandling)("preserveFragment", category_r6.preserveFragment)("skipLocationChange", category_r6.skipLocationChange)("replaceUrl", category_r6.replaceUrl)("state", category_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", category_r6.tabindex ? category_r6.tabindex : "0")("title", category_r6.title)("id", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.escape !== false)("ngIfElse", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.badge);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](submenu_r47.label);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 35);
  }
  if (rf & 2) {
    const submenu_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", submenu_r47.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", submenu_r47.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](submenu_r47.badge);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 38);
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, item_r56.visible === false));
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 45);
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r56.icon)("ngStyle", item_r56.iconStyle);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r56.label);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r56.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r56.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r56.badge);
  }
}
const _c3 = function (a0) {
  return {
    "p-disabled": a0
  };
};
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);
      const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.itemClick($event, item_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_1_Template, 1, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r56.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r56.url || "#", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("target", item_r56.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c3, item_r56.disabled))("ngStyle", item_r56.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", item_r56.title)("id", item_r56.id)("tabindex", item_r56.tabindex ? item_r56.tabindex : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.escape !== false)("ngIfElse", _r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.badge);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 45);
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r56.icon)("ngStyle", item_r56.iconStyle);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r56.label);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r56.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r56.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r56.badge);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86);
      const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r84.itemClick($event, item_r56));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_1_Template, 1, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r56.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r56.routerLink)("queryParams", item_r56.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r56.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c2))("target", item_r56.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c3, item_r56.disabled))("ngStyle", item_r56.style)("fragment", item_r56.fragment)("queryParamsHandling", item_r56.queryParamsHandling)("preserveFragment", item_r56.preserveFragment)("skipLocationChange", item_r56.skipLocationChange)("replaceUrl", item_r56.replaceUrl)("state", item_r56.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", item_r56.tabindex ? item_r56.tabindex : "0")("title", item_r56.title)("id", item_r56.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.escape !== false)("ngIfElse", _r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.badge);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_1_Template, 6, 15, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_a_2_Template, 6, 25, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r56.visible === false))("tooltipOptions", item_r56.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r56.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.routerLink);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_0_Template, 1, 3, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_li_1_Template, 3, 6, "li", 37);
  }
  if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r56.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r56.separator);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 31)(1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_2_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_3_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_6_Template, 2, 2, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r47 = ctx.$implicit;
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", submenu_r47.escape !== false)("ngIfElse", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", submenu_r47.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", submenu_r47.items);
  }
}
function _class_ng_template_3_li_1_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_Template, 7, 4, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r45 = ctx.$implicit;
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r44.getColumnClass(category_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r45);
  }
}
function _class_ng_template_3_li_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_div_3_ng_template_2_Template, 2, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r6.items);
  }
}
const _c4 = function (a1, a2) {
  return {
    "p-menuitem": true,
    "p-menuitem-active": a1,
    "p-hidden": a2
  };
};
function _class_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function _class_ng_template_3_li_1_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);
      const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r91.onCategoryMouseEnter($event, category_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_a_1_Template, 8, 17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_ng_template_3_li_1_a_2_Template, 6, 25, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_li_1_div_3_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c4, category_r6 == ctx_r8.activeItem, category_r6.visible === false))("tooltipOptions", category_r6.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !category_r6.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.items);
  }
}
function _class_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_ng_template_3_li_0_Template, 1, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_ng_template_3_li_1_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r6.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !category_r6.separator);
  }
}
function _class_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.endTemplate);
  }
}
function _class_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a1, a2) {
  return {
    "p-megamenu p-component": true,
    "p-megamenu-horizontal": a1,
    "p-megamenu-vertical": a2
  };
};
const _c6 = ["*"];
class MegaMenu {
  constructor(document, platformId, el, renderer, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    /**
     * An array of menuitems.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
    /**
     * Inline style of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Class of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Defines the orientation.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "orientation", 'horizontal');
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItem", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentClickListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "endTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submenuIconTemplate", void 0);
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'start':
          this.startTemplate = item.template;
          break;
        case 'submenuicon':
          this.submenuIconTemplate = item.template;
          break;
        case 'end':
          this.endTemplate = item.template;
          break;
      }
    });
  }
  onCategoryMouseEnter(event, menuitem) {
    if (menuitem.disabled) {
      event.preventDefault();
      return;
    }
    if (this.activeItem) {
      this.activeItem = menuitem;
    }
  }
  onCategoryClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    if (item.items) {
      if (this.activeItem && this.activeItem === item) {
        this.activeItem = null;
        this.unbindDocumentClickListener();
      } else {
        this.activeItem = item;
        this.bindDocumentClickListener();
      }
    }
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    this.activeItem = null;
  }
  getColumnClass(menuitem) {
    let length = menuitem.items ? menuitem.items.length : 0;
    let columnClass;
    switch (length) {
      case 2:
        columnClass = 'p-megamenu-col-6';
        break;
      case 3:
        columnClass = 'p-megamenu-col-4';
        break;
      case 4:
        columnClass = 'p-megamenu-col-3';
        break;
      case 6:
        columnClass = 'p-megamenu-col-2';
        break;
      default:
        columnClass = 'p-megamenu-col-12';
        break;
    }
    return columnClass;
  }
  bindDocumentClickListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      if (!this.documentClickListener) {
        this.documentClickListener = this.renderer.listen(this.document, 'click', event => {
          if (this.el && !this.el.nativeElement.contains(event.target)) {
            this.activeItem = null;
            this.unbindDocumentClickListener();
            this.cd.markForCheck();
          }
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
}
_class = MegaMenu;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MegaMenu, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MegaMenu, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-megaMenu"]],
  contentQueries: function _class_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    style: "style",
    styleClass: "styleClass",
    orientation: "orientation"
  },
  ngContentSelectors: _c6,
  decls: 7,
  vars: 11,
  consts: [[3, "ngStyle", "ngClass"], ["class", "p-megamenu-start", 4, "ngIf"], ["role", "menubar", 1, "p-megamenu-root-list"], ["ngFor", "", 3, "ngForOf"], ["class", "p-megamenu-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-megamenu-start"], [4, "ngTemplateOutlet"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], ["pTooltip", "", 3, "ngClass", "tooltipOptions", "mouseenter", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], ["pTooltip", "", 3, "ngClass", "tooltipOptions", "mouseenter"], ["pRipple", "", 3, "href", "target", "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-megamenu-panel", 4, "ngIf"], ["pRipple", "", 3, "href", "target", "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["categoryHtmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["categoryHtmlRouteLabel", ""], [1, "p-megamenu-panel"], [1, "p-megamenu-grid"], ["role", "menu", 1, "p-megamenu-submenu"], [1, "p-megamenu-submenu-header"], [4, "ngIf", "ngIfElse"], ["submenuHtmlLabel", ""], [3, "innerHTML"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem", "role", "none", "pTooltip", "", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["role", "none", "pTooltip", "", 1, "p-menuitem", 3, "ngClass", "tooltipOptions"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "href", "target", "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "href", "target", "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["htmlLabel", ""], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-megamenu-end"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_ng_template_3_Template, 2, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c5, ctx.orientation == "horizontal", ctx.orientation == "vertical"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endTemplate)("ngIfElse", _r3);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_7__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon];
  },
  styles: [".p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-submenu-header{display:flex;align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MegaMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-megaMenu',
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="{ 'p-megamenu p-component': true, 'p-megamenu-horizontal': orientation == 'horizontal', 'p-megamenu-vertical': orientation == 'vertical' }">
            <div class="p-megamenu-start" *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <ul class="p-megamenu-root-list" role="menubar">
                <ng-template ngFor let-category [ngForOf]="model">
                    <li *ngIf="category.separator" class="p-menu-separator" [ngClass]="{ 'p-hidden': category.visible === false }"></li>
                    <li
                        *ngIf="!category.separator"
                        [ngClass]="{ 'p-menuitem': true, 'p-menuitem-active': category == activeItem, 'p-hidden': category.visible === false }"
                        pTooltip
                        [tooltipOptions]="category.tooltipOptions"
                        (mouseenter)="onCategoryMouseEnter($event, category)"
                    >
                        <a
                            *ngIf="!category.routerLink"
                            [href]="category.url || '#'"
                            [target]="category.target"
                            [attr.title]="category.title"
                            [attr.id]="category.id"
                            (click)="onCategoryClick($event, category)"
                            [attr.tabindex]="category.tabindex ? category.tabindex : '0'"
                            [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': category.disabled }"
                            [ngStyle]="category.style"
                            [class]="category.styleClass"
                            pRipple
                        >
                            <span class="p-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="p-menuitem-text" *ngIf="category.escape !== false; else categoryHtmlLabel">{{ category.label }}</span>
                            <ng-template #categoryHtmlLabel><span class="p-menuitem-text" [innerHTML]="category.label"></span></ng-template>
                            <span class="p-menuitem-badge" *ngIf="category.badge" [ngClass]="category.badgeStyleClass">{{ category.badge }}</span>
                            <ng-container *ngIf="!submenuIconTemplate">
                                <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="orientation === 'horizontal'" />
                                <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="orientation === 'vertical'" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                        </a>
                        <a
                            *ngIf="category.routerLink"
                            [routerLink]="category.routerLink"
                            [queryParams]="category.queryParams"
                            [routerLinkActive]="'p-menuitem-link-active'"
                            [routerLinkActiveOptions]="category.routerLinkActiveOptions || { exact: false }"
                            [attr.tabindex]="category.tabindex ? category.tabindex : '0'"
                            [target]="category.target"
                            [attr.title]="category.title"
                            [attr.id]="category.id"
                            (click)="onCategoryClick($event, category)"
                            [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': category.disabled }"
                            [ngStyle]="category.style"
                            [class]="category.styleClass"
                            [fragment]="category.fragment"
                            [queryParamsHandling]="category.queryParamsHandling"
                            [preserveFragment]="category.preserveFragment"
                            [skipLocationChange]="category.skipLocationChange"
                            [replaceUrl]="category.replaceUrl"
                            [state]="category.state"
                            pRipple
                        >
                            <span class="p-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="p-menuitem-text" *ngIf="category.escape !== false; else categoryHtmlRouteLabel">{{ category.label }}</span>
                            <ng-template #categoryHtmlRouteLabel><span class="p-menuitem-text" [innerHTML]="category.label"></span></ng-template>
                            <span class="p-menuitem-badge" *ngIf="category.badge" [ngClass]="category.badgeStyleClass">{{ category.badge }}</span>
                        </a>
                        <div class="p-megamenu-panel" *ngIf="category.items">
                            <div class="p-megamenu-grid">
                                <ng-template ngFor let-column [ngForOf]="category.items">
                                    <div [class]="getColumnClass(category)">
                                        <ng-template ngFor let-submenu [ngForOf]="column">
                                            <ul class="p-megamenu-submenu" role="menu">
                                                <li class="p-megamenu-submenu-header">
                                                    <span *ngIf="submenu.escape !== false; else submenuHtmlLabel">{{ submenu.label }}</span>
                                                    <ng-template #submenuHtmlLabel><span [innerHTML]="submenu.label"></span></ng-template>
                                                    <span class="p-menuitem-badge" *ngIf="submenu.badge" [ngClass]="submenu.badgeStyleClass">{{ submenu.badge }}</span>
                                                </li>
                                                <ng-template ngFor let-item [ngForOf]="submenu.items">
                                                    <li *ngIf="item.separator" class="p-menu-separator" [ngClass]="{ 'p-hidden': item.visible === false }" role="separator"></li>
                                                    <li *ngIf="!item.separator" class="p-menuitem" [ngClass]="{ 'p-hidden': item.visible === false }" role="none" pTooltip [tooltipOptions]="item.tooltipOptions">
                                                        <a
                                                            *ngIf="!item.routerLink"
                                                            role="menuitem"
                                                            [href]="item.url || '#'"
                                                            class="p-menuitem-link"
                                                            [target]="item.target"
                                                            [attr.title]="item.title"
                                                            [attr.id]="item.id"
                                                            [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [ngClass]="{ 'p-disabled': item.disabled }"
                                                            [ngStyle]="item.style"
                                                            [class]="item.styleClass"
                                                            (click)="itemClick($event, item)"
                                                            pRipple
                                                        >
                                                            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                                                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                                            <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                                                        </a>
                                                        <a
                                                            *ngIf="item.routerLink"
                                                            role="menuitem"
                                                            [routerLink]="item.routerLink"
                                                            [queryParams]="item.queryParams"
                                                            [routerLinkActive]="'p-menuitem-link-active'"
                                                            [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                                            class="p-menuitem-link"
                                                            [target]="item.target"
                                                            [attr.title]="item.title"
                                                            [attr.id]="item.id"
                                                            [ngClass]="{ 'p-disabled': item.disabled }"
                                                            [ngStyle]="item.style"
                                                            [class]="item.styleClass"
                                                            (click)="itemClick($event, item)"
                                                            [fragment]="item.fragment"
                                                            [queryParamsHandling]="item.queryParamsHandling"
                                                            [preserveFragment]="item.preserveFragment"
                                                            [skipLocationChange]="item.skipLocationChange"
                                                            [replaceUrl]="item.replaceUrl"
                                                            [state]="item.state"
                                                            pRipple
                                                        >
                                                            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                                                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                                            <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                                                        </a>
                                                    </li>
                                                </ng-template>
                                            </ul>
                                        </ng-template>
                                    </div>
                                </ng-template>
                            </div>
                        </div>
                    </li>
                </ng-template>
            </ul>
            <div class="p-megamenu-end" *ngIf="endTemplate; else legacy">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
            <ng-template #legacy>
                <div class="p-megamenu-end">
                    <ng-content></ng-content>
                </div>
            </ng-template>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-submenu-header{display:flex;align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}\n"]
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }]
  });
})();
class MegaMenuModule {}
_class2 = MegaMenuModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MegaMenuModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MegaMenuModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MegaMenuModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_7__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MegaMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_7__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_8__.AngleRightIcon],
      exports: [MegaMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [MegaMenu]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 499:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-menubar.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menubar: () => (/* binding */ Menubar),
/* harmony export */   MenubarModule: () => (/* binding */ MenubarModule),
/* harmony export */   MenubarService: () => (/* binding */ MenubarService),
/* harmony export */   MenubarSub: () => (/* binding */ MenubarSub)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/angledown */ 2269);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/angleright */ 5486);
/* harmony import */ var primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/bars */ 8819);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/utils */ 5861);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9329);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4520);

var _class, _class2, _class3, _class4;


















const _c0 = function (a0) {
  return {
    "p-hidden": a0
  };
};
function _class2_ng_template_1_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 4);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, child_r1.visible === false));
  }
}
function _class2_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r1.icon)("ngStyle", child_r1.iconStyle);
  }
}
function _class2_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r1.label);
  }
}
function _class2_ng_template_1_li_1_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", child_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class2_ng_template_1_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r1.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r1.badge);
  }
}
function _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleDownIcon", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleRightIcon", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 1, "AngleRightIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r19.root);
  }
}
function _class2_ng_template_1_li_1_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function _class2_ng_template_1_li_1_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_ng_template_1_li_1_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_ng_template_1_li_1_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_2_ng_container_6_2_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.menubar.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.menubar.submenuIconTemplate);
  }
}
const _c1 = function (a1) {
  return {
    "p-menuitem-link": true,
    "p-disabled": a1
  };
};
function _class2_ng_template_1_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class2_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.onItemClick($event, child_r1));
    })("mouseenter", function _class2_ng_template_1_li_1_a_2_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.onItemMouseEnter($event, child_r1));
    })("mouseleave", function _class2_ng_template_1_li_1_a_2_Template_a_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.onItemMouseLeave($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_2_span_1_Template, 1, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_2_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_ng_template_1_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_ng_template_1_li_1_a_2_span_5_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class2_ng_template_1_li_1_a_2_ng_container_6_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", child_r1.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, child_r1.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", child_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("data-automationid", child_r1.automationId)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0")("aria-haspopup", ctx_r6.item.items != null)("aria-expanded", ctx_r6.item === ctx_r6.activeItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.escape !== false)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.items);
  }
}
function _class2_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r1.icon)("ngStyle", child_r1.iconStyle);
  }
}
function _class2_ng_template_1_li_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r1.label);
  }
}
function _class2_ng_template_1_li_1_a_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", child_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class2_ng_template_1_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", child_r1.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r1.badge);
  }
}
function _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleDownIcon", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "AngleRightIcon", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 1, "AngleRightIcon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r42.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r42.root);
  }
}
function _class2_ng_template_1_li_1_a_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function _class2_ng_template_1_li_1_a_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_ng_template_1_li_1_a_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class2_ng_template_1_li_1_a_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_3_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_3_ng_container_6_2_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r37.menubar.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r37.menubar.submenuIconTemplate);
  }
}
const _c2 = function () {
  return {
    exact: false
  };
};
function _class2_ng_template_1_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class2_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.onItemClick($event, child_r1));
    })("mouseenter", function _class2_ng_template_1_li_1_a_3_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r50.onItemMouseEnter($event, child_r1));
    })("mouseleave", function _class2_ng_template_1_li_1_a_3_Template_a_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r52.onItemMouseLeave($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_a_3_span_1_Template, 1, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_3_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_ng_template_1_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class2_ng_template_1_li_1_a_3_span_5_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class2_ng_template_1_li_1_a_3_ng_container_6_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2))("target", child_r1.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-automationid", child_r1.automationId)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.escape !== false)("ngIfElse", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.items);
  }
}
function _class2_ng_template_1_li_1_p_menubarSub_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-menubarSub", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leafClick", function _class2_ng_template_1_li_1_p_menubarSub_4_Template_p_menubarSub_leafClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r55.onLeafClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("parentActive", child_r1 === ctx_r8.activeItem)("item", child_r1)("mobileActive", ctx_r8.mobileActive)("autoDisplay", ctx_r8.autoDisplay);
  }
}
const _c3 = function (a1, a2) {
  return {
    "p-menuitem": true,
    "p-menuitem-active": a1,
    "p-hidden": a2
  };
};
function _class2_ng_template_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class2_ng_template_1_li_1_a_2_Template, 7, 16, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class2_ng_template_1_li_1_a_3_Template, 7, 24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class2_ng_template_1_li_1_p_menubarSub_4_Template, 1, 4, "p-menubarSub", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](child_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, child_r1 === ctx_r3.activeItem, child_r1.visible === false))("ngStyle", child_r1.style)("tooltipOptions", child_r1.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !child_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.items);
  }
}
function _class2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class2_ng_template_1_li_0_Template, 1, 3, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_li_1_Template, 5, 11, "li", 3);
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r1.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !child_r1.separator);
  }
}
const _c4 = function (a0, a1) {
  return {
    "p-submenu-list": a0,
    "p-menubar-root-list": a1
  };
};
const _c5 = ["menubutton"];
const _c6 = ["rootmenu"];
function _class3_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_div_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function _class3_a_2_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "BarsIcon");
  }
}
function _class3_a_2_3_ng_template_0_Template(rf, ctx) {}
function _class3_a_2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class3_a_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class3_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class3_a_2_BarsIcon_2_Template, 1, 0, "BarsIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class3_a_2_3_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.menuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.menuIconTemplate);
  }
}
function _class3_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function _class3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_div_5_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.endTemplate);
  }
}
function _class3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c7 = function (a1) {
  return {
    "p-menubar p-component": true,
    "p-menubar-mobile-active": a1
  };
};
const _c8 = ["*"];
class MenubarService {
  constructor() {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoHide", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoHideDelay", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseLeaves", new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseLeft$", this.mouseLeaves.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(this.autoHideDelay)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(mouseLeft => this.autoHide && mouseLeft)));
  }
}
_class = MenubarService;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarService, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarService, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenubarService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class MenubarSub {
  get parentActive() {
    return this._parentActive;
  }
  set parentActive(value) {
    if (!this.root) {
      this._parentActive = value;
      if (!value) this.activeItem = null;
    }
  }
  constructor(document, platformId, el, renderer, cd, menubarService, menubar) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menubarService", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menubar", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "item", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "root", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoZIndex", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "baseZIndex", 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mobileActive", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoDisplay", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "leafClick", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_parentActive", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentClickListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuHoverActive", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItem", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseLeaveSubscriber", void 0);
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.menubarService = menubarService;
    this.menubar = menubar;
  }
  ngOnInit() {
    this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => {
      this.activeItem = null;
      this.cd.markForCheck();
      this.unbindDocumentClickListener();
    });
  }
  onItemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    if (item.items) {
      if (this.activeItem && item === this.activeItem) {
        this.activeItem = null;
        this.unbindDocumentClickListener();
      } else {
        this.activeItem = item;
        if (this.root) {
          this.bindDocumentClickListener();
        }
      }
    }
    if (!item.items) {
      this.onLeafClick();
    }
  }
  onItemMouseLeave() {
    this.menubarService.mouseLeaves.next(true);
  }
  onItemMouseEnter(event, item) {
    this.menubarService.mouseLeaves.next(false);
    if (item.disabled || this.mobileActive) {
      event.preventDefault();
      return;
    }
    if (this.root) {
      if (this.activeItem || this.autoDisplay) {
        this.activeItem = item;
        this.bindDocumentClickListener();
      }
    } else {
      this.activeItem = item;
      this.bindDocumentClickListener();
    }
  }
  onLeafClick() {
    this.activeItem = null;
    if (this.root) {
      this.unbindDocumentClickListener();
    }
    this.leafClick.emit();
  }
  bindDocumentClickListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      if (!this.documentClickListener) {
        this.documentClickListener = this.renderer.listen(this.document, 'click', event => {
          if (this.el && !this.el.nativeElement.contains(event.target)) {
            this.activeItem = null;
            this.cd.markForCheck();
            this.unbindDocumentClickListener();
          }
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  ngOnDestroy() {
    this.mouseLeaveSubscriber?.unsubscribe();
    this.unbindDocumentClickListener();
  }
}
_class2 = MenubarSub;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarSub, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenubarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Menubar));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarSub, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["p-menubarSub"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    item: "item",
    root: "root",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    mobileActive: "mobileActive",
    autoDisplay: "autoDisplay",
    parentActive: "parentActive"
  },
  outputs: {
    leafClick: "leafClick"
  },
  decls: 2,
  vars: 6,
  consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["role", "none", "pTooltip", "", 3, "ngClass", "ngStyle", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["role", "none", "pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["listItem", ""], ["role", "menuitem", "pRipple", "", 3, "target", "ngClass", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "mouseenter", "mouseleave", 4, "ngIf"], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "target", "ngClass", "click", "mouseenter", "mouseleave"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "mouseenter", "mouseleave"], ["htmlRouteLabel", ""], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick"]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class2_ng_template_1_Template, 2, 2, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c4, !ctx.root, ctx.root));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", ctx.root ? "menubar" : "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.root ? ctx.item : ctx.item == null ? null : ctx.item.items);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__.AngleRightIcon, _class2];
  },
  encapsulation: 2
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenubarSub, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-menubarSub',
      template: `
        <ul [ngClass]="{ 'p-submenu-list': !root, 'p-menubar-root-list': root }" [attr.role]="root ? 'menubar' : 'menu'">
            <ng-template ngFor let-child [ngForOf]="root ? item : item?.items">
                <li *ngIf="child.separator" class="p-menu-separator" [ngClass]="{ 'p-hidden': child.visible === false }" role="separator"></li>
                <li
                    *ngIf="!child.separator"
                    #listItem
                    [ngClass]="{ 'p-menuitem': true, 'p-menuitem-active': child === activeItem, 'p-hidden': child.visible === false }"
                    [ngStyle]="child.style"
                    [class]="child.styleClass"
                    role="none"
                    pTooltip
                    [tooltipOptions]="child.tooltipOptions"
                >
                    <a
                        *ngIf="!child.routerLink"
                        [attr.href]="child.url"
                        [attr.data-automationid]="child.automationId"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        role="menuitem"
                        (click)="onItemClick($event, child)"
                        (mouseenter)="onItemMouseEnter($event, child)"
                        (mouseleave)="onItemMouseLeave($event, child)"
                        [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': child.disabled }"
                        [attr.tabindex]="child.disabled ? null : '0'"
                        [attr.aria-haspopup]="item.items != null"
                        [attr.aria-expanded]="item === activeItem"
                        pRipple
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{ child.label }}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <ng-container *ngIf="child.items">
                            <ng-container *ngIf="!menubar.submenuIconTemplate">
                                <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="root" />
                                <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!root" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="menubar.submenuIconTemplate"></ng-template>
                        </ng-container>
                    </a>
                    <a
                        *ngIf="child.routerLink"
                        [routerLink]="child.routerLink"
                        [attr.data-automationid]="child.automationId"
                        [queryParams]="child.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions || { exact: false }"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        [attr.tabindex]="child.disabled ? null : '0'"
                        role="menuitem"
                        (click)="onItemClick($event, child)"
                        (mouseenter)="onItemMouseEnter($event, child)"
                        (mouseleave)="onItemMouseLeave($event, child)"
                        [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': child.disabled }"
                        [fragment]="child.fragment"
                        [queryParamsHandling]="child.queryParamsHandling"
                        [preserveFragment]="child.preserveFragment"
                        [skipLocationChange]="child.skipLocationChange"
                        [replaceUrl]="child.replaceUrl"
                        [state]="child.state"
                        pRipple
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{ child.label }}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <ng-container *ngIf="child.items">
                            <ng-container *ngIf="!menubar.submenuIconTemplate">
                                <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="root" />
                                <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!root" />
                            </ng-container>
                            <ng-template *ngTemplateOutlet="menubar.submenuIconTemplate"></ng-template>
                        </ng-container>
                    </a>
                    <p-menubarSub [parentActive]="child === activeItem" [item]="child" *ngIf="child.items" [mobileActive]="mobileActive" [autoDisplay]="autoDisplay" (leafClick)="onLeafClick()"></p-menubarSub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: MenubarService
    }, {
      type: Menubar
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mobileActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parentActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    leafClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
/**
 * Menubar is a horizontal menu component.
 * @group Components
 */
class Menubar {
  constructor(document, platformId, el, renderer, cd, config, menubarService) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "document", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "config", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menubarService", void 0);
    /**
     * An array of menuitems.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
    /**
     * Inline style of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Class of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoZIndex", true);
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "baseZIndex", 0);
    /**
     * Whether to show a root submenu on mouse over.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoDisplay", void 0);
    /**
     * Whether to hide a root submenu when mouse leaves.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoHide", void 0);
    /**
     * Delay to hide the root submenu in milliseconds when mouse leaves.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "autoHideDelay", 100);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menubutton", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rootmenu", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "startTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "endTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "submenuIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mobileActive", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "outsideClickListener", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mouseLeaveSubscriber", void 0);
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.menubarService = menubarService;
  }
  ngOnInit() {
    this.menubarService.autoHide = this.autoHide;
    this.menubarService.autoHideDelay = this.autoHideDelay;
    this.mouseLeaveSubscriber = this.menubarService.mouseLeft$.subscribe(() => this.unbindOutsideClickListener());
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'start':
          this.startTemplate = item.template;
          break;
        case 'end':
          this.endTemplate = item.template;
          break;
        case 'menuicon':
          this.menuIconTemplate = item.template;
          break;
        case 'submenuicon':
          this.submenuIconTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (this.mobileActive) {
      this.hide();
      primeng_utils__WEBPACK_IMPORTED_MODULE_12__.ZIndexUtils.clear(this.rootmenu?.el.nativeElement);
    } else {
      this.mobileActive = true;
      primeng_utils__WEBPACK_IMPORTED_MODULE_12__.ZIndexUtils.set('menu', this.rootmenu?.el.nativeElement, this.config.zIndex.menu);
    }
    this.bindOutsideClickListener();
    event.preventDefault();
  }
  bindOutsideClickListener() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, 'click', event => {
          if (this.mobileActive && this.rootmenu?.el.nativeElement !== event.target && !this.rootmenu?.el.nativeElement.contains(event.target) && this.menubutton?.nativeElement !== event.target && !this.menubutton?.nativeElement.contains(event.target)) {
            this.hide();
          }
        });
      }
    }
  }
  hide() {
    this.mobileActive = false;
    this.cd.markForCheck();
    primeng_utils__WEBPACK_IMPORTED_MODULE_12__.ZIndexUtils.clear(this.rootmenu?.el.nativeElement);
    this.unbindOutsideClickListener();
  }
  onLeafClick() {
    this.hide();
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  ngOnDestroy() {
    this.mouseLeaveSubscriber?.unsubscribe();
    this.unbindOutsideClickListener();
  }
}
_class3 = Menubar;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Menubar, "\u0275fac", function _class3_Factory(t) {
  return new (t || _class3)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MenubarService));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Menubar, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class3,
  selectors: [["p-menubar"]],
  contentQueries: function _class3_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function _class3_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menubutton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rootmenu = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    style: "style",
    styleClass: "styleClass",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    autoDisplay: "autoDisplay",
    autoHide: "autoHide",
    autoHideDelay: "autoHideDelay"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MenubarService])],
  ngContentSelectors: _c8,
  decls: 8,
  vars: 15,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-menubar-start", 4, "ngIf"], ["tabindex", "0", "class", "p-menubar-button", 3, "click", 4, "ngIf"], ["root", "root", 3, "item", "baseZIndex", "autoZIndex", "mobileActive", "autoDisplay", "leafClick"], ["rootmenu", ""], ["class", "p-menubar-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-menubar-start"], [4, "ngTemplateOutlet"], ["tabindex", "0", 1, "p-menubar-button", 3, "click"], ["menubutton", ""], [4, "ngIf"], [1, "p-menubar-end"]],
  template: function _class3_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class3_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class3_a_2_Template, 4, 2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-menubarSub", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("leafClick", function _class3_Template_p_menubarSub_leafClick_3_listener() {
        return ctx.onLeafClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class3_div_5_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, _class3_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c7, ctx.mobileActive))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.startTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model && ctx.model.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.model)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("mobileActive", ctx.mobileActive)("autoDisplay", ctx.autoDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endTemplate)("ngIfElse", _r4);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__.BarsIcon, MenubarSub];
  },
  styles: [".p-menubar{display:flex;align-items:center}.p-menubar ul{margin:0;padding:0;list-style:none}.p-menubar .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:2}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-menubar .p-submenu-list .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{margin-left:auto;align-self:center}.p-menubar-button{display:none;cursor:pointer;align-items:center;justify-content:center}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Menubar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-menubar',
      template: `
        <div [ngClass]="{ 'p-menubar p-component': true, 'p-menubar-mobile-active': mobileActive }" [class]="styleClass" [ngStyle]="style">
            <div class="p-menubar-start" *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <a #menubutton tabindex="0" *ngIf="model && model.length > 0" class="p-menubar-button" (click)="toggle($event)">
                <BarsIcon *ngIf="!menuIconTemplate" />
                <ng-template *ngTemplateOutlet="menuIconTemplate"></ng-template>
            </a>
            <p-menubarSub #rootmenu [item]="model" root="root" [baseZIndex]="baseZIndex" (leafClick)="onLeafClick()" [autoZIndex]="autoZIndex" [mobileActive]="mobileActive" [autoDisplay]="autoDisplay"></p-menubarSub>
            <div class="p-menubar-end" *ngIf="endTemplate; else legacy">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
            <ng-template #legacy>
                <div class="p-menubar-end">
                    <ng-content></ng-content>
                </div>
            </ng-template>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      providers: [MenubarService],
      styles: [".p-menubar{display:flex;align-items:center}.p-menubar ul{margin:0;padding:0;list-style:none}.p-menubar .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:2}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-menubar .p-submenu-list .p-menuitem-link .p-icon-wrapper{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{margin-left:auto;align-self:center}.p-menubar-button{display:none;cursor:pointer;align-items:center;justify-content:center}\n"]
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeNGConfig
    }, {
      type: MenubarService
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoHideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate]
    }],
    menubutton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['menubutton']
    }],
    rootmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['rootmenu']
    }]
  });
})();
class MenubarModule {}
_class4 = MenubarModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarModule, "\u0275fac", function _class4_Factory(t) {
  return new (t || _class4)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class4
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MenubarModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__.BarsIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__.AngleRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenubarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule, primeng_icons_bars__WEBPACK_IMPORTED_MODULE_14__.BarsIcon, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_10__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_11__.AngleRightIcon],
      exports: [Menubar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_13__.SharedModule],
      declarations: [Menubar, MenubarSub]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4745:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-steps.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Steps: () => (/* binding */ Steps),
/* harmony export */   StepsModule: () => (/* binding */ StepsModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 1251);

var _class, _class2;









/**
 * Steps components is an indicator for the steps in a wizard workflow.
 * @group Components
 */
function _class_li_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function _class_li_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = function () {
  return {
    exact: false
  };
};
function _class_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_2_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const item_r1 = ctx_r13.$implicit;
      const i_r2 = ctx_r13.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.itemClick($event, item_r1, i_r2));
    })("keydown.enter", function _class_li_2_a_2_Template_a_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const item_r1 = ctx_r16.$implicit;
      const i_r2 = ctx_r16.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.itemClick($event, item_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_2_a_2_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_li_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r1 = ctx_r17.$implicit;
    const i_r2 = ctx_r17.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0))("target", item_r1.target)("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", item_r1.id)("tabindex", item_r1.disabled || ctx_r4.readonly ? null : item_r1.tabindex ? item_r1.tabindex : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.escape !== false)("ngIfElse", _r8);
  }
}
function _class_li_2_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function _class_li_2_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_li_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_2_ng_template_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const item_r1 = ctx_r24.$implicit;
      const i_r2 = ctx_r24.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.itemClick($event, item_r1, i_r2));
    })("keydown.enter", function _class_li_2_ng_template_3_Template_a_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const item_r1 = ctx_r27.$implicit;
      const i_r2 = ctx_r27.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.itemClick($event, item_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_2_ng_template_3_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, _class_li_2_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r1 = ctx_r28.$implicit;
    const i_r2 = ctx_r28.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("id", item_r1.id)("tabindex", item_r1.disabled || i_r2 !== ctx_r6.activeIndex && ctx_r6.readonly ? null : item_r1.tabindex ? item_r1.tabindex : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.escape !== false)("ngIfElse", _r19);
  }
}
const _c1 = function (a0, a1) {
  return {
    "p-highlight p-steps-current": a0,
    "p-disabled": a1
  };
};
function _class_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_a_2_Template, 6, 17, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_2_ng_template_3_Template, 6, 7, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", item_r1.style)("tooltipOptions", item_r1.tooltipOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, ctx_r0.isActive(item_r1, i_r2), item_r1.disabled || ctx_r0.readonly && !ctx_r0.isActive(item_r1, i_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", i_r2 === ctx_r0.activeIndex)("aria-expanded", i_r2 === ctx_r0.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isClickableRouterLink(item_r1))("ngIfElse", _r5);
  }
}
const _c2 = function (a1) {
  return {
    "p-steps p-component": true,
    "p-readonly": a1
  };
};
class Steps {
  constructor(router, route, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    /**
     * Index of the active item.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeIndex", 0);
    /**
     * An array of menu items.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
    /**
     * Whether the items are clickable or not.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "readonly", true);
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
     * Callback to invoke when the new step is selected.
     * @param {number} number - current index.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeIndexChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subscription", void 0);
    this.router = router;
    this.route = route;
    this.cd = cd;
  }
  ngOnInit() {
    this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
  }
  itemClick(event, item, i) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }
    this.activeIndexChange.emit(i);
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item,
        index: i
      });
    }
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.readonly && !item.disabled;
  }
  isActive(item, index) {
    if (item.routerLink) {
      let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), false);
    }
    return index === this.activeIndex;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
_class = Steps;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Steps, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Steps, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-steps"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    activeIndex: "activeIndex",
    model: "model",
    readonly: "readonly",
    style: "style",
    styleClass: "styleClass"
  },
  outputs: {
    activeIndexChange: "activeIndexChange"
  },
  decls: 3,
  vars: 7,
  consts: [[3, "ngClass", "ngStyle"], ["role", "tablist"], ["class", "p-steps-item", "role", "tab", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngFor", "ngForOf"], ["role", "tab", "pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["menuitem", ""], ["role", "presentation", "class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["role", "presentation", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter"], [1, "p-steps-number"], ["class", "p-steps-title", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-steps-title"], [1, "p-steps-title", 3, "innerHTML"], ["role", "presentation", 1, "p-menuitem-link", 3, "target", "click", "keydown.enter"], ["htmlRouteLabel", ""]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_2_Template, 5, 12, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, ctx.readonly))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip],
  styles: [".p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Steps, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-steps',
      template: `
        <div [ngClass]="{ 'p-steps p-component': true, 'p-readonly': readonly }" [ngStyle]="style" [class]="styleClass">
            <ul role="tablist">
                <li
                    *ngFor="let item of model; let i = index"
                    class="p-steps-item"
                    #menuitem
                    [ngStyle]="item.style"
                    [class]="item.styleClass"
                    role="tab"
                    [attr.aria-selected]="i === activeIndex"
                    [attr.aria-expanded]="i === activeIndex"
                    pTooltip
                    [tooltipOptions]="item.tooltipOptions"
                    [ngClass]="{ 'p-highlight p-steps-current': isActive(item, i), 'p-disabled': item.disabled || (readonly && !isActive(item, i)) }"
                >
                    <a
                        *ngIf="isClickableRouterLink(item); else elseBlock"
                        [routerLink]="item.routerLink"
                        [queryParams]="item.queryParams"
                        role="presentation"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                        class="p-menuitem-link"
                        (click)="itemClick($event, item, i)"
                        (keydown.enter)="itemClick($event, item, i)"
                        [target]="item.target"
                        [attr.id]="item.id"
                        [attr.tabindex]="item.disabled || readonly ? null : item.tabindex ? item.tabindex : '0'"
                        [fragment]="item.fragment"
                        [queryParamsHandling]="item.queryParamsHandling"
                        [preserveFragment]="item.preserveFragment"
                        [skipLocationChange]="item.skipLocationChange"
                        [replaceUrl]="item.replaceUrl"
                        [state]="item.state"
                    >
                        <span class="p-steps-number">{{ i + 1 }}</span>
                        <span class="p-steps-title" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                        <ng-template #htmlLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>
                    </a>
                    <ng-template #elseBlock>
                        <a
                            [attr.href]="item.url"
                            class="p-menuitem-link"
                            role="presentation"
                            (click)="itemClick($event, item, i)"
                            (keydown.enter)="itemClick($event, item, i)"
                            [target]="item.target"
                            [attr.id]="item.id"
                            [attr.tabindex]="item.disabled || (i !== activeIndex && readonly) ? null : item.tabindex ? item.tabindex : '0'"
                        >
                            <span class="p-steps-number">{{ i + 1 }}</span>
                            <span class="p-steps-title" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                            <ng-template #htmlRouteLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>
                        </a>
                    </ng-template>
                </li>
            </ul>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    activeIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class StepsModule {}
_class2 = StepsModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StepsModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StepsModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(StepsModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StepsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule],
      exports: [Steps, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule],
      declarations: [Steps]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9048:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tabmenu.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMenu: () => (/* binding */ TabMenu),
/* harmony export */   TabMenuModule: () => (/* binding */ TabMenuModule)
/* harmony export */ });
/* harmony import */ var _home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 4946);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevronleft */ 3642);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 3713);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 1251);

var _class, _class2;















/**
 * TabMenu is a navigation component that displays items as tab headers.
 * @group Components
 */
const _c0 = ["content"];
const _c1 = ["navbar"];
const _c2 = ["inkbar"];
const _c3 = ["prevBtn"];
const _c4 = ["nextBtn"];
function _class_button_2_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronLeftIcon");
  }
}
function _class_button_2_3_ng_template_0_Template(rf, ctx) {}
function _class_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.navBackward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_2_ChevronLeftIcon_2_Template, 1, 0, "ChevronLeftIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_button_2_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.previousIconTemplate);
  }
}
function _class_li_7_a_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r12.icon)("ngStyle", item_r12.iconStyle);
  }
}
function _class_li_7_a_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.label);
  }
}
function _class_li_7_a_1_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 26);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r12.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_li_7_a_1_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r12.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.badge);
  }
}
function _class_li_7_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_7_a_1_ng_container_1_span_1_Template, 1, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_7_a_1_ng_container_1_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_7_a_1_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_li_7_a_1_ng_container_1_span_5_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.escape !== false)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.badge);
  }
}
function _class_li_7_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c5 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};
function _class_li_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.itemClick($event, item_r12));
    })("keydown.enter", function _class_li_7_a_1_Template_a_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.itemClick($event, item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_7_a_1_ng_container_1_Template, 6, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_7_a_1_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r12 = ctx_r33.$implicit;
    const i_r13 = ctx_r33.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", item_r12.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", item_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("tabindex", item_r12.disabled ? null : "0")("title", item_r12.title)("id", item_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c5, item_r12, i_r13));
  }
}
function _class_li_7_a_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 24);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r12.icon)("ngStyle", item_r12.iconStyle);
  }
}
function _class_li_7_a_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.label);
  }
}
function _class_li_7_a_2_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 26);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r12.label, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function _class_li_7_a_2_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r12.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.badge);
  }
}
function _class_li_7_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_7_a_2_ng_container_1_span_1_Template, 1, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_7_a_2_ng_container_1_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_li_7_a_2_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, _class_li_7_a_2_ng_container_1_span_5_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.escape !== false)("ngIfElse", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.badge);
  }
}
function _class_li_7_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c6 = function () {
  return {
    exact: false
  };
};
function _class_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_li_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.itemClick($event, item_r12));
    })("keydown.enter", function _class_li_7_a_2_Template_a_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r49.itemClick($event, item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_7_a_2_ng_container_1_Template, 6, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_7_a_2_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r12 = ctx_r51.$implicit;
    const i_r13 = ctx_r51.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r12.routerLink)("queryParams", item_r12.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r12.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c6))("target", item_r12.target)("fragment", item_r12.fragment)("queryParamsHandling", item_r12.queryParamsHandling)("preserveFragment", item_r12.preserveFragment)("skipLocationChange", item_r12.skipLocationChange)("replaceUrl", item_r12.replaceUrl)("state", item_r12.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", item_r12.disabled ? null : "0")("title", item_r12.title)("id", item_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](18, _c5, item_r12, i_r13));
  }
}
const _c7 = function (a1, a2, a3) {
  return {
    "p-tabmenuitem": true,
    "p-disabled": a1,
    "p-highlight": a2,
    "p-hidden": a3
  };
};
function _class_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, _class_li_7_a_1_Template, 3, 11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_li_7_a_2_Template, 3, 21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r12.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", item_r12.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](9, _c7, item_r12.disabled, ctx_r3.isActive(item_r12), item_r12.visible === false))("tooltipOptions", item_r12.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r3.isActive(item_r12))("aria-expanded", ctx_r3.isActive(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r12.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.routerLink);
  }
}
function _class_button_10_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function _class_button_10_3_ng_template_0_Template(rf, ctx) {}
function _class_button_10_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, _class_button_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function _class_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function _class_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r56.navForward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_10_ChevronRightIcon_2_Template, 1, 0, "ChevronRightIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, _class_button_10_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nextIconTemplate);
  }
}
const _c8 = function (a1) {
  return {
    "p-tabmenu p-component": true,
    "p-tabmenu-scrollable": a1
  };
};
class TabMenu {
  constructor(platformId, router, route, cd) {
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "platformId", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    /**
     * An array of menuitems.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "model", void 0);
    /**
     * Defines the default active menuitem
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItem", void 0);
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollable", void 0);
    /**
     * Defines if popup mode enabled.
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "popup", void 0);
    /**
     * Inline style of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "style", void 0);
    /**
     * Class of the element.
     * @group Props
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "styleClass", void 0);
    /**
     * Event fired when a tab is selected.
     * @param {MenuItem} item - Menu item.
     * @group Emits
     */
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "activeItemChange", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "content", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navbar", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inkbar", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prevBtn", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextBtn", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templates", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "itemTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "previousIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nextIconTemplate", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabChanged", void 0);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "backwardIsDisabled", true);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "forwardIsDisabled", false);
    (0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "timerIdForInitialAutoScroll", null);
    this.platformId = platformId;
    this.router = router;
    this.route = route;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates?.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'nexticon':
          this.nextIconTemplate = item.template;
          break;
        case 'previousicon':
          this.previousIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      this.updateInkBar();
      this.initAutoScrollForActiveItem();
      this.initButtonState();
    }
  }
  ngAfterViewChecked() {
    if (this.tabChanged) {
      this.updateInkBar();
      this.tabChanged = false;
    }
  }
  ngOnDestroy() {
    this.clearAutoScrollHandler();
  }
  isActive(item) {
    if (item.routerLink) {
      const routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), item.routerLinkActiveOptions?.exact ?? item.routerLinkActiveOptions ?? false);
    }
    return item === this.activeItem;
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    this.activeItem = item;
    this.activeItemChange.emit(item);
    this.tabChanged = true;
    this.cd.markForCheck();
  }
  updateInkBar() {
    const tabHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.navbar?.nativeElement, 'li.p-highlight');
    if (tabHeader) {
      this.inkbar.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(tabHeader) + 'px';
      this.inkbar.nativeElement.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(tabHeader).left - primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.navbar?.nativeElement).left + 'px';
    }
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(el) : acc, 0);
  }
  updateButtonState() {
    const content = this.content?.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
  }
  updateScrollBar(index) {
    const tabHeader = this.navbar?.nativeElement.children[index];
    if (!tabHeader) {
      return;
    }
    tabHeader.scrollIntoView({
      block: 'nearest',
      inline: 'center'
    });
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  navBackward() {
    const content = this.content?.nativeElement;
    const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content?.nativeElement;
    const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  initAutoScrollForActiveItem() {
    if (!this.scrollable) {
      return;
    }
    this.clearAutoScrollHandler();
    // We have to wait for the rendering and then can scroll to element.
    this.timerIdForInitialAutoScroll = setTimeout(() => {
      const activeItem = this.model.findIndex(menuItem => this.isActive(menuItem));
      if (activeItem !== -1) {
        this.updateScrollBar(activeItem);
      }
    });
  }
  clearAutoScrollHandler() {
    if (this.timerIdForInitialAutoScroll) {
      clearTimeout(this.timerIdForInitialAutoScroll);
      this.timerIdForInitialAutoScroll = null;
    }
  }
  initButtonState() {
    if (this.scrollable) {
      // We have to wait for the rendering and then retrieve the actual size element from the DOM.
      // in future `Promise.resolve` can be changed to `queueMicrotask` (if ie11 support will be dropped)
      Promise.resolve().then(() => {
        this.updateButtonState();
        this.cd.markForCheck();
      });
    }
  }
}
_class = TabMenu;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabMenu, "\u0275fac", function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabMenu, "\u0275cmp", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["p-tabMenu"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inkbar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    activeItem: "activeItem",
    scrollable: "scrollable",
    popup: "popup",
    style: "style",
    styleClass: "styleClass"
  },
  outputs: {
    activeItemChange: "activeItemChange"
  },
  decls: 11,
  vars: 9,
  consts: [[3, "ngClass", "ngStyle"], [1, "p-tabmenu-nav-container"], ["class", "p-tabmenu-nav-prev p-tabmenu-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabmenu-nav-content", 3, "scroll"], ["content", ""], ["role", "tablist", 1, "p-tabmenu-nav", "p-reset"], ["navbar", ""], ["role", "tab", "pTooltip", "", 3, "ngStyle", "class", "ngClass", "tooltipOptions", 4, "ngFor", "ngForOf"], [1, "p-tabmenu-ink-bar"], ["inkbar", ""], ["class", "p-tabmenu-nav-next p-tabmenu-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-tabmenu-nav-prev", "p-tabmenu-nav-btn", "p-link", 3, "click"], ["prevBtn", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "tab", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", "role", "presentation", "pRipple", "", 3, "target", "click", "keydown.enter", 4, "ngIf"], ["role", "presentation", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter", 4, "ngIf"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "target", "click", "keydown.enter"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter"], ["htmlRouteLabel", ""], ["type", "button", "pRipple", "", 1, "p-tabmenu-nav-next", "p-tabmenu-nav-btn", "p-link", 3, "click"], ["nextBtn", ""]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, _class_button_2_Template, 4, 2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function _class_Template_div_scroll_3_listener($event) {
        return ctx.onScroll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, _class_li_7_Template, 3, 13, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "li", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, _class_button_10_Template, 4, 2, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c8, ctx.scrollable))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.model);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.forwardIsDisabled);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon];
  },
  styles: [".p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-tabMenu',
      template: `
        <div [ngClass]="{ 'p-tabmenu p-component': true, 'p-tabmenu-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-tabmenu-nav-container">
                <button *ngIf="scrollable && !backwardIsDisabled" #prevBtn class="p-tabmenu-nav-prev p-tabmenu-nav-btn p-link" (click)="navBackward()" type="button" pRipple>
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabmenu-nav-content" (scroll)="onScroll($event)">
                    <ul #navbar class="p-tabmenu-nav p-reset" role="tablist">
                        <li
                            *ngFor="let item of model; let i = index"
                            role="tab"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            [attr.aria-selected]="isActive(item)"
                            [attr.aria-expanded]="isActive(item)"
                            [ngClass]="{ 'p-tabmenuitem': true, 'p-disabled': item.disabled, 'p-highlight': isActive(item), 'p-hidden': item.visible === false }"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                        >
                            <a
                                *ngIf="!item.routerLink"
                                [attr.href]="item.url"
                                class="p-menuitem-link"
                                role="presentation"
                                (click)="itemClick($event, item)"
                                (keydown.enter)="itemClick($event, item)"
                                [attr.tabindex]="item.disabled ? null : '0'"
                                [target]="item.target"
                                [attr.title]="item.title"
                                [attr.id]="item.id"
                                pRipple
                            >
                                <ng-container *ngIf="!itemTemplate">
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                                </ng-container>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                            </a>
                            <a
                                *ngIf="item.routerLink"
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                role="presentation"
                                class="p-menuitem-link"
                                (click)="itemClick($event, item)"
                                (keydown.enter)="itemClick($event, item)"
                                [attr.tabindex]="item.disabled ? null : '0'"
                                [target]="item.target"
                                [attr.title]="item.title"
                                [attr.id]="item.id"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                                pRipple
                            >
                                <ng-container *ngIf="!itemTemplate">
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                                </ng-container>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                            </a>
                        </li>
                        <li #inkbar class="p-tabmenu-ink-bar"></li>
                    </ul>
                </div>
                <button *ngIf="scrollable && !forwardIsDisabled" #nextBtn class="p-tabmenu-nav-next p-tabmenu-nav-btn p-link" (click)="navForward()" type="button" pRipple>
                    <ChevronRightIcon *ngIf="!previousIconTemplate" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    popup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    activeItemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['content']
    }],
    navbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['navbar']
    }],
    inkbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inkbar']
    }],
    prevBtn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['prevBtn']
    }],
    nextBtn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['nextBtn']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate]
    }]
  });
})();
class TabMenuModule {}
_class2 = TabMenuModule;
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabMenuModule, "\u0275fac", function _class2_Factory(t) {
  return new (t || _class2)();
});
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabMenuModule, "\u0275mod", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class2
}));
(0,_home_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TabMenuModule, "\u0275inj", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule]
}));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon],
      exports: [TabMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule],
      declarations: [TabMenu]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_menus_menus_module_ts.js.map