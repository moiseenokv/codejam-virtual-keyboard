!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var a=n(1);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){(t=e.exports=n(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600);",""]),t.push([e.i,'* { box-sizing:border-box; }\n\nbody {\n  background:#aaa;\n  font:300 15px/24px "Open Sans", sans-serif;\n  color:#bbb;\n  user-select:none;\n  text-shadow:0 0 1px #aaa;\n}\n\n.root {\n  display: flex;\n  flex-flow: column;\n  max-width:1440px;\n  width:100%;\n  margin: 0 auto;\n}\n\n\n\nh1 {\n  font-size:5em;\n  line-height:1.5;\n  color: #fff;\n  text-align: center;\n}\n\n\ntextarea {\n  width: 100%;\n  height: 22vh;\n  border: 1px dashed navy;\n  font-size: 20px;\n}\n\n.keyboard {\n  margin:30px auto;\n  width:90%;\n  height:400px;\n  background:#bbb;\n  padding:30px 80px;\n  border-radius:10px;\n  border-bottom:6px solid #999;\n}\n\n.key-row {\n  display:-webkit-flex;\n  margin:0 auto 7px;\n  line-height:50px;\n}\n\n.key, .arrowkey-container {\n   margin:0 6px 0 0;\n  text-align:center;\n}\n\n.key {\n  background:#444;\n  color:#eee;\n  border-radius:4px;\n  box-shadow:0 1px 0 #222, inset 0 1px 3px rgba(255,255,255,0.1);\n  transition:0.1s;\n  align-items:center;\n  align-content:center;\n  height:57px;\n  border:2px solid rgba(0,0,0,0.08);\n  cursor:pointer;\n}\n\nsup, sub { outline:1px solid magenta; display:block; align-self:center; }\n\n.key:active,  .active, .reactive { transform:translateY(1px); background:#333; box-shadow:0 1px 0 #000;}\n\n.one { flex:1; } /* one */\n.one-one-half { flex:1.5; } /* One and one half */\n.two { flex:2; } /* two */\n.two-two-half { flex:2.5; } /* Two and two half */\n.three { flex:3; } /* three */\n.five { flex:5; }\n\n.key-row .key:last-child { margin:0; }\n\n.l { text-align:left; padding-left:12px; }\n.r { text-align:right; padding-right:12px; }\n\n.upper {\n  text-transform: uppercase;\n}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=(l=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(r).concat([o]).join("\n")}var l;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(o=0;o<e.length;o++){var l=e[o];null!=l[0]&&a[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(e,t,n){var a,o,r={},l=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var a=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),s=null,u=0,c=[],y=n(4);function p(e,t){for(var n=0;n<e.length;n++){var a=e[n],o=r[a.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](a.parts[l]);for(;l<a.parts.length;l++)o.parts.push(g(a.parts[l],t))}else{var i=[];for(l=0;l<a.parts.length;l++)i.push(g(a.parts[l],t));r[a.id]={id:a.id,refs:1,parts:i}}}}function d(e,t){for(var n=[],a={},o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],i={css:r[1],media:r[2],sourceMap:r[3]};a[l]?a[l].parts.push(i):n.push(a[l]={id:l,parts:[i]})}return n}function m(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=c[c.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return n.nc}();a&&(e.attrs.nonce=a)}return h(t,e.attrs),m(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,a,o,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var l=u++;n=s||(s=v(t)),a=C.bind(null,n,l,!1),o=C.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),m(e,t),t}(t),a=function(e,t,n){var a=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(a=y(a));o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([a],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(l),i&&URL.revokeObjectURL(i)}.bind(null,n,t),o=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),a=function(e,t){var n=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){f(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=l()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var l=n[o];(i=r[l.id]).refs--,a.push(i)}e&&p(d(e,t),t);for(o=0;o<a.length;o++){var i;if(0===(i=a[o]).refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete r[i.id]}}}};var V,b=(V=[],function(e,t){return V[e]=t,V.filter(Boolean).join("\n")});function C(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var r=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var a=[[{name:"`",primaryValue:["`","ё"],secondaryValue:["~","Ё"],clsName:["key","one",""],type:1,eventCode:"Backquote"},{name:"1",primaryValue:["1","1"],secondaryValue:["!","!"],clsName:["key","one",""],type:1,eventCode:"Digit1"},{name:"2",primaryValue:["2","2"],secondaryValue:["@",'"'],clsName:["key","one",""],type:1,eventCode:"Digit2"},{name:"3",primaryValue:["3","3"],secondaryValue:["#","№"],clsName:["key","one",""],type:1,eventCode:"Digit3"},{name:"4",primaryValue:["4","4"],secondaryValue:["$",";"],clsName:["key","one",""],type:1,eventCode:"Digit4"},{name:"5",primaryValue:["5","5"],secondaryValue:["%","%"],clsName:["key","one",""],type:1,eventCode:"Digit5"},{name:"6",primaryValue:["6","6"],secondaryValue:["^",":"],clsName:["key","one",""],type:1,eventCode:"Digit6"},{name:"7",primaryValue:["7","7"],secondaryValue:["&","?"],clsName:["key","one",""],type:1,eventCode:"Digit7"},{name:"8",primaryValue:["8","8"],secondaryValue:["*","*"],clsName:["key","one",""],type:1,eventCode:"Digit8"},{name:"9",primaryValue:["9","9"],secondaryValue:["(","("],clsName:["key","one",""],type:1,eventCode:"Digit9"},{name:"0",primaryValue:["0","0"],secondaryValue:[")",")"],clsName:["key","one",""],type:1,eventCode:"Digit0"},{name:"-",primaryValue:["-","-"],secondaryValue:["_","_"],clsName:["key","one",""],type:1,eventCode:"Minus"},{name:"+",primaryValue:["+","+"],secondaryValue:["=","="],clsName:["key","one",""],type:1,eventCode:"Equal"},{name:"Backspace",primaryValue:["Backspace","Backspace"],secondaryValue:null,clsName:["key","two",""],type:2,eventCode:"Backspace"}],[{name:"Tab",primaryValue:["Tab","Tab"],secondaryValue:null,clsName:["key","one-one-half","l"],type:2,eventCode:"Tab"},{name:"q",primaryValue:["q","й"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyQ"},{name:"w",primaryValue:["w","ц"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyW"},{name:"e",primaryValue:["e","у"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyE"},{name:"r",primaryValue:["r","к"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyR"},{name:"t",primaryValue:["t","е"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyT"},{name:"y",primaryValue:["y","н"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyY"},{name:"u",primaryValue:["u","г"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyU"},{name:"i",primaryValue:["i","ш"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyI"},{name:"o",primaryValue:["o","щ"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyO"},{name:"p",primaryValue:["p","з"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyP"},{name:"{",primaryValue:["{","х"],secondaryValue:["[","Х"],clsName:["key","one",""],type:1,eventCode:"BracketLeft"},{name:"}",primaryValue:["}","ъ"],secondaryValue:["]","Ъ"],clsName:["key","one",""],type:1,eventCode:"BracketRight"},{name:"|",primaryValue:["|","/"],secondaryValue:["/","|"],clsName:["key","one",""],type:1,eventCode:"Backslash"},{name:"Del",primaryValue:["Del","Del"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"Delete"}],[{name:"CpasLock",primaryValue:["CapsLock","CapsLock"],secondaryValue:null,clsName:["key","one-one-half","l"],type:3,eventCode:"CapsLock"},{name:"a",primaryValue:["a","ф"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyA"},{name:"s",primaryValue:["s","ы"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyS"},{name:"d",primaryValue:["d","в"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyD"},{name:"f",primaryValue:["f","а"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyF"},{name:"g",primaryValue:["g","п"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyG"},{name:"h",primaryValue:["h","р"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyH"},{name:"j",primaryValue:["j","о"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyJ"},{name:"k",primaryValue:["k","л"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyK"},{name:"l",primaryValue:["l","д"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyL"},{name:";",primaryValue:[";","ж"],secondaryValue:[":","Ж"],clsName:["key","one",""],type:1,eventCode:"Semicolon"},{name:'"',primaryValue:['"',"э"],secondaryValue:['"',"Э"],clsName:["key","one",""],type:1,eventCode:"Quote"},{name:"Enter",primaryValue:["Enter","Enter"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"Enter"}],[{name:"Shift",primaryValue:["Shift","Shift"],secondaryValue:null,clsName:["key","two-two-half","l"],type:3,eventCode:"ShiftLeft"},{name:"z",primaryValue:["z","я"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyZ"},{name:"x",primaryValue:["x","ч"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyX"},{name:"c",primaryValue:["c","с"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyC"},{name:"v",primaryValue:["v","м"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyV"},{name:"b",primaryValue:["b","и"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyB"},{name:"n",primaryValue:["n","т"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyN"},{name:"m",primaryValue:["m","ь"],secondaryValue:null,clsName:["key","one",""],type:0,eventCode:"KeyM"},{name:",",primaryValue:[",","б"],secondaryValue:["<","б"],clsName:["key","one",""],type:1,eventCode:"Comma"},{name:".",primaryValue:[".","ю"],secondaryValue:[">","ю"],clsName:["key","one",""],type:1,eventCode:"Period"},{name:"Up",primaryValue:["Up","Up"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"ArrowUp"},{name:"Shift",primaryValue:["Shift","Shift"],secondaryValue:null,clsName:["key","one",""],type:3,eventCode:"ShiftRight"}],[{name:"Ctrl",primaryValue:["Ctrl","Ctrl"],secondaryValue:null,clsName:["key","two-two-half","l"],type:3,eventCode:"ControlLeft"},{name:"Win",primaryValue:["Win","Win"],secondaryValue:null,clsName:["key","one",""],type:3,eventCode:"MetaLeft"},{name:"Alt",primaryValue:["Alt","Alt"],secondaryValue:null,clsName:["key","one",""],type:3,eventCode:"AltLeft"},{name:"",primaryValue:["",""],secondaryValue:null,clsName:["key","five",""],type:2,eventCode:"Space"},{name:"Alt",primaryValue:["Alt","Alt"],secondaryValue:null,clsName:["key","one",""],type:3,eventCode:"AltRight"},{name:"Ctrl",primaryValue:["Ctrl","Ctrl"],secondaryValue:null,clsName:["key","one-one-half","l"],type:3,eventCode:"ControlRight"},{name:"Left",primaryValue:["Left","Left"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"ArrowLeft"},{name:"Down",primaryValue:["Down","Down"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"ArrowDown"},{name:"Right",primaryValue:["Right","Right"],secondaryValue:null,clsName:["key","one",""],type:2,eventCode:"ArrowRight"}]];n(0);const o={CapsLock:!1,ShiftLeft:!1,ShiftRight:!1,ControlLeft:!1,ControlRight:!1,AltLeft:!1,AltRight:!1,current:null,lang:"En",position:null},r=(e,t,n,a,o=null)=>{const r=document.createElement(e);return null!==t&&r.setAttribute("class",t),null!==a&&(r.innerText=a),null!==o&&Object.keys(o).forEach(e=>{r.setAttribute(e,o[e])}),n.append(r),r},l=()=>{const{lang:e}=o;"En"===e&&(a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,primaryValue:a}=e;if(t<=1){const e=a[1];document.querySelector(`div[data-event="${n}"]`).innerText=e}})}),o.lang="Ru"),"Ru"===e&&(a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,primaryValue:a}=e;if(t<=1){const e=a[0];document.querySelector(`div[data-event="${n}"]`).innerText=e}})}),o.lang="En")},i=()=>{const e=document.querySelectorAll('div[data-type="0"]');Object.values(e).forEach(e=>{e.classList.toggle("upper")});const t=document.querySelectorAll('div[data-type="1"]');Object.values(t).forEach(e=>{e.classList.toggle("upper")}),"En"===o.lang&&(!0===o.ShiftLeft||!0===o.ShiftRight||!0===o.CapsLock?a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,secondaryValue:a}=e;if(1===t&&null!==a){const e=a[0];document.querySelector(`div[data-event="${n}"]`).innerText=e}})}):a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,primaryValue:a}=e;if(1===t&&null!==a){const e=a[0];document.querySelector(`div[data-event="${n}"]`).innerText=e}})})),"Ru"===o.lang&&(!0===o.ShiftLeft||!0===o.ShiftRight||!0===o.CapsLock?a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,secondaryValue:a}=e;if(1===t&&null!==a){const e=a[1];document.querySelector(`div[data-event="${n}"]`).innerText=e}})}):a.forEach(e=>{e.forEach(e=>{const{type:t,eventCode:n,primaryValue:a}=e;if(1===t&&null!=a){const e=a[1];document.querySelector(`div[data-event="${n}"]`).innerText=e}})}))};(()=>{const e=document.querySelector("body"),t=r("div","root",e,null),n=r("div","wrapper",t,null),s=(r("h1",null,n,"Virtual Keyboard"),r("textarea",null,n,null));s.focus();const u=r("div","keyboard",n,null);a.forEach(e=>{const t=r("section","key-row",u,null);e.forEach(e=>{const{name:n,clsName:a,eventCode:o,type:l}=e,i=`${a[0]} ${a[1]}`;r("div",i,t,n,{"data-event":o,"data-type":l})})}),localStorage.getItem("lang")&&(o.lang=localStorage.getItem("lang"),l());const c=e=>{let t,n;if(e.preventDefault(),e.code&&(t=document.querySelector(`div[data-event=${e.code}]`),n="CapsLock"===e.code?e.code:t.innerText),e.target.hasAttribute("data-event")&&(n=(t=e.target).innerText),t){if("ShiftLeft"===t.getAttribute("data-event")||"ShiftRight"===t.getAttribute("data-event")||"ControlLeft"===t.getAttribute("data-event")||"ControlRight"===t.getAttribute("data-event")||"AltLeft"===t.getAttribute("data-event")||"AltRight"===t.getAttribute("data-event")||"CapsLock"===t.getAttribute("data-event")){o.current=t;const e=t.getAttribute("data-event");!1===o[e]?(o[e]=!0,t.classList.add("reactive"),"ShiftLeft"!==t.getAttribute("data-event")&&"ShiftRight"!==t.getAttribute("data-event")||i()):(o[e]=!1,t.classList.remove("reactive"),"ShiftLeft"!==t.getAttribute("data-event")&&"ShiftRight"!==t.getAttribute("data-event")||i())}else null!==o.current&&(o.current.classList.remove("active"),o.current=null),t.classList.add("active"),o.current=t;parseInt(t.getAttribute("data-type"),10)<=1&&(null==o.position?s.value+=n:(s.value=`${s.value.slice(0,o.position)}${n}${s.value.slice(o.position,s.textLength)}`,o.position+=1,s.setSelectionRange(o.position,o.position))),2===parseInt(t.getAttribute("data-type"),10)&&("Backspace"===n&&(null!==o.position?(s.value=`${s.value.slice(0,o.position-1)}${s.value.slice(o.position,s.textLength)}`,o.position-=1,s.setSelectionRange(o.position,o.position)):s.value=s.value.slice(0,-1)),"Enter"===n&&(s.value+="\n"),"Tab"===n&&(s.value+=" ".repeat(4)),"ArrowLeft"===n&&(null==o.position?o.position=s.textLength-1:o.position-=1,s.setSelectionRange(o.position,o.position)),"ArrowRight"===n&&null!==o.position&&(o.position===s.textLength?(o.position=null,s.setSelectionRange(s.textLength,s.textLength)):(o.position+=1,s.setSelectionRange(o.position,o.position))),"Delete"===n&&null!==o.position&&(s.value=`${s.value.slice(0,o.position)}${s.value.slice(o.position+1,s.textLength)}`,s.setSelectionRange(o.position,o.position)),""===n&&null!==o.position&&(s.value=`${s.value.slice(0,o.position)}${s.value.slice(o.position+1,s.textLength)}`,s.setSelectionRange(o.position,o.position))," "!==n&&""!==n||(s.value+=" ".repeat(1))),3===parseInt(t.getAttribute("data-type"),10)&&("Alt"===n&&(!0!==o.ControlLeft&&!0!==o.ControlRight||!0!==o.AltLeft&&!0!==o.AltlRight||(l(),o.ControlLeft=!1,o.ControlRight=!1,document.querySelector('div[data-event="ControlLeft"]').classList.remove("reactive"),document.querySelector('div[data-event="ControlRight"]').classList.remove("reactive"),o.AltLeft=!1,o.AltRight=!1,document.querySelector('div[data-event="AltLeft"]').classList.remove("reactive"),document.querySelector('div[data-event="AltRight"]').classList.remove("reactive"))),"CapsLock"===n&&(o.ShiftLeft=!1,o.ShiftRight=!1,i()))}},y=e=>{e.preventDefault(),null!==o.current&&parseInt(o.current.getAttribute("data-type"),10)<=2&&(o.current.classList.remove("active"),o.current=null)};document.addEventListener("mousedown",c),document.addEventListener("mouseup",y),document.addEventListener("keydown",c),document.addEventListener("keyup",y),window.addEventListener("unload",()=>{"Ru"===o.lang&&localStorage.setItem("lang","En"),"En"===o.lang&&localStorage.setItem("lang","Ru")})})()}]);
//# sourceMappingURL=app.bundle.js.map