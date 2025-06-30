import{a as re}from"./chunk-PLI4MILN.js";import{a as Je}from"./chunk-WSK4CE6J.js";import{a as et,b as tt}from"./chunk-LUSM3YRN.js";import{a as De}from"./chunk-MJNRKRDT.js";import{a as it,b as nt}from"./chunk-XU7JHKFL.js";import{a as Ne}from"./chunk-UIVIJWLM.js";import{a as Ye}from"./chunk-AF3X7UOH.js";import{a as Qe}from"./chunk-RJ6ODVGJ.js";import{a as Xe}from"./chunk-JT4BACVD.js";import{a as Be}from"./chunk-VGCEVFP6.js";import"./chunk-WCGJ44IN.js";import{b as Ke,d as qe,e as He,j as Ge,l as Ue,o as je,u as Ze,v as We}from"./chunk-UOAM75BV.js";import{Ba as ae,Ca as Le,Ea as le,Ha as Fe,J as te,K as z,La as ze,Ma as Pe,Pa as Re,ca as ke,ea as Q,fa as K,ga as me,ja as _e,na as Me,qa as Ae,ra as $e,ua as ie,va as ne,wa as oe}from"./chunk-RIYVHW5G.js";import{$b as D,Ab as c,Bb as A,C as fe,Cb as O,Db as E,Eb as $,Fb as C,Gb as b,Hb as r,Ib as be,Jb as Ce,Jc as J,Kc as Ee,Lb as I,Lc as Y,Mb as F,Mc as Ve,Nb as g,Nc as X,Oa as ve,Ob as y,P as ge,Q as U,Qc as ee,Rb as P,Sa as a,Sb as d,Tb as V,Ub as v,Vb as Ie,W as L,Wb as we,Xa as ce,Xb as Se,Yb as Te,Zb as Z,_b as ue,ac as W,ba as ye,ca as _,da as h,db as q,ga as N,hb as j,ib as m,kc as k,na as w,oa as xe,pb as x,qb as p,rb as T,sa as H,sc as f,tb as G,tc as R,ub as M,vb as B,vc as de,wc as Oe,zb as s}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var mt=["removeicon"],_t=["*"];function ht(t,l){if(t&1){let e=C();s(0,"img",4),b("error",function(n){_(e);let o=r();return h(o.imageError(n))}),c()}if(t&2){let e=r();p("src",e.image,ve)("alt",e.alt)}}function ft(t,l){if(t&1&&A(0,"span",6),t&2){let e=r(2);M(e.icon),p("ngClass","p-chip-icon"),x("data-pc-section","icon")}}function gt(t,l){if(t&1&&m(0,ft,1,4,"span",5),t&2){let e=r();p("ngIf",e.icon)}}function yt(t,l){if(t&1&&(s(0,"div",7),d(1),c()),t&2){let e=r();x("data-pc-section","label"),a(),V(e.label)}}function xt(t,l){if(t&1){let e=C();s(0,"span",11),b("click",function(n){_(e);let o=r(3);return h(o.close(n))})("keydown",function(n){_(e);let o=r(3);return h(o.onKeydown(n))}),c()}if(t&2){let e=r(3);M(e.removeIcon),p("ngClass","p-chip-remove-icon"),x("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function vt(t,l){if(t&1){let e=C();s(0,"TimesCircleIcon",12),b("click",function(n){_(e);let o=r(3);return h(o.close(n))})("keydown",function(n){_(e);let o=r(3);return h(o.onKeydown(n))}),c()}if(t&2){let e=r(3);M("p-chip-remove-icon"),x("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function bt(t,l){if(t&1&&(O(0),m(1,xt,1,5,"span",9)(2,vt,1,4,"TimesCircleIcon",10),E()),t&2){let e=r(2);a(),p("ngIf",e.removeIcon),a(),p("ngIf",!e.removeIcon)}}function Ct(t,l){}function It(t,l){t&1&&m(0,Ct,0,0,"ng-template")}function wt(t,l){if(t&1){let e=C();s(0,"span",13),b("click",function(n){_(e);let o=r(2);return h(o.close(n))})("keydown",function(n){_(e);let o=r(2);return h(o.onKeydown(n))}),m(1,It,1,0,null,14),c()}if(t&2){let e=r(2);x("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),a(),p("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function St(t,l){if(t&1&&(O(0),m(1,bt,3,2,"ng-container",3)(2,wt,2,3,"span",8),E()),t&2){let e=r();a(),p("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),a(),p("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Tt=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,Ot={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ot=(()=>{class t extends ae{name="chip";theme=Tt;classes=Ot;static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var lt=(()=>{class t extends le{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new w;onImageError=new w;visible=!0;get removeAriaLabel(){return this.config.getTranslation(oe.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=L(ot);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(t)))(n||t)}})();static \u0275cmp=q({type:t,selectors:[["p-chip"]],contentQueries:function(i,n,o){if(i&1&&(I(o,mt,4),I(o,ie,4)),i&2){let u;g(u=y())&&(n.removeIconTemplate=u.first),g(u=y())&&(n.templates=u)}},hostVars:9,hostBindings:function(i,n){i&2&&(x("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),G(n.style),M(n.containerClass()),T("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",f],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Z([ot]),j,ye],ngContentSelectors:_t,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(be(),Ce(0),m(1,ht,1,2,"img",1)(2,gt,1,1,"ng-template",null,0,k)(4,yt,2,2,"div",2)(5,St,3,2,"ng-container",3)),i&2){let o=P(3);a(),p("ngIf",n.image)("ngIfElse",o),a(3),p("ngIf",n.label),a(),p("ngIf",n.removable)}},dependencies:[ee,J,Y,X,re,ne],encapsulation:2,changeDetection:0})}return t})();var Et=["item"],Vt=["empty"],kt=["header"],Mt=["footer"],At=["selecteditem"],$t=["group"],Lt=["loader"],Ft=["removeicon"],Dt=["loadingicon"],zt=["clearicon"],Bt=["dropdownicon"],Pt=["container"],Rt=["focusInput"],Kt=["multiIn"],qt=["multiContainer"],Qt=["ddBtn"],Nt=["items"],Ht=["scroller"],Gt=["overlay"],Ut=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),pt=t=>({$implicit:t}),jt=()=>({class:"p-autocomplete-chip-icon"}),pe=t=>({height:t}),st=(t,l)=>({$implicit:t,options:l}),Zt=t=>({options:t}),Wt=()=>({}),Jt=(t,l)=>({$implicit:t,index:l});function Yt(t,l){if(t&1){let e=C();s(0,"input",19,3),b("input",function(n){_(e);let o=r();return h(o.onInput(n))})("keydown",function(n){_(e);let o=r();return h(o.onKeyDown(n))})("change",function(n){_(e);let o=r();return h(o.onInputChange(n))})("focus",function(n){_(e);let o=r();return h(o.onInputFocus(n))})("blur",function(n){_(e);let o=r();return h(o.onInputBlur(n))})("paste",function(n){_(e);let o=r();return h(o.onInputPaste(n))})("keyup",function(n){_(e);let o=r();return h(o.onInputKeyUp(n))}),c()}if(t&2){let e,i=r();M(i.inputStyleClass),p("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),x("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Xt(t,l){if(t&1){let e=C();s(0,"TimesIcon",22),b("click",function(){_(e);let n=r(2);return h(n.clear())}),c()}t&2&&(p("styleClass","p-autocomplete-clear-icon"),x("aria-hidden",!0))}function ei(t,l){}function ti(t,l){t&1&&m(0,ei,0,0,"ng-template")}function ii(t,l){if(t&1){let e=C();s(0,"span",23),b("click",function(){_(e);let n=r(2);return h(n.clear())}),m(1,ti,1,0,null,24),c()}if(t&2){let e=r(2);x("aria-hidden",!0),a(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ni(t,l){if(t&1&&(O(0),m(1,Xt,1,2,"TimesIcon",20)(2,ii,2,2,"span",21),E()),t&2){let e=r();a(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),a(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function oi(t,l){t&1&&$(0)}function ai(t,l){if(t&1){let e=C();s(0,"span",33),b("click",function(n){_(e);let o=r(3).index,u=r(2);return h(u.readonly?"":u.removeOption(n,o))}),A(1,"TimesCircleIcon",34),c()}t&2&&(a(),p("styleClass","p-autocomplete-chip-icon"),x("aria-hidden",!0))}function li(t,l){t&1&&(O(0),m(1,ai,2,2,"ng-template",null,6,k),E())}function ri(t,l){if(t&1&&(s(0,"p-chip",32),m(1,li,3,0,"ng-container",15),c()),t&2){let e=r().$implicit,i=r(2);p("label",i.getOptionLabel(e))("removable",!0),a(),p("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function pi(t,l){}function si(t,l){t&1&&m(0,pi,0,0,"ng-template")}function ci(t,l){if(t&1&&(s(0,"span"),m(1,si,1,0,null,30),c()),t&2){let e=r(3);x("aria-hidden",!0),a(),p("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)("ngTemplateOutletContext",ue(3,jt))}}function ui(t,l){if(t&1&&(s(0,"li",29,5),m(2,oi,1,0,"ng-container",30)(3,ri,2,3,"p-chip",31)(4,ci,2,4,"span",15),c()),t&2){let e=l.$implicit,i=l.index,n=r(2);p("ngClass",D(10,Ut,n.focusedMultipleOptionIndex()===i)),x("id",n.id+"_multiple_option_"+i)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),a(2),p("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",D(12,pt,e)),a(),p("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate),a(),p("ngIf",n.removeIconTemplate||n._removeIconTemplate)}}function di(t,l){if(t&1){let e=C();s(0,"ul",25,4),b("focus",function(n){_(e);let o=r();return h(o.onMultipleContainerFocus(n))})("blur",function(n){_(e);let o=r();return h(o.onMultipleContainerBlur(n))})("keydown",function(n){_(e);let o=r();return h(o.onMultipleContainerKeyDown(n))}),m(2,ui,5,14,"li",26),s(3,"li",27)(4,"input",28,3),b("input",function(n){_(e);let o=r();return h(o.onInput(n))})("keydown",function(n){_(e);let o=r();return h(o.onKeyDown(n))})("change",function(n){_(e);let o=r();return h(o.onInputChange(n))})("focus",function(n){_(e);let o=r();return h(o.onInputFocus(n))})("blur",function(n){_(e);let o=r();return h(o.onInputBlur(n))})("paste",function(n){_(e);let o=r();return h(o.onInputPaste(n))})("keyup",function(n){_(e);let o=r();return h(o.onInputKeyUp(n))}),c()()()}if(t&2){let e,i=r();p("ngClass",i.inputMultipleClass)("tabindex",-1),x("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),a(2),p("ngForOf",i.modelValue()),a(2),M(i.inputStyleClass),p("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),x("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function mi(t,l){t&1&&A(0,"SpinnerIcon",37),t&2&&(p("styleClass","p-autocomplete-loader")("spin",!0),x("aria-hidden",!0))}function _i(t,l){}function hi(t,l){t&1&&m(0,_i,0,0,"ng-template")}function fi(t,l){if(t&1&&(s(0,"span",38),m(1,hi,1,0,null,24),c()),t&2){let e=r(2);x("aria-hidden",!0),a(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function gi(t,l){if(t&1&&(O(0),m(1,mi,1,3,"SpinnerIcon",35)(2,fi,2,2,"span",36),E()),t&2){let e=r();a(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),a(),p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function yi(t,l){if(t&1&&A(0,"span",41),t&2){let e=r(2);p("ngClass",e.dropdownIcon),x("aria-hidden",!0)}}function xi(t,l){t&1&&A(0,"ChevronDownIcon")}function vi(t,l){}function bi(t,l){t&1&&m(0,vi,0,0,"ng-template")}function Ci(t,l){if(t&1&&(O(0),m(1,xi,1,0,"ChevronDownIcon",15)(2,bi,1,0,null,24),E()),t&2){let e=r(2);a(),p("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),a(),p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ii(t,l){if(t&1){let e=C();s(0,"button",39,7),b("click",function(n){_(e);let o=r();return h(o.handleDropdownClick(n))}),m(2,yi,1,2,"span",40)(3,Ci,3,2,"ng-container",15),c()}if(t&2){let e=r();p("disabled",e.disabled),x("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),a(2),p("ngIf",e.dropdownIcon),a(),p("ngIf",!e.dropdownIcon)}}function wi(t,l){t&1&&$(0)}function Si(t,l){t&1&&$(0)}function Ti(t,l){if(t&1&&m(0,Si,1,0,"ng-container",30),t&2){let e=l.$implicit,i=l.options;r(2);let n=P(6);p("ngTemplateOutlet",n)("ngTemplateOutletContext",W(2,st,e,i))}}function Oi(t,l){t&1&&$(0)}function Ei(t,l){if(t&1&&m(0,Oi,1,0,"ng-container",30),t&2){let e=l.options,i=r(4);p("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",D(2,Zt,e))}}function Vi(t,l){t&1&&(O(0),m(1,Ei,1,4,"ng-template",null,10,k),E())}function ki(t,l){if(t&1){let e=C();s(0,"p-scroller",46,9),b("onLazyLoad",function(n){_(e);let o=r(2);return h(o.onLazyLoad.emit(n))}),m(2,Ti,1,5,"ng-template",null,2,k)(4,Vi,3,0,"ng-container",15),c()}if(t&2){let e=r(2);G(D(8,pe,e.scrollHeight)),p("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),a(4),p("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Mi(t,l){t&1&&$(0)}function Ai(t,l){if(t&1&&(O(0),m(1,Mi,1,0,"ng-container",30),E()),t&2){r();let e=P(6),i=r();a(),p("ngTemplateOutlet",e)("ngTemplateOutletContext",W(3,st,i.visibleOptions(),ue(2,Wt)))}}function $i(t,l){if(t&1&&(s(0,"span"),d(1),c()),t&2){let e=r(2).$implicit,i=r(3);a(),V(i.getOptionGroupLabel(e.optionGroup))}}function Li(t,l){t&1&&$(0)}function Fi(t,l){if(t&1&&(O(0),s(1,"li",50),m(2,$i,2,1,"span",15)(3,Li,1,0,"ng-container",30),c(),E()),t&2){let e=r(),i=e.$implicit,n=e.index,o=r().options,u=r(2);a(),p("ngStyle",D(5,pe,o.itemSize+"px")),x("id",u.id+"_"+u.getOptionIndex(n,o)),a(),p("ngIf",!u.groupTemplate),a(),p("ngTemplateOutlet",u.groupTemplate)("ngTemplateOutletContext",D(7,pt,i.optionGroup))}}function Di(t,l){if(t&1&&(s(0,"span"),d(1),c()),t&2){let e=r(2).$implicit,i=r(3);a(),V(i.getOptionLabel(e))}}function zi(t,l){t&1&&$(0)}function Bi(t,l){if(t&1){let e=C();O(0),s(1,"li",51),b("click",function(n){_(e);let o=r().$implicit,u=r(3);return h(u.onOptionSelect(n,o))})("mouseenter",function(n){_(e);let o=r().index,u=r().options,S=r(2);return h(S.onOptionMouseEnter(n,S.getOptionIndex(o,u)))}),m(2,Di,2,1,"span",15)(3,zi,1,0,"ng-container",30),c(),E()}if(t&2){let e=r(),i=e.$implicit,n=e.index,o=r().options,u=r(2);a(),p("ngStyle",D(12,pe,o.itemSize+"px"))("ngClass",u.optionClass(i,n,o)),x("id",u.id+"_"+u.getOptionIndex(n,o))("aria-label",u.getOptionLabel(i))("aria-selected",u.isSelected(i))("aria-disabled",u.isOptionDisabled(i))("data-p-focused",u.focusedOptionIndex()===u.getOptionIndex(n,o))("aria-setsize",u.ariaSetSize)("aria-posinset",u.getAriaPosInset(u.getOptionIndex(n,o))),a(),p("ngIf",!u.itemTemplate&&!u._itemTemplate),a(),p("ngTemplateOutlet",u.itemTemplate||u._itemTemplate)("ngTemplateOutletContext",W(14,Jt,i,o.getOptions?o.getOptions(n):n))}}function Pi(t,l){if(t&1&&m(0,Fi,4,9,"ng-container",15)(1,Bi,4,17,"ng-container",15),t&2){let e=l.$implicit,i=r(3);p("ngIf",i.isOptionGroup(e)),a(),p("ngIf",!i.isOptionGroup(e))}}function Ri(t,l){if(t&1&&(O(0),d(1),E()),t&2){let e=r(4);a(),v(" ",e.searchResultMessageText," ")}}function Ki(t,l){t&1&&$(0,null,12)}function qi(t,l){if(t&1&&(s(0,"li",52),m(1,Ri,2,1,"ng-container",53)(2,Ki,2,0,"ng-container",24),c()),t&2){let e=r().options,i=r(2);p("ngStyle",D(4,pe,e.itemSize+"px")),a(),p("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),a(),p("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function Qi(t,l){if(t&1&&(s(0,"ul",47,11),m(2,Pi,2,2,"ng-template",48)(3,qi,3,6,"li",49),c()),t&2){let e=l.$implicit,i=l.options,n=r(2);G(i.contentStyle),p("ngClass",i.contentStyleClass),x("id",n.id+"_list")("aria-label",n.listLabel),a(2),p("ngForOf",e),a(),p("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function Ni(t,l){t&1&&$(0)}function Hi(t,l){if(t&1&&(s(0,"div",42),m(1,wi,1,0,"ng-container",24),s(2,"div",43),m(3,ki,5,10,"p-scroller",44)(4,Ai,2,6,"ng-container",15),c(),m(5,Qi,4,7,"ng-template",null,8,k)(7,Ni,1,0,"ng-container",24),c(),s(8,"span",45),d(9),c()),t&2){let e=r();M(e.panelStyleClass),p("ngClass",e.panelClass)("ngStyle",e.panelStyle),a(),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),T("max-height",e.virtualScroll?"auto":e.scrollHeight),a(),p("ngIf",e.virtualScroll),a(),p("ngIf",!e.virtualScroll),a(3),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),a(2),v(" ",e.selectedMessageText," ")}}var Gi=({dt:t})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${t("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${t("autocomplete.dropdown.width")} + ${t("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("autocomplete.dropdown.width")};
    border-start-end-radius: ${t("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${t("autocomplete.dropdown.border.radius")};
    background: ${t("autocomplete.dropdown.background")};
    border: 1px solid ${t("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("autocomplete.dropdown.color")};
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${t("autocomplete.dropdown.hover.background")};
    border-color: ${t("autocomplete.dropdown.hover.border.color")};
    color: ${t("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${t("autocomplete.dropdown.active.background")};
    border-color: ${t("autocomplete.dropdown.active.border.color")};
    color: ${t("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${t("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${t("autocomplete.dropdown.focus.ring.width")} ${t("autocomplete.dropdown.focus.ring.style")} ${t("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${t("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${t("autocomplete.overlay.background")};
    color: ${t("autocomplete.overlay.color")};
    border: 1px solid ${t("autocomplete.overlay.border.color")};
    border-radius: ${t("autocomplete.overlay.border.radius")};
    box-shadow: ${t("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${t("autocomplete.list.gap")};
    padding: ${t("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("autocomplete.option.padding")};
    border: 0 none;
    color: ${t("autocomplete.option.color")};
    background: transparent;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")};
    border-radius: ${t("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${t("autocomplete.option.focus.background")};
    color: ${t("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${t("autocomplete.option.selected.background")};
    color: ${t("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${t("autocomplete.option.selected.focus.background")};
    color: ${t("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${t("autocomplete.option.group.padding")};
    color: ${t("autocomplete.option.group.color")};
    background: ${t("autocomplete.option.group.background")};
    font-weight: ${t("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${t("autocomplete.padding.y")} / 2) ${t("autocomplete.padding.x")};
    gap: calc(${t("autocomplete.padding.y")} / 2);
    color: ${t("autocomplete.color")};
    background: ${t("autocomplete.background")};
    border: 1px solid ${t("autocomplete.border.color")};
    border-radius: ${t("autocomplete.border.radius")};
    width: 100%;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
    box-shadow: ${t("autocomplete.focus.ring.shadow")};
    outline: ${t("autocomplete.focus.ring.width")} ${t("autocomplete.focus.ring.style")} ${t("autocomplete.focus.ring.color")};
    outline-offset: ${t("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${t("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${t("autocomplete.disabled.background")};
    color: ${t("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
    border-radius: ${t("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${t("autocomplete.chip.focus.background")};
    color: ${t("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${t("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${t("autocomplete.padding.x")};
    color: ${t("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${t("autocomplete.padding.x")} + ${t("autocomplete.dropdown.width")});
}

.p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
.p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
.p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
}

.p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}

.p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}`,Ui={root:{position:"relative"}},ji={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":(t.variant??(t.config.inputStyle()||t.config.inputVariant()))==="filled"}),chipItem:({instance:t,i:l})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===l}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:l,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(l),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(l)}),emptyMessage:"p-autocomplete-empty-message"},rt=(()=>{class t extends ae{name="autocomplete";theme=Gi;classes=ji;inlineStyles=Ui;static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(t)))(n||t)}})();static \u0275prov=U({token:t,factory:t.\u0275fac})}return t})();var Zi={provide:He,useExisting:ge(()=>he),multi:!0},he=(()=>{class t extends le{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant;fluid=!1;completeMethod=new w;onSelect=new w;onUnselect=new w;onFocus=new w;onBlur=new w;onDropdownClick=new w;onClear=new w;onKeyUp=new w;onShow=new w;onHide=new w;onLazyLoad=new w;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=L(Le);value;_suggestions=H(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=H(null);focusedMultipleOptionIndex=H(-1);focusedOptionIndex=H(-1);_componentStyle=L(rt);visibleOptions=de(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=de(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(n=>K(n,this.optionValue)===e):e;if(Q(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(i);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return Q(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(oe.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,n){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,n),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,Oe(()=>{this.filled=Q(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||Me("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,n,o)=>{i.push({optionGroup:n,group:!0,index:o});let u=this.getOptionGroupChildren(n);return u&&u.forEach(S=>i.push(S)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return _e(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?_e(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?K(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>me(i,this.getOptionValue(e),this.equalityKey())):!1:me(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&z(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(z(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let n=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL.nativeElement.value||""));n!==void 0&&(i=!0,!this.isSelected(n)&&this.onOptionSelect(e,n))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(ke(i.value)&&this.hasSelectedOption()?(z(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(Q(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),z(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,n=!0){let o=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],o])):this.updateModel(o),this.onSelect.emit({originalEvent:e,value:i}),n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let n=this.modelValue()[i],o=this.modelValue().filter((u,S)=>S!==i).map(u=>this.getOptionValue(u));this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:n}),z(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=te(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&z(this.inputEL.nativeElement),e&&z(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&z(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return Q(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?K(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?K(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?K(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?K(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=te(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=te(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(ce(Ae),ce(xe))};static \u0275cmp=q({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,n,o){if(i&1&&(I(o,Et,5),I(o,Vt,5),I(o,kt,5),I(o,Mt,5),I(o,At,5),I(o,$t,5),I(o,Lt,5),I(o,Ft,5),I(o,Dt,5),I(o,zt,5),I(o,Bt,5),I(o,ie,4)),i&2){let u;g(u=y())&&(n.itemTemplate=u.first),g(u=y())&&(n.emptyTemplate=u.first),g(u=y())&&(n.headerTemplate=u.first),g(u=y())&&(n.footerTemplate=u.first),g(u=y())&&(n.selectedItemTemplate=u.first),g(u=y())&&(n.groupTemplate=u.first),g(u=y())&&(n.loaderTemplate=u.first),g(u=y())&&(n.removeIconTemplate=u.first),g(u=y())&&(n.loadingIconTemplate=u.first),g(u=y())&&(n.clearIconTemplate=u.first),g(u=y())&&(n.dropdownIconTemplate=u.first),g(u=y())&&(n.templates=u)}},viewQuery:function(i,n){if(i&1&&(F(Pt,5),F(Rt,5),F(Kt,5),F(qt,5),F(Qt,5),F(Nt,5),F(Ht,5),F(Gt,5)),i&2){let o;g(o=y())&&(n.containerEL=o.first),g(o=y())&&(n.inputEL=o.first),g(o=y())&&(n.multiInputEl=o.first),g(o=y())&&(n.multiContainerEL=o.first),g(o=y())&&(n.dropdownButton=o.first),g(o=y())&&(n.itemsViewChild=o.first),g(o=y())&&(n.scroller=o.first),g(o=y())&&(n.overlayViewChild=o.first)}},inputs:{minLength:[2,"minLength","minLength",R],delay:[2,"delay","delay",R],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",f],disabled:[2,"disabled","disabled",f],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",f],virtualScroll:[2,"virtualScroll","virtualScroll",f],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",R],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>R(e,null)],name:"name",required:[2,"required","required",f],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",f],forceSelection:[2,"forceSelection","forceSelection",f],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",R],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",f],group:[2,"group","group",f],completeOnFocus:[2,"completeOnFocus","completeOnFocus",f],showClear:[2,"showClear","showClear",f],field:"field",dropdown:[2,"dropdown","dropdown",f],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",f],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",f],tabindex:[2,"tabindex","tabindex",R],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",f],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",f],selectOnFocus:[2,"selectOnFocus","selectOnFocus",f],searchLocale:[2,"searchLocale","searchLocale",f],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",f],typeahead:[2,"typeahead","typeahead",f],variant:"variant",fluid:[2,"fluid","fluid",f]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[Z([Zi,rt]),j],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1){let o=C();s(0,"div",13,0),b("click",function(S){return _(o),h(n.onContainerClick(S))}),m(2,Yt,2,25,"input",14)(3,ni,3,2,"ng-container",15)(4,di,6,26,"ul",16)(5,gi,3,2,"ng-container",15)(6,Ii,4,5,"button",17),s(7,"p-overlay",18,1),Te("visibleChange",function(S){return _(o),Se(n.overlayVisible,S)||(n.overlayVisible=S),h(S)}),b("onAnimationStart",function(S){return _(o),h(n.onOverlayAnimationStart(S))})("onHide",function(){return _(o),h(n.hide())}),m(9,Hi,10,11,"ng-template",null,2,k),c()()}i&2&&(M(n.styleClass),p("ngClass",n.rootClass)("ngStyle",n.style),a(2),p("ngIf",!n.multiple),a(),p("ngIf",n.filled&&!n.disabled&&n.showClear&&!n.loading),a(),p("ngIf",n.multiple),a(),p("ngIf",n.loading),a(),p("ngIf",n.dropdown),a(),we("visible",n.overlayVisible),p("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions))},dependencies:[ee,J,Ee,Y,X,Ve,et,Ye,Pe,tt,Fe,re,ze,Be,De,lt,ne],encapsulation:2,changeDetection:0})}return t})();function Wi(t,l){t&1&&d(0," asdasd ")}function Ji(t,l){if(t&1&&(s(0,"div",8)(1,"div"),d(2),c()()),t&2){let e=l.$implicit;a(2),Ie("",e.cedula," - ",e.nombres,"")}}function Yi(t,l){if(t&1&&(s(0,"div",9)(1,"p"),d(2,"# de actividades preservaci\xF3n en abril: "),s(3,"b"),d(4),c()(),s(5,"p"),d(6),c()(),s(7,"div",9)(8,"p"),d(9,"# de actividades preservaci\xF3n en mayo: "),s(10,"b"),d(11),c()(),s(12,"p"),d(13),c()()),t&2){let e=r(2);a(4),V(e.userState.cantidadA1),a(2),v("Meta: ",e.userState.metaA1,""),a(5),V(e.userState.cantidadA2),a(2),v("Meta: ",e.userState.metaA2,"")}}function Xi(t,l){if(t&1&&(s(0,"div",9)(1,"p"),d(2,"# de encuestas levantadas en digital en abril: "),s(3,"b"),d(4),c()()(),s(5,"div",9)(6,"p"),d(7,"# de encuestas levantadas en f\xEDsico en abril: "),s(8,"b"),d(9),c()()(),s(10,"div",9)(11,"p"),d(12,"# de encuestas levantadas en digital en mayo: "),s(13,"b"),d(14),c()()(),s(15,"div",9)(16,"p"),d(17,"# de encuestas levantadas en f\xEDsico en mayo: "),s(18,"b"),d(19),c()()(),s(20,"div",10)(21,"p"),d(22,"Meta Abril: "),s(23,"b"),d(24,"20"),c()()(),s(25,"div",10)(26,"p"),d(27,"Meta Mayo: "),s(28,"b"),d(29,"100"),c()()()),t&2){let e=r(2);a(4),V(e.userState.cantidadB1),a(5),V(e.userState.cantidadC1),a(5),V(e.userState.cantidadB2),a(5),V(e.userState.cantidadC2)}}function en(t,l){if(t&1&&(s(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"p"),d(5,"Preservaci\xF3n Abril"),c()(),s(6,"p-tag",24)(7,"div",25)(8,"span",26),d(9),c()()()()()(),s(10,"div",20)(11,"div",21)(12,"div",22)(13,"div",23)(14,"p"),d(15,"Preservaci\xF3n Mayo"),c()(),s(16,"p-tag",24)(17,"div",25)(18,"span",26),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadA1!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadA2!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function tn(t,l){if(t&1&&(s(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"p"),d(5,"Gasolineras Abril"),c()(),s(6,"p-tag",24)(7,"div",25)(8,"span",26),d(9),c()()()()()(),s(10,"div",20)(11,"div",21)(12,"div",22)(13,"div",23)(14,"p"),d(15,"Encuestas Tur\xEDsticas Mayo"),c()(),s(16,"p-tag",24)(17,"div",25)(18,"span",26),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function nn(t,l){if(t&1&&(s(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"p"),d(5,"Gasolineras Abril"),c()(),s(6,"p-tag",24)(7,"div",25)(8,"span",26),d(9),c()()()()()(),s(10,"div",20)(11,"div",21)(12,"div",22)(13,"div",23)(14,"p"),d(15,"Encuestas Tur\xEDsticas Mayo"),c()(),s(16,"p-tag",24)(17,"div",25)(18,"span",26),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function on(t,l){if(t&1&&(s(0,"div",20)(1,"div",21)(2,"div",22)(3,"div",23)(4,"p"),d(5,"Gasolineras Abril"),c()(),s(6,"p-tag",24)(7,"div",25)(8,"span",26),d(9),c()()()()()(),s(10,"div",20)(11,"div",21)(12,"div",22)(13,"div",23)(14,"p"),d(15,"Encuestas Tur\xEDsticas Mayo"),c()(),s(16,"p-tag",24)(17,"div",25)(18,"span",26),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),p("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),v(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function an(t,l){if(t&1){let e=C();s(0,"div",3)(1,"div",4)(2,"div",9)(3,"p")(4,"b"),d(5,"PROVINCIA:"),c(),d(6),c()(),s(7,"div",9)(8,"p")(9,"b"),d(10,"N\xDAMERO DE C\xC9DULA:"),c(),d(11),c()(),s(12,"div",10)(13,"p")(14,"b"),d(15,"APELLIDOS Y NOMBRES:"),c(),d(16),c()()(),A(17,"p-divider"),s(18,"div",4)(19,"div",9)(20,"p")(21,"b"),d(22,"DIRECCI\xD3N ZONAL:"),c(),d(23),c()(),s(24,"div",9)(25,"p")(26,"b"),d(27," ESTADO: "),c(),d(28),s(29,"p-button",11),b("click",function(n){_(e),r();let o=P(13);return h(o.toggle(n))}),c()()(),s(30,"div",10)(31,"p")(32,"b"),d(33,"ACTIVIDAD:"),c(),d(34),c()(),s(35,"div",12)(36,"h6"),d(37,"PROGRESO:"),c(),s(38,"p-tag",13),d(39),c()()(),A(40,"p-divider"),s(41,"div",14),m(42,Yi,14,4)(43,Xi,30,4),c()(),s(44,"div",15)(45,"div",4)(46,"div",16)(47,"p-message",17)(48,"h4"),d(49,"Para la recepci\xF3n de inconvenientes del Mecanismo Ecuatorianos en Acci\xF3n es del "),s(50,"b",18),d(51," 27 de junio al 09 de julio de 2025"),c()()()()()(),s(52,"div",19)(53,"div",20)(54,"div",21)(55,"div",22)(56,"div",23)(57,"p"),d(58,"Curso en l\xEDnea"),c()(),s(59,"p-tag",24)(60,"div",25)(61,"span",26),d(62),c()()()()()(),m(63,en,20,12)(64,tn,20,12)(65,nn,20,12)(66,on,20,12),c()}if(t&2){let e=r();a(6),v(" ",e.userState.provincia,""),a(5),v(" ",e.userState.cedula,""),a(5),v(" ",e.userState.nombres,""),a(7),v(" ",e.userState.direccionZonal,""),a(5),v(" ",e.userState.habilitado," (Unidad Registro Social) "),a(),p("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),a(5),v(" ",e.userState.actividad,""),a(4),p("severity",e.userState.cumple!="Completo"?"danger":"success"),a(),V(e.userState.cumple),a(3),B(e.userState.actividadA1||e.userState.actividadA2||e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?42:-1),a(),B(e.userState.actividadB1||e.userState.actividadB2||e.userState.actividad=="Levantamiento de informaci\xF3n"?43:-1),a(16),T("left",4,"px")("top",4,"px"),p("severity",e.userState.curso!="completa"?"danger":"success"),a(3),v(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),a(),B(e.userState.actividadA1||e.userState.actividadA2?63:-1),a(),B(e.userState.actividadB1||e.userState.actividadB2?64:-1),a(),B(!e.userState.actividadB1&&!e.userState.actividadB2&&e.userState.actividad=="Levantamiento de informaci\xF3n"?65:-1),a(),B(!e.userState.actividadA1&&!e.userState.actividadA2&&e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?66:-1)}}var se=class t{_authService=L(qe);_customMessageService=L(Ke);stateHttpService=L(it);layout="grid";PrimeIcons=$e;identification=new Ue("");userState;userStates=[];options=["list","grid"];constructor(){this.identification.valueChanges.pipe(fe(500)).subscribe(l=>{l?.cedula?this.userState=l:this.userState=null})}ngOnInit(){}findStatesByCedula(l){this.userState=null,this.stateHttpService.findStatesByIdentification(l.query).subscribe({next:e=>{this.userStates=e,e&&e.length==1&&(this.userState=e[0]),e.length==0&&this._customMessageService.showError({summary:"Beneficiario no encontrado",detail:"Por favor intente de nuevo"})}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=q({type:t,selectors:[["app-state"]],decls:16,vars:3,consts:[["selectedItem",""],["item",""],["op",""],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-4","flex","flex-col","gap-2"],["field","nombres",3,"completeMethod","formControl","suggestions"],[1,"flex","flex-col","gap-4","w-[25rem]","text-justify"],[1,"flex","items-center","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],[1,"md:col-span-6","flex","flex-col","gap-2"],["size","small","label","Haga click aqu\xED",3,"click","icon","outlined"],[1,"md:col-span-2","flex","flex-col","gap-2"],[3,"severity"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6","text-center"],[1,"flex","flex-col","gap-6","w-full"],[1,"md:col-span-12","flex","flex-col","gap-2"],["size","large","severity","error"],[1,"ml-1"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-4"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"]],template:function(e,i){if(e&1){let n=C();s(0,"p-fluid")(1,"div",3)(2,"div",4)(3,"div",5)(4,"label"),d(5,"Ingrese el n\xFAmero de c\xE9dula o nombre del beneficiario:"),c(),s(6,"p-autocomplete",6),b("completeMethod",function(u){return _(n),h(i.findStatesByCedula(u))}),m(7,Wi,1,0,"ng-template",null,0,k)(9,Ji,3,2,"ng-template",null,1,k),c()()()()(),m(11,an,67,22),s(12,"p-popover",null,2)(14,"div",7),d(15," Habilitado significa que cumple con los criterios generales establecidos en el Art\xEDculo 2 del Decreto Presidencial 578 los cuales son; una edad comprendida entre 30 y 64 a\xF1os con 11 meses, que no se encuentren aportando al Instituto Ecuatoriano de Seguridad Social, que no sean beneficiarios de ninguna transferencia monetaria pagada por el Ministerio de Inclusi\xF3n Econ\xF3mica y Social; que no conste como fallecido; y que no tenga antecedentes penales "),c()()}e&2&&(a(6),p("formControl",i.identification)("suggestions",i.userStates),a(5),B(i.userState?11:-1))},dependencies:[Ze,Ge,Ne,We,je,he,Je,Qe,Re,nt,Xe],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:200px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var yo=[{path:"",component:se}];export{yo as default};
