import{c as _}from"./chunk-VGCEVFP6.js";import{c as G,d as O,f as g,g as C,h as P}from"./chunk-WCGJ44IN.js";import{a as pe,b as he}from"./chunk-UOAM75BV.js";import{B as ee,Ba as ce,Ea as de,F as te,Ga as ue,J as ie,S as D,Z as oe,_ as ne,b as y,e as X,qa as re,u as J,ua as se,va as ae,xa as le}from"./chunk-RIYVHW5G.js";import{$b as N,Ab as F,Fb as M,Gb as f,Hb as a,Ib as B,Jb as Z,Jc as U,Lb as T,Lc as Y,Mc as W,Nb as I,Nc as q,Ob as x,Q as u,Qc as K,Ra as $,Sa as V,Sc as b,W as s,Zb as j,ac as L,ca as c,da as p,db as A,ga as w,hb as R,ib as h,na as k,oa as H,pb as z,qb as m,s as d,sc as v,tc as Q,ub as E,zb as S}from"./chunk-5MZ4X5ZA.js";var me=class t{_httpClient=s(X);_apiUrl=`${pe.API_URL}/states`;_customMessageService=s(he);findStatesByIdentification(r){let e=`${this._apiUrl}`,i=new y().append("identification",r);return this._httpClient.get(e,{params:i}).pipe(d(o=>o.data))}createCommentary(r,e){let i=`${this._apiUrl}/commentaries`,o=new y().append("identification",r);return this._httpClient.post(i,{commentary:e},{params:o}).pipe(d(n=>(this._customMessageService.showSuccess({summary:n.title,detail:n.message}),n.data)))}createReview(r){let e=`${this._apiUrl}/reviews`,i=new y().append("identification",r);return this._httpClient.post(e,null,{params:i}).pipe(d(o=>(this._customMessageService.showSuccess({summary:o.title,detail:o.message}),o.data)))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};var be=["content"],ye=["*"],ge=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),Ce=(t,r)=>({value:t,params:r}),_e=t=>({closeCallback:t});function we(t,r){}function ke(t,r){t&1&&h(0,we,0,0,"ng-template")}function Se(t,r){if(t&1){let e=M();S(0,"div",1),f("click",function(o){c(e);let n=a();return p(n.onOverlayClick(o))})("@animation.start",function(o){c(e);let n=a();return p(n.onAnimationStart(o))})("@animation.done",function(o){c(e);let n=a();return p(n.onAnimationEnd(o))}),S(1,"div",2),f("click",function(o){c(e);let n=a();return p(n.onContentClick(o))})("mousedown",function(o){c(e);let n=a();return p(n.onContentClick(o))}),Z(2),h(3,ke,1,0,null,3),F()()}if(t&2){let e=a();E(e.styleClass),m("ngClass","p-popover p-component")("ngStyle",e.style)("@animation",L(13,Ce,e.overlayVisible?"open":"close",L(10,ge,e.showTransitionOptions,e.hideTransitionOptions))),z("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),V(3),m("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",N(16,_e,e.onCloseClick.bind(e)))}}var Te=({dt:t})=>`
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

`,Ie={root:"p-popover p-component",content:"p-popover-content"},fe=(()=>{class t extends ce{name="popover";theme=Te;classes=Ie;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),ot=(()=>{class t extends de{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new k;onHide=new k;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=s(fe);zone=s(H);overlayService=s(re);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(b(this.platformId)&&!this.documentClickListener){let e=oe()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i))}show(e,i){i&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):te(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&_.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),ee(this.container,this.target,!1);let e=D(this.container),i=D(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(le("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),J(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&_.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ie(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ne()&&this.hide()}bindDocumentResizeListener(){if(b(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){b(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ue(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&_.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=A({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&(T(n,be,4),T(n,se,4)),i&2){let l;I(l=x())&&(o.contentTemplate=l.first),I(l=x())&&(o.templates=l)}},hostBindings:function(i,o){i&1&&f("keydown.escape",function(l){return o.onEscapeKeydown(l)},!1,$)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",v],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",v],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",Q],focusOnShow:[2,"focusOnShow","focusOnShow",v],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[j([fe]),R],ngContentSelectors:ye,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(B(),h(0,Se,4,18,"div",0)),i&2&&m("ngIf",o.render)},dependencies:[K,U,Y,q,W,ae],encapsulation:2,data:{animation:[G("animation",[C("void",g({transform:"scaleY(0.8)",opacity:0})),C("close",g({opacity:0})),C("open",g({transform:"translateY(0)",opacity:1})),P("void => open",O("{{showTransitionParams}}")),P("open => close",O("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})();export{me as a,ot as b};
