!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("regularjs")):"function"==typeof define&&define.amd?define(["Regular"],t):"object"==typeof exports?exports.RGUI=t(require("regularjs")):e.RGUI=t(e.Regular)}(this,function(e){return function(e){function t(n){if(s[n])return s[n].exports;var o=s[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){s(1),e.exports=s(1)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var o=s(8);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=s(13);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var i=s(18);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t._=t.Component=void 0;var o=s(3),a=n(o),i=s(7),d=n(i);t.Component=a["default"],t._=d["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(4),a=n(o),i=s(5),d=n(i),r=s(6),c=n(r),u=s(7),l=n(u),p=a["default"].extend({config:function(){this.defaults({readonly:!1,disabled:!1,visible:!0,"class":""}),this.supr()},defaults:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return l["default"].defaults.apply(l["default"],[this.data].concat(t))},watch:function(){}}).filter(d["default"]).directive(c["default"]);t["default"]=p},function(t,s){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={};s.dateFormat=function(){var e=function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e+="",e.length<=1?"0"+e:e},t={yyyy:function(e){return e.getFullYear()},MM:function(t){return e(t.getMonth()+1)},dd:function(t){return e(t.getDate())},HH:function(t){return e(t.getHours())},mm:function(t){return e(t.getMinutes())},ss:function(t){return e(t.getSeconds())}},s=new RegExp(Object.keys(t).join("|"),"g");return function(e){var n=arguments.length<=1||void 0===arguments[1]?"yyyy-MM-dd HH:mm":arguments[1];return e?(e=new Date(e),n.replace(s,function(s){return t[s]?t[s](e):""})):""}}(),s.format=function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return s[t+"Format"].apply(s,[e].concat(o))},t["default"]=s},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(7),a=n(o),i={};i["z-crt"]=a["default"].createBoolClassDirective("z-crt"),i["z-sel"]=a["default"].createBoolClassDirective("z-sel"),i["z-chk"]=a["default"].createBoolClassDirective("z-chk"),i["z-act"]=a["default"].createBoolClassDirective("z-act"),i["z-dis"]=a["default"].createBoolClassDirective("z-dis"),i["r-show"]=a["default"].createBoolDirective(function(e,t){e.style.display=t?"block":""}),i["r-autofocus"]=a["default"].createBoolDirective(function(e,t){t&&setTimeout(function(){return e.focus()},0)}),t["default"]=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},o=s(4),a={defaults:function(e){for(var t=arguments.length,s=Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return s.forEach(function(t){for(var s in t)t.hasOwnProperty(s)&&void 0===e[s]&&(e[s]=t[s])}),e},createBoolDirective:function(e){return function(t,s){var o=this;"object"===("undefined"==typeof s?"undefined":n(s))&&"expression"===s.type?this.$watch(s,function(s,n){!s!=!n&&e.call(o,t,s)}):(s||""===s)&&e.call(this,t,!0)}},createBoolClassDirective:function(e){return a.createBoolDirective(function(t,s){o.dom[s?"addClass":"delClass"](t,e)})}};t["default"]=a},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Item=t.ListView=void 0;var o=s(9),a=n(o),i=s(11),d=n(i);t.ListView=a["default"],t.Item=d["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),a=s(10),i=n(a),d=o.Component.extend({name:"listView",template:i["default"],config:function(){this.defaults({_list:[],_selected:void 0,value:void 0,multiple:!1,cancelable:!1}),this.supr(),this.watch()},watch:function(){var e=this;this.$watch("value",function(t,s){e.data._selected&&e.data._selected.data.value===t||(e.data._selected=e.data._list.find(function(e){return e.data.value===t})),e.$emit("change",{sender:e,selected:e.data._selected,value:t})}),this.$watch("_selected",function(t,s){s&&(s.data.selected=!1),t&&(t.data.selected=!0),e.data.value=t?t.data.value:t})},select:function(e){this.data.readonly||this.data.disabled||(this.data.multiple?e.data.selected=!e.data.selected:this.data.cancelable&&this.data._selected===e?this.data._selected=void 0:this.data._selected=e,this.$emit("select",{sender:this,selected:e,value:e.data.value}))}});t["default"]=d},function(e,t){e.exports=[{type:"element",tag:"ul",attrs:[{type:"attribute",name:"class",value:{type:"expression",body:"['m-listView ',c._sg_('class', d, e)].join('')",constant:!1,setbody:!1}},{type:"attribute",name:"z-dis",value:{type:"expression",body:"c._sg_('disabled', d, e)",constant:!1,setbody:"c._ss_('disabled',p_,d, '=', 1)"}},{type:"attribute",name:"r-hide",value:{type:"expression",body:"(!c._sg_('visible', d, e))",constant:!1,setbody:!1}}],children:[{type:"text",text:"\n    "},{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}},{type:"text",text:"\n"}]}]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),a=s(12),i=n(a),d=o.Component.extend({name:"item",template:i["default"],config:function(){this.defaults({value:void 0,selected:!1,disabled:!1,divider:!1,title:void 0}),this.supr(),this.$outer.data._list.push(this),this.$outer.data.multiple||(void 0!==this.data.value&&this.$outer.data.value===this.data.value&&(this.data.selected=!0),this.data.selected&&(this.$outer.data._selected=this))},destroy:function(){this.$outer.data._selected===this&&(this.$outer.data._selected=void 0);var e=this.$outer.data._list.indexOf(this);~e&&this.$outer.data._list.splice(e,1),this.supr()},select:function(){this.data.disabled||this.data.divider||(this.$outer.select(this),this.$emit("select",{sender:this,selected:this,value:this.data.value}))}}).directive({"z-divider":o._.createBoolClassDirective("z-divider")});t["default"]=d},function(e,t){e.exports=[{type:"element",tag:"li",attrs:[{type:"attribute",name:"class",value:{type:"expression",body:"c._sg_('class', d, e)",constant:!1,setbody:"c._ss_('class',p_,d, '=', 1)"}},{type:"attribute",name:"z-sel",value:{type:"expression",body:"c._sg_('selected', d, e)",constant:!1,setbody:"c._ss_('selected',p_,d, '=', 1)"}},{type:"attribute",name:"z-dis",value:{type:"expression",body:"c._sg_('disabled', d, e)",constant:!1,setbody:"c._ss_('disabled',p_,d, '=', 1)"}},{type:"attribute",name:"z-divider",value:{type:"expression",body:"c._sg_('divider', d, e)",constant:!1,setbody:"c._ss_('divider',p_,d, '=', 1)"}},{type:"attribute",name:"title",value:{type:"expression",body:"c._sg_('title', d, e)",constant:!1,setbody:"c._ss_('title',p_,d, '=', 1)"}},{type:"attribute",name:"r-hide",value:{type:"expression",body:"(!c._sg_('visible', d, e))",constant:!1,setbody:!1}},{type:"attribute",name:"on-click",value:{type:"expression",body:"c['select']()",constant:!1,setbody:!1}}],children:[{type:"text",text:"\n    "},{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}},{type:"text",text:"\n"}]}]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var o=s(14),a=n(o);t.Overlay=a["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),a=s(15),i=n(a),d=s(16),r=n(d),c=s(17),u=n(c),l=s(4),p=o.Component.extend({name:"overlay",template:i["default"],config:function(){this.defaults({open:!1,trigger:"click",direction:"bottom-left"}),this.supr(),this.watch()},watch:function(){var e=this;this.$watch("open",function(t,s){var n=p.opens.indexOf(e);t&&n<0?p.opens.push(e):!t&&n>=0&&p.opens.splice(n,1),e.$emit("change",{sender:e,open:t,trigger:e.data.trigger,direction:e.data.direction})})},destroy:function(){var e=p.opens.indexOf(this);e>=0&&p.opens.splice(e,1),this.supr()},toggle:function(e){this.data.disabled||(void 0===e&&(e=!this.data.open),this.data.open=e,this.$emit("toggle",{sender:this,open:e,trigger:this.data.trigger,direction:this.data.direction}))}});p.opens=[],l.dom.on(document,"click",function(e){p.opens.forEach(function(t,s){for(var n=t.$refs.element,o=e.target;o;){if(n===o)return;o=o.parentElement}t.toggle(!1),t.$update()})}),p.Head=o.Component.extend({name:"overlay.head",template:r["default"]}),p.Body=o.Component.extend({name:"overlay.body",template:u["default"]}),t["default"]=p},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:{type:"expression",body:"['u-overlay u-overlay-',c._sg_('direction', d, e),' ',c._sg_('class', d, e)].join('')",constant:!1,setbody:!1}},{type:"attribute",name:"z-dis",value:{type:"expression",body:"c._sg_('disabled', d, e)",constant:!1,setbody:"c._ss_('disabled',p_,d, '=', 1)"}},{type:"attribute",name:"r-hide",value:{type:"expression",body:"(!c._sg_('visible', d, e))",constant:!1,setbody:!1}},{type:"attribute",name:"ref",value:"element"},{type:"if",test:{type:"expression",body:"c._sg_('trigger', d, e)==='hover'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-mouseleave",value:{type:"expression",body:"c['toggle'](false)",constant:!1,setbody:!1}}]],alternate:[]}],children:[{type:"text",text:"\n    "},{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}},{type:"text",text:"\n"}]}]},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:"overlay_hd"},{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='click'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-click",value:{type:"expression",body:"c._sg_('$outer', c)['toggle']()",constant:!1,setbody:!1}}]],alternate:[{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='dblclick'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-dblclick",value:{type:"expression",body:"c._sg_('$outer', c)['toggle']()",constant:!1,setbody:!1}}]],alternate:[{type:"if",test:{type:"expression",body:"c._sg_('trigger', c._sg_('data', c._sg_('$outer', c)))==='hover'",constant:!1,setbody:!1},consequent:[[{type:"attribute",name:"on-mouseenter",value:{type:"expression",body:"c._sg_('$outer', c)['toggle'](true)",constant:!1,setbody:!1}}]],alternate:[]}]}]}],children:[{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}}]}]},function(e,t){e.exports=[{type:"element",tag:"div",attrs:[{type:"attribute",name:"class",value:"overlay_bd"},{type:"attribute",name:"r-show",value:{type:"expression",body:"c._sg_('open', c._sg_('data', c._sg_('$outer', c)))",constant:!1,setbody:"c._ss_('open',p_,c._sg_('data', c._sg_('$outer', c)), '=', 0)"}}],children:[{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}}]}]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var o=s(19),a=n(o);t.Menu=a["default"]},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(8),a=s(13),i=s(20),d=n(i),r=o.ListView.extend({name:"menu",template:d["default"],watch:function(){},select:function(e){this.$outer&&this.$outer.$outer instanceof a.Overlay&&this.$outer.$outer.toggle(!1)}});t["default"]=r},function(e,t){e.exports=[{type:"element",tag:"ul",attrs:[{type:"attribute",name:"class",value:{type:"expression",body:"['m-listView m-menu ',c._sg_('class', d, e)].join('')",constant:!1,setbody:!1}},{type:"attribute",name:"z-dis",value:{type:"expression",body:"c._sg_('disabled', d, e)",constant:!1,setbody:"c._ss_('disabled',p_,d, '=', 1)"}},{type:"attribute",name:"r-hide",value:{type:"expression",body:"(!c._sg_('visible', d, e))",constant:!1,setbody:!1}}],children:[{type:"text",text:"\n    "},{type:"template",content:{type:"expression",body:"c._sg_('$body', c)",constant:!1,setbody:"c._ss_('$body',p_,c, '=', 0)"}},{type:"text",text:"\n"}]}]}])});