webpackJsonp([89],{346:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Instance=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,a)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(a)},c=n(676),u=a(c),p=n(857),h=a(p);t.Instance=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.init.apply(e,arguments),e.info={CONCLUSION:"植物是活的，是有生命的",CONCLUSIONAlign:"center",TITILE:"草莓培养过程",ISOFFSET:!0},e}return i(t,e),s(t,[{key:"frame0",value:function(){u.default.apply(this)}},{key:"frame1",value:function(){function e(){s();var e=this.name;L["new"+e]&&(L["new"+e].currentFrame=1),g(!1),this.interactive=!0}function t(){s(),r(),re.x=oe,A.scale.x=A.scale.y=.75,TweenMax.killTweensOf([re,A.scale]),TweenMax.to([re,A],1,{alpha:0})}function n(){var e=this,t=+this.name.substr(-1,1);if(this.visible=!1,$=X.length,t===$){X.length+=1,this.alpha=0,this.interactive=!1;var n=this.name+"Target0";_[n].interactive=!1,_[n].alpha=0,this.removeSimpleDrag();var a="anm"+this.name,r=this;l(M[a],r),TweenMax.to(j,1,{y:"-=30",delay:2,onComplete:function(){g(!0),e.interactive=!1}});var i=this.name;L["new"+i].currentFrame=1}else{o(W,X.length),this.x=this.startX,this.y=this.startY;var s=this.name;L["new"+s].currentFrame=0,this.visible=!0,g(!0)}if(3===$){ae=!0;var c=E(15,22,!0);TweenMax.to([re,A],0,{alpha:1,delay:2}),TweenMax.to(re,.4,{x:"+=50",yoyo:!0,ease:Sine.easeIn,repeat:-1,delay:2}),TweenMax.to(A.scale,.4,{x:1.1,y:1.1,yoyo:!0,ease:Sine.easeIn,repeat:-1,delay:2}),c&&p()}}function a(){F.txt.text=F.startText,H.x=H.dargStartX,H.y=H.dargStartY,A.x=A.dargStartX,A.y=A.dargStartY}function r(){F.startText=F.txt.text,H.dargStartX=H.x,H.dargStartY=H.y,A.dargStartX=A.x,A.dargStartY=A.y}function o(e,t){instance.tip.showTip(e[t])}function i(e,t){instance.tip.showTip(e+"到"+t+"度是比较适合的温度呦")}function s(){instance.tip.hideTip()}function l(e,t){instance.resetBtn.y!==instance.resultBtn.y&&instance.resetBtnEnable(!0),e.interactive=!1;var n=e.totalFrames;e.alpha=1,e.loop=!1;var a=.05*e.totalFrames;TweenMax.to(e,a,{currentFrame:n,onComplete:function(){e.interactive=!1,t.alpha=0,"Wrap3"===t.name.substr(7)?(e.currentFrame=e.totalFrames,e.alpha=1,e.interactive=!0,I.startX=I.x,I.startY=I.y):GlobalEffect.fadeOut(e)}})}function c(){this.resetSimpleDrag()}function u(){this.position.x=this.startX,this.position.y=this.startY;var e=this.name;L["new"+e].currentFrame=0,g(!0)}function p(){ae=!1,G.alpha=1;var e=new TimelineMax({onComplete:f}),t=[];t.push(TweenMax.to(L,1,{y:"+=300",alpha:0})),t.push(TweenMax.to(_,1,{y:"+=300",alpha:0})),t.push(TweenMax.to(G,1,{y:"-=300"})),e.add(t)}function f(){G.isPlay(!0),TweenMax.to(R,1,{alpha:1}),G.on(G.event.ON_STOPATNODE,v),G.addEventListener(G.event.ON_NOWPLAYTIME,m),G.addEventListener(G.event.ON_COMPLETE,O)}function v(e){switch(q=e){case 0:ne=!0,TweenMax.to(j,1,{y:"-=30"}),NBDrag.addDrag(I),I.addEventListener(NBDrag.event.STOP_DRAG,d);break;case 1:case 2:T(),ne=!0}}function d(){this.hitTest(N)?(I.x=I.startX,I.y=I.startY):(ee=1,I.removeEventListener(NBDrag.event.STOP_DRAG,d),GlobalEffect.fadeOut(this),TweenMax.to(b,1,{alpha:1,y:"+= 450",delay:2,onComplete:function(){C.alpha=1,C.play(),T()}}))}function T(){TweenMax.to(C,3,{currentFrame:Z,alpha:1,onComplete:function(){TweenMax.to(C,1,{alpha:0}),TweenMax.to(j,1,{y:"-=32",onComplete:function(){ae=!0,re.alpha=1,A.alpha=1;var e=A.toGlobal({x:0,y:0}),t=M.toLocal(e).y;re.y=t,TweenMax.to(re,.4,{x:"+=50",yoyo:!0,ease:Sine.easeIn,repeat:-1,delay:-1}),TweenMax.to(A.scale,.4,{x:1.1,y:1.1,yoyo:!0,ease:Sine.easeIn,repeat:-1,delay:-1})}}),C.currentFrame=0}})}function m(e){TweenMax.to(R,1.2,{currentFrame:20*e*6+2})}function y(){B.mask=H.children[0],V=A.position.y,J=H.position.y;var e={x:A.x,y:-180,width:1,height:180};NBDrag.addDrag(A,e),A.addEventListener(NBDrag.event.DRAG_MOVE,x),A.addEventListener(NBDrag.event.START_DRAG,t),A.addEventListener(NBDrag.event.STOP_DRAG,w),F.txt.text=23}function x(){H.y=J-(V-A.position.y),F.txt.text=23+parseInt(100*(V-A.position.y)/180)+6}function w(){if(ae){var e=z[z.length-1][0],t=z[z.length-1][1];if(!z[z.length-1])return;if(E(e,t)&&3===$)switch(K){case 0:p(),z.pop(),K++,ne=!1;break;default:if(1===ee&&ne){G.afterStopPlay(),ae=!1,K++,z.pop(),ne=!1;break}}}else a(),X.length<=3&&o(W,X.length)}function E(e,t,n){var a=+M.thermometer.txt.text;return a>=e&&a<=t||(n||i(e,t),!1)}function O(){G.removeEventListener(G.event.ON_NOWPLAYTIME,m),TweenMax.to(R,1,{currentFrame:119}),G.removeEventListener(G.event.ON_COMPLETE,O),TweenMax.to(U,1,{alpha:0}),ae=!1,G.flower.line0.rotation=0,G.flower.line1.rotation=.2}function g(e){for(var t=0;t<_.children.length;t++)_.children[t]&&(_.children[t].interactive=e)}var M=this,_=M.toolContainer,b=M.sunWindow,N=M.flowpot,L=M.circleContainer,P=M.anmsoil0,S=M.anmseed1,D=M.anmwater2,C=M.anmwater,I=M.anmplasticWrap3,F=M.thermometer,A=F.tmpHotArea,k=F.temShow,B=k.temGrow,H=k.temMask,G=M.timeline,R=M.openFlower,U=M.showText,Y=U.textMask,j=U.textTips;U.mask=Y.children[0];var X=[],W=["我们要先把土壤装到花盆里哦","要先把种子撒在土壤里哦","给种子喷点水吧","为种子盖上保鲜膜吧"],V=0,J=0,q=0,z=[[4,40],[5,10],[20,30],[15,22]],K=0,Q=M.wrap,Z=C.totalFrames,$=0,ee=0,te=_.plasticWrap3.background,ne=!1,ae=!1,re=M.pointer,oe=re.x,ie=M.reloadBtn;!function(){P.alpha=0,S.alpha=0,D.alpha=0,C.alpha=0,Q.alpha=0,Q.interactive=!1,b.alpha=0,I.alpha=0,R.alpha=0,y(),(0,h.default)(G),G.littleFlowerHide(),G.flower.interactive=!1,G.interactive=!1,G.progressBar.interactive=!1,G.alpha=0,A.alpha=0,s(),te.alpha=0,re.alpha=0,ie.visible=!1}();for(var se=0;se<_.children.length;se++){var le=_.children[se];"Target0"!==le.name.substr(-7)&&(le.addEventListener(nb.simpleDrag.event.REACH_TARGET,n),le.addEventListener(nb.simpleDrag.event.FINISH_DRAG,c),le.addEventListener(nb.simpleDrag.event.START_DRAG,e),le.addEventListener(nb.simpleDrag.event.NOT_REACH_TARGET,u),nb.simpleDrag(le),le.startX=le.position.x,le.startY=le.position.y)}}},{key:"start",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"start",this).call(this),this.gotoStep("frame1")}}]),t}(nb.stem.STEMMain)},676:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(){TweenMax.to(a,.4,{y:"-=200",onComplete:function(){TweenMax.to(a,.8,{y:1400,onComplete:function(){r.removeEventListener(TouchEvent.TOUCH_END,t),instance.gotoStep(e.frame||"frame1")}})}})}e=e||{frame:"frame1"};var n=this.frameRoot,a=n.background,r=a.startButton;TweenMax.to(r.scale,.5,{x:1.2,y:1.2,yoyo:!0,repeat:-1}),r.addEventListener(TouchEvent.TOUCH_END,t)}},857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(){return(20-40*Math.random())/180*Math.PI}function n(e){x=!1,E.pause(),O.pause(),g.pause(),this.addEventListener(TouchEvent.TOUCH_MOVE,a),this.addEventListener(TouchEvent.TOUCH_END,r),this.addEventListener(TouchEvent.TOUCH_END_OUTSIDE,r),a(e)}function a(e){c.toLocal(e.data.global);i(!0)}function r(e){x=!0;var t=c.toLocal(e.data.global),n=(t.x-h.x)/h.width;y=n,l.isPlay(!0),o(),this.removeListener(TouchEvent.TOUCH_MOVE,a),this.removeListener(TouchEvent.TOUCH_END,r),this.removeListener(TouchEvent.TOUCH_END_OUTSIDE,r)}function o(){for(var e=0;e<u.length;e++)if(v.x<=u[e]){w=e;break}}function i(e){if(M){if(y>1)return E.pause(),O.pause(),g.pause(),void l.emit(l.event.ON_COMPLETE);e?(f.scale.x=y,v.x=y*h.width+h.x,h.parent.updateTransform()):(E.pause(),O.pause(),g.pause())}}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=this||e,c=l,u=[],p=[],h=l.progressBar,f=c.bgMask.getChildAt(0),v=l.flower,d=/^stop.+/,T=/^f[0-9]+/,m=l.parent,y=0,x=void 0===s.isAutoPlay||s.isAutoPlay,w=0;h.mask=f,f.scale.x=0;var E=TweenMax.to(v,2,{ease:Linear.easeNone,rotation:2*Math.PI,repeat:-1}),O=void 0,g=void 0,M=!1;E.pause(),v.line1&&v.line1&&(O=TweenMax.to(v.line0,1,{ease:Linear.easeNone,rotation:2*Math.PI,repeat:-1}),g=TweenMax.to(v.line1,4,{ease:Linear.easeNone,rotation:2*Math.PI,repeat:-1}),O.pause(),g.pause());for(var _=0;_<l.children.length;++_){var b=l.children[_];b.name&&d.test(b.name)&&u.push(b.x),b.name&&T.test(b.name)&&(b.rotation=_%2==0?t():t()+Math.PI,b.scale={x:.5,y:.5},p.push(b))}m.on("update",function(){x&&M&&(y+=.001,i(!0)),y<0?y=0:y>1&&(y=1),v.x>=u[w]&&x&&(i(!1),x=!1,l.emit(l.event.ON_STOPATNODE,w),w++),l.emit(l.event.ON_NOWPLAYTIME,y)}),h.addEventListener(TouchEvent.TOUCH_BEGIN,n),v.addEventListener(TouchEvent.TOUCH_BEGIN,n),setInterval(function(){for(var e=0;e<p.length;e++){var t=p[e];v.x<t.x?0!==t.currentFrame&&(TweenMax.killTweensOf(t),TweenMax.to(t,1,{currentFrame:0})):v.x>t.x&&t.currentFrame!==t.totalFrames-1&&(TweenMax.killTweensOf(t),TweenMax.to(t,1,{currentFrame:t.totalFrames-1}))}},1e3),i(!0),l.event={ON_COMPLETE:"onComplete",ON_STOPATNODE:"onStopAtNode",ON_NOWPLAYTIME:"onNowPlayTime"},l.isPlay=function(e){M=!!e,l.flower.line0&&l.flower.line1?(e?O.play():O.pause(),e?g.play():g.pause(),E.pause()):e?E.play():E.pause()},l.afterStopPlay=function(){x=!0,l.flower.line0&&l.flower.line1?(O.play(),g.play(),E.pause()):E.play()},l.littleFlowerHide=function(){for(var e=0;e<l.children.length;++e){var t=l.children[e];t.name&&T.test(t.name)&&(t.visible=!1)}}}}});