"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([["src_app_layout_ordenes-trabajo-historico_ordenes-trabajo-historico_component_ts"],{

/***/ 74907:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/ordenes-trabajo-historico/ordenes-trabajo-historico.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesTrabajoHistoricoComponent: () => (/* binding */ OrdenesTrabajoHistoricoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/prime-ng/prime-ng.module */ 9692);
/* harmony import */ var _services_tarea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tarea.service */ 62814);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/custom-message.service */ 58062);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/usuario.service */ 41063);
/* harmony import */ var src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/enum.service */ 58241);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 39177);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 94553);
var _class;


















const _c0 = ["dt"];
function OrdenesTrabajoHistoricoComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ordenes de Trabajo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdenesTrabajoHistoricoComponent_ng_template_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.clear(_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function OrdenesTrabajoHistoricoComponent_ng_template_8_Template_p_dropdown_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r1.filter($event.value, "estado", "contains"));
    })("ngModelChange", function OrdenesTrabajoHistoricoComponent_ng_template_8_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.valorNulleable = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 18)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OrdenesTrabajoHistoricoComponent_ng_template_8_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r1.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r2.selectEstadoOrden)("ngModel", ctx_r2.valorNulleable)("showClear", true);
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pSortableColumn", col_r12.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r12.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("field", col_r12.field);
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdenesTrabajoHistoricoComponent_ng_template_9_ng_container_1_Template, 4, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.cols);
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_10_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const ordenTrabajo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", col_r15.field, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ordenTrabajo_r13[col_r15.field] ? ordenTrabajo_r13[col_r15.field] : "N/A", " ");
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdenesTrabajoHistoricoComponent_ng_template_10_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ordenTrabajo_r13 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.navegarAMostrar(ordenTrabajo_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrdenesTrabajoHistoricoComponent_ng_template_10_td_1_Template, 4, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.cols);
  }
}
function OrdenesTrabajoHistoricoComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "*No hay Ordenes de trabajo registradas*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return [10, 20, 30];
};
const _c2 = function () {
  return ["descripcion", "nombre"];
};
class OrdenesTrabajoHistoricoComponent {
  constructor() {
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_URL;
    this.totalRecords = 0;
    this.mostrarDel = 1;
    this.mostrarAl = 10;
    this.tareaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_tarea_service__WEBPACK_IMPORTED_MODULE_1__.TareaService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(src_app_services_auth_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService);
    this.messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(src_app_services_custom_message_service__WEBPACK_IMPORTED_MODULE_2__.CustomMessageService);
    this.enumService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(src_app_services_enum_service__WEBPACK_IMPORTED_MODULE_5__.EnumService);
    this.subs = [];
    this.cols = [];
    this.selectEstadoOrden = [];
    this.ordenesTrabajo = [];
    this.loading = true;
    this.usuarios = [];
  }
  ngOnInit() {
    this.cols = [{
      field: 'nombre',
      header: 'Nombre'
    }, {
      field: 'descripcion',
      header: 'Descripcion'
    }, {
      field: 'estado',
      header: 'Estado'
    }
    // { field: 'usuario', header: 'Asignado' },
    ];

    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    // this.cargarUsuarios();
    this.cargarEstadosOrden();
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal($event.target.value, 'contains');
  }
  cargarEstadosOrden() {
    this.subs.push(this.enumService.getEnum('estado_orden_trabajo').subscribe({
      next: res => this.selectEstadoOrden = res,
      error: error => this.messageService.error(error.error.detail)
    }));
  }
  // buscarAsignado(valueToSearch: string) {
  //   this.dt!.filterGlobal(
  //     ($event.target as HTMLInputElement).value,
  //     'contains'
  //   );
  // }
  clear(table) {
    table.clear();
    document.getElementById('buscador').value = '';
    this.valorNulleable = null;
    // (document.getElementById('buscadorAsignado') as any).value = '';
  }
  // cargarUsuarios() {
  //   this.usuarioService.getUsuarios().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.usuarios = res;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       this.messageService.error(
  //         'Hubo un error al cargar el select de usuarios'
  //       );
  //     },
  //   });
  // }
  loadCustomers(event) {
    console.log(event);
    this.loading = true;
    const first = event.first ? event.first : 0;
    const rows = event.rows ? event.rows : 1;
    const page = first / rows + 1;
    var endPoint = this.url + `/ordenes_trabajo_paginate?page=${page}&itemsPerPage=${rows}`;
    if (event.globalFilter) {
      endPoint = endPoint + `&nombre=${event.globalFilter}&descripcion=${event.globalFilter}`;
    }
    // if (
    //   event.filters['usuario'] &&
    //   event.filters['usuario'] != undefined &&
    //   event.filters['usuario'].value != null
    // ) {
    //   endPoint = endPoint + `&usuario=${event.filters['usuario'].value}`;
    // } else if (
    //   event.filters['usuario'] &&
    //   event.filters['usuario'][0] != undefined &&
    //   event.filters['usuario'][0].value != null
    // ) {
    //   endPoint = endPoint + `&usuario=${event.filters['usuario'][0].value}`;
    // }
    endPoint = endPoint + `&usuario=${this.usuario.nombre}`;
    if (event.filters['estado'] && event.filters['estado'] != undefined && event.filters['estado'].value != null) {
      endPoint = endPoint + `&estado=${event.filters['estado'].value}`;
    } else if (event.filters['estado'] && event.filters['estado'][0] != undefined && event.filters['estado'][0].value != null) {
      endPoint = endPoint + `&estado=${event.filters['estado'][0].value.value}`;
    }
    if (event.sortField) {
      endPoint = endPoint + `&ordenCampo=${event.sortField}`;
      if (event.sortOrder == 1) {
        endPoint = endPoint + '&ordenTipo=ASC';
      }
      if (event.sortOrder == -1) {
        endPoint = endPoint + '&ordenTipo=DESC';
      }
    }
    this.cargarOrdenesTrabajosP(endPoint, first, rows);
  }
  cargarOrdenesTrabajosP(url, first, rows) {
    this.subs.push(this.tareaService.getOrdenesTrabajosPaginadas(url).subscribe(response => {
      console.log(response);
      this.ordenesTrabajo = response.data;
      this.loading = false;
      // this.totalRecords = response.total;
      this.totalRecords = response.totalItems;
      this.loading = false;
      this.mostrarDel = first + 1;
      this.mostrarAl = this.mostrarDel + rows - 1;
      if (this.mostrarAl > this.totalRecords) {
        this.mostrarAl = this.totalRecords;
      }
    }, error => {
      console.error(error);
      this.loading = false;
      this.messageService.error(error.error.detail);
    }));
  }
  ngOnDestroy() {
    // cerramos todas las subscripciones abiertas
    this.subs.forEach(subscripcion => {
      subscripcion.unsubscribe();
    });
  }
  navegarAMostrar(id) {
    console.log(id);
    sessionStorage.setItem('lastUrlOrden', '/ordenes-trabajos-historico');
    this.router.navigateByUrl(`ordenes-trabajo/mostrar/${id}`);
  }
}
_class = OrdenesTrabajoHistoricoComponent;
_class.ɵfac = function OrdenesTrabajoHistoricoComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-ordenes-trabajo-historico"]],
  viewQuery: function OrdenesTrabajoHistoricoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dt = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 12,
  vars: 16,
  consts: [[1, "grid"], [1, "col-12"], [1, "card", "px-6", "py-6"], ["styleClass", "toolbar-sin-bordes"], ["pTemplate", "left"], [1, "mt-1"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "value", "columns", "lazy", "loading", "paginator", "rows", "rowsPerPageOptions", "totalRecords", "globalFilterFields", "showCurrentPageReport", "currentPageReportTemplate", "rowHover", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "my-2"], [1, "mb-0"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-between", "md:align-items-center"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-end", "md:align-items-center"], ["pButton", "", "label", "Filtros", "icon", "pi pi-filter-slash", 1, "mr-2", "p-button-outlined", "my-2", "md:my-0", 3, "click"], ["id", "selctEstado", "placeholder", "Estado", 1, "mr-2", "max-w-full", 3, "options", "ngModel", "showClear", "onChange", "ngModelChange"], [1, "block", "mt-2", "md:mt-0", "p-input-icon-left"], [1, "p-input-icon-left", "ml-auto"], [1, "pi", "pi-search"], ["id", "buscador", "pInputText", "", "input", "", "type", "text", "placeholder", "Buscar", 1, "max-w-max", 3, "input"], [4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [3, "click"], ["style", "min-width: 10rem", 4, "ngFor", "ngForOf"], [2, "min-width", "10rem"], [1, "p-column-title"]],
  template: function OrdenesTrabajoHistoricoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrdenesTrabajoHistoricoComponent_ng_template_4_Template, 3, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "hr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p-table", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onLazyLoad", function OrdenesTrabajoHistoricoComponent_Template_p_table_onLazyLoad_6_listener($event) {
        return ctx.loadCustomers($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OrdenesTrabajoHistoricoComponent_ng_template_8_Template, 8, 3, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, OrdenesTrabajoHistoricoComponent_ng_template_9_Template, 2, 1, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OrdenesTrabajoHistoricoComponent_ng_template_10_Template, 2, 1, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, OrdenesTrabajoHistoricoComponent_ng_template_11_Template, 3, 0, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate3"]("currentPageReportTemplate", "Del ", ctx.mostrarDel, " al ", ctx.mostrarAl, " para ", ctx.totalRecords, " Registros");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.ordenesTrabajo)("columns", ctx.cols)("lazy", true)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c1))("totalRecords", ctx.totalRecords)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c2))("showCurrentPageReport", true)("rowHover", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNgModule, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_layout_ordenes-trabajo-historico_ordenes-trabajo-historico_component_ts.94cbeaa649a7b2dd.js.map