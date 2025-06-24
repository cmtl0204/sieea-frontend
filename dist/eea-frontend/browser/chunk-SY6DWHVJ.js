import{Ba as O,Ea as q,ua as E,va as N}from"./chunk-BKM7E45K.js";import{Ab as u,Bb as $,Cb as k,Db as I,Hb as l,Ib as x,Jb as M,Jc as S,Lb as d,Lc as z,Nb as f,Nc as B,Ob as m,Q as _,Qc as Q,Sa as o,Sb as w,Tb as D,W as v,Zb as F,db as h,ga as g,hb as T,ib as r,qb as i,sc as j,tb as b,ub as C,zb as p}from"./chunk-5MZ4X5ZA.js";var P=["icon"],R=["*"];function V(e,c){if(e&1&&$(0,"span",4),e&2){let t=l(2);i("ngClass",t.icon)}}function H(e,c){if(e&1&&(k(0),r(1,V,1,1,"span",3),I()),e&2){let t=l();o(),i("ngIf",t.icon)}}function G(e,c){}function J(e,c){e&1&&r(0,G,0,0,"ng-template")}function K(e,c){if(e&1&&(p(0,"span",5),r(1,J,1,0,null,6),u()),e&2){let t=l();o(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var L=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,U={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},A=(()=>{class e extends O{name="tag";theme=L;classes=U;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var de=(()=>{class e extends q{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=v(A);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,y){if(a&1&&(d(y,P,4),d(y,E,4)),a&2){let s;f(s=m())&&(n.iconTemplate=s.first),f(s=m())&&(n.templates=s)}},hostVars:4,hostBindings:function(a,n){a&2&&(b(n.style),C(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",j]},features:[F([A]),T],ngContentSelectors:R,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(x(),M(0),r(1,H,2,1,"ng-container",0)(2,K,2,1,"span",1),p(3,"span",2),w(4),u()),a&2&&(o(),i("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),i("ngIf",n.iconTemplate||n._iconTemplate),o(2),D(n.value))},dependencies:[Q,S,z,B,N],encapsulation:2,changeDetection:0})}return e})();export{de as a};
