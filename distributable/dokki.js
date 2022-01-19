!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.dokki=t(require("Vue")):e.dokki=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={292:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const i=o.p+"dokki.css"},349:(e,t,o)=>{o.d(t,{start:()=>Fe});const i=new Vuex.Store({state:{topics:[],loremCount:0,productName:void 0,productVersion:void 0,numListings:0},mutations:{add_topic(e,t={}){console.assert("string"==typeof t.title),console.assert("string"==typeof t.anchorId),t.parentTopic?t.parentTopic.subtopics.push({...t,url:`#${t.anchorId}`}):e.topics.push({...t,subtopics:[],url:`#${t.anchorId}`})},increment_listings_count(e){e.numListings++},increment_lorem_count(e){e.loremCount++},set_product_name(e,t){e.productName=t},set_product_version(e,t){e.productVersion=t}}});var n=o(5);const s={class:"dokki-area"},a={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("p",s,[(0,n.renderSlot)(e.$slots,"default")])}},r={key:0},d={class:"dokkiCSS-title"},l=(0,n.createVNode)("i",{class:"fas fa-code",title:"Code"},null,-1),c={key:1},u={props:{expanded:{default:void 0}},data(){return{isExpanded:void 0!==this.$props.expanded}}},p={props:{headerless:{default:void 0}},data(){return{isHeaderless:void 0!==this.$props.headerless}}},h={props:{id:{default:void 0}},data:()=>({anchorableId:{type:String,default:void 0}}),computed:{anchor_id(){return console.assert("string"==typeof this.anchorableId),this.id||this.anchorableId}}},m={mixins:[p],props:{title:{default:"Code"},code:{default:void 0},syntax:{default:void 0}},data:()=>({codeFromSlot:void 0}),mounted(){if(!this.$slots.code||"function"!=typeof this.$slots.code)return;const e=this.$slots.code()[0];e&&(this.codeFromSlot=e.children)},computed:{hasOutput(){return!!this.$slots.default}},render:function(e,t,o,i,s,a){const u=(0,n.resolveComponent)("dokki0-text-block-with-line-numbers");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("p",{class:["dokkiCSS-embedded dokki-code",{"has-output":a.hasOutput}]},[e.isHeaderless?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createBlock)("header",r,[(0,n.createVNode)("span",d,[l,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(o.title),1)])])),e.isHeaderless?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createBlock)("hr",c)),(0,n.createVNode)("footer",null,[(0,n.createVNode)(u,{syntax:o.syntax,text:s.codeFromSlot||o.code},null,8,["syntax","text"])])],2),(0,n.renderSlot)(e.$slots,"default")],64)}},k={key:0,class:"dokkiCSS-embedded dokki-console"},f={key:0},g={class:"dokkiCSS-title"},S={key:1},x={key:2},v={mixins:[p],props:{command:{default:"undefined command"},output:{default:void 0},platform:{default:"unix"}},data:()=>({outputFromSlot:void 0}),mounted(){if(!this.$slots.output||"function"!=typeof this.$slots.output)return;const e=this.$slots.output()[0];e&&(this.outputFromSlot=e.children)},computed:{headerIcon(){switch(this.platform){case"windows":return"fas fa-terminal";case"unix":default:return"fas fa-dollar-sign"}},hasFooter(){return void 0!==this.output||void 0!==this.outputFromSlot}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-text-block-with-line-numbers");return a.hasFooter||!e.isHeaderless?((0,n.openBlock)(),(0,n.createBlock)("p",k,[e.isHeaderless?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createBlock)("header",f,[(0,n.createVNode)("span",g,[(0,n.createVNode)("i",{class:a.headerIcon,title:"Terminal command"},null,2)]),(0,n.createVNode)("code",null,(0,n.toDisplayString)(o.command),1)])),!e.isHeaderless&&a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("hr",S)):(0,n.createCommentVNode)("v-if",!0),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("footer",x,[(0,n.createVNode)(r,{text:s.outputFromSlot||o.output},null,8,["text"])])):(0,n.createCommentVNode)("v-if",!0)])):(0,n.createCommentVNode)("v-if",!0)}},b={class:"dokki-header"},C={class:"dokkiCSS-header-container"},N={props:{icon:{default:"fas fa-atlas"},title:{default:"Untitled"},productName:{default:void 0},productVersion:{default:void 0}},beforeCreate(){document.title=this.title,this.$store.commit("set_product_name",this.productName),this.$store.commit("set_product_version",this.productVersion)},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki-theme-selector");return(0,n.openBlock)(),(0,n.createBlock)("header",b,[(0,n.createVNode)("div",C,[(0,n.createVNode)("span",{class:"dokkiCSS-header-title",title:o.title},(0,n.toDisplayString)(o.title),9,["title"]),(0,n.createVNode)(r)])])}},y={class:"dokkiCSS-embedded dokki-iframe dokkiCSS-expandable"},$={class:"dokkiCSS-title"},V=(0,n.createVNode)("i",{class:"fas fa-crop-alt"},null,-1),_={class:"dokkiCSS-expander"},B={mixins:[u],props:{src:{default:""},height:{default:"500px"},title:{default:"Inline frame"},autofocus:{default:void 0}},watch:{isExpanded(){this.isExpanded&&void 0!==this.$props.autofocus&&this.$nextTick((()=>{this.$refs.iframe.focus()}))}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-animated-expander");return(0,n.openBlock)(),(0,n.createBlock)("p",y,[(0,n.createVNode)("header",{onClick:t[1]||(t[1]=e=>this.$refs["frame-expander"].toggle_expansion())},[(0,n.createVNode)("span",$,[V,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(o.title),1)]),(0,n.createVNode)("aside",_,(0,n.toDisplayString)(e.isExpanded?"Close frame":"Expand frame"),1)]),(0,n.createVNode)(r,{ref:"frame-expander","start-expanded":e.isExpanded,onExpanded:t[2]||(t[2]=t=>e.isExpanded=!0),onMinimized:t[3]||(t[3]=t=>e.isExpanded=!1)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)("footer",{style:{height:o.height}},[(0,n.createVNode)("iframe",{class:"dokki-iframe",src:o.src,ref:"iframe"},"\n                ",8,["src"])],4)])),_:1},8,["start-expanded"])])}},w=(0,n.createVNode)("span",{class:"dokkiCSS-title"},[(0,n.createVNode)("i",{class:"fas fa-image",title:"Image"})],-1),E={class:"dokkiCSS-expander"},T={class:"dokkiCSS-container"},I={key:0},F={key:1,class:"dokkiCSS-italic"},D={mixins:[u],props:{src:{default:"//about:blank"},upscaleToFit:{default:void 0},pixelatedScale:{default:void 0},width:{default:void 0},height:{default:void 0}},data:()=>({scaledWidth:void 0,scaledHeight:void 0}),mounted(){this.isExpanded&&(this.calculate_scaled_size(),this.$refs["image-expander"].expand({animate:!1})),window.addEventListener("resize",this.calculate_scaled_size)},computed:{hasFooter(){return!!this.$slots.caption},hasUpscaleToFit(){return void 0!==this.$props.upscaleToFit},hasPixelated(){return void 0!==this.$props.pixelatedScale}},methods:{calculate_scaled_size(){const e=this.$props.width,t=this.$props.height;let o=this.$el.offsetWidth;if(!e||!t||!o)return;o-=2;const i=Math.min(this.upscaleToFit?1/0:1,o/e);this.scaledWidth=Math.round(e*i),this.scaledHeight=Math.round(t*i)}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-animated-expander");return(0,n.openBlock)(),(0,n.createBlock)("p",{class:["dokkiCSS-embedded dokki-image dokkiCSS-expandable",{expanded:e.isExpanded}]},[(0,n.createVNode)("header",{onClick:t[1]||(t[1]=e=>(this.calculate_scaled_size(),this.$refs["image-expander"].toggle_expansion()))},[w,(0,n.createVNode)("aside",E,(0,n.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,n.createVNode)(r,{ref:"image-expander",class:"dokkiCSS-checker-background",onExpanded:t[2]||(t[2]=t=>e.isExpanded=!0),onMinimized:t[3]||(t[3]=t=>e.isExpanded=!1)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)("div",T,[(0,n.createVNode)("img",{src:o.src,ref:"image-element",class:{"dokkiCSS-upscale-to-fit":a.hasUpscaleToFit,"dokkiCSS-pixelated-scale":a.hasPixelated},width:s.scaledWidth,height:s.scaledHeight},null,10,["src","width","height"])])])),_:1},512),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("hr",I)):(0,n.createCommentVNode)("v-if",!0),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("footer",F,[(0,n.renderSlot)(e.$slots,"caption")])):(0,n.createCommentVNode)("v-if",!0)],2)}},q={props:["title"],render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("h3",null,(0,n.toDisplayString)(this.title),1),(0,n.renderSlot)(e.$slots,"default")],64)}},L={mounted(){this.lorem=this.paragraphs[this.$store.state.loremCount%this.paragraphs.length],this.$store.commit("increment_lorem_count")},data:()=>({lorem:"",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,\n                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae\n                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur\n                    id volutpat mauris.","Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur\n                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut\n                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,\n                    fringilla ac magna.","Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus\n                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt\n                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.\n                    Ut mattis nibh in finibus rhoncus.","Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,\n                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.\n                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,\n                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.","Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet\n                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id\n                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam\n                    gravida. Sed ut velit bibendum arcu varius maximus."]}),render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)("p",null,(0,n.toDisplayString)(s.lorem),1)}},z={class:"dokkiCSS-embedded dokki-output dokkiCSS-expandable"},j={class:"dokkiCSS-title"},A=(0,n.createVNode)("i",{class:"fas fa-chevron-right"},null,-1),H={class:"dokkiCSS-expander"},M={mixins:[u],props:{title:{default:"Output"}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-animated-expander");return(0,n.openBlock)(),(0,n.createBlock)("p",z,[(0,n.createVNode)("header",{onClick:t[1]||(t[1]=e=>this.$refs.output.toggle_expansion())},[(0,n.createVNode)("span",j,[A,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(o.title),1)]),(0,n.createVNode)("aside",H,(0,n.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,n.createVNode)(r,{ref:"output","start-expanded":e.isExpanded,onExpanded:t[2]||(t[2]=t=>e.isExpanded=!0),onMinimized:t[3]||(t[3]=t=>e.isExpanded=!1)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)("footer",null,[(0,n.renderSlot)(e.$slots,"default")])])),_:3},8,["start-expanded"])])}},U={class:"dokki-side-panel"},O={key:1,class:"dokkiCSS-product-tag"},P={class:"dokkiCSS-vertical-navi"},W={class:"dokkiCSS-navi-link-icon"},Q={class:"dokkiCSS-navi-link-label"},Y={class:"dokkiCSS-navi-link-label"},Z={computed:{topics(){return this.$store.state.topics},productName(){const e=void 0!==this.$store.state.productName?this.$store.state.productName:"",t=void 0!==this.$store.state.productVersion?this.$store.state.productVersion:"";return e.length&&!t.length?e:!e.length&&t.length?t:e.length&&t.length?`${e} ${t}`:void 0}},render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)("nav",U,[(0,n.renderSlot)(e.$slots,"default"),void 0!==a.productName?((0,n.openBlock)(),(0,n.createBlock)("div",{key:0,title:a.productName,class:"dokkiCSS-product-tag"},(0,n.toDisplayString)(a.productName),9,["title"])):((0,n.openBlock)(),(0,n.createBlock)("div",O," Contents ")),(0,n.createVNode)("ul",P,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(a.topics,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)("li",null,[(0,n.createVNode)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-topic"},[(0,n.createVNode)("span",W,(0,n.toDisplayString)(t+1),1),(0,n.createVNode)("span",Q,(0,n.toDisplayString)(e.title),1)],8,["href"]),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.subtopics,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)("a",{href:e.url,class:"dokkiCSS-navi-link dokkiCSS-navi-link-subtopic"},[(0,n.createVNode)("span",Y,(0,n.toDisplayString)(e.title),1)],8,["href"])))),256))])))),256))])])}},G={props:{title:{default:"Spoiler"}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki-output");return(0,n.openBlock)(),(0,n.createBlock)(r,{title:o.title},{default:(0,n.withCtx)((()=>[(0,n.renderSlot)(e.$slots,"default")])),_:3},8,["title"])}};function J(e){return e.toLowerCase().replace(/[^a-zA-Z\d\s-]/g,"").replace(/\s+/g,"-")}const K={mixins:[h],props:["title"],created(){const e=this.$store.state.topics[this.$store.state.topics.length-1];console.assert(e,"Detected an orphaned subtopic."),this.anchorableId=J(`${e.title} ${this.title}`),this.$store.commit("add_topic",{parentTopic:e,title:this.title,anchorId:this.anchor_id})},render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-subtopic",id:e.anchor_id},null,8,["id"]),(0,n.createVNode)("h2",null,(0,n.toDisplayString)(this.title),1),(0,n.renderSlot)(e.$slots,"default")],64)}},R={class:"dokkiCSS-embedded dokki-table dokkiCSS-expandable"},X=(0,n.createVNode)("span",{class:"dokkiCSS-title"},[(0,n.createVNode)("i",{class:"fas fa-table",title:"Table"})],-1),ee={class:"dokkiCSS-expander"},te={class:"dokkiCSS-container"},oe={key:0},ie={key:1,class:"dokkiCSS-italic"},ne={mixins:[u],computed:{hasFooter(){return!!this.$slots.caption}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-animated-expander");return(0,n.openBlock)(),(0,n.createBlock)("p",R,[(0,n.createVNode)("header",{onClick:t[1]||(t[1]=e=>this.$refs["table-expander"].toggle_expansion())},[X,(0,n.createVNode)("aside",ee,(0,n.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,n.createVNode)(r,{ref:"table-expander","start-expanded":e.isExpanded,onExpanded:t[2]||(t[2]=t=>e.isExpanded=!0),onMinimized:t[3]||(t[3]=t=>e.isExpanded=!1)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)("div",te,[(0,n.renderSlot)(e.$slots,"table")])])),_:3},8,["start-expanded"]),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("hr",oe)):(0,n.createCommentVNode)("v-if",!0),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("footer",ie,[(0,n.renderSlot)(e.$slots,"caption")])):(0,n.createCommentVNode)("v-if",!0)])}},se={data:()=>({currentThemeIdx:0,themes:[{name:"dark",icon:"far fa-lightbulb"},{name:"light",icon:"fas fa-lightbulb"}]}),created(){console.assert(this.themes.length,"Encountered an empty theme list."),this.set_current_theme(window.sessionStorage.getItem("dokki:theme")||"light")},methods:{set_current_theme(e=""){this.currentThemeIdx=Math.max(0,this.themes.findIndex((t=>t.name==e)));const t=this.themes[this.currentThemeIdx].name;document.body.dataset.dokkiTheme=t,window.sessionStorage.setItem("dokki:theme",t),this.$refs.themeSelector&&this.$refs.themeSelector.animate([{transform:"rotateY(90deg)"},{transform:"rotateY(0deg)"}],{duration:150})}},render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)("span",{class:"dokki-theme-selector",title:"Light switch",ref:"themeSelector",onClick:t[1]||(t[1]=e=>a.set_current_theme(s.themes[(s.currentThemeIdx+1)%s.themes.length].name))},[(0,n.createVNode)("i",{class:"fa-fw "+s.themes[s.currentThemeIdx].icon},null,2)],512)}},ae={class:"dokkiCSS-embedded dokki-tip"},re=(0,n.createVNode)("header",null," Tip ",-1),de={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("p",ae,[re,(0,n.createVNode)("footer",null,[(0,n.renderSlot)(e.$slots,"default")])])}},le={class:"dokki-topic"},ce={class:"dokkiCSS-topic-title"},ue={mixins:[h],props:["title"],data:()=>({globalTopicIdx:{default:-1}}),created(){this.anchorableId=J(this.title),this.$store.commit("add_topic",{title:this.title,anchorId:this.anchor_id}),this.globalTopicIdx=this.$store.state.topics.length},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki-hr");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-topic",id:e.anchor_id},null,8,["id"]),(0,n.createVNode)("section",le,[(0,n.createVNode)("h1",ce,(0,n.toDisplayString)(this.title),1),(0,n.createVNode)(r),(0,n.renderSlot)(e.$slots,"default")])],64)}},pe={class:"dokki-topics"},he={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("main",pe,[(0,n.renderSlot)(e.$slots,"default")])}},me={class:"dokkiCSS-title"},ke={class:"dokkiCSS-expander"},fe={key:0},ge={key:1,class:"dokkiCSS-italic"},Se={mixins:[u],props:{src:{},platform:{default:"youtube"}},computed:{hasFooter(){return!!this.$slots.caption},videoUrl(){return this.platform,`https://www.youtube-nocookie.com/embed/${this.src}`},headerIcon(){switch(this.platform){case"youtube":return"fab fa-youtube";default:return"fas fa-film"}}},render:function(e,t,o,i,s,a){const r=(0,n.resolveComponent)("dokki0-animated-expander");return(0,n.openBlock)(),(0,n.createBlock)("p",{class:["dokkiCSS-embedded dokki-video dokkiCSS-expandable",o.platform]},[(0,n.createVNode)("header",{onClick:t[1]||(t[1]=e=>this.$refs["video-expander"].toggle_expansion())},[(0,n.createVNode)("span",me,[(0,n.createVNode)("i",{class:a.headerIcon,title:"Video"},null,2)]),(0,n.createVNode)("aside",ke,(0,n.toDisplayString)(e.isExpanded?"Hide":"Show"),1)]),(0,n.createVNode)(r,{ref:"video-expander","start-expanded":e.isExpanded,onExpanded:t[2]||(t[2]=t=>e.isExpanded=!0),onMinimized:t[3]||(t[3]=t=>e.isExpanded=!1)},{default:(0,n.withCtx)((()=>[(0,n.createVNode)("iframe",{src:a.videoUrl,allow:"fullscreen; autoplay;"},"\n            ",8,["src"])])),_:1},8,["start-expanded"]),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("hr",fe)):(0,n.createCommentVNode)("v-if",!0),a.hasFooter?((0,n.openBlock)(),(0,n.createBlock)("footer",ge,[(0,n.renderSlot)(e.$slots,"caption")])):(0,n.createCommentVNode)("v-if",!0)],2)}},xe={class:"dokki-hr"},ve={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("hr",xe)}},be={class:"dokkiCSS-embedded dokki-warning"},Ce=(0,n.createVNode)("header",null," Warning ",-1),Ne={render:function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("p",be,[Ce,(0,n.createVNode)("footer",null,[(0,n.renderSlot)(e.$slots,"default")])])}},ye={class:"dokki0-text-block-with-line-numbers"},$e={key:0},Ve={key:1},_e={class:"dokkiCSS-text-block-line-content"},Be={props:{text:{},syntax:{default:void 0}},data:()=>({blockIdx:0,highlightLineNum:-1}),created(){function e(){if(this.highlightLineNum=-1,window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(2).split(","),[t,o]=[e[0].split(":")[1],e[1].split(":")[1]];t==this.blockIdx&&(this.highlightLineNum=o-1)}}this.$store.commit("increment_listings_count"),this.blockIdx=this.$store.state.numListings,e.call(this),window.addEventListener("hashchange",e.bind(this))},mounted(){this.$nextTick((()=>{if(window.location.hash.startsWith("#-listing:")){const e=window.location.hash.substring(1),t=this.$refs[e];t&&window.scrollTo(0,t.offsetTop)}if(this.is_syntax_highlighting_enabled()){const e=this.$el.querySelectorAll(".dokkiCSS-text-block-line-content > code");for(const t of e)hljs.highlightElement(t)}}))},computed:{formattedText(){if(!this.text)return"";let e=this.text.split("\n");for(;e.length&&!e[0].trim().length;)e.shift();if(!e.length)return[];const t=Math.max(0,e[0].search(/\S/));for(let o=0;o<e.length;o++)e[o]=e[o].slice(t),e[o]=e[o].replace(/``/g,'"'),e[o]=e[o].replace(/\\\\/g,"\\");for(;e.length&&!e[e.length-1].trim().length;)e.pop();return e}},methods:{is_highlight_js_available:()=>"object"==typeof hljs&&"function"==typeof hljs.highlightElement,is_syntax_highlighting_enabled(){return void 0!==this.$props.syntax&&this.is_highlight_js_available()},reset_line_highlight(){this.highlightLineNum=-1,history.replaceState(null,null," ")},highlight_line(e){e==this.highlightLineNum?this.reset_line_highlight():window.location.hash=this.line_ref(e)},test(e){console.log(e)},line_ref(e){return`-listing:${this.blockIdx},ln:${e+1}`}},render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)("table",ye,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(a.formattedText,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)("tr",{class:["dokkiCSS-text-block-line",{"dokkiCSS-highlighted":s.highlightLineNum==t}]},[(0,n.createVNode)("span",{class:"dokkiCSS-anchor dokkiCSS-anchor-text-block-line",ref:a.line_ref(t)},null,512),(0,n.createVNode)("td",{class:"dokkiCSS-text-block-line-number",onClick:e=>a.highlight_line(t)},[t!==s.highlightLineNum?((0,n.openBlock)(),(0,n.createBlock)("span",$e,(0,n.toDisplayString)(t+1),1)):((0,n.openBlock)(),(0,n.createBlock)("span",Ve," → "))],8,["onClick"]),(0,n.createVNode)("td",_e,[(0,n.createVNode)("code",{class:void 0!==o.syntax?`language-${o.syntax}`:"unspecified-syntax"},(0,n.toDisplayString)(e),3)])],2)))),256))])}},we={key:0,ref:"container",class:"dokki0-animated-expander"},Ee={props:{startExpanded:{default:!1}},data:()=>({isExpanded:!1,isTransitioning:!1,numDynamicImages:0,numDynamicImagesLoaded:0}),mounted(){this.$props.startExpanded&&this.expand({animate:!1})},methods:{expansion_transition_finished(){if(this.numDynamicImagesLoaded!=this.numDynamicImages)return;const e=this.$refs.container;this.$emit("expanded"),this.isTransitioning=!1,e.style.height="unset"},minimization_transition_finished(){this.$emit("minimized"),this.isTransitioning=!1,this.isExpanded=!1},resize_to_contents(){const e=this.$refs.container;return e.style.height=`${e.scrollHeight}px`,e},resize(e=0){const t=this.$refs.container;return t.style.height=`${e}px`,t},expand({animate:e=!0}={}){this.isTransitioning||this.isExpanded||(this.isExpanded=!0,e?(this.isTransitioning=!0,this.$emit("transitioning"),this.$nextTick((()=>{const e=this.$refs.container;e.ontransitionend=void 0,e.style.height="0";{const e=this.$refs.container.getElementsByTagName("img");this.numDynamicImages=0,this.numDynamicImagesLoaded=0;for(const t of e)void 0===t.height&&(this.numDynamicImages++,t.addEventListener("load",(()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.numDynamicImagesLoaded++,this.resize_to_contents().ontransitionend=this.expansion_transition_finished}))}))})))}window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{this.resize_to_contents(),e.ontransitionend=this.numDynamicImages?void 0:this.expansion_transition_finished}))}))}))):this.$emit("expanded"))},minimize({animate:e=!0}={}){if(this.isTransitioning)return;if(!this.isExpanded)return;if(!e)return this.isExpanded=!1,void this.$emit("minimized");this.isTransitioning=!0,this.$emit("transitioning");const t=this.$refs.container;this.resize_to_contents(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{t.style.height="0",t.ontransitionend=this.minimization_transition_finished}))}))},toggle_expansion({animate:e=!0}={}){(this.isExpanded?this.minimize:this.expand)({animate:e})}},render:function(e,t,o,i,s,a){return s.isExpanded?((0,n.openBlock)(),(0,n.createBlock)("div",we,[(0,n.renderSlot)(e.$slots,"default")],512)):(0,n.createCommentVNode)("v-if",!0)}},Te={class:"dokki-product-name"},Ie={computed:{productName(){return this.$store.state.productName}},render:function(e,t,o,i,s,a){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("span",Te,(0,n.toDisplayString)(a.productName),1),(0,n.renderSlot)(e.$slots,"default")],64)}};function Fe(e={}){e={container:document.body,template:document.querySelector("#dokki-document"),...e},console.assert(e.container instanceof HTMLElement,"Invalid document container"),e.template instanceof HTMLTemplateElement?(e.container.appendChild(e.template.content),e.template.remove()):console.assert(null===e.template,"Invalid document template"),document.documentElement.hasAttribute("lang")||document.documentElement.setAttribute("lang","en");const t=Vue.createApp({}).component("dokki-area",a).component("dokki-code",m).component("dokki-console",v).component("dokki-header",N).component("dokki-iframe",B).component("dokki-image",D).component("dokki-item",q).component("dokki-lorem",L).component("dokki-output",M).component("dokki-side-panel",Z).component("dokki-spoiler",G).component("dokki-subtopic",K).component("dokki-table",ne).component("dokki-theme-selector",se).component("dokki-tip",de).component("dokki-topic",ue).component("dokki-topics",he).component("dokki-video",Se).component("dokki-warning",Ne).component("dokki-hr",ve).component("dokki0-text-block-with-line-numbers",Be).component("dokki0-animated-expander",Ee).component("product-name",Ie).use(i);if(Array.isArray(parent.window.dokkiUserComponents))for(const e of parent.window.dokkiUserComponents){if("object"!=typeof e||!e.hasOwnProperty("$tag"))continue;const o=e.$tag;delete e.$tag,t.component(o,e)}t.mount(e.container)}o(292)},5:t=>{t.exports=e}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var s=o[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};return(()=>{i.r(n);var e=i(349);window.addEventListener("DOMContentLoaded",e.start)})(),n})()}));