!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var r=(o=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(p," */")),i=a.sources.map(function(n){return"/*# sourceURL=".concat(a.sourceRoot).concat(n," */")});return[t].concat(i).concat([r]).join("\n")}var o,l,p;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var o=0;o<n.length;o++){var l=n[o];null!=l[0]&&a[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="(".concat(l[2],") and (").concat(t,")")),e.push(l))}},e}},function(n,e,t){var a,r,i={},o=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=a.apply(this,arguments)),r}),l=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var a=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}e[n]=a}return e[n]}}(),p=null,s=0,d=[],c=t(2);function u(n,e){for(var t=0;t<n.length;t++){var a=n[t],r=i[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(x(a.parts[o],e))}else{var l=[];for(o=0;o<a.parts.length;o++)l.push(x(a.parts[o],e));i[a.id]={id:a.id,refs:1,parts:l}}}}function f(n,e){for(var t=[],a={},r=0;r<n.length;r++){var i=n[r],o=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(l):t.push(a[o]={id:o,parts:[l]})}return t}function m(n,e){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=d[d.length-1];if("top"===n.insertAt)a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(n.insertAt.before,t);t.insertBefore(e,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var a=function(){0;return t.nc}();a&&(n.attrs.nonce=a)}return b(e,n.attrs),m(n,e),e}function b(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,a,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var o=s++;t=p||(p=h(e)),a=y.bind(null,t,o,!1),r=y.bind(null,t,o,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),m(n,e),e}(e),a=function(n,e,t){var a=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(a=c(a));r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([a],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(o),l&&URL.revokeObjectURL(l)}.bind(null,t,e),r=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),a=function(n,e){var t=e.css,a=e.media;a&&n.setAttribute("media",a);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){g(t)});return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return u(t,e),function(n){for(var a=[],r=0;r<t.length;r++){var o=t[r];(l=i[o.id]).refs--,a.push(l)}n&&u(f(n,e),e);for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete i[l.id]}}}};var w,v=(w=[],function(n,e){return w[n]=e,w.filter(Boolean).join("\n")});function y(n,e,t,a){var r=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=v(e,r);else{var i=document.createTextNode(r),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,a=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:a+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},,function(n,e,t){var a=t(5);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(n.exports=a.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .page-container {\n  margin-bottom: 30px;\n}\n@media (max-width: 800px) {\n  .page-template .page-container {\n    margin-bottom: 0;\n  }\n}\n.page-template .page-container .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .page-container .main-content a {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.page-about {\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.page-about .page {\n  padding: 40px;\n}\n@media (max-width: 600px) {\n  .page-about .page {\n    padding: 0 30px 30px;\n  }\n}\n.page-about .about-content {\n  margin-bottom: 40px !important;\n}\n.page-about .author-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n}\n.page-about .author-container .author-card-small {\n  width: 48.5%;\n  margin: 0 0 15px;\n}\n@media (max-width: 600px) {\n  .page-about .author-container .author-card-small {\n    width: 100%;\n  }\n}\n.page-about figure {\n  margin: 0 0 30px;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .page-about figure {\n    max-height: 312px;\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n  }\n}\n.page-about iframe {\n  margin: 0;\n  width: 100%;\n}\n.page-about .page-title {\n  margin: 0 0 20px;\n}\n@media (max-width: 1100px) {\n  .page-about .page-title {\n    display: none;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .about-content {\n    display: flex;\n    flex-direction: column;\n    margin: -14px 0 20px !important;\n  }\n}\n.page-about .post-image {\n  display: none !important;\n}\n.page-about .welcomevideo,\n.page-about iframe {\n  display: block;\n  position: relative;\n}\n@media (max-width: 800px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 451px;\n  }\n}\n@media (max-width: 600px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    height: 360px;\n  }\n}\n@media (max-width: 470px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 250px !important;\n    min-height: auto !important;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .page-about .fluid-width-video-wrapper {\n    margin: 0 40px 30px;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  width: 90%;\n  margin: auto;\n  position: relative;\n  padding: 0;\n}\n.page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n  border: 1px solid #f5f8fb;\n}\n.page-resources #resources-table .icon {\n  max-width: 5px;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n  line-height: 1;\n  padding: 20px 10px;\n  vertical-align: middle;\n}\n.page-resources #resources-table td:last-of-type {\n  max-width: 40px;\n}\n.page-resources #resources-table td img {\n  height: 20px;\n  width: 20px;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center !important;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n.author-template .tag-name,\n.home-template .tag-name,\n.paged .tag-name,\n.tag-template .tag-name {\n  font-size: 1.3em;\n  margin-top: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .tag-name i,\n.home-template .tag-name i,\n.paged .tag-name i,\n.tag-template .tag-name i {\n  font-size: 0.8em;\n  margin-right: 5px;\n  font-weight: 100;\n}\n@media (max-width: 800px) {\n  .author-template .main-header,\n  .home-template .main-header,\n  .paged .main-header,\n  .tag-template .main-header {\n    height: 200px;\n  }\n}\n/*====================================================\n\tTag page & author page cover base styles\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin: 0 0 20px;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    padding: 40px 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    margin-top: 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 17px;\n  margin-right: 5px;\n}\n.cover .tag-name span {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 90%;\n    margin: 15px auto 0;\n    font-size: 0.9em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.3;\n  color: #52555b;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Table Styles */\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-spacing: 0;\n  border: 0 solid rgba(255, 255, 255, 0);\n}\ntable:hover {\n  cursor: ew-resize !important;\n}\ntable thead tr {\n  background: #52596a !important;\n  color: white;\n  font-size: 1.1em;\n}\ntable tr {\n  transition: all 0.3s ease-out;\n}\ntable tr:nth-child(odd) {\n  background: #f6f8fb;\n}\ntable tr td,\ntable tr th {\n  text-align: left;\n  padding: 10px;\n  vertical-align: top;\n  border-top: 0;\n  transition: all 0.3s ease-out;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 150px;\n  text-overflow: ellipsis;\n  border-bottom: 0;\n  font-size: 0.8em;\n}\n@media (max-width: 600px) {\n  table tr td,\n  table tr th {\n    border: 0;\n  }\n}\n.tableContainer {\n  border-spacing: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  border: 1px solid #e6edf0;\n  margin: 30px 0;\n  max-height: 539px;\n}\n@media (max-width: 600px) {\n  .tableContainer {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    max-height: 600px;\n  }\n  .tableContainer *:hover {\n    cursor: ew-resize !important;\n  }\n  .tableContainer *:active {\n    cursor: grabbing;\n  }\n  .tableContainer table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .tableContainer table td,\n  .tableContainer table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .tableContainer table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: 'TTNormsPro-Regular', sans-serif;\n  }\n  .tableContainer table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n    background: #52596a;\n    padding-left: 10px;\n    overflow: hidden;\n  }\n  .tableContainer table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n    background: #5c6376;\n  }\n  .tableContainer table thead tr:hover {\n    background-color: inherit;\n    cursor: ew-resize !important;\n  }\n  .tableContainer table thead tr th {\n    display: table-row;\n    margin-left: 5px;\n    padding: 0;\n    line-height: 4.8;\n    font-family: 'TTNormsPro-Regular', sans-serif;\n    letter-spacing: 0.5px;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    min-height: 50px;\n    margin: 5px 0;\n    margin-right: 0 !important;\n    max-width: unset !important;\n    color: #ffffff;\n    background: #52596a;\n    vertical-align: middle;\n    font-size: 0.7em;\n  }\n  .tableContainer table thead tr th * {\n    font-size: 1em;\n  }\n  .tableContainer table tbody {\n    margin-left: 131px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .tableContainer table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .tableContainer table tbody tr tr:hover {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  .tableContainer table tbody tr td,\n  .tableContainer table tbody tr th {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n    border-bottom: 1px solid #e7ebf2;\n    margin: 5px 0;\n    font-size: 0.78em !important;\n    font-weight: 300;\n  }\n  .tableContainer table tbody tr td:last-child,\n  .tableContainer table tbody tr th:last-child {\n    border-bottom: 0;\n  }\n  .tableContainer table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.tableContainer .rowCounter {\n  text-align: right;\n  width: 100%;\n  font-size: 0.8em;\n  margin-top: -20px;\n  width: fit-content;\n  position: absolute;\n  right: 0;\n  background: #555760;\n  padding: 0 9px;\n  color: white;\n}\n",""])},,,,,,,,function(n,e,t){"use strict";t.r(e);t(4)}]);