!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},914:(e,t,o)=>{function i(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}o.d(t,{start:()=>Ee});const n=new Vuex.Store({state:{topics:[],loremCount:0,productName:void 0,productVersion:void 0,numListings:0},mutations:{add_topic(e,t=""){e.topics.push({title:t,subtopics:[],simplifiedTitle:i(t),url:`#${i(t)}`})},add_subtopic(e,t={}){t.parentTopic&&t.parentTopic.subtopics.push(t)},increment_listings_count(e){e.numListings++},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var a=o(5);const r={class:"dokki-area"},s={render:function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",r,[(0,a.renderSlot)(e.$slots,"default")])}},c={key:0},l={class:"dokkiCSS-title"},d=(0,a.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),u={key:1},p={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},k={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},m={mixins:[k],props:{title:{default:"Code"},code:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(!this.$slots.code||"function"!=typeof this.$slots.code)return;const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,t,o,i,n,r){const s=(0,a.resolveComponent)("dokki0-text-block-with-line-numbers");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("p",{class:["dokkiCSS-embedded dokki-code",{"has-output":r.hasOutput}]},[e.isHeaderless?(0,a.createCommentVNode)("v-if",!0):((0,a.openBlock)(),(0,a.createBlock)("header",c,[(0,a.createVNode)("span",l,[d,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(o.title),1)])])),e.isHeaderless?(0,a.createCommentVNode)("v-if",!0):((0,a.openBlock)(),(0,a.createBlock)("hr",u)),(0,a.createVNode)("footer",null,[(0,a.createVNode)(s,{text:n.codeFromSlot||o.code},null,8,["text"])])],2),(0,a.renderSlot)(e.$slots,"default")],64)}},h={key:0,class:"dokkiCSS-embedded dokki-console"},f={key:0},S={class:"dokkiCSS-title"},g={key:1},v={key:2},N={mixins:[k],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,t,o,i,n,r){const s=(0,a.resolveComponent)("dokki0-text-block-with-line-numbers");return r.hasFooter||!e.isHeaderless?((0,a.openBlock)(),(0,a.createBlock)("p",h,[e.isHeaderless?(0,a.createCommentVNode)("v-if",!0):((0,a.openBlock)(),(0,a.createBlock)("header",f,[(0,a.createVNode)("span",S,[(0,a.createVNode)("i",{class:r.headerIcon,title:"Terminal command"},null,2)]),(0,a.createVNode)("code",null,(0,a.toDisplayString)(o.command),1)])),!e.isHeaderless&&r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("hr",g)):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("footer",v,[(0,a.createVNode)(s,{text:n.outputFromSlot||o.output},null,8,["text"])])):(0,a.createCommentVNode)("v-if",!0)])):(0,a.createCommentVNode)("v-if",!0)}},x={class:"dokki-header"},C={class:"dokkiCSS-header-container"},b={props:{icon:{default:"fas fa-book"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,t,o,i,n,r){const s=(0,a.resolveComponent)("dokki-theme-selector");return(0,a.openBlock)(),(0,a.createBlock)("header",x,[(0,a.createVNode)("div",C,[(0,a.createVNode)("span",{class:"dokkiCSS-header-title",title:o.title},[(0,a.createVNode)("i",{class:o.icon},null,2),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(o.title),1)],8,["title"]),(0,a.createVNode)(s)])])}},B={class:"dokkiCSS-embedded dokki-iframe dokkiCSS-expandable"},V={class:"dokkiCSS-title"},y=(0,a.createVNode)("i",{class:"fas fa-expand"},null,-1),$={class:"dokkiCSS-expander"},w={key:0},T={props:{src:{default:""},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0}},mixins:[p],watch:{isExpanded(){this.isExpanded&&void 0!==this.$props.autofocus&&this.$nextTick((()=>{this.$refs.iframe.onload=()=>{this.$refs.iframe.focus()}}))}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",B,[(0,a.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,a.createVNode)("span",V,[y,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(o.title),1)]),(0,a.createVNode)("aside",$,(0,a.toDisplayString)(e.isExpanded?"Close frame":"Expand frame"),1)]),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("hr",w)):(0,a.createCommentVNode)("v-if",!0),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("footer",{key:1,style:{height:o.height}},[(0,a.createVNode)("iframe",{class:"dokki-iframe",src:o.src,ref:"iframe"},"\n            ",8,["src"])],4)):(0,a.createCommentVNode)("v-if",!0)])}},E=(0,a.createVNode)("span",{class:"dokkiCSS-title"},[(0,a.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),_={class:"dokkiCSS-expander"},F={key:0},q={key:1,class:"dokkiCSS-container dokkiCSS-checker-background"},D={key:2},I={key:3,class:"dokkiCSS-italic"},L={props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0}},mixins:[p],computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:e.isExpanded}]},[(0,a.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[E,(0,a.createVNode)("aside",_,(0,a.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("hr",F)):(0,a.createCommentVNode)("v-if",!0),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("div",q,[(0,a.createVNode)("img",{src:o.src,class:{"dokkiCSS-upscale-to-fit":r.hasUpscaleToFit}},null,10,["src"])])):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("hr",D)):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("footer",I,[(0,a.renderSlot)(e.$slots,"caption")])):(0,a.createCommentVNode)("v-if",!0)],2)}},j={props:["title"],render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("h3",null,(0,a.toDisplayString)(this.title),1),(0,a.renderSlot)(e.$slots,"default")],64)}},H={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",null,(0,a.toDisplayString)(n.lorem),1)}},M={class:"dokkiCSS-embedded dokki-output dokkiCSS-expandable"},O={class:"dokkiCSS-title"},U=(0,a.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),A={class:"dokkiCSS-expander"},P={key:0},Q={props:{title:{default:"Output"}},mixins:[p],render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",M,[(0,a.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,a.createVNode)("span",O,[U,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(o.title),1)]),(0,a.createVNode)("aside",A,(0,a.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("footer",P,[(0,a.renderSlot)(e.$slots,"default")])):(0,a.createCommentVNode)("v-if",!0)])}},W={class:"dokki-side-panel"},z={key:1,class:"dokkiCSS-product-tag"},Z={class:"dokkiCSS-vertical-navi"},G=(0,a.createVNode)("i",{class:"dokkiCSS-navi-link-icon fas fa-sm fa-fw fa-hashtag"},null,-1),J=(0,a.createVNode)("i",{class:"dokkiCSS-navi-link-icon fas fa-sm fa-fw fa-hashtag"},null,-1),K={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("nav",W,[void 0!==r.productName?((0,a.openBlock)(),(0,a.createBlock)("div",{key:0,title:r.productName,class:"dokkiCSS-product-tag"},(0,a.toDisplayString)(r.productName),9,["title"])):((0,a.openBlock)(),(0,a.createBlock)("div",z," Contents ")),(0,a.createVNode)("ul",Z,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(r.topics,(e=>((0,a.openBlock)(),(0,a.createBlock)("li",null,[(0,a.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[G,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.title),1)],8,["href"]),((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(e.subtopics,(e=>((0,a.openBlock)(),(0,a.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[J,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},R={props:{title:{default:"Spoiler"}},render:function(e,t,o,i,n,r){const s=(0,a.resolveComponent)("dokki-output");return(0,a.openBlock)(),(0,a.createBlock)(s,{title:o.title},{default:(0,a.withCtx)((()=>[(0,a.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}},X={props:["title"],data:()=>({selfMeta:void 0}),created(){const e=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(e,"Detected an orphaned subtopic.");const t=`${e.title} ${this.title}`;this.selfMeta={title:this.title,parentTopic:e,simplifiedTitle:i(t),url:`#${i(t)}`},this.$store.commit("add_subtopic",this.selfMeta)},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:this.selfMeta.simplifiedTitle},null,8,["id"]),(0,a.createVNode)("h2",null,(0,a.toDisplayString)(this.title),1),(0,a.renderSlot)(e.$slots,"default")],64)}},Y={class:"dokkiCSS-embedded dokki-table dokkiCSS-expandable"},ee=(0,a.createVNode)("span",{class:"dokkiCSS-title"},[(0,a.createVNode)("i",{class:"fas fa-border-all",title:"Table"})],-1),te={class:"dokkiCSS-expander"},oe={key:0,class:"table-container"},ie={key:1},ne={key:2,class:"dokkiCSS-italic"},ae={mixins:[p],computed:{hasFooter(){return!!this.$slots.caption}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",Y,[(0,a.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[ee,(0,a.createVNode)("aside",te,(0,a.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("div",oe,[(0,a.renderSlot)(e.$slots,"table")])):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("hr",ie)):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("footer",ne,[(0,a.renderSlot)(e.$slots,"caption")])):(0,a.createCommentVNode)("v-if",!0)])}},re={data:()=>({currentThemeIdx:0,themes:[{name:"light",icon:"fas fa-sun"},{name:"dark",icon:"fas fa-moon"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.update_theme()},methods:{update_theme(){document.body.dataset.dokkiTheme=this.themes[this.currentThemeIdx].name}},watch:{currentThemeIdx(){this.update_theme()}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("span",{class:"dokki-theme-selector",onClick:t[1]||(t[1]=e=>n.currentThemeIdx=(n.currentThemeIdx+1)%n.themes.length)},[(0,a.createVNode)("i",{class:"fa-fw "+n.themes[n.currentThemeIdx].icon},null,2)])}},se={class:"dokkiCSS-embedded dokki-tip"},ce=(0,a.createVNode)("header",null,[(0,a.createVNode)("div",{class:"dokkiCSS-title"},[(0,a.createVNode)("i",{class:"fas fa-comment"})])],-1),le={render:function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",se,[ce,(0,a.createVNode)("footer",null,[(0,a.renderSlot)(e.$slots,"default")])])}},de={class:"dokki-topic"},ue={props:["title"],data:()=>({idx:-1}),computed:{simplifiedTitle(){return this.idx<1?"":this.$store.state.topics[this.idx-1].simplifiedTitle}},created(){this.$store.commit("add_topic",this.title),this.idx=this.$store.state.topics.length},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:r.simplifiedTitle},null,8,["id"]),(0,a.createVNode)("section",de,[(0,a.createVNode)("h1",null,(0,a.toDisplayString)(this.title),1),(0,a.renderSlot)(e.$slots,"default")])],64)}},pe={class:"dokki-topics"},ke={render:function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("main",pe,[(0,a.renderSlot)(e.$slots,"default")])}},me={class:"dokkiCSS-title"},he={class:"dokkiCSS-expander"},fe={key:0},Se={key:2},ge={key:3,class:"dokkiCSS-italic"},ve={props:{src:{},platform:{default:"youtube"}},mixins:[p],computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",o.platform]},[(0,a.createVNode)("header",{onClick:t[1]||(t[1]=t=>e.isExpanded=!e.isExpanded)},[(0,a.createVNode)("span",me,[(0,a.createVNode)("i",{class:r.headerIcon,title:"Video"},null,2)]),(0,a.createVNode)("aside",he,(0,a.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("hr",fe)):(0,a.createCommentVNode)("v-if",!0),e.isExpanded?((0,a.openBlock)(),(0,a.createBlock)("iframe",{key:1,class:"dokkiCSS-checker-background",src:r.videoUrl,allow:"fullscreen; autoplay;"},"\n        ",8,["src"])):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("hr",Se)):(0,a.createCommentVNode)("v-if",!0),r.hasFooter?((0,a.openBlock)(),(0,a.createBlock)("footer",ge,[(0,a.renderSlot)(e.$slots,"caption")])):(0,a.createCommentVNode)("v-if",!0)],2)}},Ne={class:"dokkiCSS-embedded dokki-warning casts-shadow"},xe=(0,a.createVNode)("header",null,[(0,a.createVNode)("span",{class:"dokkiCSS-title"},[(0,a.createVNode)("i",{class:"fas fa-exclamation-triangle"})])],-1),Ce={render:function(e,t){return(0,a.openBlock)(),(0,a.createBlock)("p",Ne,[xe,(0,a.createVNode)("footer",null,[(0,a.renderSlot)(e.$slots,"default")])])}},be={class:"dokki0-text-block-with-line-numbers"},Be={key:0},Ve={key:1},ye={class:"dokkiCSS-text-block-line-content"},$e={props:{text:{}},data:()=>({blockIdx:0,highlightLineNum:-1}),created(){function e(){if(this.highlightLineNum=-1,window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(2).split(","),[t,o]=[e[0].split(":")[1],e[1].split(":")[1]];t==this.blockIdx&&(this.highlightLineNum=o-1)}}this.$store.commit("increment_listings_count"),this.blockIdx=this.$store.state.numListings,e.call(this),window.addEventListener("hashchange",e.bind(this))},mounted(){this.$nextTick((()=>{if(window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(1),t=this.$refs[e];t&&window.scrollTo(0,t.offsetTop)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{reset_line_highlight(){this.highlightLineNum=-1,history.replaceState(null,null," ")},highlight_line(e){e==this.highlightLineNum?this.reset_line_highlight():window.location.hash=this.line_ref(e)},test(e){console.log(e)},line_ref(e){return`-listing:${this.blockIdx},ln:${e+1}`}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)("table",be,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(r.formattedText,((e,t)=>((0,a.openBlock)(),(0,a.createBlock)("tr",{class:["dokkiCSS-text-block-line",{"dokkiCSS-highlighted":n.highlightLineNum==t}]},[(0,a.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line",ref:r.line_ref(t)},null,512),(0,a.createVNode)("td",{class:"dokkiCSS-text-block-line-number",onClick:e=>r.highlight_line(t)},[t!==n.highlightLineNum?((0,a.openBlock)(),(0,a.createBlock)("span",Be,(0,a.toDisplayString)(t+1),1)):((0,a.openBlock)(),(0,a.createBlock)("span",Ve," → "))],8,["onClick"]),(0,a.createVNode)("td",ye,(0,a.toDisplayString)(e),1)],2)))),256))])}},we={class:"dokki-product-name"},Te={computed:{productName(){return this.$store.state.productName}},render:function(e,t,o,i,n,r){return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[(0,a.createVNode)("span",we,(0,a.toDisplayString)(r.productName),1),(0,a.renderSlot)(e.$slots,"default")],64)}};function Ee(e={}){e={container:document.body,template:document.querySelector("#dokki-document"),...e},console.assert(e.container instanceof HTMLElement,"Invalid document container"),e.template instanceof HTMLTemplateElement?(e.container.appendChild(e.template.content),e.template.remove()):console.assert(null===e.template,"Invalid document template"),Vue.createApp({}).component("dokki-area",s).component("dokki-code",m).component("dokki-console",N).component("dokki-header",b).component("dokki-iframe",T).component("dokki-image",L).component("dokki-item",j).component("dokki-lorem",H).component("dokki-output",Q).component("dokki-side-panel",K).component("dokki-spoiler",R).component("dokki-subtopic",X).component("dokki-table",ae).component("dokki-theme-selector",re).component("dokki-tip",le).component("dokki-topic",ue).component("dokki-topics",ke).component("dokki-video",ve).component("dokki-warning",Ce).component("dokki0-text-block-with-line-numbers",$e).component("product-name",Te).use(n).mount(e.container)}o(292)},5:t=>{t.exports=e}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};return(()=>{i.r(n);var e=i(914);window.addEventListener("DOMContentLoaded",e.start)})(),n})()}));