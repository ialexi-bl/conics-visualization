(function(t){function e(e){for(var n,s,r=e[0],c=e[1],h=e[2],f=0,d=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,h||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0d8b":function(t,e,i){},"0f04":function(t,e,i){"use strict";i("d020")},"312f":function(t,e,i){"use strict";i("c032")},"35e8":function(t,e,i){"use strict";i("df88")},"46cf":function(t,e,i){"use strict";i("0d8b")},"692d":function(t,e,i){},7556:function(t,e,i){},8577:function(t,e,i){"use strict";i("8de6")},"8de6":function(t,e,i){},a637:function(t,e,i){"use strict";i("aad4")},aad4:function(t,e,i){},ade0:function(t,e,i){},b4df:function(t,e,i){"use strict";i("7556")},b68e:function(t,e,i){"use strict";i("ade0")},c032:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),o=Object(n["o"])("data-v-237ad819");Object(n["j"])("data-v-237ad819");var a={class:"container"},s={class:"sidebar-container"},r={class:"sidebar"},c=Object(n["e"])("div",{class:"separator"},null,-1),h={class:"content-container"};Object(n["i"])();var u=o((function(t,e,i,o,u,f){var d=Object(n["l"])("sidebar"),l=Object(n["l"])("conic-plot");return Object(n["h"])(),Object(n["c"])("div",a,[Object(n["e"])("div",s,[Object(n["e"])("div",r,[Object(n["e"])(d)]),c]),Object(n["e"])("main",h,[Object(n["e"])(l)])])})),f=Object(n["o"])("data-v-61bcaf03");Object(n["j"])("data-v-61bcaf03");var d={class:"sidebar"},l=Object(n["e"])("hr",{class:"hr"},null,-1),v={class:"editors"},m=Object(n["e"])("hr",{class:"hr"},null,-1);Object(n["i"])();var b=f((function(t,e,i,o,a,s){var r=Object(n["l"])("EquationDisplay"),c=Object(n["l"])("MatrixDisplay"),h=Object(n["l"])("ShapeDisplay"),u=Object(n["l"])("QuadraticFormEditor"),f=Object(n["l"])("LinearEditor");return Object(n["h"])(),Object(n["c"])("aside",d,[Object(n["e"])(r),Object(n["e"])(c),Object(n["e"])(h),l,Object(n["e"])("div",v,[Object(n["e"])(u,{class:"quadratic-editor"}),m,Object(n["e"])(f,{class:"linear-editor"})])])})),p=Object(n["o"])("data-v-041a0e7f");Object(n["j"])("data-v-041a0e7f");var O={class:"container"};Object(n["i"])();var g=p((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("div",O,[Object(n["e"])("canvas",{ref:"canvas",width:"0",height:"0",class:["canvas",{ready:t.abovePoint}],onMousedown:e[1]||(e[1]=function(){return t.mouseDown&&t.mouseDown.apply(t,arguments)}),onMousemove:e[2]||(e[2]=function(){return t.mouseMove&&t.mouseMove.apply(t,arguments)}),onMouseup:e[3]||(e[3]=function(){return t.release&&t.release.apply(t,arguments)}),onTouchstart:e[4]||(e[4]=function(){return t.touchStart&&t.touchStart.apply(t,arguments)}),onTouchmove:e[5]||(e[5]=function(){return t.touchMove&&t.touchMove.apply(t,arguments)}),onTouchend:e[6]||(e[6]=function(){return t.release&&t.release.apply(t,arguments)})},null,34)])})),j=i("3835");function y(t){return function(){return t}}function x(t,e){var i=e.xOriginRatio,n=e.yOriginRatio,o=e.spanHoriz,a=e.spanVert,s=e.canvasWidth,r=e.canvasHeight,c=e.unitsSize,h=i*s,u=n*r;t.beginPath(),t.strokeStyle="#373737",t.fillStyle="#777",t.font="".concat(c,"px sans-serif"),t.lineWidth=3,t.moveTo(h,0),t.lineTo(h,r),t.moveTo(0,u),t.lineTo(s,u),t.stroke(),t.fillText("0",h-c,u+c);var f=s/o,d=r/a;t.beginPath(),t.lineWidth=1;for(var l=h+f,v=1;l<s;l+=f,v++)t.moveTo(l,0),t.lineTo(l,r),t.fillText(v+"",l-c,u+c);for(var m=h-f,b=-1;m>0;m-=f,b--)t.moveTo(m,0),t.lineTo(m,r),t.fillText(b+"",m-c,u+c);for(var p=u+d,O=-1;p<r;p+=d,O--)t.moveTo(0,p),t.lineTo(s,p),t.fillText(O+"",h-1.2*c,p+c);for(var g=u-d,j=1;g>0;g-=d,j++)t.moveTo(0,g),t.lineTo(s,g),t.fillText(j+"",h-c,g+c);t.stroke()}var w=function(t,e,i){return Math.min(Math.max(t,e),i)};i("cb29");function C(t,e,i,n,o,a){t.beginPath(),t.fillStyle=e,t.arc(a.xOrigin+i*a.xCoordScale,a.yOrigin-n*a.yCoordScale,o,0,2*Math.PI),t.fill()}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}var S=Math.sqrt(3),M=20;function W(t,e,i,n,o){var a=o.xOrigin+i*o.xCoordScale,s=o.yOrigin-n*o.yCoordScale,r=M*S/4,c=Math.sqrt(i*i+n*n),h=a-M*(i/c),u=s+M*(n/c);t.strokeStyle=t.fillStyle=e,t.beginPath(),t.moveTo(o.xOrigin,o.yOrigin),t.lineTo(a-r*i/c,s+r*n/c),t.stroke(),t.beginPath(),t.moveTo(a,s),t.lineTo(a+((h-a)*S-(u-s))/2,s+(h-a+(u-s)*S)/2),t.lineTo(a+((h-a)*S+(u-s))/2,s+((u-s)*S-(h-a))/2),t.closePath,t.fill()}function H(t,e,i,n,o,a){var s=Math.sqrt(i*i+n*n);W(t,e,i-o/a.xCoordScale*(i/s),n-o/a.yCoordScale*(n/s),a),C(t,e,i,n,o,a)}var z=Math.abs,D=Math.min,P=12,$=Object(n["f"])({data:function(){return y({canvasWidth:0,canvasHeight:0,abovePoint:!1,moving:!1})()},computed:{coefs:function(){return this.$store.state.coefs},unitsSize:function(){return this.canvasWidth/P/2.5},spanVert:function(){return P/this.canvasWidth*this.canvasHeight},xOrigin:function(){return.5*this.canvasWidth},yOrigin:function(){return.5*this.canvasHeight},xCoordScale:function(){return this.canvasWidth/P},yCoordScale:function(){return this.canvasHeight/this.spanVert},a12:function(){return this.coefs.a12},xMatrix:function(){return this.coefs.a11+this.coefs.a12},yMatrix:function(){return this.coefs.a12+this.coefs.a22}},watch:{coefs:function(){this.draw()}},methods:{xCoord:function(t){return this.xOrigin+t*this.xCoordScale},yCoord:function(t){return this.yOrigin-t*this.yCoordScale},resize:function(){var t=this.$refs.canvas,e=t.parentNode,i=e.clientWidth,n=e.clientHeight,o=2*i,a=2*n;t.width=o,t.height=a,t.style.width="".concat(i),t.style.height="".concat(n,"px"),this.canvasWidth=o,this.canvasHeight=a,this.draw()},drawGuides:function(t){var e=this.canvasWidth,i=this.canvasHeight;t.setLineDash([5,5]),t.lineWidth=1,t.strokeStyle="#555";var n=D(P,this.spanVert);t.beginPath(),t.moveTo(this.xCoord(-n),this.yCoord(-n)),t.lineTo(this.xCoord(n),this.yCoord(n)),t.stroke();var o=this.xCoord(this.a12),a=this.yCoord(this.a12);t.strokeStyle="#faa",t.beginPath(),t.moveTo(0,a),t.lineTo(e,a),t.stroke(),t.strokeStyle="#aaf",t.beginPath(),t.moveTo(o,0),t.lineTo(o,i),t.stroke(),t.setLineDash([])},drawMatrix:function(t){t.lineWidth=3,H(t,"red",this.coefs.a11,this.coefs.a12,10,this),H(t,"blue",this.coefs.a12,this.coefs.a22,10,this),t.beginPath(),t.setLineDash([5,5]),t.strokeStyle="#aaa",t.moveTo(this.xCoord(this.coefs.a11),this.yCoord(this.coefs.a12)),t.lineTo(this.xCoord(this.xMatrix),this.yCoord(this.yMatrix)),t.lineTo(this.xCoord(this.coefs.a12),this.yCoord(this.coefs.a22)),t.stroke(),t.setLineDash([])},draw:function(){var t=this.$refs.canvas.getContext("2d");t&&(t.clearRect(0,0,this.canvasWidth,this.canvasHeight),x(t,{canvasHeight:this.canvasHeight,canvasWidth:this.canvasWidth,xOriginRatio:.5,yOriginRatio:.5,unitsSize:this.unitsSize,spanHoriz:P,spanVert:this.spanVert}),this.drawGuides(t),this.drawMatrix(t),C(t,"#aaa",this.coefs.a12,this.coefs.a12,10,this),C(t,"#aaa",this.xMatrix,this.yMatrix,10,this))},isAboveA12:function(t,e){return z(t-this.xCoord(this.a12))<10&&z(e-this.yCoord(this.a12))<10},isAboveMatrix:function(t,e){return z(t-this.xCoord(this.xMatrix))<10&&z(e-this.yCoord(this.yMatrix))<10},isAboveFirst:function(t,e){return z(t-this.xCoord(this.coefs.a11))<10&&z(e-this.yCoord(this.coefs.a12))<10},isAboveSecond:function(t,e){return z(t-this.xCoord(this.coefs.a12))<10&&z(e-this.yCoord(this.coefs.a22))<10},grab:function(t,e){var i=2*t,n=2*e;this.isAboveA12(i,n)?this.moving="a12":this.isAboveMatrix(i,n)?this.moving="matrix":this.isAboveFirst(i,n)?this.moving="first":this.isAboveSecond(i,n)&&(this.moving="second")},move:function(t,e){var i=2*t,n=2*e;if(this.moving){var o=(i-this.xOrigin)/this.xCoordScale;if("a12"===this.moving)z(T(o)-o)<.2&&(o=T(o)),this.$store.dispatch("setA12",o);else{var a=(this.yOrigin-n)/this.yCoordScale;z(T(o)-o)<.2&&z(T(a)-a)<.2&&(o=T(o),a=T(a)),"first"===this.moving?this.$store.dispatch("setFirst",{a11:o,a12:a}):"second"===this.moving?this.$store.dispatch("setSecond",{a12:o,a22:a}):this.$store.dispatch("setMatrix",{a11:o-this.a12,a22:a-this.a12})}this.draw()}else this.isAboveA12(i,n)||this.isAboveMatrix(i,n)||this.isAboveFirst(i,n)||this.isAboveSecond(i,n)?this.abovePoint=!0:this.abovePoint=!1},release:function(){this.moving=!1},mouseDown:function(t){this.grab(t.offsetX,t.offsetY)},mouseMove:function(t){this.move(t.offsetX,t.offsetY)},touchStart:function(t){if(1===t.touches.length){var e=Object(j["a"])(t.touches,1),i=e[0];t.preventDefault();var n=this.$refs.canvas.getBoundingClientRect(),o=n.left,a=n.top;this.grab(i.clientX-o,i.clientY-a)}},touchMove:function(t){if(1===t.touches.length){var e=Object(j["a"])(t.touches,1),i=e[0];t.preventDefault();var n=this.$refs.canvas.getBoundingClientRect(),o=n.left,a=n.top,s=this.$refs.canvas,r=s.clientWidth,c=s.clientHeight;this.move(w(i.clientX-o,0,r),w(i.clientY-a,0,c))}}},mounted:function(){this.resize(),this.draw(),window.addEventListener("resize",this.resize)},beforeUnmount:function(){window.removeEventListener("resize",this.resize)}}),V=$;i("312f");V.render=g,V.__scopeId="data-v-041a0e7f";var _=V,A=Object(n["o"])("data-v-242b0a33"),k=A((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("div",{class:"equation-display stix-font-small",onCopy:e[1]||(e[1]=function(){return t.formatCopy&&t.formatCopy.apply(t,arguments)})},Object(n["m"])(t.equation),33)})),R=(i("fb6a"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("2ca0"),Object(n["f"])({computed:{equation:function(){var t=this.$store.state.coefs,e=this.format(t.a11,"x²")+this.format(2*t.a12,"xy")+this.format(t.a22,"y²")+this.format(t.a13,"x")+this.format(t.a23,"y")+this.format(t.a33,"",!0);return e=e.replace(/\+/g," + ").replace(/–/g," – ")+" = 0",e.startsWith(" + ")?e.slice(3):e}},methods:{format:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Math.round(100*t)/100,0==t?"":1!=t||i?-1!=t||i?t>0?"+"+t+e:"–"+-t+e:"–"+e:"+"+e},formatCopy:function(t){var e,i=document.getSelection();i&&(null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",i.toString().replace(/–/g,"-").replace(/\s/g,"")),t.preventDefault())}}})),L=R;i("b4df");L.render=k,L.__scopeId="data-v-242b0a33";var q=L,E=Object(n["o"])("data-v-094dbef6");Object(n["j"])("data-v-094dbef6");var Y={class:"matrix-container"},F=Object(n["e"])("span",{class:"determinant"},"det",-1),I={class:"equals stix-font-small"},X={class:"result stix-font-small"};Object(n["i"])();var N=E((function(t,e,i,o,a,s){var r=Object(n["l"])("Matrix");return Object(n["h"])(),Object(n["c"])("div",Y,[F,Object(n["e"])(r,{m11:t.round(t.coefs.a11),m12:t.round(t.coefs.a12),m21:t.round(t.coefs.a12),m22:t.round(t.coefs.a22)},null,8,["m11","m12","m21","m22"]),Object(n["e"])("span",I,Object(n["m"])(t.equalsSign),1),Object(n["e"])("span",X,Object(n["m"])(t.determinant),1)])})),B=Object(n["o"])("data-v-25e48ae7");Object(n["j"])("data-v-25e48ae7");var U={class:"matrix-display-container"},G=Object(n["e"])("span",{class:"parenthesis left"},"(",-1),J={class:"matrix"},Q={class:"component stix-font-small"},K={class:"component stix-font-small"},Z={class:"component stix-font-small"},tt={class:"component stix-font-small"},et=Object(n["e"])("span",{class:"parenthesis right stix-font-small"},")",-1);Object(n["i"])();var it=B((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("div",U,[G,Object(n["e"])("div",J,[Object(n["e"])("div",Q,Object(n["m"])(t.m11),1),Object(n["e"])("div",K,Object(n["m"])(t.m12),1),t.isVector?Object(n["d"])("",!0):(Object(n["h"])(),Object(n["c"])(n["a"],{key:0},[Object(n["e"])("div",Z,Object(n["m"])(t.m21),1),Object(n["e"])("div",tt,Object(n["m"])(t.m22),1)],64))]),et])})),nt=(i("a9e3"),Object(n["f"])({props:{m11:Number,m12:Number,m21:Number,m22:Number,isVector:Boolean}})),ot=nt;i("a637");ot.render=it,ot.__scopeId="data-v-25e48ae7";var at=ot,st=Object(n["f"])({components:{Matrix:at},computed:{coefs:function(){return this.$store.state.coefs},exactDeterminant:function(){var t=this.coefs,e=t.a11,i=t.a12,n=t.a22;return e*n-i*i},determinant:function(){return T(this.exactDeterminant,2)},equalsSign:function(){return this.determinant==this.exactDeterminant?"=":"≈"}},methods:{round:function(t){return T(t,2)}}}),rt=st;i("fa3b");rt.render=N,rt.__scopeId="data-v-094dbef6";var ct=rt,ht=Object(n["o"])("data-v-222fa862");Object(n["j"])("data-v-222fa862");var ut={class:"shape-display"};Object(n["i"])();var ft=ht((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("div",ut,Object(n["m"])(t.shape),1)})),dt=Object(n["f"])({computed:{coefs:function(){return this.$store.state.coefs},determinant:function(){var t=this.coefs,e=t.a11,i=t.a12,n=t.a22;return e*n-i*i},bigDeterminant:function(){var t=this.coefs,e=t.a11,i=t.a12,n=t.a22,o=t.a13,a=t.a23,s=t.a33;return o*(i*a-n*o)/4-a*(e*a-i*o)/2+s*this.determinant},lineType:function(){var t=this.coefs,e=t.a11,i=t.a22,n=t.a13,o=t.a23,a=t.a33;return n*n/4+o*o/4-(e+i)*a},isOneLine:function(){var t=this.coefs,e=t.a11,i=t.a12,n=t.a22,o=t.a13,a=t.a23;return 0===e&&0===i&&0===n&&(0!==o||0!==a)},shape:function(){var t=this.determinant;if(0===this.bigDeterminant){if(t<0)return"Two crossing lines";if(t>0)return"Point";if(this.isOneLine)return"Line";var e=this.lineType;return e>0?"Two parallel lines":0===e?"Line":"Empty set"}return t>0?this.coefs.a11===this.coefs.a22&&0===this.coefs.a12?"Circle":"Ellipse":0===t?"Parabola":"Hyperbola"}}}),lt=dt;i("8577");lt.render=ft,lt.__scopeId="data-v-222fa862";var vt=lt,mt=Object(n["o"])("data-v-cc59d44a");Object(n["j"])("data-v-cc59d44a");var bt={class:"container"};Object(n["i"])();var pt=mt((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("div",bt,[Object(n["e"])("canvas",{ref:"canvas",class:["canvas",{ready:t.abovePoint}],width:"0",height:"0",onMousedown:e[1]||(e[1]=function(){return t.mouseDown&&t.mouseDown.apply(t,arguments)}),onMousemove:e[2]||(e[2]=function(){return t.mouseMove&&t.mouseMove.apply(t,arguments)}),onMouseup:e[3]||(e[3]=function(){return t.release&&t.release.apply(t,arguments)}),onTouchmove:e[4]||(e[4]=function(){return t.touchMove&&t.touchMove.apply(t,arguments)})},null,34)])})),Ot=Math.abs,gt=12,jt=Object(n["f"])({data:function(){return y({canvasHeight:0,canvasWidth:0,abovePoint:!1,moving:!1})()},computed:{coefs:function(){return this.$store.state.coefs},spanVert:function(){return gt/this.canvasWidth*this.canvasHeight},unitsSize:function(){return this.canvasWidth/gt/2.5},xOrigin:function(){return.5*this.canvasWidth},yOrigin:function(){return.5*this.canvasHeight},xCoordScale:function(){return this.canvasWidth/gt},yCoordScale:function(){return this.canvasHeight/this.spanVert},xValue:function(){return this.coefs.a13},yValue:function(){return this.coefs.a23}},methods:{xCoord:function(t){return this.xOrigin+t*this.xCoordScale},yCoord:function(t){return this.yOrigin-t*this.yCoordScale},resize:function(){var t=this.$refs.canvas,e=t.parentNode,i=e.clientWidth,n=e.clientHeight,o=2*i,a=2*n;t.width=o,t.height=a,t.style.width="".concat(i),t.style.height="".concat(n,"px"),this.canvasWidth=o,this.canvasHeight=a,this.draw()},draw:function(){var t=this.$refs.canvas.getContext("2d");t&&(t.clearRect(0,0,this.canvasWidth,this.canvasHeight),x(t,{canvasHeight:this.canvasHeight,canvasWidth:this.canvasWidth,xOriginRatio:.5,yOriginRatio:.5,spanHoriz:gt,spanVert:this.spanVert,unitsSize:this.unitsSize}),t.lineWidth=3,H(t,"yellow",this.xValue,this.yValue,10,this))},isAbovePoint:function(t,e){return Ot(t-this.xCoord(this.xValue))<10&&Ot(e-this.yCoord(this.yValue))<10},grab:function(t,e){this.isAbovePoint(2*t,2*e)&&(this.moving=!0)},move:function(t,e){var i=2*t,n=2*e,o=(i-this.xOrigin)/this.xCoordScale,a=(this.yOrigin-n)/this.yCoordScale;Ot(T(o)-o)<.2&&Ot(T(a)-a)<.2&&(o=T(o),a=T(a)),this.$store.dispatch("setLinearCoefs",{x:o,y:a}),this.draw()},release:function(){this.moving=!1},mouseDown:function(t){this.grab(t.offsetX,t.offsetY)},mouseMove:function(t){this.moving?this.move(t.offsetX,t.offsetY):this.isAbovePoint(2*t.offsetX,2*t.offsetY)?this.abovePoint=!0:this.abovePoint=!1},touchMove:function(t){if(1===t.touches.length){var e=Object(j["a"])(t.touches,1),i=e[0];t.preventDefault();var n=this.$refs.canvas.getBoundingClientRect(),o=n.left,a=n.top,s=this.$refs.canvas,r=s.clientWidth,c=s.clientHeight;this.move(w(i.clientX-o,0,r),w(i.clientY-a,0,c))}}},mounted:function(){this.resize(),window.addEventListener("resize",this.resize)},beforeUnmount:function(){window.removeEventListener("resize",this.resize)}}),yt=jt;i("0f04");yt.render=pt,yt.__scopeId="data-v-cc59d44a";var xt=yt,wt=Object(n["f"])({components:{EquationDisplay:q,QuadraticFormEditor:_,LinearEditor:xt,MatrixDisplay:ct,ShapeDisplay:vt}}),Ct=wt;i("b68e");Ct.render=b,Ct.__scopeId="data-v-61bcaf03";var Tt=Ct,St=Object(n["o"])("data-v-9fce35ee"),Mt=St((function(t,e,i,o,a,s){return Object(n["h"])(),Object(n["c"])("canvas",{ref:"canvas",class:"conic-plot",onWheel:e[1]||(e[1]=function(){return t.onWheel&&t.onWheel.apply(t,arguments)})},null,544)})),Wt=i("5530");function Ht(t,e,i,n,o){return function(a,s){return a=(a-e)*n,s=(i-s)*o,t.a11*a*a+t.a12*a*s*2+t.a22*s*s+t.a13*a+t.a23*s+t.a33}}function zt(t,e){for(var i,n,o,a,s=e.xOrigin,r=e.yOrigin,c=e.resolution,h=e.spanHoriz/e.canvasWidth,u=e.spanVert/e.canvasHeight,f=Dt(c),d=new Path2D,l=Ht(t,s,r,h,u),v=0;v<e.canvasHeight;v+=c){i=l(0,v)>=0,o=l(0,v+c)>=0;for(var m=0;m<e.canvasWidth;m+=c){n=l(m+c,v)>=0,a=l(m+c,v+c)>=0;var b=i<<3|n<<2|a<<1|o;f[b](m,v,d,l),i=n,o=a}}return d}function Dt(t){function e(e,i,n){var o=e,a=i+t,s=n(e,i);return i+(a-i)*-s/(n(o,a)-s)}function i(e,i,n){var o=e+t,a=i,s=n(e,i);return e+(o-e)*-s/(n(o,a)-s)}for(var n={0:function(){},1:function(n,o,a,s){a.moveTo(n,e(n,o,s)),a.lineTo(i(n,o+t,s),o+t)},2:function(n,o,a,s){a.moveTo(n+t,e(n+t,o,s)),a.lineTo(i(n,o+t,s),o+t)},3:function(i,n,o,a){o.moveTo(i,e(i,n,a)),o.lineTo(i+t,e(i+t,n,a))},4:function(n,o,a,s){a.moveTo(i(n,o,s),o),a.lineTo(n+t,e(n+t,o,s))},6:function(e,n,o,a){o.moveTo(i(e,n,a),n),o.lineTo(i(e,n+t,a),n+t)},7:function(t,n,o,a){o.moveTo(i(t,n,a),n),o.lineTo(t,e(t,n,a))},5:function(n,o,a,s){a.moveTo(i(n,o,s),o),a.lineTo(n,e(n,o,s)),a.moveTo(n+t,e(n+t,o,s)),a.lineTo(i(n,o+t,s),o+t)},10:function(n,o,a,s){a.moveTo(n,e(n,o,s)),a.lineTo(i(n,o+t,s),o+t),a.moveTo(i(n,o,s),o),a.lineTo(n+t,e(n+t,o+t,s))}},o=0,a=[8,9,11,12,13,14,15];o<a.length;o++){var s=a[o];n[s]=n[15-s]}return n}var Pt=Object(n["f"])({animation:0,previousTouches:null,data:function(){return{}},computed:{path:function(){var t=this.$store.state,e=t.coefs,i=t.dimensions;return zt(e,Object(Wt["a"])(Object(Wt["a"])({},i),{},{spanVert:this.$store.getters.spanVert,xOrigin:i.canvasWidth*i.xOriginRatio,yOrigin:i.canvasHeight*i.yOriginRatio,resolution:i.canvasWidth*i.resolutionRatio,unitsSize:this.$store.getters.unitsSize}))},canvasWidth:function(){return this.$store.state.dimensions.canvasWidth},canvasHeight:function(){return this.$store.state.dimensions.canvasHeight}},methods:{resize:function(){var t=this.$refs.canvas;t&&(t.width=t.clientWidth,t.height=t.clientHeight,this.$store.commit("setDimensions",{width:t.clientWidth,height:t.clientHeight}))},draw:function(){var t=this.$refs.canvas,e=t.getContext("2d");e&&(e.clearRect(0,0,this.canvasWidth,this.canvasHeight),x(e,Object(Wt["a"])(Object(Wt["a"])({},this.$store.state.dimensions),{},{spanVert:this.$store.getters.spanVert,unitsSize:this.$store.getters.unitsSize})),e.beginPath(),e.strokeStyle="white",e.lineWidth=3,e.stroke(this.path)),this.animation=requestAnimationFrame(this.draw)},distance:function(t,e,i,n){return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-n,2))},onWheel:function(t){t.preventDefault(),console.log(t.deltaY),this.$store.commit("scale",t.deltaY/1e3+1)},onTouchOrMove:function(t){if(2===t.touches.length){t.preventDefault();var e=Object(j["a"])(t.touches,2),i=e[0],n=e[1],o=this.distance(i.clientX,i.clientY,n.clientX,n.clientY);null===this.previousDist?this.previousDist=o:this.$store.commit("scale",(o-this.previousDist)/200+1)}},ontouchend:function(){this.previousDist=null}},mounted:function(){this.resize(),window.addEventListener("resize",this.resize),this.animation=requestAnimationFrame(this.draw)},beforeUnmount:function(){cancelAnimationFrame(this.animation),window.removeEventListener("resize",this.resize)}}),$t=Pt;i("35e8");$t.render=Mt,$t.__scopeId="data-v-9fce35ee";var Vt=$t,_t=Object(n["f"])({components:{Sidebar:Tt,ConicPlot:Vt},computed:{defaultSidebarWidth:function(){return Math.max(.45*window.innerWidth,400)}}});i("d4eb"),i("46cf");_t.render=u,_t.__scopeId="data-v-237ad819";var At=_t,kt=(i("4160"),i("b64b"),i("159b"),i("5502"));console.log(T(10/Math.max(window.innerWidth,window.innerHeight),3));var Rt=Object(kt["a"])({state:{dimensions:{canvasWidth:1e3,canvasHeight:1e3,xOriginRatio:.5,yOriginRatio:.5,spanHoriz:10,resolutionRatio:.01},coefs:{a11:-1,a12:1,a22:1,a13:2,a23:3,a33:0}},getters:{spanVert:function(t){return t.dimensions.spanHoriz/t.dimensions.canvasWidth*t.dimensions.canvasHeight},unitsSize:function(t){return t.dimensions.canvasWidth/t.dimensions.spanHoriz/4}},mutations:{setResolution:function(t,e){t.dimensions.resolutionRatio=e},setDimensions:function(t,e){var i=e.width,n=e.height;t.dimensions.canvasWidth=i,t.dimensions.canvasHeight=n},setCoefs:function(t,e){Object.keys(e).forEach((function(i){t.coefs[i]=e[i]}))},scale:function(t,e){t.dimensions.spanHoriz=w(t.dimensions.spanHoriz*e,1,100)}},actions:{setMatrix:function(t,e){var i=e.a11,n=e.a22;t.commit("setCoefs",{a11:i,a22:n})},setFirst:function(t,e){var i=e.a11,n=e.a12;t.commit("setCoefs",{a11:i,a12:n})},setSecond:function(t,e){var i=e.a22,n=e.a12;t.commit("setCoefs",{a12:n,a22:i})},setA12:function(t,e){t.commit("setCoefs",{a12:e})},setLinearCoefs:function(t,e){var i=e.x,n=e.y;t.commit("setCoefs",{a13:i,a23:n})},setFreeTerm:function(t,e){t.commit("setCoefs",{a33:e})}}});Object(n["b"])(At).use(Rt).mount("#app")},d020:function(t,e,i){},d4eb:function(t,e,i){"use strict";i("692d")},dd7e:function(t,e,i){},df88:function(t,e,i){},fa3b:function(t,e,i){"use strict";i("dd7e")}});
//# sourceMappingURL=app.453b2aae.js.map