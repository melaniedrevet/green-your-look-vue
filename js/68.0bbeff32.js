(self["webpackChunkgreen_your_look_vue"]=self["webpackChunkgreen_your_look_vue"]||[]).push([[68],{4068:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"mb-5"},[n("h1",[e._v(e._s(e.style)+" "+e._s(e.type))]),n("h4",[e._v(" Découvrez notre sélection de looks "+e._s(e.style)+" pour "+e._s(e.type)+". Des tenues complètes de vêtements éco-responsables. ")]),n("look-card")],1)},i=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{attrs:{align:"center"}},[s("v-expansion-panels",{attrs:{accordion:"",focusable:""}},e._l(e.looksFemmes,(function(t,i){return s("v-col",{key:i,attrs:{cols:"12",md:"3",sm:"6",xs:"12"}},[s("v-expansion-panel",{staticStyle:{"max-width":"220px"}},[s("v-expansion-panel-header",{staticStyle:{padding:"0"},attrs:{"expand-icon":""}},[s("v-card",{attrs:{"max-width":"220"}},[s("v-img",{attrs:{src:n(3398),alt:"look"}}),s("v-card-title",[e._v(" "+e._s(t.name)+" "),s("v-spacer"),s("span",[e._v(e._s(t.price))])],1),s("v-divider"),s("v-item-group",{staticStyle:{display:"flex","justify-content":"center"}},e._l(t.label,(function(e,t){return s("v-item",{key:t,staticClass:"mx-2 my-4"},[s("v-img",{attrs:{src:n(6003)("./"+e+".png"),alt:"bio","max-width":"30"}})],1)})),1)],1)],1),s("v-expansion-panel-content",[e._v(" "+e._s(t.name)+" ")])],1)],1)})),1)],1)],1)},o=[],l={name:"LookCard",data(){return{looksFemmes:[{name:"Look 1",img:"",price:"36 €",label:["bio","recycle"]},{name:"Look 2",img:"",price:"36 €",label:["bio","europe","vegan"]},{name:"Look 3",img:"",price:"36 €",label:["bio"]},{name:"Look 4",img:"",price:"36 €",label:["bio","recycle"]},{name:"Look 5",img:"",price:"36 €",label:["bio","recycle"]},{name:"Look 6",img:"",price:"36 €",label:["bio","europe","vegan"]},{name:"Look 7",img:"",price:"36 €",label:["bio"]},{name:"Look 8",img:"",price:"36 €",label:["bio","recycle"]}]}}},r=l,c=n(1001),p=n(3453),d=n.n(p),h=n(5893),u=n(5255),v=n(7024),m=n(6530),x=n(5596),g=n(1302),b=n(950),y=n(8131),f=n(5530),k=(0,f.Z)((0,g.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,b.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,y.z9)(this))}}),_=n(6930),A=n(6986),C=n(5836);const w=(0,f.Z)(A.Z,C.Z,(0,b.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var Z=w.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(_.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,y.z9)(this))])])))}}),$=n(9524),P=n(4749);const B=(0,f.Z)(C.Z,(0,b.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var V=B.extend().extend({name:"v-expansion-panel-header",directives:{ripple:P.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,y.z9)(this,"actions")||[this.$createElement($.Z,this.expandIcon)];return this.$createElement(_.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,y.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),I=n(7228),D=n(8219),L=I.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...I.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,D.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,D.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}}),E=n(5288),S=n(144);const M=S.Z.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return(0,D.Kd)("v-item is missing a default scopedSlot",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:{[this.activeClass]:this.isActive}}),e):((0,D.Kd)("v-item should only contain a single element",this),e)}});var R=(0,f.Z)(M,(0,g.d)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),z=n(7894),O=n(2515),H=(0,c.Z)(r,a,o,!1,null,"f4923b4c",null),F=H.exports;d()(H,{VCard:h.Z,VCardTitle:u.EB,VCol:v.Z,VContainer:m.Z,VDivider:x.Z,VExpansionPanel:k,VExpansionPanelContent:Z,VExpansionPanelHeader:V,VExpansionPanels:L,VImg:E.Z,VItem:R,VItemGroup:I.Z,VRow:z.Z,VSpacer:O.Z});var K={name:"Looks",data(){return{type:this.$route.params.type,style:this.$route.params.style}},components:{LookCard:F},watch:{$route(){this.type=this.$route.params.type}}},T=K,j=(0,c.Z)(T,s,i,!1,null,null,null),q=j.exports;d()(j,{VContainer:m.Z})},6003:function(e,t,n){var s={"./bio.png":5853,"./europe.png":9079,"./recycle.png":7864,"./vegan.png":8380};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id=6003},3398:function(e,t,n){"use strict";e.exports=n.p+"img/basique.556e7239.png"},5853:function(e,t,n){"use strict";e.exports=n.p+"img/bio.c7d87564.png"},9079:function(e,t,n){"use strict";e.exports=n.p+"img/europe.55c83220.png"},7864:function(e,t,n){"use strict";e.exports=n.p+"img/recycle.7db5f790.png"},8380:function(e,t,n){"use strict";e.exports=n.p+"img/vegan.ead761c4.png"}}]);
//# sourceMappingURL=68.0bbeff32.js.map