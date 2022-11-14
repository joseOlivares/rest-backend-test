"use strict";(self.webpackChunkmono_internet_banking_frontend=self.webpackChunkmono_internet_banking_frontend||[]).push([[302],{4302:(X,x,i)=>{i.r(x),i.d(x,{LoyaltyPlanModule:()=>B});var p=i(6019),A=i(9603),l=i(9018),t=i(3668),_=i(1174),g=i(2605),T=i(5904),Z=i(8151),m=i(888),f=i(8458);let q=(()=>{class e{constructor(n,a){this.data=n,this.currencyPipe=a}ngOnInit(){this.dataSource=this.data.testArrayDataCashback}getDataTable(){return{columns:[{title:"Fecha cashback recibido",field:"receiveCashbackDate",mobile:{hidden:!1,order:2}},{title:"Monto cashback recibido",field:"receiveCashbackAmmount",format:(n,a)=>this.currencyPipe.transform(a,"DOP","symbol-narrow","1.2-2"),mobile:{hidden:!1,order:3,textAlign:"end"}},{title:"Descripci\xf3n",field:"description",mobile:{hidden:!0}},{title:"No. Tarjeta",field:"cardNumber",mobile:{hidden:!0,order:1,fullrow:!0}},{title:"Usuario",field:"user",mobile:{hidden:!1,order:1,fullrow:!0}},{title:"Tipo de tarjeta",field:"cardType",mobile:{hidden:!0,order:1,fullrow:!0}}],headerActions:{search:{hidden:!1,placeholder:"Buscar por cuenta, beneficiario..."},filter:{hidden:!1},download:{hidden:!1}},data:this.dataSource}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.D),t.Y36(p.H9))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cashback-table"]],decls:3,vars:1,consts:[[1,"container"],[1,"cashback-card"],[3,"dataTableConfig"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t._UZ(2,"app-datatable",2),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("dataTableConfig",a.getDataTable()))},directives:[m.a8,f.n],styles:[".container[_ngcontent-%COMP%]{max-width:1134px;padding:0 0 65px}@media (max-width: 1280px){.container[_ngcontent-%COMP%]{padding-left:30px}}@media (max-width: 960px){.container[_ngcontent-%COMP%]{padding-left:16px;margin-right:0;margin-left:0}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}}.cashback-card[_ngcontent-%COMP%]{box-shadow:2px 4px 11px 1px #00000024;margin-top:30px;padding:0}@media (max-width: 768px){.cashback-card[_ngcontent-%COMP%]{margin-top:94px}}"]}),e})();var C=i(9112);let P=(()=>{class e{constructor(n,a,s,r){this.data=n,this.currencyPipe=a,this.router=s,this.activatedRoute=r}ngOnInit(){this.dataSource=this.data.testArrayDataCeritosReceived}getDataTable(){return{columns:[{title:"Producto",field:"product",mobile:{hidden:!1,order:1,fullrow:!0}},{title:"Tipo de producto",field:"productType",mobile:{hidden:!0}},{title:"Total de ceritos",field:"totalCeritos",format:(n,a)=>this.currencyPipe.transform(a,"DOP","","1.2-2"),mobile:{hidden:!1,order:2,stringToLabel:"Ceritos"}},{title:"Equivalente DOP",field:"dopEquivalent",format:(n,a)=>this.currencyPipe.transform(a,"DOP","symbol-narrow","1.2-2"),mobile:{hidden:!1,order:3,textAlign:"end",stringToLabel:"DOP"}},{title:"Fencha vencimiento",field:"dueDate",mobile:{hidden:!0,order:1,fullrow:!0}}],actions:{title:{hidden:!0,text:"Canjear"},verticalMenu:{hidden:!1},events:[{icon:"redeem_black_24dp 1",title:"Canjear",disabled:()=>!1,onClick:()=>""},{icon:"keyboard_arrow_right",title:"",disabled:()=>!1,onClick:()=>{this.router.navigate(["detalle-ceritos"],{relativeTo:this.activatedRoute})},justifyEnd:!0}]},headerActions:{search:{hidden:!1,placeholder:"Buscar por cuenta, beneficiario..."},filter:{hidden:!1},download:{hidden:!1}},data:this.dataSource}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.D),t.Y36(p.H9),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ceritos-received-table"]],decls:1,vars:1,consts:[[3,"dataTableConfig"]],template:function(n,a){1&n&&t._UZ(0,"app-datatable",0),2&n&&t.Q6J("dataTableConfig",a.getDataTable())},directives:[f.n],styles:[""]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ceritos"]],decls:32,vars:0,consts:[[1,"container"],[1,"first-container"],[1,"first-container__cards-container"],[1,"first-container__cards-container__icon-container"],[1,"first-container__cards-container__text-container"],[1,"first-container__cards-container__text-container__title"],[1,"first-container__cards-container__text-container__text"],[1,"first-container__cards-container__info-icon"],[1,"second-container"],[1,"second-container__card"],["headerPosition","above","appSwipeMatTab","",1,"second-container__card__tabs","mat-tab-group-setting"],["label","Ceritos recibidos"],["label","Hist\xf3rico transaccional"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"mat-card",2),t.TgZ(3,"div",3),t.TgZ(4,"mat-icon"),t._uU(5,"credit_card_black_2"),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"p",5),t._uU(8," Ceritos tarjetas de cr\xe9dito "),t.qZA(),t.TgZ(9,"p",6),t._uU(10," 3,000 Ceritos | Equivalente: $825.00 Dop "),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"mat-icon"),t._uU(13," info_black_24dp 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"mat-card",2),t.TgZ(15,"div",3),t.TgZ(16,"mat-icon"),t._uU(17,"credit_card_black_2"),t.qZA(),t.qZA(),t.TgZ(18,"div",4),t.TgZ(19,"p",5),t._uU(20," Ceritos tarjetas de d\xe9bito "),t.qZA(),t.TgZ(21,"p",6),t._uU(22," 3,000 Ceritos | Equivalente: $825.00 Dop "),t.qZA(),t.qZA(),t.TgZ(23,"div",7),t.TgZ(24,"mat-icon"),t._uU(25," info_black_24dp 1"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",8),t.TgZ(27,"mat-card",9),t.TgZ(28,"mat-tab-group",10),t.TgZ(29,"mat-tab",11),t._UZ(30,"app-ceritos-received-table"),t.qZA(),t._UZ(31,"mat-tab",12),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[m.a8,C.Hw,g.SP,T.z,g.uX,P],styles:['.container[_ngcontent-%COMP%]{padding-left:12px;padding-top:0;max-width:1134px;overflow:hidden}.container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{box-shadow:2px 4px 11px 1px #00000024;border-radius:10px}.container[_ngcontent-%COMP%]   .first-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:30px 0;grid-gap:20px;gap:20px}.container[_ngcontent-%COMP%]   .first-container__cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:557px;min-height:104px;background:linear-gradient(255.89deg,#F9F9F9 -44.72%,#FFFFFF 44.56%)}.container[_ngcontent-%COMP%]   .first-container__cards-container__icon-container[_ngcontent-%COMP%]{min-width:44px;min-height:44px;border-radius:50%;border:1px solid #ffffff;background-color:#ffd241;box-shadow:0 0 0 2px #ffd241;display:flex;align-items:center;justify-content:center;color:#0046c4}.container[_ngcontent-%COMP%]   .first-container__cards-container__text-container[_ngcontent-%COMP%]{margin:0 20px}.container[_ngcontent-%COMP%]   .first-container__cards-container__text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]   .first-container__cards-container__text-container__title[_ngcontent-%COMP%]{font-family:"Ubuntu";font-style:normal;font-weight:500;font-size:14px;line-height:21px;letter-spacing:.1px;color:#003459}.container[_ngcontent-%COMP%]   .first-container__cards-container__text-container__text[_ngcontent-%COMP%]{font-family:"Arial";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:.5px;color:#0009}.container[_ngcontent-%COMP%]   .first-container__cards-container__info-icon[_ngcontent-%COMP%]{text-align:end;margin-left:93px;color:#0009}.container[_ngcontent-%COMP%]   .second-container__card[_ngcontent-%COMP%]{padding:0}@media (max-width: 1280px){.container[_ngcontent-%COMP%]{padding-left:40px}}@media (max-width: 1060px){.container[_ngcontent-%COMP%]   .first-container[_ngcontent-%COMP%]{flex-wrap:wrap}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}.container[_ngcontent-%COMP%]   .first-container[_ngcontent-%COMP%]{margin-top:70px}}@media (max-width: 570px){.container[_ngcontent-%COMP%]   .first-container__cards-container[_ngcontent-%COMP%]{align-items:flex-start}.container[_ngcontent-%COMP%]   .first-container__cards-container__info-icon[_ngcontent-%COMP%]{margin-left:0}}']}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cashback"]],decls:8,vars:0,consts:[[1,"cashback"],[1,"cashback__title"],["firstText","Plan","secondText","de lealtad","fontSize","1.75rem"],["mat-align-tabs","end","headerPosition","above","appSwipeMatTab","",1,"cashback__tabs"],["label","Cashback"],["label","Ceritos"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-double-text",2),t.qZA(),t.TgZ(3,"mat-tab-group",3),t.TgZ(4,"mat-tab",4),t._UZ(5,"app-cashback-table"),t.qZA(),t.TgZ(6,"mat-tab",5),t._UZ(7,"app-ceritos"),t.qZA(),t.qZA(),t.qZA())},directives:[_.M,g.SP,T.z,g.uX,q,M],styles:[".cashback[_ngcontent-%COMP%]{display:flex}.cashback__title[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fbfcfd 13.18%,rgba(251,252,253,0) 160.94%,rgba(251,252,253,0) 160.94%);position:relative;z-index:100;padding:10px 0 10px 86px;width:100%;height:64px}.cashback__tabs[_ngcontent-%COMP%]{position:absolute;width:100%;z-index:101}@media (max-width: 960px){.cashback[_ngcontent-%COMP%]{margin-top:40px}}@media (max-width: 768px){.cashback__title[_ngcontent-%COMP%]{padding-left:16px}}@media (max-width: 768px){.cashback__title[_ngcontent-%COMP%]{margin-top:70px}}"]}),e})();var h=i(86);let O=(()=>{class e{constructor(n,a,s,r){this.data=n,this.currencyPipe=a,this.router=s,this.activatedRoute=r}ngOnInit(){this.dataSource=this.data.testArrayDataDetailCeritos}getDataTable(){return{columns:[{title:"Fecha Ceritos recibidos",field:"receiveCeritosDate",mobile:{hidden:!1,order:1,fullrow:!0}},{title:"Ceritos generado",field:"generatedCeritos",mobile:{hidden:!1,order:2,fullrow:!0,textAlign:"end"}},{title:"Ceritos vencidos",field:"expiredCeritos",mobile:{hidden:!0}},{title:"Ceritos redimidos",field:"redeemedCeritos",mobile:{hidden:!1,order:4,fullrow:!0,textAlign:"end"}},{title:"Fecha redenci\xf3n",field:"surrenderDate",mobile:{hidden:!0}}],headerActions:{search:{hidden:!1,placeholder:"Buscar por cuenta, beneficiario..."},filter:{hidden:!1,order:1},actions:[{color:"primary",type:"mat-stroked-button",title:"Canjear",order:2,onClick:()=>{this.router.navigate(["canje-ceritos"],{relativeTo:this.activatedRoute})}}],download:{hidden:!1,order:3}},data:this.dataSource}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.D),t.Y36(p.H9),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ceritos-detail-table"]],decls:1,vars:1,consts:[[3,"dataTableConfig"]],template:function(n,a){1&n&&t._UZ(0,"app-datatable",0),2&n&&t.Q6J("dataTableConfig",a.getDataTable())},directives:[f.n],styles:[""]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ceritos-detail"]],decls:43,vars:1,consts:[[1,"ceritos-detail"],[1,"ceritos-detail__title"],["mat-icon-button","",3,"routerLink"],["firstText","Detalle","secondText","Visa Infinite","fontSize","1.75rem"],[1,"ceritos-detail__first-container"],[1,"ceritos-detail__first-container__cards-container"],[1,"ceritos-detail__first-container__cards-container__icon-container"],[1,"ceritos-detail__first-container__cards-container__text-container"],[1,"ceritos-detail__first-container__cards-container__text-container__title"],[1,"ceritos-detail__first-container__cards-container__text-container__text"],[1,"ceritos-detail__second-container"],[1,"ceritos-detail__second-container__table-card"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.TgZ(3,"mat-icon"),t._uU(4,"keyboard_arrow_left"),t.qZA(),t.qZA(),t._UZ(5,"app-double-text",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"mat-card",5),t.TgZ(8,"div",6),t.TgZ(9,"mat-icon"),t._uU(10,"shopping_cart_black"),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"p",8),t._uU(13," Ceritos disponibles "),t.qZA(),t.TgZ(14,"p",9),t._uU(15," 3,000 Ceritos "),t.qZA(),t.TgZ(16,"p",9),t._uU(17," Equivalente: $825.00 Dop "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"mat-card",5),t.TgZ(19,"div",6),t.TgZ(20,"mat-icon"),t._uU(21,"redeem_black_24dp 1"),t.qZA(),t.qZA(),t.TgZ(22,"div",7),t.TgZ(23,"p",8),t._uU(24," Total de ceritos "),t.qZA(),t.TgZ(25,"p",9),t._uU(26," 3,000 Ceritos "),t.qZA(),t.TgZ(27,"p",9),t._uU(28," Equivalente: $825.00 Dop "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"mat-card",5),t.TgZ(30,"div",6),t.TgZ(31,"mat-icon"),t._uU(32,"auto_delete_black_2"),t.qZA(),t.qZA(),t.TgZ(33,"div",7),t.TgZ(34,"p",8),t._uU(35," Ceritos "),t.qZA(),t.TgZ(36,"p",9),t._uU(37," Redimidos: 3,000 "),t.qZA(),t.TgZ(38,"p",9),t._uU(39," Vencidos: 139,999.00 "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",10),t.TgZ(41,"mat-card",11),t._UZ(42,"app-ceritos-detail-table"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("routerLink",".."))},directives:[h.lW,l.rH,C.Hw,_.M,m.a8,O],styles:['.ceritos-detail[_ngcontent-%COMP%]{padding-left:40px}.ceritos-detail[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{box-shadow:2px 4px 11px 1px #00000024;border-radius:10px}.ceritos-detail__title[_ngcontent-%COMP%]{position:relative;background:linear-gradient(180deg,#fbfcfd 13.18%,rgba(251,252,253,0) 160.94%,rgba(251,252,253,0) 160.94%);padding-left:30px;display:flex;align-items:center;width:100%;height:64px}.ceritos-detail__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:5px}.ceritos-detail__first-container[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:space-between;grid-gap:20px;gap:20px;margin:30px auto;max-width:1134px}.ceritos-detail__first-container__cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;max-width:364px;width:100%;height:104px;padding:16px;background:linear-gradient(255.89deg,#f9f9f9 -44.72%,#ffffff 44.56%)}.ceritos-detail__first-container__cards-container__icon-container[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;border:1px solid #ffffff;background-color:#ffd241;box-shadow:0 0 0 2px #ffd241;display:flex;align-items:center;justify-content:center;color:#0046c4}.ceritos-detail__first-container__cards-container__text-container[_ngcontent-%COMP%]{margin-left:20px}.ceritos-detail__first-container__cards-container__text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.ceritos-detail__first-container__cards-container__text-container__title[_ngcontent-%COMP%]{font-family:"Ubuntu";font-style:normal;font-weight:500;font-size:14px;line-height:21px;letter-spacing:.1px;color:#003459}.ceritos-detail__first-container__cards-container__text-container__text[_ngcontent-%COMP%]{font-family:"Arial";font-style:normal;font-weight:400;font-size:16px;line-height:24px;letter-spacing:.5px;color:#0009}.ceritos-detail__second-container[_ngcontent-%COMP%]{width:80%;margin:20px auto;max-width:1134px}.ceritos-detail__second-container__table-card[_ngcontent-%COMP%]{padding:0}@media (max-width: 1280px){.ceritos-detail__first-container[_ngcontent-%COMP%]{flex-wrap:wrap}}@media (max-width: 960px){.ceritos-detail[_ngcontent-%COMP%]{padding-left:0;width:100vw}.ceritos-detail__title[_ngcontent-%COMP%]{padding-left:0;margin-top:40px}.ceritos-detail__first-container[_ngcontent-%COMP%], .ceritos-detail__second-container[_ngcontent-%COMP%]{width:calc(100% - 32px);margin:30px 16px}}@media (max-width: 768px){.ceritos-detail__title[_ngcontent-%COMP%]{padding-top:30px}.ceritos-detail__first-container__cards-container[_ngcontent-%COMP%]{max-width:none}}@media (max-width: 440px){.ceritos-detail__first-container__cards-container[_ngcontent-%COMP%]{align-items:flex-start}}']}),e})();var d=i(2255),c=i(9133),U=i(1430),u=i(3050),k=i(904);let w=(()=>{class e{constructor(n){this.formBuilder=n,this.selected1=!0,this.selected2=!0,this.selected3=!0,this.selected4=!0}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({card1:new c.NI(""),card2:new c.NI(""),card3:new c.NI(""),card4:new c.NI(""),card5:new c.NI(""),card6:new c.NI(""),card7:new c.NI(""),card8:new c.NI(""),card9:new c.NI(""),card10:new c.NI(""),card11:new c.NI(""),card12:new c.NI("")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dialog-select-cards"]],decls:114,vars:5,consts:[["novalidate","","autocomplete","off",1,"form-select-cards",3,"formGroup"],["placeholder","Buscar usuario, n\xfamero de tarjeta o ceritos",1,"search"],["name","card","color","primary","formControlName","card1",3,"click"],[1,"card-name","mat-body-1"],[1,"mat-body-1"],["color","primary"],["name","card","color","primary","formControlName","card2",3,"click"],["name","card","color","primary","formControlName","card3",1,"noPanel",3,"ngModel","ngModelChange"],["name","card","color","primary","formControlName","card4",3,"click"],["name","card","color","primary","formControlName","card5",3,"click"],["name","card","color","primary","formControlName","card6",1,"noPanel",3,"ngModel","ngModelChange"],["name","card","color","primary","formControlName","card7",1,"noPanel"],["name","card","color","primary","formControlName","card8",3,"click"],["name","card","color","primary","formControlName","card9",1,"noPanel",3,"ngModel","ngModelChange"],["name","card","color","primary","formControlName","card10",1,"noPanel",3,"ngModel","ngModelChange"],["name","card","color","primary","formControlName","card11",1,"noPanel"],["name","card","color","primary","formControlName","card12",1,"noPanel"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"app-search-input",1),t.TgZ(2,"mat-accordion"),t.TgZ(3,"mat-expansion-panel"),t.TgZ(4,"mat-expansion-panel-header"),t.TgZ(5,"mat-panel-title"),t.TgZ(6,"mat-checkbox",2),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(7,"span",3),t._uU(8,"Amanda Mar\xeda Montero - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(9,"span",4),t._uU(10," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"mat-checkbox",5),t.TgZ(12,"span",3),t._uU(13,"Amanda Mar\xeda Montero - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(14,"span",4),t._uU(15," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"mat-accordion"),t.TgZ(17,"mat-expansion-panel"),t.TgZ(18,"mat-expansion-panel-header"),t.TgZ(19,"mat-panel-title"),t.TgZ(20,"mat-checkbox",6),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(21,"span",3),t._uU(22,"Alejandro Castro Romero - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(23,"span",4),t._uU(24," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"mat-checkbox",5),t.TgZ(26,"span",3),t._uU(27,"Alejandro Castro Romero - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(28,"span",4),t._uU(29," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"mat-accordion"),t.TgZ(31,"mat-checkbox",7),t.NdJ("ngModelChange",function(r){return a.selected1=r}),t.TgZ(32,"span",3),t._uU(33,"Alonso Rojas Pardo - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(34,"span",4),t._uU(35," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"mat-accordion"),t.TgZ(37,"mat-expansion-panel"),t.TgZ(38,"mat-expansion-panel-header"),t.TgZ(39,"mat-panel-title"),t.TgZ(40,"mat-checkbox",8),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(41,"span",3),t._uU(42,"Carlos Blanco Chen - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(43,"span",4),t._uU(44," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"mat-checkbox",5),t.TgZ(46,"span",3),t._uU(47,"Carlos Blanco Chen - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(48,"span",4),t._uU(49," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"mat-accordion"),t.TgZ(51,"mat-expansion-panel"),t.TgZ(52,"mat-expansion-panel-header"),t.TgZ(53,"mat-panel-title"),t.TgZ(54,"mat-checkbox",9),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(55,"span",3),t._uU(56,"Daniel L\xf3pez Gutierrez - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(57,"span",4),t._uU(58," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"mat-checkbox",5),t.TgZ(60,"span",3),t._uU(61,"Daniel L\xf3pez Gutierrez - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(62,"span",4),t._uU(63," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(64,"mat-accordion"),t.TgZ(65,"mat-checkbox",10),t.NdJ("ngModelChange",function(r){return a.selected2=r}),t.TgZ(66,"span",3),t._uU(67,"Fabiola Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(68,"span",4),t._uU(69," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(70,"mat-accordion"),t.TgZ(71,"mat-checkbox",11),t.TgZ(72,"span",3),t._uU(73,"Gabriela Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(74,"span",4),t._uU(75," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(76,"mat-accordion"),t.TgZ(77,"mat-expansion-panel"),t.TgZ(78,"mat-expansion-panel-header"),t.TgZ(79,"mat-panel-title"),t.TgZ(80,"mat-checkbox",12),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(81,"span",3),t._uU(82,"Isac Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(83,"span",4),t._uU(84," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(85,"mat-checkbox",5),t.TgZ(86,"span",3),t._uU(87,"Isac Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(88,"span",4),t._uU(89," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"mat-accordion"),t.TgZ(91,"mat-checkbox",13),t.NdJ("ngModelChange",function(r){return a.selected3=r}),t.TgZ(92,"span",3),t._uU(93,"Jorge Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(94,"span",4),t._uU(95," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(96,"mat-accordion"),t.TgZ(97,"mat-checkbox",14),t.NdJ("ngModelChange",function(r){return a.selected4=r}),t.TgZ(98,"span",3),t._uU(99,"Karla Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(100,"span",4),t._uU(101," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(102,"mat-accordion"),t.TgZ(103,"mat-checkbox",15),t.TgZ(104,"span",3),t._uU(105,"Natalia Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(106,"span",4),t._uU(107," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(108,"mat-accordion"),t.TgZ(109,"mat-checkbox",16),t.TgZ(110,"span",3),t._uU(111,"Rab\xf3n Porras Castro - 1243 \u2022\u2022\u2022\u2022 1234"),t.qZA(),t.TgZ(112,"span",4),t._uU(113," (320 Ceritos)"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("formGroup",a.form),t.xp6(31),t.Q6J("ngModel",a.selected1),t.xp6(34),t.Q6J("ngModel",a.selected2),t.xp6(26),t.Q6J("ngModel",a.selected3),t.xp6(6),t.Q6J("ngModel",a.selected4))},directives:[c._Y,c.JL,c.sg,U.J,u.pp,u.ib,u.yz,u.yK,k.oG,c.JJ,c.u],styles:['@charset "UTF-8";.form-select-cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:15px;gap:15px}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 10px;border-bottom:1px solid #e5e5e5;height:auto}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   span.mat-content[_ngcontent-%COMP%] > .mat-expansion-panel-header-title[_ngcontent-%COMP%]{margin:0}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   span.mat-content[_ngcontent-%COMP%] > .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:#000000de;font-size:1rem;letter-spacing:.15px}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:10px 25px}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%]{color:#000000de}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .noPanel[_ngcontent-%COMP%]{width:100%;height:48px;display:flex;align-items:center;padding:0 10px;border-bottom:1px solid #e5e5e5}.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .noPanel[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}@media (max-width: 440px){.form-select-cards[_ngcontent-%COMP%]   .mat-accordion[_ngcontent-%COMP%]   .noPanel[_ngcontent-%COMP%]{height:62px}}']}),e})();var D=i(1717),b=i(8167),F=i(6400),N=i(6731),S=i(138);let J=(()=>{class e{constructor(n){this.dialogService=n,this.selected="1"}openDialog(){this.dialogService.openDialogFilter({component:w,cancelText:"Limpiar selecci\xf3n",confirmText:"Seleccionar",title:"Seleccione las tarjetas"})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(D.x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-request-form"]],decls:55,vars:2,consts:[[1,"form-container"],[1,"generic__form"],[1,"request-form__first-container"],[1,"request-form__first-container__info"],[1,"mat-caption"],[1,"mat-body-1"],[3,"click"],[3,"value","valueChange"],["value","1"],[1,"request-form__second-container"],["matInput","","value","$1000000.00"],[1,"floating-footer-container"],[1,"floating-footer"],["mat-stroked-button","","color","accent","type","button"],["mat-raised-button","","color","primary","type","submit","matStepperNext",""]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.TgZ(2,"div",2),t.TgZ(3,"h4"),t._uU(4,"Balance de Ceritos por producto"),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"p",4),t.TgZ(7,"span"),t._uU(8,"TC Gold"),t.qZA(),t.TgZ(9,"span"),t._uU(10,": 999,999 ceritos"),t.qZA(),t.qZA(),t.TgZ(11,"p",4),t.TgZ(12,"span"),t._uU(13,"Visa Infinite"),t.qZA(),t.TgZ(14,"span"),t._uU(15,": 999,999 ceritos"),t.qZA(),t.qZA(),t.TgZ(16,"p",4),t.TgZ(17,"span"),t._uU(18,"D\xe9bito Familiar"),t.qZA(),t.TgZ(19,"span"),t._uU(20,": 999,999 ceritos"),t.qZA(),t.qZA(),t.TgZ(21,"p",4),t.TgZ(22,"span"),t._uU(23,"D\xe9bito Cl\xe1sica"),t.qZA(),t.TgZ(24,"span"),t._uU(25,": 999,999 ceritos"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"p",5),t._uU(27," Seleccione las tarjetas que desea canjear los Ceritos. "),t.qZA(),t.TgZ(28,"mat-form-field",6),t.NdJ("click",function(){return a.openDialog()}),t.TgZ(29,"mat-label"),t._uU(30,"Seleccione las tarjetas"),t.qZA(),t.TgZ(31,"mat-select",7),t.NdJ("valueChange",function(r){return a.selected=r}),t.TgZ(32,"mat-option",8),t._uU(33,"1 selecci\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",9),t.TgZ(35,"h4"),t._uU(36,"Monto a canjear"),t.qZA(),t.TgZ(37,"mat-form-field"),t.TgZ(38,"mat-label"),t._uU(39,"Monto"),t.qZA(),t._UZ(40,"input",10),t.qZA(),t.TgZ(41,"h4"),t._uU(42,"Cuenta destino"),t.qZA(),t.TgZ(43,"mat-form-field"),t.TgZ(44,"mat-label"),t._uU(45,"Seleccione tipo de dep\xf3sito"),t.qZA(),t.TgZ(46,"mat-select",7),t.NdJ("valueChange",function(r){return a.selected=r}),t.TgZ(47,"mat-option",8),t._uU(48,"A mi cuenta"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",11),t.TgZ(50,"div",12),t.TgZ(51,"button",13),t._uU(52," Cancelar "),t.qZA(),t.TgZ(53,"button",14),t._uU(54," Canjear "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(31),t.Q6J("value",a.selected),t.xp6(15),t.Q6J("value",a.selected))},directives:[c._Y,c.JL,c.F,b.KE,b.hX,F.gD,N.ey,S.Nt,h.lW,d.Ic],styles:['@charset "UTF-8";.request-form__first-container[_ngcontent-%COMP%]{margin-top:28px}.request-form__first-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0009}.request-form__first-container__info[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);border-radius:4px;padding:8px 15px;margin:20px 0}.request-form__first-container__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0}.request-form__first-container__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:#003459}.request-form__second-container[_ngcontent-%COMP%]{margin-bottom:30px}.request-form__second-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:20px 0}.floating-footer-container[_ngcontent-%COMP%]   .floating-footer[_ngcontent-%COMP%]{padding:0 32px;grid-gap:20px;gap:20px}.floating-footer-container[_ngcontent-%COMP%]   .floating-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:auto}@media (max-width: 768px){.form-container[_ngcontent-%COMP%], .request-form__first-container[_ngcontent-%COMP%]{margin-top:0}}@media (max-width: 440px){.request-form__second-container[_ngcontent-%COMP%]{margin-bottom:100px}}']}),e})();var j=i(9596);const R=["stepper"];function E(e,o){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function I(e,o){1&e&&t._uU(0,"Solicitud")}function z(e,o){1&e&&t._uU(0,"Confirmar")}function L(e,o){1&e&&t._uU(0,"Completado")}const Y=[{path:"",component:v},{path:"detalle-ceritos",component:y},{path:"detalle-ceritos/canje-ceritos",component:(()=>{class e{constructor(){this.voucherConfirmData=[{container:[{title:"Fecha del pago",data:"7 Ene. 2020"},{title:"Tipo de pago",data:"Canje ceritos"}],button:{state:!1}},{container:[{title:"Tarjeta origen",data:"1848 \u2022\u2022\u2022\u2022 2201"},{title:"Tarjetahabiente",data:"Jane Cooper"},{title:"Ceritos acumulados",data:"100"}],button:{state:!1}},{container:[{title:"Tipo de transacci\xf3n",data:"Deposito cuenta"},{title:"Cuenta destino",data:"41248548588"}],button:{state:!1}}],this.voucherCompletedData=[{container:[{title:"Fecha del pago",data:"7 Ene. 2020"},{title:"Referencia",data:"FT19115006"},{title:"Tipo de pago",data:"Canje ceritos"}],button:{state:!1}},{container:[{title:"Tarjeta origen",data:"1848 \u2022\u2022\u2022\u2022 2201"},{title:"Tarjetahabiente",data:"Jane Cooper"},{title:"Ceritos acumulados",data:"100"}],button:{state:!1}},{container:[{title:"Tipo de transacci\xf3n",data:"Deposito cuenta"},{title:"Cuenta destino",data:"41248548588"}],button:{state:!1}}]}generateConfirmVoucher(){return{data:this.voucherConfirmData,value:{state:!0,title:"200000.00"},title:{state:!0,title:"Verifique los datos del pago de tarjeta de cr\xe9dito"},stateImg:!0,stateFooter:!1,finalText:{title:"",description:""}}}generateCompletedVoucher(){return{data:this.voucherCompletedData,value:{state:!0,title:"45859.99"},title:{state:!0,title:"\xa1Su pago fue exitoso!"},stateImg:!0,stateFooter:!0,finalText:{title:"",description:""}}}goToFirst(){this.stepper.selectedIndex=0,this.stepper.steps.forEach(n=>{n.reset()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-exchange-ceritos"]],viewQuery:function(n,a){if(1&n&&t.Gf(R,5),2&n){let s;t.iGM(s=t.CRH())&&(a.stepper=s.first)}},decls:36,vars:5,consts:[[1,"payments-container"],[1,"title-container"],["firstText","Canje","secondText","de Ceritos"],[1,"mat-card-payment"],[1,"stepper-disabled",3,"disableRipple","selectedIndex"],["stepper",""],["matStepperIcon","edit"],["matStepLabel",""],[1,"voucher"],[1,"button-back"],["mat-button","","matStepperPrevious","","color","basic"],[1,"voucher-container"],[3,"voucher"],["actions","",1,"floating-footer-container"],[1,"floating-footer"],["mat-stroked-button","","color","accent","type","button"],["mat-raised-button","","color","primary","type","button","matStepperNext",""],["mat-stroked-button","","color","accent","type","button",3,"click"],["mat-raised-button","","color","primary","type","button",3,"routerLink"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-double-text",2),t.qZA(),t.TgZ(3,"mat-card",3),t.TgZ(4,"mat-stepper",4,5),t.YNc(6,E,2,0,"ng-template",6),t.TgZ(7,"mat-step"),t.YNc(8,I,1,0,"ng-template",7),t._UZ(9,"app-request-form"),t.qZA(),t.TgZ(10,"mat-step"),t.YNc(11,z,1,0,"ng-template",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"button",10),t.TgZ(15,"mat-icon"),t._uU(16,"chevron_left"),t.qZA(),t._uU(17," Regresar "),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"app-proof",12),t.TgZ(20,"div",13),t.TgZ(21,"div",14),t.TgZ(22,"button",15),t._uU(23," Cancelar "),t.qZA(),t.TgZ(24,"button",16),t._uU(25," Confirmar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"mat-step"),t.YNc(27,L,1,0,"ng-template",7),t.TgZ(28,"div",8),t.TgZ(29,"app-proof",12),t.TgZ(30,"div",13),t.TgZ(31,"div",14),t.TgZ(32,"button",17),t.NdJ("click",function(){return a.goToFirst()}),t._uU(33," Otra transacci\xf3n "),t.qZA(),t.TgZ(34,"button",18),t._uU(35," Ok "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("disableRipple",!0)("selectedIndex",0),t.xp6(15),t.Q6J("voucher",a.generateConfirmVoucher()),t.xp6(10),t.Q6J("voucher",a.generateCompletedVoucher()),t.xp6(5),t.Q6J("routerLink",".."))},directives:[_.M,m.a8,d.Vq,d.z9,d.C0,d.VY,J,h.lW,d.fd,C.Hw,j.R,d.Ic,l.rH],styles:['@charset "UTF-8";.button-back[_ngcontent-%COMP%]{position:absolute;top:90px;left:60px}.voucher[_ngcontent-%COMP%]{margin-top:28px}@media (max-width: 768px){.button-back[_ngcontent-%COMP%]{top:75px;left:0}.voucher-container[_ngcontent-%COMP%]{margin-top:80px}}']}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(Y)],l.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,A.m,Q]]}),e})()}}]);