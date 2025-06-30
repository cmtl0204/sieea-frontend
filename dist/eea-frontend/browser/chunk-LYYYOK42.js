import{a as oe}from"./chunk-LQLX3PEZ.js";import{a as pe,b as le}from"./chunk-XU7JHKFL.js";import{a as Q}from"./chunk-UIVIJWLM.js";import{a as re}from"./chunk-AF3X7UOH.js";import{a as K}from"./chunk-RJ6ODVGJ.js";import{a as ae}from"./chunk-JT4BACVD.js";import"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Y,d as J,f as W,j as X,l as ee,m as te,u as ie,v as ne}from"./chunk-UOAM75BV.js";import{Ba as A,Ea as N,Pa as Z,ra as z,va as U}from"./chunk-RIYVHW5G.js";import{Ab as i,Bb as P,Fb as _,Gb as g,Hb as d,Ib as M,Jb as F,Q as S,Qc as k,Rb as $,Sa as n,Sb as r,Tb as B,Ub as c,Vb as G,W as u,Zb as D,_b as H,ca as m,da as f,db as x,ga as v,hb as I,ib as E,kc as q,pb as w,qb as l,rb as C,sb as j,tb as b,ub as y,vb as h,wb as R,xb as O,yb as L,zb as o}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var ve=["*"],xe=({dt:t})=>`
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
`,Ce={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},se=(()=>{class t extends A{name="inputgroup";theme=xe;classes=Ce;static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var ce=(()=>{class t extends N{style;styleClass;_componentStyle=u(se);static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,a){p&2&&(w("data-pc-name","inputgroup"),b(a.style),y(a.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[D([se]),I],ngContentSelectors:ve,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[k,U],encapsulation:2})}return t})();var be=["*"],ye={root:"p-inputgroupaddon"},ue=(()=>{class t extends A{name="inputgroupaddon";classes=ye;static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),me=(()=>{class t extends N{style;styleClass;_componentStyle=u(ue);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,a){p&2&&(w("data-pc-name","inputgroupaddon"),b(a.hostStyle),y(a.styleClass),j("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[D([ue]),I],ngContentSelectors:be,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[k],encapsulation:2})}return t})();var he=()=>({width:"30rem"});function _e(t,s){if(t&1){let e=_();o(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"p"),r(5,"Preservaci\xF3n Abril "),o(6,"p-button",21),g("onClick",function(){m(e);let a=d(2);return f(a.filterPhones("preservacion_abril"))}),i()()(),o(7,"p-tag",22)(8,"div",23)(9,"span",24),r(10),i()()()()()(),o(11,"div",17)(12,"div",18)(13,"div",19)(14,"div",20)(15,"p"),r(16,"Preservaci\xF3n Mayo "),o(17,"p-button",21),g("onClick",function(){m(e);let a=d(2);return f(a.filterPhones("preservacion_mayo"))}),i()()(),o(18,"p-tag",22)(19,"div",23)(20,"span",24),r(21),i()()()()()()}if(t&2){let e=d(2);n(6),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),n(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA1!="completa"?"danger":"success"),n(3),c(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),n(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),n(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA2!="completa"?"danger":"success"),n(3),c(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function Se(t,s){if(t&1){let e=_();o(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"p"),r(5,"Gasolineras Abril "),o(6,"p-button",21),g("onClick",function(){m(e);let a=d(2);return f(a.filterPhones("levantamiento_abril"))}),i()()(),o(7,"p-tag",22)(8,"div",23)(9,"span",24),r(10),i()()()()()(),o(11,"div",17)(12,"div",18)(13,"div",19)(14,"div",20)(15,"p"),r(16,"Encuestas Tur\xEDsticas Mayo "),o(17,"p-button",21),g("onClick",function(){m(e);let a=d(2);return f(a.filterPhones("levantamiento_mayo"))}),i()()(),o(18,"p-tag",22)(19,"div",23)(20,"span",24),r(21),i()()()()()()}if(t&2){let e=d(2);n(6),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),n(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB1!="completa"?"danger":"success"),n(3),c(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),n(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),n(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB2!="completa"?"danger":"success"),n(3),c(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Ie(t,s){if(t&1){let e=_();o(0,"div",6)(1,"div",7)(2,"div",8)(3,"h6"),r(4,"DIRECCI\xD3N ZONAL:"),i(),r(5),i(),o(6,"div",8)(7,"h6"),r(8,"PROVINCIA:"),i(),r(9),i(),o(10,"div",8)(11,"h6"),r(12,"N\xDAMERO DE C\xC9DULA:"),i(),r(13),i(),o(14,"div",9)(15,"h6"),r(16,"APELLIDOS Y NOMBRES:"),i(),r(17),i(),o(18,"div",9)(19,"h6"),r(20,"Estado (Unidad Registro Social):"),i(),r(21),o(22,"p-button",10),g("click",function(a){m(e),d();let T=$(3);return f(T.toggle(a))}),i()(),o(23,"div",9)(24,"h6"),r(25,"ACTIVIDAD:"),i(),r(26),i(),o(27,"div",8)(28,"h6"),r(29,"PROGRESO:"),i(),o(30,"p-tag",11),r(31),i()(),o(32,"div",8)(33,"h6"),r(34,"CUENTA BANCARIA:"),i(),r(35),i()()(),o(36,"div",12)(37,"div",7)(38,"div",13)(39,"p-message",14)(40,"h4"),r(41,"Estimado beneficiario, contactese con nosotros desde el "),o(42,"b",15),r(43," 30 de junio al 09 de julio de 2025"),i(),r(44,", de Lunes a Viernes en el horario de atenci\xF3n, 08:00 a 16:30 "),i()()()()(),o(45,"div",16)(46,"div",17)(47,"div",18)(48,"div",19)(49,"div",20)(50,"p"),r(51,"Curso en l\xEDnea "),o(52,"p-button",21),g("onClick",function(){m(e);let a=d();return f(a.filterPhones("curso"))}),i()()(),o(53,"p-tag",22)(54,"div",23)(55,"span",24),r(56),i()()()()()(),E(57,_e,22,16)(58,Se,22,16),i()}if(t&2){let e=d();n(5),c(" ",e.userState.direccionZonal," "),n(4),c(" ",e.userState.provincia," "),n(4),c(" ",e.userState.cedula," "),n(4),c(" ",e.userState.nombres," "),n(4),c(" ",e.userState.habilitado," "),n(),l("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),n(4),c(" ",e.userState.actividad," "),n(4),l("severity",e.userState.cumple!="Completo"?"danger":"success"),n(),B(e.userState.cumple),n(4),G(" ",e._authService.additionalInformation.nombreCorto," ",e._authService.additionalInformation.numeroCuenta," "),n(17),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),n(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.curso!="completa"?"danger":"success"),n(3),c(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),n(),h(e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?57:-1),n(),h(e.userState.actividad=="Levantamiento de informaci\xF3n"?58:-1)}}function Ee(t,s){t&1&&(o(0,"p-message",2),r(1,"No cuenta con registro de su actividad"),i())}function we(t,s){if(t&1&&(o(0,"h4"),r(1),i()),t&2){let e=d();n(),B(e.filteredPhones==null?null:e.filteredPhones.label)}}function Pe(t,s){if(t&1&&(o(0,"p-inputgroup")(1,"p-inputgroup-addon"),P(2,"i"),i(),P(3,"input",25),i(),P(4,"p-divider")),t&2){let e=s.$implicit,p=d();n(2),y(p.PrimeIcons.PHONE),n(),l("ngModel",e)}}var V=class t{_authService=u(J);_customMessageService=u(Y);stateHttpService=u(pe);layout="grid";PrimeIcons=z;commentary=new ee("");userState;options=["list","grid"];phones=[];filteredPhones=null;isVisible=!1;constructor(){}ngOnInit(){this.findStatesByCedula(),this.loadPhones()}findStatesByCedula(){this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({next:s=>{this.userState=s[0],this.userState?.comentario&&(this.commentary.patchValue(this.userState.comentario),this.commentary.disable())}})}filterPhones(s){this.createReview(),this.filteredPhones=this.phones.find(e=>e.actividad.toLowerCase()===s.toLowerCase()),this.isVisible=!0}loadPhones(){this.phones=[{label:"Contacto Curso en L\xEDnea",actividad:"curso",phones:["0939426332"]},{label:"Contacto Levantamiento Gasolineras Abril",actividad:"levantamiento_abril",phones:["0967028974"]},{label:"Contacto Levantamiento Promoci\xF3n Mayo",actividad:"levantamiento_mayo",phones:["0982094520"]},{label:"Preservaci\xF3n",actividad:"preservacion_abril",phones:["0983289118"]},{label:"Preservaci\xF3n",actividad:"preservacion_mayo",phones:["0983289118"]}]}createCommentary(){this.stateHttpService.createCommentary(this._authService.auth.identification,this.commentary.value).subscribe({next:s=>{this.findStatesByCedula()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}createReview(){this.stateHttpService.createReview(this._authService.auth.identification).subscribe()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-state"]],decls:12,vars:8,consts:[["op",""],["header",""],["severity","error"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[3,"modal","visible","closable"],["label","Cerrar",3,"onClick"],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-2","flex","flex-col","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],["size","small","label","Haga click aqu\xED",3,"click","icon","outlined"],[3,"severity"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","error"],[1,"ml-1"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-3"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["label","Repotar Inconvenientes",3,"onClick","icon","raised"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"],["pInputText","","readonly","",3,"ngModel"]],template:function(e,p){if(e&1){let a=_();E(0,Ie,59,22)(1,Ee,2,0,"p-message",2),o(2,"p-popover",null,0)(4,"div",3),r(5," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),i()(),o(6,"p-dialog",4),E(7,we,2,1,"ng-template",null,1,q),O(9,Pe,5,3,null,null,R),o(11,"p-button",5),g("onClick",function(){return m(a),f(p.isVisible=!1)}),i()()}e&2&&(h(p.userState?0:-1),n(),h(p.userState?-1:1),n(5),b(H(7,he)),l("modal",!0)("visible",p.isVisible)("closable",!1),n(3),L(p.filteredPhones==null?null:p.filteredPhones.phones))},dependencies:[ie,W,X,te,Z,Q,K,ae,ne,le,oe,ce,me,re],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:200px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var gt=[{path:"",component:V}];export{gt as default};
