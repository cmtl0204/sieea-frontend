import{a as oe}from"./chunk-LQLX3PEZ.js";import{a as pe,b as le}from"./chunk-XU7JHKFL.js";import{a as Q}from"./chunk-UIVIJWLM.js";import{a as re}from"./chunk-AF3X7UOH.js";import{a as K}from"./chunk-RJ6ODVGJ.js";import{a as ae}from"./chunk-JT4BACVD.js";import"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Y,d as J,f as W,j as X,l as ee,m as te,u as ie,v as ne}from"./chunk-UOAM75BV.js";import{Ba as P,Ea as D,Pa as Z,ra as z,va as U}from"./chunk-RIYVHW5G.js";import{Ab as i,Bb as h,Fb as N,Gb as k,Hb as c,Ib as _,Jb as E,Q as b,Qc as w,Rb as R,Sa as o,Sb as n,Tb as T,Ub as s,Vb as H,W as u,Zb as M,_b as L,ca as A,da as B,db as f,ga as m,hb as S,ib as C,kc as q,pb as I,qb as d,rb as g,sb as V,tb as v,ub as x,vb as y,wb as $,xb as G,yb as O,zb as r}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var ve=["*"],xe=({dt:e})=>`
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
    padding: ${e("inputgroup.addon.padding")};
    background: ${e("inputgroup.addon.background")};
    color: ${e("inputgroup.addon.color")};
    border-block-start: 1px solid ${e("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${e("inputgroup.addon.border.color")};
    min-width: ${e("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${e("inputgroup.addon.border.color")};
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
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
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
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}
`,ye={root:({props:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},se=(()=>{class e extends P{name="inputgroup";theme=xe;classes=ye;static \u0275fac=(()=>{let t;return function(p){return(t||(t=m(e)))(p||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ue=(()=>{class e extends D{style;styleClass;_componentStyle=u(se);static \u0275fac=(()=>{let t;return function(p){return(t||(t=m(e)))(p||e)}})();static \u0275cmp=f({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(a,p){a&2&&(I("data-pc-name","inputgroup"),v(p.style),x(p.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[M([se]),S],ngContentSelectors:ve,decls:1,vars:0,template:function(a,p){a&1&&(_(),E(0))},dependencies:[w,U],encapsulation:2})}return e})();var he=["*"],be={root:"p-inputgroupaddon"},ce=(()=>{class e extends P{name="inputgroupaddon";classes=be;static \u0275fac=(()=>{let t;return function(p){return(t||(t=m(e)))(p||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),me=(()=>{class e extends D{style;styleClass;_componentStyle=u(ce);get hostStyle(){return this.style}static \u0275fac=(()=>{let t;return function(p){return(t||(t=m(e)))(p||e)}})();static \u0275cmp=f({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(a,p){a&2&&(I("data-pc-name","inputgroupaddon"),v(p.hostStyle),x(p.styleClass),V("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[M([ce]),S],ngContentSelectors:he,decls:1,vars:0,template:function(a,p){a&1&&(_(),E(0))},dependencies:[w],encapsulation:2})}return e})();var Se=()=>({width:"30rem"});function Ce(e,l){if(e&1&&(r(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),n(5,`Preservaci\xF3n Abril
`),i()(),r(6,"p-tag",20)(7,"div",21)(8,"span",22),n(9),i()()()()()(),r(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),n(15,`Preservaci\xF3n Mayo
`),i()(),r(16,"p-tag",20)(17,"div",21)(18,"span",22),n(19),i()()()()()()),e&2){let t=c(2);o(6),g("left",4,"px")("top",4,"px"),d("severity",t.userState.actividadA1!="completa"?"danger":"success"),o(3),s(" ",t.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),o(7),g("left",4,"px")("top",4,"px"),d("severity",t.userState.actividadA2!="completa"?"danger":"success"),o(3),s(" ",t.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function Ie(e,l){if(e&1&&(r(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),n(5,`Gasolineras Abril
`),i()(),r(6,"p-tag",20)(7,"div",21)(8,"span",22),n(9),i()()()()()(),r(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),n(15,`Encuestas Tur\xEDsticas Mayo
`),i()(),r(16,"p-tag",20)(17,"div",21)(18,"span",22),n(19),i()()()()()()),e&2){let t=c(2);o(6),g("left",4,"px")("top",4,"px"),d("severity",t.userState.actividadB1!="completa"?"danger":"success"),o(3),s(" ",t.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),o(7),g("left",4,"px")("top",4,"px"),d("severity",t.userState.actividadB2!="completa"?"danger":"success"),o(3),s(" ",t.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function _e(e,l){if(e&1){let t=N();r(0,"div",6)(1,"div",7)(2,"div",8)(3,"h6"),n(4,"DIRECCI\xD3N ZONAL:"),i(),n(5),i(),r(6,"div",8)(7,"h6"),n(8,"PROVINCIA:"),i(),n(9),i(),r(10,"div",8)(11,"h6"),n(12,"N\xDAMERO DE C\xC9DULA:"),i(),n(13),i(),r(14,"div",9)(15,"h6"),n(16,"APELLIDOS Y NOMBRES:"),i(),n(17),i(),r(18,"div",9)(19,"h6"),n(20,"Estado (Unidad Registro Social):"),i(),n(21),r(22,"p-button",10),k("click",function(p){A(t),c();let j=R(3);return B(j.toggle(p))}),i()(),r(23,"div",9)(24,"h6"),n(25,"ACTIVIDAD:"),i(),n(26),i(),r(27,"div",8)(28,"h6"),n(29,"PROGRESO:"),i(),r(30,"p-tag",11),n(31),i()(),r(32,"div",8)(33,"h6"),n(34,"CUENTA BANCARIA:"),i(),n(35),i()()(),r(36,"div",12)(37,"div",7)(38,"div",13),h(39,"p-message",14),i()()(),r(40,"div",15)(41,"div",16)(42,"div",17)(43,"div",18)(44,"div",19)(45,"p"),n(46,`Curso en l\xEDnea
`),i()(),r(47,"p-tag",20)(48,"div",21)(49,"span",22),n(50),i()()()()()(),C(51,Ce,20,12)(52,Ie,20,12),i()}if(e&2){let t=c();o(5),s(" ",t.userState.direccionZonal," "),o(4),s(" ",t.userState.provincia," "),o(4),s(" ",t.userState.cedula," "),o(4),s(" ",t.userState.nombres," "),o(4),s(" ",t.userState.habilitado," "),o(),d("icon",t.PrimeIcons.INFO_CIRCLE)("outlined",!0),o(4),s(" ",t.userState.actividad," "),o(4),d("severity",t.userState.cumple!="Completo"?"danger":"success"),o(),T(t.userState.cumple),o(4),H(" ",t._authService.additionalInformation.nombreCorto," ",t._authService.additionalInformation.numeroCuenta," "),o(12),g("left",4,"px")("top",4,"px"),d("severity",t.userState.curso!="completa"?"danger":"success"),o(3),s(" ",t.userState.curso=="completa"?"Cumple":"No Cumple"," "),o(),y(t.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?51:-1),o(),y(t.userState.actividad=="Levantamiento de informaci\xF3n"?52:-1)}}function Ee(e,l){e&1&&(r(0,"p-message",2),n(1,"No cuenta con registro de su actividad"),i())}function Me(e,l){if(e&1&&(r(0,"h4"),n(1),i()),e&2){let t=c();o(),T(t.filteredPhones==null?null:t.filteredPhones.label)}}function we(e,l){if(e&1&&(r(0,"p-inputgroup")(1,"p-inputgroup-addon"),h(2,"i"),i(),h(3,"input",23),i(),h(4,"p-divider")),e&2){let t=l.$implicit,a=c();o(2),x(a.PrimeIcons.PHONE),o(),d("ngModel",t)}}var F=class e{_authService=u(J);_customMessageService=u(Y);stateHttpService=u(pe);layout="grid";PrimeIcons=z;commentary=new ee("");userState;options=["list","grid"];phones=[];filteredPhones=null;isVisible=!1;constructor(){}ngOnInit(){this.findStatesByCedula(),this.loadPhones()}findStatesByCedula(){this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({next:l=>{this.userState=l[0],this.userState?.comentario&&(this.commentary.patchValue(this.userState.comentario),this.commentary.disable())}})}filterPhones(l){this.createReview(),this.filteredPhones=this.phones.find(t=>t.actividad.toLowerCase()===l.toLowerCase()),this.isVisible=!0}loadPhones(){this.phones=[{label:"Contacto Curso en L\xEDnea",actividad:"curso",phones:["0939426332"]},{label:"Contacto Levantamiento Gasolineras Abril",actividad:"levantamiento_abril",phones:["0967028974"]},{label:"Contacto Levantamiento Promoci\xF3n Mayo",actividad:"levantamiento_mayo",phones:["0982094520"]},{label:"Preservaci\xF3n",actividad:"preservacion_abril",phones:["0983289118"]},{label:"Preservaci\xF3n",actividad:"preservacion_mayo",phones:["0983289118"]}]}createCommentary(){this.stateHttpService.createCommentary(this._authService.auth.identification,this.commentary.value).subscribe({next:l=>{this.findStatesByCedula()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}createReview(){this.stateHttpService.createReview(this._authService.auth.identification).subscribe()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-state"]],decls:12,vars:8,consts:[["op",""],["header",""],["severity","error"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[3,"modal","visible","closable"],["label","Cerrar",3,"onClick"],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-2","flex","flex-col","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],["size","small","label","Haga click aqu\xED",3,"click","icon","outlined"],[3,"severity"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","error"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-3"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"],["pInputText","","readonly","",3,"ngModel"]],template:function(t,a){if(t&1){let p=N();C(0,_e,53,20)(1,Ee,2,0,"p-message",2),r(2,"p-popover",null,0)(4,"div",3),n(5," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),i()(),r(6,"p-dialog",4),C(7,Me,2,1,"ng-template",null,1,q),G(9,we,5,3,null,null,$),r(11,"p-button",5),k("onClick",function(){return A(p),B(a.isVisible=!1)}),i()()}t&2&&(y(a.userState?0:-1),o(),y(a.userState?-1:1),o(5),v(L(7,Se)),d("modal",!0)("visible",a.isVisible)("closable",!1),o(3),O(a.filteredPhones==null?null:a.filteredPhones.phones))},dependencies:[ie,W,X,te,Z,Q,K,ae,ne,le,oe,ue,me,re],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:200px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var gt=[{path:"",component:F}];export{gt as default};
