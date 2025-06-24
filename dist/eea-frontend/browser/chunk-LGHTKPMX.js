import{a as _e}from"./chunk-UDRSI7DE.js";import{a as ht}from"./chunk-M3VOP6AQ.js";import{a as ft,b as gt}from"./chunk-6AO65JS7.js";import{a as _t}from"./chunk-R225FPPY.js";import{a as Xe,b as lt}from"./chunk-OUXJAEWE.js";import{b as fe}from"./chunk-76Q2DMNE.js";import{b as Ye,c as Je,f as et,h as ot}from"./chunk-WPQXIZOW.js";import{a as yt}from"./chunk-AJW56AIC.js";import{a as rt}from"./chunk-SY6DWHVJ.js";import{a as tt}from"./chunk-4TEKTWDI.js";import{c as Be,d as Ce,f as ue,g as de,h as Ie}from"./chunk-WCGJ44IN.js";import{b as nt,d as at,e as st,j as pt,l as ct,o as ut,u as dt,v as mt}from"./chunk-PIIO7FP2.js";import{B as Qe,Ba as ie,Ca as We,Ea as oe,F as He,Ga as it,J,K as P,S as we,Z as qe,_ as Ne,ca as Ue,ea as X,fa as q,ga as Se,ja as Te,na as je,qa as me,ra as Ge,u as Ke,ua as ee,va as te,wa as he,xa as Ze}from"./chunk-BKM7E45K.js";import{$b as M,Ab as c,Bb as $,C as Ee,Cb as k,Db as E,Eb as F,Fb as C,Gb as x,Hb as r,Ib as re,Jb as se,Jc as G,Kc as Re,Lb as I,Lc as Z,Mb as D,Mc as pe,Nb as g,Nc as W,Oa as Me,Ob as y,P as Ve,Q as N,Qc as Y,Ra as Le,Rb as Q,Sa as a,Sb as d,Sc as ce,Tb as V,Ub as b,Vb as $e,W as O,Wb as Fe,Xa as ve,Xb as De,Yb as ze,Zb as j,_b as xe,ac as H,ba as Ae,ca as h,da as _,db as B,ga as R,hb as U,ib as m,kc as L,na as w,oa as le,pb as v,qb as s,rb as T,sa as ne,sc as f,tb as ae,tc as z,ub as A,vb as K,vc as be,wc as Pe,zb as p}from"./chunk-5MZ4X5ZA.js";import"./chunk-ACKELEN3.js";var Et=["removeicon"],Vt=["*"];function At(t,l){if(t&1){let e=C();p(0,"img",4),x("error",function(o){h(e);let n=r();return _(n.imageError(o))}),c()}if(t&2){let e=r();s("src",e.image,Me)("alt",e.alt)}}function Mt(t,l){if(t&1&&$(0,"span",6),t&2){let e=r(2);A(e.icon),s("ngClass","p-chip-icon"),v("data-pc-section","icon")}}function Lt(t,l){if(t&1&&m(0,Mt,1,4,"span",5),t&2){let e=r();s("ngIf",e.icon)}}function $t(t,l){if(t&1&&(p(0,"div",7),d(1),c()),t&2){let e=r();v("data-pc-section","label"),a(),V(e.label)}}function Ft(t,l){if(t&1){let e=C();p(0,"span",11),x("click",function(o){h(e);let n=r(3);return _(n.close(o))})("keydown",function(o){h(e);let n=r(3);return _(n.onKeydown(o))}),c()}if(t&2){let e=r(3);A(e.removeIcon),s("ngClass","p-chip-remove-icon"),v("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Dt(t,l){if(t&1){let e=C();p(0,"TimesCircleIcon",12),x("click",function(o){h(e);let n=r(3);return _(n.close(o))})("keydown",function(o){h(e);let n=r(3);return _(n.onKeydown(o))}),c()}if(t&2){let e=r(3);A("p-chip-remove-icon"),v("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function zt(t,l){if(t&1&&(k(0),m(1,Ft,1,5,"span",9)(2,Dt,1,4,"TimesCircleIcon",10),E()),t&2){let e=r(2);a(),s("ngIf",e.removeIcon),a(),s("ngIf",!e.removeIcon)}}function Pt(t,l){}function Rt(t,l){t&1&&m(0,Pt,0,0,"ng-template")}function Bt(t,l){if(t&1){let e=C();p(0,"span",13),x("click",function(o){h(e);let n=r(2);return _(n.close(o))})("keydown",function(o){h(e);let n=r(2);return _(n.onKeydown(o))}),m(1,Rt,1,0,null,14),c()}if(t&2){let e=r(2);v("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),a(),s("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Kt(t,l){if(t&1&&(k(0),m(1,zt,3,2,"ng-container",3)(2,Bt,2,3,"span",8),E()),t&2){let e=r();a(),s("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),a(),s("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Qt=({dt:t})=>`
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
`,Ht={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},vt=(()=>{class t extends ie{name="chip";theme=Qt;classes=Ht;static \u0275fac=(()=>{let e;return function(o){return(e||(e=R(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var It=(()=>{class t extends oe{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new w;onImageError=new w;visible=!0;get removeAriaLabel(){return this.config.getTranslation(he.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=O(vt);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=R(t)))(o||t)}})();static \u0275cmp=B({type:t,selectors:[["p-chip"]],contentQueries:function(i,o,n){if(i&1&&(I(n,Et,4),I(n,ee,4)),i&2){let u;g(u=y())&&(o.removeIconTemplate=u.first),g(u=y())&&(o.templates=u)}},hostVars:9,hostBindings:function(i,o){i&2&&(v("data-pc-name","chip")("aria-label",o.label)("data-pc-section","root"),ae(o.style),A(o.containerClass()),T("display",!o.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",f],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[j([vt]),U,Ae],ngContentSelectors:Vt,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,o){if(i&1&&(re(),se(0),m(1,At,1,2,"img",1)(2,Lt,1,1,"ng-template",null,0,L)(4,$t,2,2,"div",2)(5,Kt,3,2,"ng-container",3)),i&2){let n=Q(3);a(),s("ngIf",o.image)("ngIfElse",n),a(3),s("ngIf",o.label),a(),s("ngIf",o.removable)}},dependencies:[Y,G,Z,W,_e,te],encapsulation:2,changeDetection:0})}return t})();var qt=["item"],Nt=["empty"],Ut=["header"],jt=["footer"],Gt=["selecteditem"],Zt=["group"],Wt=["loader"],Yt=["removeicon"],Jt=["loadingicon"],Xt=["clearicon"],ei=["dropdownicon"],ti=["container"],ii=["focusInput"],oi=["multiIn"],ni=["multiContainer"],ai=["ddBtn"],li=["items"],ri=["scroller"],si=["overlay"],pi=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),St=t=>({$implicit:t}),ci=()=>({class:"p-autocomplete-chip-icon"}),ge=t=>({height:t}),Tt=(t,l)=>({$implicit:t,options:l}),ui=t=>({options:t}),di=()=>({}),mi=(t,l)=>({$implicit:t,index:l});function hi(t,l){if(t&1){let e=C();p(0,"input",19,3),x("input",function(o){h(e);let n=r();return _(n.onInput(o))})("keydown",function(o){h(e);let n=r();return _(n.onKeyDown(o))})("change",function(o){h(e);let n=r();return _(n.onInputChange(o))})("focus",function(o){h(e);let n=r();return _(n.onInputFocus(o))})("blur",function(o){h(e);let n=r();return _(n.onInputBlur(o))})("paste",function(o){h(e);let n=r();return _(n.onInputPaste(o))})("keyup",function(o){h(e);let n=r();return _(n.onInputKeyUp(o))}),c()}if(t&2){let e,i=r();A(i.inputStyleClass),s("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),v("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function _i(t,l){if(t&1){let e=C();p(0,"TimesIcon",22),x("click",function(){h(e);let o=r(2);return _(o.clear())}),c()}t&2&&(s("styleClass","p-autocomplete-clear-icon"),v("aria-hidden",!0))}function fi(t,l){}function gi(t,l){t&1&&m(0,fi,0,0,"ng-template")}function yi(t,l){if(t&1){let e=C();p(0,"span",23),x("click",function(){h(e);let o=r(2);return _(o.clear())}),m(1,gi,1,0,null,24),c()}if(t&2){let e=r(2);v("aria-hidden",!0),a(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function vi(t,l){if(t&1&&(k(0),m(1,_i,1,2,"TimesIcon",20)(2,yi,2,2,"span",21),E()),t&2){let e=r();a(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),a(),s("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function xi(t,l){t&1&&F(0)}function bi(t,l){if(t&1){let e=C();p(0,"span",33),x("click",function(o){h(e);let n=r(3).index,u=r(2);return _(u.readonly?"":u.removeOption(o,n))}),$(1,"TimesCircleIcon",34),c()}t&2&&(a(),s("styleClass","p-autocomplete-chip-icon"),v("aria-hidden",!0))}function Ci(t,l){t&1&&(k(0),m(1,bi,2,2,"ng-template",null,6,L),E())}function Ii(t,l){if(t&1&&(p(0,"p-chip",32),m(1,Ci,3,0,"ng-container",15),c()),t&2){let e=r().$implicit,i=r(2);s("label",i.getOptionLabel(e))("removable",!0),a(),s("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function wi(t,l){}function Si(t,l){t&1&&m(0,wi,0,0,"ng-template")}function Ti(t,l){if(t&1&&(p(0,"span"),m(1,Si,1,0,null,30),c()),t&2){let e=r(3);v("aria-hidden",!0),a(),s("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)("ngTemplateOutletContext",xe(3,ci))}}function Oi(t,l){if(t&1&&(p(0,"li",29,5),m(2,xi,1,0,"ng-container",30)(3,Ii,2,3,"p-chip",31)(4,Ti,2,4,"span",15),c()),t&2){let e=l.$implicit,i=l.index,o=r(2);s("ngClass",M(10,pi,o.focusedMultipleOptionIndex()===i)),v("id",o.id+"_multiple_option_"+i)("aria-label",o.getOptionLabel(e))("aria-setsize",o.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),a(2),s("ngTemplateOutlet",o.selectedItemTemplate||o._selectedItemTemplate)("ngTemplateOutletContext",M(12,St,e)),a(),s("ngIf",!o.selectedItemTemplate&&!o._selectedItemTemplate),a(),s("ngIf",o.removeIconTemplate||o._removeIconTemplate)}}function ki(t,l){if(t&1){let e=C();p(0,"ul",25,4),x("focus",function(o){h(e);let n=r();return _(n.onMultipleContainerFocus(o))})("blur",function(o){h(e);let n=r();return _(n.onMultipleContainerBlur(o))})("keydown",function(o){h(e);let n=r();return _(n.onMultipleContainerKeyDown(o))}),m(2,Oi,5,14,"li",26),p(3,"li",27)(4,"input",28,3),x("input",function(o){h(e);let n=r();return _(n.onInput(o))})("keydown",function(o){h(e);let n=r();return _(n.onKeyDown(o))})("change",function(o){h(e);let n=r();return _(n.onInputChange(o))})("focus",function(o){h(e);let n=r();return _(n.onInputFocus(o))})("blur",function(o){h(e);let n=r();return _(n.onInputBlur(o))})("paste",function(o){h(e);let n=r();return _(n.onInputPaste(o))})("keyup",function(o){h(e);let n=r();return _(n.onInputKeyUp(o))}),c()()()}if(t&2){let e,i=r();s("ngClass",i.inputMultipleClass)("tabindex",-1),v("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),a(2),s("ngForOf",i.modelValue()),a(2),A(i.inputStyleClass),s("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),v("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Ei(t,l){t&1&&$(0,"SpinnerIcon",37),t&2&&(s("styleClass","p-autocomplete-loader")("spin",!0),v("aria-hidden",!0))}function Vi(t,l){}function Ai(t,l){t&1&&m(0,Vi,0,0,"ng-template")}function Mi(t,l){if(t&1&&(p(0,"span",38),m(1,Ai,1,0,null,24),c()),t&2){let e=r(2);v("aria-hidden",!0),a(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Li(t,l){if(t&1&&(k(0),m(1,Ei,1,3,"SpinnerIcon",35)(2,Mi,2,2,"span",36),E()),t&2){let e=r();a(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),a(),s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function $i(t,l){if(t&1&&$(0,"span",41),t&2){let e=r(2);s("ngClass",e.dropdownIcon),v("aria-hidden",!0)}}function Fi(t,l){t&1&&$(0,"ChevronDownIcon")}function Di(t,l){}function zi(t,l){t&1&&m(0,Di,0,0,"ng-template")}function Pi(t,l){if(t&1&&(k(0),m(1,Fi,1,0,"ChevronDownIcon",15)(2,zi,1,0,null,24),E()),t&2){let e=r(2);a(),s("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),a(),s("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ri(t,l){if(t&1){let e=C();p(0,"button",39,7),x("click",function(o){h(e);let n=r();return _(n.handleDropdownClick(o))}),m(2,$i,1,2,"span",40)(3,Pi,3,2,"ng-container",15),c()}if(t&2){let e=r();s("disabled",e.disabled),v("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),a(2),s("ngIf",e.dropdownIcon),a(),s("ngIf",!e.dropdownIcon)}}function Bi(t,l){t&1&&F(0)}function Ki(t,l){t&1&&F(0)}function Qi(t,l){if(t&1&&m(0,Ki,1,0,"ng-container",30),t&2){let e=l.$implicit,i=l.options;r(2);let o=Q(6);s("ngTemplateOutlet",o)("ngTemplateOutletContext",H(2,Tt,e,i))}}function Hi(t,l){t&1&&F(0)}function qi(t,l){if(t&1&&m(0,Hi,1,0,"ng-container",30),t&2){let e=l.options,i=r(4);s("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",M(2,ui,e))}}function Ni(t,l){t&1&&(k(0),m(1,qi,1,4,"ng-template",null,10,L),E())}function Ui(t,l){if(t&1){let e=C();p(0,"p-scroller",46,9),x("onLazyLoad",function(o){h(e);let n=r(2);return _(n.onLazyLoad.emit(o))}),m(2,Qi,1,5,"ng-template",null,2,L)(4,Ni,3,0,"ng-container",15),c()}if(t&2){let e=r(2);ae(M(8,ge,e.scrollHeight)),s("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),a(4),s("ngIf",e.loaderTemplate||e._loaderTemplate)}}function ji(t,l){t&1&&F(0)}function Gi(t,l){if(t&1&&(k(0),m(1,ji,1,0,"ng-container",30),E()),t&2){r();let e=Q(6),i=r();a(),s("ngTemplateOutlet",e)("ngTemplateOutletContext",H(3,Tt,i.visibleOptions(),xe(2,di)))}}function Zi(t,l){if(t&1&&(p(0,"span"),d(1),c()),t&2){let e=r(2).$implicit,i=r(3);a(),V(i.getOptionGroupLabel(e.optionGroup))}}function Wi(t,l){t&1&&F(0)}function Yi(t,l){if(t&1&&(k(0),p(1,"li",50),m(2,Zi,2,1,"span",15)(3,Wi,1,0,"ng-container",30),c(),E()),t&2){let e=r(),i=e.$implicit,o=e.index,n=r().options,u=r(2);a(),s("ngStyle",M(5,ge,n.itemSize+"px")),v("id",u.id+"_"+u.getOptionIndex(o,n)),a(),s("ngIf",!u.groupTemplate),a(),s("ngTemplateOutlet",u.groupTemplate)("ngTemplateOutletContext",M(7,St,i.optionGroup))}}function Ji(t,l){if(t&1&&(p(0,"span"),d(1),c()),t&2){let e=r(2).$implicit,i=r(3);a(),V(i.getOptionLabel(e))}}function Xi(t,l){t&1&&F(0)}function eo(t,l){if(t&1){let e=C();k(0),p(1,"li",51),x("click",function(o){h(e);let n=r().$implicit,u=r(3);return _(u.onOptionSelect(o,n))})("mouseenter",function(o){h(e);let n=r().index,u=r().options,S=r(2);return _(S.onOptionMouseEnter(o,S.getOptionIndex(n,u)))}),m(2,Ji,2,1,"span",15)(3,Xi,1,0,"ng-container",30),c(),E()}if(t&2){let e=r(),i=e.$implicit,o=e.index,n=r().options,u=r(2);a(),s("ngStyle",M(12,ge,n.itemSize+"px"))("ngClass",u.optionClass(i,o,n)),v("id",u.id+"_"+u.getOptionIndex(o,n))("aria-label",u.getOptionLabel(i))("aria-selected",u.isSelected(i))("aria-disabled",u.isOptionDisabled(i))("data-p-focused",u.focusedOptionIndex()===u.getOptionIndex(o,n))("aria-setsize",u.ariaSetSize)("aria-posinset",u.getAriaPosInset(u.getOptionIndex(o,n))),a(),s("ngIf",!u.itemTemplate&&!u._itemTemplate),a(),s("ngTemplateOutlet",u.itemTemplate||u._itemTemplate)("ngTemplateOutletContext",H(14,mi,i,n.getOptions?n.getOptions(o):o))}}function to(t,l){if(t&1&&m(0,Yi,4,9,"ng-container",15)(1,eo,4,17,"ng-container",15),t&2){let e=l.$implicit,i=r(3);s("ngIf",i.isOptionGroup(e)),a(),s("ngIf",!i.isOptionGroup(e))}}function io(t,l){if(t&1&&(k(0),d(1),E()),t&2){let e=r(4);a(),b(" ",e.searchResultMessageText," ")}}function oo(t,l){t&1&&F(0,null,12)}function no(t,l){if(t&1&&(p(0,"li",52),m(1,io,2,1,"ng-container",53)(2,oo,2,0,"ng-container",24),c()),t&2){let e=r().options,i=r(2);s("ngStyle",M(4,ge,e.itemSize+"px")),a(),s("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),a(),s("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function ao(t,l){if(t&1&&(p(0,"ul",47,11),m(2,to,2,2,"ng-template",48)(3,no,3,6,"li",49),c()),t&2){let e=l.$implicit,i=l.options,o=r(2);ae(i.contentStyle),s("ngClass",i.contentStyleClass),v("id",o.id+"_list")("aria-label",o.listLabel),a(2),s("ngForOf",e),a(),s("ngIf",!e||e&&e.length===0&&o.showEmptyMessage)}}function lo(t,l){t&1&&F(0)}function ro(t,l){if(t&1&&(p(0,"div",42),m(1,Bi,1,0,"ng-container",24),p(2,"div",43),m(3,Ui,5,10,"p-scroller",44)(4,Gi,2,6,"ng-container",15),c(),m(5,ao,4,7,"ng-template",null,8,L)(7,lo,1,0,"ng-container",24),c(),p(8,"span",45),d(9),c()),t&2){let e=r();A(e.panelStyleClass),s("ngClass",e.panelClass)("ngStyle",e.panelStyle),a(),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),T("max-height",e.virtualScroll?"auto":e.scrollHeight),a(),s("ngIf",e.virtualScroll),a(),s("ngIf",!e.virtualScroll),a(3),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),a(2),b(" ",e.selectedMessageText," ")}}var so=({dt:t})=>`
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
}`,po={root:{position:"relative"}},co={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":(t.variant??(t.config.inputStyle()||t.config.inputVariant()))==="filled"}),chipItem:({instance:t,i:l})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===l}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:l,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(l),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(l)}),emptyMessage:"p-autocomplete-empty-message"},wt=(()=>{class t extends ie{name="autocomplete";theme=so;classes=co;inlineStyles=po;static \u0275fac=(()=>{let e;return function(o){return(e||(e=R(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var uo={provide:st,useExisting:Ve(()=>ke),multi:!0},ke=(()=>{class t extends oe{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant;fluid=!1;completeMethod=new w;onSelect=new w;onUnselect=new w;onFocus=new w;onBlur=new w;onDropdownClick=new w;onClear=new w;onKeyUp=new w;onShow=new w;onHide=new w;onLazyLoad=new w;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=O(We);value;_suggestions=ne(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=ne(null);focusedMultipleOptionIndex=ne(-1);focusedOptionIndex=ne(-1);_componentStyle=O(wt);visibleOptions=be(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=be(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(o=>q(o,this.optionValue)===e):e;if(X(e))if(typeof e=="object"||this.optionValueSelected){let o=this.getOptionLabel(i);return o??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return X(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(he.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,o){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,o),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,Pe(()=>{this.filled=X(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||je("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,o,n)=>{i.push({optionGroup:o,group:!0,index:n});let u=this.getOptionGroupChildren(o);return u&&u.forEach(S=>i.push(S)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Te(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?Te(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?q(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>Se(i,this.getOptionValue(e),this.equalityKey())):!1:Se(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&P(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(P(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let o=this.visibleOptions().find(n=>this.isOptionMatched(n,this.inputEL.nativeElement.value||""));o!==void 0&&(i=!0,!this.isSelected(o)&&this.onOptionSelect(e,o))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(Ue(i.value)&&this.hasSelectedOption()?(P(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(X(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],o=this.modelValue().slice(0,-1);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),P(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,o=!0){let n=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],n])):this.updateModel(n),this.onSelect.emit({originalEvent:e,value:i}),o&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,o){i!=null&&(o==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let o=this.modelValue()[i],n=this.modelValue().filter((u,S)=>S!==i).map(u=>this.getOptionValue(u));this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:o}),P(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=J(this.itemsViewChild.nativeElement,`li[id="${i}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&P(this.inputEL.nativeElement),e&&P(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&P(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return X(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?q(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?q(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?q(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?q(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=J(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=J(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(ve(me),ve(le))};static \u0275cmp=B({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,o,n){if(i&1&&(I(n,qt,5),I(n,Nt,5),I(n,Ut,5),I(n,jt,5),I(n,Gt,5),I(n,Zt,5),I(n,Wt,5),I(n,Yt,5),I(n,Jt,5),I(n,Xt,5),I(n,ei,5),I(n,ee,4)),i&2){let u;g(u=y())&&(o.itemTemplate=u.first),g(u=y())&&(o.emptyTemplate=u.first),g(u=y())&&(o.headerTemplate=u.first),g(u=y())&&(o.footerTemplate=u.first),g(u=y())&&(o.selectedItemTemplate=u.first),g(u=y())&&(o.groupTemplate=u.first),g(u=y())&&(o.loaderTemplate=u.first),g(u=y())&&(o.removeIconTemplate=u.first),g(u=y())&&(o.loadingIconTemplate=u.first),g(u=y())&&(o.clearIconTemplate=u.first),g(u=y())&&(o.dropdownIconTemplate=u.first),g(u=y())&&(o.templates=u)}},viewQuery:function(i,o){if(i&1&&(D(ti,5),D(ii,5),D(oi,5),D(ni,5),D(ai,5),D(li,5),D(ri,5),D(si,5)),i&2){let n;g(n=y())&&(o.containerEL=n.first),g(n=y())&&(o.inputEL=n.first),g(n=y())&&(o.multiInputEl=n.first),g(n=y())&&(o.multiContainerEL=n.first),g(n=y())&&(o.dropdownButton=n.first),g(n=y())&&(o.itemsViewChild=n.first),g(n=y())&&(o.scroller=n.first),g(n=y())&&(o.overlayViewChild=n.first)}},inputs:{minLength:[2,"minLength","minLength",z],delay:[2,"delay","delay",z],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",f],disabled:[2,"disabled","disabled",f],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",f],virtualScroll:[2,"virtualScroll","virtualScroll",f],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",z],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>z(e,null)],name:"name",required:[2,"required","required",f],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",f],forceSelection:[2,"forceSelection","forceSelection",f],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",z],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",f],group:[2,"group","group",f],completeOnFocus:[2,"completeOnFocus","completeOnFocus",f],showClear:[2,"showClear","showClear",f],field:"field",dropdown:[2,"dropdown","dropdown",f],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",f],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",f],tabindex:[2,"tabindex","tabindex",z],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",f],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",f],selectOnFocus:[2,"selectOnFocus","selectOnFocus",f],searchLocale:[2,"searchLocale","searchLocale",f],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",f],typeahead:[2,"typeahead","typeahead",f],variant:"variant",fluid:[2,"fluid","fluid",f]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[j([uo,wt]),U],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,o){if(i&1){let n=C();p(0,"div",13,0),x("click",function(S){return h(n),_(o.onContainerClick(S))}),m(2,hi,2,25,"input",14)(3,vi,3,2,"ng-container",15)(4,ki,6,26,"ul",16)(5,Li,3,2,"ng-container",15)(6,Ri,4,5,"button",17),p(7,"p-overlay",18,1),ze("visibleChange",function(S){return h(n),De(o.overlayVisible,S)||(o.overlayVisible=S),_(S)}),x("onAnimationStart",function(S){return h(n),_(o.onOverlayAnimationStart(S))})("onHide",function(){return h(n),_(o.hide())}),m(9,ro,10,11,"ng-template",null,2,L),c()()}i&2&&(A(o.styleClass),s("ngClass",o.rootClass)("ngStyle",o.style),a(2),s("ngIf",!o.multiple),a(),s("ngIf",o.filled&&!o.disabled&&o.showClear&&!o.loading),a(),s("ngIf",o.multiple),a(),s("ngIf",o.loading),a(),s("ngIf",o.dropdown),a(),Fe("visible",o.overlayVisible),s("options",o.overlayOptions)("target","@parent")("appendTo",o.appendTo)("showTransitionOptions",o.showTransitionOptions)("hideTransitionOptions",o.hideTransitionOptions))},dependencies:[Y,G,Re,Z,W,pe,ft,_t,it,gt,Je,_e,et,tt,Xe,It,te],encapsulation:2,changeDetection:0})}return t})();var mo=["content"],ho=["*"],_o=(t,l)=>({showTransitionParams:t,hideTransitionParams:l}),fo=(t,l)=>({value:t,params:l}),go=t=>({closeCallback:t});function yo(t,l){}function vo(t,l){t&1&&m(0,yo,0,0,"ng-template")}function xo(t,l){if(t&1){let e=C();p(0,"div",1),x("click",function(o){h(e);let n=r();return _(n.onOverlayClick(o))})("@animation.start",function(o){h(e);let n=r();return _(n.onAnimationStart(o))})("@animation.done",function(o){h(e);let n=r();return _(n.onAnimationEnd(o))}),p(1,"div",2),x("click",function(o){h(e);let n=r();return _(n.onContentClick(o))})("mousedown",function(o){h(e);let n=r();return _(n.onContentClick(o))}),se(2),m(3,vo,1,0,null,3),c()()}if(t&2){let e=r();A(e.styleClass),s("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",H(13,fo,e.overlayVisible?"open":"close",H(10,_o,e.showTransitionOptions,e.hideTransitionOptions))),v("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),a(3),s("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",M(16,go,e.onCloseClick.bind(e)))}}var bo=({dt:t})=>`
.p-popover {
    margin-top: ${t("popover.gutter")};
    background: ${t("popover.background")};
    color: ${t("popover.color")};
    border: 1px solid ${t("popover.border.color")};
    border-radius: ${t("popover.border.radius")};
    box-shadow: ${t("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${t("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${t("popover.gutter")} * -1);
    margin-bottom: ${t("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${t("popover.arrow.offset")} + ${t("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${t("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${t("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.background")};
}

.p-popover:before {
    border-width: ${t("popover.gutter")};
    margin-left: calc(-1 * ${t("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("popover.border.color")};
}

`,Co={root:"p-popover p-component",content:"p-popover-content"},Ot=(()=>{class t extends ie{name="popover";theme=bo;classes=Co;static \u0275fac=(()=>{let e;return function(o){return(e||(e=R(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})(),kt=(()=>{class t extends oe{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new w;onHide=new w;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=O(Ot);zone=O(le);overlayService=O(me);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(ce(this.platformId)&&!this.documentClickListener){let e=qe()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):He(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&fe.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Qe(this.container,this.target,!1);let e=we(this.container),i=we(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(Ze("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),Ke(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&fe.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=J(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Ne()&&this.hide()}bindDocumentResizeListener(){if(ce(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){ce(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Ye(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&fe.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=R(t)))(o||t)}})();static \u0275cmp=B({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&(I(n,mo,4),I(n,ee,4)),i&2){let u;g(u=y())&&(o.contentTemplate=u.first),g(u=y())&&(o.templates=u)}},hostBindings:function(i,o){i&1&&x("keydown.escape",function(u){return o.onEscapeKeydown(u)},!1,Le)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",z],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[j([Ot]),U],ngContentSelectors:ho,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(re(),m(0,xo,4,18,"div",0)),i&2&&s("ngIf",o.render)},dependencies:[Y,G,Z,W,pe,te],encapsulation:2,data:{animation:[Be("animation",[de("void",ue({transform:"scaleY(0.8)",opacity:0})),de("close",ue({opacity:0})),de("open",ue({transform:"translateY(0)",opacity:1})),Ie("void => open",Ce("{{showTransitionParams}}")),Ie("open => close",Ce("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})();function Io(t,l){t&1&&d(0," asdasd ")}function wo(t,l){if(t&1&&(p(0,"div",8)(1,"div"),d(2),c()()),t&2){let e=l.$implicit;a(2),$e("",e.cedula," - ",e.nombres,"")}}function So(t,l){if(t&1&&(p(0,"div",9)(1,"p"),d(2,"# de actividades preservaci\xF3n en abril: "),p(3,"b"),d(4),c()(),p(5,"p"),d(6),c()(),p(7,"div",9)(8,"p"),d(9,"# de actividades preservaci\xF3n en mayo: "),p(10,"b"),d(11),c()(),p(12,"p"),d(13),c()()),t&2){let e=r(2);a(4),V(e.userState.cantidadA1),a(2),b("Meta: ",e.userState.metaA1,""),a(5),V(e.userState.cantidadA2),a(2),b("Meta: ",e.userState.metaA2,"")}}function To(t,l){if(t&1&&(p(0,"div",9)(1,"p"),d(2,"# de encuestas levantadas en digital en abril: "),p(3,"b"),d(4),c()()(),p(5,"div",9)(6,"p"),d(7,"# de encuestas levantadas en f\xEDsico en abril: "),p(8,"b"),d(9),c()()(),p(10,"div",9)(11,"p"),d(12,"# de encuestas levantadas en digital en mayo: "),p(13,"b"),d(14),c()()(),p(15,"div",9)(16,"p"),d(17,"# de encuestas levantadas en f\xEDsico en mayo: "),p(18,"b"),d(19),c()()(),p(20,"div",10)(21,"p"),d(22,"Meta Abril: "),p(23,"b"),d(24,"20"),c()()(),p(25,"div",10)(26,"p"),d(27,"Meta Mayo: "),p(28,"b"),d(29,"100"),c()()()),t&2){let e=r(2);a(4),V(e.userState.cantidadB1),a(5),V(e.userState.cantidadC1),a(5),V(e.userState.cantidadB2),a(5),V(e.userState.cantidadC2)}}function Oo(t,l){if(t&1&&(p(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),d(5,"Preservaci\xF3n Abril"),c()(),p(6,"p-tag",20)(7,"div",21)(8,"span",22),d(9),c()()()()()(),p(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),d(15,"Preservaci\xF3n Mayo"),c()(),p(16,"p-tag",20)(17,"div",21)(18,"span",22),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadA1!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadA1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadA2!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadA2=="completa"?"Cumple":"No Cumple"," ")}}function ko(t,l){if(t&1&&(p(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),d(5,"Levantamiento Abril"),c()(),p(6,"p-tag",20)(7,"div",21)(8,"span",22),d(9),c()()()()()(),p(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),d(15,"Levantamiento Mayo"),c()(),p(16,"p-tag",20)(17,"div",21)(18,"span",22),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Eo(t,l){if(t&1&&(p(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),d(5,"Levantamiento Abril"),c()(),p(6,"p-tag",20)(7,"div",21)(8,"span",22),d(9),c()()()()()(),p(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),d(15,"Levantamiento Mayo"),c()(),p(16,"p-tag",20)(17,"div",21)(18,"span",22),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Vo(t,l){if(t&1&&(p(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"p"),d(5,"Levantamiento Abril"),c()(),p(6,"p-tag",20)(7,"div",21)(8,"span",22),d(9),c()()()()()(),p(10,"div",16)(11,"div",17)(12,"div",18)(13,"div",19)(14,"p"),d(15,"Levantamiento Mayo"),c()(),p(16,"p-tag",20)(17,"div",21)(18,"span",22),d(19),c()()()()()()),t&2){let e=r(2);a(6),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB1!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB1=="completa"?"Cumple":"No Cumple"," "),a(7),T("left",4,"px")("top",4,"px"),s("severity",e.userState.actividadB2!="completa"?"danger":"success"),a(3),b(" ",e.userState.actividadB2=="completa"?"Cumple":"No Cumple"," ")}}function Ao(t,l){if(t&1){let e=C();p(0,"div",3)(1,"div",4)(2,"div",9)(3,"p")(4,"b"),d(5,"PROVINCIA:"),c(),d(6),c()(),p(7,"div",9)(8,"p")(9,"b"),d(10,"N\xDAMERO DE C\xC9DULA:"),c(),d(11),c()(),p(12,"div",10)(13,"p")(14,"b"),d(15,"APELLIDOS Y NOMBRES:"),c(),d(16),c()()(),$(17,"p-divider"),p(18,"div",4)(19,"div",9)(20,"p")(21,"b"),d(22,"DIRECCI\xD3N ZONAL:"),c(),d(23),c()(),p(24,"div",9)(25,"p")(26,"b"),d(27," ESTADO: "),c(),d(28),p(29,"p-button",11),x("click",function(o){h(e),r();let n=Q(13);return _(n.toggle(o))}),c()()(),p(30,"div",10)(31,"p")(32,"b"),d(33,"ACTIVIDAD:"),c(),d(34),c()(),p(35,"div",12)(36,"h6"),d(37,"PROGRESO:"),c(),p(38,"p-tag",13),d(39),c()()(),$(40,"p-divider"),p(41,"div",14),m(42,So,14,4)(43,To,30,4),c()(),p(44,"div",15)(45,"div",16)(46,"div",17)(47,"div",18)(48,"div",19)(49,"p"),d(50,"Curso en l\xEDnea"),c()(),p(51,"p-tag",20)(52,"div",21)(53,"span",22),d(54),c()()()()()(),m(55,Oo,20,12)(56,ko,20,12)(57,Eo,20,12)(58,Vo,20,12),c()}if(t&2){let e=r();a(6),b(" ",e.userState.provincia,""),a(5),b(" ",e.userState.cedula,""),a(5),b(" ",e.userState.nombres,""),a(7),b(" ",e.userState.direccionZonal,""),a(5),b(" ",e.userState.habilitado," (Unidad Registro Social) "),a(),s("icon",e.PrimeIcons.INFO_CIRCLE)("outlined",!0),a(5),b(" ",e.userState.actividad,""),a(4),s("severity",e.userState.cumple!="Completo"?"danger":"success"),a(),V(e.userState.cumple),a(3),K(e.userState.actividadA1||e.userState.actividadA2?42:-1),a(),K(e.userState.actividadB1||e.userState.actividadB2?43:-1),a(8),T("left",4,"px")("top",4,"px"),s("severity",e.userState.curso!="completa"?"danger":"success"),a(3),b(" ",e.userState.curso=="completa"?"Cumple":"No Cumple"," "),a(),K(e.userState.actividadA1||e.userState.actividadA2?55:-1),a(),K(e.userState.actividadB1||e.userState.actividadB2?56:-1),a(),K(!e.userState.actividadB1&&!e.userState.actividadB2&&e.userState.actividad=="Levantamiento de informaci\xF3n"?57:-1),a(),K(!e.userState.actividadA1&&!e.userState.actividadA2&&e.userState.actividad=="Actividades de preservaci\xF3n de sitios de inter\xE9s tur\xEDstico"?58:-1)}}var ye=class t{_authService=O(at);_customMessageService=O(nt);stateHttpService=O(yt);layout="grid";PrimeIcons=Ge;identification=new ct("");userState;userStates=[];options=["list","grid"];constructor(){this.identification.valueChanges.pipe(Ee(500)).subscribe(l=>{l?.cedula?this.userState=l:this.userState=null})}ngOnInit(){}findStatesByCedula(l){this.userState=null,this.stateHttpService.findStatesByIdentification(l.query).subscribe({next:e=>{this.userStates=e,e&&e.length==1&&(this.userState=e[0]),e.length==0&&this._customMessageService.showError({summary:"Beneficiario no encontrado",detail:"Por favor intente de nuevo"})}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=B({type:t,selectors:[["app-state"]],decls:16,vars:3,consts:[["selectedItem",""],["item",""],["op",""],[1,"card","flex","flex-col","gap-6","w-full"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6"],[1,"md:col-span-4","flex","flex-col","gap-2"],["field","nombres",3,"completeMethod","formControl","suggestions"],[1,"flex","flex-col","gap-4","w-[25rem]"],[1,"flex","items-center","gap-2"],[1,"md:col-span-3","flex","flex-col","gap-2"],[1,"md:col-span-6","flex","flex-col","gap-2"],["size","small","label","Haga click aqu\xED",3,"click","icon","outlined"],[1,"md:col-span-2","flex","flex-col","gap-2"],[3,"severity"],[1,"grid","grid-cols-1","md:grid-cols-12","gap-6","text-center"],[1,"grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-4"],[1,"flex","flex-col","sm:flex-row","sm:items-center","p-6","gap-4","border-t","border-surface-200","dark:border-surface-700"],[1,"md:w-40","relative"],[1,"sticky-note"],["styleClass","dark:!bg-surface-900",1,"absolute",3,"severity"],[1,"flex","items-center","gap-2","px-1"],[1,"text-base",2,"font-size","22px","width","120px"]],template:function(e,i){if(e&1){let o=C();p(0,"p-fluid")(1,"div",3)(2,"div",4)(3,"div",5)(4,"label"),d(5,"Ingrese el n\xFAmero de c\xE9dula o nombre del beneficiario:"),c(),p(6,"p-autocomplete",6),x("completeMethod",function(u){return h(o),_(i.findStatesByCedula(u))}),m(7,Io,1,0,"ng-template",null,0,L)(9,wo,3,2,"ng-template",null,1,L),c()()()()(),m(11,Ao,59,22),p(12,"p-popover",null,2)(14,"div",7),d(15," El estado de la URS siginifica que cumple con todos los requisitos m\xEDnimos para poder aplicar a ecuatorianos en acci\xF3n "),c()()}e&2&&(a(6),s("formControl",i.identification)("suggestions",i.userStates),a(5),K(i.userState?11:-1))},dependencies:[dt,pt,rt,mt,ut,ke,ht,lt,ot,kt],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f4f4f4;margin:0}.sticky-note[_ngcontent-%COMP%]{width:250px;height:200px;background-color:#fffe979e;padding:20px;box-shadow:5px 5px 15px #0000001a;border-radius:10px;transform:rotate(-3deg);position:relative;display:flex;justify-content:center;align-items:center;font-size:30px;color:#333}.sticky-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}']})};var ca=[{path:"",component:ye}];export{ca as default};
