webpackJsonp([104],{348:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function e(t,n,o){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in a)return a.value;var i=a.get;if(void 0!==i)return i.call(o)};t.Instance=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.init.apply(e,arguments),e.info={CONCLUSION:"比较身高可以按照从高到低，也可以从低到高",CONCLUSIONAlign:"center",TITILE:"排队比身高",ISOFFSET:!0},e}return r(t,e),i(t,[{key:"frame0",value:function(){}},{key:"frame1",value:function(){function e(){for(var e=0;e<w.length;e++)p["p"+w[e]].moveX=f.x+122*e,p["p"+w[e]].moveY=595.55-p["p"+w[e]].height}function t(){function e(){o.alpha=.5}function t(){if(a.hitTest(o)){NBDrag.removeDrag(u),NBDrag.removeDrag(c);var r=p[this.name+"Clone"];r.alpha=0,TweenMax.to(a,.3,{x:r.x,y:r.y,onComplete:function(){n(),u.removeEventListener(NBDrag.event.STOP_DRAG,t),u.removeEventListener(NBDrag.event.START_DRAG,e),c.removeEventListener(NBDrag.event.STOP_DRAG,t),c.removeEventListener(NBDrag.event.START_DRAG,e)}})}else TweenMax.to(a,.3,{x:a.oriPos.x,y:a.oriPos.y,onComplete:function(){NBDrag.addDrag(a)}});o.alpha=0}this.oriPos={x:this.x,y:this.y};var o=p[this.name+"Clone"],a=this;this.on(NBDrag.event.START_DRAG,e),this.on(NBDrag.event.STOP_DRAG,t)}function n(){var e=void 0;e=u.x==f.x,e||(v.x-=200),instance.resetBtn.y!==instance.resultBtn.y&&instance.resetBtnEnable(!0),v.scale.x=v.scale.y=h.width=0,v.alpha=h.alpha=1,v.y=h.y=u.y+u.height,s.visible=f.visible=!1,TweenMax.to(x,.5,{alpha:0}),y.alpha=1,TweenMax.to(y,.5,{x:y.x-y.width-30,delay:.5,onComplete:function(){x.alpha=0,y.top.oriY=y.top.y,TweenMax.to(y.top.scale,.5,{x:1,y:1,onComplete:function(){y.top.addEventListener(TouchEvent.TAP,o)}})}}),TweenMax.to(h,.5,{width:1280}),TweenMax.to(v.scale,.5,{x:1,y:1,ease:Back.easeOut.config(4)})}function o(){TweenMax.to(h,.5,{width:0}),TweenMax.to(v.scale,.5,{x:0,y:0}),TweenMax.to(y.top.scale,.5,{x:.8,y:.8,onComplete:function(){TweenMax.to(y,.5,{x:y.x+y.width,onComplete:function(){y.alpha=0}})}}),TweenMax.to(T,.5,{x:T.x+T.width/2,onComplete:function(){TweenMax.to(T,.5,{x:0-T.width,onComplete:function(){T.alpha=0,(new TimelineMax).to(u,.5,{x:u.moveX,y:u.moveY}).to(c,.5,{x:c.moveX,y:c.moveY,onComplete:function(){for(var e=2;e<w.length;e++)a(w[e],e);g.alpha=0,TweenMax.to(g,.5,{alpha:1,delay:1.25,onComplete:function(){r()}})}},"-=0.5")}})}})}function a(e,t){p["p"+e].alpha=1,TweenMax.to(p["p"+e],.5,{x:p["p"+e].moveX,delay:.25*t,y:p["p"+e].moveY})}function r(){d=c.parent.getChildIndex(p.p6);for(var e=1;e<w.length+1;e++)i.apply(p["p"+e])}function i(){var t=this;NBDrag.addDrag(t),t.on(NBDrag.event.START_DRAG,function(){t.parent.setChildIndex(t,d)}),t.on(NBDrag.event.STOP_DRAG,function(){for(var n=[],o=0;o<w.length;o++){var a=p["p"+w[o]];if(a.aryIndex=o,t!==a&&Math.abs(a.x-a.moveX)<.1&&Math.abs(a.y-a.moveY)<.1&&t.hitTest(a)){var r={dis:Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2),eq:a};n.push(r)}}if(n.length>0){n.sort(function(e,t){return e.dis-t.dis});var i=n[0].eq;w[t.aryIndex]=Number(i.name.substr(1,1)),w[i.aryIndex]=Number(t.name.substr(1,1)),e(),NBDrag.removeDrag(t),NBDrag.removeDrag(i),TweenMax.to(t,.3,{x:t.moveX,y:t.moveY}),TweenMax.to(i,.3,{x:i.moveX,y:i.moveY,onComplete:function(){NBDrag.addDrag(i),NBDrag.addDrag(t),l()}})}else NBDrag.removeDrag(t),TweenMax.to(t,.5,{x:t.moveX,y:t.moveY,onComplete:function(){NBDrag.addDrag(t),l()}})})}function l(){var e=w.toString();if("1,2,3,4,5,6,7"===e||"7,6,5,4,3,2,1"===e){for(var t=1;t<w.length;t++)NBDrag.removeDrag(p["p"+t]);m.favour.alpha=0,m.favour.scale.x=.5,m.favour.scale.y=.5,TweenMax.to(g,.5,{alpha:0}),TweenMax.to(m,.5,{alpha:1,onComplete:function(){TweenMax.to(m.favour,.5,{alpha:1}),TweenMax.to(m.favour,.5,{rotation:Math.PI/4,onComplete:function(){TweenMax.to(m.favour,.5,{rotation:0})}}),TweenMax.to(m.favour.scale,.5,{x:1,y:1})}})}}var p=this,u=p.p5,c=p.p7,f=p.p5Clone,s=p.p7Clone,v=p.qLogo,h=p.line,x=p.tip0,y=p.tip1,g=p.tip2,m=p.completeTip,T=p.platform,d=0,w=[5,7,2,3,4,1,6];f.alpha=0,s.alpha=0,m.alpha=0;for(var D=2;D<w.length;D++)p["p"+w[D]].alpha=0;y.alpha=0,g.alpha=0,NBDrag.addDrag(u),NBDrag.addDrag(c),t.apply(u),t.apply(c),e(),v.alpha=0,h.alpha=0}},{key:"start",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"start",this).call(this),this.gotoStep("frame1")}}]),t}(nb.stem.STEMMain)}});