!function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=322)}({17:function(e,t,n){"use strict";e.exports=function(n){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(a).concat([r]).join("\n")}var s;return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},s.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(n[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),s.push(a))}},s}},18:function(e,t,i){var n,r,a,l={},p=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),s=(a={},function(e,t){if("function"==typeof e)return e();if(void 0===a[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}a[e]=n}return a[e]}),d=null,c=0,o=[],m=i(23);function f(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=l[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(x(i.parts[a],t))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(x(i.parts[a],t));l[i.id]={id:i.id,refs:1,parts:s}}}}function u(e,t){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};i[s]?i[s].parts.push(o):n.push(i[s]={id:s,parts:[o]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=o[o.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),o.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=o.indexOf(e);0<=t&&o.splice(t,1)}function w(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return i.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),h(e,t),t}function v(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function x(t,e){var n,i,r,a,s,o;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var l=c++;n=d||(d=w(e)),i=j.bind(null,n,l,!1),r=j.bind(null,n,l,!0)}else r=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=e,o=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",v(o,s.attrs),h(s,o),i=function(e,t,n){var i=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(i=m(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}.bind(null,n=o,e),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(e),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}e.exports=function(e,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=p()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var o=u(e,s);return f(o,s),function(e){for(var t=[],n=0;n<o.length;n++){var i=o[n];(r=l[i.id]).refs--,t.push(r)}e&&f(u(e,s),s);for(n=0;n<t.length;n++){var r;if(0===(r=t[n]).refs){for(var a=0;a<r.parts.length;a++)r.parts[a]();delete l[r.id]}}}};var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function j(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var a=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}},23:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,a=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:a+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},322:function(e,t,n){n(323);var i=function(){$(".sort-container").on("click",function(){$(".sorted-series").toggleClass("descending")}),$(".sort-container").on("click",function(e){$(".sort").toggleClass("sort-toggle")})};$(document).ready(function(){i()})},323:function(e,t,n){var i=n(324);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(i,r);i.locals&&(e.exports=i.locals)},324:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Series Styles */\n.series-template {\n  /* Bar which sorts articles */\n}\n@media (max-width: 800px) {\n  .series-template .postlist {\n    width: 95%;\n    margin: 20px auto 20px;\n    padding: 0;\n  }\n}\n@media (max-width: 800px) {\n  .series-template .main-content {\n    width: 95%;\n    margin: auto;\n  }\n}\n.series-template .sorted-series {\n  display: flex;\n  flex-direction: column;\n}\n.series-template .descending {\n  flex-direction: column-reverse;\n}\n.series-template .series-article-preview {\n  position: relative;\n  background: white;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  margin-bottom: 10px;\n  max-width: -webkit-fill-available;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview {\n    height: fit-content;\n    width: 100%;\n  }\n}\n.series-template .series-article-preview:hover {\n  background: #b4d4e6;\n  cursor: pointer;\n}\n.series-template i {\n  height: 15px !important;\n  font-size: 15px !important;\n}\n.series-template .fa-arrow-to-bottom {\n  transition: all 0.3s ease-out;\n}\n.series-template .sort-toggle .desc {\n  display: inline !important;\n}\n.series-template .sort-toggle .asc {\n  display: none !important;\n}\n.series-template .sort-toggle i {\n  transform: rotate(180deg) !important;\n}\n.series-template .sort-container {\n  display: flex;\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n  height: 29px;\n  margin-bottom: 20px;\n  background: #ffffff;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  padding: 12px 12px;\n  align-items: center;\n  justify-content: flex-end;\n  transition: all 0.3s ease-out;\n}\n.series-template .sort-container:hover {\n  cursor: pointer;\n  background: #40cebb;\n}\n.series-template .sort-container:hover * {\n  color: white;\n}\n.series-template .sort-container .sort {\n  float: right;\n  line-height: 1;\n  font-size: 18px;\n}\n.series-template .sort-container .sort .desc {\n  display: none;\n  margin-right: 7px;\n}\n.series-template .sort-container .sort .asc {\n  display: inline;\n  margin-right: 7px;\n}\n.series-template .sort-container .sort .sort-title {\n  font-family: 'soleil', sans-serif;\n}\n.series-template .sort-container .sort .sort-method {\n  font-family: 'soleil', sans-serif;\n}\n.series-template .series-article-preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: solid 1px #dadada;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview {\n    padding: 15px;\n  }\n}\n.series-template .series-article-preview:last-child {\n  border-bottom: none;\n}\n.series-template .series-article-preview .featured-media {\n  margin: 0;\n  height: auto;\n  width: auto;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .featured-media {\n    max-width: 115px;\n    height: 100% !important;\n  }\n}\n.series-template .series-article-preview .post-count {\n  margin: 0 0 5px;\n  font-family: 'ProductSans-Regular', serif;\n  font-weight: 100;\n  color: #407393;\n  font-size: 0.9em;\n  line-height: 1;\n}\n.series-template .series-article-preview .mobile-date,\n.series-template .series-article-preview .mobile-name {\n  display: none;\n}\n.series-template .series-article-preview .details {\n  width: 100%;\n  padding: 10px 20px 0;\n  position: relative;\n  max-height: 115px;\n}\n@media (max-width: 800px) {\n  .series-template .series-article-preview .details {\n    padding: 0 0 0 15px;\n  }\n}\n.series-template .series-article-preview .details .meta {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n}\n.series-template .series-article-preview .details .meta i {\n  margin-right: 5px;\n}\n.series-template .series-article-preview .details .meta .info {\n  display: none;\n}\n.series-template .series-article-preview .details .post-head {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head {\n    width: -webkit-fill-available;\n    overflow: hidden;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title {\n  font-weight: 900;\n  width: 100%;\n  margin: 0 0 5px;\n  font-size: 1.3em;\n  min-height: 56px;\n  line-height: 1.2;\n}\n.series-template .series-article-preview .details .post-head .post-title a {\n  font-family: 'ProductSans-Regular', sans-serif;\n  font-size: 1em;\n  color: #153b52;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title a {\n    font-family: 'ProductSans-Regular', sans-serif;\n    font-size: 0.9em;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-title a:hover {\n  color: #30b1a7;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-title {\n    width: -webkit-fill-available;\n    overflow: hidden;\n    line-height: 1;\n  }\n}\n.series-template .series-article-preview .details .post-head .post-excerpt {\n  color: #153b52;\n  font-family: 'ProductSans-Regular', 'soleil', serif;\n  font-size: 1em;\n  font-weight: 100;\n  line-height: 1.21;\n  text-align: left;\n  display: none;\n  white-space: pre-wrap;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .post-head .post-excerpt {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .post-head .postcount {\n  font-family: 'soleil', serif;\n  font-size: 1.3em;\n}\n.series-template .series-article-preview .details .meta {\n  padding: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .details .meta {\n    display: none;\n  }\n}\n.series-template .series-article-preview .details .meta .meta-item {\n  margin: auto 40px auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item:last-of-type {\n  margin: auto 0;\n}\n.series-template .series-article-preview .details .meta .meta-item span {\n  font-family: 'soleil', sans-serif;\n  white-space: nowrap;\n  max-width: 100px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.series-template .series-article-preview .details .meta .date *,\n.series-template .series-article-preview .details .meta .tags * {\n  color: #565771;\n}\n.series-template .series-article-preview .details .meta .tags {\n  padding: 2px 8px;\n}\n.series-template .series-article-preview .details .meta .tags i {\n  margin-right: 8px;\n}\n.series-template .series-article-preview .details .meta .author img {\n  width: 30px;\n  margin-right: 8px;\n}\n.series-template .series-article-preview .details .meta .author span {\n  text-transform: capitalize;\n  color: #565771;\n}\n.series-template .series-article-preview .details .meta .author-mobile {\n  display: none !important;\n}\n.series-template .series-article-preview .imagewrapper {\n  height: fit-content;\n  display: block;\n  max-width: 326px;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper {\n    max-width: 40%;\n  }\n}\n.series-template .series-article-preview .imagewrapper img {\n  width: 100%;\n}\n.series-template .series-article-preview .imagewrapper .post-card-image {\n  max-width: 220px;\n  height: auto;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 200px;\n  }\n}\n@media (max-width: 600px) {\n  .series-template .series-article-preview .imagewrapper .post-card-image {\n    max-width: 120px;\n    height: auto;\n    margin: 0;\n  }\n}\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n",""])}});