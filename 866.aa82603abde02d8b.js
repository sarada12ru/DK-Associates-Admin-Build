"use strict";(self.webpackChunkDK_Associates_Admin=self.webpackChunkDK_Associates_Admin||[]).push([[866],{9866:(x,p,o)=>{o.r(p),o.d(p,{SearchedReportsModule:()=>R});var i=o(9808),n=o(4301),d=o(7579),e=o(1223),c=o(9306),h=o(344),g=o(2509),u=o(9710),m=o(8953),l=o(5415);function Z(r,s){if(1&r&&(e.TgZ(0,"h3",14),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.message)}}function v(r,s){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA()()),2&r){const t=s.$implicit;e.xp6(2),e.hij(" ",t.id," "),e.xp6(2),e.hij(" ",t.customerName," "),e.xp6(2),e.hij(" ",t.vehicleNo," "),e.xp6(2),e.hij(" ",t.financeName," "),e.xp6(2),e.hij(" ",t.customerMobile," "),e.xp6(2),e.hij(" ",t.searchDate," "),e.xp6(2),e.hij(" ",t.app_user_name," "),e.xp6(2),e.hij(" ",t.messages," ")}}const f=[{path:"",component:(()=>{class r{constructor(t,a,U){this.apiService=t,this.appService=a,this.router=U,this.reports=[],this.dtOptions={},this.dtTrigger=new d.x}ngOnInit(){this.getReports()}getReports(){this.appService.loader=!0,this.apiService.getSearchedVehicles({isSearchedVehicle:!0}).subscribe(t=>{this.appService.loader=!1,t&&t.success?(this.reports=t.reports,this.dtTrigger.next(this.reports)):t&&!t.success&&(this.reports=[],this.message=t.message,this.dtTrigger.next(this.reports))},t=>{this.message="Failed to get Reports! "},()=>{this.appService.loader=!1})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c.s),e.Y36(h.z),e.Y36(n.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-searched-reports"]],decls:40,vars:4,consts:[[1,"content-wrapper"],[1,"content-header"],[1,"breadcrumb"],[1,"fa","fa-user"],[1,"content"],[1,"row"],[1,"col-xs-12"],[1,"box"],[1,"box-body"],[2,"height","85vh","overflow","auto"],[1,"form-group"],["class","err-message",4,"ngIf"],["datatable","",1,"table","table-bordered","table-striped","text-center",3,"dtTrigger","dtOptions"],[4,"ngFor","ngForOf"],[1,"err-message"]],template:function(t,a){1&t&&(e._UZ(0,"app-loader")(1,"app-header")(2,"app-left-nav"),e.TgZ(3,"div",0)(4,"section",1)(5,"h1"),e._uU(6," Reports "),e.qZA(),e.TgZ(7,"ol",2)(8,"li"),e._UZ(9,"i",3),e._uU(10," Reports"),e.qZA()()(),e.TgZ(11,"section",4)(12,"div",5)(13,"div",6)(14,"div",7)(15,"div",8)(16,"div",9)(17,"div",10),e.YNc(18,Z,2,1,"h3",11),e.qZA(),e.TgZ(19,"table",12)(20,"thead")(21,"tr")(22,"th"),e._uU(23,"ID"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Customer Name"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"vehicle Number"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Finance Name"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Customer Mobile"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Search Date"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"Searched By"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"Status"),e.qZA()()(),e.TgZ(38,"tbody"),e.YNc(39,v,17,8,"tr",13),e.qZA()()()()()()()()()),2&t&&(e.xp6(18),e.Q6J("ngIf",a.message),e.xp6(1),e.Q6J("dtTrigger",a.dtTrigger)("dtOptions",a.dtOptions),e.xp6(20),e.Q6J("ngForOf",a.reports))},directives:[g.R,u.G,m.J,i.O5,l.G,i.sg],styles:[""]}),r})()}];let T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[n.Bz.forChild(f)],n.Bz]}),r})();var S=o(2382),A=o(5349);let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.ez,T,A.m,S.u5]]}),r})()}}]);