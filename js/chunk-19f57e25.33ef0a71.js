(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f57e25"],{"0ab1":function(t,e,n){t.exports=n.p+"img/banner2.152aa118.jpg"},"15ed":function(t,e,n){"use strict";n("e914")},"1d65":function(t,e,n){},"3fb4":function(t,e,n){},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),a=n("23cb"),r=n("50c4");t.exports=function(t){var e=i(this),n=r(e.length),s=arguments.length,o=a(s>1?arguments[1]:void 0,n),c=s>2?arguments[2]:void 0,l=void 0===c?n:a(c,n);while(l>o)e[o++]=t;return e}},"843e":function(t,e,n){"use strict";n("1d65")},bc13:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("bg-bubble"),n("section",{staticClass:"content"},[n("div",{staticClass:"menu"},[n("div",{staticClass:"box left"},[n("banner-boom")],1),n("div",{staticClass:"right"},[n("div",{staticClass:"box"},[n("div",{staticClass:"img img1",on:{click:function(e){return t.$router.push("/learning")}}},[n("span",[t._v("Learning")])])]),n("div",{staticClass:"box"},[n("div",{staticClass:"img img2",on:{click:function(e){return t.$router.push("/tools")}}},[n("span",[t._v("Tools")])])])])]),n("div",{staticClass:"info",on:{mouseover:function(e){return t.turnDeg(180)},mouseleave:function(e){return t.turnDeg(0)}}},[n("div",{ref:"card",staticClass:"wrap"},[n("div",{staticClass:"box front"},[t._v("About Me")]),n("div",{staticClass:"box back"},[n("p",[t._v("Name：Josef-Muller")]),n("p",{directives:[{name:"copy",rawName:"v-copy",value:"572680934@qq.com",expression:"'572680934@qq.com'"}],staticClass:"pointer",attrs:{title:"点击复制邮箱地址"}},[t._v("E-mail：572680934@qq.com（复制）")])])])])])],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bubble"},[n("canvas",{attrs:{id:"bubble"}},[t._v("你的浏览器不支持canvas，请跟换其他浏览器试一试")]),t._t("default")],2)},s=[];n("cb29");function o(t){t.width=document.documentElement.clientWidth||document.body.clientWidth,t.height=document.documentElement.clientHeight||document.body.clientHeight}function c(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.canvas=document.getElementById(t),a=this.ctx=i.getContext("2d"),r=n,s=[],c=function(t){Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]},set:function(e){r[t]=e}})};for(var l in r)c(l);this.fullScreen=function(){o(i),window.addEventListener("resize",(function(){return o(i)}),!1)},this.push=function(t,e){s.push({fn:t,arrArgs:e||[]})},this._update=function(){a.clearRect(0,0,i.width,i.height);for(var t=0;t<s.length;t++){var n=s[t];n.fn.apply(e,n.arrArgs)}},this._init=function(){window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()},this.animate=function(){requestAnimationFrame(e.animate),e._update()},this._init()}var l={name:"bubble",data:function(){return{mouse:{x:-1,y:-1}}},methods:{effect:function(t){var e=t.ctx,n=t.arrAllCycle;e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowColor="#87CEEB",e.shadowBlur=10;for(var i=0;i<n.length;i++)for(var a=n[i],r=0;r<a.length;r++){var s=a[r];e.beginPath(),e.arc(s.x,s.y,s.r,0,2*Math.PI),e.closePath(),e.fillStyle=s.fillStyle,e.fill(),s.next()}}},mounted:function(){var t=this,e=this;function n(t,e,n){var i=this;this.x=t.x,this.y=t.y,this.r=t.r,this.speed=t.speed,this.distance=t.distance,this.fillStyle="rgba(255, 255, 255, ".concat([.1,.3,.5,.7][Math.floor(4*Math.random())],")"),this.next=function(){i.y-=i.speed,i.distance-=i.speed,i.distance<0&&e&&e.apply(i,n||[])}}function i(t,e,n,i,a,r){return{x:e||Math.random()*t.width,y:n||t.height+10+50*Math.random(),r:i||5*Math.random()+1,speed:a||.5*Math.random()+.25,distance:r||(Math.random()>.7?600*Math.random()+100:200*Math.random()+100)}}function a(t,e,a,r){var s=e.x,o=e.y,c=e.r,l=e.speed,u=e.distance;return new n(i(t,s,o,c,l,u),a,r)}var r=new c("bubble",{arrAllCycle:[]});r.fullScreen(),document.addEventListener("mousemove",(function(e){var n=e||window.event;t.mouse={x:n.clientX,y:n.clientY}}));for(var s=[],o=0,l=25;o<l;o++)s[o]=a(r.canvas,{},(function(){var t=i(r.canvas);for(var e in t)this[e]=t[e]}));r.arrAllCycle.push(s);for(var u=[],f=0,d=5;f<d;f++)u[f]=a(r.canvas,{},(function(){var t=i(r.canvas,e.mouse.x,e.mouse.y,1,1.5,200*Math.random()+100);for(var n in t)this[n]=t[n]}));r.arrAllCycle.push(u),r.push(this.effect,[r]),r.animate()}},u=l,f=(n("843e"),n("2877")),d=Object(f["a"])(u,r,s,!1,null,"053da6a5",null),h=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boom"},[n("div",{ref:"boom",staticClass:"wrap"},[n("img",{ref:"img",staticClass:"banner",attrs:{src:t.imgSrc}}),n("div",{staticClass:"wrap-btn"},[n("Icon",{staticClass:"left",attrs:{"icon-class":"arrow_left"},on:{click:function(e){return t.switchImg(t.index-1)}}}),n("Icon",{staticClass:"right",attrs:{"icon-class":"arrow_rigth"},on:{click:function(e){return t.switchImg(t.index+1)}}})],1),n("ul",{staticClass:"wrap-circle"},t._l(t.arrImg,(function(e,i){return n("li",{key:i,class:{active:i==t.index},on:{click:function(e){return t.switchImg(i)}}})})),0),n("ul",{ref:"slice",staticClass:"slice"})])])},p=[];n("99af"),n("fb6a"),n("4de4");function v(t,e,n){var i=10;return n&&n["speed"]&&(i=n["speed"]),i=Math.abs(i),i=e-t>=0?i:-i,i=i>0?Math.ceil(i):Math.floor(i),Math.abs(e-t)<=Math.abs(i)?e:t+i}function b(t,e,n,i){var a=this,r=1e3,s=60;e&&(e["time"]&&(r=e["time"])&&delete e["time"],e["fps"]&&(s=e["fps"])&&delete e["fps"]);var o=1e3/s;clearInterval(t.timer),t.timer=setInterval((function(){var s=!0;for(var c in e){var l=void 0,u=e[c];if(r<=0)l=u;else{var f=t.currentStyle?t.currentStyle[c]:getComputedStyle(t,null)[c];l="opacity"==c?Math.round(100*parseFloat(f)):parseInt(f)}var d=v(l,u,{speed:Math.abs(u-l)/r*o});"opacity"==c?(t.style.opacity=d/100,t.style.filter="alpha(opacity:".concat(d,")")):t.style[c]="".concat(d,"px"),l!=u&&(s=!1)}s&&(clearInterval(t.timer),n&&n.apply(a,i||[])),r-=o}),o)}function g(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t,null)[e]}function w(t,e){if(t.length)for(var n=0;n<t.length;n++)w(t[n],e);else if(2==arguments.length)for(var i in e)w(t,i,e[i]);else switch(arguments[1].toLowerCase()){case"opacity":t.style.filter="alpha(opacity:"+arguments[2]+")",t.style.opacity=arguments[2]/100;break;default:t.style[arguments[1]]="number"==typeof arguments[2]?arguments[2]+"px":arguments[2];break}}var y={name:"Boom",data:function(){return{firstTimer:null,timer:null,index:0,arrImg:[n("bcda"),n("0ab1")],arrSlice:[]}},methods:{switchImg:function(t){var e=this;this.swtichEffect(),this.index="number"==typeof t?t:++this.index,this.index==this.arrImg.length&&(this.index=0),-1==this.index&&(this.index=this.arrImg.length-1),clearInterval(this.timer),this.timer=setInterval((function(){e.switchImg()}),6666)},swtichEffect:function(){for(var t=this.$refs["img"].naturalWidth,e=this.$refs["img"].naturalHeight,n=3,i=3,a=parseInt(g(this.$refs["boom"],"width")),r=parseInt(g(this.$refs["boom"],"height")),s=a/2,o=r/2,c=0;c<n;c++){void 0==this.arrSlice[c]&&(this.arrSlice[c]=[]);for(var l=0;l<i;l++){var u,f={top:e*c/n,left:t*l/i},d={top:r*c/n,left:a*l/i};void 0==this.arrSlice[c][l]?(u=document.createElement("div"),this.arrSlice[c][l]=u,this.$refs["slice"].appendChild(u)):u=this.arrSlice[c][l],w(u,{width:"".concat(100/i,"%"),height:"".concat(100/n,"%"),position:"absolute",background:"url(".concat(this.imgSrc,") ").concat(-f.left,"px ").concat(-f.top,"px"),left:"".concat(d.left,"px"),top:"".concat(d.top,"px"),"border-radius":"5px",opacity:100,display:"block"});var h=(d.left+a/(2*n)-s)*(2*Math.random()+1)+s-a/(2*n)-s,m=(d.top+r/(2*i)-o)*(2*Math.random()+1)+o-r/(2*i),p={left:parseInt(h),top:parseInt(m),opacity:0,time:950*Math.random()+50};b(u,p,w,[u,{display:"none"}])}}}},computed:{imgSrc:function(){return this.arrImg[this.index]}},mounted:function(){var t=this;this.firstTimer=setTimeout((function(){t.switchImg()}),6666)},beforeDestroy:function(){clearTimeout(this.firstTimer),clearInterval(this.timer),this.firstTimer=null,this.timer=null}},x=y,C=(n("bddb"),Object(f["a"])(x,m,p,!1,null,"686bb9f1",null)),I=C.exports,M={name:"HelloWorld",components:{bgBubble:h,bannerBoom:I},data:function(){return{}},methods:{turnDeg:function(t){var e=this.$refs["card"];clearTimeout(e.timer),e.timer=setTimeout((function(){e.style["transform"]="rotateY(".concat(t,"deg)")}),300)}},mounted:function(){}},S=M,_=(n("15ed"),Object(f["a"])(S,i,a,!1,null,"676a0b59",null));e["default"]=_.exports},bcda:function(t,e,n){t.exports=n.p+"img/banner1.335c4c6e.jpg"},bddb:function(t,e,n){"use strict";n("3fb4")},cb29:function(t,e,n){var i=n("23e7"),a=n("81d5"),r=n("44d2");i({target:"Array",proto:!0},{fill:a}),r("fill")},e914:function(t,e,n){}}]);