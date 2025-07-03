import{a as oe}from"./chunk-LQLX3PEZ.js";import{a as pe,b as le}from"./chunk-XU7JHKFL.js";import{a as Q}from"./chunk-UIVIJWLM.js";import{a as re}from"./chunk-AF3X7UOH.js";import{a as K}from"./chunk-RJ6ODVGJ.js";import{a as ae}from"./chunk-JT4BACVD.js";import"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Y,d as J,f as W,j as X,l as ee,m as te,u as ie,v as ne}from"./chunk-UOAM75BV.js";import{Ba as k,Ea as V,Pa as Z,ra as z,va as U}from"./chunk-RIYVHW5G.js";import{Ab as i,Bb as f,Fb as S,Gb as g,Hb as d,Ib as M,Jb as F,Q as I,Qc as D,Rb as $,Sa as o,Sb as r,Tb as T,Ub as u,Vb as G,W as v,Zb as A,_b as H,ca as c,da as m,db as C,ga as x,hb as E,ib as w,kc as q,pb as P,qb as l,rb as b,sb as j,tb as y,ub as _,vb as h,wb as R,xb as O,yb as L,zb as n}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var ve=["*"],xe=({dt:t})=>`
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
`,Ce={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},se=(()=>{class t extends k{name="inputgroup";theme=xe;classes=Ce;static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ue=(()=>{class t extends V{style;styleClass;_componentStyle=v(se);static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,a){p&2&&(P("data-pc-name","inputgroup"),y(a.style),_(a.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[A([se]),E],ngContentSelectors:ve,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[D,U],encapsulation:2})}return t})();var be=["*"],ye={root:"p-inputgroupaddon"},ce=(()=>{class t extends k{name="inputgroupaddon";classes=ye;static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),me=(()=>{class t extends V{style;styleClass;_componentStyle=v(ce);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(a){return(e||(e=x(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,a){p&2&&(P("data-pc-name","inputgroupaddon"),y(a.hostStyle),_(a.styleClass),j("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[A([ce]),E],ngContentSelectors:be,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[D],encapsulation:2})}return t})();var _e=()=>({width:"30rem"});function he(t,s){if(t&1){let e=S();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"p"),r(5,"Preservaci\xF3n Abril "),f(6,"p-divider"),n(7,"p-button",25),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("preservacion_abril"))}),i()()(),n(8,"p-tag",26)(9,"div",27)(10,"span",28),r(11),i()()()()()(),n(12,"div",21)(13,"div",22)(14,"div",23)(15,"div",24)(16,"p"),r(17,"Preservaci\xF3n Mayo "),f(18,"p-divider"),n(19,"p-button",25),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("preservacion_mayo"))}),i()()(),n(20,"p-tag",26)(21,"div",27)(22,"span",28),r(23),i()()()()()()}if(t&2){let e=d(2);o(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),o(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA1!="completa"?"danger":"success"),o(3),u(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),o(8),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),o(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA2!="completa"?"danger":"success"),o(3),u(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function Se(t,s){if(t&1){let e=S();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"p"),r(5,"Gasolineras Abril "),f(6,"p-divider"),n(7,"p-button",25),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("levantamiento_abril"))}),i()()(),n(8,"p-tag",26)(9,"div",27)(10,"span",28),r(11),i()()()()()(),n(12,"div",21)(13,"div",22)(14,"div",23)(15,"div",24)(16,"p"),r(17,"Encuestas Tur\xEDsticas Mayo "),f(18,"p-divider"),n(19,"p-button",25),g("onClick",function(){c(e);let a=d(2);return m(a.filterPhones("levantamiento_mayo"))}),i()()(),n(20,"p-tag",26)(21,"div",27)(22,"span",28),r(23),i()()()()()()}if(t&2){let e=d(2);o(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),o(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB1!="completa"?"danger":"success"),o(3),u(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),o(8),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),o(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB2!="completa"?"danger":"success"),o(3),u(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Ie(t,s){if(t&1){let e=S();n(0,"div",6)(1,"div",7)(2,"div",8)(3,"h6"),r(4,"DIRECCI\xD3N ZONAL:"),i(),r(5),i(),n(6,"div",8)(7,"h6"),r(8,"PROVINCIA:"),i(),r(9),i(),n(10,"div",8)(11,"h6"),r(12,"N\xDAMERO DE C\xC9DULA:"),i(),r(13),i(),n(14,"div",9)(15,"h6"),r(16,"APELLIDOS Y NOMBRES:"),i(),r(17),i(),n(18,"div",9)(19,"h6"),r(20,"Estado (Unidad Registro Social):"),i(),n(21,"p"),r(22),n(23,"p-button",10),g("click",function(a){c(e),d();let B=$(3);return m(B.toggle(a))}),i()()(),n(24,"div",9)(25,"h6"),r(26,"ACTIVIDAD:"),i(),r(27),i(),n(28,"div",8)(29,"h6"),r(30,"PROGRESO:"),i(),n(31,"p-tag",11),r(32),i()(),n(33,"div",8)(34,"h6"),r(35,"CUENTA BANCARIA:"),i(),r(36),i(),n(37,"div",12)(38,"p-message",13)(39,"span",14)(40,"b"),r(41,"Atenci\xF3n:"),i(),r(42," Si su cuenta bancaria es incorrecta actualice "),n(43,"p-button",15),g("onClick",function(){c(e);let a=d();return m(a.linkToEEA())}),i()()()()()(),n(44,"div",16)(45,"div",7)(46,"div",17)(47,"p-message",18)(48,"h4"),r(49,"Hemos creado esta plataforma para receptar sus inconvenientes. Atenci\xF3n desde el "),n(50,"b",19),r(51," 30 de junio al 09 de julio de 2025"),i(),r(52,", de lunes a viernes en el horario de atenci\xF3n de 08:00 a 16:30. "),i()()()()(),n(53,"div",20)(54,"div",21)(55,"div",22)(56,"div",23)(57,"div",24)(58,"p"),r(59,"Curso en l\xEDnea "),f(60,"p-divider"),n(61,"p-button",25),g("onClick",function(){c(e);let a=d();return m(a.filterPhones("curso"))}),i()()(),n(62,"p-tag",26)(63,"div",27)(64,"span",28),r(65),i()()()()()(),w(66,he,24,18)(67,Se,24,18),i()}if(t&2){let e=d();o(5),u(" ",e.userState.direccionZonal," "),o(4),u(" ",e.userState.provincia," "),o(4),u(" ",e.userState.cedula," "),o(4),u(" ",e.userState.nombres," "),o(5),u(" ",e.userState.habilitado," "),o(),l("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),o(4),u(" ",e.userState.actividad," "),o(4),l("severity",e.userState.cumple!="Completo"?"danger":"success"),o(),T(e.userState.cumple),o(4),G(" ",e._authService.additionalInformation.nombreCorto," ",e._authService.additionalInformation.numeroCuenta," "),o(7),l("rounded",!0)("raised",!0),o(18),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0)("rounded",!0),o(),b("left",4,"px")("top",4,"px"),l("severity",e.userState.curso!="completa"?"danger":"success"),o(3),u(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),o(),h(e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?66:-1),o(),h(e.userState.actividad=="Levantamiento de informaci\xF3n"?67:-1)}}function Ee(t,s){t&1&&(n(0,"p-message",2),r(1,"No cuenta con registro de su actividad"),i())}function we(t,s){if(t&1&&(n(0,"h4"),r(1),i()),t&2){let e=d();o(),T(e.filteredPhones==null?null:e.filteredPhones.label)}}function Pe(t,s){if(t&1&&(n(0,"p-inputgroup")(1,"p-inputgroup-addon"),f(2,"i"),i(),f(3,"input",29),i(),f(4,"p-divider")),t&2){let e=s.$implicit,p=d();o(2),_(p.PrimeIcons.PHONE),o(),l("ngModel",e)}}var N=class t{_authService=v(J);_customMessageService=v(Y);stateHttpService=v(pe);layout="grid";PrimeIcons=z;commentary=new ee("");userState;options=["list","grid"];phones=[];filteredPhones=null;isVisible=!1;constructor(){}ngOnInit(){this.findStatesByCedula(),this.loadPhones()}findStatesByCedula(){this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({next:s=>{this.userState=s[0],this.userState?.comentario&&(this.commentary.patchValue(this.userState.comentario),this.commentary.disable())}})}filterPhones(s){this.createReview(),this.filteredPhones=this.phones.find(e=>e.actividad.toLowerCase()===s.toLowerCase()),this.isVisible=!0}loadPhones(){this.phones=[{label:"Contacto Curso en L\xEDnea",actividad:"curso",phones:["0939426332"]},{label:"Contacto Levantamiento Gasolineras Abril",actividad:"levantamiento_abril",phones:["0967028974"]},{label:"Contacto Levantamiento Promoci\xF3n Mayo",actividad:"levantamiento_mayo",phones:["0982094520"]},{label:"Preservaci\xF3n",actividad:"preservacion_abril",phones:["0983289118"]},{label:"Preservaci\xF3n",actividad:"preservacion_mayo",phones:["0983289118"]}]}createCommentary(){this.stateHttpService.createCommentary(this._authService.auth.identification,this.commentary.value).subscribe({next:s=>{this.findStatesByCedula()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}createReview(){this.stateHttpService.createReview(this._authService.auth.identification).subscribe()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-state"]],decls:12,vars:8,consts:[["op",""],["header",""],["severity","error"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[3,"modal","visible","closable"],["label","Cerrar",3,"onClick"],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-2","flex","flex-col","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],["size","small","label","Informaci\xF3n",3,"click","icon","outlined"],[3,"severity"],[1,"md:col-span-5","flex","flex-col","gap-2"],["severity","error","size","large"],[1,"ml-2","mr-2"],["label","Aqu\xED","severity","danger",1,"m-4",3,"onClick","rounded","raised"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","secondary"],[1,"ml-1"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-4"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["label","Reportar Inconvenientes en esta Actividad Aqu\xED",3,"onClick","icon","raised","rounded"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"],["pInputText","","readonly","",3,"ngModel"]],template:function(e,p){if(e&1){let a=S();w(0,Ie,68,25)(1,Ee,2,0,"p-message",2),n(2,"p-popover",null,0)(4,"div",3),r(5," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),i()(),n(6,"p-dialog",4),w(7,we,2,1,"ng-template",null,1,q),O(9,Pe,5,3,null,null,R),n(11,"p-button",5),g("onClick",function(){return c(a),m(p.isVisible=!1)}),i()()}e&2&&(h(p.userState?0:-1),o(),h(p.userState?-1:1),o(5),y(H(7,_e)),l("modal",!0)("visible",p.isVisible)("closable",!1),o(3),L(p.filteredPhones==null?null:p.filteredPhones.phones))},dependencies:[ie,W,X,te,Z,Q,K,ae,ne,le,oe,ue,me,re],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:240px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var gt=[{path:"",component:N}];export{gt as default};
