"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[716],{7716:(U,c,i)=>{i.r(c),i.d(c,{DashboardModule:()=>Q});var a=i(6814),u=i(95),d=i(2253),e=i(4946),g=i(1063),p=i(8062),v=i(2814),f=i(8608);function x(t,o){1&t&&(e.TgZ(0,"div",2),e._UZ(1,"i",3),e.qZA())}const m=function(){return["/ordenes-trabajo"]},s=function(){return{width:"2.5rem",height:"2.5rem"}},b=function(){return["confirmar-orden-compra"]},h=function(){return["/gastos"]},Z=function(){return["/pdv"]},y=function(){return["/almacen"]},D=function(){return["/factura-reader"]},S=function(){return["/barcode-scanner"]},T=function(){return["/ordenes-trabajos-historico"]};function M(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8),e._UZ(6,"i",9),e.qZA()(),e.TgZ(7,"span",10),e._uU(8," Tareas "),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",11)(11,"div",7)(12,"div",12),e._UZ(13,"i",13),e.qZA()(),e.TgZ(14,"span",10),e._uU(15," Recepcion "),e.qZA()()(),e.TgZ(16,"div",5)(17,"div",11)(18,"div",7)(19,"div",14),e._UZ(20,"i",15),e.qZA()(),e.TgZ(21,"span",10),e._uU(22," Gastos "),e.qZA()()(),e.TgZ(23,"div",5)(24,"div",11)(25,"div",7)(26,"div",16),e._UZ(27,"i",17),e.qZA()(),e.TgZ(28,"span",10),e._uU(29," PDV "),e.qZA()()(),e.TgZ(30,"div",5)(31,"div",11)(32,"div",7)(33,"div",18),e._UZ(34,"i",19),e.qZA()(),e.TgZ(35,"span",10),e._uU(36," Almacen "),e.qZA()()(),e.TgZ(37,"div",5)(38,"div",11)(39,"div",7)(40,"div",20),e._UZ(41,"i",21),e.qZA()(),e.TgZ(42,"span",10),e._uU(43," Factura Reader "),e.qZA()()(),e.TgZ(44,"div",5)(45,"div",11)(46,"div",7)(47,"div",22),e._UZ(48,"i",23),e.qZA()(),e.TgZ(49,"span",10),e._uU(50," Barcode Scanner "),e.qZA()()(),e.TgZ(51,"div",5)(52,"div",11)(53,"div",7)(54,"div",12),e._UZ(55,"i",24),e.qZA()(),e.TgZ(56,"span",10),e._uU(57," Ordenes de Trabajo "),e.qZA()()()(),e.BQk()),2&t){const r=e.oxw();e.xp6(3),e.Q6J("routerLink",e.DdM(18,m))("value",null==r.ordenesTrabajo?null:r.ordenesTrabajo.length.toFixed(0))("badgeDisabled",!r.ordenesTrabajo||0===r.ordenesTrabajo.length),e.xp6(2),e.Q6J("ngStyle",e.DdM(19,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(20,b)),e.xp6(2),e.Q6J("ngStyle",e.DdM(21,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(22,h)),e.xp6(2),e.Q6J("ngStyle",e.DdM(23,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(24,Z)),e.xp6(2),e.Q6J("ngStyle",e.DdM(25,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(26,y)),e.xp6(2),e.Q6J("ngStyle",e.DdM(27,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(28,D)),e.xp6(2),e.Q6J("ngStyle",e.DdM(29,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(30,S)),e.xp6(2),e.Q6J("ngStyle",e.DdM(31,s)),e.xp6(5),e.Q6J("routerLink",e.DdM(32,T)),e.xp6(2),e.Q6J("ngStyle",e.DdM(33,s))}}let j=(()=>{var t;class o{constructor(){this.usuarioService=(0,e.f3M)(g.i),this.tareaService=(0,e.f3M)(v.p),this.messageService=(0,e.f3M)(p.S),this.otrasSubscripciones=[],this.ordenesTrabajo=null,this.loading=!0}ngOnInit(){this.loading=!0,this.usuarioID=JSON.parse(localStorage.getItem("usuario")).id,this.otrasSubscripciones.push(this.tareaService.getOrdenesTrabajosDe(this.usuarioID).subscribe(n=>{console.log(n),this.loading=!1,this.ordenesTrabajo=n},n=>{console.log(n),this.loading=!1,n.error?.detail?this.messageService.error(n.error.detail):"JWT Token not found"==n.error.message?this.messageService.alert("Sesion Expirada"):this.messageService.error("Ocurrio un error desconocido en local")}))}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.otrasSubscripciones.forEach(n=>{n.unsubscribe()})}}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:2,vars:2,consts:[["class","flex align-items-center justify-content-center","style","height: 80vh",4,"ngIf"],[4,"ngIf"],[1,"flex","align-items-center","justify-content-center",2,"height","80vh"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],[1,"grid"],[1,"col-6","lg:col-3","xl:col-3"],["pBadge","","severity","danger","size","large",1,"card","mb-0",3,"routerLink","value","badgeDisabled"],[1,"flex","justify-content-center","align-items-center"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-list","text-orange-500","text-xl"],[1,"block","text-500","text-center","font-medium","mt-2"],[1,"card","mb-0",3,"routerLink"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-truck","text-blue-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-green-100","border-round",3,"ngStyle"],[1,"pi","pi-money-bill","text-green-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-indigo-100","border-round",3,"ngStyle"],[1,"pi","pi-desktop","text-indigo-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-yellow-100","border-round",3,"ngStyle"],[1,"pi","pi-desktop","text-yellow-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-red-100","border-round",3,"ngStyle"],[1,"pi","pi-file","text-red-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-gray-100","border-round",3,"ngStyle"],[1,"pi","pi-bars","text-gray-500","text-xl"],[1,"pi","pi-list","text-blue-500","text-xl"]],template:function(n,l){1&n&&(e.YNc(0,x,2,0,"div",0),e.YNc(1,M,58,34,"ng-container",1)),2&n&&(e.Q6J("ngIf",l.loading),e.xp6(1),e.Q6J("ngIf",!l.loading))},dependencies:[a.O5,a.PC,d.rH,f.lM],encapsulation:2}),o})(),J=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:j}]),d.Bz]}),o})();var A=i(4430);let Q=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,u.u5,A.g,J]}),o})()}}]);