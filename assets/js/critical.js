!function(n){var t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(i,o,function(t){return n[t]}.bind(null,o));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=11)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var o=(r=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),a=i.sources.map(function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")});return[e].concat(a).concat([o]).join("\n")}var r,s,p;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var r=0;r<n.length;r++){var s=n[r];null!=s[0]&&i[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var i,o,a={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var i=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}t[n]=i}return t[n]}}(),p=null,d=0,l=[],c=e(2);function f(n,t){for(var e=0;e<n.length;e++){var i=n[e],o=a[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(b(i.parts[r],t))}else{var s=[];for(r=0;r<i.parts.length;r++)s.push(b(i.parts[r],t));a[i.id]={id:i.id,refs:1,parts:s}}}}function m(n,t){for(var e=[],i={},o=0;o<n.length;o++){var a=n[o],r=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[r]?i[r].parts.push(s):e.push(i[r]={id:r,parts:[s]})}return e}function g(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function u(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var i=function(){0;return e.nc}();i&&(n.attrs.nonce=i)}return w(t,n.attrs),g(n,t),t}function w(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,i,o,a;if(t.transform&&n.css){if(!(a="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=a}if(t.singleton){var r=d++;e=p||(p=h(t)),i=y.bind(null,e,r,!1),o=y.bind(null,e,r,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",w(t,n.attrs),g(n,t),t}(t),i=function(n,t,e){var i=e.css,o=e.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(i=c(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){u(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),i=function(n,t){var e=t.css,i=t.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){u(e)});return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=m(n,t);return f(e,t),function(n){for(var i=[],o=0;o<e.length;o++){var r=e[o];(s=a[r.id]).refs--,i.push(s)}n&&f(m(n,t),t);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete a[s.id]}}}};var x,v=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function y(n,t,e,i){var o=e?"":i.css;if(n.styleSheet)n.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(a,r[t]):n.appendChild(a)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,i=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,a=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?e+a:i+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,,,,,,,,function(n,t,e){"use strict";e.r(t);e(12)},function(n,t,e){var i=e(13);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,o);i.locals&&(n.exports=i.locals)},function(n,t,e){(t=n.exports=e(0)(!1)).push([n.i,"@import url(//hello.myfonts.net/count/39827b);",""]),t.push([n.i,"@import url(//hackers.nyc3.cdn.digitaloceanspaces.com/fonts/dankmono/css/dank-mono.css);",""]),t.push([n.i,"/* Critical Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/*====================================================\n\tcommon styles\n====================================================*/\nbody,\nhtml {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 14px;\n  color: #373940;\n  line-height: 1.5em;\n  background: #ecf1f9;\n  position: relative;\n  margin: 0;\n  width: 100%;\n  overflow-x: hidden;\n}\narticle li,\narticle p {\n  line-height: 1.7em;\n  font-size: 16px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\nsection {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding-top: 1px;\n}\n@media (max-width: 600px) {\n  section {\n    margin: 0 auto;\n  }\n}\nstrong {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  color: #2f394f;\n}\na {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\na:hover {\n  cursor: pointer;\n}\n.h1,\nh1 {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 2em;\n  font-weight: 500;\n  color: #2f394f;\n}\nh2,\nh4,\nh5,\nh6 {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  font-weight: 700;\n}\nh3 {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.h2,\nh2 {\n  font-size: 2.2em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n@media (max-width: 600px) {\n  .h2,\n  h2 {\n    font-size: 2em;\n  }\n}\n.main-content {\n  display: block;\n}\n.h4,\nh4 {\n  font-size: 1.3em;\n}\n.h5,\nh5 {\n  font-size: 1.4em;\n  font-weight: 500;\n  margin: 5px 0 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  color: #2f394f;\n  line-height: 1;\n  text-align: left;\n}\n@media (max-width: 600px) {\n  .h5,\n  h5 {\n    font-size: 1.3em;\n    margin-top: 5px;\n  }\n}\n.h6,\nh6 {\n  font-size: 0.75em;\n}\na {\n  color: #5eb9d7;\n  outline: none;\n  text-decoration: none;\n  -webkit-transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -ms-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\na:hover {\n  color: #40cebb;\n  cursor: pointer !important;\n}\nbutton:hover {\n  cursor: pointer !important;\n}\ninput:hover {\n  cursor: text;\n}\n.btn-default[disabled] {\n  border: 1px solid #2f394f;\n  background: #2f394f;\n  color: white;\n}\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"url\"],\ninput[type=\"email\"],\ninput[type=\"password\"] textarea {\n  padding: 7px;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"password\"] textarea:focus {\n  border: 1px solid #5eb9d7;\n  outline: none;\n}\n::-moz-selection {\n  color: white;\n  background: #5eb9d7;\n  text-shadow: none;\n}\n::selection {\n  color: white;\n  background: #5eb9d7;\n  text-shadow: none;\n}\na:hover {\n  cursor: pointer;\n}\n.stop-scrolling {\n  height: 100%;\n  overflow: hidden;\n}\n.icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n/*====================================================\n\tfooter\n====================================================*/\n.main-footer {\n  background: #fff !important;\n  background-size: cover;\n  padding: 35px 8%;\n  color: #373940;\n  border-top: 1px solid #dbe0e5;\n}\n@media (max-width: 1000px) {\n  .main-footer {\n    padding: 30px 40px;\n  }\n}\n@media (max-width: 800px) {\n  .main-footer {\n    padding: 20px 40px;\n    margin-top: 0;\n  }\n}\n@media (max-width: 600px) {\n  .main-footer {\n    display: block;\n    padding: 50px;\n  }\n}\n.main-footer .footer-title {\n  color: #373940;\n  font-weight: 800;\n  font-size: 1.1em;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  text-align: left;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  line-height: 1;\n  margin: 0 0 10px;\n}\n@media (max-width: 800px) {\n  .main-footer .footer-title {\n    margin: 0 0 5px !important;\n  }\n}\n.main-footer .footer-container {\n  max-width: 1000px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .main-footer .footer-container {\n    margin: auto;\n    justify-content: space-between;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n}\n.main-footer .widget {\n  padding: 2px 0;\n  width: 15%;\n  margin: 0;\n}\n.main-footer .widget ul {\n  padding: 0;\n}\n.main-footer .widget ul li {\n  width: 100%;\n  display: block;\n  text-align: left;\n  transition: all 0.2s ease-out;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.main-footer .widget ul li *:hover {\n  cursor: pointer !important;\n  color: #40cebb;\n}\n.main-footer .widget ul li a {\n  color: #738a94;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 300;\n}\n@media (max-width: 800px) {\n  .main-footer .widget {\n    width: -webkit-fill-available;\n    margin: 10px 0 20px;\n    width: 22%;\n    margin-top: 20px;\n  }\n  .main-footer .widget:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 600px) {\n  .main-footer .widget {\n    max-width: none;\n    width: 100% !important;\n    padding: 0;\n  }\n}\n/*====================================================\n\t\tabout\n====================================================*/\n.widget.about {\n  min-width: 27%;\n  width: 27%;\n}\n@media (max-width: 800px) {\n  .widget.about {\n    width: 35% !important;\n  }\n}\n@media (max-width: 600px) {\n  .widget.about {\n    min-width: 100%;\n    border-bottom: 1px solid rgba(76, 108, 157, 0.27);\n    padding-bottom: 20px !important;\n    margin: 0 0 20px;\n  }\n}\n.widget.about .logo {\n  width: 70%;\n  display: block;\n  height: 40px;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  .widget.about .logo {\n    margin-bottom: 25px;\n    max-width: 200px;\n  }\n}\n.widget.about .logo:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.widget.about .logo img {\n  width: 100%;\n}\n.widget.about .description {\n  color: #373940;\n  width: 100%;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 100;\n  font-size: 0.95em;\n  line-height: 1.6;\n  margin: 15px 0 25px;\n}\n@media (max-width: 600px) {\n  .widget.about .description {\n    margin: 15px 0 20px;\n    font-size: 0.95em;\n  }\n}\n.widget.about .social-btns {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 18px;\n}\n.widget.about .social-btns .btn {\n  color: #738a94;\n}\n.widget.about .social-btns i {\n  font-size: 20px;\n}\n@media (max-width: 600px) {\n  .widget.about .social-btns i {\n    font-size: 25px;\n  }\n}\n.widget.about .social-btns i .btn:hover.facebook {\n  color: #96abd6;\n}\n.widget.about .social-btns i .btn:hover.twitter {\n  color: #66d9ff;\n}\n.widget.about .social-btns i .btn:hover.tumblr {\n  color: #7891b2;\n}\n.widget.about .social-btns i .btn:hover.github {\n  color: white;\n}\n.widget.about .social-btns i .btn:hover.pocket {\n  color: #f5778a;\n}\n.widget.about .social-btns i .btn:hover.quora {\n  color: #d6413d;\n}\n.widget.about .social-btns i .btn:hover.rss {\n  color: #ffc29a;\n}\n.widget.about .social-btns a {\n  font-size: 1.4em;\n  margin: 0;\n  color: unset;\n  transition: all 0.2s ease-out;\n}\n.widget.about .social-btns a:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n.widget.about .social-btns a:hover * {\n  color: #40cebb;\n}\n/*====================================================\n\t\t\tcontributors\n=====================================================*/\n.widget.contributors {\n  margin-top: 10px;\n}\n@media (max-width: 800px) {\n  .widget.contributors {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .widget.contributors {\n    display: block;\n  }\n}\n.widget.links,\n.widget.tags {\n  margin-top: 10px;\n}\n@media (max-width: 600px) {\n  .widget.links,\n  .widget.tags {\n    margin: 10px 0 0;\n    min-width: unset;\n    margin-bottom: 20px;\n  }\n}\n.widget.links ul,\n.widget.tags ul {\n  margin: 10px 0;\n}\n.copyright {\n  margin-top: 20px;\n  display: block;\n  font-size: 0.85em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  color: #738a94 !important;\n  margin: 0 !important;\n}\n@media (max-width: 600px) {\n  .copyright {\n    font-size: 0.89em;\n  }\n}\n@font-face {\n  font-family: 'TTNormsPro-Light';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/39827B_0_0.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'TTNormsPro-Regular';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_2_0.ttf') format('truetype');\n}\n@font-face {\n  font-family: 'TTNormsPro-Medium';\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.eot');\n  src: url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.eot?#iefix') format('embedded-opentype'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.woff2') format('woff2'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.woff') format('woff'), url('https://hackers.nyc3.cdn.digitaloceanspaces.com/fonts/392922_3_0.ttf') format('truetype');\n}\n/*====================================================\n\theader nav\n====================================================*/\nnav {\n  position: relative;\n  background: #ffffff;\n  height: 60px;\n  border-bottom: 1px solid #dbe0e5;\n}\nnav .nav-wrapper {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1100px;\n  margin: auto;\n  align-items: center;\n  height: 100%;\n}\n@media (max-width: 1100px) {\n  nav .nav-wrapper {\n    max-width: 93%;\n  }\n}\n@media (max-width: 800px) {\n  nav .nav-wrapper {\n    max-width: 86%;\n  }\n}\nnav .nav-wrapper .left-nav {\n  display: flex;\n  justify-content: left;\n  width: 500px;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav {\n    justify-content: inherit;\n  }\n}\nnav .nav-wrapper .left-nav .logo {\n  height: 30px;\n  transition: all 0.2s ease-out;\n  margin-right: 40px;\n}\nnav .nav-wrapper .left-nav .logo img {\n  height: 30px;\n}\nnav .nav-wrapper .left-nav .logo:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\nnav .nav-wrapper .left-nav .dropdown {\n  color: #626573;\n  border: none;\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  font-weight: 100;\n  font-size: 1em;\n  padding: 0;\n  background: none;\n  height: 60px;\n  margin-right: 30px;\n  outline: none;\n  transition: all 0.2s ease-out;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav .dropdown {\n    margin-right: 0px;\n    font-size: 0.9em;\n  }\n}\nnav .nav-wrapper .left-nav .dropdown:hover {\n  color: #5eb9d7;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav .dropdown.pages {\n    display: none;\n  }\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content {\n  display: none;\n  background: white;\n  box-shadow: 0 3px 3px rgba(65, 67, 144, 0.15);\n  z-index: 10;\n  width: 200px;\n  position: absolute;\n  opacity: 0;\n  padding: 5px;\n  top: 57px;\n  margin-left: -70px;\n  transition: all 0.2s ease-out;\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content a {\n  display: block;\n  font-size: 0.8em;\n  padding: 10px;\n  text-align: left;\n  line-height: 1.5;\n  color: #373940;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-weight: 100;\n  transition: all 0.2s ease-out;\n}\nnav .nav-wrapper .left-nav .dropdown .dropdown-content a:hover {\n  background: #5eb9d7;\n  color: white;\n}\nnav .nav-wrapper .left-nav .dropdown:hover .dropdown-content {\n  display: block;\n  opacity: 1;\n}\n@media (max-width: 600px) {\n  nav .nav-wrapper .left-nav .dropdown:hover .dropdown-content {\n    display: none;\n  }\n}\n.page-container {\n  margin: 30px auto;\n}\n@media (max-width: 1200px) {\n  .page-container {\n    width: 100%;\n  }\n}\n@media (max-width: 1150px) {\n  .page-container {\n    max-width: 95%;\n  }\n}\n@media (max-width: 800px) {\n  .page-container {\n    max-width: none;\n    margin: 20px auto;\n  }\n}\n.page-container.home {\n  max-width: unset;\n  width: 100%;\n}\n@media (max-width: 1000px) {\n  .page-container.home {\n    max-width: 95%;\n  }\n}\n.page-container.sidebar-layout {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 316px ;\n}\n@media (max-width: 800px) {\n  .page-container.sidebar-layout {\n    width: 100%;\n    display: block;\n    max-width: unset;\n  }\n}\nsection > .container {\n  max-width: 1200px;\n  margin: auto;\n}\n@media (max-width: 1200px) {\n  section > .container {\n    width: 95%;\n    max-width: none;\n  }\n}\n@media (max-width: 800px) {\n  section > .container {\n    width: 100%;\n  }\n}\n.sidebar {\n  width: 100%;\n}\n@media (max-width: 800px) {\n  .sidebar {\n    display: none;\n  }\n}\n.postlist {\n  background: white;\n  padding: 30px;\n  border-radius: 5px;\n  border: 1px solid #e5eff5;\n}\n@media (max-width: 800px) {\n  .postlist {\n    margin: 0 auto 20px;\n    width: -webkit-fill-available;\n    width: moz-available;\n    max-width: 84%;\n  }\n}\n@media (max-width: 600px) {\n  .postlist {\n    max-width: 80%;\n    padding: 20px;\n  }\n}\n.postlist:last-child {\n  margin-bottom: 0;\n}\n.home-template .postlist {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: 1fr;\n}\n@media (max-width: 600px) {\n  .home-template .postlist {\n    grid-gap: 20px;\n  }\n}\n.home-template .postlist .post-preview {\n  margin: 0;\n}\n.post-preview {\n  order: 2;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  border-bottom: 1px solid #e9e9e9;\n}\n@media (max-width: 600px) {\n  .post-preview {\n    padding: 0;\n  }\n}\n.post-preview:last-child {\n  border-bottom: none;\n}\n.post-preview .post-preview-side {\n  width: 90px;\n  margin-right: 20px;\n}\n@media (max-width: 800px) {\n  .post-preview .post-preview-side {\n    display: none;\n  }\n}\n.post-preview .post-preview-side .primary-tag {\n  padding: 5px 10px;\n  border-radius: 10px;\n  color: white;\n  text-transform: uppercase;\n  font-size: 0.7em;\n  margin-top: 24px;\n  display: block;\n  line-height: 1.2;\n  text-align: center;\n  width: fit-content;\n  float: right;\n}\n.post-preview .post-preview-body {\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .post-preview .post-preview-body {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n  }\n}\n.post-preview .post-head {\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head {\n    order: 1;\n  }\n}\n.post-preview .post-head .date {\n  color: #738a94;\n  font-size: 12px;\n  line-height: 1;\n}\n.post-preview .post-head .post-title {\n  font-size: 1.35em;\n  Line-height: 1.15;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  margin: 2px 0;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head .post-title {\n    font-size: 1.1em;\n    line-height: 1.2em;\n    font-family: 'TTNormsPro-Medium', sans-serif;\n  }\n}\n.post-preview .post-head .post-title a {\n  color: #2f394f;\n  transition: all 0.2s ease-out;\n}\n.post-preview .post-head .post-title a:hover {\n  color: #40cebb;\n}\n.post-preview .post-head .post-excerpt {\n  margin: 5px auto 0;\n  line-height: 1.2;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  transition: all 0.2s ease-out;\n  color: #2f394f;\n  font-size: 1em;\n}\n@media (max-width: 600px) {\n  .post-preview .post-head .post-excerpt {\n    margin: 5px auto 0;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    font-size: 0.9em;\n  }\n}\n.post-preview .post-image {\n  display: block;\n  margin: 15px 0;\n}\n@media (max-width: 600px) {\n  .post-preview .post-image {\n    margin: 0 10px 0 0;\n    order: 0;\n    min-width: 80px;\n    width: 80px;\n    display: block;\n    overflow: hidden;\n  }\n}\n.post-preview .post-image .featured-image {\n  width: 100%;\n  height: auto;\n  transition: all 0.2s ease-out;\n  border-radius: 2px;\n}\n@media (max-width: 600px) {\n  .post-preview .post-image .featured-image {\n    width: 150%;\n  }\n}\n.post-preview .post-image .featured-image:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n.post-preview .preview-content {\n  text-align: left;\n  line-height: 1.3;\n  margin: 0;\n}\n.post-preview .preview-content > * {\n  display: none;\n}\n.post-preview .preview-content p:first-child {\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  line-height: 1.55;\n  font-size: 0.95em;\n  font-weight: 500;\n  color: #2d2f35;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .post-preview .preview-content p:first-child {\n    display: none;\n  }\n}\n.post-preview .preview-content p:first-child a {\n  font-family: 'TTNormsPro-Regular', sans-serif !important;\n  display: inline !important;\n}\n.post-preview a {\n  text-decoration: none;\n}\n.post-preview a:hover {\n  color: #40cebb;\n}\n.post-preview a:hover > span {\n  color: #40cebb !important;\n}\n.post-preview .read-link {\n  margin: 20px 0;\n  display: block;\n  font-size: 1.1em;\n}\n@media (max-width: 600px) {\n  .post-preview .read-link {\n    display: none;\n  }\n}\n.post-preview .read-link i {\n  margin-left: 5px;\n}\n/*====================================================\n\tsidebar\n====================================================*/\n.sidebar .widget {\n  padding: 25px;\n  background: #fff 50%;\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);\n  transition: all 0.5s ease;\n}\n.sidebar .widget:first-of-type {\n  margin-right: 0;\n}\n.sidebar .widget.text a {\n  transition: all 0.2s ease-out;\n}\n.sidebar .widget.text a:hover {\n  opacity: 0.7;\n}\n.sidebar .widget.text .logo {\n  transition: all 0.2s ease-out;\n  width: 80%;\n  margin: 0 auto 10px;\n  display: block;\n}\n.sidebar .widget.text .logo:hover {\n  opacity: 0.5;\n}\n.sidebar .widget.text .logo img {\n  width: 100%;\n}\n.sidebar .widget.text p {\n  font-size: 14px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  line-height: 1.3;\n  text-align: center;\n  text-align: justify;\n}\n.sidebar .widget .fb {\n  height: 220px;\n}\n.sidebar .widget.twitter {\n  overflow: hidden;\n}\n.sidebar .widget.twitter iframe {\n  max-height: 1000px;\n}\n.sidebar .recent-single-post .post-title {\n  color: #4c5c7f;\n  line-height: 1.2;\n  font-size: 15px;\n  margin: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  display: inline-block;\n}\n.sidebar .recent-single-post .post-title:hover {\n  color: #40cebb;\n}\n.sidebar .text h1 {\n  font-size: 1.4em;\n  font-weight: 700;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n  margin-top: 0;\n}\n.sidebar .text p {\n  margin: 0;\n  font-size: 0.9em;\n  line-height: 1.7;\n  padding-right: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.sidebar .recent-posts .recent-single-post {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n.sidebar .recent-posts .recent-single-post:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border-bottom: 0;\n}\n.sidebar .recent-posts .recent-single-post .date {\n  font-size: 0.8em;\n  line-height: 1;\n  color: #9698a0;\n  margin-top: 5px;\n}\n.sidebar .widget {\n  margin: 0 0 20px;\n}\n@media (max-width: 950px) {\n  .sidebar .widget {\n    padding: 15px;\n    margin: 0 0 20px;\n  }\n}\n.sidebar .widget .post-title a {\n  color: #208cad;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  transition: all 0.2s ease;\n}\n.sidebar .widget .post-title a:hover {\n  cursor: pointer;\n  color: #40cebb;\n}\n.sidebar .widget h1 {\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size: 1.2em;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  color: #2f394f;\n  font-weight: 500;\n}\n.sidebar .widget .sidebar-title,\n.sidebar .widget .title {\n  font-size: 1.2em;\n  font-weight: 500;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  letter-spacing: 1px;\n  color: #2f394f;\n  margin-top: 0;\n}\n.sidebar .widget li {\n  display: inline-block;\n  text-align: center;\n  padding: 5px 7px;\n}\n.sidebar .widget li a i {\n  line-height: 1;\n  color: #bbbbbb;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 15px;\n  width: 21px;\n  font-size: 13px;\n  transition: all 0.2s ease-out;\n}\n.sidebar .widget li:hover {\n  cursor: pointer;\n}\n.sidebar .widget li:hover i {\n  color: white;\n}\n.sidebar .widget .subscribe-input-class {\n  padding: 15px 5%;\n  width: 90%;\n  font-size: 14px;\n  border: 1px solid #ebebeb;\n  margin-bottom: 10px;\n}\n.sidebar .widget .form-group,\n.sidebar .widget .input-group {\n  margin-bottom: 0;\n  display: block;\n}\n.sidebar .widget .form-group .email,\n.sidebar .widget .input-group .email {\n  width: 100%;\n}\n.sidebar .widget .form-group .btn,\n.sidebar .widget .input-group .btn {\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n}\n.sidebar .widget .form-group .btn:hover,\n.sidebar .widget .input-group .btn:hover {\n  background-color: #40cebb;\n  cursor: pointer;\n}\n.sidebar .widget .form-group .btn span,\n.sidebar .widget .input-group .btn span {\n  font-size: 14px;\n  text-transform: capitalize;\n}\n.sidebar .widget p {\n  font-size: 16px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n/* Hack for aligning magnifying glass on other pages */\n.page-template .search::after {\n  top: 14px;\n}\n",""])}]);