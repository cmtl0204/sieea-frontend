import{a as oe}from"./chunk-LQLX3PEZ.js";import{a as pe,b as le}from"./chunk-RUSBPZ67.js";import{a as Q}from"./chunk-UIVIJWLM.js";import{a as re}from"./chunk-AF3X7UOH.js";import{a as K}from"./chunk-RJ6ODVGJ.js";import{a as ae}from"./chunk-JT4BACVD.js";import"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Y,d as J,f as W,j as X,l as ee,m as te,u as ie,v as ne}from"./chunk-UOAM75BV.js";import{Ba as V,Ea as N,Pa as Z,ra as q,va as U}from"./chunk-RIYVHW5G.js";import{Ab as n,Bb as f,Fb as S,Gb as g,Hb as d,Ib as M,Jb as F,Q as I,Qc as k,Rb as $,Sa as r,Sb as o,Tb as A,Ub as u,Vb as G,W as v,Zb as D,_b as H,ca as c,da as m,db as C,ga as x,hb as E,ib as w,kc as z,pb as P,qb as l,rb as b,sb as j,tb as y,ub as _,vb as h,wb as R,xb as O,yb as L,zb as i}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var ve=["*"],xe=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,Ce={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},se=(()=>{class t extends V{name="inputgroup";theme=xe;classes=Ce;static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ue=(()=>{class t extends N{style;styleClass;_componentStyle=v(se);static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,a){p&2&&(P("data-pc-name","inputgroup"),y(a.style),_(a.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[D([se]),E],ngContentSelectors:ve,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[k,U],encapsulation:2})}return t})();var be=["*"],ye={root:"p-inputgroupaddon"},ce=(()=>{class t extends V{name="inputgroupaddon";classes=ye;static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),me=(()=>{class t extends N{style;styleClass;_componentStyle=v(ce);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,a){p&2&&(P("data-pc-name","inputgroupaddon"),y(a.hostStyle),_(a.styleClass),j("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[D([ce]),E],ngContentSelectors:be,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[k],encapsulation:2})}return t})();var _e=()=>({width:"30rem"});function he(t,s){if(t&1){let e=S();i(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",25)(4,"p"),o(5,"Preservaci\xF3n Abril "),f(6,"p-divider"),i(7,"p-button",26),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("preservacion_abril"))}),n()()(),i(8,"p-tag",27)(9,"div",28)(10,"span",29),o(11),n()()()()()(),i(12,"div",22)(13,"div",23)(14,"div",24)(15,"div",25)(16,"p"),o(17,"Preservaci\xF3n Mayo "),f(18,"p-divider"),i(19,"p-button",26),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("preservacion_mayo"))}),n()()(),i(20,"p-tag",27)(21,"div",28)(22,"span",29),o(23),n()()()()()()}if(t&2){let e=d(2);r(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),r(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA1!="completa"?"danger":"success"),r(3),u(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),r(8),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),r(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA2!="completa"?"danger":"success"),r(3),u(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function Se(t,s){if(t&1){let e=S();i(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",25)(4,"p"),o(5,"Gasolineras Abril "),f(6,"p-divider"),i(7,"p-button",26),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("levantamiento_abril"))}),n()()(),i(8,"p-tag",27)(9,"div",28)(10,"span",29),o(11),n()()()()()(),i(12,"div",22)(13,"div",23)(14,"div",24)(15,"div",25)(16,"p"),o(17,"Encuestas Tur\xEDsticas Mayo "),f(18,"p-divider"),i(19,"p-button",26),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("levantamiento_mayo"))}),n()()(),i(20,"p-tag",27)(21,"div",28)(22,"span",29),o(23),n()()()()()()}if(t&2){let e=d(2);r(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),r(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB1!="completa"?"danger":"success"),r(3),u(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),r(8),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),r(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB2!="completa"?"danger":"success"),r(3),u(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Ie(t,s){if(t&1){let e=S();i(0,"div",7)(1,"div",8)(2,"div",9)(3,"h6"),o(4,"DIRECCI\xD3N ZONAL:"),n(),o(5),n(),i(6,"div",9)(7,"h6"),o(8,"PROVINCIA:"),n(),o(9),n(),i(10,"div",9)(11,"h6"),o(12,"N\xDAMERO DE C\xC9DULA:"),n(),o(13),n(),i(14,"div",10)(15,"h6"),o(16,"APELLIDOS Y NOMBRES:"),n(),o(17),n(),i(18,"div",10)(19,"h6"),o(20,"Estado (Unidad Registro Social):"),n(),i(21,"p"),o(22),i(23,"p-button",11),g("click",function(a){c(e),d();let B=$(3);return m(B.toggle(a))}),n()()(),i(24,"div",10)(25,"h6"),o(26,"ACTIVIDAD:"),n(),o(27),n(),i(28,"div",9)(29,"h6"),o(30,"PROGRESO:"),n(),i(31,"p-tag",12),o(32),n()(),i(33,"div",9)(34,"h6"),o(35,"CUENTA BANCARIA:"),n(),o(36),n(),i(37,"div",13)(38,"p-message",14)(39,"span",15)(40,"b"),o(41,"Atenci\xF3n:"),n(),o(42," Si su cuenta bancaria es incorrecta actualice "),i(43,"p-button",16),g("onClick",function(){c(e);let a=d();return m(a.linkToEEA())}),n()()()()()(),i(44,"div",17)(45,"div",8)(46,"div",18)(47,"p-message",19)(48,"h4"),o(49,"Hemos creado esta plataforma para receptar sus inconvenientes. Atenci\xF3n desde el "),i(50,"b",20),o(51," 30 de junio al 09 de julio de 2025"),n(),o(52,", de lunes a viernes en el horario de atenci\xF3n de 08:00 a 16:30. "),n()()()()(),i(53,"div",21)(54,"div",22)(55,"div",23)(56,"div",24)(57,"div",25)(58,"p"),o(59,"Curso en l\xEDnea "),f(60,"p-divider"),i(61,"p-button",26),g("onClick",function(){c(e);let a=d();return m(a.filterPhones("curso"))}),n()()(),i(62,"p-tag",27)(63,"div",28)(64,"span",29),o(65),n()()()()()(),w(66,he,24,18)(67,Se,24,18),n()}if(t&2){let e=d();r(5),u(" ",e.userState.direccionZonal," "),r(4),u(" ",e.userState.provincia," "),r(4),u(" ",e.userState.cedula," "),r(4),u(" ",e.userState.nombres," "),r(5),u(" ",e.userState.habilitado," "),r(),l("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),r(4),u(" ",e.userState.actividad," "),r(4),l("severity",e.userState.cumple!="Completo"?"danger":"success"),r(),A(e.userState.cumple),r(4),G(" ",e._authService.additionalInformation.nombreCorto," ",e._authService.additionalInformation.numeroCuenta," "),r(7),l("rounded",!0)("raised",!0),r(18),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),r(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.curso!="completa"?"danger":"success"),r(3),u(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),r(),h(e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?66:-1),r(),h(e.userState.actividad=="Levantamiento de informaci\xF3n"?67:-1)}}function Ee(t,s){t&1&&(i(0,"p-message",2),o(1,"No cuenta con registro de su actividad"),n())}function we(t,s){if(t&1&&(i(0,"h4"),o(1),n()),t&2){let e=d();r(),A(e.filteredPhones==null?null:e.filteredPhones.label)}}function Pe(t,s){if(t&1&&(i(0,"p-inputgroup")(1,"p-inputgroup-addon"),f(2,"i"),n(),f(3,"input",30),n(),f(4,"p-divider")),t&2){let e=s.$implicit,p=d();r(2),_(p.PrimeIcons.PHONE),r(),l("ngModel",e)}}var T=class t{_authService=v(J);_customMessageService=v(Y);stateHttpService=v(pe);layout="grid";PrimeIcons=q;commentary=new ee("");userState;transactionalCode;options=["list","grid"];phones=[];filteredPhones=null;isVisible=!1;constructor(){}ngOnInit(){this.findStatesByCedula(),this.loadPhones()}findStatesByCedula(){this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({next:s=>{this.userState=s[0],this.userState?.comentario&&(this.commentary.patchValue(this.userState.comentario),this.commentary.disable())}})}filterPhones(s){this.createReview(),this.filteredPhones=this.phones.find(e=>e.actividad.toLowerCase()===s.toLowerCase()),this.isVisible=!0}loadPhones(){this.phones=[{label:"Contacto Curso en L\xEDnea",actividad:"curso",phones:["0939426332"]},{label:"Contacto Levantamiento Gasolineras Abril",actividad:"levantamiento_abril",phones:["0967028974"]},{label:"Contacto Levantamiento Promoci\xF3n Mayo",actividad:"levantamiento_mayo",phones:["0982094520"]},{label:"Preservaci\xF3n",actividad:"preservacion_abril",phones:["0983289118"]},{label:"Preservaci\xF3n",actividad:"preservacion_mayo",phones:["0983289118"]}]}createCommentary(){this.stateHttpService.createCommentary(this._authService.auth.identification,this.commentary.value).subscribe({next:s=>{this.findStatesByCedula()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}createReview(){this.stateHttpService.createReview(this._authService.auth.identification).subscribe({next:s=>{this.transactionalCode=s.transactionalCode}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-state"]],decls:18,vars:9,consts:[["op",""],["header",""],["severity","error"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[3,"modal","visible","closable"],[2,"font-size","16px"],["label","Cerrar",3,"onClick"],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-2","flex","flex-col","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],["size","small","label","Informaci\xF3n",3,"click","icon","outlined"],[3,"severity"],[1,"md:col-span-5","flex","flex-col","gap-2"],["severity","error","size","large"],[1,"ml-2","mr-2"],["label","Aqu\xED","severity","danger",1,"m-4",3,"onClick","rounded","raised"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","secondary"],[1,"ml-1"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-4"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["label","Reportar Inconvenientes en esta Actividad Aqu\xED",3,"onClick","icon","raised","rounded"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"],["pInputText","","readonly","",3,"ngModel"]],template:function(e,p){if(e&1){let a=S();w(0,Ie,68,25)(1,Ee,2,0,"p-message",2),i(2,"p-popover",null,0)(4,"div",3),o(5," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),n()(),i(6,"p-dialog",4),w(7,we,2,1,"ng-template",null,1,z),i(9,"p",5),o(10," Para ser atendido por favor mencionar el siguiente c\xF3digo "),n(),i(11,"p"),o(12,"C\xF3digo de verificaci\xF3n: "),i(13,"b"),o(14),n()(),O(15,Pe,5,3,null,null,R),i(17,"p-button",6),g("onClick",function(){return c(a),m(p.isVisible=!1)}),n()()}e&2&&(h(p.userState?0:-1),r(),h(p.userState?-1:1),r(5),y(H(8,_e)),l("modal",!0)("visible",p.isVisible)("closable",!1),r(8),A(p.transactionalCode),r(),L(p.filteredPhones==null?null:p.filteredPhones.phones))},dependencies:[ie,W,X,te,Z,Q,K,ae,ne,le,oe,ue,me,re],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:240px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var gt=[{path:"",component:T}];export{gt as default};
