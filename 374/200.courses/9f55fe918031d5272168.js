webpackJsonp([200],{169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){for(var i=new PIXI.Container,a=new PIXI.filters.ColorMatrixFilter,o=r||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},h=new PIXI.Container,d=0;d<3;++d){var l=d+1,c=PIXI.Sprite.fromFrame("TAP_1"+l);c.x=-c.width/2,c.y=-c.height/2;var f=new PIXI.Container;f.addChild(c),h.addChild(f)}var v=0;if(s.direction)switch(s.direction){case"top":v=-Math.PI/2;break;case"bottom":v=Math.PI/2;break;case"left":v=Math.PI;break;case"right":v=0;break;default:v=0}h.filters=[a];for(var p=0;p<h.children.length;p++){var u=h.children[p];u.scale.x=u.scale.y=2,p<2&&m(u,.75*p)}if(i.addChild(h),s.addArrow){var w,x;if(s.direction){w=PIXI.Sprite.fromFrame("oneArrow"),x=new PIXI.extras.MovieClip([w]);var C=s.scale?s.scale:1;x.scale.x=x.scale.y=C,x.pivot={x:0,y:x.height/2},x.rotation=v}else{w=PIXI.Sprite.fromFrame("NBarrow"),(x=new PIXI.extras.MovieClip([w])).pivot={x:x.width/2,y:x.height/2};var I=s.scale?s.scale:1;x.scale.x=x.scale.y=I,"horizontal"!==(s.type?s.type:"horizontal")&&(x.rotation=Math.PI/2)}i.addChild(x),i.arrow=x,i.addEventListener("hideArrow",function(){x.alpha=0,x.visible=!1}),i.addEventListener("showArrow",function(){x.alpha=1,x.visible=!0})}h.alpha=.4;var T=new PIXI.Graphics;function m(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return T.beginFill(16776960,0),T.drawRect(-50,-50,100,100),i.addChild(T),i.addEventListener(MouseEvent.MOUSE_OVER,function(){h.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){h.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,r=e>>8&255,n=255&e;a._loadMatrix([t,0,0,0,0,0,r,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),h.filters=[a]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:x.height/2},t.rotation=Math.PI/2*(e+1)}else{var r=new PIXI.Container;r.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(r),r.pivot={x:x.width/2,y:x.height/2},r.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},419:function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(169));nb.substance0593=extendsClass(ScienceMain,{frame0:function(){var e=this,t=[0,0,1,1,0,0,0,0,0,1,1,0];function r(){TweenMax.killTweensOf(e.currentCon);this.redErr.alpha=0,e.addChild(this),instance.NBDownTip.hideTip(),instance.NBDownTipsError.hideTip();for(var t=0;t<2;t++){var r=e["con"+t];if(this.hitTest(r)){this.oldCon=r;var n=e["con"+r.index+"Arr"],i=n.indexOf(this);return this.oldIndex=i,this.oldArr=n,void n.splice(i,1)}e.currentCon.alpha=0,this.oldCon="",this.oldArr=""}}function i(){this.Point&&this.removeChild(this.Point);for(var t=0;t<2;t++){var r=e["con"+t];if(this.hitTest(r))return e.currentCon.alpha=1,e.currentCon.x=r.x,void(e.currentCon.y=r.y);e.currentCon.alpha=0}}function a(){for(var t=0;t<2;t++){var r=e["con"+t];if(this.hitTest(r)){this.isReach=!0,TweenMax.killTweensOf(this),this.reachCon=r.name,this.newCon=r;var n=e["con"+r.index+"Arr"];if(-1===n.indexOf(this)&&this.newCon.name!==this.oldCon.name)if(n.length<8)n.push(this),this.oldCon&&o(this.oldArr,this.oldCon);else for(var i=0;i<8;i++){var a=n[i];if(this.hitTest(a)){TweenMax.killTweensOf(this);var h=n.splice(i,1,this);this.oldCon?(this.oldArr.push(h[0]),o(this.oldArr,this.oldCon,h[0])):s(h[0]);break}s(this)}else n.splice(this.oldIndex,0,this);o(n,r,this);break}s(this),this.oldArr&&o(this.oldArr,this.oldCon)}}function o(e,t,r){for(var n=0;n<e.length;n++){var i=e[n],a=t.x+250*n+50,o=t.y+120;TweenMax.to(i,.5,{x:a,y:o,ease:Sine.easeInOut,onComplete:function(){r&&(r.type!==t.index?r.redErr.alpha=1:r.redErr.alpha=0),h()}})}}function s(e){TweenMax.to(e,.5,{x:e.startX,y:e.startY,ease:Sine.easeInOut,onComplete:function(){e.redErr.alpha=0,h()}})}function h(){!function(){for(var t=0,r=0;r<12;r++){var n=e["a"+r];n.x!=n.startX&&n.y!=n.startY&&0===n.redErr.alpha&&t++}if(12===t)instance.NBDownTipsError.showTip("当前步骤已完成"),instance.NBStepsShow(1)}();for(var t=0;t<12;t++){var r=e["a"+t];if(!r.isReach){r.addChild(r.Point);break}}TweenMax.to(e.currentCon,.5,{alpha:0})}e.con0Arr=[],e.con1Arr=[],function(){e.currentCon.x=e.con0.x,e.currentCon.y=e.con0.y,e.currentCon.alpha=0;for(var o=0;o<12;o++){var s=e["a"+o];s.index=o,s.type=t[o];var h=e["s"+o];h.redErr.alpha=0,h.alpha=.5,h.x=s.x,h.y=s.y,s.startX=s.x,s.startY=s.y,s.redErr.alpha=0;var d=(0,n.default)(0,-s.height/2);s.Point=d,NBDrag.addDrag(s),s.addEventListener(NBDrag.event.START_DRAG,r),s.addEventListener(NBDrag.event.DRAG_MOVE,i),s.addEventListener(NBDrag.event.STOP_DRAG,a),e["con"+o]&&(e["con"+o].index=o,e["con"+o].bg.alpha=0)}}(),h(),instance.NBDownTip.showTip("按照食物需求进行排序")},frame1:function(){for(var e=this,t=0;t<12;t++){var r=e["a"+t];r.redErr.alpha=0,NBDrag.addDrag(r),r.addEventListener(NBDrag.event.START_DRAG,function(){e.addChild(this)}),r.bPosition={x:r.x,y:r.y}}e.goBack.addEventListener(TouchEvent.TAP,function(){for(var t=0;t<12;t++){var r=e["a"+t];TweenMax.to(r,.4,{x:r.bPosition.x,y:r.bPosition.y})}})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1")},info:{experimentImport:"生活中，人们常常把食物分类。根据食物的来源，我们可以把它分成几类呢？",labName:"给食物分类",title0:"拖动食物分类",title1:"自定义食物分类",CONCLUSION:"食物按来源可以分为植物类、动物类。我们可以按不同的标准对食物进行分类。"},const:{},event:{}}),e.exports=nb.substance0593}});