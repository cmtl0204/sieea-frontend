import{a as oe}from"./chunk-LQLX3PEZ.js";import{a as pe,b as le}from"./chunk-XU7JHKFL.js";import{a as Q}from"./chunk-UIVIJWLM.js";import{a as re}from"./chunk-AF3X7UOH.js";import{a as K}from"./chunk-RJ6ODVGJ.js";import{a as ae}from"./chunk-JT4BACVD.js";import"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Y,d as J,f as W,j as X,l as ee,m as te,u as ie,v as ne}from"./chunk-UOAM75BV.js";import{Ba as D,Ea as V,Pa as Z,ra as q,va as U}from"./chunk-RIYVHW5G.js";import{Ab as i,Bb as P,Fb as h,Gb as f,Hb as d,Ib as M,Jb as F,Q as S,Qc as A,Rb as $,Sa as r,Sb as o,Tb as T,Ub as c,Vb as G,W as g,Zb as k,_b as H,ca as u,da as m,db as x,ga as v,hb as I,ib as E,kc as z,pb as w,qb as l,rb as C,sb as j,tb as b,ub as _,vb as y,wb as R,xb as O,yb as L,zb as n}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var ve=["*"],xe=({dt:t})=>`
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
`,Ce={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},se=(()=>{class t extends D{name="inputgroup";theme=xe;classes=Ce;static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var ce=(()=>{class t extends V{style;styleClass;_componentStyle=g(se);static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(p,a){p&2&&(w("data-pc-name","inputgroup"),b(a.style),_(a.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[k([se]),I],ngContentSelectors:ve,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[A,U],encapsulation:2})}return t})();var be=["*"],_e={root:"p-inputgroupaddon"},ue=(()=>{class t extends D{name="inputgroupaddon";classes=_e;static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),me=(()=>{class t extends V{style;styleClass;_componentStyle=g(ue);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(a){return(e||(e=v(t)))(a||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(p,a){p&2&&(w("data-pc-name","inputgroupaddon"),b(a.hostStyle),_(a.styleClass),j("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[k([ue]),I],ngContentSelectors:be,decls:1,vars:0,template:function(p,a){p&1&&(M(),F(0))},dependencies:[A],encapsulation:2})}return t})();var ye=()=>({width:"30rem"});function he(t,s){if(t&1){let e=h();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"p"),o(5,"Preservaci\xF3n Abril "),n(6,"p-button",25),f("onClick",function(){u(e);let a=d(2);return m(a.filterPhones("preservacion_abril"))}),i()()(),n(7,"p-tag",26)(8,"div",27)(9,"span",28),o(10),i()()()()()(),n(11,"div",21)(12,"div",22)(13,"div",23)(14,"div",24)(15,"p"),o(16,"Preservaci\xF3n Mayo "),n(17,"p-button",25),f("onClick",function(){u(e);let a=d(2);return m(a.filterPhones("preservacion_mayo"))}),i()()(),n(18,"p-tag",26)(19,"div",27)(20,"span",28),o(21),i()()()()()()}if(t&2){let e=d(2);r(6),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),r(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA1!="completa"?"danger":"success"),r(3),c(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),r(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),r(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadA2!="completa"?"danger":"success"),r(3),c(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function Se(t,s){if(t&1){let e=h();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"p"),o(5,"Gasolineras Abril "),n(6,"p-button",25),f("onClick",function(){u(e);let a=d(2);return m(a.filterPhones("levantamiento_abril"))}),i()()(),n(7,"p-tag",26)(8,"div",27)(9,"span",28),o(10),i()()()()()(),n(11,"div",21)(12,"div",22)(13,"div",23)(14,"div",24)(15,"p"),o(16,"Encuestas Tur\xEDsticas Mayo "),n(17,"p-button",25),f("onClick",function(){u(e);let a=d(2);return m(a.filterPhones("levantamiento_mayo"))}),i()()(),n(18,"p-tag",26)(19,"div",27)(20,"span",28),o(21),i()()()()()()}if(t&2){let e=d(2);r(6),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),r(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB1!="completa"?"danger":"success"),r(3),c(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),r(7),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),r(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.actividadB2!="completa"?"danger":"success"),r(3),c(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Ie(t,s){if(t&1){let e=h();n(0,"div",6)(1,"div",7)(2,"div",8)(3,"h6"),o(4,"DIRECCI\xD3N ZONAL:"),i(),o(5),i(),n(6,"div",8)(7,"h6"),o(8,"PROVINCIA:"),i(),o(9),i(),n(10,"div",8)(11,"h6"),o(12,"N\xDAMERO DE C\xC9DULA:"),i(),o(13),i(),n(14,"div",9)(15,"h6"),o(16,"APELLIDOS Y NOMBRES:"),i(),o(17),i(),n(18,"div",9)(19,"h6"),o(20,"Estado (Unidad Registro Social):"),i(),o(21),n(22,"p-button",10),f("click",function(a){u(e),d();let B=$(3);return m(B.toggle(a))}),i()(),n(23,"div",9)(24,"h6"),o(25,"ACTIVIDAD:"),i(),o(26),i(),n(27,"div",8)(28,"h6"),o(29,"PROGRESO:"),i(),n(30,"p-tag",11),o(31),i()(),n(32,"div",8)(33,"h6"),o(34,"CUENTA BANCARIA:"),i(),o(35),i(),n(36,"div",12)(37,"p-message",13)(38,"span",14)(39,"b"),o(40,"Atenci\xF3n:"),i(),o(41," Actualice su cuenta bancaria en el siguiente enlace "),i(),n(42,"p-button",15),f("onClick",function(){u(e);let a=d();return m(a.linkToEEA())}),o(43," Actualizar "),i()()()()(),n(44,"div",16)(45,"div",7)(46,"div",17)(47,"p-message",18)(48,"h4"),o(49,"Estimado beneficiario, contactese con nosotros desde el "),n(50,"b",19),o(51," 30 de junio al 09 de julio de 2025"),i(),o(52,", de Lunes a Viernes en el horario de atenci\xF3n, 08:00 a 16:30 "),i()()()()(),n(53,"div",20)(54,"div",21)(55,"div",22)(56,"div",23)(57,"div",24)(58,"p"),o(59,"Curso en l\xEDnea "),n(60,"p-button",25),f("onClick",function(){u(e);let a=d();return m(a.filterPhones("curso"))}),i()()(),n(61,"p-tag",26)(62,"div",27)(63,"span",28),o(64),i()()()()()(),E(65,he,22,16)(66,Se,22,16),i()}if(t&2){let e=d();r(5),c(" ",e.userState.direccionZonal," "),r(4),c(" ",e.userState.provincia," "),r(4),c(" ",e.userState.cedula," "),r(4),c(" ",e.userState.nombres," "),r(4),c(" ",e.userState.habilitado," "),r(),l("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),r(4),c(" ",e.userState.actividad," "),r(4),l("severity",e.userState.cumple!="Completo"?"danger":"success"),r(),T(e.userState.cumple),r(4),G(" ",e._authService.additionalInformation.nombreCorto," ",e._authService.additionalInformation.numeroCuenta," "),r(7),l("raised",!0),r(18),l("icon",e.PrimeIcons.INFO_CIRCLE)("raised",!0),r(),C("left",4,"px")("top",4,"px"),l("severity",e.userState.curso!="completa"?"danger":"success"),r(3),c(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),r(),y(e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?65:-1),r(),y(e.userState.actividad=="Levantamiento de informaci\xF3n"?66:-1)}}function Ee(t,s){t&1&&(n(0,"p-message",2),o(1,"No cuenta con registro de su actividad"),i())}function we(t,s){if(t&1&&(n(0,"h4"),o(1),i()),t&2){let e=d();r(),T(e.filteredPhones==null?null:e.filteredPhones.label)}}function Pe(t,s){if(t&1&&(n(0,"p-inputgroup")(1,"p-inputgroup-addon"),P(2,"i"),i(),P(3,"input",29),i(),P(4,"p-divider")),t&2){let e=s.$implicit,p=d();r(2),_(p.PrimeIcons.PHONE),r(),l("ngModel",e)}}var N=class t{_authService=g(J);_customMessageService=g(Y);stateHttpService=g(pe);layout="grid";PrimeIcons=q;commentary=new ee("");userState;options=["list","grid"];phones=[];filteredPhones=null;isVisible=!1;constructor(){}ngOnInit(){this.findStatesByCedula(),this.loadPhones()}findStatesByCedula(){this.stateHttpService.findStatesByIdentification(this._authService.auth.identification).subscribe({next:s=>{this.userState=s[0],this.userState?.comentario&&(this.commentary.patchValue(this.userState.comentario),this.commentary.disable())}})}filterPhones(s){this.createReview(),this.filteredPhones=this.phones.find(e=>e.actividad.toLowerCase()===s.toLowerCase()),this.isVisible=!0}loadPhones(){this.phones=[{label:"Contacto Curso en L\xEDnea",actividad:"curso",phones:["0939426332"]},{label:"Contacto Levantamiento Gasolineras Abril",actividad:"levantamiento_abril",phones:["0967028974"]},{label:"Contacto Levantamiento Promoci\xF3n Mayo",actividad:"levantamiento_mayo",phones:["0982094520"]},{label:"Preservaci\xF3n",actividad:"preservacion_abril",phones:["0983289118"]},{label:"Preservaci\xF3n",actividad:"preservacion_mayo",phones:["0983289118"]}]}createCommentary(){this.stateHttpService.createCommentary(this._authService.auth.identification,this.commentary.value).subscribe({next:s=>{this.findStatesByCedula()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}createReview(){this.stateHttpService.createReview(this._authService.auth.identification).subscribe()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-state"]],decls:12,vars:8,consts:[["op",""],["header",""],["severity","error"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[3,"modal","visible","closable"],["label","Cerrar",3,"onClick"],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-2","flex","flex-col","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],["size","small","label","Haga click aqu\xED",3,"click","icon","outlined"],[3,"severity"],[1,"md:col-span-5","flex","flex-col","gap-2"],["severity","error","size","large"],[1,"ml-2","mr-2"],["severity","danger",3,"onClick","raised"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","error"],[1,"ml-1"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-3"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["label","Repotar Inconvenientes",3,"onClick","icon","raised"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"],["pInputText","","readonly","",3,"ngModel"]],template:function(e,p){if(e&1){let a=h();E(0,Ie,67,23)(1,Ee,2,0,"p-message",2),n(2,"p-popover",null,0)(4,"div",3),o(5," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),i()(),n(6,"p-dialog",4),E(7,we,2,1,"ng-template",null,1,z),O(9,Pe,5,3,null,null,R),n(11,"p-button",5),f("onClick",function(){return u(a),m(p.isVisible=!1)}),i()()}e&2&&(y(p.userState?0:-1),r(),y(p.userState?-1:1),r(5),b(H(7,ye)),l("modal",!0)("visible",p.isVisible)("closable",!1),r(3),L(p.filteredPhones==null?null:p.filteredPhones.phones))},dependencies:[ie,W,X,te,Z,Q,K,ae,ne,le,oe,ce,me,re],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:200px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var gt=[{path:"",component:N}];export{gt as default};
