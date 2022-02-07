!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},5:t=>{t.exports=e}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};return(()=>{i.r(n),i.d(n,{start:()=>we});const e=new Vuex.Store({state:{topics:[],loremCount:0,productName:void 0,productVersion:void 0},mutations:{add_topic(e,t={}){console.assert("string"==typeof t.title),console.assert("string"==typeof t.anchorId),t.parentTopic?t.parentTopic.subtopics.push({...t,url:`#${t.anchorId}`}):e.topics.push({...t,subtopics:[],url:`#${t.anchorId}`})},set_layout_mode(e,t="horizontal"){document.body.setAttribute("data-dokki-layout",t)},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var t=i(5);const o={class:"dokki-area"},a={render:function(e,i){return(0,t.openBlock)(),(0,t.createBlock)("p",o,[(0,t.renderSlot)(e.$slots,"default")])}},s={class:"dokkiCSS-title"},r=(0,t.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),d={class:"dokkiCSS-expander"},c={class:"dokkiCSS-container"},l={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},u={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},p={props:{id:{default:void 0}},data:()=>({anchorableId:{type:String,default:void 0}}),computed:{anchor_id(){return console.assert("string"==typeof this.anchorableId),this.id||this.anchorableId}}},m={mixins:[u,l],props:{title:{default:"Code"},code:{default:void 0},syntax:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(this.isHeaderless&&this.$refs["code-expander"].expand({animate:!1}),"function"==typeof this.$slots.code){const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)}},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,o,i,n,a,l){const u=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers"),p=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("p",{class:["dokkiCSS-embedded dokki-code dokkiCSS-expandable",{"dokkiCSS-has-output":l.hasOutput,"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["code-expander"].toggle_expansion())},[(0,t.createVNode)("span",s,[r,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",d,(0,t.toDisplayString)(e.isExpanded?"Hide code":"Show code"),1)])),(0,t.createVNode)(p,{ref:"code-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",c,[(0,t.createVNode)(u,{syntax:i.syntax,text:a.codeFromSlot||i.code},null,8,["syntax","text"])])])),_:1},8,["start-expanded"])],2),(0,t.renderSlot)(e.$slots,"default")],64)}},h={key:0},k={class:"dokkiCSS-title"},f={key:1},S={key:2},g={mixins:[u],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers");return s.hasFooter||!e.isHeaderless?((0,t.openBlock)(),(0,t.createBlock)("p",{key:0,class:["dokkiCSS-embedded dokki-console",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",h,[(0,t.createVNode)("span",k,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Terminal command"},null,2)]),(0,t.createVNode)("code",null,(0,t.toDisplayString)(i.command),1)])),!e.isHeaderless&&s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",f)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",S,[(0,t.createVNode)(r,{text:a.outputFromSlot||i.output},null,8,["text"])])):(0,t.createCommentVNode)("v-if",!0)],2)):(0,t.createCommentVNode)("v-if",!0)}},x={class:"dokki-header"},v={class:"dokkiCSS-header-container"},b={props:{icon:{default:"fas fa-atlas"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-theme-selector");return(0,t.openBlock)(),(0,t.createBlock)("header",x,[(0,t.createVNode)("div",v,[(0,t.createVNode)("span",{class:"dokkiCSS-header-title",title:i.title},(0,t.toDisplayString)(i.title),9,["title"]),(0,t.createVNode)(r)])])}},C={class:"dokkiCSS-title"},y=(0,t.createVNode)("i",{class:"fas fa-crop-alt"},null,-1),N={class:"dokkiCSS-expander"},V={mixins:[u,l],props:{src:{default:void 0},srcdoc:{default:void 0},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0}},computed:{hasAutofocus(){return void 0!==this.$props.autofocus}},mounted(){this.isHeaderless&&this.$refs["frame-expander"].expand({animate:!1})},watch:{isExpanded(){this.isExpanded&&this.hasAutofocus&&this.$nextTick((()=>this.$refs.iframe.focus()))}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-iframe dokkiCSS-expandable",{"dokkiCSS-headerless":e.isHeaderless}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",{key:0,onClick:o[1]||(o[1]=e=>this.$refs["frame-expander"].toggle_expansion())},[(0,t.createVNode)("span",C,[y,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",N,(0,t.toDisplayString)(e.isExpanded?"Close frame":"Expand frame"),1)])),(0,t.createVNode)(r,{ref:"frame-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",{style:{height:i.height}},[(0,t.createVNode)("iframe",{class:"dokki-iframe",src:i.src,srcdoc:i.srcdoc,ref:"iframe"},"\n                ",8,["src","srcdoc"])],4)])),_:1},8,["start-expanded"])],2)}},$=(0,t.createVNode)("span",{class:"dokkiCSS-title"},[(0,t.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),_={class:"dokkiCSS-expander"},B={class:"dokkiCSS-container"},w={key:0},E={key:1,class:"dokkiCSS-italic"},T={mixins:[l],props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0},pixelatedScale:{default:void 0},width:{default:void 0},height:{default:void 0}},data:()=>({scaledWidth:void 0,scaledHeight:void 0}),mounted(){this.isExpanded&&(this.calculate_scaled_size(),this.$refs["image-expander"].expand({animate:!1})),window.addEventListener("resize",this.calculate_scaled_size)},computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit},hasPixelated(){return void 0!==this.$props.pixelatedScale}},methods:{calculate_scaled_size(){const e=this.$props.width,t=this.$props.height;let o=this.$el.offsetWidth;if(!e||!t||!o)return;o-=2;const i=Math.min(this.upscaleToFit?1/0:1,o/e);this.scaledWidth=Math.round(e*i),this.scaledHeight=Math.round(t*i)}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:e.isExpanded}]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>(this.calculate_scaled_size(),this.$refs["image-expander"].toggle_expansion()))},[$,(0,t.createVNode)("aside",_,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"image-expander",class:"dokkiCSS-checker-background",onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",B,[(0,t.createVNode)("img",{src:i.src,ref:"image-element",class:{"dokkiCSS-upscale-to-fit":s.hasUpscaleToFit,"dokkiCSS-pixelated-scale":s.hasPixelated},width:a.scaledWidth,height:a.scaledHeight},null,10,["src","width","height"])])])),_:1},512),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",w)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",E,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},I={props:["title"],render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("h3",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},F={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("p",null,(0,t.toDisplayString)(a.lorem),1)}},D={class:"dokkiCSS-title"},q=(0,t.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),z={class:"dokkiCSS-expander"},A={mixins:[l],props:{title:{default:"Output"},unpadded:{default:void 0}},data(){return{isUnpadded:void 0!==this.$props.unpadded}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-output dokkiCSS-expandable",{"dokkiCSS-unpadded":a.isUnpadded}]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs.output.toggle_expansion())},[(0,t.createVNode)("span",D,[q,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",z,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"output","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])),_:3},8,["start-expanded"])],2)}},H={class:"dokki-side-panel"},j={key:1,class:"dokkiCSS-product-tag"},L={class:"dokkiCSS-vertical-navi"},M={class:"dokkiCSS-navi-link-icon"},U={class:"dokkiCSS-navi-link-label"},P={class:"dokkiCSS-navi-link-label"},O={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("nav",H,[(0,t.renderSlot)(e.$slots,"default"),void 0!==s.productName?((0,t.openBlock)(),(0,t.createBlock)("div",{key:0,title:s.productName,class:"dokkiCSS-product-tag"},(0,t.toDisplayString)(s.productName),9,["title"])):((0,t.openBlock)(),(0,t.createBlock)("div",j," Contents ")),(0,t.createVNode)("ul",L,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.topics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("li",null,[(0,t.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[(0,t.createVNode)("span",M,(0,t.toDisplayString)(o+1),1),(0,t.createVNode)("span",U,(0,t.toDisplayString)(e.title),1)],8,["href"]),((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(e.subtopics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[(0,t.createVNode)("span",P,(0,t.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},W={props:{title:{default:"Spoiler"}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-output");return(0,t.openBlock)(),(0,t.createBlock)(r,{title:i.title},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}};function Q(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}const Y={mixins:[p],props:["title"],created(){const e=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(e,"Detected an orphaned subtopic."),this.anchorableId=Q(`${e.title} ${this.title}`),this.$store.commit("add_topic",{parentTopic:e,title:this.title,anchorId:this.anchor_id})},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("h2",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},R={class:"dokkiCSS-embedded dokki-table dokkiCSS-expandable"},Z={class:"dokkiCSS-title"},G=(0,t.createVNode)("i",{class:"fas fa-table",title:"Table"},null,-1),J={class:"dokkiCSS-expander"},K={class:"dokkiCSS-container"},X={mixins:[l],computed:{title(){const e="function"==typeof this.$slots.caption?this.$slots.caption():void 0;return Array.isArray(e)&&"string"==typeof e[0].children?e[0].children:" Table"}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",R,[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["table-expander"].toggle_expansion())},[(0,t.createVNode)("span",Z,[G,(0,t.createVNode)("span",null,(0,t.toDisplayString)(s.title),1)]),(0,t.createVNode)("aside",J,(0,t.toDisplayString)(e.isExpanded?"Hide table":"Expand table"),1)]),(0,t.createVNode)(r,{ref:"table-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",K,[(0,t.renderSlot)(e.$slots,"table")])])),_:3},8,["start-expanded"])])}},ee={data:()=>({currentThemeIdx:0,themes:[{name:"dark",icon:"far fa-lightbulb"},{name:"light",icon:"fas fa-lightbulb"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.set_current_theme(window.sessionStorage.getItem("dokki:theme")||"light")},methods:{set_current_theme(e=""){this.currentThemeIdx=Math.max(0,this.themes.findIndex((t=>t.name==e)));const t=this.themes[this.currentThemeIdx].name;document.body.dataset.dokkiTheme=t,window.sessionStorage.setItem("dokki:theme",t),this.$refs.themeSelector&&this.$refs.themeSelector.animate([{transform:"rotateY(90deg)"},{transform:"rotateY(0deg)"}],{duration:150})}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("span",{class:"dokki-theme-selector",title:"Light switch",ref:"themeSelector",onClick:o[1]||(o[1]=e=>s.set_current_theme(a.themes[(a.currentThemeIdx+1)%a.themes.length].name))},[(0,t.createVNode)("i",{class:"fa-fw "+a.themes[a.currentThemeIdx].icon},null,2)],512)}},te={class:"dokkiCSS-embedded dokki-tip"},oe=(0,t.createVNode)("header",null," Tip ",-1),ie={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",te,[oe,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},ne={class:"dokki-topic"},ae={class:"dokkiCSS-topic-title"},se={mixins:[p],props:["title"],data:()=>({globalTopicIdx:{default:-1}}),created(){this.anchorableId=Q(this.title),this.$store.commit("add_topic",{title:this.title,anchorId:this.anchor_id}),this.globalTopicIdx=this.$store.state.topics.length},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-hr");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("section",ne,[(0,t.createVNode)("h1",ae,(0,t.toDisplayString)(this.title),1),(0,t.createVNode)(r),(0,t.renderSlot)(e.$slots,"default")])],64)}},re={class:"dokki-topics"},de={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("main",re,[(0,t.renderSlot)(e.$slots,"default")])}},ce={class:"dokkiCSS-title"},le={class:"dokkiCSS-expander"},ue={key:0},pe={key:1,class:"dokkiCSS-italic"},me={mixins:[l],props:{src:{},platform:{default:"youtube"}},computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",i.platform]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["video-expander"].toggle_expansion())},[(0,t.createVNode)("span",ce,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Video"},null,2)]),(0,t.createVNode)("aside",le,(0,t.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"video-expander","start-expanded":e.isExpanded,onExpanded:o[2]||(o[2]=t=>e.isExpanded=!0),onMinimized:o[3]||(o[3]=t=>e.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("iframe",{src:s.videoUrl,allow:"fullscreen; autoplay;"},"\n            ",8,["src"])])),_:1},8,["start-expanded"]),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",ue)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",pe,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},he={class:"dokki-hr"},ke={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("hr",he)}},fe={class:"dokkiCSS-embedded dokki-warning"},Se=(0,t.createVNode)("header",null," Warning ",-1),ge={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",fe,[Se,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},xe={class:"dokki0-text-block-with-line-numbers"},ve={class:"dokkiCSS-text-block-line"},be=(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line"},null,-1),Ce={class:"dokkiCSS-text-block-line-number"},ye={class:"dokkiCSS-text-block-line-content"},Ne={props:{text:{},syntax:{default:void 0}},mounted(){this.$nextTick((()=>{if(this.is_syntax_highlighting_enabled()){const e=this.$el.querySelectorAll(".dokkiCSS-text-block-line-content > code");for(const t of e)hljs.highlightElement(t)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{is_highlight_js_available:()=>"object"==typeof hljs&&"function"==typeof hljs.highlightElement,is_syntax_highlighting_enabled(){return void 0!==this.$props.syntax&&this.is_highlight_js_available()}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("table",xe,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.formattedText,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("tr",ve,[be,(0,t.createVNode)("td",Ce,(0,t.toDisplayString)(o+1),1),(0,t.createVNode)("td",ye,[(0,t.createVNode)("code",{class:void 0!==i.syntax?`language-${i.syntax}`:"unspecified-syntax"},(0,t.toDisplayString)(e),3)])])))),256))])}},Ve={key:0,ref:"container",class:"dokki0-animated-expander"},$e={props:{startExpanded:{default:!1}},data:()=>({isExpanded:!1,isTransitioning:!1,numDynamicImages:0,numDynamicImagesLoaded:0}),mounted(){this.$props.startExpanded&&this.expand({animate:!1})},methods:{expansion_transition_finished(){if(this.numDynamicImagesLoaded!=this.numDynamicImages)return;const e=this.$refs.container;this.$emit("expanded"),this.isTransitioning=!1,e.style.height="unset"},minimization_transition_finished(){this.$emit("minimized"),this.isTransitioning=!1,this.isExpanded=!1},resize_to_contents(){const e=this.$refs.container;return e.style.height=`${e.scrollHeight}px`,e},resize(e=0){const t=this.$refs.container;return t.style.height=`${e}px`,t},expand({animate:e=!0}={}){this.isTransitioning||this.isExpanded||(this.isExpanded=!0,e?(this.isTransitioning=!0,this.$emit("transitioning"),this.$nextTick((()=>{const e=this.$refs.container;e.ontransitionend=void 0,e.style.height="0";{const e=this.$refs.container.getElementsByTagName("img");this.numDynamicImages=0,this.numDynamicImagesLoaded=0;for(const t of e)void 0===t.height&&(this.numDynamicImages++,t.addEventListener("load",(()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.numDynamicImagesLoaded++,this.resize_to_contents().ontransitionend=this.expansion_transition_finished}))}))})))}window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.resize_to_contents(),e.ontransitionend=this.numDynamicImages?void 0:this.expansion_transition_finished}))}))}))):this.$emit("expanded"))},minimize({animate:e=!0}={}){if(this.isTransitioning)return;if(!this.isExpanded)return;if(!e)return this.isExpanded=!1,void this.$emit("minimized");this.isTransitioning=!0,this.$emit("transitioning");const t=this.$refs.container;this.resize_to_contents(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{t.style.height="0",t.ontransitionend=this.minimization_transition_finished}))}))},toggle_expansion({animate:e=!0}={}){(this.isExpanded?this.minimize:this.expand)({animate:e})}},render:function(e,o,i,n,a,s){return a.isExpanded?((0,t.openBlock)(),(0,t.createBlock)("div",Ve,[(0,t.renderSlot)(e.$slots,"default")],512)):(0,t.createCommentVNode)("v-if",!0)}},_e={class:"dokki-product-name"},Be={computed:{productName(){return this.$store.state.productName}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",_e,(0,t.toDisplayString)(s.productName),1),(0,t.renderSlot)(e.$slots,"default")],64)}};function we(t={}){t={container:document.body,template:document.querySelector("#dokki-document"),...t},console.assert(t.container instanceof HTMLElement,"Invalid document container"),t.template instanceof HTMLTemplateElement?(t.container.appendChild(t.template.content),t.template.remove()):console.assert(null===t.template,"Invalid document template"),document.documentElement.hasAttribute("lang")||document.documentElement.setAttribute("lang","en");{const t=new URLSearchParams(window.location.search);{const o=["horizontal","vertical","vertical-narrow"],i=o[0],n=e=>o.find((t=>t==e));if(t.has("layout")){const o=n(t.get("layout"))||i;e.commit("set_layout_mode",o)}else window.addEventListener("resize",function t(){const o=document.documentElement.clientWidth,a=n(o<500?"vertical-narrow":o<860?"vertical":"horizontal");return e.commit("set_layout_mode",a||i),t}())}}const o=Vue.createApp({}).use(e).component("dokki-area",a).component("dokki-code",m).component("dokki-console",g).component("dokki-header",b).component("dokki-iframe",V).component("dokki-image",T).component("dokki-item",I).component("dokki-lorem",F).component("dokki-output",A).component("dokki-side-panel",O).component("dokki-spoiler",W).component("dokki-subtopic",Y).component("dokki-table",X).component("dokki-theme-selector",ee).component("dokki-tip",ie).component("dokki-topic",se).component("dokki-topics",de).component("dokki-video",me).component("dokki-warning",ge).component("dokki-hr",ke).component("dokki0-text-block-with-line-numbers",Ne).component("dokki0-animated-expander",$e).component("product-name",Be);if(Array.isArray(parent.window.dokkiUserComponents))for(const e of parent.window.dokkiUserComponents){if("object"!=typeof e||!e.hasOwnProperty("$tag"))continue;const t=e.$tag;delete e.$tag,o.component(t,e)}o.mount(t.container)}i(292)})(),n})()}));