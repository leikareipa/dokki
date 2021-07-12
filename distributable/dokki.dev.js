!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},5:t=>{t.exports=e}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};return(()=>{function e(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}i.r(n),i.d(n,{start:()=>Te});const t=new Vuex.Store({state:{topics:[],loremCount:0,productName:void 0,productVersion:void 0,numListings:0},mutations:{add_topic(t,o=""){t.topics.push({title:o,subtopics:[],simplifiedTitle:e(o),url:`#${e(o)}`})},add_subtopic(e,t={}){t.parentTopic&&t.parentTopic.subtopics.push(t)},increment_listings_count(e){e.numListings++},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var o=i(5);const r={class:"dokki-area"},a={render:function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",r,[(0,o.renderSlot)(e.$slots,"default")])}},s={key:0},c={class:"dokkiCSS-title"},l=(0,o.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),d={key:1},u={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},p={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},k={mixins:[p],props:{title:{default:"Code"},code:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(!this.$slots.code||"function"!=typeof this.$slots.code)return;const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,t,i,n,r,a){const u=(0,o.resolveComponent)("dokki0-text-block-with-line-numbers");return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("p",{class:["dokkiCSS-embedded dokki-code",{"has-output":a.hasOutput}]},[e.isHeaderless?(0,o.createCommentVNode)("v-if",!0):((0,o.openBlock)(),(0,o.createBlock)("header",s,[(0,o.createVNode)("span",c,[l,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(i.title),1)])])),e.isHeaderless?(0,o.createCommentVNode)("v-if",!0):((0,o.openBlock)(),(0,o.createBlock)("hr",d)),(0,o.createVNode)("footer",null,[(0,o.createVNode)(u,{text:r.codeFromSlot||i.code},null,8,["text"])])],2),(0,o.renderSlot)(e.$slots,"default")],64)}},m={key:0,class:"dokkiCSS-embedded dokki-console"},h={key:0},f={class:"dokkiCSS-title"},S={key:1},g={key:2},v={mixins:[p],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,t,i,n,r,a){const s=(0,o.resolveComponent)("dokki0-text-block-with-line-numbers");return a.hasFooter||!e.isHeaderless?((0,o.openBlock)(),(0,o.createBlock)("p",m,[e.isHeaderless?(0,o.createCommentVNode)("v-if",!0):((0,o.openBlock)(),(0,o.createBlock)("header",h,[(0,o.createVNode)("span",f,[(0,o.createVNode)("i",{class:a.headerIcon,title:"Terminal command"},null,2)]),(0,o.createVNode)("code",null,(0,o.toDisplayString)(i.command),1)])),!e.isHeaderless&&a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("hr",S)):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("footer",g,[(0,o.createVNode)(s,{text:r.outputFromSlot||i.output},null,8,["text"])])):(0,o.createCommentVNode)("v-if",!0)])):(0,o.createCommentVNode)("v-if",!0)}},x={class:"dokki-header"},C={class:"dokkiCSS-header-container"},N={props:{icon:{default:"fas fa-atlas"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,t,i,n,r,a){const s=(0,o.resolveComponent)("dokki-theme-selector");return(0,o.openBlock)(),(0,o.createBlock)("header",x,[(0,o.createVNode)("div",C,[(0,o.createVNode)("i",{class:["dokkiCSS-header-icon",i.icon]},null,2),(0,o.createVNode)("span",{class:"dokkiCSS-header-title",title:i.title},(0,o.toDisplayString)(i.title),9,["title"]),(0,o.createVNode)(s)])])}},b={class:"dokkiCSS-embedded dokki-iframe dokkiCSS-expandable"},B={class:"dokkiCSS-title"},V=(0,o.createVNode)("i",{class:"fas fa-external-link-alt"},null,-1),y={class:"dokkiCSS-expander"},$={key:0},w={props:{src:{default:""},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0}},mixins:[u],watch:{isExpanded(){this.isExpanded&&void 0!==this.$props.autofocus&&this.$nextTick((()=>{this.$refs.iframe.onload=()=>{this.$refs.iframe.focus()}}))}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",b,[(0,o.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,o.createVNode)("span",B,[V,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(i.title),1)]),(0,o.createVNode)("aside",y,(0,o.toDisplayString)(e.isExpanded?"Close frame":"Expand frame"),1)]),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("hr",$)):(0,o.createCommentVNode)("v-if",!0),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("footer",{key:1,style:{height:i.height}},[(0,o.createVNode)("iframe",{class:"dokki-iframe",src:i.src,ref:"iframe"},"\n            ",8,["src"])],4)):(0,o.createCommentVNode)("v-if",!0)])}},T=(0,o.createVNode)("span",{class:"dokkiCSS-title"},[(0,o.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),E={class:"dokkiCSS-expander"},_={key:0},F={key:1,class:"dokkiCSS-container dokkiCSS-checker-background"},q={key:2},D={key:3,class:"dokkiCSS-italic"},I={props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0}},mixins:[u],computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:e.isExpanded}]},[(0,o.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[T,(0,o.createVNode)("aside",E,(0,o.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("hr",_)):(0,o.createCommentVNode)("v-if",!0),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("div",F,[(0,o.createVNode)("img",{src:i.src,class:{"dokkiCSS-upscale-to-fit":a.hasUpscaleToFit}},null,10,["src"])])):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("hr",q)):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("footer",D,[(0,o.renderSlot)(e.$slots,"caption")])):(0,o.createCommentVNode)("v-if",!0)],2)}},L={props:["title"],render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("h3",null,(0,o.toDisplayString)(this.title),1),(0,o.renderSlot)(e.$slots,"default")],64)}},j={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",null,(0,o.toDisplayString)(r.lorem),1)}},H={class:"dokkiCSS-embedded dokki-output dokkiCSS-expandable"},U={class:"dokkiCSS-title"},M=(0,o.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),O={class:"dokkiCSS-expander"},A={key:0},P={props:{title:{default:"Output"}},mixins:[u],render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",H,[(0,o.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,o.createVNode)("span",U,[M,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(i.title),1)]),(0,o.createVNode)("aside",O,(0,o.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("footer",A,[(0,o.renderSlot)(e.$slots,"default")])):(0,o.createCommentVNode)("v-if",!0)])}},W={class:"dokki-side-panel"},Q={class:"dokkiCSS-vertical-navi"},z=(0,o.createVNode)("i",{class:"dokkiCSS-navi-link-icon fas fa-sm fa-hashtag"},null,-1),Z=(0,o.createVNode)("i",{class:"dokkiCSS-navi-link-icon fas fa-sm fa-hashtag"},null,-1),G={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("nav",W,[void 0!==a.productName?((0,o.openBlock)(),(0,o.createBlock)("div",{key:0,title:a.productName,class:"dokkiCSS-product-tag"},(0,o.toDisplayString)(a.productName),9,["title"])):(0,o.createCommentVNode)("v-if",!0),(0,o.createVNode)("ul",Q,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(a.topics,(e=>((0,o.openBlock)(),(0,o.createBlock)("li",null,[(0,o.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[z,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.title),1)],8,["href"]),((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(e.subtopics,(e=>((0,o.openBlock)(),(0,o.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[Z,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},J={props:{title:{default:"Spoiler"}},render:function(e,t,i,n,r,a){const s=(0,o.resolveComponent)("dokki-output");return(0,o.openBlock)(),(0,o.createBlock)(s,{title:i.title},{default:(0,o.withCtx)((()=>[(0,o.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}},K={props:["title"],data:()=>({selfMeta:void 0}),created(){const t=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(t,"Detected an orphaned subtopic.");const o=`${t.title} ${this.title}`;this.selfMeta={title:this.title,parentTopic:t,simplifiedTitle:e(o),url:`#${e(o)}`},this.$store.commit("add_subtopic",this.selfMeta)},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:this.selfMeta.simplifiedTitle},null,8,["id"]),(0,o.createVNode)("h2",null,(0,o.toDisplayString)(this.title),1),(0,o.renderSlot)(e.$slots,"default")],64)}},R={class:"dokkiCSS-embedded dokki-table dokkiCSS-expandable"},X=(0,o.createVNode)("span",{class:"dokkiCSS-title"},[(0,o.createVNode)("i",{class:"fas fa-table",title:"Table"})],-1),Y={class:"dokkiCSS-expander"},ee={key:0,class:"table-container"},te={key:1},oe={key:2,class:"dokkiCSS-italic"},ie={mixins:[u],computed:{hasFooter(){return!!this.$slots.caption}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",R,[(0,o.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[X,(0,o.createVNode)("aside",Y,(0,o.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("div",ee,[(0,o.renderSlot)(e.$slots,"table")])):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("hr",te)):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("footer",oe,[(0,o.renderSlot)(e.$slots,"caption")])):(0,o.createCommentVNode)("v-if",!0)])}},ne={data:()=>({currentThemeIdx:0,themes:[{name:"light",icon:"fas fa-sun"},{name:"dark",icon:"fas fa-moon"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.update_theme()},methods:{update_theme(){document.body.dataset.dokkiTheme=this.themes[this.currentThemeIdx].name}},watch:{currentThemeIdx(){this.update_theme()}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("span",{class:"dokki-theme-selector",onClick:t[1]||(t[1]=e=>r.currentThemeIdx=(r.currentThemeIdx+1)%r.themes.length)},[(0,o.createVNode)("i",{class:"fa-fw "+r.themes[r.currentThemeIdx].icon},null,2)])}},re={class:"dokkiCSS-embedded dokki-tip"},ae=(0,o.createVNode)("header",null," Tip! ",-1),se={render:function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",re,[ae,(0,o.createVNode)("footer",null,[(0,o.renderSlot)(e.$slots,"default")])])}},ce={class:"dokki-topic"},le={class:"dokkiCSS-topic-title"},de={props:["title"],data:()=>({idx:-1}),computed:{simplifiedTitle(){return this.idx<1?"":this.$store.state.topics[this.idx-1].simplifiedTitle}},created(){this.$store.commit("add_topic",this.title),this.idx=this.$store.state.topics.length},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:a.simplifiedTitle},null,8,["id"]),(0,o.createVNode)("section",ce,[(0,o.createVNode)("h1",le,(0,o.toDisplayString)(this.title),1),(0,o.renderSlot)(e.$slots,"default")])],64)}},ue={class:"dokki-topics"},pe={render:function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("main",ue,[(0,o.renderSlot)(e.$slots,"default")])}},ke={class:"dokkiCSS-title"},me={class:"dokkiCSS-expander"},he={key:0},fe={key:2},Se={key:3,class:"dokkiCSS-italic"},ge={props:{src:{},platform:{default:"youtube"}},mixins:[u],computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",i.platform]},[(0,o.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,o.createVNode)("span",ke,[(0,o.createVNode)("i",{class:a.headerIcon,title:"Video"},null,2)]),(0,o.createVNode)("aside",me,(0,o.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("hr",he)):(0,o.createCommentVNode)("v-if",!0),e.isExpanded?((0,o.openBlock)(),(0,o.createBlock)("iframe",{key:1,class:"dokkiCSS-checker-background",src:a.videoUrl,allow:"fullscreen; autoplay;"},"\n        ",8,["src"])):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("hr",fe)):(0,o.createCommentVNode)("v-if",!0),a.hasFooter?((0,o.openBlock)(),(0,o.createBlock)("footer",Se,[(0,o.renderSlot)(e.$slots,"caption")])):(0,o.createCommentVNode)("v-if",!0)],2)}},ve={class:"dokkiCSS-embedded dokki-warning"},xe=(0,o.createVNode)("header",null," Warning! ",-1),Ce={render:function(e,t){return(0,o.openBlock)(),(0,o.createBlock)("p",ve,[xe,(0,o.createVNode)("footer",null,[(0,o.renderSlot)(e.$slots,"default")])])}},Ne={class:"dokki0-text-block-with-line-numbers"},be={key:0},Be={key:1},Ve={class:"dokkiCSS-text-block-line-content"},ye={props:{text:{}},data:()=>({blockIdx:0,highlightLineNum:-1}),created(){function e(){if(this.highlightLineNum=-1,window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(2).split(","),[t,o]=[e[0].split(":")[1],e[1].split(":")[1]];t==this.blockIdx&&(this.highlightLineNum=o-1)}}this.$store.commit("increment_listings_count"),this.blockIdx=this.$store.state.numListings,e.call(this),window.addEventListener("hashchange",e.bind(this))},mounted(){this.$nextTick((()=>{if(window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(1),t=this.$refs[e];t&&window.scrollTo(0,t.offsetTop)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{reset_line_highlight(){this.highlightLineNum=-1,history.replaceState(null,null," ")},highlight_line(e){e==this.highlightLineNum?this.reset_line_highlight():window.location.hash=this.line_ref(e)},test(e){console.log(e)},line_ref(e){return`-listing:${this.blockIdx},ln:${e+1}`}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)("table",Ne,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(a.formattedText,((e,t)=>((0,o.openBlock)(),(0,o.createBlock)("tr",{class:["dokkiCSS-text-block-line",{"dokkiCSS-highlighted":r.highlightLineNum==t}]},[(0,o.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line",ref:a.line_ref(t)},null,512),(0,o.createVNode)("td",{class:"dokkiCSS-text-block-line-number",onClick:e=>a.highlight_line(t)},[t!==r.highlightLineNum?((0,o.openBlock)(),(0,o.createBlock)("span",be,(0,o.toDisplayString)(t+1),1)):((0,o.openBlock)(),(0,o.createBlock)("span",Be," → "))],8,["onClick"]),(0,o.createVNode)("td",Ve,(0,o.toDisplayString)(e),1)],2)))),256))])}},$e={class:"dokki-product-name"},we={computed:{productName(){return this.$store.state.productName}},render:function(e,t,i,n,r,a){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("span",$e,(0,o.toDisplayString)(a.productName),1),(0,o.renderSlot)(e.$slots,"default")],64)}};function Te(e={}){e={container:document.body,template:document.querySelector("#dokki-document"),...e},console.assert(e.container instanceof HTMLElement,"Invalid document container"),e.template instanceof HTMLTemplateElement?(e.container.appendChild(e.template.content),e.template.remove()):console.assert(null===e.template,"Invalid document template");const o=Vue.createApp({}).component("dokki-area",a).component("dokki-code",k).component("dokki-console",v).component("dokki-header",N).component("dokki-iframe",w).component("dokki-image",I).component("dokki-item",L).component("dokki-lorem",j).component("dokki-output",P).component("dokki-side-panel",G).component("dokki-spoiler",J).component("dokki-subtopic",K).component("dokki-table",ie).component("dokki-theme-selector",ne).component("dokki-tip",se).component("dokki-topic",de).component("dokki-topics",pe).component("dokki-video",ge).component("dokki-warning",Ce).component("dokki0-text-block-with-line-numbers",ye).component("product-name",we).use(t);if(Array.isArray(parent.window.dokkiUserComponents))for(const e of parent.window.dokkiUserComponents){if("object"!=typeof e||!e.hasOwnProperty("$tag"))continue;const t=e.$tag;delete e.$tag,o.component(t,e)}o.mount(e.container)}i(292)})(),n})()}));