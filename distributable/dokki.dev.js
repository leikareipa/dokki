!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},5:t=>{t.exports=e}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};return(()=>{i.r(n),i.d(n,{start:()=>Te});const e=new Vuex.Store({state:{topics:[],loremCount:0,productName:void 0,productVersion:void 0,numListings:0},mutations:{add_topic(e,t={}){console.assert("string"==typeof t.title),console.assert("string"==typeof t.anchorId),t.parentTopic?t.parentTopic.subtopics.push({...t,url:`#${t.anchorId}`}):e.topics.push({...t,subtopics:[],url:`#${t.anchorId}`})},increment_listings_count(e){e.numListings++},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var t=i(5);const o={class:"dokki-area"},a={render:function(e,i){return(0,t.openBlock)(),(0,t.createBlock)("p",o,[(0,t.renderSlot)(e.$slots,"default")])}},s={key:0},r={class:"dokkiCSS-title"},d=(0,t.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),l={key:1},c={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},u={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},p={props:{id:{default:void 0}},data:()=>({anchorableId:{type:String,default:void 0}}),computed:{anchor_id(){return console.assert("string"==typeof this.anchorableId),this.id||this.anchorableId}}},h={mixins:[u],props:{title:{default:"Code"},code:{default:void 0},syntax:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(!this.$slots.code||"function"!=typeof this.$slots.code)return;const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,o,i,n,a,c){const u=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("p",{class:["dokkiCSS-embedded dokki-code",{"has-output":c.hasOutput}]},[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",s,[(0,t.createVNode)("span",r,[d,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)])])),e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("hr",l)),(0,t.createVNode)("footer",null,[(0,t.createVNode)(u,{syntax:i.syntax,text:a.codeFromSlot||i.code},null,8,["syntax","text"])])],2),(0,t.renderSlot)(e.$slots,"default")],64)}},m={key:0,class:"dokkiCSS-embedded dokki-console"},k={key:0},f={class:"dokkiCSS-title"},g={key:1},S={key:2},x={mixins:[u],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-text-block-with-line-numbers");return s.hasFooter||!e.isHeaderless?((0,t.openBlock)(),(0,t.createBlock)("p",m,[e.isHeaderless?(0,t.createCommentVNode)("v-if",!0):((0,t.openBlock)(),(0,t.createBlock)("header",k,[(0,t.createVNode)("span",f,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Terminal command"},null,2)]),(0,t.createVNode)("code",null,(0,t.toDisplayString)(i.command),1)])),!e.isHeaderless&&s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",g)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",S,[(0,t.createVNode)(r,{text:a.outputFromSlot||i.output},null,8,["text"])])):(0,t.createCommentVNode)("v-if",!0)])):(0,t.createCommentVNode)("v-if",!0)}},v={class:"dokki-header"},b={class:"dokkiCSS-header-container"},C={props:{icon:{default:"fas fa-atlas"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-theme-selector");return(0,t.openBlock)(),(0,t.createBlock)("header",v,[(0,t.createVNode)("div",b,[(0,t.createVNode)("span",{class:"dokkiCSS-header-title",title:i.title},(0,t.toDisplayString)(i.title),9,["title"]),(0,t.createVNode)(r)])])}},N={class:"dokkiCSS-embedded dokki-iframe dokkiCSS-expandable"},y={class:"dokkiCSS-title"},$=(0,t.createVNode)("i",{class:"fas fa-crop-alt"},null,-1),V={class:"dokkiCSS-expander"},_={data:()=>({isExpanded:!1}),props:{src:{default:""},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0},expanded:{default:void 0}},mounted(){void 0!==this.$props.expanded&&this.$refs["frame-expander"].toggle_expansion({startExpanded:!0})},watch:{isExpanded(){this.isExpanded&&void 0!==this.$props.autofocus&&this.$nextTick((()=>{this.$refs.iframe.focus()}))}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",N,[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["frame-expander"].toggle_expansion())},[(0,t.createVNode)("span",y,[$,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",V,(0,t.toDisplayString)(a.isExpanded?"Close frame":"Expand frame"),1)]),(0,t.createVNode)(r,{ref:"frame-expander",onExpanded:o[2]||(o[2]=e=>a.isExpanded=!0),onMinimized:o[3]||(o[3]=e=>a.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",{style:{height:i.height}},[(0,t.createVNode)("iframe",{class:"dokki-iframe",src:i.src,ref:"iframe"},"\n                ",8,["src"])],4)])),_:1},512)])}},B=(0,t.createVNode)("span",{class:"dokkiCSS-title"},[(0,t.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),w={class:"dokkiCSS-expander"},E={class:"dokkiCSS-container"},I={key:0},T={key:1,class:"dokkiCSS-italic"},F={props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0},pixelatedScale:{default:void 0},expanded:{default:void 0},width:{default:void 0},height:{default:void 0}},data:()=>({isExpanded:!1,scaledWidth:void 0,scaledHeight:void 0}),mounted(){void 0!==this.$props.expanded&&(this.calculate_scaled_size(),this.$refs["image-expander"].toggle_expansion({startExpanded:!0})),window.addEventListener("resize",this.calculate_scaled_size)},computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit},hasPixelated(){return void 0!==this.$props.pixelatedScale}},methods:{calculate_scaled_size(){const e=this.$props.width,t=this.$props.height;let o=this.$el.offsetWidth;if(!e||!t||!o)return;o-=2;const i=Math.min(this.upscaleToFit?1/0:1,o/e);this.scaledWidth=Math.round(e*i),this.scaledHeight=Math.round(t*i)}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:a.isExpanded}]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>(this.calculate_scaled_size(),this.$refs["image-expander"].toggle_expansion()))},[B,(0,t.createVNode)("aside",w,(0,t.toDisplayString)(a.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"image-expander",class:"dokkiCSS-checker-background","start-expanded":void 0!==i.expanded,onExpanded:o[2]||(o[2]=e=>a.isExpanded=!0),onMinimized:o[3]||(o[3]=e=>a.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",E,[(0,t.createVNode)("img",{src:i.src,ref:"image-element",class:{"dokkiCSS-upscale-to-fit":s.hasUpscaleToFit,"dokkiCSS-pixelated-scale":s.hasPixelated},width:a.scaledWidth,height:a.scaledHeight},null,10,["src","width","height"])])])),_:1},8,["start-expanded"]),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",I)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",T,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},D={props:["title"],render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("h3",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},q={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("p",null,(0,t.toDisplayString)(a.lorem),1)}},L={class:"dokkiCSS-embedded dokki-output dokkiCSS-expandable"},j={class:"dokkiCSS-title"},z=(0,t.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),A={class:"dokkiCSS-expander"},H={data:()=>({isExpanded:!1}),props:{title:{default:"Output"}},mixins:[c],render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",L,[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs.output.toggle_expansion())},[(0,t.createVNode)("span",j,[z,(0,t.createTextVNode)(" "+(0,t.toDisplayString)(i.title),1)]),(0,t.createVNode)("aside",A,(0,t.toDisplayString)(a.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"output",onExpanded:o[2]||(o[2]=e=>a.isExpanded=!0),onMinimized:o[3]||(o[3]=e=>a.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])),_:3},512)])}},M={class:"dokki-side-panel"},U={key:1,class:"dokkiCSS-product-tag"},O={class:"dokkiCSS-vertical-navi"},P={class:"dokkiCSS-navi-link-icon"},W={class:"dokkiCSS-navi-link-label"},Q={class:"dokkiCSS-navi-link-label"},Y={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("nav",M,[(0,t.renderSlot)(e.$slots,"default"),void 0!==s.productName?((0,t.openBlock)(),(0,t.createBlock)("div",{key:0,title:s.productName,class:"dokkiCSS-product-tag"},(0,t.toDisplayString)(s.productName),9,["title"])):((0,t.openBlock)(),(0,t.createBlock)("div",U," Contents ")),(0,t.createVNode)("ul",O,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.topics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("li",null,[(0,t.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[(0,t.createVNode)("span",P,(0,t.toDisplayString)(o+1),1),(0,t.createVNode)("span",W,(0,t.toDisplayString)(e.title),1)],8,["href"]),((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(e.subtopics,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[(0,t.createVNode)("span",Q,(0,t.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},Z={props:{title:{default:"Spoiler"}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-output");return(0,t.openBlock)(),(0,t.createBlock)(r,{title:i.title},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}};function G(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}const J={mixins:[p],props:["title"],created(){const e=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(e,"Detected an orphaned subtopic."),this.anchorableId=G(`${e.title} ${this.title}`),this.$store.commit("add_topic",{parentTopic:e,title:this.title,anchorId:this.anchor_id})},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("h2",null,(0,t.toDisplayString)(this.title),1),(0,t.renderSlot)(e.$slots,"default")],64)}},K={class:"dokkiCSS-embedded dokki-table dokkiCSS-expandable"},R=(0,t.createVNode)("span",{class:"dokkiCSS-title"},[(0,t.createVNode)("i",{class:"fas fa-table",title:"Table"})],-1),X={class:"dokkiCSS-expander"},ee={class:"dokkiCSS-container"},te={key:0},oe={key:1,class:"dokkiCSS-italic"},ie={props:{expanded:{default:void 0}},data:()=>({isExpanded:!1}),mounted(){void 0!==this.$props.expanded&&this.$refs["table-expander"].toggle_expansion({startExpanded:!0})},computed:{hasFooter(){return!!this.$slots.caption}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",K,[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["table-expander"].toggle_expansion())},[R,(0,t.createVNode)("aside",X,(0,t.toDisplayString)(a.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"table-expander",onExpanded:o[2]||(o[2]=e=>a.isExpanded=!0),onMinimized:o[3]||(o[3]=e=>a.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("div",ee,[(0,t.renderSlot)(e.$slots,"table")])])),_:3},512),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",te)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",oe,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)])}},ne={data:()=>({currentThemeIdx:0,themes:[{name:"dark",icon:"far fa-lightbulb"},{name:"light",icon:"fas fa-lightbulb"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.set_current_theme(window.sessionStorage.getItem("dokki:theme")||"light")},methods:{set_current_theme(e=""){this.currentThemeIdx=Math.max(0,this.themes.findIndex((t=>t.name==e)));const t=this.themes[this.currentThemeIdx].name;document.body.dataset.dokkiTheme=t,window.sessionStorage.setItem("dokki:theme",t),this.$refs.themeSelector&&this.$refs.themeSelector.animate([{transform:"rotateY(90deg)"},{transform:"rotateY(0deg)"}],{duration:150})}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("span",{class:"dokki-theme-selector",title:"Light switch",ref:"themeSelector",onClick:o[1]||(o[1]=e=>s.set_current_theme(a.themes[(a.currentThemeIdx+1)%a.themes.length].name))},[(0,t.createVNode)("i",{class:"fa-fw "+a.themes[a.currentThemeIdx].icon},null,2)],512)}},ae={class:"dokkiCSS-embedded dokki-tip"},se=(0,t.createVNode)("header",null," Tip ",-1),re={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",ae,[se,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},de={class:"dokki-topic"},le={class:"dokkiCSS-topic-title"},ce={mixins:[p],props:["title"],data:()=>({globalTopicIdx:{default:-1}}),created(){this.anchorableId=G(this.title),this.$store.commit("add_topic",{title:this.title,anchorId:this.anchor_id}),this.globalTopicIdx=this.$store.state.topics.length},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki-hr");return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:e.anchor_id},null,8,["id"]),(0,t.createVNode)("section",de,[(0,t.createVNode)("h1",le,(0,t.toDisplayString)(this.title),1),(0,t.createVNode)(r),(0,t.renderSlot)(e.$slots,"default")])],64)}},ue={class:"dokki-topics"},pe={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("main",ue,[(0,t.renderSlot)(e.$slots,"default")])}},he={class:"dokkiCSS-title"},me={class:"dokkiCSS-expander"},ke={key:0},fe={key:1,class:"dokkiCSS-italic"},ge={data:()=>({isExpanded:!1}),props:{src:{},platform:{default:"youtube"},expanded:{default:void 0}},mounted(){void 0!==this.$props.expanded&&this.$refs["video-expander"].toggle_expansion({startExpanded:!0})},computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,o,i,n,a,s){const r=(0,t.resolveComponent)("dokki0-animated-expander");return(0,t.openBlock)(),(0,t.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",i.platform]},[(0,t.createVNode)("header",{onClick:o[1]||(o[1]=e=>this.$refs["video-expander"].toggle_expansion())},[(0,t.createVNode)("span",he,[(0,t.createVNode)("i",{class:s.headerIcon,title:"Video"},null,2)]),(0,t.createVNode)("aside",me,(0,t.toDisplayString)(a.isExpanded?"Hide":"Show"),1)]),(0,t.createVNode)(r,{ref:"video-expander",onExpanded:o[2]||(o[2]=e=>a.isExpanded=!0),onMinimized:o[3]||(o[3]=e=>a.isExpanded=!1)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)("iframe",{src:s.videoUrl,allow:"fullscreen; autoplay;"},"\n            ",8,["src"])])),_:1},512),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("hr",ke)):(0,t.createCommentVNode)("v-if",!0),s.hasFooter?((0,t.openBlock)(),(0,t.createBlock)("footer",fe,[(0,t.renderSlot)(e.$slots,"caption")])):(0,t.createCommentVNode)("v-if",!0)],2)}},Se={class:"dokki-hr"},xe={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("hr",Se)}},ve={class:"dokkiCSS-embedded dokki-warning"},be=(0,t.createVNode)("header",null," Warning ",-1),Ce={render:function(e,o){return(0,t.openBlock)(),(0,t.createBlock)("p",ve,[be,(0,t.createVNode)("footer",null,[(0,t.renderSlot)(e.$slots,"default")])])}},Ne={class:"dokki0-text-block-with-line-numbers"},ye={key:0},$e={key:1},Ve={class:"dokkiCSS-text-block-line-content"},_e={props:{text:{},syntax:{default:void 0}},data:()=>({blockIdx:0,highlightLineNum:-1}),created(){function e(){if(this.highlightLineNum=-1,window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(2).split(","),[t,o]=[e[0].split(":")[1],e[1].split(":")[1]];t==this.blockIdx&&(this.highlightLineNum=o-1)}}this.$store.commit("increment_listings_count"),this.blockIdx=this.$store.state.numListings,e.call(this),window.addEventListener("hashchange",e.bind(this))},mounted(){this.$nextTick((()=>{if(window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(1),t=this.$refs[e];t&&window.scrollTo(0,t.offsetTop)}if(this.is_syntax_highlighting_enabled()){const e=this.$el.querySelectorAll(".dokkiCSS-text-block-line-content > code");for(const t of e)hljs.highlightElement(t)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{is_highlight_js_available:()=>"object"==typeof hljs&&"function"==typeof hljs.highlightElement,is_syntax_highlighting_enabled(){return void 0!==this.$props.syntax&&this.is_highlight_js_available()},reset_line_highlight(){this.highlightLineNum=-1,history.replaceState(null,null," ")},highlight_line(e){e==this.highlightLineNum?this.reset_line_highlight():window.location.hash=this.line_ref(e)},test(e){console.log(e)},line_ref(e){return`-listing:${this.blockIdx},ln:${e+1}`}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)("table",Ne,[((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(s.formattedText,((e,o)=>((0,t.openBlock)(),(0,t.createBlock)("tr",{class:["dokkiCSS-text-block-line",{"dokkiCSS-highlighted":a.highlightLineNum==o}]},[(0,t.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line",ref:s.line_ref(o)},null,512),(0,t.createVNode)("td",{class:"dokkiCSS-text-block-line-number",onClick:e=>s.highlight_line(o)},[o!==a.highlightLineNum?((0,t.openBlock)(),(0,t.createBlock)("span",ye,(0,t.toDisplayString)(o+1),1)):((0,t.openBlock)(),(0,t.createBlock)("span",$e," → "))],8,["onClick"]),(0,t.createVNode)("td",Ve,[(0,t.createVNode)("code",{class:void 0!==i.syntax?`language-${i.syntax}`:"unspecified-syntax"},(0,t.toDisplayString)(e),3)])],2)))),256))])}},Be={key:0,ref:"container",class:"dokki0-animated-expander"},we={data:()=>({isExpanded:!1,isTransitioning:!1,numDynamicImages:0,numDynamicImagesLoaded:0}),methods:{expansion_transition_finished(){if(this.numDynamicImagesLoaded!=this.numDynamicImages)return;const e=this.$refs.container;this.$emit("expanded"),this.isTransitioning=!1,e.style.height="unset"},minimization_transition_finished(){this.$emit("minimized"),this.isTransitioning=!1,this.isExpanded=!1},resize_to_contents(){const e=this.$refs.container;return e.style.height=`${e.scrollHeight}px`,e},resize(e=0){const t=this.$refs.container;return t.style.height=`${e}px`,t},toggle_expansion({startExpanded:e=!1}={}){if(!this.isTransitioning){if(!this.isExpanded&&e)return this.$emit("expanded"),void(this.isExpanded=!0);if(this.$emit("transitioning"),this.isTransitioning=!0,this.isExpanded){const e=this.$refs.container;this.resize_to_contents(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e.style.height="0",e.ontransitionend=this.minimization_transition_finished}))}))}else this.isExpanded=!0,this.$nextTick((()=>{const e=this.$refs.container;e.ontransitionend=void 0,e.style.height="0";{const e=this.$refs.container.getElementsByTagName("img");this.numDynamicImages=0,this.numDynamicImagesLoaded=0;for(const t of e)void 0===t.height&&(this.numDynamicImages++,t.addEventListener("load",(()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.numDynamicImagesLoaded++,this.resize_to_contents().ontransitionend=this.expansion_transition_finished}))}))})))}window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.resize_to_contents(),e.ontransitionend=this.numDynamicImages?void 0:this.expansion_transition_finished}))}))}))}}},render:function(e,o,i,n,a,s){return a.isExpanded?((0,t.openBlock)(),(0,t.createBlock)("div",Be,[(0,t.renderSlot)(e.$slots,"default")],512)):(0,t.createCommentVNode)("v-if",!0)}},Ee={class:"dokki-product-name"},Ie={computed:{productName(){return this.$store.state.productName}},render:function(e,o,i,n,a,s){return(0,t.openBlock)(),(0,t.createBlock)(t.Fragment,null,[(0,t.createVNode)("span",Ee,(0,t.toDisplayString)(s.productName),1),(0,t.renderSlot)(e.$slots,"default")],64)}};function Te(t={}){t={container:document.body,template:document.querySelector("#dokki-document"),...t},console.assert(t.container instanceof HTMLElement,"Invalid document container"),t.template instanceof HTMLTemplateElement?(t.container.appendChild(t.template.content),t.template.remove()):console.assert(null===t.template,"Invalid document template"),document.documentElement.hasAttribute("lang")||document.documentElement.setAttribute("lang","en");const o=Vue.createApp({}).component("dokki-area",a).component("dokki-code",h).component("dokki-console",x).component("dokki-header",C).component("dokki-iframe",_).component("dokki-image",F).component("dokki-item",D).component("dokki-lorem",q).component("dokki-output",H).component("dokki-side-panel",Y).component("dokki-spoiler",Z).component("dokki-subtopic",J).component("dokki-table",ie).component("dokki-theme-selector",ne).component("dokki-tip",re).component("dokki-topic",ce).component("dokki-topics",pe).component("dokki-video",ge).component("dokki-warning",Ce).component("dokki-hr",xe).component("dokki0-text-block-with-line-numbers",_e).component("dokki0-animated-expander",we).component("product-name",Ie).use(e);if(Array.isArray(parent.window.dokkiUserComponents))for(const e of parent.window.dokkiUserComponents){if("object"!=typeof e||!e.hasOwnProperty("$tag"))continue;const t=e.$tag;delete e.$tag,o.component(t,e)}o.mount(t.container)}i(292)})(),n})()}));