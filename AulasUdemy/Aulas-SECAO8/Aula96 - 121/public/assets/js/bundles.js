(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(354),t=e.n(o),a=e(314),i=e.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]),i.push([n.id,":root {\n   --primary-color: rgb(177, 204, 240);\n   --primary-color-dark: rgb(96, 113, 146);\n}\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1.0em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: rgb(255, 255, 255);\n    padding: 20px;\n    border-radius: 10px;\n}\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\nform input:focus {\n    outline: 1px solid var(--primary-color-dark);\n}\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 40px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-dark);\n}\nform button:active {\n    background: rgb(200, 224, 228);   \n}\n\n.senha-gerada {\n    font-size: 2em;\n    color: var(--primary-color);\n    margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    display: block;\n    margin: 40px 0;\n    font-size: 1em;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;GACG,mCAAmC;GACnC,uCAAuC;AAC1C;AACA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,4CAA4C;AAChD;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;AACzC;AACA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n:root {\r\n   --primary-color: rgb(177, 204, 240);\r\n   --primary-color-dark: rgb(96, 113, 146);\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.0em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: rgb(255, 255, 255);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color-dark);\r\n}\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-dark);\r\n}\r\nform button:active {\r\n    background: rgb(200, 224, 228);   \r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    margin: 40px 0;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 40px 0;\r\n    font-size: 1em;\r\n}"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),r.push(u))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var A=n[c],s=o.base?A[0]+o.base:A[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var d=e(p),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)r[d].references++,r[d].updater(l);else{var f=t(l,o);o.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var A=o(n,t),s=0;s<a.length;s++){var u=e(a[s]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=A}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=function(n,r){return Math.floor(Math.random()*(r-n)+n)},t=document.querySelector(".senha-gerada"),a=document.querySelector(".qtd-caracteres"),i=document.querySelector(".chk-maiusculas"),c=document.querySelector(".chk-minusculas"),A=document.querySelector(".chk-numeros"),s=document.querySelector(".chk-simbolos"),u=document.querySelector(".gerar-senha"),p=e(72),d=e.n(p),l=e(825),f=e.n(l),m=e(659),C=e.n(m),h=e(56),g=e.n(h),b=e(540),v=e.n(b),y=e(113),I=e.n(y),x=e(958),B={};B.styleTagTransform=I(),B.setAttributes=g(),B.insert=C().bind(null,"head"),B.domAPI=f(),B.insertStyleElement=v(),d()(x.A,B),x.A&&x.A.locals&&x.A.locals,u.addEventListener("click",(function(){t.innerHTML=function(n,r,e,t,a){var i=[];n=Number(n);for(var c=0;c<n;c++)r&&i.push(String.fromCharCode(o(65,91))),e&&i.push(String.fromCharCode(o(97,123))),t&&i.push(String.fromCharCode(o(48,58))),a&&i.push(",.;~^{}!@#$%*()_+=-"[o(0,19)]);return i.join("").slice(0,n)}(a.value,i.checked,c.checked,A.checked,s.checked)||"Nada selecionado"}))})();
//# sourceMappingURL=bundles.js.map