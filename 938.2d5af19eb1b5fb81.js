"use strict";(self.webpackChunkDK_Associates_Admin=self.webpackChunkDK_Associates_Admin||[]).push([[938],{1938:(T,c,i)=>{i.r(c),i.d(c,{VehiclesModule:()=>x});var r=i(9808),a=i(4301),e=i(1223),g=i(9306),l=i(344),d=i(2509),u=i(9710),h=i(8953);function p(n,o){if(1&n&&(e.TgZ(0,"h3",21),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.errMessage)}}function m(n,o){if(1&n&&(e.TgZ(0,"h3",22),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.successMessage)}}function f(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA()()),2&n){const t=o.$implicit,s=o.index;e.xp6(2),e.Oqu(s+1),e.xp6(2),e.Oqu(t.FIN),e.xp6(2),e.Oqu(t["Loan Number"]),e.xp6(2),e.Oqu(t.RegNumber),e.xp6(2),e.Oqu(t.PRD),e.xp6(2),e.Oqu(t["Asset Desc."]),e.xp6(2),e.Oqu(t["Customer Name"]),e.xp6(2),e.Oqu(t.ENG),e.xp6(2),e.Oqu(t.CH),e.xp6(2),e.Oqu(t["CONT. PERSON"]),e.xp6(2),e.Oqu(t["MOB NO."]),e.xp6(2),e.Oqu(t["Residence Address"])}}const _=function(n){return{active:n}};function Z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",23),e.NdJ("click",function(){const M=e.CHM(t).index;return e.oxw().getMoreOrLess(M+1)}),e._uU(1),e.qZA()}if(2&n){const t=o.index,s=e.oxw();e.Q6J("ngClass",e.VKq(2,_,s.pageNumber-1==t)),e.xp6(1),e.hij(" ",t+1," ")}}const O=function(){return[]},v=[{path:"",component:(()=>{class n{constructor(t,s){this.apiService=t,this.appService=s,this.clauses={startsFrom:0,endsAt:100,regdNumber:""},this.pageNumber=1}ngOnInit(){this.getVehicleList(1)}getVehicleList(t){this.appService.loader=!0,this.apiService.getAllVehicles(this.clauses).subscribe(s=>{this.appService.loader=!1,s&&s.success?(this.vehicles=s.vehicles,100==this.vehicles.length&&(this.pageNumber=t)):s&&!s.success&&(this.vehicles=[],this.errMessage=s.errMessage)})}getMoreOrLess(t){this.clauses.startsFrom=100*(t-1),this.clauses.endsAt=100*t,this.getVehicleList(t)}filterVehicle(){this.clauses.startsFrom=0,this.clauses.endsAt=100,this.getVehicleList(this.pageNumber)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.s),e.Y36(l.z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-vehicles"]],decls:55,vars:5,consts:[[1,"content-wrapper"],[1,"content-header"],[1,"breadcrumb"],[1,"fa","fa-user"],[1,"content"],[1,"row"],[1,"col-xs-12"],[1,"box"],[1,"box-body"],[2,"height","85vh","overflow","auto"],[1,"form-group"],["class","err-message",4,"ngIf"],["class","success-message",4,"ngIf"],[2,"overflow-x","auto"],[4,"ngFor","ngForOf"],[1,"pagination"],[1,"page"],[1,"page__btn"],[1,"fas","fa-less-than",2,"cursor","pointer"],["class","page__numbers",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"fas","fa-greater-than",2,"cursor","pointer"],[1,"err-message"],[1,"success-message"],[1,"page__numbers",3,"ngClass","click"]],template:function(t,s){1&t&&(e._UZ(0,"app-loader")(1,"app-header")(2,"app-left-nav"),e.TgZ(3,"div",0)(4,"section",1)(5,"h1"),e._uU(6," Vehicle List "),e.qZA(),e.TgZ(7,"ol",2)(8,"li"),e._UZ(9,"i",3),e._uU(10," Vehicle List"),e.qZA()()(),e.TgZ(11,"section",4)(12,"div",5)(13,"div",6)(14,"div",7)(15,"div",8)(16,"div",9)(17,"div",10),e.YNc(18,p,2,1,"h3",11),e.YNc(19,m,2,1,"h3",12),e.qZA(),e.TgZ(20,"div",13)(21,"table")(22,"tr")(23,"th"),e._uU(24,"Sl. No."),e.qZA(),e.TgZ(25,"th"),e._uU(26,"FIN"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Loan Number"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"RegNumber"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"PRD"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Asset Desc."),e.qZA(),e.TgZ(35,"th"),e._uU(36,"Customer Name"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"ENG"),e.qZA(),e.TgZ(39,"th"),e._uU(40,"CH"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"CONT. PERSON"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"MOB NO."),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Residence Address"),e.qZA()(),e.YNc(47,f,25,12,"tr",14),e.qZA(),e.TgZ(48,"div",15)(49,"ul",16)(50,"li",17),e._UZ(51,"i",18),e.qZA(),e.YNc(52,Z,2,4,"li",19),e.TgZ(53,"li",17),e._UZ(54,"i",20),e.qZA()()()()()()()()()()()),2&t&&(e.xp6(18),e.Q6J("ngIf",s.errMessage),e.xp6(1),e.Q6J("ngIf",s.successMessage),e.xp6(28),e.Q6J("ngForOf",s.vehicles),e.xp6(5),e.Q6J("ngForOf",e.DdM(4,O).constructor(s.pageNumber+1)))},directives:[d.R,u.G,h.J,r.O5,r.sg,r.mk],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;padding:8px;border:1px solid #8d958d;text-align:center}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.pagination[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0;margin:0}.item[_ngcontent-%COMP%]{width:10rem;height:10rem;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#2d4848;cursor:pointer}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#ffffff;box-shadow:0 .8rem 2rem #5a61810d;border-radius:.6rem;padding:2rem;font-size:3rem;transition:all .3s ease}.item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{transform:scale(1.2);color:#23adad}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin-top:1rem;color:#23adade1}.page[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:right;height:5rem;margin-top:3rem;border-radius:.6rem;background:#ffffff;box-shadow:0 .8rem 2rem #5a61810d}.page__numbers[_ngcontent-%COMP%], .page__btn[_ngcontent-%COMP%], .page__dots[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:.8rem;font-size:1.4rem;cursor:pointer}.page__dots[_ngcontent-%COMP%]{width:2.6rem;height:2.6rem;color:#23adade1;cursor:initial}.page__numbers[_ngcontent-%COMP%]{width:2.6rem;height:2.6rem;border-radius:.4rem}.page__numbers[_ngcontent-%COMP%]:hover{color:#23adad}.page__numbers.active[_ngcontent-%COMP%]{color:#fff;background:#23adad;font-weight:600;border:1px solid #23adad}.page__btn[_ngcontent-%COMP%]{color:#23adade1;pointer-events:none}.page__btn.active[_ngcontent-%COMP%]{color:#2d4848;pointer-events:initial}.page__btn.active[_ngcontent-%COMP%]:hover{color:#23adad}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.Bz.forChild(v)],a.Bz]}),n})();var A=i(5349);let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,C,A.m]]}),n})()}}]);