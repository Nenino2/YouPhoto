(function(t){function e(e){for(var r,s,o=e[0],u=e[1],c=e[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"header"},[r("h1",[t._v("YouPhoto")]),r("img",{staticClass:"plus-button",attrs:{src:n("8a37")},on:{click:function(e){t.showAddPhotoPopup=!0}}})]),r("main",{staticClass:"content"},[r("div",{staticClass:"masorny"},t._l(t.imageUrls,(function(t){return r("div",{key:t,staticClass:"image-box"},[r("img",{staticClass:"image",attrs:{src:t}})])})),0)]),t.showAddPhotoPopup?r("div",{ref:"popup",staticClass:"popup",on:{click:t.hideAddPhotoPopup}},[r("form",{staticClass:"popup__box",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("h2",{staticClass:"popup__title"},[t._v("Carica la tua immagine")]),r("input",{ref:"file",staticClass:"popup__input",attrs:{type:"file"},on:{change:t.onSelect}}),r("button",{staticClass:"popup__btn"},[t._v("Carica")]),t.submitted?r("p",{staticClass:"popup__result-message"},[t._v(t._s(t.message))]):t._e()])]):t._e(),r("footer",{staticClass:"footer"},[t._v("Diritti riservati ad Alberto Heissl")])])},i=[],s=(n("d81d"),n("d3b7"),n("96cf"),n("bc3a")),o=n.n(s),u={name:"app",data:function(){return{showAddPhotoPopup:!1,file:"",message:"",submitted:!1,imageUrls:[]}},created:function(){this.loadUrls()},methods:{loadUrls:function(){var t,e,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(o.a.get("/.netlify/functions/api/images/"));case 2:t=r.sent,e=t.data.data,n=e.map((function(t){return t.url})),this.imageUrls=n;case 6:case"end":return r.stop()}}),null,this)},hideAddPhotoPopup:function(t){t.target===t.currentTarget&&(this.file="",this.message="",this.showAddPhotoPopup=!1,this.submitted=!1)},onSelect:function(){var t=this.$refs.file.files[0];this.file=t},onSubmit:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.file){e.next=14;break}return t=new FormData,t.append("file",this.file),this.submitted=!0,e.prev=4,e.next=7,regeneratorRuntime.awrap(o.a.post("/.netlify/functions/api/images/",t));case 7:this.message="Caricato",this.loadUrls(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),this.message="Si è verificato un errore. Riprova più tardi";case 14:case"end":return e.stop()}}),null,this,[[4,11]])}}},c=u,p=(n("5c0b"),n("2877")),l=Object(p["a"])(c,a,i,!1,null,null,null),f=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"8a37":function(t,e,n){t.exports=n.p+"img/plus.fb379d11.svg"},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.64c84d74.js.map