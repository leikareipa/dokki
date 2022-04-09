!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},5:t=>{t.exports=e}},o={};function i(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var a={};return(()=>{i.r(a),i.d(a,{start:()=>Ze});const e=new Vuex.Store({state:{tags:{},dokkiTopic:{lifetimeCount:0,revealQueue:[]},topics:[],areTopicsReady:!1,loremCount:0,productName:void 0,productVersion:void 0,tagHashMarker:"#/"},mutations:{queue_topic_reveal(e,t){console.assert(!e.areTopicsReady,"No more topics should be queued."),console.assert("function"==typeof t),e.dokkiTopic.revealQueue.push(t),e.dokkiTopic.lifetimeCount++,1==e.dokkiTopic.lifetimeCount&&function t(){console.assert(e.dokkiTopic.revealQueue.length),window.requestAnimationFrame((()=>{e.dokkiTopic.revealQueue.shift()(),e.dokkiTopic.revealQueue.length?t():e.areTopicsReady=!0}))}()},add_tag(e,t=""){console.assert("string"==typeof t),t=t.toLowerCase(),e.tags[t]=1+(e.tags[t]||0)},remove_tag(e,t=""){console.assert("string"==typeof t),t=t.toLowerCase(),e.tags.hasOwnProperty(t)&&(e.tags[t]--,e.tags[t]<=0&&delete e.tags[t])},add_topic(e,t={}){console.assert("object"==typeof t),console.assert("string"==typeof t.title),console.assert("string"==typeof t.anchorId),t.parentTopic?t.parentTopic.subtopics.push({...t,url:`#${t.anchorId}`}):e.topics.push({...t,subtopics:[],url:`#${t.anchorId}`})},set_layout_mode(e,t="horizontal"){document.body.setAttribute("data-dokki-layout",t)},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var t=i(5);const o={class:"dokki-area"},n={render:function(e,i){return(0,t.openBlock)(),(0,t.createBlock)("p",o,[(0,t.renderSlot)(e.$slots,"default")])}},s={class:"dokkiCSS-title"},r=(0,t.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),d={class:"dokkiCSS-expander"},c={class:"dokkiCSS-container"},l={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},p={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},u={props:{id:{default:void 0}},data:()=>({anchorableId:{type:String,default:void 0}}),computed:{anchor_id(){return console.assert("string"==typeof this.anchorableId),this.id||this.anchorableId}}},h={mixins:[p,l],props:{title:{default:"Code"},code:{default:void 0},syntax:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(this.isHeaderless&&this.$refs["code-expander"].expand({animate:!1}),"function"==typeof this.$slots.code){const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)}},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,o,i,a,n,l){const p=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers"),u=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("p",{class:["dokkiCSS-embedded dokki-code dokkiCSS-expandable",{"dokkiCSS-has-output":l.hasOutput,"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["code-expander"].toggle_expansion())},[(0,t.createVNode)("span",s,[r,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",d,(0,t.toDisplayString)(e.isExpanded?"Hide code":"Show code"),1)])),(0,t.createVNode)(u,{ref:"code-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",c,[(0,t.createVNode)(p,{syntax:i.syntax,text:n.codeFromSlot||i.code},null,8,["syntax","text"])])])),_:1},8,["start-expanded"])],2),(0,t.renderSlot)(e.$slots,"default")],64)}},m={key:0},k={class:"dokkiCSS-title"},g={key:1},f={key:2},S={mixins:[p],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers");return s.hasFooter||!e.isHeaderless?((0,t.openBlock)(),(0,t.createBlock)("p",{key:0,class:["dokkiCSS-embedded dokki-console",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",m,[(0,t.createVNode)("span",k,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Terminal command"},null,2)]),(0,t.createVNode)("code",null,(0,t.toDisplayString)(i.command),1)])),!e.isHeaderless&&s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",g)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",f,[(0,t.createVNode)(r,{text:n.outputFromSlot||i.output},null,8,["text"])])):(0,t.createCommentVNode)("v-if",!0)],2)):(0,t.createCommentVNode)("v-if",!0)}},x={class:"dokkiCSS-title"},v=(0,t.createVNode)("i",{class:"fas fa-folder",title:"Directory structure"},null,-1),y={class:"dokkiCSS-expander"},_={class:"dokkiCSS-container"},C={class:"spacer-container"},b={class:"spacer"},w={class:"label",style:{"margin-left":"0.5ch"}},N={key:1},B={mixins:[p,l],props:{structure:{type:Object},title:{type:String,default:"Directory structure"}},methods:{entryPadding:(e={})=>"<span></span>".repeat(e.level),entryIcon:(e={})=>`${"folder"==e.type?"fas":"far"} fa-${"folder"==e.type?"folder":"file"}${e.content?`-${e.content}`:""}`},mounted(){this.isHeaderless&&this.$refs["directory-expander"].expand({animate:!1})},computed:{flattenedStructure(){return function e(t,o=[],i=0){if("object"!=typeof t)return;const a=Object.keys(t).filter((e=>!e.startsWith("/")));for(const n of a){const a=t[n],s=Object.keys(a).filter((e=>!e.startsWith("/"))),r=Object.keys(a).filter((e=>e.startsWith("/"))).reduce(((e,t)=>(e[t.substr(1)]=a[t],e)),{});o.push({name:n,level:i,href:r.href,type:r.type||(s.length?"folder":"file"),content:r.content}),e(a,o,i+1)}return o}(this.$props.structure)}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-directory dokkiCSS-expandable",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["directory-expander"].toggle_expansion())},[(0,t.createVNode)("span",x,[v,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",y,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)])),(0,t.createVNode)(r,{ref:"directory-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",_,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.flattenedStructure,(e=>((0,t.openBlock)(),(0,t.createBlock)("div",{class:["directory-entry",e.type]},[(0,t.createVNode)("span",C,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(e.level,(e=>((0,t.openBlock)(),(0,t.createBlock)("span",b)))),256))]),(0,t.createVNode)("i",{class:["icon",s.entryIcon(e)]},null,2),(0,t.createVNode)("span",w,[e.href?((0,t.openBlock)(),(0,t.createBlock)("a",{key:0,href:e.href},(0,t.toDisplayString)(e.name),9,["href"])):((0,t.openBlock)(),(0,t.createBlock)("span",N,(0,t.toDisplayString)(e.name),1))])],2)))),256))])])),_:1},8,["start-expanded"])],2)}},$={class:"dokki-header"},V={class:"dokkiCSS-header-container"},T={props:{icon:{default:"fas fa-atlas"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki-theme-selector"),d=(0,t.resolveComponent)("dokki0-page-load-progress-bar");return(0,t.openBlock)(),(0,t.createBlock)("header",$,[(0,t.createVNode)("div",V,[(0,t.createVNode)("span",{class:"dokkiCSS-header-title",title:i.title},(0,t.toDisplayString)(i.title),9,["title"]),(0,t.createVNode)(r)]),(0,t.createVNode)(d)])}},E={class:"dokkiCSS-title"},F=(0,t.createVNode)("i",{class:"fas fa-crop-alt"},null,-1),I={class:"dokkiCSS-expander"},D={mixins:[p,l],props:{src:{default:void 0},srcdoc:{default:void 0},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0}},computed:{hasAutofocus(){return void 0!==this.$props.autofocus}},mounted(){this.isHeaderless&&this.$refs["frame-expander"].expand({animate:!1})},watch:{isExpanded(){this.isExpanded&&this.hasAutofocus&&this.$nextTick((()=>this.$refs.iframe.focus()))}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-iframe dokkiCSS-expandable",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["frame-expander"].toggle_expansion())},[(0,t.createVNode)("span",E,[F,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",I,(0,t.toDisplayString)(e.isExpanded?"Close frame":"Expand frame"),1)])),(0,t.createVNode)(r,{ref:"frame-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",{style:{height:i.height}},[(0,t.createVNode)("iframe",{class:"dokki-iframe",src:i.src,srcdoc:i.srcdoc,ref:"iframe"},"\n                ",8,["src","srcdoc"])],4)])),_:1},8,["start-expanded"])],2)}},q=(0,t.createVNode)("span",{class:"dokkiCSS-title"},[(0,t.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),z={class:"dokkiCSS-expander"},H={class:"dokkiCSS-container"},A={key:0},L={key:1,class:"dokkiCSS-italic"},M={mixins:[l],props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0},pixelatedScale:{default:void 0},width:{default:void 0},height:{default:void 0}},data:()=>({scaledWidth:void 0,scaledHeight:void 0}),mounted(){this.isExpanded&&(this.calculate_scaled_size(),this.$refs["image-expander"].expand({animate:!1})),window.addEventListener("resize",this.calculate_scaled_size)},computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit},hasPixelated(){return void 0!==this.$props.pixelatedScale}},methods:{calculate_scaled_size(){const e=this.$props.width,t=this.$props.height;let o=this.$el.offsetWidth;if(!e||!t||!o)return;o-=2;const i=Math.min(this.upscaleToFit?1/0:1,o/e);this.scaledWidth=Math.round(e*i),this.scaledHeight=Math.round(t*i)}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:e.isExpanded}]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>(this.calculate_scaled_size(),this.$refs["image-expander"].toggle_expansion()))},[q,(0,t.createVNode)("aside",z,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"image-expander",class:"dokkiCSS-checker-background",onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",H,[(0,t.createVNode)("img",{src:i.src,ref:"image-element",class:{"dokkiCSS-upscale-to-fit":s.hasUpscaleToFit,"dokkiCSS-pixelated-scale":s.hasPixelated},width:n.scaledWidth,height:n.scaledHeight},null,10,["src","width","height"])])])),_:1},512),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",A)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",L,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},j={props:["title"],render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("h3",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},O={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("p",null,(0,t.toDisplayString)(n.lorem),1)}},P={class:"dokkiCSS-title"},U=(0,t.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),R={class:"dokkiCSS-expander"},W={mixins:[l],props:{title:{default:"Output"},unpadded:{default:void 0}},data(){return{isUnpadded:void 0!==this.$props.unpadded}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-output dokkiCSS-expandable",{"dokkiCSS-unpadded":n.isUnpadded}]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs.output.toggle_expansion())},[(0,t.createVNode)("span",P,[U,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",R,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"output","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])),_:3},8,["start-expanded"])],2)}},Q={class:"dokki-side-panel"},Y={class:"dokkiCSS-product-tag"},Z={key:0},G={key:1},J={class:"dokkiCSS-vertical-navi"},K={class:"dokkiCSS-navi-link-icon"},X={class:"dokkiCSS-navi-link-label"},ee={class:"dokkiCSS-navi-link-label"},te={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("nav",Q,[(0,t.renderSlot)(e.$slots,"default"),(0,t.createVNode)("div",Y,[void 0!==s.productName?((0,t.openBlock)(),(0,t.createBlock)("span",Z,(0,t.toDisplayString)(s.productName),1)):((0,t.openBlock)(),(0,t.createBlock)("span",G,"Contents"))]),(0,t.createVNode)("ul",J,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.topics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("li",null,[(0,t.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[(0,t.createVNode)("span",K,(0,t.toDisplayString)(o+1),1),(0,t.createVNode)("span",X,(0,t.toDisplayString)(e.title),1)],8,["href"]),((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(e.subtopics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[(0,t.createVNode)("span",ee,(0,t.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},oe={props:{title:{default:"Spoiler"}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki-output");return(0,t.openBlock)(),(0,t.createBlock)(r,{title:i.title},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}};function ie(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}const ae={mixins:[u],props:["title"],created(){const e=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(e,"Detected an orphaned subtopic."),this.anchorableId=ie(`${e.title} ${this.title}`),this.$store.commit("add_topic",{parentTopic:e,title:this.title,anchorId:this.anchor_id})},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("h2",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},ne={class:"dokkiCSS-title"},se=(0,t.createVNode)("i",{class:"fas fa-table",title:"Table"},null,-1),re={key:1},de={class:"dokkiCSS-expander"},ce={class:"dokkiCSS-container"},le={mixins:[l,p],mounted(){this.isHeaderless&&this.$refs["table-expander"].expand({animate:!1})},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-table dokkiCSS-expandable",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["table-expander"].toggle_expansion())},[(0,t.createVNode)("span",ne,[se,(0,t.createVNode)("span",null,[this.$slots.caption?(0,t.renderSlot)(e.$slots,"caption",{key:0}):((0,t.openBlock)(),(0,t.createBlock)("span",re," Table"))])]),(0,t.createVNode)("aside",de,(0,t.toDisplayString)(e.isExpanded?"Hide table":"Expand table"),1)])),(0,t.createVNode)(r,{ref:"table-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",ce,[(0,t.renderSlot)(e.$slots,"table")])])),_:3},8,["start-expanded"])],2)}},pe={methods:{tag_string(){return String(this.$el?.textContent||"Undefined")},on_tag_clicked(){window.dispatchEvent(new CustomEvent("dokki-tag-clicked",{detail:this.tag_string()}))}},mounted(){this.$store.commit("add_tag",this.tag_string())},unmounted(){this.$store.commit("remove_tag",this.tag_string())},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("a",{class:"dokki-tag",onClick:o[1]||(o[1]=(...e)=>s.on_tag_clicked&&s.on_tag_clicked(...e))},[(0,t.renderSlot)(e.$slots,"default")])}},ue={key:0,class:"dokki-tag-cloud inline"},he={key:1,class:"dokki-tag-cloud"},me={props:{inline:{default:void 0},minimumFontSize:{type:Number,default:95},maximumFontSize:{type:Number,default:220}},data(){return{isInline:void 0!==this.$props.inline}},methods:{on_tag_click(e){window.dispatchEvent(new CustomEvent("dokki-tag-clicked",{detail:e}))},tag_css_font_size(e){if(!this.tags.hasOwnProperty(e))return console.warn("Unknown tag",e),"100%";const t=this.tags[e],[o,i]=this.minMaxTagCount,a=(t-o)/Math.max(1,i-o),n=Math.ceil(this.minimumFontSize+(this.maximumFontSize-this.minimumFontSize)*a);return`${Math.max(this.minimumFontSize,Math.min(this.maximumFontSize,n))}%`}},computed:{tags(){return this.$store.state.tags},tagNames(){return Object.keys(this.$store.state.tags).sort()},minMaxTagCount(){return[Object.values(this.tags).reduce(((e,t)=>t<e?t:e),1/0),Object.values(this.tags).reduce(((e,t)=>t>e?t:e),-1/0)]}},render:function(e,o,i,a,n,s){return n.isInline?((0,t.openBlock)(),(0,t.createBlock)("span",ue,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.tagNames,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("span",null,[(0,t.createVNode)("a",{class:"dokkiCSS-item",onClick:t=>s.on_tag_click(e)},(0,t.toDisplayString)(e),9,["onClick"]),(0,t.createCommentVNode)("\n        "),(0,t.createTextVNode)((0,t.toDisplayString)(o==s.tagNames.length-1?"":", "),1)])))),256))])):((0,t.openBlock)(),(0,t.createBlock)("p",he,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.tagNames,(e=>((0,t.openBlock)(),(0,t.createBlock)("a",{class:"dokkiCSS-item",style:{fontSize:s.tag_css_font_size(e)},onClick:t=>s.on_tag_click(e)},(0,t.toDisplayString)(e),13,["onClick"])))),256))]))}},ke={key:0,class:"dokki-tag-filter",ref:"container"},ge={class:"dokkiCSS-label"},fe={props:{entityName:{type:String,default:"topics"}},data:()=>({activeTags:[],showHeader:!1,numResults:0}),mounted(){window.addEventListener("dokki0-hash-router-updated-tag-hash",this.hash_change_monitor),window.addEventListener("dokki-tag-clicked",(e=>this.add_tag(e.detail))),this.$nextTick(this.hash_change_monitor)},watch:{activeTags(){this.apply_tags_to_topic_visibility(this.activeTags)}},methods:{hash_change_monitor(){const e=window.location.hash;if(!this.is_valid_tag_hash(e))return this.activeTags.length=0,this.showHeader=!1,void this.unhide_all_topic_elements();this.activeTags=this.tags_from_hash(e)},find_all_topic_elements:()=>Array.from(document.querySelectorAll(".dokki-topics > .dokki-topic")),unhide_all_topic_elements(){const e=this.find_all_topic_elements();return e.forEach((e=>e.style.display="initial")),e},apply_tags_to_topic_visibility(e=[]){console.assert(Array.isArray(e));const t=()=>{this.update_hash(e);const t=this.unhide_all_topic_elements();if(this.numResults=t.length,this.activeTags.length)for(const e of t){const t=Array.from(e.querySelectorAll(".dokki-topic .dokki-tag")).map((e=>e.textContent.toLowerCase()));this.activeTags.every((e=>t.includes(e)))||(e.style.display="none")}this.showHeader=Boolean(this.activeTags.length),this.numResults=t.reduce(((e,t)=>e+~~("none"!==t.style.display)),0)};this.showHeader=!0,this.$nextTick((()=>{const e=this.$refs.container,o=getComputedStyle(document.body),i=Number(o.getPropertyValue("--dokkiCSS-header-height").match(/\d+/)[0])+Number(o.getPropertyValue("--dokkiCSS-topic-bottom-margin").match(/\d+/)[0]);e&&e.getBoundingClientRect().bottom<i?(e.scrollIntoView(!0),window.scrollBy(0,-i)):e||window.scrollTo(0,0),t()}))},tags_from_hash(e=""){console.assert(this.is_valid_tag_hash(e));let t=this.tag_string_from_hash(e);if(!this.is_valid_tag_string(t))return this.activeTags;t=t.replaceAll("%20"," ");const o=Array.from(new Set(t.trim().split(",").filter((e=>e.length))));return this.are_valid_tags(o)?o:(this.update_hash(this.activeTags),this.activeTags)},tag_string_from_hash(e=""){return console.assert("string"==typeof e),e.substring(this.tagMarker.length).toLowerCase().trim().replaceAll("%20"," ")},is_valid_tag_hash(e=""){return"string"!=typeof e?(console.warn("Expected tag hash to be a string",e),!1):e.startsWith(this.tagMarker)},is_valid_tag_string:(e="")=>"string"!=typeof e?(console.warn("Expected tag to be a string",e),!1):!!e.length||(console.warn("Empty tag",e),!1),are_valid_tags:(e=[])=>Array.isArray(e)?e.length>999?(console.warn("Too many tags",e.length),!1):!e.join("").match(/[^a-zA-Z0-9+-\s#\.]/)||(console.warn("Illegal characters in one or more tags",e),!1):(console.warn("Invalid tags",e),!1),remove_tag(e=""){this.activeTags=this.activeTags.filter((t=>t!=e))},add_tag(e=""){console.assert("string"==typeof e),e=e.toLowerCase(),this.activeTags.some((t=>t.toLowerCase()==e.toLowerCase()))||(this.activeTags=[...this.activeTags,e])},update_hash(e=[]){console.assert(Array.isArray(e));const t=e.length?`${this.tagMarker}${e.join(",")}`:" ";history.replaceState(null,null,t)}},computed:{tagMarker(){return this.$store.state.tagHashMarker}},render:function(e,o,i,a,n,s){return n.showHeader?((0,t.openBlock)(),(0,t.createBlock)("aside",ke,[(0,t.createVNode)("div",ge," Showing all ("+(0,t.toDisplayString)(n.numResults)+") "+(0,t.toDisplayString)(i.entityName)+" tagged ",1),((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(n.activeTags,(e=>((0,t.openBlock)(),(0,t.createBlock)("div",{class:"dokkiCSS-button",onClick:t=>s.remove_tag(e)},(0,t.toDisplayString)(e),9,["onClick"])))),256))],512)):(0,t.createCommentVNode)("v-if",!0)}},Se={data:()=>({currentThemeIdx:0,themes:[{name:"dark",icon:"far fa-lightbulb"},{name:"light",icon:"fas fa-lightbulb"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.set_current_theme(window.sessionStorage.getItem("dokki:theme")||"light")},methods:{set_current_theme(e=""){this.currentThemeIdx=Math.max(0,this.themes.findIndex((t=>t.name==e)));const t=this.themes[this.currentThemeIdx].name;document.body.dataset.dokkiTheme=t,window.sessionStorage.setItem("dokki:theme",t),this.$refs.themeSelector&&this.$refs.themeSelector.animate([{transform:"rotateY(90deg)"},{transform:"rotateY(0deg)"}],{duration:150})}},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("span",{class:"dokki-theme-selector",title:"Light switch",ref:"themeSelector",onClick:o[1]||(o[1]=e=>s.set_current_theme(n.themes[(n.currentThemeIdx+1)%n.themes.length].name))},[(0,t.createVNode)("i",{class:"fa-fw "+n.themes[n.currentThemeIdx].icon},null,2)],512)}},xe={class:"dokkiCSS-embedded dokki-tip"},ve=(0,t.createVNode)("header",null," Tip ",-1),ye={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",xe,[ve,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},_e={props:{title:{required:!0,type:String}},data:()=>({reveal:!1}),mounted(){this.$store.commit("queue_topic_reveal",(()=>{this.reveal=!0}))},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-topic");return n.reveal?((0,t.openBlock)(),(0,t.createBlock)(r,{key:0,title:i.title},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["title"])):(0,t.createCommentVNode)("v-if",!0)}},Ce={computed:{areTopicsReady(){return this.$store.state.areTopicsReady}},watch:{areTopicsReady(e){e&&Vue.nextTick((()=>window.dispatchEvent(new CustomEvent("dokki-topics-ready"))))}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-hash-router");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)(r),(0,t.createVNode)("main",{class:["dokki-topics",{"dokkiCSS-hidden":!s.areTopicsReady}]},[(0,t.renderSlot)(e.$slots,"default")],2)],64)}},be={class:"dokkiCSS-title"},we={class:"dokkiCSS-expander"},Ne={key:0},Be={key:1,class:"dokkiCSS-italic"},$e={mixins:[l],props:{src:{},platform:{default:"youtube"}},computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",i.platform]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["video-expander"].toggle_expansion())},[(0,t.createVNode)("span",be,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Video"},null,2)]),(0,t.createVNode)("aside",we,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"video-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("iframe",{src:s.videoUrl,allow:"fullscreen; autoplay;"},"\n            ",8,["src"])])),_:1},8,["start-expanded"]),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",Ne)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",Be,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},Ve={class:"dokki-hr"},Te={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("hr",Ve)}},Ee={class:"dokkiCSS-embedded dokki-warning"},Fe=(0,t.createVNode)("header",null," Warning ",-1),Ie={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",Ee,[Fe,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},De={key:0,ref:"container",class:"dokki0-animated-expander"},qe={props:{startExpanded:{default:!1}},data:()=>({isExpanded:!1,isTransitioning:!1,numDynamicImages:0,numDynamicImagesLoaded:0}),mounted(){this.$props.startExpanded&&this.expand({animate:!1})},methods:{expansion_transition_finished(){if(this.numDynamicImagesLoaded!=this.numDynamicImages)return;const e=this.$refs.container;this.$emit("expanded"),this.isTransitioning=!1,e.style.height="unset"},minimization_transition_finished(){this.$emit("minimized"),this.isTransitioning=!1,this.isExpanded=!1},resize_to_contents(){const e=this.$refs.container;return e.style.height=`${e.scrollHeight}px`,e},resize(e=0){const t=this.$refs.container;return t.style.height=`${e}px`,t},expand({animate:e=!0}={}){this.isTransitioning||this.isExpanded||(this.isExpanded=!0,e?(this.isTransitioning=!0,this.$emit("transitioning"),this.$nextTick((()=>{const e=this.$refs.container;e.ontransitionend=void 0,e.style.height="0";{const e=this.$refs.container.getElementsByTagName("img");this.numDynamicImages=0,this.numDynamicImagesLoaded=0;for(const t of e)void 0===t.height&&(this.numDynamicImages++,t.addEventListener("load",(()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.numDynamicImagesLoaded++,this.resize_to_contents().ontransitionend=this.expansion_transition_finished}))}))})))}window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.resize_to_contents(),e.ontransitionend=this.numDynamicImages?void 0:this.expansion_transition_finished}))}))}))):this.$emit("expanded"))},minimize({animate:e=!0}={}){if(this.isTransitioning)return;if(!this.isExpanded)return;if(!e)return this.isExpanded=!1,void this.$emit("minimized");this.isTransitioning=!0,this.$emit("transitioning");const t=this.$refs.container;this.resize_to_contents(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{t.style.height="0",t.ontransitionend=this.minimization_transition_finished}))}))},toggle_expansion({animate:e=!0}={}){(this.isExpanded?this.minimize:this.expand)({animate:e})}},render:function(e,o,i,a,n,s){return n.isExpanded?((0,t.openBlock)(),(0,t.createBlock)("div",De,[(0,t.renderSlot)(e.$slots,"default")],512)):(0,t.createCommentVNode)("v-if",!0)}},ze={mounted(){["hashchange","dokki-topics-ready"].forEach((e=>{window.addEventListener(e,(()=>{window.dispatchEvent(new CustomEvent("dokki0-hash-router-updated-tag-hash")),window.dispatchEvent(new CustomEvent("dokki0-hash-router-updated-navi-hash"))}))})),window.addEventListener("dokki0-hash-router-updated-navi-hash",(()=>{const e=window.location.hash;if(e.length>1&&!e.startsWith(this.tagMarker)){const t=document.querySelector(e);t&&t.scrollIntoView()}}))},computed:{tagMarker(){return this.$store.state.tagHashMarker}},render:function(e,t,o,i,a,n){return null}},He={computed:{hasFinishedLoading(){return this.$store.state.areTopicsReady},progressPercent(){return Math.floor((this.$store.state.dokkiTopic.lifetimeCount-this.$store.state.dokkiTopic.revealQueue.length)/(this.$store.state.dokkiTopic.lifetimeCount||1/0)*100)}},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("div",{class:["dokki0-page-load-progress-bar",{progressing:!s.hasFinishedLoading&&s.progressPercent>0}],style:{width:`${s.hasFinishedLoading?100:s.progressPercent}%`}},null,6)}},Ae={class:"dokki0-text-block-with-line-numbers"},Le={class:"dokkiCSS-text-block-line"},Me=(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line"},null,-1),je={class:"dokkiCSS-text-block-line-number"},Oe={class:"dokkiCSS-text-block-line-content"},Pe={props:{text:{},syntax:{default:void 0}},mounted(){this.$nextTick((()=>{if(this.is_syntax_highlighting_enabled()){const e=this.$el.querySelectorAll(".dokkiCSS-text-block-line-content > code");for(const t of e)hljs.highlightElement(t)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{is_highlight_js_available:()=>"object"==typeof hljs&&"function"==typeof hljs.highlightElement,is_syntax_highlighting_enabled(){return void 0!==this.$props.syntax&&this.is_highlight_js_available()}},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)("table",Ae,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.formattedText,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("tr",Le,[Me,(0,t.createVNode)("td",je,(0,t.toDisplayString)(o+1),1),(0,t.createVNode)("td",Oe,[(0,t.createVNode)("code",{class:void 0!==i.syntax?`language-${i.syntax}`:"unspecified-syntax"},(0,t.toDisplayString)(e),3)])])))),256))])}},Ue={class:"dokki-topic"},Re={class:"dokkiCSS-topic-title"},We={mixins:[u],props:{title:{required:!0,type:String}},data:()=>({globalTopicIdx:{default:-1}}),created(){this.anchorableId=ie(this.title),this.$store.commit("add_topic",{title:this.title,anchorId:this.anchor_id}),this.globalTopicIdx=this.$store.state.topics.length},render:function(e,o,i,a,n,s){const r=(0,t.resolveComponent)("dokki-hr");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("section",Ue,[(0,t.createVNode)("h1",Re,(0,t.toDisplayString)(this.title),1),(0,t.createVNode)(r),(0,t.renderSlot)(e.$slots,"default")])],64)}},Qe={class:"dokki-product-name"},Ye={computed:{productName(){return this.$store.state.productName}},render:function(e,o,i,a,n,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",Qe,(0,t.toDisplayString)(s.productName),1),(0,t.renderSlot)(e.$slots,"default")],64)}};function Ze(t={}){t={container:document.body,template:document.querySelector("#dokki-document"),...t},console.assert(t.container instanceof HTMLElement,"Invalid document container"),t.template instanceof HTMLTemplateElement?(t.container.appendChild(t.template.content),t.template.remove()):console.assert(null===t.template,"Invalid document template"),document.documentElement.hasAttribute("lang")||document.documentElement.setAttribute("lang","en");{const t=new URLSearchParams(window.location.search);{const o=["horizontal","vertical","vertical-narrow"],i=o[0],a=e=>o.find((t=>t==e));if(t.has("layout")){const o=a(t.get("layout"))||i;e.commit("set_layout_mode",o)}else window.addEventListener("resize",function t(){const o=document.documentElement.clientWidth,n=a(o<500?"vertical-narrow":o<860?"vertical":"horizontal");return e.commit("set_layout_mode",n||i),t}())}}const o=Vue.createApp({}).use(e).component("dokki-area",n).component("dokki-code",h).component("dokki-console",S).component("dokki-directory",B).component("dokki-header",T).component("dokki-iframe",D).component("dokki-image",M).component("dokki-item",j).component("dokki-lorem",O).component("dokki-output",W).component("dokki-side-panel",te).component("dokki-spoiler",oe).component("dokki-subtopic",ae).component("dokki-table",le).component("dokki-tag",pe).component("dokki-tag-cloud",me).component("dokki-tag-filter",fe).component("dokki-theme-selector",Se).component("dokki-tip",ye).component("dokki-topic",_e).component("dokki-topics",Ce).component("dokki-video",$e).component("dokki-warning",Ie).component("dokki-hr",Te).component("dokki0-animated-expander",qe).component("dokki0-hash-router",ze).component("dokki0-page-load-progress-bar",He).component("dokki0-text-block-with-line-numbers",Pe).component("dokki0-topic",We).component("product-name",Ye);if(Array.isArray(parent.window.dokkiUserComponents))for(const e of parent.window.dokkiUserComponents){if("object"!=typeof e||!e.hasOwnProperty("$tag"))continue;const t=e.$tag;delete e.$tag,o.component(t,e)}o.mount(t.container)}i(292)})(),a})()}));