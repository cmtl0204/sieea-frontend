import{a as Nt}from"./chunk-5ZBR4LS2.js";import{a as Oe}from"./chunk-IE4355C3.js";import{a as Me}from"./chunk-OHER5PLG.js";import{a as wt}from"./chunk-GOQ3JMUW.js";import{a as Ft,c as Tt,d as It,e as St,f as kt}from"./chunk-GS7GIXM4.js";import{a as Vt}from"./chunk-EGQHI6AY.js";import"./chunk-MPLAKOWK.js";import"./chunk-DPC2C23C.js";import{a as Ne}from"./chunk-LQLX3PEZ.js";import{a as Ve}from"./chunk-WSK4CE6J.js";import"./chunk-LUSM3YRN.js";import"./chunk-3AXKVFIO.js";import"./chunk-MJNRKRDT.js";import{a as oe}from"./chunk-AF3X7UOH.js";import{a as ye}from"./chunk-RJ6ODVGJ.js";import{a as Re}from"./chunk-JT4BACVD.js";import{a as xt,c as de}from"./chunk-VGCEVFP6.js";import{c as ht,d as Qe,f as Ge,h as Ye,i as We,k as Ze}from"./chunk-WCGJ44IN.js";import{b as Ce,c as ve,d as ne,e as Et,f as xe,h as u,i as Dt,j as we,k as Fe,l as ie,m as At,n as Te,o as Mt,p as Ie,q as Se,r as ke,t as Ee,u as De,v as Ae}from"./chunk-UOAM75BV.js";import{Ba as P,Ea as q,F as Ct,Ha as yt,Pa as z,ba as vt,ra as ee,u as Ke,ua as te,v as gt,va as R,x as bt}from"./chunk-RIYVHW5G.js";import{$b as st,Ab as s,Bb as m,Cb as G,Db as Y,Eb as A,Fb as y,Gb as b,Hb as c,Ib as ue,Jb as fe,Jc as O,Kc as ft,Lb as S,Lc as X,Mb as _e,Mc as be,Nb as x,Nc as J,Ob as w,Oc as _t,P as ot,Q as M,Qc as L,R as j,Sa as l,Sb as v,Tb as he,Ub as lt,W as g,Wa as me,Wb as W,Xa as He,Xb as Z,Yb as K,Zb as V,_b as ge,ac as ce,ba as rt,bc as ct,ca as f,da as _,db as F,eb as $,ec as dt,fb as H,ga as k,hb as N,hc as pt,ib as p,ic as mt,kc as C,na as T,pb as E,qb as a,ra as pe,sb as at,sc as D,tb as Q,tc as ut,ub as U,vb as I,zb as r}from"./chunk-5MZ4X5ZA.js";import{a as se,b as $e}from"./chunk-ACKELEN3.js";var Zt=["header"],Kt=["footer"],Xt=["content"],Jt=["closeicon"],en=["headless"],tn=["maskRef"],nn=["container"],on=["closeButton"],rn=["*"],an=(t,o,e,n,i,d)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":o,"p-drawer-right":e,"p-drawer-top":n,"p-drawer-bottom":i,"p-drawer-full":d}),ln=(t,o)=>({transform:t,transition:o}),sn=t=>({value:"visible",params:t});function cn(t,o){t&1&&A(0)}function dn(t,o){if(t&1&&p(0,cn,1,0,"ng-container",4),t&2){let e=c(2);a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function pn(t,o){t&1&&A(0)}function mn(t,o){if(t&1&&(r(0,"div"),v(1),s()),t&2){let e=c(3);U(e.cx("title")),l(),he(e.header)}}function un(t,o){t&1&&m(0,"TimesIcon"),t&2&&E("data-pc-section","closeicon")}function fn(t,o){}function _n(t,o){t&1&&p(0,fn,0,0,"ng-template")}function hn(t,o){if(t&1&&p(0,un,1,1,"TimesIcon",8)(1,_n,1,0,null,4),t&2){let e=c(4);a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),l(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function gn(t,o){if(t&1){let e=y();r(0,"p-button",9),b("onClick",function(i){f(e);let d=c(3);return _(d.close(i))})("keydown.enter",function(i){f(e);let d=c(3);return _(d.close(i))}),p(1,hn,2,2,"ng-template",null,1,C),s()}if(t&2){let e=c(3);a("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),E("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function bn(t,o){t&1&&A(0)}function Cn(t,o){t&1&&A(0)}function vn(t,o){if(t&1&&(G(0),r(1,"div",5),p(2,Cn,1,0,"ng-container",4),s(),Y()),t&2){let e=c(3);l(),a("ngClass",e.cx("footer")),E("data-pc-section","footer"),l(),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function yn(t,o){if(t&1&&(r(0,"div",5),p(1,pn,1,0,"ng-container",4)(2,mn,2,3,"div",6)(3,gn,3,5,"p-button",7),s(),r(4,"div",5),fe(5),p(6,bn,1,0,"ng-container",4),s(),p(7,vn,3,3,"ng-container",8)),t&2){let e=c(2);a("ngClass",e.cx("header")),E("data-pc-section","header"),l(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),a("ngIf",e.header),l(),a("ngIf",e.showCloseIcon&&e.closable),l(),a("ngClass",e.cx("content")),E("data-pc-section","content"),l(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),l(),a("ngIf",e.footerTemplate||e._footerTemplate)}}function xn(t,o){if(t&1){let e=y();r(0,"div",3,0),b("@panelState.start",function(i){f(e);let d=c();return _(d.onAnimationStart(i))})("@panelState.done",function(i){f(e);let d=c();return _(d.onAnimationEnd(i))})("keydown",function(i){f(e);let d=c();return _(d.onKeyDown(i))}),p(2,dn,1,1,"ng-container")(3,yn,8,9),s()}if(t&2){let e=c();Q(e.style),U(e.styleClass),a("ngClass",dt(9,an,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen||e.position==="full"))("@panelState",st(19,sn,ce(16,ln,e.transformOptions,e.transitionOptions))),E("data-pc-name","sidebar")("data-pc-section","root"),l(2),I(e.headlessTemplate||e._headlessTemplate?2:3)}}var wn=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,Fn={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},Tn={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ot=(()=>{class t extends P{name="drawer";theme=wn;classes=Tn;inlineStyles=Fn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var In=We([Ge({transform:"{{transform}}",opacity:0}),Qe("{{transition}}")]),Sn=We([Qe("{{transition}}",Ge({transform:"{{transform}}",opacity:0}))]),Rt=(()=>{class t extends q{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new T;onHide=new T;visibleChange=new T;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=g(Ot);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&de.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.container.setAttribute(this.attrSelector,""),this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",i),vt(this.mask,"style",this.maskStyle),Ke(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",d=>{this.dismissible&&this.close(d)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&gt())}disableModality(){this.mask&&(Ke(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&bt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),de.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Ct(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===de.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&de.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,d){if(n&1&&(S(d,Zt,4),S(d,Kt,4),S(d,Xt,4),S(d,Jt,4),S(d,en,4),S(d,te,4)),n&2){let h;x(h=w())&&(i.headerTemplate=h.first),x(h=w())&&(i.footerTemplate=h.first),x(h=w())&&(i.contentTemplate=h.first),x(h=w())&&(i.closeIconTemplate=h.first),x(h=w())&&(i.headlessTemplate=h.first),x(h=w())&&(i.templates=h)}},viewQuery:function(n,i){if(n&1&&(_e(tn,5),_e(nn,5),_e(on,5)),n&2){let d;x(d=w())&&(i.maskRef=d.first),x(d=w())&&(i.containerViewChild=d.first),x(d=w())&&(i.closeButtonViewChild=d.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",D],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",ut],modal:[2,"modal","modal",D],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",D],showCloseIcon:[2,"showCloseIcon","showCloseIcon",D],closeOnEscape:[2,"closeOnEscape","closeOnEscape",D],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",D]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[V([Ot]),N],ngContentSelectors:rn,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(n,i){n&1&&(ue(),p(0,xn,4,21,"div",2)),n&2&&a("ngIf",i.visible)},dependencies:[L,O,X,J,z,xt,R],encapsulation:2,data:{animation:[ht("panelState",[Ye("void => visible",[Ze(In)]),Ye("visible => void",[Ze(Sn)])])]},changeDetection:0})}return t})();var kn=["input"],En=(t,o,e)=>({$implicit:t,events:o,index:e});function Dn(t,o){if(t&1){let e=y();G(0),r(1,"input",2),b("input",function(i){f(e);let d=c().$implicit,h=c();return _(h.onInput(i,d-1))})("focus",function(i){f(e);let d=c(2);return _(d.onInputFocus(i))})("blur",function(i){f(e);let d=c(2);return _(d.onInputBlur(i))})("paste",function(i){f(e);let d=c(2);return _(d.onPaste(i))})("keydown",function(i){f(e);let d=c(2);return _(d.onKeyDown(i))}),s(),Y()}if(t&2){let e=c().$implicit,n=c();l(),a("value",n.getModelValue(e))("maxLength",e===1?n.length:1)("type",n.inputType)("pSize",n.size)("variant",n.variant)("readonly",n.readonly)("disabled",n.disabled)("tabindex",n.tabindex)("pAutoFocus",n.getAutofocus(e))("ngClass",n.styleClass)}}function An(t,o){t&1&&A(0)}function Mn(t,o){if(t&1&&(G(0),p(1,An,1,0,"ng-container",3),Y()),t&2){let e=c().$implicit,n=c();l(),a("ngTemplateOutlet",n.inputTemplate||n._inputTemplate)("ngTemplateOutletContext",ct(2,En,n.getToken(e-1),n.getTemplateEvents(e-1),e))}}function Nn(t,o){if(t&1&&(G(0),p(1,Dn,2,10,"ng-container",1)(2,Mn,2,6,"ng-container",1),Y()),t&2){let e=c();l(),a("ngIf",!e.inputTemplate&&!e._inputTemplate),l(),a("ngIf",e.inputTemplate||e._inputTemplate)}}var Vn=({dt:t})=>`
.p-inputotp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-inputotp-input {
    text-align: center;
    width: 2.5rem;
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: ${t("inputotp.input.sm.width")};
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: ${t("inputotp.input.lg.width")};
}
`,On={root:"p-inputotp p-component",pcInput:"p-inputotp-input"},Pt=(()=>{class t extends P{name="inputotp";theme=Vn;classes=On;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Rn={provide:Et,useExisting:ot(()=>Pe),multi:!0},Pe=(()=>{class t extends q{invalid=!1;disabled=!1;readonly=!1;variant;tabindex=null;length=4;styleClass;mask=!1;integerOnly=!1;autofocus;size;onChange=new T;onFocus=new T;onBlur=new T;inputTemplate;templates;_inputTemplate;tokens=[];onModelChange=()=>{};onModelTouched=()=>{};value;get inputMode(){return this.integerOnly?"numeric":"text"}get inputType(){return this.mask?"password":"text"}_componentStyle=g(Pt);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"input":this._inputTemplate=e.template;break;default:this._inputTemplate=e.template;break}})}getToken(e){return this.tokens[e]}getTemplateEvents(e){return{input:n=>this.onInput(n,e),keydown:n=>this.onKeyDown(n),focus:n=>this.onFocus.emit(n),blur:n=>this.onBlur.emit(n),paste:n=>this.onPaste(n)}}onInput(e,n){let i=e.target.value;if(n===0&&i.length>1){this.handleOnPaste(i,e),e.stopPropagation();return}this.tokens[n]=i,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward")&&this.moveToNext(e)}updateModel(e){let n=this.tokens.join("");this.onModelChange(n),this.onChange.emit({originalEvent:e,value:n})}writeValue(e){e?Array.isArray(e)&&e.length>0?this.value=e.slice(0,this.length):this.value=e.toString().split("").slice(0,this.length):this.value=e,this.updateTokens(),this.cd.markForCheck()}updateTokens(){this.value!==null&&this.value!==void 0?Array.isArray(this.value)?this.tokens=[...this.value]:this.tokens=this.value.toString().split(""):this.tokens=[]}getModelValue(e){return this.tokens[e-1]||""}getAutofocus(e){return e===1?this.autofocus:!1}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}moveToPrev(e){let n=this.findPrevInput(e.target);n&&(n.focus(),n.select())}moveToNext(e){let n=this.findNextInput(e.target);n&&(n.focus(),n.select())}findNextInput(e){let n=e.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)}findPrevInput(e){let n=e.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)}onInputFocus(e){e.target.select(),this.onFocus.emit(e)}onInputBlur(e){this.onBlur.emit(e)}onKeyDown(e){if(!(e.altKey||e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;default:(this.integerOnly&&!(Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}}onPaste(e){if(!this.disabled&&!this.readonly){let n=e.clipboardData.getData("text");n.length&&this.handleOnPaste(n,e),e.preventDefault()}}handleOnPaste(e,n){let i=e.substring(0,this.length+1);(!this.integerOnly||!isNaN(i))&&(this.tokens=i.split(""),this.updateModel(n))}getRange(e){return Array.from({length:e},(n,i)=>i+1)}trackByFn(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-inputOtp"],["p-inputotp"],["p-input-otp"]],contentQueries:function(n,i,d){if(n&1&&(S(d,kn,4),S(d,te,4)),n&2){let h;x(h=w())&&(i.inputTemplate=h.first),x(h=w())&&(i.templates=h)}},hostAttrs:[1,"p-inputotp","p-component"],inputs:{invalid:"invalid",disabled:"disabled",readonly:"readonly",variant:"variant",tabindex:"tabindex",length:"length",styleClass:"styleClass",mask:"mask",integerOnly:"integerOnly",autofocus:[2,"autofocus","autofocus",D],size:"size"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[V([Rn,Pt]),N],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],["type","text","pInputText","",1,"p-inputotp-input",3,"input","focus","blur","paste","keydown","value","maxLength","type","pSize","variant","readonly","disabled","tabindex","pAutoFocus","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&p(0,Nn,3,2,"ng-container",0),n&2&&a("ngForOf",i.getRange(i.length))("ngForTrackBy",i.trackByFn)},dependencies:[L,O,ft,X,J,oe,yt,R],encapsulation:2,changeDetection:0})}return t})(),qt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=$({type:t});static \u0275inj=j({imports:[Pe,R,R]})}return t})();var re=class t{_elementRef=g(pe);_renderer=g(me);_errors=null;_dirty=!1;_touched=!1;_nativeElement;_errorMessages={required:this.fieldRequired,requiredTrue:this.fieldRequired,email:this.fieldEmail,minlength:this.fieldMinLength,maxlength:this.fieldMaxLength,min:this.fieldMin,max:this.fieldMax,pattern:this.fieldPattern,identification:this.fieldIdentification,noPasswordMatch:this.fieldNoPasswordMatch,userNotAvailable:this.fieldUserNotAvailable,userAvailable:this.fieldUserAvailable,emailNotAvailable:this.fieldEmailNotAvailable,phoneNotAvailable:this.fieldPhoneNotAvailable,dateInvalid:this.fieldDateValid,dateMax:this.fieldDateMax,dateMin:this.fieldDateMin,agreementExists:this.fieldAgreementExists};constructor(){this._nativeElement=this._elementRef.nativeElement}ngOnChanges(o){this.setErrorMessage()}set touched(o){this._touched=o}set dirty(o){this._dirty=o}set errors(o){this._errors=o}setErrorMessage(){let o="";if((this._touched||this._dirty)&&this._errors){for(let e in this._errors)if(this._errorMessages[e]){let n=this._errorMessages[e];o=typeof n=="function"?n(this._errors):n;break}this._renderer.addClass(this._nativeElement,"text-red-500")}this._renderer.setProperty(this._nativeElement,"innerText",o)}get fieldRequired(){return"El campo es obligatorio."}get fieldEmail(){return"Correo electr\xF3nico no es v\xE1lido."}fieldMinLength(o){return`Debe contener como m\xEDnimo ${o.minlength.requiredLength} caracteres.`}fieldMaxLength(o){return`Debe contener como m\xE1ximo de caracteres ${o.maxlength.requiredLength}.`}fieldMin(o){return`N\xFAmero m\xEDnimo permitido es ${o.min.min}.`}fieldMax(o){return`N\xFAmero maximo permitido es ${o.max.max}.`}get fieldPattern(){return"No cumple con el formato."}get fieldNoPasswordMatch(){return"Las contrase\xF1as no coinciden."}get fieldDateValid(){return"No es una fecha v\xE1lida."}fieldDateMax(o){return`La fecha ${o.dateMax.actualDate} no puede ser mayor a ${o.dateMax.requiredDate}.`}fieldDateMin(o){return`La fecha ${o.dateMin.actualDate} no puede ser menor a ${o.dateMin.requiredDate}.`}get fieldIdentification(){return"No cumple con el formato de una c\xE9dula Ecuatoriana."}get fieldUserNotAvailable(){return"Este usuario ya se encuentra registrado."}get fieldUserAvailable(){return"Usuario est\xE1 disponible."}get fieldEmailNotAvailable(){return"Este correo electr\xF3nico no est\xE1 disponible."}get fieldPhoneNotAvailable(){return"Este tel\xE9fono no est\xE1 disponible."}get fieldAgreementExists(){return"El n\xFAmero interno de convenio ya se encuentra registrado."}static \u0275fac=function(e){return new(e||t)};static \u0275dir=H({type:t,selectors:[["","appErrorMessage",""]],inputs:{touched:"touched",dirty:"dirty",errors:"errors"},features:[rt]})};var ae=class t{elementRef=g(pe);renderer=g(me);_required=!1;label="";set required(o){o&&(this._required=o?.hasValidator(u.required))}ngOnInit(){this.setLabelText()}setLabelText(){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",""),this.renderer.addClass(this.elementRef.nativeElement,"text-lg"),this.renderer.addClass(this.elementRef.nativeElement,"font-medium"),this.renderer.addClass(this.elementRef.nativeElement,"text-gray-700");let o=this.renderer.createText(`${this.label}:`);if(this.renderer.appendChild(this.elementRef.nativeElement,o),this._required){let e=this.renderer.createElement("i"),n=this.renderer.createText("*");this.renderer.addClass(e,"pi"),this.renderer.addClass(e,"pi-asterisk"),this.renderer.setStyle(e,"font-size","0.6rem"),this.renderer.addClass(e,"text-red-500"),this.renderer.addClass(e,"text-lg"),this.renderer.addClass(e,"ml-1"),this.renderer.appendChild(this.elementRef.nativeElement,e)}}static \u0275fac=function(e){return new(e||t)};static \u0275dir=H({type:t,selectors:[["","appLabel",""]],inputs:{label:"label",required:"required"}})};var qn=Math.pow(10,8)*24*60*60*1e3,Bo=-qn;var Bn=3600;var Bt=Bn*24,Lo=Bt*7,Ln=Bt*365.2425,zn=Ln/12,zo=zn*3,Je=Symbol.for("constructDateFrom");function qe(t,o){return typeof t=="function"?t(o):t&&typeof t=="object"&&Je in t?t[Je](o):t instanceof Date?new t.constructor(o):new Date(o)}function et(t,o){return qe(o||t,t)}function Be(t,...o){let e=qe.bind(null,t||o.find(n=>typeof n=="object"));return o.map(e)}function tt(t,o){let e=+et(t)-+et(o);return e<0?-1:e>0?1:e}function Lt(t,o,e){let[n,i]=Be(e?.in,t,o);return n.getFullYear()-i.getFullYear()}function zt(t,o,e){let[n,i]=Be(e?.in,t,o),d=tt(n,i),h=Math.abs(Lt(n,i));n.setFullYear(1584),i.setFullYear(1584);let Wt=tt(n,i)===-d,it=d*(h-+Wt);return it===0?0:it}var Un=["start"],jn=["end"],$n=["center"],Hn=["*"];function Qn(t,o){t&1&&A(0)}function Gn(t,o){if(t&1&&(r(0,"div",4),p(1,Qn,1,0,"ng-container",5),s()),t&2){let e=c();E("data-pc-section","start"),l(),a("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Yn(t,o){t&1&&A(0)}function Wn(t,o){if(t&1&&(r(0,"div",6),p(1,Yn,1,0,"ng-container",5),s()),t&2){let e=c();E("data-pc-section","center"),l(),a("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function Zn(t,o){t&1&&A(0)}function Kn(t,o){if(t&1&&(r(0,"div",7),p(1,Zn,1,0,"ng-container",5),s()),t&2){let e=c();E("data-pc-section","end"),l(),a("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var Xn=({dt:t})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${t("toolbar.padding")};
    background: ${t("toolbar.background")};
    border: 1px solid ${t("toolbar.border.color")};
    color: ${t("toolbar.color")};
    border-radius: ${t("toolbar.border.radius")};
    gap: ${t("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,Jn={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},Ut=(()=>{class t extends P{name="toolbar";theme=Xn;classes=Jn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Le=(()=>{class t extends q{style;styleClass;ariaLabelledBy;_componentStyle=g(Ut);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,i,d){if(n&1&&(S(d,Un,4),S(d,jn,4),S(d,$n,4),S(d,te,4)),n&2){let h;x(h=w())&&(i.startTemplate=h.first),x(h=w())&&(i.endTemplate=h.first),x(h=w())&&(i.centerTemplate=h.first),x(h=w())&&(i.templates=h)}},inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[V([Ut]),N],ngContentSelectors:Hn,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-start",4,"ngIf"],["class","p-toolbar-center",4,"ngIf"],["class","p-toolbar-end",4,"ngIf"],[1,"p-toolbar-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-center"],[1,"p-toolbar-end"]],template:function(n,i){n&1&&(ue(),r(0,"div",0),fe(1),p(2,Gn,2,2,"div",1)(3,Wn,2,2,"div",2)(4,Kn,2,2,"div",3),s()),n&2&&(U(i.styleClass),a("ngClass","p-toolbar p-component")("ngStyle",i.style),E("aria-labelledby",i.ariaLabelledBy)("data-pc-name","toolbar"),l(2),a("ngIf",i.startTemplate||i._startTemplate),l(),a("ngIf",i.centerTemplate||i._centerTemplate),l(),a("ngIf",i.endTemplate||i._endTemplate))},dependencies:[L,O,X,J,be,R],encapsulation:2,changeDetection:0})}return t})();var ei=({dt:t})=>`
.p-skeleton {
    overflow: hidden;
    background: ${t("skeleton.background")};
    border-radius: ${t("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${t("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,ti={root:{position:"relative"}},ni={root:({props:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},jt=(()=>{class t extends P{name="skeleton";theme=ei;classes=ni;inlineStyles=ti;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var $t=(()=>{class t extends q{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=g(jt);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let e=this._componentStyle?.inlineStyles.root,n;return this.size?n=$e(se(se({},this.style),e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=se($e(se({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),n}static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[V([jt]),N],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(n,i){n&1&&m(0,"div",0),n&2&&(U(i.styleClass),a("ngClass",i.containerClass())("ngStyle",i.containerStyle),E("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[L,O,be,R],encapsulation:2,changeDetection:0})}return t})();function ii(t,o){t&1&&(r(0,"div",0)(1,"div",1),m(2,"p-skeleton",2),r(3,"div"),m(4,"p-skeleton",3)(5,"p-skeleton",4)(6,"p-skeleton",5),s()(),m(7,"p-skeleton",6),r(8,"div",7),m(9,"p-skeleton",8)(10,"p-skeleton",8),s()())}var le=class t{type="form";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-skeleton"]],inputs:{type:"type"},decls:1,vars:1,consts:[[1,"rounded","border","border-surface-200","dark:border-surface-700","p-6","bg-surface-0","dark:bg-surface-900"],[1,"flex","mb-4"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-between","mt-4"],["width","4rem","height","2rem"]],template:function(e,n){if(e&1&&p(0,ii,11,0,"div",0),e&2){let i;I((i=n.type)==="form"?0:-1)}},dependencies:[$t],encapsulation:2})};var oi=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,ri={root:({instance:t,props:o})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":o.fluid}]},Ht=(()=>{class t extends P{name="textarea";theme=oi;classes=ri;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(t)))(i||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Gt=(()=>{class t extends q{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new T;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=g(Ht);constructor(e,n){super(),this.ngModel=e,this.control=n}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(e){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(He(At,8),He(Dt,8))};static \u0275dir=H({type:t,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(n,i){n&1&&b("input",function(h){return i.onInput(h)}),n&2&&at("p-filled",i.filled)("p-textarea-resizable",i.autoResize)("p-variant-filled",i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled")("p-textarea-fluid",i.hasFluid)("p-textarea-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-textarea-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",D],variant:"variant",fluid:[2,"fluid","fluid",D],pSize:"pSize"},outputs:{onResize:"onResize"},features:[V([Ht]),N]})}return t})();var ai=()=>({width:"450px"});function li(t,o){t&1&&m(0,"app-skeleton")}function si(t,o){}function ci(t,o){}function di(t,o){}function pi(t,o){if(t&1&&(r(0,"p-message",15)(1,"small"),v(2,"\xDAltima fecha de actualizaci\xF3n: "),r(3,"b"),v(4),pt(5,"date"),s()()()),t&2){let e=c(2);l(4),he(mt(5,1,e.fechaActualizacionCorreoField.value,"yyyy-MM-dd HH:mm:ss"))}}function mi(t,o){}function ui(t,o){}function fi(t,o){if(t&1){let e=y();r(0,"p-button",30),b("onClick",function(){f(e);let i=c(3);return _(i.onSubmit())}),s()}if(t&2){let e=c(3);a("icon",e.PrimeIcons.SAVE)}}function _i(t,o){if(t&1){let e=y();r(0,"p-button",31),b("onClick",function(){f(e);let i=c(3);return _(i.onSubmit())}),s()}if(t&2){let e=c(3);a("icon",e.PrimeIcons.ARROW_RIGHT)}}function hi(t,o){if(t&1&&p(0,fi,1,1,"p-button",28)(1,_i,1,1,"p-button",29),t&2){let e=c(2);I(e.editingControl.value?0:1)}}function gi(t,o){if(t&1){let e=y();r(0,"p-toolbar"),p(1,si,0,0,"ng-template",null,1,C)(3,ci,0,0,"ng-template",null,2,C)(5,di,0,0,"ng-template",null,3,C),s(),r(7,"p-fluid")(8,"form",5),b("ngSubmit",function(){f(e);let i=c();return _(i.onSubmit())}),r(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9),v(13,"Datos personales"),s(),m(14,"p-divider"),r(15,"div",10),m(16,"label",11),r(17,"div",12),m(18,"input",13)(19,"p-message",14),p(20,pi,6,4,"p-message",15),s()(),r(21,"div",10),m(22,"label",16),r(23,"div",12),m(24,"input",17),s(),m(25,"p-message",14),s(),r(26,"div",10),m(27,"label",18),r(28,"div",12),m(29,"input",19)(30,"p-message",14),s()(),r(31,"div",10),m(32,"label",20),r(33,"div",12),m(34,"input",21)(35,"p-message",14),s()()()(),r(36,"div",7)(37,"div",8)(38,"div",9),v(39,"Actividad"),s(),m(40,"p-divider"),r(41,"div",10),m(42,"label",22),r(43,"div",12),m(44,"textarea",23)(45,"p-message",14),s()()(),r(46,"div",8)(47,"div",9),v(48,"Datos postulaci\xF3n"),s(),m(49,"p-divider"),r(50,"div",10),m(51,"label",24),r(52,"div",12),m(53,"input",25)(54,"p-message",14),s()(),r(55,"div",10),m(56,"label",26),r(57,"div",12),m(58,"input",27)(59,"p-message",14),s()()()()()()(),m(60,"p-divider"),r(61,"p-toolbar"),p(62,mi,0,0,"ng-template",null,1,C)(64,ui,0,0,"ng-template",null,2,C)(66,hi,2,1,"ng-template",null,3,C),s()}if(t&2){let e=c();l(8),a("formGroup",e.form),l(8),a("required",e.correoField),l(3),a("errors",e.correoField.errors)("touched",e.correoField.touched)("dirty",e.correoField.dirty),l(),I(e.fechaActualizacionCorreoField.value?20:-1),l(2),a("required",e.cedulaField),l(3),a("errors",e.cedulaField.errors)("touched",e.cedulaField.touched)("dirty",e.cedulaField.dirty),l(2),a("required",e.nombresField),l(3),a("errors",e.nombresField.errors)("touched",e.nombresField.touched)("dirty",e.nombresField.dirty),l(2),a("required",e.telefonoField),l(3),a("errors",e.telefonoField.errors)("touched",e.telefonoField.touched)("dirty",e.telefonoField.dirty),l(7),a("required",e.nombreActividadField),l(2),a("autoResize",!0),l(),a("errors",e.nombreActividadField.errors)("touched",e.nombreActividadField.touched)("dirty",e.nombreActividadField.dirty),l(6),a("required",e.provinciaField),l(3),a("errors",e.provinciaField.errors)("touched",e.provinciaField.touched)("dirty",e.provinciaField.dirty),l(2),a("required",e.cantonField),l(3),a("errors",e.cantonField.errors)("touched",e.cantonField.touched)("dirty",e.cantonField.dirty)}}function bi(t,o){if(t&1&&m(0,"label",36)(1,"p-inputotp",37)(2,"p-message",14),t&2){let e=c(2);a("required",e.transactionalCodeControl),l(),a("disabled",e.transactionalCodeControl.disabled)("formControl",e.transactionalCodeControl)("length",6)("integerOnly",!0),l(),a("errors",e.transactionalCodeControl.errors)("touched",e.transactionalCodeControl.touched)("dirty",e.transactionalCodeControl.dirty)}}function Ci(t,o){if(t&1){let e=y();r(0,"div",32),m(1,"label",33)(2,"input",34)(3,"p-message",14),r(4,"p-button",35),b("onClick",function(){f(e);let i=c();return _(i.requestTransactionalEmailCode())}),s(),p(5,bi,3,8),s()}if(t&2){let e=c();l(),a("required",e.emailControl),l(),a("pKeyFilter",e.blockSpace)("formControl",e.emailControl),l(),a("errors",e.emailControl.errors)("touched",e.emailControl.touched)("dirty",e.emailControl.dirty),l(),a("disabled",e.emailControl.invalid)("loading",e._coreService.loading())("fluid",!0),l(),I(e.emailControl.valid&&e.transactionalCodeControl.enabled?5:-1)}}var ze=class t{next=new T;_formBuilder=g(Ee);_authHttpService=g(Me);_authService=g(ne);_userHttpService=g(Oe);_customMessageService=g(Ce);form;_coreService=g(ve);PrimeIcons=ee;editingControl=new ie(!1);transactionalCodeControl=new ie({value:null,disabled:!0},[u.required]);emailControl=new ie(null,[u.required,u.email]);transactionalCode="";updateVisible=!1;blockSpace=/^\S*$/;constructor(){this.buildForm(),this.editingControl.valueChanges.subscribe(o=>{o?this.correoField.enable():this.correoField.disable()}),this.emailControl.valueChanges.subscribe(()=>{this.transactionalCodeControl.reset(),this.transactionalCodeControl.disable(),this.emailControl.invalid&&this.transactionalCodeControl.setValue(null)}),this.transactionalCodeControl.valueChanges.subscribe(o=>{o&&o.length===6&&this._authHttpService.verifyTransactionalCode(o,this.emailControl.value).subscribe({next:()=>{this.updateEmail()}})})}ngOnInit(){this.findPersonalInformation()}buildForm(){this.form=this._formBuilder.group({additionalInformation:this.additionalInformationForm}),this.form.disable()}findPersonalInformation(){this._userHttpService.findPersonalInformation(this._authService.auth.id).subscribe({next:o=>{this.form.patchValue(o),this.fechaNacimientoField?.value&&this.edadField?.setValue(zt(new Date,new Date(this.fechaNacimientoField.value)))}})}onSubmit(){this.editingControl.value?this.validateForm&&this.updatePersonalInformation():this.next.next(null)}get validateForm(){let o=[];return o.length>0?(this._customMessageService.showFormErrors(o),this.form.markAsTouched(),!1):!0}updatePersonalInformation(){this._userHttpService.updatePersonalInformation(this._authService.auth.id,this.form.value).subscribe({next:()=>{this.next.next(null)}})}updateEmail(){this._userHttpService.updateEmail(this._authService.auth.id,this.emailControl.value).subscribe({next:()=>{this.correoField.setValue(this.emailControl.value),this.transactionalCodeControl.reset(),this.emailControl.reset(),this.updateVisible=!1,this.findPersonalInformation()}})}requestTransactionalEmailCode(){this.transactionalCodeControl.setValue(null),this.transactionalCodeControl.disable(),this._authHttpService.requestTransactionalEmailCode(this.emailControl.value).subscribe({next:o=>{this.transactionalCodeControl.setValue(null),this.transactionalCodeControl.enable()}})}get additionalInformationForm(){return this._formBuilder.group({edad:[null,[u.required]],idEcuatorianosenaccion:[null,[u.required]],cedula:[null,[u.required]],fechaNacimiento:[null,[u.required]],nombres:[null,[u.required]],genero:[null,[u.required]],idProvincia:[null,[u.required]],provincia:[null,[u.required]],idCanton:[null,[u.required]],canton:[null,[u.required]],idParroquia:[null,[u.required]],parroquia:[null,[u.required]],barrio:[null,[u.required]],callePrincipal:[null,[u.required]],calleSecundaria:[null,[u.required]],telefono:[null,[u.required]],correo:[null,[u.required]],nombreInstitucion:[null,[u.required]],siglas:[null,[u.required]],nombreActividad:[null,[u.required]],cambioCuenta:[null,[u.required]],tipoCuenta:[null,[u.required]],numeroCuenta:[null,[u.required]],nombreCorto:[null,[u.required]],nacionalidad:[null,[u.required]],consentimiento:[null,[u.required]],terminosCondiciones:[null,[u.required]],fechaRegistro:[null,[u.required]],fechaModifica:[null,[u.required]],fechaCorte:[null,[u.required]],numeroPago:[null,[u.required]],monto:[null,[u.required]],estadoOpi:[null,[u.required]],fechaActualizacionCorreo:[null]})}get additionalInformationFormField(){return this.form.controls.additionalInformation}get edadField(){return this.additionalInformationFormField.controls.edad}get idEcuatorianosenaccionField(){return this.additionalInformationFormField.controls.idEcuatorianosenaccion}get cedulaField(){return this.additionalInformationFormField.controls.cedula}get fechaNacimientoField(){return this.additionalInformationFormField.controls.fechaNacimiento}get nombresField(){return this.additionalInformationFormField.controls.nombres}get generoField(){return this.additionalInformationFormField.controls.genero}get idProvinciaField(){return this.additionalInformationFormField.controls.idProvincia}get provinciaField(){return this.additionalInformationFormField.controls.provincia}get idCantonField(){return this.additionalInformationFormField.controls.idCanton}get cantonField(){return this.additionalInformationFormField.controls.canton}get idParroquiaField(){return this.additionalInformationFormField.controls.idParroquia}get parroquiaField(){return this.additionalInformationFormField.controls.parroquia}get barrioField(){return this.additionalInformationFormField.controls.barrio}get callePrincipalField(){return this.additionalInformationFormField.controls.callePrincipal}get calleSecundariaField(){return this.additionalInformationFormField.controls.calleSecundaria}get telefonoField(){return this.additionalInformationFormField.controls.telefono}get correoField(){return this.additionalInformationFormField.controls.correo}get nombreInstitucionField(){return this.additionalInformationFormField.controls.nombreInstitucion}get siglasField(){return this.additionalInformationFormField.controls.siglas}get nombreActividadField(){return this.additionalInformationFormField.controls.nombreActividad}get tipoCuentaField(){return this.additionalInformationFormField.controls.tipoCuenta}get numeroCuentaField(){return this.additionalInformationFormField.controls.numeroCuenta}get nombreCortoField(){return this.additionalInformationFormField.controls.nombreCorto}get nacionalidadField(){return this.additionalInformationFormField.controls.nacionalidad}get consentimientoField(){return this.additionalInformationFormField.controls.consentimiento}get terminosCondicionesField(){return this.additionalInformationFormField.controls.terminosCondiciones}get fechaRegistroField(){return this.additionalInformationFormField.controls.fechaRegistro}get fechaModificaField(){return this.additionalInformationFormField.controls.fechaModifica}get fechaCorteField(){return this.additionalInformationFormField.controls.fechaCorte}get numeroPagoField(){return this.additionalInformationFormField.controls.numeroPago}get montoField(){return this.additionalInformationFormField.controls.monto}get estadoOpiField(){return this.additionalInformationFormField.controls.estadoOpi}get fechaActualizacionCorreoField(){return this.additionalInformationFormField.controls.fechaActualizacionCorreo}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-personal-information"]],outputs:{next:"next"},decls:5,vars:6,consts:[["content",""],["start",""],["center",""],["end",""],["header","Actualizaci\xF3n de Correo",3,"visibleChange","visible","modal"],[3,"ngSubmit","formGroup"],["formGroupName","additionalInformation",1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2"],[1,"card","flex","flex-col","gap-4"],[1,"font-semibold","text-xl"],[1,"grid","grid-cols-12","gap-4"],["appLabel","","for","correo","label","Correo",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],[1,"col-span-12","md:col-span-8"],["pInputText","","type","text","id","correo","formControlName","correo",1,"mb-2"],["severity","error","size","large","appErrorMessage","",3,"errors","touched","dirty"],["severity","info","size","large"],["appLabel","","for","cedula","label","C\xE9dula",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","cedula","formControlName","cedula"],["appLabel","","for","nombres","label","Nombres",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","nombres","formControlName","nombres"],["appLabel","","for","telefono","label","Tel\xE9fono",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","telefono","formControlName","telefono"],["appLabel","","for","nombreActividad","label","Actividad",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pTextarea","","id","nombreActividad","formControlName","nombreActividad",3,"autoResize"],["appLabel","","for","provincia","label","Provincia",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","provincia","formControlName","provincia"],["appLabel","","for","canton","label","Cant\xF3n",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","canton","formControlName","canton"],["type","button","label","Guardar y Continuar","size","large","severity","success",3,"icon"],["type","button","label","Continuar","size","large","iconPos","right",3,"icon"],["type","button","label","Guardar y Continuar","size","large","severity","success",3,"onClick","icon"],["type","button","label","Continuar","size","large","iconPos","right",3,"onClick","icon"],[1,"flex","flex-col","gap-6"],["appLabel","","for","correo","label","Nuevo correo",1,"block","font-bold","mb-3",3,"required"],["pInputText","","id","email","autocomplete","on","autofocus","","fluid","",1,"col-span-12","md:col-span-4","flex","items-center",3,"pKeyFilter","formControl"],["label","Solicitar C\xF3digo",3,"onClick","disabled","loading","fluid"],["appLabel","","for","transactionalCode","label","Ingrese el c\xF3digo enviado a su correo",1,"block","font-bold","mb-3",3,"required"],["id","transactionalCode",3,"disabled","formControl","length","integerOnly"]],template:function(e,n){if(e&1){let i=y();p(0,li,1,0,"app-skeleton")(1,gi,68,31),r(2,"p-dialog",4),K("visibleChange",function(h){return f(i),Z(n.updateVisible,h)||(n.updateVisible=h),_(h)}),p(3,Ci,6,10,"ng-template",null,0,C),s()}e&2&&(I(n._coreService.loading()?0:1),l(2),Q(ge(5,ai)),W("visible",n.updateVisible),a("modal",!0))},dependencies:[z,Ve,oe,De,Te,xe,we,Fe,re,ae,Ae,Mt,Ie,ke,Se,ye,Le,le,Re,Gt,qt,Pe,Ne,_t,Nt],encapsulation:2})};function vi(t,o){t&1&&m(0,"app-skeleton")}function yi(t,o){}function xi(t,o){}function wi(t,o){}function Fi(t,o){t&1&&m(0,"i",22)}function Ti(t,o){}function Ii(t,o){}function Si(t,o){if(t&1){let e=y();r(0,"p-button",25),b("onClick",function(){f(e);let i=c(3);return _(i.onSubmit())}),s()}if(t&2){let e=c(3);a("icon",e.PrimeIcons.SAVE)}}function ki(t,o){if(t&1){let e=y();r(0,"p-button",23),b("onClick",function(){f(e);let i=c(2);return _(i.previous.emit(null))}),s(),p(1,Si,1,1,"p-button",24)}if(t&2){let e=c(2);a("icon",e.PrimeIcons.ARROW_LEFT),l(),I(e.checked.value?1:-1)}}function Ei(t,o){if(t&1){let e=y();r(0,"p-toolbar"),p(1,yi,0,0,"ng-template",null,0,C)(3,xi,0,0,"ng-template",null,1,C)(5,wi,0,0,"ng-template",null,2,C),s(),r(7,"p-fluid")(8,"form",4),b("ngSubmit",function(){f(e);let i=c();return _(i.onSubmit())}),r(9,"div",5)(10,"div",6)(11,"div",7)(12,"p-message",8),p(13,Fi,1,0,"ng-template",null,3,C),r(15,"span",9)(16,"b"),v(17,"Informativo:"),s(),v(18," si su cuenta bancaria no es correcta dirigirse al siguiente enlace "),s(),r(19,"p-button",10),b("onClick",function(){f(e);let i=c();return _(i.linkToEEA())}),v(20," Actualizaci\xF3n Ecuatorianos en Acci\xF3n "),s()()(),r(21,"div",11)(22,"div",12),v(23,"Datos cuenta bancaria"),s(),m(24,"p-divider"),r(25,"div",13),m(26,"label",14),r(27,"div",15),m(28,"p-select",16)(29,"p-message",17),s()(),r(30,"div",13),m(31,"label",18),r(32,"div",15),m(33,"input",19)(34,"p-message",17),s()(),r(35,"div",13),m(36,"label",20),r(37,"div",15),m(38,"input",21)(39,"p-message",17),s()()()()()()(),r(40,"p-toolbar"),p(41,Ti,0,0,"ng-template",null,0,C)(43,Ii,0,0,"ng-template",null,1,C)(45,ki,2,2,"ng-template",null,2,C),s()}if(t&2){let e=c();l(8),a("formGroup",e.form),l(11),a("outlined",!0),l(7),a("required",e.accountTypeField),l(2),a("options",e.accountTypes),l(),a("errors",e.accountTypeField==null?null:e.accountTypeField.errors)("touched",e.accountTypeField==null?null:e.accountTypeField.touched)("dirty",e.accountTypeField==null?null:e.accountTypeField.dirty),l(2),a("required",e.accountNumberField),l(3),a("errors",e.accountNumberField==null?null:e.accountNumberField.errors)("touched",e.accountNumberField==null?null:e.accountNumberField.touched)("dirty",e.accountNumberField==null?null:e.accountNumberField.dirty),l(2),a("required",e.accountNameField),l(3),a("errors",e.accountNameField==null?null:e.accountNameField.errors)("touched",e.accountNameField==null?null:e.accountNameField.touched)("dirty",e.accountNameField==null?null:e.accountNameField.dirty)}}var Ue=class t{next=new T;previous=new T;_formBuilder=g(Ee);_authService=g(ne);_userHttpService=g(Oe);_customMessageService=g(Ce);form;_coreService=g(ve);PrimeIcons=ee;checked=new ie(!1);accountTypes=["CUENTA DE AHORRO","CUENTA CORRIENTE"];constructor(){this.buildForm(),this.checked.valueChanges.subscribe({next:o=>{o?this.form.enable():this.form.disable()}})}ngOnInit(){this.findBankDetail()}buildForm(){this.form=this._formBuilder.group({additionalInformation:this.additionalInformationForm}),this.form.disable()}get additionalInformationForm(){return this._formBuilder.group({tipoCuenta:[null,[u.required]],numeroCuenta:[null,[u.required]],nombreCorto:[null,[u.required]],cambioCuenta:[null,[u.required]]})}findBankDetail(){this._userHttpService.findBankDetail(this._authService.auth.id).subscribe({next:o=>{this.form.patchValue(o)}})}onSubmit(){this.validateForm&&this.updateBankDetail()}updateBankDetail(){this._userHttpService.updateBankDetail(this._authService.auth.id,this.form.value).subscribe({next:()=>{this.findBankDetail()}})}linkToEEA(){window.open("https://ecuatorianosenaccion.inclusion.gob.ec/SIIMIESPUBLIC/views/public/actualizacionEcuatorianosEnAccion.jsf","_blank")}get validateForm(){let o=[];return this.accountTypeField?.invalid&&o.push("Tipo de cuenta"),this.accountNumberField?.invalid&&o.push("N\xFAmero de cuenta"),this.accountNameField?.invalid&&o.push("Nombre corto"),o.length>0?(this._customMessageService.showFormErrors(o),this.form.markAsTouched(),!1):!0}get additionalInformationFormField(){return this.form.get("additionalInformation")}get accountTypeField(){return this.additionalInformationFormField.get("accountType")}get accountNumberField(){return this.additionalInformationFormField.get("accountNumber")}get accountNameField(){return this.additionalInformationFormField.get("accountName")}get accountChangedField(){return this.additionalInformationFormField.get("cambioCuenta")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-bank-detail"]],outputs:{next:"next",previous:"previous"},decls:2,vars:1,consts:[["start",""],["center",""],["end",""],["icon",""],[3,"ngSubmit","formGroup"],[1,"flex","flex-col","md:flex-row","gap-8","mt-6"],[1,"w-full"],[1,"card","flex","flex-col","gap-4"],["severity","info","size","large"],[1,"ml-2","mr-2"],["severity","warn",3,"onClick","outlined"],["formGroupName","additionalInformation",1,"card","flex","flex-col","gap-4"],[1,"font-semibold","text-xl"],[1,"grid","grid-cols-12","gap-4"],["appLabel","","for","accountType","label","Tipo de cuenta",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],[1,"col-span-12","md:col-span-8"],["id","accountType","formControlName","tipoCuenta",1,"w-full",3,"options"],["appErrorMessage","","severity","error","variant","simple","size","small",3,"errors","touched","dirty"],["appLabel","","for","numeroCuenta","label","N\xFAmero de cuenta",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","numeroCuenta","formControlName","numeroCuenta"],["appLabel","","for","nombreCorto","label","Nombre corto",1,"col-span-12","md:col-span-4","flex","items-center",3,"required"],["pInputText","","type","text","id","nombreCorto","formControlName","nombreCorto"],[1,"pi","pi-info-circle"],["type","button","label","Regresar","size","large","iconPos","left","severity","warn",1,"mr-2",3,"onClick","icon"],["type","button","label","Guardar","size","large","severity","success","iconPos","right",3,"icon"],["type","button","label","Guardar","size","large","severity","success","iconPos","right",3,"onClick","icon"]],template:function(e,n){e&1&&p(0,vi,1,0,"app-skeleton")(1,Ei,47,15),e&2&&I(n._coreService.loading()?0:1)},dependencies:[z,ye,re,Ve,oe,ae,Ae,Te,xe,we,Fe,Ie,ke,Se,le,Le,Re,Vt],encapsulation:2})};var Di=()=>({width:"25rem"}),Yt=(t,o)=>({"bg-primary text-primary-contrast border-primary":t,"border-surface":o});function Ai(t,o){if(t&1){let e=y();r(0,"button",9),b("click",function(){let i=f(e).activateCallback;return _(i())}),r(1,"span",10),m(2,"i",11),s()(),v(3," 1: Datos Personales ")}if(t&2){let e=o.value,n=c(2);l(),a("ngClass",ce(1,Yt,e<=n.activeStep,e>n.activeStep))}}function Mi(t,o){if(t&1){let e=y();r(0,"button",9),b("click",function(){let i=f(e).activateCallback;return _(i())}),r(1,"span",10),m(2,"i",12),s()(),v(3," 2: Datos Bancarios ")}if(t&2){let e=o.value,n=c(2);l(),a("ngClass",ce(1,Yt,e<=n.activeStep,e>n.activeStep))}}function Ni(t,o){if(t&1){let e=y();r(0,"app-personal-information",13),b("next",function(){let i=f(e).activateCallback;return _(i(2))}),s()}}function Vi(t,o){if(t&1){let e=y();r(0,"app-bank-detail",14),b("previous",function(){let i=f(e).activateCallback;return _(i(1))})("next",function(){let i=f(e).activateCallback;return _(i(3))}),s()}}function Oi(t,o){t&1&&(r(0,"div",15)(1,"span",16),v(2,"Bienvenido"),s()())}function Ri(t,o){if(t&1){let e=y();r(0,"p-button",17),b("click",function(){f(e);let i=c(2);return _(i.visibleBanner=!1)}),s()}}function Pi(t,o){if(t&1){let e=y();r(0,"p-stepper",4),K("valueChange",function(i){f(e);let d=c();return Z(d.activeStep,i)||(d.activeStep=i),_(i)}),r(1,"p-step-list")(2,"p-step",5),p(3,Ai,4,4,"ng-template",null,0,C),s(),r(5,"p-step",5),p(6,Mi,4,4,"ng-template",null,0,C),s()(),r(8,"p-step-panels")(9,"p-step-panel",6),p(10,Ni,1,0,"ng-template",null,0,C),s(),r(12,"p-step-panel",6),p(13,Vi,1,0,"ng-template",null,0,C),s()()(),r(15,"p-dialog",7),K("visibleChange",function(i){f(e);let d=c();return Z(d.visibleBanner,i)||(d.visibleBanner=i),_(i)}),p(16,Oi,3,0,"ng-template",null,1,C),m(18,"img",8),p(19,Ri,1,0,"ng-template",null,2,C),s()}if(t&2){let e=c();W("value",e.activeStep),l(2),a("value",1),l(3),a("value",2),l(4),a("value",1),l(3),a("value",2),l(3),Q(ge(9,Di)),W("visible",e.visibleBanner),a("modal",!0)}}function qi(t,o){t&1&&(r(0,"div",20)(1,"h5",19),v(2,"T\xC9RMINOS Y CONDICIONES DEL MECANISMO \u201CECUATORIANOS EN ACCI\xD3N\u201D, PRIVACIDAD DE LA PLATAFORMA DIGITAL Y AUTORIZACI\xD3N DE TRATAMIENTO DE DATOS PERSONALES "),s()())}function Bi(t,o){if(t&1){let e=y();r(0,"div",20)(1,"p-button",21),b("onClick",function(){f(e);let i=c(2);return _(i.acceptTermsConditions())}),s(),r(2,"p-button",22),b("onClick",function(){f(e);let i=c(2);return _(i.downloadTermsConditions())}),s(),r(3,"p-button",23),b("onClick",function(){f(e);let i=c(2);return _(i.rejectTermsConditions())}),s()()}if(t&2){let e=c(2);l(),a("icon",e.PrimeIcons.CHECK),l(),a("icon",e.PrimeIcons.DOWNLOAD),l(),a("icon",e.PrimeIcons.BAN)}}function Li(t,o){if(t&1){let e=y();r(0,"p-drawer",18),K("visibleChange",function(i){f(e);let d=c();return Z(d.visible,i)||(d.visible=i),_(i)}),b("onHide",function(){f(e);let i=c();return _(i.rejectTermsConditions())}),p(1,qi,3,0,"ng-template",null,1,C),r(3,"div",19)(4,"p"),v(5," Yo, en mi calidad de \u201CUSUARIO\u201D, otorgo mi aceptaci\xF3n expresa y voluntaria de los t\xE9rminos y condiciones de uso y privacidad de la plataforma digital del Ministerio de Turismo y autorizaci\xF3n de tratamiento de mis datos personales en los siguientes t\xE9rminos: "),s(),r(6,"p"),v(7," De conformidad con las disposiciones de la Ley Org\xE1nica de Protecci\xF3n de Datos Personales, publicada en el 5to Suplemento del Registro Oficial Nro. 459, de 26 de mayo de 2021, y dem\xE1s normativa conexa en materia de protecci\xF3n de datos vigente en el Ecuador, he sido informado sobre los t\xE9rminos y condiciones de uso y privacidad de la plataforma digital del Ministerio de Turismo y autorizaci\xF3n de tratamiento de mis datos personales, al que se accede por medio de la URL https://capacitacion.turismo.gob.ec:8443/moodle/login/index.php "),s(),r(8,"p"),v(9,' El acceso a la plataforma institucional tiene por objeto conceder al \u201CUSUARIO\u201D la facultad de utilizar la misma para acceder a la informaci\xF3n y actividades que determine la Autoridad Nacional de Turismo en el mecanismo denominado "ECUATORIANOS EN ACCI\xD3N " (en adelante, "LA PLATAFORMA DIGITAL"). '),s(),r(10,"p"),v(11,' El \u201CUSUARIO\u201D deber\xE1 crear una cuenta y ser\xE1 el \xFAnico responsable y custodio de la contrase\xF1a, mediante la cual tendr\xE1 acceso a la informaci\xF3n y actividades determinadas en el marco del mecanismo denominado "ECUATORIANOS EN ACCI\xD3N ", conforme a la normativa vigente. El \u201CUSUARIO\u201D ser\xE1 el responsable \xFAnico de cualquier actividad asociada a su cuenta y a la contrase\xF1a registrada para el uso de la \u201CPLATAFORMA DIGITAL\u201D. '),s(),r(12,"p"),v(13),s(),r(14,"p"),v(15,' Toda comunicaci\xF3n dirigida al \u201CUSUARIO\u201D por parte de la \u201CPLATAFORMA DIGITAL\u201D que tenga relaci\xF3n con el mecanismo "ECUATORIANOS EN ACCI\xD3N " se enviar\xE1 a la direcci\xF3n de correo electr\xF3nico que el \u201CUSUARIO\u201D registr\xF3 al momento de la inscripci\xF3n. Es responsabilidad del \u201CUSUARIO\u201D notificar cualquier modificaci\xF3n respecto a la direcci\xF3n de correo electr\xF3nico registrado y no podr\xE1 alegar desconocimiento de informaci\xF3n que le hubiese sido enviada a trav\xE9s de la \u201CPLATAFORMA DIGITAL\u201D. '),s(),r(16,"p"),v(17," Por lo expuesto, el \u201CUSUARIO\u201D reconoce la validez jur\xEDdica de los mensajes de datos autorizados o expedidos por el Ministerio de Turismo a trav\xE9s de la \u201CPLATAFORMA DIGITAL\u201D, conforme lo determina el art\xEDculo 2 de la Ley de Comercio Electr\xF3nico, Firmas Electr\xF3nicas y Mensajes de Datos. La documentaci\xF3n e informaci\xF3n proporcionada por el \u201CUSUARIO\u201D, podr\xE1 ser utilizada por el Ministerio de Turismo cuando este lo requiera. "),s()(),p(18,Bi,4,3,"ng-template",null,2,C),s()}if(t&2){let e=c();W("visible",e.visible),a("closable",!1),l(13),lt(" Cualquier uso no autorizado o violaci\xF3n de seguridad que el \u201CUSUARIO\u201D haya detectado sobre su cuenta deber\xE1 ser notificado inmediatamente al Ministerio de Turismo al correo electr\xF3nico: ","ecuatorianosenaccion@turismo.gob.ec"," ")}}var je=class t{_authHttpService=g(Me);_authService=g(ne);activeStep=1;visible;visibleBanner;termsConditions;PrimeIcons=ee;constructor(){this.visible=!this._authService.auth.termsConditions,this.termsConditions=this._authService.auth.termsConditions,this.visibleBanner=this._authService.auth.termsConditions}acceptTermsConditions(){this._authHttpService.acceptTermsConditions().subscribe({next:o=>{this.termsConditions=!0,this.visibleBanner=!0,this.visible=!1}})}rejectTermsConditions(){this._authService.auth?.termsConditions||this._authHttpService.rejectTermsConditions().subscribe({next:()=>{this._authService.removeLogin()}})}downloadTermsConditions(){window.open("files/terms_conditions.pdf","_blank")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-validation-guide"]],decls:2,vars:2,consts:[["content",""],["header",""],["footer",""],["styleClass","!w-full md:!w-80 lg:!w-[70rem]",3,"visible","closable"],[1,"basis-[50rem]",3,"valueChange","value"],[1,"flex","flex-row","flex-auto","gap-2",3,"value"],[3,"value"],[3,"visibleChange","visible","modal"],["src","images/components/banner1.jpg","alt",""],[1,"bg-transparent","border-0","inline-flex","flex-col","gap-2",3,"click"],[1,"rounded-full","border-2","w-12","h-12","inline-flex","items-center","justify-center",3,"ngClass"],[1,"pi","pi-user"],[1,"pi","pi-money-bill"],[3,"next"],[3,"previous","next"],[1,"inline-flex","items-center","justify-center","gap-2"],[1,"font-bold","whitespace-nowrap"],["label","Cerrar",3,"click"],["styleClass","!w-full md:!w-80 lg:!w-[70rem]",3,"visibleChange","onHide","visible","closable"],[1,"text-justify"],[1,"flex","items-center","gap-2"],["label","Aceptar",1,"w-full",3,"onClick","icon"],["label","Seguir leyendo","severity","info",1,"w-full",3,"onClick","icon"],["label","Rechazar","severity","danger",1,"w-full",3,"onClick","icon"]],template:function(e,n){e&1&&p(0,Pi,21,10)(1,Li,20,3,"p-drawer",3),e&2&&(I(n.termsConditions?0:-1),l(),I(n.termsConditions?-1:1))},dependencies:[kt,Ft,Tt,O,St,It,De,ze,Ue,Rt,z,Ne],encapsulation:2})};var rl=[{path:wt.pages.users.profile,component:je}];export{rl as default};
