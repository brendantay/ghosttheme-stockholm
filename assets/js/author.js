!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=356)}({141:function(n,e,t){var a=t(142);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,i);a.locals&&(n.exports=a.locals)},142:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .main-content a {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n/*====================================================\n\tTag page & author page cover base styles\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin: 0 0 30px;\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    padding: 40px 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    margin-top: 0;\n    padding: 30px 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 20px;\n  margin-right: 5px;\n}\n.cover .tag-name span {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 90%;\n    margin: 15px auto 0;\n    font-size: 0.9em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.3;\n  color: #52555b;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Author Styles */\n.author-template .cover .avatar {\n  margin: 0 !important;\n  width: 85px;\n  height: 85px;\n  float: none;\n}\n.author-template .cover h3 {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 1.5em;\n  margin: 10px 10px 10px 0;\n}\n.author-template .cover a:hover {\n  color: #40cebb;\n}\n.author-template .cover .bio {\n  font-size: 0.9em;\n  line-height: 1.5;\n  max-width: 85%;\n  margin: 15px auto 0;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .author-template .cover .bio {\n    max-width: 80%;\n    margin: 15px auto 0;\n  }\n}\n.author-template .cover .meta-info {\n  margin: 15px auto;\n}\n.author-template .cover .meta-item {\n  line-height: 1.3;\n  margin: 0 auto;\n}\n@media (max-width: 600px) {\n  .author-template .cover .meta-item {\n    margin: 0 auto 3px;\n  }\n}\n.author-template .widget {\n  order: 1;\n}\n.author-template .widget .widget-body {\n  background-color: white;\n}\n.author-template .widget.github,\n.author-template .widget.medium,\n.author-template .widget.website {\n  display: none;\n}\n@media (max-width: 800px) {\n  .author-template .sidebar {\n    display: none !important;\n  }\n}\n.author-template .sidebar .github {\n  order: 1;\n}\n.author-template .sidebar .github .widget-body {\n  padding: 15px;\n}\n.author-template .sidebar .twitter {\n  order: 20;\n}\n.author-template {\n  /* followers number */\n  /* List of repositories */\n}\n.author-template #github-card-author {\n  width: 100%;\n  font-size: 16px;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .author-template #github-card-author {\n    width: auto;\n    margin-bottom: 30px;\n  }\n}\n.author-template .profile {\n  background: #FFF;\n  overflow: hidden;\n  padding: 10px 14px 0;\n  min-height: 135px;\n}\n@media (max-width: 800px) {\n  .author-template .profile {\n    padding: 10px;\n  }\n}\n.author-template .stats {\n  padding: 5px;\n}\n.author-template .languages {\n  position: relative;\n  clear: both;\n  margin: 0 -10px;\n  padding: 15px 0;\n  border-top: 1px solid #DEDEDE;\n  font-size: 0.8em;\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  margin-top: 5px;\n}\n@media (max-width: 800px) {\n  .author-template .languages {\n    margin: 0;\n    padding: 15px;\n  }\n}\n.author-template .languages::before {\n  position: absolute;\n  top: -0.7em;\n  background: #FFF;\n  padding-right: 5px;\n  content: 'Top languages';\n  font-style: italic;\n  color: #555;\n}\n.author-template .languages li {\n  display: inline-block;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  color: #444;\n  font-size: 1.1em;\n  border: 0;\n  line-height: 1;\n  transition: all 0.2s ease-out;\n}\n.author-template .languages li:hover {\n  color: #40cebb;\n  cursor: pointer;\n}\n.author-template .followMe {\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n}\n.author-template .follow-button {\n  font-size: 0.8em;\n  color: white;\n  float: left;\n  padding: 6px 14px;\n  line-height: 1.3;\n  background: #5eb9d7;\n  transition: 0.2s all ease-out;\n  border-radius: 2px;\n  overflow: hidden;\n}\n@media (max-width: 800px) {\n  .author-template .follow-button {\n    padding: 8px 12px;\n    font-size: 0.7em;\n  }\n}\n.author-template .follow-button:hover {\n  color: inherit;\n  background: #40cebb;\n}\n.author-template .followMe span {\n  position: relative;\n  background: #FFF;\n  margin-left: 8px;\n  padding: 5px 8px;\n  color: #444;\n  font-size: 0.8em;\n  border: 1px solid #BBB;\n  height: 11px;\n  line-height: 1;\n}\n.author-template .followMe span::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  left: -4px;\n  top: 30%;\n  background: inherit;\n  border-left: 1px solid;\n  border-top: 1px solid;\n  border-color: inherit;\n  -moz-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.author-template .avatar {\n  width: 64px;\n  height: 64px;\n  float: left;\n  margin: 0 20px 25px 0;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 0 2px 0 #DDD;\n}\n@media (max-width: 800px) {\n  .author-template .avatar {\n    margin: 0 15px 15px 0;\n  }\n}\n.author-template .repos {\n  clear: both;\n}\n.author-template .repos .header {\n  display: block;\n  width: auto;\n  border-width: 1px 0;\n  font-size: 1em;\n  padding: 15px 0 0;\n  height: fit-content;\n  text-transform: uppercase;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .repos a {\n  position: relative;\n  display: block;\n  margin: 10px 0;\n  font-size: 0.9em;\n  border-top: 0;\n  width: auto;\n  padding: 10px 16px;\n  transition: 0.2s all ease-out;\n  border: 1px solid #e5ebf0;\n  border-radius: 3px;\n}\n.author-template .repos a:hover {\n  background-color: #5eb9d7;\n  color: white !important;\n  cursor: pointer;\n}\n.author-template .repos a:hover span {\n  color: white;\n}\n.author-template .repos a:hover * {\n  cursor: pointer;\n}\n.author-template .repos a:hover .star::after {\n  opacity: 1;\n}\n.author-template .repos .repo-name {\n  max-width: 280px;\n  text-overflow: ellipsis;\n  color: #5eb9d7;\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  font-size: 1em;\n}\n.author-template .repos .updated {\n  display: block;\n  font-size: 0.85em;\n  color: #777;\n}\n.author-template .repos .star {\n  position: absolute;\n  font-size: 1em;\n  right: 1em;\n  top: 2em;\n  color: #e39e45;\n  font-weight: 600;\n  margin-top: -5px;\n}\n.author-template .repos .star::after {\n  content: '\\a0\\2605';\n  font-size: 1.1em;\n  font-weight: bold;\n  color: #e39e45;\n  opacity: 0.5;\n}\n.author-template a {\n  text-decoration: none;\n}\n.author-template a:hover {\n  color: #4183C4;\n  cursor: pointer;\n}\n.author-template a:hover .star::after {\n  color: white;\n}\n.author-template .name {\n  display: block;\n  font-size: 1em;\n  color: #222;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .error {\n  font-size: 0.8em;\n  color: #444;\n  padding: 10px;\n}\n.author-template .error span {\n  display: block;\n  border-bottom: 1px solid #DDD;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n}\n.author-template .error span.remain {\n  text-align: center;\n  font-weight: bold;\n}\n.author-template #medium {\n  background: white;\n  padding: 20px 30px;\n}\n.author-template #medium .medium-widget-article__grid {\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 20px;\n}\n.author-template #medium .medium-widget-article__grid:last-of-type {\n  border-bottom: 0;\n}\n.author-template #medium .title {\n  margin: 0 0 0 -9px;\n}\n.author-template #medium .medium-widget-article__item {\n  font-size: 14px;\n  padding: 15px 5px;\n}\n.author-template #medium .medium-widget-article__description {\n  display: none;\n}\n.author-template #medium .medium-widget-article__title {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n  color: #153b52;\n  font-size: 1.2em;\n  line-height: 1.2;\n}\n.author-template #medium .medium-widget-article__image img {\n  width: 100px;\n}\n.author-template .meetup {\n  order: 2;\n  padding: 0 12px;\n}\n.author-template .meetup .widget-body {\n  padding: 15px 10px;\n}\n.author-template .meetup .noevents {\n  text-align: center;\n  padding: 20px;\n  display: block;\n  color: #6f6f6f;\n  font-size: 16px;\n  font-style: italic;\n  margin-bottom: 30px;\n}\n.author-template .meetup .userprofile {\n  padding: 0 10px 10px;\n  margin-bottom: 10px;\n}\n.author-template .meetup .userprofile .avatar {\n  display: inline-block;\n  margin-right: 15px;\n  height: 70px;\n}\n.author-template .meetup .userprofile .info {\n  display: inline-block;\n}\n.author-template .meetup .userprofile .info .name {\n  font-size: 1.2em;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .meetup .userprofile .info .country,\n.author-template .meetup .userprofile .info .location {\n  display: block;\n  font-size: 0.9em;\n  line-height: 1.5;\n}\n.author-template .meetup .userprofile .events .event {\n  background: #fafafa;\n  padding: 15px;\n  margin-bottom: 10px;\n  transition: all 0.2s ease-out;\n}\n.author-template .meetup .userprofile .events .event:hover {\n  background: #d5f0f3;\n}\n.author-template .meetup .userprofile .events .event:hover span {\n  color: white;\n}\n.author-template .meetup .userprofile .events .event .eventheader {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.author-template .meetup .userprofile .events .event .eventheader .eventimg {\n  display: inline-block;\n  margin-right: 15px;\n  width: 60px;\n  height: 60px;\n  min-width: 60px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 2px;\n}\n.author-template .meetup .userprofile .events .event .eventheader time {\n  display: flex;\n  -webkit-box-orient: vertical;\n  flex-direction: column;\n  text-align: center;\n  background: #f6f7f8;\n  border: 1px solid rgba(46, 62, 72, 0.12);\n  border-radius: 8px;\n  padding: 8px;\n  min-width: 36px;\n  min-height: 36px;\n  height: 38px;\n  margin-right: 15px;\n  transition: all 0.2s ease-out;\n}\n.author-template .meetup .userprofile .events .event .eventheader time:hover {\n  background: #797979;\n}\n.author-template .meetup .userprofile .events .event .eventheader time:hover .day,\n.author-template .meetup .userprofile .events .event .eventheader time:hover .month {\n  color: white;\n}\n.author-template .meetup .userprofile .events .event .eventheader time .day {\n  color: #f13a59;\n  font-size: 20px;\n  line-height: 1.1;\n  font-weight: 600;\n  display: block;\n  width: 100%;\n  height: 15px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.author-template .meetup .userprofile .events .event .eventheader time .month {\n  color: rgba(46, 62, 72, 0.6);\n  font-weight: 500;\n  text-transform: uppercase;\n  display: block;\n  text-align: center;\n  line-height: 1.1;\n  width: 100%;\n  height: 14px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  margin-top: 3px;\n}\n.author-template .meetup .userprofile .events .event .eventheader .eventname {\n  font-size: 16px;\n  color: #505050;\n  display: inline-block !important;\n  line-height: 1.4;\n  padding-top: 5px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .meetup .userprofile .events .event .eventinfo {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n}\n.author-template .meetup .userprofile .events .event .eventinfo i {\n  margin-right: 5px;\n}\n.author-template .meetup .userprofile .events .event .eventinfo span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 257px;\n  display: block;\n  color: #505050;\n  margin: 0 0 5px 10px;\n  line-height: 1.5;\n}\n.author-template .sidebar .author-website content,\n.author-template .sidebar .website content {\n  overflow: hidden;\n  padding: 0;\n}\n.author-template .sidebar .author-website > a,\n.author-template .sidebar .website > a {\n  display: block;\n  overflow: hidden;\n  margin: 5px 0 0;\n}\n.author-template .sidebar .author-website .link-preview,\n.author-template .sidebar .website .link-preview {\n  height: 167px;\n  background-size: cover !important;\n  color: white;\n  position: relative;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  overflow: hidden;\n}\n.author-template .sidebar .author-website .link-preview:hover,\n.author-template .sidebar .website .link-preview:hover {\n  cursor: pointer;\n}\n.author-template .sidebar .author-website .link-preview h4,\n.author-template .sidebar .website .link-preview h4 {\n  position: absolute;\n  bottom: 12px;\n  left: 15px;\n  color: white;\n  z-index: 10;\n  width: 79%;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n  font-size: 15px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  margin: 0;\n}\n.author-template .sidebar .author-website .link-preview .link-name,\n.author-template .sidebar .website .link-preview .link-name {\n  text-decoration: none;\n  color: white;\n  bottom: 5px;\n  position: absolute;\n  z-index: 10;\n  left: 10px;\n}\n.author-template .sidebar .author-website .link-preview i,\n.author-template .sidebar .website .link-preview i {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  z-index: 100;\n  font-size: 14px;\n  color: white;\n}\n.author-template .sidebar .author-website .link-preview::after,\n.author-template .sidebar .website .link-preview::after {\n  display: block;\n  position: absolute;\n  background-image: linear-gradient(to bottom, transparent 0%, #5eb9d7 100%);\n  height: 100%;\n  width: 105%;\n  top: 0;\n  left: 0;\n  content: '';\n}\n.author-template .rss iframe {\n  height: 480px;\n}\n",""])},356:function(n,e,t){"use strict";t.r(e);t(64),t(141);function a(){window.location.href.includes("lynx")&&$("main a").each(function(n,e){var t=this,a="https://us-east1-hackersandslackers-204807.cloudfunctions.net/linkpreview-endpoint?url="+$(this).attr("href");$(this).html('<div class="ui placeholder"> <div class="image header"> <div class="line"></div> <div class="line"></div> </div> <div class="paragraph"> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> <div class="line"></div> </div><div class="gap">  </div><div class="column left"></div> <div class="column right"></div></div></div>');fetch(a,{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then(function(n){$(t).html('<a href="'+n.url+'"><div class="link-preview"> \n <div class="link-info"> \n <div class="link-preview-image"><img alt="'+n.title+'" src="'+n.image+'"></div> \n<div class="detail-stack"> \n <h4 class="title-desktop">'+n.title+"</h4> \n <p>"+n.description+'</p> \n<h4 class="title-mobile">'+n.title+'</h4> \n <span class="url-info"><i class="far fa-link"></i>'+n.url.split("://")[1]+"</span> \n </div></div></a>"),$("img").each(function(){"null"==$(this).attr("src")&&$(this).parent().remove()})})})}function i(n){var e=JSON.stringify(n.github);e=(e=e.replace('"',"")).replace('"',"");var t=JSON.stringify(n.medium);t=(t=t.replace('"',"")).replace('"',"");var a=JSON.stringify(n.website);a=(a=a.replace('"',"")).replace('"',""),function(n){$("#github-card-author").attr("data-username",n),new GitHubCard({template:"#github-card-author"}).init(),$(".author-github").css("display","block")}(e),function(n){if(n){$(".website").css("display","block");var e="https://us-east1-hackersandslackers-204807.cloudfunctions.net/hackers-linkpreview-endpoint?url="+n;$.ajax({method:"GET",url:e,dataType:"json",success:function(n){$(".previewimage").remove(),$(".widget.website").css("display","block"),$(".widget.website").append('<a href="'+n.url+'">  \n<div class="link-preview" style="background:url('+n.image+')"> \n<a href="'+n.url+'" class="link-name">'+n.title+'</a><i class="far d fa-link"></i> \n</div></a>')}})}}(a)}function o(){var n=function(){var n=String(document.location.pathname),e=n.substring(n.lastIndexOf("/")-4);return e=e.replace("/","")}();$.ajax({method:"GET",url:"https://us-east1-hackersandslackers-204807.cloudfunctions.net/hackers-authors-endpoint?author="+n,dataType:"json",success:function(n){i(JSON.parse(n))}})}document.addEventListener("DOMContentLoaded",function(){o(),a()})},5:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(r=a,p=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(l," */")),o=a.sources.map(function(n){return"/*# sourceURL=".concat(a.sourceRoot).concat(n," */")});return[t].concat(o).concat([i]).join("\n")}var r,p,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var r=0;r<n.length;r++){var p=n[r];null!=p[0]&&a[p[0]]||(t&&!p[2]?p[2]=t:t&&(p[2]="(".concat(p[2],") and (").concat(t,")")),e.push(p))}},e}},6:function(n,e,t){var a,i,o={},r=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=a.apply(this,arguments)),i}),p=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var a=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}e[n]=a}return e[n]}}(),l=null,s=0,d=[],m=t(7);function u(n,e){for(var t=0;t<n.length;t++){var a=n[t],i=o[a.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](a.parts[r]);for(;r<a.parts.length;r++)i.parts.push(x(a.parts[r],e))}else{var p=[];for(r=0;r<a.parts.length;r++)p.push(x(a.parts[r],e));o[a.id]={id:a.id,refs:1,parts:p}}}}function h(n,e){for(var t=[],a={},i=0;i<n.length;i++){var o=n[i],r=e.base?o[0]+e.base:o[0],p={css:o[1],media:o[2],sourceMap:o[3]};a[r]?a[r].parts.push(p):t.push(a[r]={id:r,parts:[p]})}return t}function c(n,e){var t=p(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=d[d.length-1];if("top"===n.insertAt)a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=p(n.insertAt.before,t);t.insertBefore(e,i)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var a=function(){0;return t.nc}();a&&(n.attrs.nonce=a)}return b(e,n.attrs),c(n,e),e}function b(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,a,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var r=s++;t=l||(l=g(e)),a=y.bind(null,t,r,!1),i=y.bind(null,t,r,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),c(n,e),e}(e),a=function(n,e,t){var a=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(a=m(a));i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([a],{type:"text/css"}),p=n.href;n.href=URL.createObjectURL(r),p&&URL.revokeObjectURL(p)}.bind(null,t,e),i=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),a=function(n,e){var t=e.css,a=e.media;a&&n.setAttribute("media",a);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){f(t)});return a(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;a(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=h(n,e);return u(t,e),function(n){for(var a=[],i=0;i<t.length;i++){var r=t[i];(p=o[r.id]).refs--,a.push(p)}n&&u(h(n,e),e);for(i=0;i<a.length;i++){var p;if(0===(p=a[i]).refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete o[p.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function y(n,e,t,a){var i=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(o,r[e]):n.appendChild(o)}}},64:function(n,e,t){var a=t(65);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(6)(a,i);a.locals&&(n.exports=a.locals)},65:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-template .main-content a {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.page-about {\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.page-about .about-content {\n  margin-bottom: 40px !important;\n}\n.page-about .author-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n  margin: 0 40px 40px;\n}\n@media (max-width: 1040px) {\n  .page-about .author-container {\n    margin: 0 15px 10px;\n  }\n}\n@media (max-width: 900px) {\n  .page-about .author-container {\n    margin: 0 30px 30px;\n  }\n}\n.page-about .author-container .author-card-small {\n  width: 48.5%;\n  margin: 0 0 15px;\n}\n@media (max-width: 600px) {\n  .page-about .author-container .author-card-small {\n    margin: 20px 0 !important;\n  }\n}\n.page-about figure {\n  margin: 0 40px 30px;\n}\n@media (max-width: 1100px) {\n  .page-about figure {\n    margin: -8px 20px 0;\n  }\n}\n@media (max-width: 800px) {\n  .page-about figure {\n    margin: 0 0 20px;\n  }\n}\n.page-about iframe {\n  /*box-shadow: 0 0 22px #8d9fb9;*/\n  margin: 0;\n  width: 100%;\n  left: 0;\n}\n.page-about .page-title {\n  margin: 40px 40px 10px !important;\n  font-weight: 500;\n}\n@media (max-width: 1100px) {\n  .page-about .page-title {\n    font-size: 3em;\n    display: none;\n  }\n}\n.page-about .about-content > p {\n  margin: 0 40px 20px !important;\n  font-weight: 300;\n}\n@media (max-width: 1050px) {\n  .page-about .about-content > p {\n    margin: 0 30px 20px !important;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .about-content {\n    display: flex;\n    flex-direction: column;\n    margin: -14px 0 0 !important;\n  }\n}\n.page-about .post-image {\n  display: none !important;\n}\n.page-about .welcomevideo,\n.page-about iframe {\n  height: 400px;\n  display: block;\n}\n@media (max-width: 800px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 451px;\n  }\n}\n@media (max-width: 600px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    height: 360px;\n    margin: -12px 0 0 !important;\n    top: -7px;\n  }\n}\n@media (max-width: 470px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 250px !important;\n    min-height: auto !important;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .page-about .fluid-width-video-wrapper {\n    margin: 0 40px 30px;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  width: 90%;\n  margin: auto;\n  position: relative;\n  padding: 0;\n}\n.page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n  border: 1px solid #f5f8fb;\n}\n.page-resources #resources-table .icon {\n  max-width: 5px;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n  line-height: 1;\n  padding: 20px 10px;\n  vertical-align: middle;\n}\n.page-resources #resources-table td:last-of-type {\n  max-width: 40px;\n}\n.page-resources #resources-table td img {\n  height: 20px;\n  width: 20px;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center !important;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n.author-template .tag-name,\n.home-template .tag-name,\n.paged .tag-name,\n.tag-template .tag-name {\n  font-size: 1.3em;\n  margin-top: 0;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.author-template .tag-name i,\n.home-template .tag-name i,\n.paged .tag-name i,\n.tag-template .tag-name i {\n  font-size: 0.8em;\n  margin-right: 5px;\n  font-weight: 100;\n}\n@media (max-width: 800px) {\n  .author-template .main-header,\n  .home-template .main-header,\n  .paged .main-header,\n  .tag-template .main-header {\n    height: 200px;\n  }\n}\n/*====================================================\n\tTag page & author page cover base styles\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin: 0 0 30px;\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    padding: 40px 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    margin-top: 0;\n    padding: 30px 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 20px;\n  margin-right: 5px;\n}\n.cover .tag-name span {\n  font-family: 'TTNormsPro-Medium', sans-serif;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 90%;\n    margin: 15px auto 0;\n    font-size: 0.9em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'TTNormsPro-Regular', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'TTNormsPro-Regular', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.3;\n  color: #52555b;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Table Styles */\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-spacing: 0;\n  border: 0 solid rgba(255, 255, 255, 0);\n}\ntable:hover {\n  cursor: ew-resize !important;\n}\ntable thead tr {\n  background: #52596a !important;\n  color: white;\n  font-size: 1.1em;\n}\ntable tr {\n  transition: all 0.3s ease-out;\n}\ntable tr:nth-child(odd) {\n  background: #f6f8fb;\n}\ntable tr td,\ntable tr th {\n  text-align: left;\n  padding: 10px;\n  vertical-align: top;\n  border-top: 0;\n  transition: all 0.3s ease-out;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 150px;\n  text-overflow: ellipsis;\n  border-bottom: 0;\n  font-size: 0.8em;\n}\n@media (max-width: 600px) {\n  table tr td,\n  table tr th {\n    border: 0;\n  }\n}\n.tableContainer {\n  border-spacing: 0;\n  overflow: hidden;\n  border-radius: 3px;\n  border: 1px solid #e6edf0;\n  margin: 30px 0;\n}\n@media (max-width: 600px) {\n  .tableContainer {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n  }\n  .tableContainer *:hover {\n    cursor: ew-resize !important;\n  }\n  .tableContainer *:active {\n    cursor: grabbing;\n  }\n  .tableContainer table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .tableContainer table td,\n  .tableContainer table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .tableContainer table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: 'TTNormsPro-Regular', sans-serif;\n  }\n  .tableContainer table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n    background: #52596a;\n    padding-left: 10px;\n    overflow: hidden;\n  }\n  .tableContainer table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n    background: #5c6376;\n  }\n  .tableContainer table thead tr:hover {\n    background-color: inherit;\n    cursor: ew-resize !important;\n  }\n  .tableContainer table thead tr th {\n    display: table-row;\n    height: 62px !important;\n    margin-left: 5px;\n    padding: 0;\n    line-height: 3;\n    font-family: 'TTNormsPro-Regular', sans-serif;\n    letter-spacing: 0.5px;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    min-height: 50px;\n    margin: 5px 0;\n    margin-right: 0 !important;\n    max-width: unset !important;\n    color: #ffffff;\n    background: #52596a;\n    vertical-align: middle;\n    font-size: 0.7em;\n  }\n  .tableContainer table thead tr th * {\n    font-size: 1em;\n  }\n  .tableContainer table tbody {\n    margin-left: 131px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .tableContainer table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .tableContainer table tbody tr tr:hover {\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n  .tableContainer table tbody tr td,\n  .tableContainer table tbody tr th {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n    border-bottom: 1px solid #ced3db;\n    margin: 5px 0;\n    font-size: 0.78em !important;\n    font-weight: 300;\n  }\n  .tableContainer table tbody tr td:last-child,\n  .tableContainer table tbody tr th:last-child {\n    border-bottom: 0;\n  }\n  .tableContainer table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.tableContainer .rowCounter {\n  text-align: right;\n  width: 100%;\n  font-size: 0.8em;\n  margin-top: -20px;\n  width: fit-content;\n  position: absolute;\n  right: 0;\n  background: #555760;\n  padding: 0 9px;\n  color: white;\n}\n",""])},7:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,a=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:a+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}});