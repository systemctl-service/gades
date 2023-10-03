"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5289],{5289:(m,p,l)=>{l.r(p),l.d(p,{ChartsDemoModule:()=>C});var g=l(6814),d=l(3979),r=l(4769),c=l(3859),u=l(9252);let y=(()=>{var t;class a{constructor(o){this.layoutService=o,this.subscription=this.layoutService.configUpdate$.subscribe(e=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const o=getComputedStyle(document.documentElement),e=o.getPropertyValue("--text-color"),i=o.getPropertyValue("--text-color-secondary"),s=o.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:o.getPropertyValue("--primary-500"),borderColor:o.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:o.getPropertyValue("--primary-200"),borderColor:o.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:i,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:i},grid:{color:s,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[o.getPropertyValue("--indigo-500"),o.getPropertyValue("--purple-500"),o.getPropertyValue("--teal-500")],hoverBackgroundColor:[o.getPropertyValue("--indigo-400"),o.getPropertyValue("--purple-400"),o.getPropertyValue("--teal-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:e}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:o.getPropertyValue("--primary-500"),borderColor:o.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:o.getPropertyValue("--primary-200"),borderColor:o.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:i},grid:{color:s,drawBorder:!1}},y:{ticks:{color:i},grid:{color:s,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[o.getPropertyValue("--indigo-500"),o.getPropertyValue("--purple-500"),o.getPropertyValue("--teal-500"),o.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:e}}},scales:{r:{grid:{color:s}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:o.getPropertyValue("--indigo-400"),pointBackgroundColor:o.getPropertyValue("--indigo-400"),pointBorderColor:o.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:o.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:o.getPropertyValue("--purple-400"),pointBackgroundColor:o.getPropertyValue("--purple-400"),pointBorderColor:o.getPropertyValue("--purple-400"),pointHoverBackgroundColor:e,pointHoverBorderColor:o.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:e}}},scales:{r:{grid:{color:i}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return(t=a).\u0275fac=function(o){return new(o||t)(r.Y36(c.P))},t.\u0275cmp=r.Xpm({type:t,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(o,e){1&o&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),r._uU(4,"Linear Chart"),r.qZA(),r._UZ(5,"p-chart",3),r.qZA(),r.TgZ(6,"div",4)(7,"h5",5),r._uU(8,"Pie Chart"),r.qZA(),r._UZ(9,"p-chart",6),r.qZA(),r.TgZ(10,"div",4)(11,"h5",5),r._uU(12,"Polar Area Chart"),r.qZA(),r._UZ(13,"p-chart",7),r.qZA()(),r.TgZ(14,"div",1)(15,"div",2)(16,"h5"),r._uU(17,"Bar Chart"),r.qZA(),r._UZ(18,"p-chart",8),r.qZA(),r.TgZ(19,"div",4)(20,"h5",5),r._uU(21,"Doughnut Chart"),r.qZA(),r._UZ(22,"p-chart",9),r.qZA(),r.TgZ(23,"div",4)(24,"h5",5),r._uU(25,"Radar Chart"),r.qZA(),r._UZ(26,"p-chart",10),r.qZA()()()),2&o&&(r.xp6(5),r.Q6J("data",e.lineData)("options",e.lineOptions),r.xp6(4),r.Q6J("data",e.pieData)("options",e.pieOptions),r.xp6(4),r.Q6J("data",e.polarData)("options",e.polarOptions),r.xp6(5),r.Q6J("data",e.barData)("options",e.barOptions),r.xp6(4),r.Q6J("data",e.pieData)("options",e.pieOptions),r.xp6(4),r.Q6J("data",e.radarData)("options",e.radarOptions))},dependencies:[u.C],encapsulation:2}),a})(),h=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[d.Bz.forChild([{path:"",component:y}]),d.Bz]}),a})(),C=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[g.ez,h,u.S]}),a})()}}]);