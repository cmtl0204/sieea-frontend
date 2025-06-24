import{c as g}from"./chunk-VGCEVFP6.js";import{c as G,d as O,f as b,g as y,h as P}from"./chunk-WCGJ44IN.js";import{a as pe,b as he}from"./chunk-UOAM75BV.js";import{B as ee,Ba as ce,Ea as de,F as te,Ga as ue,J as ie,S as D,Z as oe,_ as ne,b as L,e as X,qa as re,u as J,ua as se,va as ae,xa as le}from"./chunk-RIYVHW5G.js";import{$b as N,Ab as F,Fb as M,Gb as m,Hb as a,Ib as B,Jb as Z,Jc as U,Lb as S,Lc as Y,Mc as W,Nb as T,Nc as q,Ob as x,Q as d,Qc as K,Ra as $,Sa as V,Sc as v,W as s,Zb as j,ac as I,ca as c,da as p,db as A,ga as _,hb as z,ib as u,na as w,oa as H,pb as R,qb as h,s as C,sc as f,tc as Q,ub as E,zb as k}from"./chunk-5MZ4X5ZA.js";var me=class t{_httpClient=s(X);_apiUrl=`${pe.API_URL}/states`;_customMessageService=s(he);findStatesByIdentification(r){let e=`${this._apiUrl}`,i=new L().append("identification",r);return this._httpClient.get(e,{params:i}).pipe(C(o=>o.data))}createCommentary(r,e){let i=`${this._apiUrl}/commentaries`,o=new L().append("identification",r);return this._httpClient.post(i,{commentary:e},{params:o}).pipe(C(n=>(this._customMessageService.showSuccess({summary:n.title,detail:n.message}),n.data)))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})};var be=["content"],ye=["*"],ge=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),Ce=(t,r)=>({value:t,params:r}),_e=t=>({closeCallback:t});function we(t,r){}function ke(t,r){t&1&&u(0,we,0,0,"ng-template")}function Se(t,r){if(t&1){let e=M();k(0,"div",1),m("click",function(o){c(e);let n=a();return p(n.onOverlayClick(o))})("@animation.start",function(o){c(e);let n=a();return p(n.onAnimationStart(o))})("@animation.done",function(o){c(e);let n=a();return p(n.onAnimationEnd(o))}),k(1,"div",2),m("click",function(o){c(e);let n=a();return p(n.onContentClick(o))})("mousedown",function(o){c(e);let n=a();return p(n.onContentClick(o))}),Z(2),u(3,ke,1,0,null,3),F()()}if(t&2){let e=a();E(e.styleClass),h("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",I(13,Ce,e.overlayVisible?"open":"close",I(10,ge,e.showTransitionOptions,e.hideTransitionOptions))),R("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),V(3),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",N(16,_e,e.onCloseClick.bind(e)))}}var Te=({dt:t})=>`
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

`,xe={root:"p-popover p-component",content:"p-popover-content"},fe=(()=>{class t extends ce{name="popover";theme=Te;classes=xe;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})(),ot=(()=>{class t extends de{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new w;onHide=new w;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=s(fe);zone=s(H);overlayService=s(re);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(v(this.platformId)&&!this.documentClickListener){let e=oe()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):te(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&g.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),ee(this.container,this.target,!1);let e=D(this.container),i=D(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(le("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),J(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&g.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ie(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ne()&&this.hide()}bindDocumentResizeListener(){if(v(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){v(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ue(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&g.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=A({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&(S(n,be,4),S(n,se,4)),i&2){let l;T(l=x())&&(o.contentTemplate=l.first),T(l=x())&&(o.templates=l)}},hostBindings:function(i,o){i&1&&m("keydown.escape",function(l){return o.onEscapeKeydown(l)},!1,$)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",f],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",f],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",Q],focusOnShow:[2,"focusOnShow","focusOnShow",f],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[j([fe]),z],ngContentSelectors:ye,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(B(),u(0,Se,4,18,"div",0)),i&2&&h("ngIf",o.render)},dependencies:[K,U,Y,q,W,ae],encapsulation:2,data:{animation:[G("animation",[y("void",b({transform:"scaleY(0.8)",opacity:0})),y("close",b({opacity:0})),y("open",b({transform:"translateY(0)",opacity:1})),P("void => open",O("{{showTransitionParams}}")),P("open => close",O("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})();export{me as a,ot as b};
