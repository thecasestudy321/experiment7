webpackJsonp([83], {
            366: function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function a(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Instance = void 0;
                var s = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    c = function t(e, i, n) {
                        null === e && (e = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(e, i);
                        if (void 0 === a) {
                            var r = Object.getPrototypeOf(e);
                            return null === r ? void 0 : t(r, i, n)
                        }
                        if ("value" in a) return a.value;
                        var o = a.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = i(453),
                    u = n(l),
                    h = i(441),
                    p = n(h),
                    f = i(863),
                    d = n(f);
                e.Instance = function(t) {
                    function e() {
                        a(this, e);
                        var t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t.init.apply(t, arguments), t
                    }
                    return o(e, t), s(e, [{
                        key: "frame0",
                        value: function() {
                            function t() {
                                if (r.scene3D.scene.activeCamera) {
                                    l = r.scene3D, r.scene3D.setPointersButtons([0]);
                                    var t = r.scene3D.scene;
                                    i(t), r.btnComponent.on(p.default.radioButton.CHANGE, n), t.onPointerObservable.add(e.bind(r.scene3D), BABYLON.PointerEventTypes.POINTERDOUBLETAP)
                                }
                            }

                            function e() {
                                n({
                                    index: 1
                                })
                            }

                            function i(t) {
                                for (var e = t.meshes, i = 0; i < e.length; i++) {
                                    var n = e[i];
                                    n.isPickable = !1, n.checkCollisions = !1, n.receiveShadows = !1, -1 !== o.indexOf(e[i].name) ? n.isVisible = !1 : c.push(n)
                                }
                            }

                            function n(t) {
                                var e = t.index;
                                if (!(e < 1)) {
                                    var i = r.btnComponent.children[e];
                                    c.forEach(function(t) {
                                        if (t.isVisible = !0, 2 == i.currentFrame && -1 !== s[e].indexOf(t.name)) return void(t.isVisible = !1)
                                    })
                                }
                            }

                            function a(t) {
                                var e = t.bool,
                                    i = e ? 1 : 0;
                                l.animationManager.tweenToProgress(i), l.zoomOut()
                            }
                            var r = this,
                                o = [],
                                s = {
                                    1: [],
                                    2: ["polySurface11", "polySurface12", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155", "polySurface126", "polySurface127", "polySurface128", "polySurface116", "polySurface135", "polySurface136", "polySurface137", "polySurface118", "polySurface119"],
                                    3: ["waike_observe", "pasted__hougai_observe", "polySurface116", "polySurface135", "polySurface136", "polySurface137", "polySurface118", "polySurface119", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155"],
                                    4: ["waike_observe", "pasted__hougai_observe", "polySurface11", "polySurface12", "polySurface116", "polySurface135", "polySurface136", "polySurface137", "polySurface118", "polySurface119"],
                                    5: ["waike_observe", "pasted__hougai_observe", "polySurface11", "polySurface12", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155", "polySurface116", "polySurface135", "polySurface136", "polySurface137", "polySurface118", "polySurface119"],
                                    6: ["waike_observe", "pasted__hougai_observe", "polySurface11", "polySurface12", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155", "polySurface126", "polySurface127", "polySurface128"],
                                    7: ["waike_observe", "pasted__hougai_observe", "polySurface11", "polySurface12", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155", "polySurface126", "polySurface127", "polySurface128"],
                                    8: ["polySurface11", "polySurface12", "polySurface140", "polySurface141", "polySurface142", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155", "polySurface126", "polySurface127", "polySurface128", "polySurface116", "polySurface135", "polySurface136", "polySurface137", "polySurface118", "polySurface119"]
                                },
                                c = [];
                            u.default.apply(this, [{
                                config: {
                                    plugins: [Object.assign(BABYLON.plugins.ObserveWireframe, {
                                        data: {
                                            color: 16711680,
                                            wireframeAlpha: .05,
                                            nameFilter: /.*/,
                                            bindAnnotationToMesh: !0
                                        }
                                    })],
                                    func: {
                                        loaded: t
                                    },
                                    "clear-color": 994597887,
                                    mesh: {
                                        pickableFilter: /^0/
                                    },
                                    camera: {
                                        alpha: -2.258938489694453,
                                        beta: 1.41664090101392
                                    }
                                },
                                models: [{
                                    url: d.default.motor,
                                    menu: [{
                                        event: p.default.science3D.SHOW_INTRODUCE,
                                        data: "电动机是通过电能产生动力的机器。工作的原理是：用电产生磁，再利用磁的相互作用转动。",
                                        type: 0
                                    }, {
                                        event: "",
                                        type: 1,
                                        data: {
                                            index: 1
                                        },
                                        onChange: a
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 2,
                                        data: {
                                            meshName: "waike_observe",
                                            index: 2,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 4.116643129498582,
                                            beta: 1.0101818692146425,
                                            radius: 1.5634863254633655
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 3,
                                        data: {
                                            meshName: "polySurface11",
                                            arrMesh: ["polySurface12"],
                                            index: 3,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 5.59628518344407,
                                            beta: 1.52990247172244,
                                            radius: 1.7106417671234635
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 4,
                                        data: {
                                            meshName: "polySurface140",
                                            arrMesh: ["polySurface142", "polySurface141", "polySurface143", "polySurface144", "polySurface145", "polySurface146", "polySurface147", "polySurface148", "polySurface149", "polySurface150", "polySurface151", "polySurface152", "polySurface153", "polySurface154", "polySurface155"],
                                            index: 4,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 5.836282395974697,
                                            beta: 1.3900849095400394,
                                            radius: 1.4512799968794965
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 5,
                                        data: {
                                            meshName: "polySurface126",
                                            arrMesh: ["polySurface127", "polySurface128"],
                                            index: 5,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 5.406193132767204,
                                            beta: .9303718244699316,
                                            radius: 1.3109942832851234
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 6,
                                        data: {
                                            meshName: "polySurface116",
                                            arrMesh: ["polySurface135", "polySurface136", "polySurface137"],
                                            index: 6,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 4.175880309996353,
                                            beta: 1.4308843989797528,
                                            radius: .5020455676679595
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 7,
                                        data: {
                                            meshName: "polySurface118",
                                            arrMesh: ["polySurface119"],
                                            index: 7,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: 4.316276096555143,
                                            beta: 1.1809482413125076,
                                            radius: 1.4217827230509423
                                        }
                                    }, {
                                        event: p.default.science3D.SHOW_MESH,
                                        type: 8,
                                        data: {
                                            meshName: "pasted__hougai_observe",
                                            index: 8,
                                            flag: !0,
                                            isRatotion: !0,
                                            alpha: .7361773898995451,
                                            beta: 1.4709554350780953,
                                            radius: 1.6535182499064813
                                        }
                                    }]
                                }]
                            }]), r.bottomMenu.visible = !1;
                            var l = null
                        }
                    }, {
                        key: "start",
                        value: function() {
                            c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "start", this).call(this), this.gotoStep("frame0")
                        }
                    }]), e
                }(nb.stem.STEMMain)
            },
            439: function(t, e, i) {
                "use strict";
                t.exports = {
                    event: {
                        SCENE_CREATION_COMPLETE: "creationComplete",
                        annotation: {
                            CLICK_TIP: "event.annotation.clickTip"
                        }
                    },
                    sprite: {
                        ANNOTATION: "annotation"
                    },
                    action: {
                        ANNOTATION: "annotation",
                        ANNOTATION_CLICK_TRIGGER: "annotationClickTrigger"
                    },
                    data: {
                        ANNOTATION_SIZE: 50
                    },
                    TWEEN_TIMER: 1.2,
                    camera: {
                        FOV: .8,
                        MIN_ZOOM_FOV: .6,
                        ARC_CAMERA: "arcCamera",
                        VR_ARC_CAMERA: "vrArcCamera",
                        FREE_CAMERA: "freeCamera",
                        VR_FREE_CAMERA: "vrFreeCamera",
                        ANAGLYPH_CAMERA: "anaglyphCamera",
                        STEREOSCOPIC_CAMERA: "stereoscopicCamera",
                        ALPHA: 3.1,
                        BETA: 1
                    },
                    render: {
                        ORDINARY: "ordinary",
                        WIREFRAME: "wireframe"
                    },
                    setting: {
                        RENDER: "val-render",
                        CAMERA: "val-camera",
                        ANNOTATION: "val-annotation",
                        SPEED: "val-speed"
                    },
                    commands: {
                        UPDATE_ANNOTATION_DATA: "updateAnnotationData",
                        PLAY_ANIMATION_COMMAND: "playAnimation",
                        SET_ANNOTATION_VISIBLE: "setAnnotationVisible",
                        UPDATE_SETTING_PANEL: "updateSettingPanel",
                        CHECK_ENV: "checkEvn",
                        CONFIGURE_MATERIAL: "configureMaterial",
                        CONFIGURE_PIPELINE: "configurePipeline",
                        SET_CAMERA_CONTROL: "setCameraControl",
                        DISPOSE: "dispose",
                        OBSERVE_MESH_BY_FRAME: "observeMeshByFrame",
                        OBSERVE_MESH_BY_RORATE: "observeMeshByRotate",
                        PIXI_PLUGIN: "pixiPlugin",
                        SCENE_CAPTURE: "sceneCapture"
                    },
                    config: {
                        URI_PREFIX: ""
                    },
                    isDebug: !1,
                    UID: function() {
                        return "id_" + Math.random().toString().substr(2, 10)
                    }
                }
            },
            440: function(t, e, i) {
                "use strict";
                t.exports = {
                    CommandManager: i(471),
                    ICommand: i(446)
                }
            },
            441: function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = {
                    toggle: {
                        STATUS: "event.toggle.status"
                    },
                    radioButton: {
                        CHANGE: "event.radioButton.change",
                        TAPACTIVE: "event.radioButton.tap_active"
                    },
                    science3D: {
                        SHOW_INTRODUCE: "event.science3D.show_introduce",
                        SHOW_MESH: "event.science3D.show_mesh",
                        PLAY_ANIMATION: "event.science3D.play_animation"
                    },
                    popup: {
                        CLOSE: "event.popup.close"
                    },
                    experimentStep: {
                        CHANGE: "event.experimentStep.change"
                    }
                }
            },
            442: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = function() {
                        function t() {
                            n(this, t)
                        }
                        return a(t, null, [{
                            key: "projectToScreen",
                            value: function(t, e) {
                                var i = e.getEngine(),
                                    n = e.activeCamera.viewport.toGlobal(i.getRenderWidth(), i.getRenderHeight());
                                return BABYLON.Vector3.Project(t, BABYLON.Matrix.Identity(), e.getTransformMatrix(), n)
                            }
                        }, {
                            key: "projectToPixiSprite",
                            value: function(e, i, n, a, r) {
                                a = a || instance.W, r = r || instance.H;
                                var o = t.projectToScreen(e, i);
                                return t.canvasPointToPixiSprite(o, n, i.getEngine().getRenderingCanvas(), a, r)
                            }
                        }, {
                            key: "canvasPointToPixiSprite",
                            value: function(t, e, i, n, a) {
                                n = n || instance.W, a = a || instance.H;
                                var r = {
                                    x: t.x / i.width * n,
                                    y: t.y / i.height * a
                                };
                                return e.toLocal(r)
                            }
                        }, {
                            key: "getShortRotation",
                            value: function(t, e) {
                                return t - e > Math.PI ? t - 2 * Math.PI : t - e < -Math.PI ? t + 2 * Math.PI : t
                            }
                        }, {
                            key: "hasAnimation",
                            value: function(t) {
                                var e = t.Animatables;
                                if (!e) return !1;
                                for (var i = 0; i < e.length; i++) {
                                    if (e[i].getAnimations().length > 0) return !0
                                }
                                return !1
                            }
                        }, {
                            key: "convertTextToHTML",
                            value: function(t) {
                                return t.replace(/"/gi, "&quot;")
                            }
                        }, {
                            key: "convertHTMLToText",
                            value: function(t) {
                                return t.replace(/&quot;/gi, '"')
                            }
                        }]), t
                    }();
                t.exports = r
            },
            443: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = function t(e, i, n) {
                        null === e && (e = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(e, i);
                        if (void 0 === a) {
                            var r = Object.getPrototypeOf(e);
                            return null === r ? void 0 : t(r, i, n)
                        }
                        if ("value" in a) return a.value;
                        var o = a.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    c = void 0,
                    l = void 0,
                    u = i(439),
                    h = i(442),
                    p = i(466),
                    f = void 0,
                    d = 0,
                    v = void 0,
                    y = void 0,
                    m = function(t) {
                        function e(t) {
                            n(this, e);
                            var i = t.scene;
                            if (!c) {
                                var r = t.data.annotation.spriteURL || "assets/textures/annotation.png";
                                c = new BABYLON.SpriteManager(u.sprite.ANNOTATION, u.config.URI_PREFIX + r, 20, 64, i), c.isPickable = !0, c.renderingGroupId = 1, l = new BABYLON.SpriteManager(u.sprite.ANNOTATION, u.config.URI_PREFIX + r, 20, 64, i)
                            }
                            var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "annotation", c));
                            o.babylonScene = t, o.isPickable = !0, o.color.a = .3, o.actionManager = t.getActionManagerByName(u.action.ANNOTATION), o.configData = t.data.annotation;
                            var s = o.configData;
                            if (o.bottomSprite = new BABYLON.Sprite("annotationTop", l), "threeDLine" === s.type) {
                                v || (v = new BABYLON.StandardMaterial("lineMaterial", i), v.alpha = s.line.alpha, v.diffuseColor = BABYLON.Color3.FromHexString("#" + s.line.color.toString(16)), y = new BABYLON.StandardMaterial("lineMaterialTop", i), y.alpha = Math.min(s.line.alpha / 3, .1), y.diffuseColor = v.diffuseColor), o.lineMeshName = "line" + ++d;
                                var h = [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0)];
                                o.lineMesh = BABYLON.Mesh.CreateTube("tube", h, .01, 6, null, null, i, !0), o.lineMesh.material = v, o.lineMeshTopRender = BABYLON.Mesh.CreateTube("tubeTopRender", h, .01, 6, null, null, i, !0), o.lineMeshTopRender.material = y, o.lineMeshTopRender.renderingGroupId = 1, o.pos3D = [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0)], o.pos2D = [{
                                    x: 0,
                                    y: 0
                                }, {
                                    x: 0,
                                    y: 0
                                }], o.tip2D = new p(t), s.tipParent.addChild(o.tip2D)
                            }
                            return o
                        }
                        return r(e, t), o(e, [{
                            key: "zoomIn",
                            value: function(t) {
                                var e = this.getSceneData(),
                                    i = {
                                        radius: e.camera.radius,
                                        alpha: e.camera.alpha % (2 * Math.PI),
                                        beta: e.camera.beta % (2 * Math.PI)
                                    };
                                if (Object.assign(i, t), this.babylonScene.lookAtVector(e.camera.target, i), e.pickedMesh) {
                                    var n = this.babylonScene.scene,
                                        a = e.pickedMesh,
                                        r = n.getMeshByID(a.id) || n.getMeshByName(a.name);
                                    r && r.actionManager && r.actionManager.processTrigger(u.action.ANNOTATION_CLICK_TRIGGER, {
                                        source: r
                                    })
                                }
                                var o = e.aniProgress;
                                this.babylonScene.animationManager.tweenToProgress(o, t), (this.babylonScene.data.annotation.showAnnotationPanel || u.isDebug) && this.showTip()
                            }
                        }, {
                            key: "showTip",
                            value: function() {
                                if (f && f.hideTip(), this.tip) this.tip.fadeIn();
                                else {
                                    var t = "标题",
                                        e = "请输入说明文字",
                                        i = '<div class="annotation visible" data-hotspot="1">\n\t\t\t\t\t        <div class="tooltip visible reverse-x">\n\t\t\t\t                <div class="tooltip-content padded">\n\t\t\t\t                    <div class="edition">\n\t\t\t                            <input class="title" placeholder="' + t + '" maxlength="64" required="">\n\t\t\t                            <textarea class="description" placeholder="' + e + '" maxlength="1024" rows="2"></textarea>\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t    </div>';
                                    this.tip = $(i);
                                    var n = $("body"),
                                        a = $(".babylon-viewer");
                                    0 === $(".babylon-viewer").length && (n.append('<div class="babylon-viewer"></div>'), a = $(".babylon-viewer")), a.append(this.tip), this._sceneData && (t = this._sceneData.title, e = this._sceneData.description, t = h.convertHTMLToText(t), this.tip.find(".title").val(t), this.tip.find(".description").val(e))
                                }
                                f = this
                            }
                        }, {
                            key: "getSceneData",
                            value: function() {
                                if (!this.tip) return this._sceneData;
                                var t = this.tip.find(".title").val(),
                                    e = this.tip.find(".description").val();
                                return "" !== t && (this._sceneData.title = t), "" !== e && (this._sceneData.description = e), this._sceneData
                            }
                        }, {
                            key: "setSceneData",
                            value: function(t) {
                                this._sceneData = t, this.position.copyFrom(t.position), this.bottomSprite.position.copyFrom(t.position), this.tip2D && this.tip2D.updateText(t.title)
                            }
                        }, {
                            key: "hideTip",
                            value: function() {
                                this.tip.fadeOut()
                            }
                        }, {
                            key: "takeSceneSnapshot",
                            value: function(t) {
                                var e = this.actionManager.getScene().activeCamera,
                                    i = e.getTarget(),
                                    n = this.babylonScene.animationManager;
                                this.setSceneData({
                                    camera: {
                                        radius: e.radius,
                                        target: {
                                            x: i.x,
                                            y: i.y,
                                            z: i.z
                                        },
                                        alpha: e.alpha,
                                        beta: e.beta
                                    },
                                    title: "标题",
                                    description: "请输入文字",
                                    position: {
                                        x: this.position.x,
                                        y: this.position.y,
                                        z: this.position.z
                                    },
                                    pickedMesh: t,
                                    aniProgress: n.getProgress()
                                })
                            }
                        }, {
                            key: "updateTip",
                            value: function() {
                                if (this.bottomSprite.size = this.size, this.tip && "block" === this.tip.css("display")) {
                                    var t = h.projectToScreen(this.position, this.actionManager.getScene());
                                    this.tip.css("left", t.x + 240), this.tip.css("top", t.y - 12)
                                }
                                if (this.lineMesh) {
                                    var e = .001 * this.distanceOfCamera * this.configData.line.thickness,
                                        i = [this.position, this.pos3D[0]];
                                    this.lineMesh = BABYLON.MeshBuilder.CreateTube(null, {
                                        path: i,
                                        radius: e,
                                        instance: this.lineMesh
                                    }), this.lineMeshTopRender = BABYLON.MeshBuilder.CreateTube(null, {
                                        path: i,
                                        radius: e,
                                        instance: this.lineMeshTopRender
                                    }), this.tip2D.render(this.pos2D);
                                    var n = this._sceneData.title,
                                        a = n.split(":");
                                    u.shiftDown ? this.tip2D.updateText(n) : this.tip2D.updateText(a[a.length - 1])
                                }
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                this.lineMesh && (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this), this.bottomSprite.dispose(), this.tip && this.tip.remove(), this.tip2D && (this.tip2D.dispose(), this.lineMesh.material = null, this.lineMeshTopRender.material = null, this.lineMeshTopRender.dispose(), this.lineMesh.dispose(), delete this.lineMesh, delete this.lineMeshTopRender, delete this.tip2D))
                            }
                        }], [{
                            key: "clearData",
                            value: function() {
                                v = null, c = null
                            }
                        }, {
                            key: "UpdateSpriteRenderData",
                            value: function(t) {
                                if (0 !== t.length) {
                                    var e = t[0].babylonScene;
                                    if ("threeDLine" === e.data.annotation.type) {
                                        var i = e.scene,
                                            n = i.getEngine(),
                                            a = i.activeCamera,
                                            r = n.getRenderWidth() / 2,
                                            o = n.getRenderHeight() / 2;
                                        if (e.defaultTarget) {
                                            var s = h.projectToScreen(e.defaultTarget, i);
                                            r = s.x, o = s.y
                                        }
                                        var c = [
                                            [],
                                            [],
                                            [],
                                            []
                                        ];
                                        t.forEach(function(t) {
                                            var e = h.projectToScreen(t.position, i),
                                                n = e.x > r ? 1 : 0,
                                                a = (e.y < o ? 1 : 0) << 1;
                                            c[n | a].push(t), e = h.canvasPointToPixiSprite(e, instance.stage, i.getEngine().getRenderingCanvas()), t.pos2D[0] = e
                                        });
                                        var l = i.activeCamera.position;
                                        c.forEach(function(t, e) {
                                            for (var n = t.length, r = 0; r < t.length; r++) {
                                                var o = t[r],
                                                    s = 0 == (1 & e) ? -1 : 1,
                                                    c = e >> 1 == 0 ? -1 : 1,
                                                    u = o.configData.line.type || "default",
                                                    p = void 0;
                                                switch (u) {
                                                    case "default":
                                                        p = Math.PI / 2 / (n + 1) * (r + 1);
                                                        break;
                                                    case "random":
                                                        p = Math.random() * Math.PI * 2;
                                                        break;
                                                    case "horizontal":
                                                        p = 0;
                                                        break;
                                                    case "vertical":
                                                        p = Math.PI / 2
                                                }
                                                var f = BABYLON.Vector3.Distance(o.position, a.position),
                                                    d = 2 * Math.cos(p) * s,
                                                    v = 2 * Math.sin(p) * c,
                                                    y = BABYLON.AbstractMesh._lookAtVectorCache;
                                                l.subtractToRef(o.position, y);
                                                var m = Math.sqrt(y.x * y.x + y.z * y.z),
                                                    b = -Math.atan2(y.z, y.x) - Math.PI / 2,
                                                    g = Math.atan2(y.y, m),
                                                    A = BABYLON.Matrix.RotationYawPitchRoll(b, g, 0);
                                                A.setTranslation(o.position);
                                                var O = new BABYLON.Vector3(0, 0, 0);
                                                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(d, v, 0, A, O);
                                                var S = new BABYLON.Vector3(0, 0, 0);
                                                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(d + .4 * s, v, 0, A, S), O = BABYLON.Vector3.Lerp(o.position, O, .1 * f * o.configData.line.scale);
                                                for (var M = [O, S], E = 0; E < o.pos3D.length; E++) {
                                                    var x = M[E];
                                                    o.pos3D[E] && (x.x = o.pos3D[E].x + (x.x - o.pos3D[E].x) / 7, x.y = o.pos3D[E].y + (x.y - o.pos3D[E].y) / 7, x.z = o.pos3D[E].z + (x.z - o.pos3D[E].z) / 7, o.pos3D[E] = x)
                                                }
                                                var w = h.projectToPixiSprite(o.pos3D[0], i, instance.stage);
                                                o.pos2D[1] = w, o.distanceOfCamera = f
                                            }
                                        })
                                    }
                                }
                            }
                        }, {
                            key: "SetAnnotationVisible",
                            value: function(t) {
                                if (c) {
                                    c.sprites && (t ? (c.tempSprites && (c.sprites = c.tempSprites, delete c.tempSprites), l.tempSprites && (l.sprites = l.tempSprites, delete l.tempSprites)) : (c.tempSprites = c.sprites, c.sprites = [], l.tempSprites = l.sprites, l.sprites = []))
                                }
                            }
                        }, {
                            key: "lastTip",
                            get: function() {
                                return f
                            },
                            set: function(t) {
                                f = t
                            }
                        }]), e
                    }(BABYLON.Sprite);
                t.exports = m
            },
            445: function(t, e, i) {
                "use strict";
                (function(e) {
                    if (e.BABYLON) {
                        var n = i(439);
                        BABYLON.DragUtil = i(458), BABYLON.RotateUtil = i(459), BABYLON.plugins = {
                            ObserveWireframe: {
                                command: n.commands.OBSERVE_MESH_BY_FRAME,
                                data: {}
                            },
                            ObserveAround: {
                                command: n.commands.OBSERVE_MESH_BY_RORATE,
                                data: {}
                            }
                        }, BABYLON.RotateHelperMesh = i(460), BABYLON.RotateControl = i(462), t.exports = {
                            BabylonScene: i(464),
                            ConstName: n
                        }
                    } else t.exports = {
                        addExpressApp: i(503)
                    }
                }).call(e, i(1))
            },
            446: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = function() {
                        function t() {
                            n(this, t)
                        }
                        return a(t, [{
                            key: "execute",
                            value: function() {
                                throw "必须重写该方法"
                            }
                        }]), t
                    }();
                t.exports = r
            },
            447: function(t, e, i) {
                "use strict";
                var n = {
                    utf8: {
                        stringToBytes: function(t) {
                            return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
                        },
                        bytesToString: function(t) {
                            return decodeURIComponent(escape(n.bin.bytesToString(t)))
                        }
                    },
                    bin: {
                        stringToBytes: function(t) {
                            for (var e = [], i = 0; i < t.length; i++) e.push(255 & t.charCodeAt(i));
                            return e
                        },
                        bytesToString: function(t) {
                            for (var e = [], i = 0; i < t.length; i++) e.push(String.fromCharCode(t[i]));
                            return e.join("")
                        }
                    }
                };
                t.exports = n
            },
            448: function(t, e, i) {
                "use strict";

                function n(t) {
                    var e = void 0 === t ? "undefined" : a(t);
                    return null != t && ("object" == e || "function" == e)
                }
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                t.exports = n
            },
            449: function(t, e, i) {
                "use strict";
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = i(492),
                    r = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                    o = a || r || Function("return this")();
                t.exports = o
            },
            450: function(t, e, i) {
                "use strict";
                var n = i(449),
                    a = n.Symbol;
                t.exports = a
            },
            451: function(t, e, i) {
                (function(t) {
                    function i(t, e) {
                        for (var i = 0, n = t.length - 1; n >= 0; n--) {
                            var a = t[n];
                            "." === a ? t.splice(n, 1) : ".." === a ? (t.splice(n, 1), i++) : i && (t.splice(n, 1), i--)
                        }
                        if (e)
                            for (; i--; i) t.unshift("..");
                        return t
                    }

                    function n(t, e) {
                        if (t.filter) return t.filter(e);
                        for (var i = [], n = 0; n < t.length; n++) e(t[n], n, t) && i.push(t[n]);
                        return i
                    }
                    var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                        r = function(t) {
                            return a.exec(t).slice(1)
                        };
                    e.resolve = function() {
                        for (var e = "", a = !1, r = arguments.length - 1; r >= -1 && !a; r--) {
                            var o = r >= 0 ? arguments[r] : t.cwd();
                            if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                            o && (e = o + "/" + e, a = "/" === o.charAt(0))
                        }
                        return e = i(n(e.split("/"), function(t) {
                            return !!t
                        }), !a).join("/"), (a ? "/" : "") + e || "."
                    }, e.normalize = function(t) {
                        var a = e.isAbsolute(t),
                            r = "/" === o(t, -1);
                        return t = i(n(t.split("/"), function(t) {
                            return !!t
                        }), !a).join("/"), t || a || (t = "."), t && r && (t += "/"), (a ? "/" : "") + t
                    }, e.isAbsolute = function(t) {
                        return "/" === t.charAt(0)
                    }, e.join = function() {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return e.normalize(n(t, function(t, e) {
                            if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                            return t
                        }).join("/"))
                    }, e.relative = function(t, i) {
                        function n(t) {
                            for (var e = 0; e < t.length && "" === t[e]; e++);
                            for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                            return e > i ? [] : t.slice(e, i - e + 1)
                        }
                        t = e.resolve(t).substr(1), i = e.resolve(i).substr(1);
                        for (var a = n(t.split("/")), r = n(i.split("/")), o = Math.min(a.length, r.length), s = o, c = 0; c < o; c++)
                            if (a[c] !== r[c]) {
                                s = c;
                                break
                            }
                        for (var l = [], c = s; c < a.length; c++) l.push("..");
                        return l = l.concat(r.slice(s)), l.join("/")
                    }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
                        var e = r(t),
                            i = e[0],
                            n = e[1];
                        return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : "."
                    }, e.basename = function(t, e) {
                        var i = r(t)[2];
                        return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                    }, e.extname = function(t) {
                        return r(t)[3]
                    };
                    var o = "b" === "ab".substr(-1) ? function(t, e, i) {
                        return t.substr(e, i)
                    } : function(t, e, i) {
                        return e < 0 && (e = t.length + e), t.substr(e, i)
                    }
                }).call(e, i(8))
            },
            452: function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t) {
                    function e(t) {
                        var e = parseInt(this.name.replace(s, ""));
                        if (c.activeButton === this) return void c.emit(a.default.radioButton.TAPACTIVE, {
                            index: e
                        });
                        c.check && !1 === c.check() || (c.activeButton && c.activeButton.gotoAndStop(0), c.setActiveIndex(e))
                    }

                    function i(t) {
                        0 === this.currentFrame && this.gotoAndStop(1)
                    }

                    function n(t) {
                        1 === this.currentFrame && this.gotoAndStop(0)
                    }
                    var o = this,
                        s = t ? t.name : "icon";
                    this.activeButton = null;
                    for (var c = this, l = 0; l < r; l++) {
                        if ("break" === function(t) {
                            var a = o[s + t];
                            if (!a) return "break";
                            if (a.buttonMode = !0, a.gotoAndStop) {
                                if (a.totalFrames > 3) throw "图标动画的帧数不能超过3帧，请调整结构或者联系作者"
                            } else a.gotoAndStop = function(t) {
                                a.component && a.component.gotoAndStop && a.component.gotoAndStop(t)
                            }, Object.defineProperty(a, "currentFrame", {
                                get: function() {
                                    return a.component.currentFrame
                                },
                                set: function(t) {
                                    a.component.currentFrame = t
                                }
                            }), Object.defineProperty(a, "totalFrames", {
                                get: function() {
                                    return a.component.totalFrames
                                }
                            });
                            window.NBGesture ? NBGesture.addGesture(a, NBGesture.gesture.TAP, e) : a.addEventListener(TouchEvent.TOUCH_END, e), NBGesture.addGesture, 3 === a.totalFrames && (a.addEventListener(MouseEvent.MOUSE_OVER, i), a.addEventListener(MouseEvent.MOUSE_OUT, n))
                        }(l)) break
                    }
                    this.getActiveButton = function() {
                        return c.activeButton
                    }, this.setActiveIndex = function(t) {
                        var e = o[s + t];
                        if (!e) return c.activeButton && c.activeButton.gotoAndStop(0), c.activeButton = null, void c.emit(a.default.radioButton.CHANGE, {
                            index: -1
                        });
                        c.activeButton = e;
                        var i = c.activeButton.totalFrames;
                        void 0 === i && (i = c.activeButton.component.totalFrames), c.activeButton.gotoAndStop(i - 1), c.emit(a.default.radioButton.CHANGE, {
                            index: t
                        })
                    }
                };
                var n = i(441),
                    a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n),
                    r = 100
            },
            453: function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t) {
                    function e() {
                        _ = (-instance.H + nb.canvasHeight) / 2, i()
                    }

                    function i() {
                        var t = Power1.easeInOut;
                        1 === P.bar.currentFrame ? (TweenMax.to(P, .5, {
                            y: nb.canvasHeight + 10 - _,
                            ease: t
                        }), TweenMax.to(B, .5, {
                            y: -100 + _
                        })) : (TweenMax.to(P, .5, {
                            y: L - _,
                            ease: t
                        }), TweenMax.to(B, .5, {
                            y: _
                        }))
                    }

                    function n() {
                        E.setActiveIndex(-1), E.children[R].currentFrame = 0
                    }

                    function a(e) {
                        if (k = !0, 1 != t.models.length || !N) {

                            if (N = !0, !t.models[e.index]) return void console.log("配置文件不完整!");
                            S.popup.visible = !1, w = t.models[e.index];
                            var i = w.url;
                            u(!1), S.scene3D.disposeSceneObjects();
                            var n = t.models[e.index],
                                a = n.radius,
                                r = n.alpha,
                                o = n.beta;
                            void 0 !== a && (S.scene3D.defaultRadius = a), void 0 !== r && (g.camera.alpha = r), void 0 !== o && (g.camera.beta = o), S.scene3D.loadMesh(i, g), p();
                            var c = t.models[e.index].menu;
                            for (S.scene3D.scene.activeCamera, S.scene3D.menuData = c; E.children.length;) {
                                var l = E.getChildAt(0);
                                delete E[l.name], E.removeChildAt(0)
                            }
                            for (var h = 0; h < c.length; h++) {
                                var f = M[c[h].type || h % M.length].clone();
                                E.addChild(f), f.name = "icon" + h, E[f.name] = f, f.x = 0, f.y = 70 * -h
                            }
                            s.default.apply(E);
                            var d = E.getBounds();
                            E.x = instance.W - (instance.W - nb.canvasWidth) / 2 - 100, E.y = nb.canvasHeight - d.height
                        }
                    }

                    function o(t) {
                        var e = t.index,
                            i = w.menu[e];
                        if (i) {
                            switch (i.event) {
                                case l.default.science3D.SHOW_INTRODUCE:
                                    S.popup.visible ? S.popup.visible = !1 : (R = e, S.popup.x = S.popup.defaultPosition.x, S.popup.y = S.popup.defaultPosition.y, S.popup.visible = !0, S.popup.setContent(i.data), i.lineHeight && (S.popup.children[1].style.lineHeight = i.lineHeight, S.popup.children[1].updateText()), i.font && (S.popup.children[1].style.font = i.font, S.popup.children[1].updateText()));
                                    break;
                                case l.default.science3D.SHOW_MESH:
                                    var n = i.data;
                                    I.push(E.children[n.index]), Y.push(n);
                                    var a = S.scene3D.scene.getMeshByName(n.meshName);
                                    if (n.addMeshName) {
                                        S.scene3D.scene.getMeshByName(n.addMeshName).bindMesh = a
                                    }
                                    if (n.arrMesh && n.arrMesh.forEach(function(t) {
                                        S.scene3D.scene.getMeshByName(t).bindMesh = a
                                    }), n.isHide) a.isVisible = !0, D.push(a);
                                    else {
                                        var r = !0,
                                            o = !1,
                                            s = void 0;
                                        try {
                                            for (var c, u = D[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                                                var h = c.value;
                                                h && (h.isVisible = !1)
                                            }
                                        } catch (t) {
                                            o = !0, s = t
                                        } finally {
                                            try {
                                                !r && u.return && u.return()
                                            } finally {
                                                if (o) throw s
                                            }
                                        }
                                    }
                                    var p = a.actionManager,
                                        f = BABYLON.Mesh.MinMax([a]),
                                        d = BABYLON.Vector3.Center(f.min, f.max);
                                    if (Y[Y.length - 1].flag) {
                                        var v = !0,
                                            y = !1,
                                            b = void 0;
                                        try {
                                            for (var g, A = I[Symbol.iterator](); !(v = (g = A.next()).done); v = !0) {
                                                g.value.gotoAndStop(0)
                                            }
                                        } catch (t) {
                                            y = !0, b = t
                                        } finally {
                                            try {
                                                !v && A.return && A.return()
                                            } finally {
                                                if (y) throw b
                                            }
                                        }
                                        I[I.length - 1].gotoAndStop(2);
                                        var O = !0,
                                            M = !1,
                                            x = void 0;
                                        try {
                                            for (var B, C = Y[Symbol.iterator](); !(O = (B = C.next()).done); O = !0) {
                                                B.value.flag = !0
                                            }
                                        } catch (t) {
                                            M = !0, x = t
                                        } finally {
                                            try {
                                                !O && C.return && C.return()
                                            } finally {
                                                if (M) throw x
                                            }
                                        }
                                        p.processTrigger(BABYLON.ActionManager.OnDoublePickTrigger, {
                                            source: a,
                                            pickedPoint: d,
                                            ignoreCameraDistance: !0
                                        }), p.processTrigger(m.action.ANNOTATION_CLICK_TRIGGER, {
                                            source: a
                                        }), n.isRatotion & "undefined" != n.alpha && (TweenMax.to(S.scene3D.scene.activeCamera, 1.5, {
                                            alpha: n.alpha
                                        }), "undefined" != n.beta && TweenMax.to(S.scene3D.scene.activeCamera, 1.5, {
                                            beta: n.beta
                                        })), n.radius && TweenMax.to(S.scene3D.scene.activeCamera, 1.5, {
                                            radius: n.radius
                                        }), n.flag = !n.flag
                                    } else {
                                        var T = i.data,
                                            P = !0,
                                            L = !1,
                                            _ = void 0;
                                        try {
                                            for (var N, X = I[Symbol.iterator](); !(P = (N = X.next()).done); P = !0) {
                                                N.value.gotoAndStop(0)
                                            }
                                        } catch (t) {
                                            L = !0, _ = t
                                        } finally {
                                            try {
                                                !P && X.return && X.return()
                                            } finally {
                                                if (L) throw _
                                            }
                                        }
                                        var j = !0,
                                            F = !1,
                                            Z = void 0;
                                        try {
                                            for (var z, V = Y[Symbol.iterator](); !(j = (z = V.next()).done); j = !0) {
                                                z.value.flag = !0
                                            }
                                        } catch (t) {
                                            F = !0, Z = t
                                        } finally {
                                            try {
                                                !j && V.return && V.return()
                                            } finally {
                                                if (F) throw Z
                                            }
                                        }
                                        var H = !0,
                                            U = !1,
                                            W = void 0;
                                        try {
                                            for (var G, $ = D[Symbol.iterator](); !(H = (G = $.next()).done); H = !0) {
                                                var Q = G.value;
                                                Q && (Q.isVisible = !1)
                                            }
                                        } catch (t) {
                                            U = !0, W = t
                                        } finally {
                                            try {
                                                !H && $.return && $.return()
                                            } finally {
                                                if (U) throw W
                                            }
                                        }
                                        D = [], I = [], Y = [], S.scene3D.resetSceneMesh && S.scene3D.resetSceneMesh(), S.scene3D.zoomOut(), T.backRadius && TweenMax.to(S.scene3D.scene.activeCamera, 1.5, {
                                            radius: T.backRadius
                                        }), T.backAlpha && T.backBeta && TweenMax.to(S.scene3D.scene.activeCamera, 1.5, {
                                            radius: T.backBeta
                                        })
                                    }
                                    break;
                                case l.default.science3D.PLAY_ANIMATION:
                                    var K = i.speed || 1;
                                    void 0 === i.autoPlay && void 0 === i.noPlay ? (S.scene3D.zoomOut(), k || (void 0 === i.tween ? S.scene3D.scene.babylonScene.animationManager.tweenToProgress(0) : S.scene3D.scene.babylonScene.animationManager.setProgress(0)), S.scene3D.execute(m.commands.PLAY_ANIMATION_COMMAND, {
                                        reset: k,
                                        play: k,
                                        timeScale: K
                                    })) : void 0 === i.noPlay && (i.autoPlay ? (S.scene3D.execute(m.commands.PLAY_ANIMATION_COMMAND, {
                                        reset: i.autoPlay,
                                        play: !0,
                                        timeScale: K
                                    }), S.scene3D.scene.babylonScene.animationManager.setProgress(0)) : S.scene3D.execute(m.commands.PLAY_ANIMATION_COMMAND, {
                                        reset: i.autoPlay,
                                        play: !1,
                                        timeScale: 0
                                    }), i.autoPlay = !i.autoPlay), k = !k
                            }
                            "function" == typeof i.onChange && i.onChange({
                                index: e,
                                bool: !!E.children[i.data.index].currentFrame
                            }), this.emit("btnChange", t)
                        }
                    }

                    function c(t) {
                        var e = this,
                            i = t["clear-color"] ? t["clear-color"] : 994597887;
                        t = Object.assign({
                            "clear-color": i,
                            interactiveCanvas: window.instance ? window.instance.canvas : null
                        }, t), void 0 === t.importScene && (t.importScene = !0), t.emitter = this, t.canvas = instance.get3DCanvas(), BABYLON.Database.IDBStorageEnabled = !1, g = Object.assign({}, t), this.scene3D = new y(t);
                        var n = this.scene3D.scene.interactiveCanvas;
                        if (n.style.touchAction = "none", n.style.pointerEvents = "all", document.body.setAttribute("onselectstart", "event.returnValue=false"), document.body.setAttribute("oncontextmenu", "window.event.returnValue=false"), this.scene3D.setPointersButtons = function(t) {
                            e.scene3D.scene.activeCamera.inputs.attached.pointers.buttons = t
                        }, this.scene3D.fouceInMesh = function(t, e) {
                            var i = t.actionManager,
                                n = BABYLON.Mesh.MinMax([t]),
                                a = BABYLON.Vector3.Center(n.min, n.max);
                            i.processTrigger(BABYLON.ActionManager.OnDoublePickTrigger, {
                                source: t,
                                pickedPoint: a
                            });
                            var r = e.alpha,
                                o = e.beta,
                                s = e.radius;
                            TweenMax.to(b.scene.activeCamera, 1.5, {
                                alpha: r,
                                beta: o,
                                radius: s
                            })
                        }, this.scene3D.addSkybox = function(t) {
                            var e = new BABYLON.Texture(t, this.scene),
                                i = new BABYLON.StandardMaterial("sphericalMat", this.scene);
                            i.emissiveTexture = e, i.diffuseColor.set(0, 0, 0), i.specularColor.set(0, 0, 0);
                            var n = BABYLON.MeshBuilder.CreateSphere("SkySphere", {
                                segments: 32,
                                sideOrientation: BABYLON.Mesh.BACKSIDE
                            }, this.scene);
                            return n.scaling.set(5e3, 5e3, 5e3), n.rotation.z = -.5, n.infiniteDistance = !0, n.renderingGroupId = 0, n.material = i, n
                        }, this.scene3D.addSun = function(t, e) {
                            t.isVisible = !1;
                            var i = new BABYLON.StandardMaterial("sunMaterial", this.scene);
                            i.emissiveTexture = new BABYLON.Texture(e, this.scene), i.backFaceCulling = !0, i.diffuseColor.set(0, 0, 0), i.specularColor.set(0, 0, 0);
                            var n = BABYLON.Mesh.CreateSphere("sun", 20, 7, this.scene);
                            return n.material = i, n.position = t.position, new BABYLON.HighlightLayer("hl1", this.scene).addMesh(n, new BABYLON.Color3(1, 1, 0)), n
                        }, this.scene3D.addLight = function(t) {
                            new BABYLON.HemisphericLight("HemiLight0", new BABYLON.Vector3(0, 1, 0), this.scene).intensity = t, new BABYLON.HemisphericLight("HemiLight1", new BABYLON.Vector3(0, -1, 0), this.scene).intensity = t
                        }, t.addBackground) {
                            var a = function(t) {
                                    var e = /[^\.\/\\]+.[^\.]+$/gi,
                                        i = t.match(e)[0];
                                    return {
                                        path: t.split(i)[0],
                                        name: i
                                    }
                                },
                                r = function(t, e) {
                                    var i = M.getLightByName("Spot001");
                                    i.position.set(5 * l, 10 * l, -10 * l), i.direction.set(-.5, -1, 1), i.intensity = 3, i.shadowAngleScale = .2, i.intensityMode = 1, i.exponent = 100, i.angle = 5, BABYLON.Mesh.CreateSphere("lightSphere", 16, 1, M).position = i.position;
                                    var n = new BABYLON.ShadowGenerator(1024, i);
                                    window.shadowGenerator = n, i.shadowMaxZ = 300, i.shadowMinZ = 10, n.setDarkness(.1), n.useContactHardeningShadow = !0, n.getShadowMap().renderList = t, e.receiveShadows = !0
                                },
                                o = t.addBackground,
                                s = o.cameraConf,
                                c = o.modelUrl,
                                l = o.modelScale;
                            s = Object.assign({
                                upperBetaLimit: 1.57,
                                lowerRadiusLimit: 3,
                                upperRadiusLimit: 10,
                                defaultRadius: 4,
                                defaultTarget: new BABYLON.Vector3(.022303105205297435, .3469105437092268, .015726989612069697),
                                modelScale: 1,
                                playAnimation: !1
                            }, s);
                            var u = s,
                                h = u.upperBetaLimit,
                                p = u.lowerRadiusLimit,
                                f = u.upperRadiusLimit,
                                d = u.defaultRadius,
                                v = u.defaultTarget,
                                m = u.playAnimation,
                                O = S.scene3D,
                                M = O.scene;
                            S.scene3D.initBackground = function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                M.activeCamera.upperBetaLimit = h, M.activeCamera.lowerRadiusLimit = p, M.activeCamera.upperRadiusLimit = f, this.defaultRadius = d, this.defaultTarget = v, M.getLightByName("Sky001") && (M.getLightByName("Sky001").intensity = e.s0 ? e.s0 : .5), M.getLightByName("Sky002") && (M.getLightByName("Sky002").intensity = .6), M.getLightByName("Omni001") && (M.getLightByName("Omni001").intensity = e.s1 ? e.s1 : .3);
                                var i = e.changeName ? M.getMeshByName(e.changeName) : M.getMeshByName("pSphere1");
                                i.scaling.set(l, l, l), this.zoomOut(), e.modelUrl && (c = e.modelUrl);
                                var n = a(c);
                                BABYLON.SceneLoader.ImportMesh("", n.path, n.name, M, function(n) {
                                    n.forEach(function(t) {
                                        t.actionManager = new BABYLON.ActionManager(M)
                                    }), m || O.animationManager.pause(), e.addShadow && r(n, i), t && t(), S.emit("backgroundLoaded", n)
                                })
                            }
                        }
                        this.addDrag = A
                    }

                    function u(t, e) {
                        O = t, d(e)
                    }

                    function p() {
                        var t = document.createElement("div");
                        $(t).addClass("loading"), $(t).css({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginLeft: "-29px",
                            marginTop: "-39px",
                            textAlign: "center",
                            width: "58px",
                            height: "78px"
                        }), $(t).html(' \n        <div class="outer" id="outer1" style = "">\n            <img class = \'img\' src = ' + v.default+' style = "display: block; margin-bottom: 5px; width: 58px; height: 50px"/>\n            <label class="inner" style = "color: #fff;">100%</label>\n        <div>\n            '), 0 === $(".loading").length && $(document.body).append($(t))
                    }

                    function d(t) {


                        t = t || 0;

                        var e = parseInt(100 * t) + "%";

                        
                        $(".inner").html(e), 1 === t && $(".loading").remove()
                    }

                    function A(t, e, i) {
                        function n(n) {
                            var a = {
                                x: n.event.clientX,
                                y: n.event.clientY
                            };
                            u = r.createPickingRay(a.x, a.y);
                            var o = u.intersectsMesh(e);
                            if (o.hit) {
                                var s = h.pickedPoint,
                                    c = o.pickedPoint,
                                    l = void 0;
                                l = t.parent ? t.parent.getWorldMatrix().clone().invert() : BABYLON.Matrix.Identity(), s = BABYLON.Vector3.TransformCoordinates(s, l), c = BABYLON.Vector3.TransformCoordinates(c, l);
                                var p = s.subtract(c);
                                i || t.position.subtractInPlace(p), h = o, S.emit("dragMove", {
                                    mesh: t,
                                    dv: p
                                })
                            }
                        }

                        function a() {
                            r.onPointerObservable.remove(s), r.onPointerObservable.remove(c), s = c = null, o.execute(m.commands.SET_CAMERA_CONTROL, {
                                enabled: !0
                            }), S.emit("stopDrag", {
                                mesh: t
                            })
                        }
                        e.setEnabled(!1), e.isPickable = !1;
                        var r = t.getScene(),
                            o = r.babylonScene,
                            s = void 0,
                            c = void 0,
                            l = void 0,
                            u = void 0,
                            h = void 0;
                        t.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function(i) {
                            s || (l = {
                                x: i.pointerX,
                                y: i.pointerY
                            }, u = r.createPickingRay(l.x, l.y), h = u.intersectsMesh(e), h.hit && (S.emit("startDrag", {
                                mesh: t
                            }), o.execute(m.commands.SET_CAMERA_CONTROL, {
                                enabled: !1
                            }), s = r.onPointerObservable.add(n, BABYLON.PointerEventTypes.POINTERMOVE), c = r.onPointerObservable.add(a, BABYLON.PointerEventTypes.POINTERUP)))
                        }))
                    }
                    var O = !1,
                        S = this,
                        M = [],
                        E = new PIXI.Container,
                        x = Object.assign({}, t.config);
                    this.btnComponent = E;
                    var w = void 0;
                    E.on(l.default.radioButton.CHANGE, o);
                    var B = this.title;
                    this.popup.on(l.default.popup.CLOSE, n), h.default.apply(this.popup), f.default.apply(this.popup.closeBtn), this.popup.visible = !1, this.popup.defaultPosition = {
                        x: this.popup.x,
                        y: this.popup.y
                    }, this.addChild(E);
                    for (var C = 0; C < 100; C++) {
                        var T = this["cloneBtn" + C];
                        if (!T) break;
                        M.push(T), T.visible = !1
                    }
                    if (!M.length) throw "请配置cloneBtnX按钮";
                    var P = this.bottomMenu;
                    r.default.apply(P);
                    var L = P.y;
                    P.addEventListener(l.default.radioButton.CHANGE, a), P.check = function() {
                        return !1 === S.scene3D.isLoading || S.scene3D.disposeLoadingObjects()
                    }, x && x.func ? Object.assign(x.func, {
                        loading: u
                    }) : x.func = {
                        loading: u
                    }, x && x.camera && (x.camera = Object.assign({}, t.config.camera)), c.apply(S, [Object.assign({
                        callback: {
                            sceneCreationComplete: function() {
                                P.setActiveIndex(0)
                            }
                        }
                    }, x)]), P.bar.buttonMode = !0;
                    var _ = 0;
                    NBGesture.addGesture(P.bar, NBGesture.gesture.TAP, function() {
                        P.bar.gotoAndStop(!P.bar.currentFrame), i()
                    }), window.addEventListener("resize", e), P.bar.currentFrame = 0, e();
                    var N = !1,
                        k = !0,
                        Y = [],
                        R = void 0,
                        I = [],
                        D = []
                };
                var a = i(452),
                    r = n(a),
                    o = i(454),
                    s = n(o),
                    c = i(441),
                    l = n(c),
                    u = i(455),
                    h = n(u),
                    p = i(456),
                    f = n(p),
                    d = i(457),
                    v = n(d),
                    y = i(445).BabylonScene,
                    m = i(445).ConstName,
                    g = void 0
            },
            454: function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t) {
                    function e(t) {
                        if (c !== this && (!l.check || !1 !== l.check())) {
                            c && c.gotoAndStop(0);
                            var e = parseInt(this.name.replace(s, ""));
                            l.setActiveIndex(e)
                        }
                    }

                    function i(t) {
                        0 === this.currentFrame && this.gotoAndStop(1)
                    }

                    function n(t) {
                        1 === this.currentFrame && this.gotoAndStop(0)
                    }
                    for (var o = this, s = t ? t.name : "icon", c = null, l = this, u = 0; u < r; u++) {
                        if ("break" === function(t) {
                            var a = o[s + t];
                            if (!a) return "break";
                            if (a.buttonMode = !0, a.gotoAndStop) {
                                if (a.totalFrames > 3) throw "图标动画的帧数不能超过3帧，请调整结构或者联系作者"
                            } else a.gotoAndStop = function(t) {
                                a.component && a.component.gotoAndStop && a.component.gotoAndStop(t)
                            }, Object.defineProperty(a, "currentFrame", {
                                get: function() {
                                    return a.component.currentFrame
                                },
                                set: function(t) {
                                    a.component.currentFrame = t
                                }
                            }), Object.defineProperty(a, "totalFrames", {
                                get: function() {
                                    return a.component.totalFrames
                                }
                            });
                            window.NBGesture ? NBGesture.addGesture(a, NBGesture.gesture.TAP, e) : a.addEventListener(TouchEvent.TOUCH_END, e), 3 === a.totalFrames && (a.addEventListener(MouseEvent.MOUSE_OVER, i), a.addEventListener(MouseEvent.MOUSE_OUT, n))
                        }(u)) break
                    }
                    this.getActiveButton = function() {
                        return c
                    }, this.setActiveIndex = function(t) {
                        var e = o[s + t];
                        if (!e) return c && c.gotoAndStop(0), c = null, void l.emit(a.default.radioButton.CHANGE, {
                            index: -1
                        });
                        c = e;
                        var i = c.totalFrames;
                        void 0 === i && (i = c.component.totalFrames), c.currentFrame === c.totalFrames - 1 ? c.gotoAndStop(0) : c.gotoAndStop(i - 1), c = null, l.emit(a.default.radioButton.CHANGE, {
                            index: t
                        })
                    }
                };
                var n = i(441),
                    a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n),
                    r = 100
            },
            455: function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function(t) {
                    function e(t) {
                        r.visible = !1, r.emit(a.default.popup.CLOSE)
                    }
                    var i = this,
                        n = this.closeBtn,
                        r = this;
                    n && n.addEventListener(TouchEvent.TAP, e), NBDrag.addDrag(this), this.on(NBDrag.event.DRAG_MOVE, function() {
                        i.y = i.y < 0 ? 0 : i.y > 720 - i.height ? 720 - i.height : i.y, i.x = i.x < 0 ? 0 : i.x > 1280 - i.width ? 1280 - i.width : i.x
                    }), this.setContent = function(t) {
                        r.intro.text = t || "", r.intro.style.font = "20px 'Microsoft YaHei'"
                    }, this.setContent(t), r.intro.style.lineHeight = 50
                };
                var n = i(441),
                    a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n)
            },
            456: function(t, e, i) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = function() {
                    function t() {
                        this.gotoAndStop(this.totalFrames - 1)
                    }

                    function e() {
                        this.gotoAndStop(0)
                    }

                    function i(t) {
                        0 === this.currentFrame && this.gotoAndStop(1)
                    }

                    function n(t) {
                        1 === this.currentFrame && this.gotoAndStop(0)
                    }
                    this.buttonMode = !0, this.addEventListener(TouchEvent.TOUCH_BEGIN, t), this.addEventListener(TouchEvent.TOUCH_END, e), this.addEventListener(TouchEvent.TOUCH_END_OUDSIDE, e), 3 === this.totalFrames && (this.addEventListener(MouseEvent.MOUSE_OVER, i), this.addEventListener(MouseEvent.MOUSE_OUT, n))
                }
            },
            457: function(t, e, i) {
                t.exports = i.p + "275438e7a3d916821817a4545dd47635.gif"
            },
            458: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = i(439),
                    o = function() {
                        function t() {
                            n(this, t)
                        }
                        return a(t, null, [{
                            key: "dragOnVector",
                            value: function(t, e, i) {}
                        }, {
                            key: "dragOnPlane",
                            value: function(t, e) {
                                function i(i) {
                                    var n = {
                                        x: i.event.clientX,
                                        y: i.event.clientY
                                    };
                                    u = a.createPickingRay(n.x, n.y);
                                    var r = u.intersectsMesh(e);
                                    if (r.hit) {
                                        var o = h.pickedPoint,
                                            s = r.pickedPoint,
                                            c = void 0;
                                        c = t.parent ? t.parent.getWorldMatrix().clone().invert() : BABYLON.Matrix.Identity(), o = BABYLON.Vector3.TransformCoordinates(o, c), s = BABYLON.Vector3.TransformCoordinates(s, c);
                                        var l = o.subtract(s);
                                        t.position.subtractInPlace(l), h = r
                                    }
                                }

                                function n() {
                                    a.onPointerObservable.remove(s), a.onPointerObservable.remove(c), s = c = null, o.execute(r.commands.SET_CAMERA_CONTROL, {
                                        enabled: !0
                                    })
                                }
                                e.setEnabled(!1), e.isPickable = !1;
                                var a = t.getScene(),
                                    o = a.babylonScene,
                                    s = void 0,
                                    c = void 0,
                                    l = void 0,
                                    u = void 0,
                                    h = void 0,
                                    p = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function(t) {
                                        s || (l = {
                                            x: t.pointerX,
                                            y: t.pointerY
                                        }, u = a.createPickingRay(l.x, l.y), h = u.intersectsMesh(e), h.hit && (o.execute(r.commands.SET_CAMERA_CONTROL, {
                                            enabled: !1
                                        }), s = a.onPointerObservable.add(i, BABYLON.PointerEventTypes.POINTERMOVE), c = a.onPointerObservable.add(n, BABYLON.PointerEventTypes.POINTERUP)))
                                    });
                                t.actionManager.registerAction(p)
                            }
                        }]), t
                    }();
                t.exports = o
            },
            459: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = i(439),
                    o = function() {
                        function t() {
                            n(this, t)
                        }
                        return a(t, null, [{
                            key: "addRotate",
                            value: function(t, e, i) {
                                function n(i) {
                                    var n = c.createPickingRay(i.event.clientX, i.event.clientY),
                                        a = n.intersectsMesh(e);
                                    if (a.hit) {
                                        var r = a.pickedPoint,
                                            s = o(r),
                                            l = s - m;
                                        l > Math.PI ? l = 2 * -Math.PI + l : l < -Math.PI && (l += 2 * Math.PI);
                                        var u = t.rotation[d] - l;
                                        void 0 !== v && void 0 !== y && (u < v && (u = v), u > y && (u = y)), t.rotation[d] = u, m = s
                                    }
                                }

                                function a() {
                                    c.onPointerObservable.remove(u), c.onPointerObservable.remove(h), u = h = null, l.execute(r.commands.SET_CAMERA_CONTROL, {
                                        enabled: !0
                                    })
                                }

                                function o(t) {
                                    var i = e.getWorldMatrix().clone().invert(),
                                        n = BABYLON.Vector3.TransformCoordinates(t, i);
                                    return Math.atan2(n.y - f.y, n.x - f.x)
                                }

                                function s(i) {
                                    var n = t.getWorldMatrix().clone(),
                                        a = BABYLON.Vector3.TransformCoordinates(i, n),
                                        r = e.getWorldMatrix().clone().invert();
                                    return a = BABYLON.Vector3.TransformCoordinates(a, r)
                                }
                                i = i || {};
                                var c = t.getScene(),
                                    l = c.babylonScene,
                                    u = void 0,
                                    h = void 0;
                                i.pivot = i.pivot || new BABYLON.Vector3(0, 0, 0);
                                var p = s(i.pivot);
                                e.position.copyFrom(p);
                                var f = s(i.pivot),
                                    d = i.rotateAxis || "y",
                                    v = i.startAngle,
                                    y = i.endAngle;
                                if (void 0 !== v && void 0 !== y && v > y) throw "起始角度不能大于结束角度";
                                e.setEnabled(!1), e.isPickable = !1;
                                var m = void 0,
                                    b = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function(t) {
                                        var i = c.createPickingRay(t.pointerX, t.pointerY),
                                            s = i.intersectsMesh(e);
                                        if (s.hit) {
                                            l.execute(r.commands.SET_CAMERA_CONTROL, {
                                                enabled: !1
                                            }), u = c.onPointerObservable.add(n, BABYLON.PointerEventTypes.POINTERMOVE), h = c.onPointerObservable.add(a, BABYLON.PointerEventTypes.POINTERUP);
                                            var p = s.pickedPoint;
                                            m = o(p)
                                        }
                                    });
                                t.actionManager.registerAction(b)
                            }
                        }]), t
                    }();
                t.exports = o
            },
            460: function(t, e, i) {
                "use strict";
                (function(e) {
                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var a = i(461),
                        r = i(439),
                        o = {
                            FREE: 0,
                            ACTIVE: 1
                        },
                        s = {
                            startAxis: BABYLON.Vector3.Up(),
                            startPosition: BABYLON.Vector3.Zero(),
                            startAxisForDisc: BABYLON.Vector3.Forward()
                        },
                        c = function t(i, c, l) {
                            function u() {
                            	
                                if (d.state === o.ACTIVE) {
                                    d.lastPosition = d.currentPosition, d.currentPosition = h(), d.lastRotation = d.currentRotation;
                                    var t = BABYLON.Vector3.Dot(d.currentPosition, d.startPosition) / d._config.diameter,
                                        e = BABYLON.Vector3.Dot(d.currentPosition, d.nPosition) / d._config.diameter;
                                    console.log(t, e);
                                    var i = Math.acos(t) * e / Math.abs(e);
                                    console.log(180 * i / Math.PI), d.currentRotation = i;
                                    var n = d.currentRotation - d.lastRotation,
                                        a = d._state.meshRotation + n;
                                    d._config.isFree ? d._state.rotation = a : d._state.rotation = Math.max(d._config.lowerAngle, Math.min(d._config.upperAngle, a)), console.log(d.targetMesh.position), d._config.callback && d._confog.callback(d._state)
                                }
                            }

                            function h() {
                                var t = void 0,
                                    e = i.pointerX,
                                    n = i.pointerY,
                                    a = i.createPickingRay(e, n),
                                    r = a.origin,
                                    o = a.direction;
                                if (o.normalize() === r.subtract(d._config.pivot).normalize()) {
                                    var s = BABYLON.Vector3.Dot(r.subtract(d._config.pivot), d._config.axis) / d._config.axis.lengthSquare();
                                    t = r.subtract(d._config.axis.scale(s)).scale(.01)
                                } else {
                                    var c = BABYLON.Vector3.Dot(r.subtract(d._config.pivot), d._config.axis) / BABYLON.Vector3.Dot(o, d._config.axis);
                                    t = r.add(o.scale(-c))
                                }
                                var l = t.subtract(d._config.pivot).normalize().scale(d._config.diameter);
                                return BABYLON.MeshBuilder.CreateSphere("", {
                                    diameter: .1
                                }, i).position = t.clone(), l
                            }

                            function p() {
                                i.babylonScene.execute(r.commands.SET_CAMERA_CONTROL, {
                                    enabled: !0
                                }), d.startPosition = null, d.currentPosition = null, d.startRotation = null, d.currentRadius = 0, d.state = o.FREE, i.unregisterBeforeRender(u)
                            }
                            var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            n(this, t);
                            var d = this;
                            d.state = o.FREE, d.startPosition = null, d.currentPosition = null, d.lastPosition = null, d.currentRadius = 0, d.fromRotation = null, d.lastRotation = 0, d.nPosition = null, d.targetMesh = c, d.targetMesh.controller || (d.targetMesh.controller = []);
                            var v = d.targetMesh.controller.length;
                            d.targetMesh.controller.push(d), d.strtPointer = 0;
                            var y = null,
                                m = null;
                            if (d._config = {
                                pivot: BABYLON.Vector3.Zero(),
                                axis: s.startAxis,
                                isFree: !1,
                                lowerAngle: 0,
                                upperAngle: 0,
                                diameter: 1,
                                thickness: .08,
                                tessellation: 100,
                                callback: null
                            }, d._state = {
                                meth: d.targetMesh,
                                rotation: 0
                            }, Object.assign(d._config, f), d._config.axis.normalize(), d._discConfig = {
                                radius: (d._config.diameter - d._config.thickness) / 2 - .001,
                                arc: .001,
                                tessellation: 30,
                                sideOrientation: BABYLON.Mesh.DOUBLESIDE,
                                updatable: !0
                            }, !d._config.axis.length) throw "Unable zero vector to rotate around!!";
                            l && (d._state.currentRotation = l), i.babylonScene.helperMaterial ? y = i.babylonScene.helperMaterial : (y = new BABYLON.StandardMaterial("controllerMaterial", i), y.diffuseColor.set(.28235, .57647, .41176), y.alpha = .6, i.babylonScene.helperMaterial = y), i.babylonScene.drawPlaneMaterial ? m = i.babylonScene.drawPlaneMaterial : (m = new BABYLON.StandardMaterial("drawMaterial", i), m.diffuseColor.set(.6, .6, .6), m.alpha = .8, m.useLogarithmicDepth = !0, i.babylonScene.drawPlaneMaterial = m);
                            d._config.diameter, Math.max(5 * d._config.thickness, .1);
                            d.areaMesh = BABYLON.MeshBuilder.CreateCylinder(d.targetMesh.name + "Helper" + v + "Area", {
                                height: 10 * d._config.thickness,
                                diameterTop: d._config.diameter + 5 * d._config.thickness,
                                diameterBottom: d._config.diameter + 5 * d._config.thickness,
                                tessellation: 15
                            }, i), d.areaMesh.isVisible = !0, d.areaMesh.visibility = .2;
                            var b = {
                                diameter: d._config.diameter,
                                thickness: d._config.thickness,
                                tessellation: d._config.tessellation
                            };
                            d.flagMesh = BABYLON.MeshBuilder.CreateTorus(d.targetMesh.name + "Helper" + v + "Flag", b, i), d.flagMesh.material = y, d.flagMesh.position = d.areaMesh.position, d.flagMesh.rotation = d.areaMesh.rotation, d.flagMesh.isVisible = !0, d.flagMesh.visibility = 0, d.planeMesh = BABYLON.MeshBuilder.CreatePlane(d.targetMesh.name + "Helper" + v + "Plane", {
                                size: d._config.diameter / 2,
                                sideOrientation: BABYLON.Mesh.DOUBLESIDE
                            }, i), d.planeMesh.visibility = .1, d.discMesh = BABYLON.MeshBuilder.CreateDisc(d.targetMesh.Name + "Helper" + v + "Sector", d._discConfig, i), d.discMesh.material = y, d.discMesh.visibility = 0, d.dRotate = Math.acos(BABYLON.Vector3.Dot(s.startAxis, d._config.axis)), d.dRotate >= .001 && (d.tAxis = BABYLON.Vector3.Cross(s.startAxis, d._config.axis).normalize(), d.flagMesh.rotate(d.tAxis, d.dRotate), d.areaMesh.rotate(d.tAxis, d.dRotate), console.log("rAxis", d._config.axis)), d.discRotate = Math.acos(BABYLON.Vector3.Dot(s.startAxisForDisc, d._config.axis)), console.log("----> rotation", d.discRotate), d.discRotate >= 1e-5 && (d.discAxis = BABYLON.Vector3.Cross(s.startAxisForDisc, d._config.axis).normalize(), d.discMesh.rotate(d.discAxis, d.discRotate), d.planeMesh.rotate(d.discAxis, d.discRotate), console.log("start: mesh, disc", s.startAxis, s.startAxisForDisc), console.log("axis, rotation", d.discAxis, d.discRotate)), d.flagMesh.position = d.areaMesh.position = d.planeMesh.position = d.discMesh.position = d._config.pivot;
                            var g = function(t) {
                                    d.flagMesh.visibility = .8, d.discMesh.visibility = 0, d.state === o.ACTIVE && p()
                                },
                                A = function(t) {
                                    d.flagMesh.visibility = 0, d.discMesh.visibility = 0, d.state === o.ACTIVE && p()
                                },
                                O = function(t) {
                                    (d.flagMesh.visibility = 1, d._discConfig.arc = .6, BABYLON.VertexData.CreateDisc(d._discConfig).applyToMesh(d.discMesh, d._discConfig.updatable), d.discMesh.visibility = 1, d.state === o.FREE) && (d.state = o.ACTIVE, i.babylonScene.execute(r.commands.SET_CAMERA_CONTROL, {
                                        enabled: !1
                                    }), i.pointerX, i.pointerY, d.startPosition = h().normalize(), d.currentPosition = d.startPosition, d.currentRotation = 0, d.nPosition = BABYLON.Vector3.Cross(d._config.axis, d.startPosition).normalize(), i.registerBeforeRender(u))
                                };
                            d.areaMesh.actionManager = new a(i.babylonScene, {
                                onHover: g,
                                onOut: A,
                                onPick: O
                            });
                            var S = new BABYLON.ActionManager(i);
                            d.planeMesh.actionManager = S, f.isDebug && (d.planeMesh.visibility = d.flagMesh.visibility = 1), e.tm = d.targetMesh, e.gm = d.flagMesh, e.am = d.areaMesh, e.pm = d.planeMesh, e.dm = d.discMesh, e.mm = y
                        };
                    t.exports = c
                }).call(e, i(1))
            },
            461: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = function(t) {
                        function e(t, i) {
                            n(this, e);
                            var r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.scene));
                            return r.babylonScene = t, r.isOver = !1, r.isPick = !1, r.activities = i, r.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, r.onPointerOver.bind(r))), r.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, r.onPointerOut.bind(r))), r.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, r.onPick.bind(r))), r.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, r.onPickUp.bind(r))), r.babylonScene.scene.onPointerObservable.add(r.onPickUp.bind(r), BABYLON.PointerEventTypes.POINTERUP), r
                        }
                        return r(e, t), o(e, [{
                            key: "onPointerOver",
                            value: function(t) {
                                var e = t.source;
                                console.log("pointer over " + e.name), this.target = e, this.isOver = !0, this.check(e, t)
                            }
                        }, {
                            key: "onPointerOut",
                            value: function(t) {
                                var e = t.source;
                                console.log("pointer out " + e.name), this.isOver = !1, this.check(e, t)
                            }
                        }, {
                            key: "onPick",
                            value: function(t) {
                                var e = t.source;
                                console.log("pick " + e.name), this.isPick = !0, this.check(e, t)
                            }
                        }, {
                            key: "onPickUp",
                            value: function(t) {
                                t.source;
                                this.isPick = !1, this.check(this.target, t)
                            }
                        }, {
                            key: "onLongPress",
                            value: function(t) {
                                var e = t.source;
                                console.log("pointer long press " + e.name)
                            }
                        }, {
                            key: "check",
                            value: function(t, e) {
                                t && (this.isPick ? this.activities.onPick(e) : this.isOver ? this.activities.onHover(e) : this.activities.onOut(e))
                            }
                        }]), e
                    }(BABYLON.ActionManager);
                t.exports = s
            },
            462: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = i(463),
                    r = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(a),
                    o = function t(e, i, a, o, s) {
                        n(this, t);
                        var c = this;
                        c.control = new r.default.EditControl(e, i.activeCamera, i.interactiveCanvas, a || .75, o || !1), c.control.enableRotation()
                    };
                t.exports = o
            },
            463: function(t, e, i) {
                "use strict";
                var n;
                ! function(t) {
                    ! function(t) {
                        ! function(t) {
                            ! function(t) {
                                var e, i = BABYLON.Axis,
                                    n = BABYLON.Color3,
                                    a = BABYLON.Mesh,
                                    r = BABYLON.MeshBuilder,
                                    o = BABYLON.Path2,
                                    s = BABYLON.Quaternion,
                                    c = BABYLON.Space,
                                    l = BABYLON.StandardMaterial,
                                    u = BABYLON.Vector3;
                                ! function(t) {
                                    t[t.TRANS = 0] = "TRANS", t[t.ROT = 1] = "ROT", t[t.SCALE = 2] = "SCALE"
                                }(e || (e = {}));
                                var h = function() {
                                    function t(t, e, i, n, r) {
                                        var o = this;
                                        this.local = !0, this.snapT = !1, this.snapR = !1, this.transSnap = 1, this.rotSnap = Math.PI / 18, this.axesLen = .4, this.axesScale = 1, this.visibility = .7, this.distFromCamera = 2, this.toParent = new u(0, 0, 0), this.cameraNormal = new u(0, 0, 0), this.actionListener = null, this.actionStartListener = null, this.actionEndListener = null, this.pDown = !1, this.pointerIsOver = !1, this.editing = !1, this.snapRX = 0, this.snapRY = 0, this.snapRZ = 0, this.snapTV = new u(0, 0, 0), this.transBy = new u(0, 0, 0), this.snapS = !1, this.snapSX = 0, this.snapSY = 0, this.snapSZ = 0, this.snapSA = 0, this.snapSV = new u(0, 0, 0), this.scaleSnap = .25, this.scale = new u(0, 0, 0), this.eulerian = !1, this.snapRA = 0, this.cN = new u(0, 0, 0), this.transEnabled = !1, this.rotEnabled = !1, this.scaleEnabled = !1, this.localX = new u(0, 0, 0), this.localY = new u(0, 0, 0), this.localZ = new u(0, 0, 0), this.mesh = t, this.canvas = i, this.axesScale = n, this.eulerian = null !== r && r, this.checkQuaternion(), this.scene = t.getScene(), this.mainCamera = e, this.actHist = new p(t, 10), t.computeWorldMatrix(!0), this.boundingDimesion = this.getBoundingDimension(t), this.theParent = new a("EditControl", this.scene), this.theParent.rotationQuaternion = s.Identity(), this.theParent.visibility = 0, this.theParent.isPickable = !1, this.createMaterials(this.scene), this.createGuideAxes(), this.guideCtl.parent = this.theParent, this.createPickPlanes(), this.pickPlanes.parent = this.theParent, this.pointerdown = function(t) {
                                            return o.onPointerDown(t)
                                        }, this.pointerup = function(t) {
                                            return o.onPointerUp(t)
                                        }, this.pointermove = function(t) {
                                            return o.onPointerMove(t)
                                        }, i.addEventListener("pointerdown", this.pointerdown, !1), i.addEventListener("pointerup", this.pointerup, !1), i.addEventListener("pointermove", this.pointermove, !1), this.setLocalAxes(t), this.renderer = function() {
                                            return o.renderLoopProcess()
                                        }, this.scene.registerBeforeRender(this.renderer)
                                    }
                                    return t.prototype.checkQuaternion = function() {
                                        if (!this.eulerian && (null == this.mesh.rotationQuaternion || void 0 == this.mesh.rotationQuaternion)) throw "Error: Eulerian is set to false but the mesh's rotationQuaternion is not set."
                                    }, t.prototype.setAxesScale = function() {
                                        this.theParent.position.subtractToRef(this.mainCamera.position, this.toParent), u.FromFloatArrayToRef(this.mainCamera.getWorldMatrix().asArray(), 8, this.cameraNormal);
                                        var t = u.Dot(this.toParent, this.cameraNormal) / this.cameraNormal.length(),
                                            e = t / this.distFromCamera;
                                        u.FromFloatsToRef(e, e, e, this.theParent.scaling), u.FromFloatsToRef(e, e, e, this.pALL.scaling)
                                    }, t.prototype.setAxesRotation = function() {
                                        if (this.local)
                                            if (this.eulerian) {
                                                var t = this.mesh.rotation;
                                                this.theParent.rotationQuaternion.copyFrom(BABYLON.Quaternion.RotationYawPitchRoll(t.y, t.x, t.z))
                                            } else this.theParent.rotationQuaternion = this.mesh.rotationQuaternion
                                    }, t.prototype.renderLoopProcess = function() {
                                        this.theParent.position = this.mesh.getAbsolutePivotPoint(), this.setAxesScale(), this.setAxesRotation(), this.onPointerOver()
                                    }, t.prototype.switchTo = function(t, e) {
                                        t.computeWorldMatrix(!0), this.mesh = t, null != e && (this.eulerian = e), this.checkQuaternion(), this.setLocalAxes(t), this.actHist = new p(t, 10)
                                    }, t.prototype.setUndoCount = function(t) {
                                        this.actHist.setCapacity(t)
                                    }, t.prototype.undo = function() {
                                        var t = this.actHist.undo();
                                        this.mesh.computeWorldMatrix(!0), this.setLocalAxes(this.mesh), this.callActionStartListener(t), this.callActionListener(t), this.callActionEndListener(t)
                                    }, t.prototype.redo = function() {
                                        var t = this.actHist.redo();
                                        this.mesh.computeWorldMatrix(!0), this.setLocalAxes(this.mesh), this.callActionStartListener(t), this.callActionListener(t), this.callActionEndListener(t)
                                    }, t.prototype.detach = function() {
                                        this.canvas.removeEventListener("pointerdown", this.pointerdown, !1), this.canvas.removeEventListener("pointerup", this.pointerup, !1), this.canvas.removeEventListener("pointermove", this.pointermove, !1), this.scene.unregisterBeforeRender(this.renderer), this.removeAllActionListeners(), this.disposeAll()
                                    }, t.prototype.disposeAll = function() {
                                        this.theParent.dispose(), this.disposeMaterials(), this.actHist = null
                                    }, t.prototype.addActionListener = function(t) {
                                        this.actionListener = t
                                    }, t.prototype.removeActionListener = function() {
                                        this.actionListener = null
                                    }, t.prototype.addActionStartListener = function(t) {
                                        this.actionStartListener = t
                                    }, t.prototype.removeActionStartListener = function() {
                                        this.actionStartListener = null
                                    }, t.prototype.addActionEndListener = function(t) {
                                        this.actionEndListener = t
                                    }, t.prototype.removeActionEndListener = function() {
                                        this.actionEndListener = null
                                    }, t.prototype.removeAllActionListeners = function() {
                                        this.actionListener = null, this.actionStartListener = null, this.actionEndListener = null
                                    }, t.prototype.onPointerDown = function(t) {
                                        var e = this;
                                        if (this.pDown = !0, 0 == t.button) {
                                            var i = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(t) {
                                                if (e.transEnabled) {
                                                    if (t == e.tX || t == e.tY || t == e.tZ || t == e.tXZ || t == e.tZY || t == e.tYX || t == e.tAll) return !0
                                                } else if (e.rotEnabled) {
                                                    if (t == e.rX || t == e.rY || t == e.rZ || t == e.rAll) return !0
                                                } else if (e.scaleEnabled && (t == e.sX || t == e.sY || t == e.sZ || t == e.sXZ || t == e.sZY || t == e.sYX || t == e.sAll)) return !0;
                                                return !1
                                            }, null, this.mainCamera);
                                            if (i.hit) {
                                                this.setAxesVisiblity(0), this.axisPicked = i.pickedMesh;
                                                var n = this.axisPicked.getChildren();
                                                n.length > 0 ? n[0].visibility = this.visibility : this.axisPicked.visibility = this.visibility;
                                                var a = this.axisPicked.name;
                                                "X" == a ? this.bXaxis.visibility = 1 : "Y" == a ? this.bYaxis.visibility = 1 : "Z" == a ? this.bZaxis.visibility = 1 : "XZ" == a ? (this.bXaxis.visibility = 1, this.bZaxis.visibility = 1) : "ZY" == a ? (this.bZaxis.visibility = 1, this.bYaxis.visibility = 1) : "YX" == a ? (this.bYaxis.visibility = 1, this.bXaxis.visibility = 1) : "ALL" == a && (this.bXaxis.visibility = 1, this.bYaxis.visibility = 1, this.bZaxis.visibility = 1), this.setEditing(!0), this.pickPlane = this.getPickPlane(this.axisPicked), this.prevPos = this.getPosOnPickPlane(), window.setTimeout(function(t, i) {
                                                    return e.detachControl(t, i)
                                                }, 0, this.mainCamera, this.canvas)
                                            }
                                        }
                                    }, t.prototype.setEditing = function(t) {
                                        this.editing = t, t ? (this.setActionType(), this.callActionStartListener(this.actionType)) : this.callActionEndListener(this.actionType)
                                    }, t.prototype.isEditing = function() {
                                        return this.editing
                                    }, t.prototype.detachControl = function(t, e) {
                                        var i = t,
                                            n = e;
                                        i.detachControl(n)
                                    }, t.prototype.isPointerOver = function() {
                                        return this.pointerIsOver
                                    }, t.prototype.onPointerOver = function() {
                                        var t = this;
                                        if (!this.pDown) {
                                            var e = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(e) {
                                                if (t.transEnabled) {
                                                    if (e == t.tX || e == t.tY || e == t.tZ || e == t.tXZ || e == t.tZY || e == t.tYX || e == t.tAll) return !0
                                                } else if (t.rotEnabled) {
                                                    if (e == t.rX || e == t.rY || e == t.rZ || e == t.rAll) return !0
                                                } else if (t.scaleEnabled && (e == t.sX || e == t.sY || e == t.sZ || e == t.sXZ || e == t.sZY || e == t.sYX || e == t.sAll)) return !0;
                                                return !1
                                            }, null, this.mainCamera);
                                            if (e.hit) {
                                                if (e.pickedMesh != this.prevOverMesh) {
                                                    if (this.pointerIsOver = !0, this.clearPrevOverMesh(), this.prevOverMesh = e.pickedMesh, this.rotEnabled) this.savedCol = this.prevOverMesh.getChildren()[0].color, this.prevOverMesh.getChildren()[0].color = n.White();
                                                    else {
                                                        var i = this.prevOverMesh.getChildren();
                                                        i.length > 0 ? (this.savedMat = i[0].material, i[0].material = this.whiteMat) : (this.savedMat = this.prevOverMesh.material, this.prevOverMesh.material = this.whiteMat)
                                                    }
                                                    "X" == this.prevOverMesh.name ? this.xaxis.color = n.White() : "Y" == this.prevOverMesh.name ? this.yaxis.color = n.White() : "Z" == this.prevOverMesh.name && (this.zaxis.color = n.White())
                                                }
                                            } else this.pointerIsOver = !1, null != this.prevOverMesh && (this.restoreColor(this.prevOverMesh), this.prevOverMesh = null)
                                        }
                                    }, t.prototype.clearPrevOverMesh = function() {
                                        null != this.prevOverMesh && (this.prevOverMesh.visibility = 0, this.restoreColor(this.prevOverMesh))
                                    }, t.prototype.restoreColor = function(t) {
                                        switch (t.name) {
                                            case "X":
                                                this.xaxis.color = n.Red();
                                                break;
                                            case "Y":
                                                this.yaxis.color = n.Green();
                                                break;
                                            case "Z":
                                                this.zaxis.color = n.Blue()
                                        }
                                        if (this.rotEnabled) t.getChildren()[0].color = this.savedCol;
                                        else {
                                            var e = t.getChildren();
                                            e.length > 0 ? e[0].material = this.savedMat : t.material = this.savedMat
                                        }
                                    }, t.prototype.onPointerUp = function(t) {
                                        this.pDown = !1, this.editing && (this.mainCamera.attachControl(this.canvas), this.setEditing(!1), this.setAxesVisiblity(1), this.hideBaxis(), this.restoreColor(this.prevOverMesh), this.prevOverMesh = null, this.actHist.add(this.actionType))
                                    }, t.prototype.setActionType = function() {
                                        this.transEnabled ? this.actionType = e.TRANS : this.rotEnabled ? this.actionType = e.ROT : this.scaleEnabled && (this.actionType = e.SCALE)
                                    }, t.prototype.callActionListener = function(t) {
                                        null != this.actionListener && window.setTimeout(this.actionListener, 0, t)
                                    }, t.prototype.callActionStartListener = function(t) {
                                        null != this.actionStartListener && window.setTimeout(this.actionStartListener, 0, t)
                                    }, t.prototype.callActionEndListener = function(t) {
                                        null != this.actionEndListener && window.setTimeout(this.actionEndListener, 0, t)
                                    }, t.prototype.onPointerMove = function(t) {
                                        if (this.pDown && this.editing && null != this.prevPos) {
                                            this.pickPlane = this.getPickPlane(this.axisPicked);
                                            var e = this.getPosOnPickPlane();
                                            if (null != e) {
                                                if (this.rotEnabled) this.doRotation(this.mesh, this.axisPicked, e, this.prevPos);
                                                else {
                                                    var i = e.subtract(this.prevPos);
                                                    if (0 == i.x && 0 == i.y && 0 == i.z) return;
                                                    this.transEnabled ? this.doTranslation(i) : this.scaleEnabled && this.local && this.doScaling(i)
                                                }
                                                this.prevPos = e, this.callActionListener(this.actionType)
                                            }
                                        }
                                    }, t.prototype.getPickPlane = function(t) {
                                        var e = t.name;
                                        if (this.transEnabled || this.scaleEnabled) {
                                            if ("XZ" == e) return this.pXZ;
                                            if ("ZY" == e) return this.pZY;
                                            if ("YX" == e) return this.pYX;
                                            if ("ALL" == e) return this.pALL;
                                            var i = this.mesh.getWorldMatrix().clone().invert(),
                                                n = u.TransformCoordinates(this.mainCamera.position, i),
                                                a = this.mesh.scaling;
                                            if ("X" === e) return Math.abs(n.y * a.y) > Math.abs(n.z * a.z) ? this.pXZ : this.pYX;
                                            if ("Z" === e) return Math.abs(n.y * a.y) > Math.abs(n.x * a.x) ? this.pXZ : this.pZY;
                                            if ("Y" === e) return Math.abs(n.z * a.z) > Math.abs(n.x * a.x) ? this.pYX : this.pZY
                                        } else {
                                            if (!this.rotEnabled) return null;
                                            switch (e) {
                                                case "X":
                                                    return this.pZY;
                                                case "Y":
                                                    return this.pXZ;
                                                case "Z":
                                                    return this.pYX;
                                                default:
                                                    return this.pALL
                                            }
                                        }
                                    }, t.prototype.doTranslation = function(t) {
                                        this.transBy.x = 0, this.transBy.y = 0, this.transBy.z = 0;
                                        var e = this.axisPicked.name;
                                        "X" != e && "XZ" != e && "YX" != e && "ALL" != e || (this.local ? this.transBy.x = u.Dot(t, this.localX) / (this.localX.length() * this.mesh.scaling.x) : this.transBy.x = t.x), "Y" != e && "ZY" != e && "YX" != e && "ALL" != e || (this.local ? this.transBy.y = u.Dot(t, this.localY) / (this.localY.length() * this.mesh.scaling.y) : this.transBy.y = t.y), "Z" != e && "XZ" != e && "ZY" != e && "ALL" != e || (this.local ? this.transBy.z = u.Dot(t, this.localZ) / (this.localZ.length() * this.mesh.scaling.z) : this.transBy.z = t.z), this.transWithSnap(this.mesh, this.transBy, this.local), this.transBoundsMin && (this.mesh.position.x = Math.max(this.mesh.position.x, this.transBoundsMin.x), this.mesh.position.y = Math.max(this.mesh.position.y, this.transBoundsMin.y), this.mesh.position.z = Math.max(this.mesh.position.z, this.transBoundsMin.z)), this.transBoundsMax && (this.mesh.position.x = Math.min(this.mesh.position.x, this.transBoundsMax.x), this.mesh.position.y = Math.min(this.mesh.position.y, this.transBoundsMax.y), this.mesh.position.z = Math.min(this.mesh.position.z, this.transBoundsMax.z)), this.mesh.computeWorldMatrix(!0)
                                    }, t.prototype.transWithSnap = function(t, e, n) {
                                        if (this.snapT) {
                                            var a = !1;
                                            if (this.snapTV.addInPlace(e), Math.abs(this.snapTV.x) > this.tSnap.x / t.scaling.x && (this.snapTV.x > 0 ? e.x = this.tSnap.x : e.x = -this.tSnap.x, e.x = e.x / t.scaling.x, a = !0), Math.abs(this.snapTV.y) > this.tSnap.y / t.scaling.y && (this.snapTV.y > 0 ? e.y = this.tSnap.y : e.y = -this.tSnap.y, e.y = e.y / t.scaling.y, a = !0), Math.abs(this.snapTV.z) > this.tSnap.z / t.scaling.z && (this.snapTV.z > 0 ? e.z = this.tSnap.z : e.z = -this.tSnap.z, e.z = e.z / t.scaling.z, a = !0), !a) return;
                                            Math.abs(e.x) !== this.tSnap.x / t.scaling.x && (e.x = 0), Math.abs(e.y) !== this.tSnap.y / t.scaling.y && (e.y = 0), Math.abs(e.z) !== this.tSnap.z / t.scaling.z && (e.z = 0), u.FromFloatsToRef(0, 0, 0, this.snapTV), a = !1
                                        }
                                        n ? (this.mesh.translate(i.X, e.x, c.LOCAL), this.mesh.translate(i.Y, e.y, c.LOCAL), this.mesh.translate(i.Z, e.z, c.LOCAL)) : this.mesh.position.addInPlace(e)
                                    }, t.prototype.doScaling = function(t) {
                                        this.scale.x = 0, this.scale.y = 0, this.scale.z = 0;
                                        var e = this.axisPicked.name;
                                        if ("X" != e && "XZ" != e && "YX" != e || (this.scale.x = u.Dot(t, this.localX) / this.localX.length()), "Y" != e && "ZY" != e && "YX" != e || (this.scale.y = u.Dot(t, this.localY) / this.localY.length()), "Z" != e && "XZ" != e && "ZY" != e || (this.scale.z = u.Dot(t, this.localZ) / this.localZ.length()), "ALL" == e) {
                                            var i = u.Dot(t, this.mainCamera.upVector);
                                            this.scale.copyFromFloats(i, i, i)
                                        } else "XZ" == e ? Math.abs(this.scale.x) > Math.abs(this.scale.z) ? this.scale.z = this.scale.x : this.scale.x = this.scale.z : "ZY" == e ? Math.abs(this.scale.z) > Math.abs(this.scale.y) ? this.scale.y = this.scale.z : this.scale.z = this.scale.y : "YX" == e && (Math.abs(this.scale.y) > Math.abs(this.scale.x) ? this.scale.x = this.scale.y : this.scale.y = this.scale.x);
                                        var n = this.boundingDimesion;
                                        this.scale.x = this.scale.x / n.x, this.scale.y = this.scale.y / n.y, this.scale.z = this.scale.z / n.z, this.scaleWithSnap(this.mesh, this.scale), this.scaleBoundsMin && (this.mesh.scaling.x = Math.max(this.mesh.scaling.x, this.scaleBoundsMin.x), this.mesh.scaling.y = Math.max(this.mesh.scaling.y, this.scaleBoundsMin.y), this.mesh.scaling.z = Math.max(this.mesh.scaling.z, this.scaleBoundsMin.z)), this.scaleBoundsMax && (this.mesh.scaling.x = Math.min(this.mesh.scaling.x, this.scaleBoundsMax.x), this.mesh.scaling.y = Math.min(this.mesh.scaling.y, this.scaleBoundsMax.y), this.mesh.scaling.z = Math.min(this.mesh.scaling.z, this.scaleBoundsMax.z))
                                    }, t.prototype.scaleWithSnap = function(t, e) {
                                        if (this.snapS) {
                                            var i = !1;
                                            if (this.snapSV.addInPlace(e), Math.abs(this.snapSV.x) > this.scaleSnap && (e.x > 0 ? e.x = this.scaleSnap : e.x = -this.scaleSnap, i = !0), Math.abs(this.snapSV.y) > this.scaleSnap && (e.y > 0 ? e.y = this.scaleSnap : e.y = -this.scaleSnap, i = !0), Math.abs(this.snapSV.z) > this.scaleSnap && (e.z > 0 ? e.z = this.scaleSnap : e.z = -this.scaleSnap, i = !0), !i) return;
                                            Math.abs(e.x) !== this.scaleSnap && 0 !== e.x && (e.x = 0), Math.abs(e.y) !== this.scaleSnap && 0 !== e.y && (e.y = 0), Math.abs(e.z) !== this.scaleSnap && 0 !== e.z && (e.z = 0), u.FromFloatsToRef(0, 0, 0, this.snapSV), i = !1
                                        }
                                        t.scaling.addInPlace(e)
                                    }, t.prototype.getBoundingDimension = function(t) {
                                        var e = this.mesh.getBoundingInfo().boundingBox;
                                        return e.maximum.subtract(e.minimum)
                                    }, t.prototype.refreshBoundingInfo = function() {
                                        this.boundingDimesion = this.getBoundingDimension(this.mesh)
                                    }, t.prototype.doRotation = function(e, n, a, r) {
                                        var o = this.cN;
                                        u.TransformNormalToRef(i.Z, this.mainCamera.getWorldMatrix(), o);
                                        var s = t.getAngle(r, a, e.getAbsolutePivotPoint(), o);
                                        n == this.rX ? (this.snapR && (this.snapRX += s, s = 0, Math.abs(this.snapRX) >= this.rotSnap && (s = this.snapRX > 0 ? this.rotSnap : -this.rotSnap, this.snapRX = 0)), 0 !== s && (this.local ? (u.Dot(this.localX, o) < 0 && (s *= -1), e.rotate(i.X, s, c.LOCAL)) : e.rotate(new u(o.x, 0, 0), s, c.WORLD))) : n == this.rY ? (this.snapR && (this.snapRY += s, s = 0, Math.abs(this.snapRY) >= this.rotSnap && (s = this.snapRY > 0 ? this.rotSnap : -this.rotSnap, this.snapRY = 0)), 0 !== s && (this.local ? (u.Dot(this.localY, o) < 0 && (s *= -1), e.rotate(i.Y, s, c.LOCAL)) : e.rotate(new u(0, o.y, 0), s, c.WORLD))) : n == this.rZ ? (this.snapR && (this.snapRZ += s, s = 0, Math.abs(this.snapRZ) >= this.rotSnap && (s = this.snapRZ > 0 ? this.rotSnap : -this.rotSnap, this.snapRZ = 0)), 0 !== s && (this.local ? (u.Dot(this.localZ, o) < 0 && (s *= -1), e.rotate(i.Z, s, c.LOCAL)) : e.rotate(new u(0, 0, o.z), s, c.WORLD))) : n == this.rAll && (this.snapR && (this.snapRA += s, s = 0, Math.abs(this.snapRA) >= this.rotSnap && (s = this.snapRA > 0 ? this.rotSnap : -this.rotSnap, this.snapRA = 0)), 0 !== s && e.rotate(e.position.subtract(this.mainCamera.position), s, c.WORLD)), this.setLocalAxes(this.mesh), this.eulerian && 0 != s && (e.rotation = e.rotationQuaternion.toEulerAngles(), e.rotationQuaternion = null)
                                    }, t.prototype.getPosOnPickPlane = function() {
                                        var t = this,
                                            e = this.scene.pick(this.scene.pointerX, this.scene.pointerY, function(e) {
                                                return e == t.pickPlane
                                            }, null, this.mainCamera);
                                        return e.hit ? e.pickedPoint : null
                                    }, t.prototype.hideBaxis = function() {
                                        this.bXaxis.visibility = 0, this.bYaxis.visibility = 0, this.bZaxis.visibility = 0
                                    }, t.prototype.setAxesVisiblity = function(t) {
                                        this.transEnabled && (this.tEndX.visibility = t, this.tEndY.visibility = t, this.tEndZ.visibility = t, this.tEndXZ.visibility = t, this.tEndZY.visibility = t, this.tEndYX.visibility = t, this.tEndAll.visibility = t), this.rotEnabled && (this.rEndX.visibility = t, this.rEndY.visibility = t, this.rEndZ.visibility = t, this.rEndAll.visibility = t), this.scaleEnabled && (this.sEndX.visibility = t, this.sEndY.visibility = t, this.sEndZ.visibility = t, this.sEndXZ.visibility = t, this.sEndZY.visibility = t, this.sEndYX.visibility = t, this.sEndAll.visibility = t)
                                    }, t.prototype.isTranslationEnabled = function() {
                                        return this.transEnabled
                                    }, t.prototype.enableTranslation = function() {
                                        null == this.tX && (this.createTransAxes(), this.tCtl.parent = this.theParent), this.clearPrevOverMesh(), this.transEnabled || (this.tEndX.visibility = this.visibility, this.tEndY.visibility = this.visibility, this.tEndZ.visibility = this.visibility, this.tEndXZ.visibility = this.visibility, this.tEndZY.visibility = this.visibility, this.tEndYX.visibility = this.visibility, this.tEndAll.visibility = this.visibility, this.transEnabled = !0, this.disableRotation(), this.disableScaling())
                                    }, t.prototype.disableTranslation = function() {
                                        this.transEnabled && (this.tEndX.visibility = 0, this.tEndY.visibility = 0, this.tEndZ.visibility = 0, this.tEndXZ.visibility = 0, this.tEndZY.visibility = 0, this.tEndYX.visibility = 0, this.tEndAll.visibility = 0, this.transEnabled = !1)
                                    }, t.prototype.isRotationEnabled = function() {
                                        return this.rotEnabled
                                    }, t.prototype.returnEuler = function(t) {
                                        this.eulerian = t
                                    }, t.prototype.enableRotation = function() {
                                        null == this.rX && (this.createRotAxes(), this.rCtl.parent = this.theParent), this.clearPrevOverMesh(), this.rotEnabled || (this.rEndX.visibility = this.visibility, this.rEndY.visibility = this.visibility, this.rEndZ.visibility = this.visibility, this.rEndAll.visibility = this.visibility, this.rotEnabled = !0, this.disableTranslation(), this.disableScaling())
                                    }, t.prototype.disableRotation = function() {
                                        this.rotEnabled && (this.rEndX.visibility = 0, this.rEndY.visibility = 0, this.rEndZ.visibility = 0, this.rEndAll.visibility = 0, this.rotEnabled = !1)
                                    }, t.prototype.isScalingEnabled = function() {
                                        return this.scaleEnabled
                                    }, t.prototype.enableScaling = function() {
                                        null == this.sX && (this.createScaleAxes(), this.sCtl.parent = this.theParent), this.clearPrevOverMesh(), this.scaleEnabled || (this.sEndX.visibility = this.visibility, this.sEndY.visibility = this.visibility, this.sEndZ.visibility = this.visibility, this.sEndXZ.visibility = this.visibility, this.sEndZY.visibility = this.visibility, this.sEndYX.visibility = this.visibility, this.sEndAll.visibility = this.visibility, this.scaleEnabled = !0, this.disableTranslation(), this.disableRotation())
                                    }, t.prototype.disableScaling = function() {
                                        this.scaleEnabled && (this.sEndX.visibility = 0, this.sEndY.visibility = 0, this.sEndZ.visibility = 0, this.sEndXZ.visibility = 0, this.sEndZY.visibility = 0, this.sEndYX.visibility = 0, this.sEndAll.visibility = 0, this.scaleEnabled = !1)
                                    }, t.prototype.setScaleBounds = function(t, e) {
                                        this.scaleBoundsMin = t || null, this.scaleBoundsMax = e || null, null != this.scaleBoundsMin && (0 == this.scaleBoundsMin.x && (this.scaleBoundsMin.x = 1e-8), 0 == this.scaleBoundsMin.y && (this.scaleBoundsMin.y = 1e-8), 0 == this.scaleBoundsMin.z && (this.scaleBoundsMin.z = 1e-8))
                                    }, t.prototype.removeScaleBounds = function() {
                                        this.scaleBoundsMin = null, this.scaleBoundsMax = null
                                    }, t.prototype.setTransBounds = function(t, e) {
                                        this.transBoundsMin = t || null, this.transBoundsMax = e || null
                                    }, t.prototype.removeTransBounds = function() {
                                        this.transBoundsMin = null, this.transBoundsMax = null
                                    }, t.prototype.setRotBounds = function(t, e) {
                                        this.rotBoundsMin = t || null, this.rotBoundsMax = e || null
                                    }, t.prototype.removeRotBounds = function() {
                                        this.rotBoundsMin = null, this.rotBoundsMax = null
                                    }, t.prototype.createGuideAxes = function() {
                                        this.guideCtl = new a("guideCtl", this.scene), this.bXaxis = a.CreateLines("bxAxis", [new u(-100, 0, 0), new u(100, 0, 0)], this.scene), this.bYaxis = a.CreateLines("byAxis", [new u(0, -100, 0), new u(0, 100, 0)], this.scene), this.bZaxis = a.CreateLines("bzAxis", [new u(0, 0, -100), new u(0, 0, 100)], this.scene), this.bXaxis.isPickable = !1, this.bYaxis.isPickable = !1, this.bZaxis.isPickable = !1, this.bXaxis.parent = this.guideCtl, this.bYaxis.parent = this.guideCtl, this.bZaxis.parent = this.guideCtl, this.bXaxis.color = n.Red(), this.bYaxis.color = n.Green(), this.bZaxis.color = n.Blue(), this.hideBaxis();
                                        var t = this.axesLen * this.axesScale;
                                        this.xaxis = a.CreateLines("xAxis", [new u(0, 0, 0), new u(t, 0, 0)], this.scene), this.yaxis = a.CreateLines("yAxis", [new u(0, 0, 0), new u(0, t, 0)], this.scene), this.zaxis = a.CreateLines("zAxis", [new u(0, 0, 0), new u(0, 0, t)], this.scene), this.xaxis.isPickable = !1, this.yaxis.isPickable = !1, this.zaxis.isPickable = !1, this.xaxis.parent = this.guideCtl, this.yaxis.parent = this.guideCtl, this.zaxis.parent = this.guideCtl, this.xaxis.color = n.Red(), this.yaxis.color = n.Green(), this.zaxis.color = n.Blue()
                                    }, t.prototype.createPickPlanes = function() {
                                        this.pALL = a.CreatePlane("pALL", 5, this.scene), this.pXZ = a.CreatePlane("pXZ", 5, this.scene), this.pZY = a.CreatePlane("pZY", 5, this.scene), this.pYX = a.CreatePlane("pYX", 5, this.scene), this.pALL.isPickable = !1, this.pXZ.isPickable = !1, this.pZY.isPickable = !1, this.pYX.isPickable = !1, this.pALL.visibility = 0, this.pXZ.visibility = 0, this.pZY.visibility = 0, this.pYX.visibility = 0, this.pALL.billboardMode = a.BILLBOARDMODE_ALL, this.pXZ.rotate(i.X, 1.57), this.pZY.rotate(i.Y, 1.57), this.pickPlanes = new a("pickPlanes", this.scene), this.pALL.parent = this.theParent, this.pXZ.parent = this.pickPlanes, this.pZY.parent = this.pickPlanes, this.pYX.parent = this.pickPlanes
                                    }, t.prototype.createTransAxes = function() {
                                        var t = .04 * this.axesScale,
                                            e = this.axesLen * this.axesScale;
                                        this.tCtl = new a("tarnsCtl", this.scene), this.tX = this.extrudeBox(t / 2, e), this.tX.name = "X", this.tY = this.tX.clone("Y"), this.tZ = this.tX.clone("Z"), this.tXZ = r.CreatePlane("XZ", {
                                            size: 2 * t
                                        }, this.scene), this.tZY = this.tXZ.clone("ZY"), this.tYX = this.tXZ.clone("YX"), this.tXZ.rotation.x = 1.57, this.tZY.rotation.y = -1.57, this.tXZ.position.x = t, this.tXZ.position.z = t, this.tZY.position.z = t, this.tZY.position.y = t, this.tYX.position.y = t, this.tYX.position.x = t, this.tAll = a.CreateBox("ALL", 2 * t, this.scene), this.tX.parent = this.tCtl, this.tY.parent = this.tCtl, this.tZ.parent = this.tCtl, this.tXZ.parent = this.tCtl, this.tZY.parent = this.tCtl, this.tYX.parent = this.tCtl, this.tAll.parent = this.tCtl, this.tX.rotation.y = 1.57, this.tY.rotation.x -= 1.57, this.tX.visibility = 0, this.tY.visibility = 0, this.tZ.visibility = 0, this.tXZ.visibility = 0, this.tZY.visibility = 0, this.tYX.visibility = 0, this.tAll.visibility = 0, this.tX.isPickable = !1, this.tY.isPickable = !1, this.tZ.isPickable = !1, this.tXZ.isPickable = !1, this.tZY.isPickable = !1, this.tYX.isPickable = !1, this.tAll.isPickable = !1;
                                        var i = e / 5,
                                            n = t;
                                        this.tEndX = a.CreateCylinder("tEndX", i, 0, n, 6, 1, this.scene), this.tEndY = this.tEndX.clone("tEndY"), this.tEndZ = this.tEndX.clone("tEndZ"), this.tEndXZ = this.createTriangle("XZ", 1.75 * n, this.scene), this.tEndZY = this.tEndXZ.clone("ZY"), this.tEndYX = this.tEndXZ.clone("YX"), this.tEndAll = r.CreatePolyhedron("tEndAll", {
                                            type: 1,
                                            size: n / 2
                                        }, this.scene), this.tEndX.rotation.x = 1.57, this.tEndY.rotation.x = 1.57, this.tEndZ.rotation.x = 1.57, this.tEndXZ.rotation.x = -1.57, this.tEndZY.rotation.x = -1.57, this.tEndYX.rotation.x = -1.57, this.tEndX.parent = this.tX, this.tEndY.parent = this.tY, this.tEndZ.parent = this.tZ, this.tEndXZ.parent = this.tXZ, this.tEndZY.parent = this.tZY, this.tEndYX.parent = this.tYX, this.tEndAll.parent = this.tAll, this.tEndX.position.z = e - i / 2, this.tEndY.position.z = e - i / 2, this.tEndZ.position.z = e - i / 2, this.tEndX.material = this.redMat, this.tEndY.material = this.greenMat, this.tEndZ.material = this.blueMat, this.tEndXZ.material = this.redMat, this.tEndZY.material = this.blueMat, this.tEndYX.material = this.greenMat, this.tEndAll.material = this.yellowMat, this.tEndX.isPickable = !1, this.tEndY.isPickable = !1, this.tEndZ.isPickable = !1, this.tEndXZ.isPickable = !1, this.tEndZY.isPickable = !1, this.tEndYX.isPickable = !1, this.tEndAll.isPickable = !1
                                    }, t.prototype.createTriangle = function(t, e, i) {
                                        var n = new o(e / 2, -e / 2).addLineTo(e / 2, e / 2).addLineTo(-e / 2, e / 2).addLineTo(e / 2, -e / 2);
                                        return new BABYLON.PolygonMeshBuilder(t, n, i).build()
                                    }, t.prototype.createRotAxes = function() {
                                        var t = this.axesLen * this.axesScale * 2;
                                        this.rCtl = new a("rotCtl", this.scene), this.rX = this.createTube(t / 2, 360), this.rX.name = "X", this.rY = this.rX.clone("Y"), this.rZ = this.rX.clone("Z"), this.rAll = this.createTube(t / 1.75, 360), this.rAll.name = "ALL", this.rX.parent = this.rCtl, this.rY.parent = this.rCtl, this.rZ.parent = this.rCtl, this.rAll.parent = this.pALL, this.rX.rotation.z = 1.57, this.rZ.rotation.x = -1.57, this.rAll.rotation.x = 1.57, this.rX.visibility = 0, this.rY.visibility = 0, this.rZ.visibility = 0, this.rAll.visibility = 0, this.rX.isPickable = !1, this.rY.isPickable = !1, this.rZ.isPickable = !1, this.rAll.isPickable = !1;
                                        var e = t;
                                        this.rEndX = this.createCircle(e / 2, 360, !1), this.rEndY = this.rEndX.clone(""), this.rEndZ = this.rEndX.clone(""), this.rEndAll = this.createCircle(e / 1.75, 360, !1), this.rEndX.parent = this.rX, this.rEndY.parent = this.rY, this.rEndZ.parent = this.rZ, this.rEndAll.parent = this.rAll, this.rEndX.color = n.Red(), this.rEndY.color = n.Green(), this.rEndZ.color = n.Blue(), this.rEndAll.color = n.Yellow(), this.rEndX.isPickable = !1, this.rEndY.isPickable = !1, this.rEndZ.isPickable = !1, this.rEndAll.isPickable = !1
                                    }, t.prototype.extrudeBox = function(t, e) {
                                        var i = [new u(t, t, 0), new u(-t, t, 0), new u(-t, -t, 0), new u(t, -t, 0), new u(t, t, 0)],
                                            n = [new u(0, 0, 0), new u(0, 0, e)];
                                        return a.ExtrudeShape("", i, n, 1, 0, 2, this.scene)
                                    }, t.prototype.createCircle = function(t, e, i) {
                                        null === e && (e = 360);
                                        for (var n, r, o = [], s = 3.14 / 180, c = 0, l = 0; l <= e; l += 10) n = t * Math.cos(l * s), r = 90 == l ? t : 270 == l ? -t : t * Math.sin(l * s), o[c] = new u(n, 0, r), c++;
                                        if (i) {
                                            t -= .04;
                                            for (var l = 0; l <= e; l += 10) n = t * Math.cos(l * s), r = 90 == l ? t : 270 == l ? -t : t * Math.sin(l * s), o[c] = new u(n, 0, r), c++
                                        }
                                        return a.CreateLines("", o, this.scene)
                                    }, t.prototype.createTube = function(t, e) {
                                        null === e && (e = 360);
                                        for (var i, n, r = [], o = 3.14 / 180, s = 0, c = 0; c <= e; c += 30) i = t * Math.cos(c * o), n = 90 == c ? t : 270 == c ? -t : t * Math.sin(c * o), r[s] = new u(i, 0, n), s++;
                                        return a.CreateTube("", r, .02, 3, null, BABYLON.Mesh.NO_CAP, this.scene)
                                    }, t.prototype.createScaleAxes = function() {
                                        var t = .04 * this.axesScale,
                                            e = this.axesLen * this.axesScale;
                                        this.sCtl = new a("sCtl", this.scene), this.sX = this.extrudeBox(t / 2, e), this.sX.name = "X", this.sY = this.sX.clone("Y"), this.sZ = this.sX.clone("Z"), this.sXZ = r.CreatePlane("XZ", {
                                            size: 2 * t
                                        }, this.scene), this.sZY = this.sXZ.clone("ZY"), this.sYX = this.sXZ.clone("YX"), this.sXZ.rotation.x = 1.57, this.sZY.rotation.y = -1.57, this.sXZ.position.x = t, this.sXZ.position.z = t, this.sZY.position.z = t, this.sZY.position.y = t, this.sYX.position.y = t, this.sYX.position.x = t, this.sAll = a.CreateBox("ALL", 2 * t, this.scene), this.sX.material = this.redMat, this.sY.material = this.greenMat, this.sZ.material = this.blueMat, this.sAll.material = this.yellowMat, this.sX.parent = this.sCtl, this.sY.parent = this.sCtl, this.sZ.parent = this.sCtl, this.sAll.parent = this.sCtl, this.sXZ.parent = this.sCtl, this.sZY.parent = this.sCtl, this.sYX.parent = this.sCtl, this.sX.rotation.y = 1.57, this.sY.rotation.x -= 1.57, this.sX.visibility = 0, this.sY.visibility = 0, this.sZ.visibility = 0, this.sXZ.visibility = 0, this.sZY.visibility = 0, this.sYX.visibility = 0, this.sAll.visibility = 0, this.sX.isPickable = !1, this.sY.isPickable = !1, this.sZ.isPickable = !1, this.sXZ.isPickable = !1, this.sZY.isPickable = !1, this.sYX.isPickable = !1, this.sAll.isPickable = !1;
                                        var i = t;
                                        this.sEndX = a.CreateBox("", i, this.scene), this.sEndY = this.sEndX.clone(""), this.sEndZ = this.sEndX.clone(""), this.sEndAll = r.CreatePolyhedron("sEndAll", {
                                            type: 1,
                                            size: i / 2
                                        }, this.scene), this.sEndXZ = this.createTriangle("XZ", 1.75 * i, this.scene), this.sEndZY = this.sEndXZ.clone("ZY"), this.sEndYX = this.sEndXZ.clone("YX"), this.sEndXZ.rotation.x = -1.57, this.sEndZY.rotation.x = -1.57, this.sEndYX.rotation.x = -1.57, this.sEndX.parent = this.sX, this.sEndY.parent = this.sY, this.sEndZ.parent = this.sZ, this.sEndXZ.parent = this.sXZ, this.sEndZY.parent = this.sZY, this.sEndYX.parent = this.sYX, this.sEndAll.parent = this.sAll, this.sEndX.position.z = e - i / 2, this.sEndY.position.z = e - i / 2, this.sEndZ.position.z = e - i / 2, this.sEndX.material = this.redMat, this.sEndY.material = this.greenMat, this.sEndZ.material = this.blueMat, this.sEndXZ.material = this.redMat, this.sEndZY.material = this.blueMat, this.sEndYX.material = this.greenMat, this.sEndAll.material = this.yellowMat, this.sEndX.isPickable = !1, this.sEndY.isPickable = !1, this.sEndZ.isPickable = !1, this.sEndXZ.isPickable = !1, this.sEndZY.isPickable = !1, this.sEndYX.isPickable = !1, this.sEndAll.isPickable = !1
                                    }, t.prototype.setLocalAxes = function(t) {
                                        var e = t.getWorldMatrix();
                                        u.FromFloatArrayToRef(e.asArray(), 0, this.localX), u.FromFloatArrayToRef(e.asArray(), 4, this.localY), u.FromFloatArrayToRef(e.asArray(), 8, this.localZ)
                                    }, t.prototype.setLocal = function(t) {
                                        this.local != t && (this.local = t, t || (this.theParent.rotationQuaternion = s.Identity()))
                                    }, t.prototype.isLocal = function() {
                                        return this.local
                                    }, t.prototype.setTransSnap = function(t) {
                                        this.snapT = t
                                    }, t.prototype.setRotSnap = function(t) {
                                        this.snapR = t
                                    }, t.prototype.setScaleSnap = function(t) {
                                        this.snapS = t
                                    }, t.prototype.setTransSnapValue = function(t) {
                                        this.tSnap = new u(t, t, t), this.transSnap = t
                                    }, t.prototype.setRotSnapValue = function(t) {
                                        this.rotSnap = t
                                    }, t.prototype.setScaleSnapValue = function(t) {
                                        this.scaleSnap = t
                                    }, t.getAngle = function(t, e, i, n) {
                                        var a = t.subtract(i),
                                            r = e.subtract(i),
                                            o = u.Cross(a, r),
                                            s = Math.asin(o.length() / (a.length() * r.length()));
                                        return u.Dot(o, n) < 0 && (s *= -1), s
                                    }, t.prototype.createMaterials = function(e) {
                                        this.redMat = t.getStandardMaterial("redMat", n.Red(), e), this.greenMat = t.getStandardMaterial("greenMat", n.Green(), e), this.blueMat = t.getStandardMaterial("blueMat", n.Blue(), e), this.whiteMat = t.getStandardMaterial("whiteMat", n.White(), e), this.yellowMat = t.getStandardMaterial("whiteMat", n.Yellow(), e)
                                    }, t.prototype.disposeMaterials = function() {
                                        this.redMat.dispose(), this.greenMat.dispose(), this.blueMat.dispose(), this.whiteMat.dispose(), this.yellowMat.dispose()
                                    }, t.getStandardMaterial = function(t, e, i) {
                                        var a = new l(t, i);
                                        return a.emissiveColor = e, a.diffuseColor = n.Black(), a.specularColor = n.Black(), a.backFaceCulling = !1, a
                                    }, t
                                }();
                                t.EditControl = h;
                                var p = function() {
                                    function t(t, e) {
                                        this.lastMax = 10, this.acts = new Array, this.last = -1, this.current = -1, this.mesh = t, this.lastMax = e - 1, this.add()
                                    }
                                    return t.prototype.setCapacity = function(t) {
                                        if (0 == t) return void console.error("capacity should be more than zero");
                                        this.lastMax = t - 1, this.last = -1, this.current = -1, this.acts = new Array, this.add()
                                    }, t.prototype.add = function(t) {
                                        void 0 === t && (t = null);
                                        var e = new f(this.mesh, t);
                                        this.current < this.last && (this.acts.splice(this.current + 1), this.last = this.current), this.last == this.lastMax ? (this.acts.shift(), this.acts.push(e)) : (this.acts.push(e), this.last++, this.current++)
                                    }, t.prototype.undo = function() {
                                        if (this.current > 0) {
                                            var t = this.acts[this.current].getActionType();
                                            return this.current--, this.acts[this.current].perform(this.mesh), t
                                        }
                                    }, t.prototype.redo = function() {
                                        if (this.current < this.last) return this.current++, this.acts[this.current].perform(this.mesh), this.acts[this.current].getActionType()
                                    }, t
                                }();
                                t.ActHist = p;
                                var f = function() {
                                    function t(t, e) {
                                        this.p = t.position.clone(), null == t.rotationQuaternion ? (this.rQ = null, this.rE = t.rotation.clone()) : (this.rQ = t.rotationQuaternion.clone(), this.rE = null), this.s = t.scaling.clone(), this.at = e
                                    }
                                    return t.prototype.getActionType = function() {
                                        return this.at
                                    }, t.prototype.perform = function(t) {
                                        t.position.copyFrom(this.p), null == t.rotationQuaternion ? null != this.rE ? t.rotation.copyFrom(this.rE) : t.rotation.copyFrom(this.rQ.toEulerAngles()) : null != this.rQ ? t.rotationQuaternion.copyFrom(this.rQ) : t.rotationQuaternion.copyFrom(s.RotationYawPitchRoll(this.rE.y, this.rE.x, this.rE.z)), t.scaling.copyFrom(this.s)
                                    }, t
                                }();
                                t.Act = f
                            }(t.component || (t.component = {}))
                        }(t.babylonjs || (t.babylonjs = {}))
                    }(t.ssatguru || (t.ssatguru = {}))
                }(n || (n = {})), t.exports = n.ssatguru.babylonjs.component
            },
            464: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = i(439),
                    o = r.TWEEN_TIMER,
                    s = BABYLON.Vector3,
                    c = BABYLON.Mesh,
                    l = i(465),
                    u = i(467),
                    h = i(468),
                    p = i(469),
                    f = i(443),
                    d = i(470),
                    v = i(440).CommandManager,
                    y = i(472),
                    m = (i(487), i(490)),
                    b = i(442),
                    g = i(499),
                    A = i(500);
                BABYLON.Epsilon = 1e-5, BABYLON.SceneLoader.ShowLoadingScreen = !1;
                var O = function() {
                    function t(e) {
                        n(this, t), this.setData(e), this.defaultTarget = new BABYLON.Vector3(0, 0, 0), this.isLoading = !1, this.renderAnnotation = !0;
                        var i = this;
                        if (this._httpLoadingSet = new Set, this._resize = m(function() {
                            i.scene && i.scene.getEngine && i.scene.getEngine().resize()
                        }, 300, {
                            maxWait: 3e3
                        }), window.addEventListener("resize", this._resize), this.scene = this.createScene(), this.scene instanceof A) return this.scene.loadMesh(e["model-url"]), void setTimeout(function() {
                            i.data.callback.sceneCreationComplete && i.data.callback.sceneCreationComplete.call()
                        }, 0);
                        "string" == typeof e.tipURL ? $.getJSON(e.config.URI_PREFIX + e.tipURL, function(t) {
                            e.tips = t, i.initCore()
                        }).fail(function() {
                            e.tips = [], i.initCore()
                        }) : setTimeout(function() {
                            i.initCore()
                        }, 0), window.b = this
                    }
                    return a(t, [{
                        key: "setData",
                        value: function(t) {
                            if (this.data = t, t.config = Object.assign(r.config, t.config), t.func = t.func || {}, t.camera = t.camera || {
                                isDefault: !0
                            }, void 0 === t.camera.alpha && (t.camera.alpha = r.camera.ALPHA), void 0 === t.camera.beta && (t.camera.beta = r.camera.BETA), this.renderingCanvas = t.canvas, t.tips) throw "tips 已废弃，请使用tipURL代替";
                            if (t.animation || (t.animation = {
                                autoPlay: !1
                            }), t["write-tip-url"]) throw "write-tip-url 已废弃，请使用tipURL代替";
                            void 0 === t.importScene && (t.importScene = !1), t.callback || (this.data.callback = {}), t.annotation || (t.annotation = {
                                visible: !0
                            }), "threeDLine" === t.annotation.type && (t.annotation.line = Object.assign({
                                color: 16777215,
                                scale: 1,
                                alpha: 1,
                                thickness: 1
                            }, t.annotation.line), t.annotation.visible = !0)
                        }
                    }, {
                        key: "initCore",
                        value: function() {
                            if (this.data) {
                                var t = this.data.emitter;
                                this.updateEmitter(t), this.commandManager = new v(this), new y(this.commandManager), this.animationManager = new d(this);
                                var e = i(501);
                                this.player = new e(this, this.data), this.loadMesh(), this.execute(r.commands.CHECK_ENV).then(function() {
                                    _this.execute(r.commands.SET_ANNOTATION_VISIBLE, !0)
                                }).catch(function() {}), this.execute(r.commands.PIXI_PLUGIN), this.data.interactiveCanvas && this.updateInteractiveCanvas(this.data.interactiveCanvas), t && t.emit(r.event.SCENE_CREATION_COMPLETE), this.data.callback.sceneCreationComplete && this.data.callback.sceneCreationComplete.call()
                            }
                        }
                    }, {
                        key: "updateEmitter",
                        value: function(t) {
                            t && t.on && (this.renderFunc = this.render.bind(this), t.on(this.data.emitterTrigger || "update", this.renderFunc))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.scene;
                            if (t) {
                                var e = t.getEngine();
                                e.beginFrame();
                                var i = t.activeCamera;
                                if (i) {
                                    if (Math.abs(i.inertialRadiusOffset) > 15 && (i.inertialRadiusOffset = i.inertialRadiusOffset / Math.abs(i.inertialRadiusOffset) * 15), i.target) {
                                        var n = BABYLON.Vector3.Distance(i.position, i.target);
                                        if (i.inertialRadiusOffset > 0 && n < 10) {
                                            var a = (n - .1) / 9.9,
                                                o = i.inertialRadiusOffset;
                                            i.inertialRadiusOffset *= Math.pow(a, .7), isNaN(i.inertialRadiusOffset) && (i.inertialRadiusOffset = o)
                                        }
                                    }
                                    void 0 !== i.targetRadius && (i.targetRadius = Math.min(Math.max(i.lowerRadiusLimit || 0, i.targetRadius), i.upperRadiusLimit || i.targetRadius), Math.abs(i.targetRadius - i.radius) > .1 ? i.radius += .15 * (i.targetRadius - i.radius) : delete i.targetRadius);
                                    var c = this.retrieveSprites(r.sprite.ANNOTATION);
                                    c && (f.UpdateSpriteRenderData(c), c.forEach(function(t) {
                                        var e = s.Distance(t.position, i.position);
                                        t.size = e / r.data.ANNOTATION_SIZE, t.updateTip()
                                    }));
                                    var l = this.focusingManager;
                                    l && l.tempSprites.forEach(function(t) {
                                        var e = s.Distance(t.position, i.position);
                                        t.size = e * t.tsize * .2
                                    }), this.scene.render(), this.player.update(), e.endFrame()
                                }
                            }
                        }
                    }, {
                        key: "disposeLoadingObjects",
                        value: function() {
                            return this._httpLoadingSet.forEach(function(t) {
                                t.abort()
                            }), this._httpLoadingSet.size > 0 && (this._httpLoadingSet.clear(), !0)
                        }
                    }, {
                        key: "disposeSceneObjects",
                        value: function() {
                            if (this.scene && !(this.scene instanceof A)) {
                                delete this.defaultRadius, this.disposeLoadingObjects();
                                for (var t = this.scene.meshes; t.length;) t[0].dispose(!0);
                                var e = this.scene.lights.concat();
                                for (var i in e) {
                                    var n = e[i];
                                    n.nbLight || n.dispose()
                                }
                                var a = this.scene.cameras.concat();
                                for (var r in a) {
                                    var o = a[r];
                                    o.nbCamera || o.dispose()
                                }
                                this.scene.sprite;
                                this.scene.spriteManagers.forEach(function(t) {
                                    if (t.tempSprites) {
                                        for (var e = 0; e < t.tempSprites.length; e++) t.tempSprites[e].dispose();
                                        t.tempSprites.length = 0
                                    } else
                                        for (; t.sprites[0];) t.sprites[0].dispose()
                                }), f.clearData()
                            }
                        }
                    }, {
                        key: "loadMesh",
                        value: function(t, e) {
                            function i(t) {
                                var i = t;
                                if (t instanceof BABYLON.Scene) {
                                    if (t.activeCamera) {
                                        var n = t.activeCamera.position,
                                            a = c.MinMax(t.meshes),
                                            l = u.defaultTarget = p ? BABYLON.Vector3.Center(a.min, a.max) : u.defaultTarget || BABYLON.Vector3.Zero(),
                                            h = s.Distance(n, l),
                                            f = n.subtract(l);
                                        if (void 0 === u.data.camera.alpha) {
                                            var d = Math.atan2(f.z, f.x);
                                            u.data.camera.alpha = d
                                        }
                                        if (void 0 === u.data.camera.beta) {
                                            var v = Math.acos(f.y / h);
                                            u.data.camera.beta = v
                                        }
                                    }
                                    i = t.meshes
                                }
                                u.updateCamera(r.camera.ARC_CAMERA), u.updateCameraVision(i), i.forEach(function(t) {
                                    t.isPickable = !0, t.checkCollisions = !0, t.isImported = !0, t.actionManager = new g(u), t.material && (t.material.backFaceCulling = !1, t.material.subMaterials && t.material.subMaterials.forEach(function(t) {
                                        t.backFaceCulling = !1
                                    }))
                                }), u.updateTips();
                                var y = u.data.annotation.visible;
                                if (r.isDebug && (y = !0), u.execute(r.commands.SET_ANNOTATION_VISIBLE, y), u.execute(r.commands.CONFIGURE_MATERIAL, u.data), u.execute(r.commands.CONFIGURE_PIPELINE, u.data), u.setLoading(!1), u.animationManager.pause(), u.animationManager.updateAnimatables(), b.hasAnimation(u.scene) ? (u.player.showAnimationSetting(!0), u.execute(r.commands.PLAY_ANIMATION_COMMAND, u.data.animation.autoPlay)) : u.player.showAnimationSetting(!1), e["clear-color"] || u.data["clear-color"]) {
                                    var m = e["clear-color"] ? e["clear-color"] : u.data["clear-color"];
                                    u.scene.clearColor = BABYLON.Color4.FromHexString("#" + m.toString(16))
                                } else u.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1); if (u.scene.getEngine().resize(), u.minMax) {
                                    var A = u.scene.activeCamera,
                                        O = s.Distance(u.minMax.min, u.minMax.max);
                                    A.defaultDistance = O;
                                    var S = u.data.camera.lowerRadiusLimit,
                                        M = u.data.camera.upperRadiusLimit;
                                    A.lowerRadiusLimit = void 0 !== S ? S : O / 4, A.upperRadiusLimit = void 0 !== M ? M : 4 * O
                                }
                                o(), e.loaded && e.loaded(t)
                            }

                            function n(t) {
                                var e = t.currentTarget;
                                u._httpLoadingSet.add(e);
                                var i = t.loaded / t.total;
                                u.setLoading(!0, i), 1 === i && u._httpLoadingSet.delete(e)
                            }

                            function a(t, e, i) {
                                console.error(e), console.error(i)
                            }

                            function o() {
                                u.data.func.loaded && u.data.func.loaded(u.scene), new l(u), u.data.plugins && u.data.plugins.forEach(function(t) {
                                    u.execute(t.command, t.data)
                                })
                            }
                            e = e || {};
                            var u = this,
                                h = t || this.data["model-url"],
                                p = t ? !!e.importScene : this.data.importScene;
                            if (this.scene instanceof A) return void this.scene.loadMesh(h);
                            if (!h) return console.warn("没有传入 model-url"), void o();
                            this.setLoading(!0);
                            var f = h.lastIndexOf("/"),
                                d = h.substr(0, f + 1),
                                v = h.substr(f + 1);
                            p ? BABYLON.SceneLoader.Append(d, v, this.scene, i, n, a) : BABYLON.SceneLoader.ImportMesh("", d, v, this.scene, i, n, a)
                        }
                    }, {
                        key: "createScene",
                        value: function() {
                            var t = void 0,
                                e = this.data.canvas;
                            if (e || (e = document.createElement("canvas"), e.width = window.innerWidth, e.height = window.innerHeight, e.style.touchAction = "none", document.body.append(e)), !e.engine) {
                                try {
                                    t = new BABYLON.Engine(e, !0)
                                } catch (t) {
                                    if ("WebGL not supported" === t.message) return new A(this)
                                }
                                e.engine = t
                            }
                            var i = new BABYLON.Scene(t);
                            if (i.babylonScene = this, i.interactiveCanvas = e, this.scene = i, i.preventDefaultOnPointerDown = !1, this.updateInteractiveCanvas(this.data.interactiveCanvas), !this.data.importScene) {
                                new BABYLON.HemisphericLight("ambient", BABYLON.Vector3.Up(), i).nbLight = !0
                            }
                            if (this.data.light)
                                if ("default" === this.data.light.name) new BABYLON.DirectionalLight("defaultDir0", new BABYLON.Vector3(0, -1, 0), i), new BABYLON.DirectionalLight("defaultDir1", new BABYLON.Vector3(0, 1, 0), i);
                                else if ("around" === this.data.light.name)
                                for (var n = 0; n < 3; n++) {
                                    var a = Math.cos(n / 3 * Math.PI * 2),
                                        r = Math.sin(n / 3 * Math.PI * 2);
                                    new BABYLON.DirectionalLight("around" + n, new BABYLON.Vector3(a, r, 0), i)
                                }
                            this.engine = t;
                            var o = new h(this);
                            i.actionManager = o;
                            var s = this.data.skybox;
                            if (s) {
                                var c = void 0;
                                c = /\.hdr$/.test(s.texture) ? new BABYLON.HDRCubeTexture(s.texture, i, 256) : new BABYLON.CubeTexture(s.texture, i, null, !1, null, null, null, void 0, !0), c.gammaSpace = !1;
                                i.createDefaultSkybox(c, s.pbr, s.scale || 1e3, void 0 === s.blur ? .3 : s.blur).isPickable = !1
                            }
                            i.activeCamera;
                            return i
                        }
                    }, {
                        key: "updateTips",
                        value: function(t) {
                            var e = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.retrieveSprites(r.sprite.ANNOTATION).concat();
                            n && n.forEach(function(t) {
                                t.dispose()
                            });
                            var a = this.data.tips;
                            a && a.forEach(function(n) {
                                var a = n.title,
                                    r = a.split(":"),
                                    o = void 0;
                                if (r.length > 1 && t && (o = r[0], t.test(o))) {
                                    return void new f(e, e.data.annotation).setSceneData(n)
                                }
                                if (!1 === i) {
                                    new f(e, e.data.annotation).setSceneData(n)
                                }
                            })
                        }
                    }, {
                        key: "setTipsInteractive",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = this.retrieveSprites(r.sprite.ANNOTATION).concat();
                            e && e.forEach(function(e) {
                                var i = e.tip2D,
                                    n = i.text,
                                    a = i.graphics;
                                n.interactive = a.interactive = t
                            })
                        }
                    }, {
                        key: "updateCameraVision",
                        value: function(t) {
                            t = t || this.scene.meshes;
                            var e = c.MinMax(t),
                                i = this.scene.activeCamera;
                            this.minMax = e;
                            var n = this.getCameraInitRadius(this.minMax);
                            i.radius = this.defaultRadius = this.defaultRadius || n, i.wheelPrecision = 400 / i.radius, i.radius *= 6.18, this.defaultTarget = BABYLON.Vector3.Center(e.min, e.max), this.zoomOut()
                        }
                    }, {
                        key: "getCameraInitRadius",
                        value: function(t) {
                            return 1.2 * s.Distance(t.min, t.max)
                        }
                    }, {
                        key: "setLoading",
                        value: function(t, e) {
                            this.isLoading = t, this.data && this.data.func.loading && this.data.func.loading(t, e)
                        }
                    }, {
                        key: "lookAtVector",
                        value: function(t, e) {
                            e = e || {};
                            var i = this.scene,
                                n = t,
                                a = i.activeCamera,
                                s = this.getEaseFunc(),
                                c = a.target;
                            if (TweenMax.to(this, e.duration || o, {
                                ease: this.getEaseFunc(),
                                onUpdate: function() {
                                    var t = s.getRatio(this.progress());
                                    if (c) {
                                        var i = new BABYLON.Vector3(c.x + (n.x - c.x) * t, c.y + (n.y - c.y) * t, c.z + (n.z - c.z) * t);
                                        a.setTarget(i)
                                    }
                                    e && void 0 !== e.alpha && (a.alpha = b.getShortRotation(a.alpha, e.alpha))
                                }
                            }), e && void 0 !== e.alpha) {
                                a.alpha %= 2 * Math.PI, a.beta %= 2 * Math.PI, void 0 !== e.alpha && (a.alpha = b.getShortRotation(a.alpha, e.alpha));
                                var l = r.camera.FOV,
                                    u = r.camera.MIN_ZOOM_FOV,
                                    h = Math.abs(e.alpha - a.alpha),
                                    p = h / Math.PI,
                                    f = (1 - p) * u,
                                    d = {
                                        ease: s,
                                        onStart: function() {},
                                        onUpdate: function() {
                                            var t = this.progress(),
                                                e = void 0;
                                            e = t < .5 ? l + (f - l) * Sine.easeInOut.getRatio(2 * t) * p : l + (f - l) * Sine.easeInOut.getRatio(2 * (1 - t)) * p, a.fov = e
                                        }
                                    };
                                Object.assign(d, e), TweenMax.to(a, d.duration || o, d)
                            }
                        }
                    }, {
                        key: "setMeshesVisible",
                        value: function(t, e) {
                            var i = 2,
                                n = 0;
                            e && (i = void 0 === e.timer ? 2 : e.timer, n = void 0 === e.display ? 0 : e.display);
                            var a = this.scene.meshes,
                                r = void 0;
                            r = t instanceof RegExp ? t : new RegExp(t);
                            for (var o = [], s = 0; s < a.length; s++) r.test(a[s].name) && o.push(a[s].name);
                            for (var c = [], l = 0; l < o.length; l++) c.push(this.scene.getMeshByName(o[l]));
                            TweenMax.to(c, i, {
                                ease: Sine.easeInOut,
                                visibility: n
                            })
                        }
                    }, {
                        key: "retrieveSprites",
                        value: function(t) {
                            var e = this.getSpriteManagerByName(t);
                            return e ? e.tempSprites || e.sprites : []
                        }
                    }, {
                        key: "getSpriteManagerByName",
                        value: function(t) {
                            for (var e = this.scene.spriteManagers, i = 0; i < e.length; i++)
                                if (e[i].name === t) return e[i]
                        }
                    }, {
                        key: "lookAtSpriteByName",
                        value: function(t, e) {
                            for (var i = this.retrieveSprites(r.sprite.ANNOTATION), n = 0; n < i.length; n++) {
                                var a = i[n],
                                    o = a.getSceneData(),
                                    s = o.title,
                                    c = s.split(":");
                                if ((s = c[c.length - 1]) === t) {
                                    a.zoomIn(e), this.emitterEvent(r.event.annotation.CLICK_TIP, o);
                                    break
                                }
                            }
                        }
                    }, {
                        key: "emitterEvent",
                        value: function(t, e) {
                            this.data.emitter && this.data.emitter.emit && this.data.emitter.emit(t, e)
                        }
                    }, {
                        key: "zoomOut",
                        value: function(t) {
                            this.lookAtVector(this.defaultTarget);
                            var e = this,
                                i = this.scene.activeCamera.alpha = this.scene.activeCamera.alpha % (2 * Math.PI),
                                n = this.scene.activeCamera.beta = this.scene.activeCamera.beta % (2 * Math.PI),
                                a = e.data.camera.alpha,
                                r = e.data.camera.beta;
                            TweenMax.to(this.scene.activeCamera, o, {
                                radius: this.defaultRadius,
                                ease: this.getEaseFunc(),
                                onComplete: function() {
                                    t && t()
                                },
                                alpha: b.getShortRotation(a, i),
                                beta: b.getShortRotation(r, n)
                            })
                        }
                    }, {
                        key: "getEaseFunc",
                        value: function() {
                            return Power2.easeInOut
                        }
                    }, {
                        key: "getActionManagerByName",
                        value: function(t) {
                            if (void 0 === this.actionMap && (this.actionMap = {}), t === r.action.ANNOTATION) return void 0 === this.actionMap[r.action.ANNOTATION] && (this.actionMap[r.action.ANNOTATION] = new u(this)), this.actionMap[r.action.ANNOTATION]
                        }
                    }, {
                        key: "setAnnotationVisible",
                        value: function(t) {
                            this.renderAnnotation = t, f.SetAnnotationVisible(t)
                        }
                    }, {
                        key: "updateCamera",
                        value: function(t) {
                            this._cameraMap || (this._cameraMap = {});
                            var e = this._cameraMap,
                                i = this.scene;
                            if (!i.activeCamera || e[t] !== i.activeCamera) {
                                var n = new BABYLON.Vector3(0, 0, 0);
                                this.execute(r.commands.SET_CAMERA_CONTROL, {
                                    enabled: !1
                                });
                                var a = void 0,
                                    s = void 0,
                                    l = void 0;
                                if (void 0 === this.minMax && i.meshes.length > 0) {
                                    var u = c.MinMax(i.meshes);
                                    this.minMax = u, this.defaultTarget = BABYLON.Vector3.Center(u.min, u.max)
                                }
                                if (void 0 === e[t]) {
                                    if (t === r.camera.ARC_CAMERA) {
                                        var h = this.getCameraInitRadius(this.minMax);
                                        a = new BABYLON.ArcRotateCamera("rotateCamera", 1.4, 3.1, 6.18 * h, n, i), a.inputs.attached.pointers.buttons = [0, 2], a.lowerRadiusLimit = .1, a.wheelPrecision = 40, a.minZ = .05, a.noRotationConstraint = !1, a._useCtrlForPanning = !1
                                    } else if (t === r.camera.VR_ARC_CAMERA) {
                                        a = new BABYLON.VRDeviceOrientationArcRotateCamera("vrCamera", 0, 60 / 180 * Math.PI, 1, n, i);
                                        var p = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                                        s = this.defaultTarget.clone().add(new BABYLON.Vector3(.707 * p, 0, .707 * p)), l = this.defaultTarget
                                    } else if (t === r.camera.FREE_CAMERA) {
                                        a = new BABYLON.FreeCamera("freeCamera", n, i);
                                        var f = a.inputs.attached.keyboard;
                                        f.keysUp.push("W".charCodeAt(0)), f.keysDown.push("S".charCodeAt(0)), f.keysLeft.push("A".charCodeAt(0)), f.keysRight.push("D".charCodeAt(0));
                                        var d = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                                        s = this.defaultTarget.clone().add(new BABYLON.Vector3(.5 * d, 0, .5 * d)), l = this.defaultTarget
                                    } else if (t === r.camera.VR_FREE_CAMERA) {
                                        a = new BABYLON.VRDeviceOrientationFreeCamera("vrFreeCamera", n, i);
                                        var v = a.inputs.attached.keyboard;
                                        v.keysUp.push("W".charCodeAt(0)), v.keysDown.push("S".charCodeAt(0)), v.keysLeft.push("A".charCodeAt(0)), v.keysRight.push("D".charCodeAt(0));
                                        var y = BABYLON.Vector3.Distance(this.minMax.min, this.minMax.max);
                                        s = this.defaultTarget.clone().add(new BABYLON.Vector3(.5 * y, 0, .5 * y)), l = this.defaultTarget
                                    } else if (t === r.camera.ANAGLYPH_CAMERA) {
                                        var m = i.activeCamera.alpha,
                                            b = i.activeCamera.beta,
                                            g = i.activeCamera.radius;
                                        a = new BABYLON.AnaglyphArcRotateCamera("anaglyphCamera", m, b, g, BABYLON.Vector3.Zero(), 0, i), a.inputs.attached.pointers.buttons = [0, 2], a.lowerRadiusLimit = .1, a.wheelPrecision = 40, a.minZ = .05
                                    } else {
                                        if (t !== r.camera.STEREOSCOPIC_CAMERA) return;
                                        var A = i.activeCamera.alpha,
                                            O = i.activeCamera.beta,
                                            S = i.activeCamera.radius;
                                        a = new BABYLON.StereoscopicArcRotateCamera("stereoscopicCamera", A, O, S, BABYLON.Vector3.Zero(), 0, !1, i)
                                    }
                                    e[t] = {
                                        camera: a,
                                        position: s,
                                        cameraTarget: l
                                    }, a.nbCamera = !0
                                } else {
                                    var M = e[t];
                                    a = M.camera, s = M.cameraPosition, l = M.cameraTarget
                                }
                                n = new BABYLON.Vector3(0, 0, 0), t === r.camera.ARC_CAMERA && (a._useCtrlForPanning = !1);
                                var E = this.scene.activeCamera;
                                if (E && "string" != typeof E.position.x && E.nbCamera) {
                                    for (var x in e)
                                        if (e[x].camera === i.activeCamera) {
                                            e[x].cameraPosition = E.position.clone(), e[x].cameraTarget = this.defaultTarget;
                                            break
                                        }
                                    a.setPosition ? a.setPosition(E.position) : a.position.copyFrom(E.position)
                                } else void 0 !== a.alpha && (a.alpha = Math.random() * Math.PI, a.beta = Math.random() * Math.PI);
                                s && n.copyFrom(s);
                                a.target && a.target.clone();
                                TweenMax.to(a.position, o, {
                                    x: n.x,
                                    y: n.y,
                                    z: n.z,
                                    onUpdate: function() {
                                        l && (t === r.camera.ARC_CAMERA || a.setTarget(l))
                                    }
                                });
                                i.activeCamera = a, this.execute(r.commands.SET_CAMERA_CONTROL, {
                                    enabled: !0
                                })
                            }
                        }
                    }, {
                        key: "setRenderType",
                        value: function(t) {
                            this.scene.materials;
                            switch (t) {
                                case r.render.ORDINARY:
                                    this.scene.forceWireframe = !1;
                                    break;
                                case r.render.WIREFRAME:
                                    this.scene.forceWireframe = !0
                            }
                        }
                    }, {
                        key: "createSkyBox",
                        value: function() {}
                    }, {
                        key: "updateSetting",
                        value: function(t) {
                            var e = /^camera:(.*)/,
                                i = /^anno:(.*)/,
                                n = /^render:(.*)/,
                                a = /^speed:(.*)/,
                                r = void 0;
                            if (r = e.exec(t)) this.updateCamera(r[1]);
                            else if (r = i.exec(t)) "hide" === r[1] ? this.setAnnotationVisible(!1) : this.setAnnotationVisible(!0);
                            else if (r = n.exec(t)) this.setRenderType(r[1]);
                            else if (r = a.exec(t)) {
                                var o = parseFloat(r[1].replace("x"));
                                this.scene.animationTimeScale = o
                            }
                        }
                    }, {
                        key: "focusingOn",
                        value: function(t, e) {
                            var i = new p(this, e);
                            return Object.assign(i.position, t), i
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            this.player && this.player.dispose();
                            var t = this.data.emitter;
                            window.removeEventListener("resize", this._resize), t && t.removeListener && t.removeListener("update", this.renderFunc), this.scene.dispose(), delete this.scene.babylonScene, delete this.scene, window.b === this && delete window.b, this.commandManager && this.commandManager.clearAllCommand(), delete this.data.canvas, delete this.data.emitter, delete this.data
                        }
                    }, {
                        key: "updateInteractiveCanvas",
                        value: function(t) {
                            this.scene.detachControl(), this.scene.interactiveCanvas = t, this.scene.actionManager && this.scene.actionManager.register(), this.scene.attachControl()
                        }
                    }, {
                        key: "execute",
                        value: function(t, e) {
                            return this.commandManager.execute(t, e)
                        }
                    }]), t
                }();
                t.exports = O
            },
            465: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = i(443),
                    r = i(439),
                    o = function t(e) {
                        function i(t) {
                            if (0 === t.sourceEvent.button && r.isDebug && t.sourceEvent.shiftKey) {
                                var i = (t.source, new a(e));
                                i.showTip();
                                var n = o.pick(t.pointerX, t.pointerY),
                                    s = n.pickedPoint;
                                n.getNormal(!0);
                                i.position.copyFrom(s), t.sourceEvent.ctrlKey ? i.takeSceneSnapshot({
                                    id: n.pickedMesh.id,
                                    name: n.pickedMesh.name
                                }) : i.takeSceneSnapshot()
                            }
                        }
                        n(this, t);
                        var o = e.scene,
                            s = (o.actionManager, new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLongPressTrigger, i));
                        o.meshes.forEach(function(t) {
                            t.actionManager && t.actionManager.registerAction(s)
                        })
                    };
                t.exports = o
            },
            466: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = (i(439), {
                        fill: "#FFFFFF",
                        font: 'normal 30px "Microsoft Yahei"'
                    }),
                    c = function(t) {
                        function e(t) {
                            n(this, e);
                            var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return i.text = new PIXI.Text("", s), i.graphics = new PIXI.Graphics, i.addChild(i.graphics), i.addChild(i.text), i.updateText(""), i.babylonScene = t, window.NBGesture ? (NBGesture.addGesture(i.graphics, "gesture.tap", i.tipTap.bind(i)), NBGesture.addGesture(i.text, "gesture.tap", i.tipTap.bind(i))) : (i.interactive = !0, i.on("pointerdown", i.tipTap.bind(i))), i.buttonMode = !0, i
                        }
                        return r(e, t), o(e, [{
                            key: "tipTap",
                            value: function() {
                                this.babylonScene.lookAtSpriteByName(this.text.text)
                            }
                        }, {
                            key: "updateText",
                            value: function(t) {
                                this.text.text !== t && (this.text.text = t || "", this.w = Math.max(this.text.width, 100) + 40, this.h = 60)
                            }
                        }, {
                            key: "render",
                            value: function(t) {
                                for (var e = void 0, i = 0; i < t.length; i++) e = t[i], e = this.toLocal(e), 0 === i && (this.graphics.clear(), this.graphics.lineStyle(2, 4473924), this.graphics.beginFill(0));
                                var n = this.w,
                                    a = this.h;
                                this.graphics.drawRect(e.x - n / 2, e.y - a / 2, n, a), this.text.x = e.x - n / 2 + (n - this.text.width) / 2, this.text.y = e.y - a / 2 + (a - this.text.height) / 2
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                this.babylonScene && (this.parent.removeChild(this), this.graphics.clear(), this.removeChild(this.graphics), this.removeChild(this.text), this.babylonScene = null)
                            }
                        }]), e
                    }(PIXI.Container);
                t.exports = c
            },
            467: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(439),
                    c = function(t) {
                        function e(t) {
                            n(this, e);
                            var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.scene));
                            return i.babylonScene = t, i.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, i.onPickTrigger.bind(i))), s.isDebug && i.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnRightPickTrigger, i.onRightPickTrigger.bind(i))), i
                        }
                        return r(e, t), o(e, [{
                            key: "onRightPickTrigger",
                            value: function(t) {
                                var e = t.source;
                                t.sourceEvent.ctrlKey ? window.confirm("是否需要更新当快照数据?") && e.takeSceneSnapshot() : window.confirm("确定删除当前tip?") && (e.dispose(), this.babylonScene.execute(s.commands.UPDATE_ANNOTATION_DATA))
                            }
                        }, {
                            key: "onPickTrigger",
                            value: function(t) {
                                t.source.zoomIn()
                            }
                        }]), e
                    }(BABYLON.ActionManager);
                t.exports = c
            },
            468: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(439),
                    c = function(t) {
                        function e(t) {
                            n(this, e);
                            var i = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.scene));
                            return i.babylonScene = t, i.register(), i
                        }
                        return r(e, t), o(e, [{
                            key: "register",
                            value: function() {
                                this.babylonScene.scene.onPointerObservable.add(this.sceneDBClick.bind(this), BABYLON.PointerEventTypes.POINTERDOUBLETAP), this.babylonScene.scene.onPointerObservable.add(this.sceneClick.bind(this), BABYLON.PointerEventTypes.POINTERTAP)
                            }
                        }, {
                            key: "sceneClick",
                            value: function(t, e) {
                                if (!this.getScene().pickSprite(t.event.clientX, t.event.clientY).pickedSprite) {
                                    var n = i(443);
                                    n.lastTip && (n.lastTip.hideTip(), n.lastTip = null, this.babylonScene.execute(s.commands.UPDATE_ANNOTATION_DATA))
                                }
                            }
                        }, {
                            key: "sceneDBClick",
                            value: function(t, e) {
                                t.pickInfo.pickedMesh || this.babylonScene.zoomOut()
                            }
                        }]), e
                    }(BABYLON.ActionManager);
                t.exports = c
            },
            469: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o, s = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    c = function t(e, i, n) {
                        null === e && (e = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(e, i);
                        if (void 0 === a) {
                            var r = Object.getPrototypeOf(e);
                            return null === r ? void 0 : t(r, i, n)
                        }
                        if ("value" in a) return a.value;
                        var o = a.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    l = i(439),
                    u = (i(442), function(t) {
                        function e(t, i) {
                            n(this, e);
                            var r = t.scene;
                            o || (o = new BABYLON.SpriteManager("focusing", i || l.config.URI_PREFIX + "assets/textures/focusing.png", 10, 64, r), o.isPickable = !0, o.tempSprites = [], o.renderingGroupId = 1, t.focusingManager = o);
                            var s = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "focusing", o));
                            return s.babylonScene = t, s.isPickable = !0, s.actionManager = new BABYLON.ActionManager(r), s.dSprite = new BABYLON.Sprite("double", o), s.dSprite.position = s.position, s.tsize = .2, TweenMax.to(s, .7, {
                                tsize: .4,
                                repeat: -1
                            }), s.dSprite.tsize = .3, TweenMax.to(s.dSprite, .7, {
                                tsize: .5,
                                repeat: -1,
                                delay: .1
                            }), o.tempSprites.push(s, s.dSprite), s
                        }
                        return r(e, t), s(e, [{
                            key: "dispose",
                            value: function() {
                                var t = this;
                                TweenMax.killTweensOf(this), TweenMax.killTweensOf(this.dSprite), TweenMax.to([this, this.dSprite], .5, {
                                    size: 0,
                                    onComplete: function() {
                                        t.dSprite.dispose(), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", t).call(t), o = null
                                    }
                                })
                            }
                        }]), e
                    }(BABYLON.Sprite));
                t.exports = u
            },
            470: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = i(439),
                    o = function() {
                        function t(e) {
                            n(this, t), this.babylonScene = e, this.scene = e.scene
                        }
                        return a(t, [{
                            key: "updateAnimatables",
                            value: function() {
                                this.scene.Animatables && this.scene.Animatables.forEach(function(t) {
                                    t.getAnimations().forEach(function(e) {
                                        var i = e.getHighestFrame ? e.getHighestFrame() : e.animation.getHighestFrame();
                                        t.toFrame = i
                                    })
                                })
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.scene.Animatables && this.scene.Animatables.forEach(function(t) {
                                    t.pause()
                                })
                            }
                        }, {
                            key: "restart",
                            value: function() {
                                this.scene.Animatables && this.scene.Animatables.forEach(function(t) {
                                    t.restart()
                                })
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.scene.Animatables && this.scene.Animatables.forEach(function(t) {
                                    t.reset()
                                })
                            }
                        }, {
                            key: "tweenToProgress",
                            value: function(t, e) {
                                if (this.scene.Animatables) {
                                    e = e || {}, this.babylonScene.execute(r.commands.PLAY_ANIMATION_COMMAND, !1);
                                    var i = this.getProgress(),
                                        n = this,
                                        a = TweenMax.to(this, e.duration || 1, {
                                            ease: e.ease || null,
                                            onUpdate: function() {
                                                var e = i + (t - i) * a.ratio;
                                                n.setProgress(e)
                                            },
                                            onComplete: e.complete || null
                                        })
                                }
                            }
                        }, {
                            key: "tweenToProgressOfActive",
                            value: function(t, e) {
                                if (this.scene.Animatables) {
                                    e = e || {}, this.babylonScene.execute(r.commands.PLAY_ANIMATION_COMMAND, !1);
                                    var i = this.getProgressOfActive(),
                                        n = this,
                                        a = TweenMax.to(this, e.duration || 1, {
                                            ease: e.ease || null,
                                            onUpdate: function() {
                                                var e = i + (t - i) * a.ratio;
                                                n.setProgressOfActive(e)
                                            },
                                            onComplete: e.complete || null
                                        })
                                }
                            }
                        }, {
                            key: "tweenToFrame",
                            value: function(t, e) {
                                if (this.scene.Animatables) {
                                    e = e || {}, this.babylonScene.execute(r.commands.PLAY_ANIMATION_COMMAND, !1);
                                    var i = this.getProgress() * this._totalFrames,
                                        n = this,
                                        a = TweenMax.to(this, e.duration || 1, {
                                            ease: e.ease || null,
                                            onUpdate: function() {
                                                var e = i + (t - i) * a.ratio;
                                                n.setFrame(e)
                                            },
                                            onComplete: e.complete || null
                                        })
                                }
                            }
                        }, {
                            key: "getTotalFrames",
                            value: function() {
                                if (!this.scene.Animatables) return 0;
                                if (!this._totalFrames) {
                                    this._totalFrames = 0;
                                    for (var t = this.scene.Animatables, e = 0; e < t.length; e++)
                                        for (var i = t[e], n = i.getAnimations(), a = 0; a < n.length; a++) {
                                            var r = n[a].animation || n[a];
                                            this._totalFrames = Math.max(this._totalFrames, r.getHighestFrame())
                                        }
                                }
                                return this._totalFrames
                            }
                        }, {
                            key: "getActiveFrames",
                            value: function() {
                                if (!this.scene.Animatables) return 0;
                                if (!this._activeFrames) {
                                    this._activeFrames = {
                                        fromFrame: 0,
                                        toFrame: this._totalFrames || this.getTotalFrames()
                                    };
                                    for (var t = this.scene.Animatables, e = 0; e < t.length; e++) {
                                        var i = t[e];
                                        this._activeFrames.fromFrame = Math.min(this._activeFrames.fromFrame, i.fromFrame), this._activeFrames.toFrame = Math.max(this._activeFrames.toFrame, i.toFrame)
                                    }
                                    this._activeFrames.frameNumbers = this._activeFrames.toFrame - this._activeFrames.fromFrame
                                }
                                return this._activeFrames
                            }
                        }, {
                            key: "getProgress",
                            value: function() {
                                if (this.scene.Animatables) {
                                    var t = this.scene.Animatables,
                                        e = 0,
                                        i = this.getTotalFrames(),
                                        n = NaN;
                                    t.forEach(function(t) {
                                        if (e = Math.min(e, t.fromFrame), i = Math.min(i, t.toFrame), isNaN(n))
                                            for (var a = t.getAnimations(), r = 0; r < a.length; r++) {
                                                var o = a[r];
                                                n = o.currentFrame
                                            }
                                    });
                                    return (n - e) / (i - e)
                                }
                            }
                        }, {
                            key: "getProgressOfActive",
                            value: function() {
                                if (this.scene.Animatables) {
                                    var t = this.scene.Animatables,
                                        e = NaN;
                                    t.forEach(function(t) {
                                        if (isNaN(e))
                                            for (var i = t.getAnimations(), n = 0; n < i.length; n++) {
                                                var a = i[n];
                                                e = a.currentFrame
                                            }
                                    });
                                    var i = this.getActiveFrames(),
                                        n = i.frameNumbers;
                                    return (e - i.fromFrame) / n
                                }
                            }
                        }, {
                            key: "setProgress",
                            value: function(t) {
                                if (this.scene.Animatables)
                                    for (var e = this.scene.Animatables, i = 0; i < e.length; i++) {
                                        var n = e[i],
                                            a = n.fromFrame,
                                            r = n.toFrame,
                                            o = (r - a) * t;
                                        n.goToFrame(o)
                                    }
                            }
                        }, {
                            key: "setProgressOfActive",
                            value: function(t) {
                                if (this.scene.Animatables)
                                    for (var e = this.scene.Animatables, i = this.getActiveFrames(), n = i.fromFrame, a = i.toFrame, r = n + (a - n) * t, o = 0; o < e.length; o++) {
                                        var s = e[o];
                                        s.goToFrame(r)
                                    }
                            }
                        }, {
                            key: "setFrame",
                            value: function(t) {
                                if (this.scene.Animatables)
                                    for (var e = this.scene.Animatables, i = 0; i < e.length; i++) e[i].goToFrame(t)
                            }
                        }, {
                            key: "setPlaySegment",
                            value: function(t, e) {
                                this.scene.Animatables && this.scene.Animatables.forEach(function(i) {
                                    i.getAnimations().forEach(function(n) {
                                        i.toFrame = e, i.fromFrame = t
                                    })
                                })
                            }
                        }]), t
                    }();
                t.exports = o
            },
            471: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    r = i(446),
                    o = function() {
                        function t(e) {
                            n(this, t), this.map = {}, e.on && e.on("execute", function(t) {
                                var e = t.type,
                                    i = t.data;
                                this.execute(e, i)
                            }), this.root = e
                        }
                        return a(t, [{
                            key: "clearAllCommand",
                            value: function() {
                                for (var t in this.map) delete this.map[t]
                            }
                        }, {
                            key: "registerCommand",
                            value: function(t, e) {
                                if (this.map[t]) throw t + "命令重复";
                                this.map[t] = e
                            }
                        }, {
                            key: "executeCommand",
                            value: function(t, e) {
                                if (!t || "" === t) throw new Error("没有传入command");
                                var i = this.map[t];
                                if (i) {
                                    var n = new i;
                                    if (!(n instanceof r)) throw "commandClass必须继承ICommand";
                                    return n.root = this.root, n.manager = this, n.execute(e)
                                }
                            }
                        }, {
                            key: "execute",
                            value: function() {
                                return this.executeCommand.apply(this, arguments)
                            }
                        }]), t
                    }();
                t.exports = o
            },
            472: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var a = i(439),
                    r = i(473),
                    o = i(474),
                    s = i(475),
                    c = i(476),
                    l = i(477),
                    u = i(478),
                    h = i(479),
                    p = i(480),
                    f = i(481),
                    d = i(482),
                    v = i(483),
                    y = i(485),
                    m = i(486),
                    b = function t(e) {
                        n(this, t), e.registerCommand(a.commands.UPDATE_ANNOTATION_DATA, r), e.registerCommand(a.commands.PLAY_ANIMATION_COMMAND, o), e.registerCommand(a.commands.SET_ANNOTATION_VISIBLE, s), e.registerCommand(a.commands.UPDATE_SETTING_PANEL, c), e.registerCommand(a.commands.CHECK_ENV, l), e.registerCommand(a.commands.CONFIGURE_MATERIAL, u), e.registerCommand(a.commands.CONFIGURE_PIPELINE, h), e.registerCommand(a.commands.SET_CAMERA_CONTROL, p), e.registerCommand(a.commands.DISPOSE, f), e.registerCommand(a.commands.SCENE_CAPTURE, d), e.registerCommand(a.commands.OBSERVE_MESH_BY_FRAME, v), e.registerCommand(a.commands.PIXI_PLUGIN, y), e.registerCommand(a.commands.OBSERVE_MESH_BY_RORATE, m)
                    };
                t.exports = b
            },
            473: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = i(439),
                    l = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                if (c.isDebug) {
                                    var e = this.root.retrieveSprites(c.sprite.ANNOTATION),
                                        i = [];
                                    e.forEach(function(t) {
                                        var e = t.getSceneData();
                                        e && i.push(e)
                                    });
                                    var n = /\/course\/(\d+)/.exec(location.href),
                                        a = void 0;
                                    a = n ? n[1] : window.courseID || "";
                                    var r = this.root.data.tipURL;
                                    if (!r) return void alert("没有指定tipURL");
                                    var o = JSON.stringify({
                                        data: i,
                                        path: r
                                    });
                                    console.log(r), $.ajax({
                                        url: "/nb-web-3d/writeFile/" + a,
                                        type: "POST",
                                        contentType: "application/json",
                                        data: o
                                    })
                                }
                            }
                        }]), e
                    }(s);
                t.exports = l
            },
            474: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                var e = this.root.animationManager,
                                    i = $(".ani-play-button");
                                this.root.player.enabledAni = t;
                                var n = void 0,
                                    a = void 0;
                                "boolean" == typeof t ? n = t : (n = t.play, a = t.reset, isNaN(t.timeScale) || (this.root.scene.animationTimeScale = t.timeScale)), a && e.reset(), n ? (e.restart(), i.removeClass("glyphicon-play"), i.addClass("glyphicon-pause")) : (e.pause(), i.removeClass("glyphicon-pause"), i.addClass("glyphicon-play"))
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            475: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = i(439),
                    l = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                this.root.setAnnotationVisible(t);
                                var e = $("#setting-annotation"),
                                    i = e[0].lastSelector;
                                $(i).removeClass("select");
                                var n = void 0;
                                t ? (n = e.children()[0], $(n).addClass("select")) : (n = e.children()[1], $(n).addClass("select")), e[0].lastSelector = n, this.root.execute(c.commands.UPDATE_SETTING_PANEL)
                            }
                        }]), e
                    }(s);
                t.exports = l
            },
            476: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                $(".setting.menu-item").toArray().forEach(function(t) {
                                    var e = $(t),
                                        i = e.attr("id").replace("setting", "val"),
                                        n = e.find(".select")[0],
                                        a = n.parentElement;
                                    a.lastSelector ? n = a.lastSelector : a.lastSelector = n;
                                    var r = $(n),
                                        o = r.text();
                                    $("#" + i).text(o)
                                })
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            477: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = i(439),
                    l = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                return new Promise(function(t, e) {
                                    $.ajax({
                                        url: "/nb-web-3d/check-env",
                                        type: "GET",
                                        contentType: "application/json"
                                    }).done(function(e) {
                                        "success" === e && (c.isDebug = !0, window.addEventListener("keydown", function(t) {
                                            16 === t.keyCode && (c.shiftDown = !0)
                                        }), window.addEventListener("keyup", function(t) {
                                            16 === t.keyCode && (c.shiftDown = !1)
                                        }), t())
                                    }).error(function(t) {
                                        e()
                                    })
                                })
                            }
                        }]), e
                    }(s);
                t.exports = l
            },
            478: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                if (t.globalMaterial) {
                                    var e = this.root,
                                        i = t.globalMaterial,
                                        n = !1,
                                        a = 0;
                                    if (i.environmentReflection) {
                                        var r = i.environmentReflection;
                                        n = r.enabled, a = r.level
                                    }
                                    var o = this.root.scene,
                                        s = o.materials;
                                    o.environmentTexture && (o.environmentTexture.level = a);
                                    e.data.skybox && e.data.skybox.pbr ? o.getMaterialByName("skyBox").reflectionTexture : o.environmentTexture, s.forEach(function(t) {
                                        t instanceof BABYLON.StandardMaterial && (n ? (t.reflectionTexture = o.environmentTexture, t.roughness = i.roughness || 0) : (t.reflectionTexture = null, t.roughness = 0))
                                    })
                                }
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            479: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                var e = t.pipeline;
                                if (e) {
                                    var i = this.root.scene.activeCamera,
                                        n = this.root.scene,
                                        a = new BABYLON.StandardRenderingPipeline("standard", n, 1, null, [i]);
                                    a.BloomEnabled = !1;
                                    var r = e.bloom;
                                    r && (a.BloomEnabled = r.enabled);
                                    var o = e.motionBlur;
                                    o.enabled && (a.MotionBlurEnabled = o.enabled, a.motionStrength = o.motionStrength || .05, a.motionBlurSamples = o.motionBlurSamples || 32);
                                    var s = e.depthOfField;
                                    s && (a.DepthOfFieldEnabled = s.enabled, a.depthOfFieldDistance = s.distance || 100, a.depthOfFieldBlurWidth = s.blurWidth || 100);
                                    if (e.fxaaEnabled || !1) {
                                        new BABYLON.FxaaPostProcess("fxaa", 1, i);
                                        a.fxaaEnabled = !0
                                    }
                                }
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            480: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                var e = this.root.scene,
                                    i = e.activeCamera;
                                if (i && t) {
                                    t.enabled ? (i.attachControl(window, !0), i instanceof BABYLON.ArcRotateCamera && (i._useCtrlForPanning = !1)) : i.detachControl(window)
                                }
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            481: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                this.root.dispose()
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            482: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), 15),
                    l = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                function e() {
                                    0 !== s && BABYLON.Tools.CreateScreenshotUsingRenderTarget(r, a, o, function(t) {
                                        $.post({
                                            url: "/nb-web-3d/writeCaptureImage/test",
                                            data: {
                                                data: t,
                                                index: s
                                            },
                                            dataType: "json",
                                            success: function() {
                                                console.log("抓取图片第 " + (c - s) + " 张"), s--, e()
                                            }
                                        })
                                    })
                                }
                                var i = this.root,
                                    n = i.scene,
                                    a = n.activeCamera,
                                    r = n.getEngine(),
                                    o = {
                                        width: 800,
                                        height: 600
                                    },
                                    s = c;
                                e()
                            }
                        }]), e
                    }(s);
                t.exports = l
            },
            483: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = function t(e, i, n) {
                        null === e && (e = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(e, i);
                        if (void 0 === a) {
                            var r = Object.getPrototypeOf(e);
                            return null === r ? void 0 : t(r, i, n)
                        }
                        if ("value" in a) return a.value;
                        var o = a.get;
                        if (void 0 !== o) return o.call(n)
                    },
                    c = i(484),
                    l = i(439),
                    u = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                this.wireframeColor = void 0 === t.color ? BABYLON.Color3.White() : BABYLON.Color3.FromHexString("#" + t.color.toString(16)), this.wireframeAlpha = t.wireframeAlpha || 1, s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "execute", this).call(this, t)
                            }
                        }, {
                            key: "handleMesh",
                            value: function(t) {
                                var e = t.material.clone();
                                e.alphaOrigin = t.material.alpha, t.material = new BABYLON.MultiMaterial(l.UID(), this.scene);
                                var i = new BABYLON.StandardMaterial(l.UID(), this.scene);
                                i.diffuseColor = this.wireframeColor, i.specularPower = 0, i.wireframe = !0, t.material.subMaterials.push(e, i)
                            }
                        }, {
                            key: "setMeshObserve",
                            value: function(t, e) {
                                var i = t.material.subMaterials[0],
                                    n = t.material.subMaterials[1];
                                if (TweenMax.killTweensOf(n), TweenMax.killTweensOf(i), e) {
                                    if (!t.tempSubMesh) {
                                        var a = t.getTotalVertices(),
                                            r = t.getTotalIndices();
                                        t.tempSubMesh = new BABYLON.SubMesh(1, 0, a, 0, r, t), n.alpha = 0
                                    }
                                    TweenMax.to(n, .75, {
                                        alpha: this.wireframeAlpha
                                    }), TweenMax.to(i, .75, {
                                        delay: .75,
                                        alpha: 0
                                    })
                                } else t.tempSubMesh && (TweenMax.to(n, .75, {
                                    delay: .75,
                                    alpha: 0,
                                    onComplete: function() {
                                        t.tempSubMesh.dispose(), delete t.tempSubMesh
                                    }
                                }), TweenMax.to(i, .75, {
                                    alpha: i.alphaOrigin
                                }))
                            }
                        }]), e
                    }(c);
                t.exports = u
            },
            484: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function o(t) {
                    return !t.isImported || !t.material
                }
                var s = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    c = i(440).ICommand,
                    l = i(439),
                    u = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), s(e, [{
                            key: "execute",
                            value: function(t) {
                                var e = this;
                                if (!t) throw "必须要传入对象";
                                var i = this.root.scene,
                                    n = this;
                                this.scene = i;
                                var a = i.meshes,
                                    r = this;
                                this.nameFilter = t.nameFilter || /observe_/, this.otherthanFilter = t.otherthan || /!./, a.forEach(function(i) {
                                    o(i) || (e.nameFilter.test(i.name) && (i.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnDoublePickTrigger, r.meshDoubleClick.bind(e))), t.bindAnnotationToMesh && i.actionManager.registerAction(new BABYLON.ExecuteCodeAction(l.action.ANNOTATION_CLICK_TRIGGER, r.meshDoubleClick.bind(e)))), r.handleMesh(i))
                                }), n.root.resetSceneMesh = n.zoomOut.bind(this), i.onPointerObservable.add(this.sceneDBClick.bind(this), BABYLON.PointerEventTypes.POINTERDOUBLETAP)
                            }
                        }, {
                            key: "meshDoubleClick",
                            value: function(t) {
                                var e = this,
                                    i = this;
                                this.observeMesh && this.observeMesh === t.source || (this.observeMesh = t.source, this.scene.meshes.forEach(function(t) {
                                    o(t) || e.otherthanFilter.test(t.name) || (t === e.observeMesh || t.bindMesh && t.bindMesh === e.observeMesh ? i.setMeshObserve(t, !1) : i.setMeshObserve(t, !0))
                                }))
                            }
                        }, {
                            key: "handleMesh",
                            value: function(t) {
                                throw "子类需要重写"
                            }
                        }, {
                            key: "setMeshObserve",
                            value: function(t, e) {
                                throw "子类需要重写"
                            }
                        }, {
                            key: "sceneDBClick",
                            value: function(t) {
                                var e = this;
                                if (!t.pickInfo.pickedMesh) {
                                    if (!this.observeMesh) return;
                                    this.scene.meshes.forEach(function(t) {
                                        o(t) || e.setMeshObserve(t, !1)
                                    }), this.observeMesh = null
                                }
                            }
                        }, {
                            key: "zoomOut",
                            value: function() {
                                var t = this;
                                this.scene.meshes.forEach(function(e) {
                                    o(e) || t.setMeshObserve(e, !1)
                                }), this.observeMesh = null
                            }
                        }]), e
                    }(c);
                t.exports = u
            },
            485: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = i(439),
                    l = function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                function e(t) {
                                    var e = {};
                                    r.mapPositionToPoint(e, t.clientX, t.clientY), r.processInteractive(e, instance.viewStack, function() {}, !0) && (a.addEventListener("pointerup", i), n.execute(c.commands.SET_CAMERA_CONTROL, {
                                        enabled: !1
                                    }))
                                }

                                function i(t) {
                                    a.removeEventListener("pointerup", i), n.execute(c.commands.SET_CAMERA_CONTROL, {
                                        enabled: !0
                                    })
                                }
                                var n = this.manager;
                                if (!window.PIXI || !window.instance) return void console.log("没有指定instance 无法做3D与PIXI的兼容");
                                var a = $("#bioCanvas")[0];
                                if (!a) return void console.log("没有指定canvas, 无法做3D与2D交互的兼容");
                                var r = instance.renderer.plugins.interaction;
                                a.addEventListener("pointerdown", e, !0)
                            }
                        }]), e
                    }(s);
                t.exports = l
            },
            486: function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                var o = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }
                        return function(e, i, n) {
                            return i && t(e.prototype, i), n && t(e, n), e
                        }
                    }(),
                    s = i(440).ICommand,
                    c = (i(439), function(t) {
                        function e() {
                            return n(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return r(e, t), o(e, [{
                            key: "execute",
                            value: function(t) {
                                function e() {
                                    if (o) {
                                        var t = n.pointerX,
                                            e = t - s;
                                        s = t, o.rotation[o.useAxis] -= e / 200
                                    }
                                }

                                function i() {
                                    o = null
                                }
                                var n = this.root.scene;
                                this.scene = n;
                                var a = this.root;
                                n.activeCamera.upperAlphaLimit = n.activeCamera.lowerAlphaLimit = a.data.camera.alpha, n.activeCamera.upperBetaLimit = n.activeCamera.lowerBetaLimit = a.data.camera.beta;
                                var r = t.meshes,
                                    o = null,
                                    s = null;
                                n.registerBeforeRender(e);
                                var c = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, i),
                                    l = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, i),
                                    u = new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, function(t) {
                                        o = t.source, s = t.pointerX
                                    });
                                r.forEach(function(t) {
                                    try {
                                        var e = n.getMeshByName(t.name + "_area");
                                        e.visibility = 0;
                                        var i = n.getMeshByName(t.name + "_model");
                                        i.rotation = e.rotation;
                                        var a = n.getMeshByName(t.name + "_base"),
                                            r = e.getBoundingInfo(),
                                            o = r.diagonalLength,
                                            s = r.boundingSphere.center,
                                            h = r.boundingBox.maximumWorld,
                                            p = r.boundingBox.minimumWorld;
                                        console.log(r, o, s, h, p);
                                        var f = a.getBoundingInfo().boundingSphere.center,
                                            d = s.clone();
                                        console.log(e.name, d), d.z = 0, e.setPivotPoint(f), i.setPivotPoint(f), t.reposition && (e.position = d.clone(), i.position = d.clone()), e.useAxis = t.axis || "z", e.actionManager || (e.actionManager = new BABYLON.ActionManager(n)), e.actionManager.registerAction(u), e.actionManager.registerAction(c), e.actionManager.registerAction(l)
                                    } catch (t) {
                                        console.error(t)
                                    }
                                })
                            }
                        }]), e
                    }(s));
                t.exports = c
            },
            487: function(t, e, i) {
                "use strict";
                ! function() {
                    var e = i(488),
                        n = i(447).utf8,
                        a = i(489),
                        r = i(447).bin,
                        o = function t(i, o) {
                            i.constructor == String ? i = o && "binary" === o.encoding ? r.stringToBytes(i) : n.stringToBytes(i) : a(i) ? i = Array.prototype.slice.call(i, 0) : Array.isArray(i) || (i = i.toString());
                            for (var s = e.bytesToWords(i), c = 8 * i.length, l = 1732584193, u = -271733879, h = -1732584194, p = 271733878, f = 0; f < s.length; f++) s[f] = 16711935 & (s[f] << 8 | s[f] >>> 24) | 4278255360 & (s[f] << 24 | s[f] >>> 8);
                            s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
                            for (var d = t._ff, v = t._gg, y = t._hh, m = t._ii, f = 0; f < s.length; f += 16) {
                                var b = l,
                                    g = u,
                                    A = h,
                                    O = p;
                                l = d(l, u, h, p, s[f + 0], 7, -680876936), p = d(p, l, u, h, s[f + 1], 12, -389564586), h = d(h, p, l, u, s[f + 2], 17, 606105819), u = d(u, h, p, l, s[f + 3], 22, -1044525330), l = d(l, u, h, p, s[f + 4], 7, -176418897), p = d(p, l, u, h, s[f + 5], 12, 1200080426), h = d(h, p, l, u, s[f + 6], 17, -1473231341), u = d(u, h, p, l, s[f + 7], 22, -45705983), l = d(l, u, h, p, s[f + 8], 7, 1770035416), p = d(p, l, u, h, s[f + 9], 12, -1958414417), h = d(h, p, l, u, s[f + 10], 17, -42063), u = d(u, h, p, l, s[f + 11], 22, -1990404162), l = d(l, u, h, p, s[f + 12], 7, 1804603682), p = d(p, l, u, h, s[f + 13], 12, -40341101), h = d(h, p, l, u, s[f + 14], 17, -1502002290), u = d(u, h, p, l, s[f + 15], 22, 1236535329), l = v(l, u, h, p, s[f + 1], 5, -165796510), p = v(p, l, u, h, s[f + 6], 9, -1069501632), h = v(h, p, l, u, s[f + 11], 14, 643717713), u = v(u, h, p, l, s[f + 0], 20, -373897302), l = v(l, u, h, p, s[f + 5], 5, -701558691), p = v(p, l, u, h, s[f + 10], 9, 38016083), h = v(h, p, l, u, s[f + 15], 14, -660478335), u = v(u, h, p, l, s[f + 4], 20, -405537848), l = v(l, u, h, p, s[f + 9], 5, 568446438), p = v(p, l, u, h, s[f + 14], 9, -1019803690), h = v(h, p, l, u, s[f + 3], 14, -187363961), u = v(u, h, p, l, s[f + 8], 20, 1163531501), l = v(l, u, h, p, s[f + 13], 5, -1444681467), p = v(p, l, u, h, s[f + 2], 9, -51403784), h = v(h, p, l, u, s[f + 7], 14, 1735328473), u = v(u, h, p, l, s[f + 12], 20, -1926607734), l = y(l, u, h, p, s[f + 5], 4, -378558), p = y(p, l, u, h, s[f + 8], 11, -2022574463), h = y(h, p, l, u, s[f + 11], 16, 1839030562), u = y(u, h, p, l, s[f + 14], 23, -35309556), l = y(l, u, h, p, s[f + 1], 4, -1530992060), p = y(p, l, u, h, s[f + 4], 11, 1272893353), h = y(h, p, l, u, s[f + 7], 16, -155497632), u = y(u, h, p, l, s[f + 10], 23, -1094730640), l = y(l, u, h, p, s[f + 13], 4, 681279174), p = y(p, l, u, h, s[f + 0], 11, -358537222), h = y(h, p, l, u, s[f + 3], 16, -722521979), u = y(u, h, p, l, s[f + 6], 23, 76029189), l = y(l, u, h, p, s[f + 9], 4, -640364487), p = y(p, l, u, h, s[f + 12], 11, -421815835), h = y(h, p, l, u, s[f + 15], 16, 530742520), u = y(u, h, p, l, s[f + 2], 23, -995338651), l = m(l, u, h, p, s[f + 0], 6, -198630844), p = m(p, l, u, h, s[f + 7], 10, 1126891415), h = m(h, p, l, u, s[f + 14], 15, -1416354905), u = m(u, h, p, l, s[f + 5], 21, -57434055), l = m(l, u, h, p, s[f + 12], 6, 1700485571), p = m(p, l, u, h, s[f + 3], 10, -1894986606), h = m(h, p, l, u, s[f + 10], 15, -1051523), u = m(u, h, p, l, s[f + 1], 21, -2054922799), l = m(l, u, h, p, s[f + 8], 6, 1873313359), p = m(p, l, u, h, s[f + 15], 10, -30611744), h = m(h, p, l, u, s[f + 6], 15, -1560198380), u = m(u, h, p, l, s[f + 13], 21, 1309151649), l = m(l, u, h, p, s[f + 4], 6, -145523070), p = m(p, l, u, h, s[f + 11], 10, -1120210379), h = m(h, p, l, u, s[f + 2], 15, 718787259), u = m(u, h, p, l, s[f + 9], 21, -343485551), l = l + b >>> 0, u = u + g >>> 0, h = h + A >>> 0, p = p + O >>> 0
                            }
                            return e.endian([l, u, h, p])
                        };
                    o._ff = function(t, e, i, n, a, r, o) {
                        var s = t + (e & i | ~e & n) + (a >>> 0) + o;
                        return (s << r | s >>> 32 - r) + e
                    }, o._gg = function(t, e, i, n, a, r, o) {
                        var s = t + (e & n | i & ~n) + (a >>> 0) + o;
                        return (s << r | s >>> 32 - r) + e
                    }, o._hh = function(t, e, i, n, a, r, o) {
                        var s = t + (e ^ i ^ n) + (a >>> 0) + o;
                        return (s << r | s >>> 32 - r) + e
                    }, o._ii = function(t, e, i, n, a, r, o) {
                        var s = t + (i ^ (e | ~n)) + (a >>> 0) + o;
                        return (s << r | s >>> 32 - r) + e
                    }, o._blocksize = 16, o._digestsize = 16, t.exports = function(t, i) {
                        if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
                        var n = e.wordsToBytes(o(t, i));
                        return i && i.asBytes ? n : i && i.asString ? r.bytesToString(n) : e.bytesToHex(n)
                    }
                }()
            },
            488: function(t, e, i) {
                "use strict";
                ! function() {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        i = {
                            rotl: function(t, e) {
                                return t << e | t >>> 32 - e
                            },
                            rotr: function(t, e) {
                                return t << 32 - e | t >>> e
                            },
                            endian: function(t) {
                                if (t.constructor == Number) return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
                                for (var e = 0; e < t.length; e++) t[e] = i.endian(t[e]);
                                return t
                            },
                            randomBytes: function(t) {
                                for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                                return e
                            },
                            bytesToWords: function(t) {
                                for (var e = [], i = 0, n = 0; i < t.length; i++, n += 8) e[n >>> 5] |= t[i] << 24 - n % 32;
                                return e
                            },
                            wordsToBytes: function(t) {
                                for (var e = [], i = 0; i < 32 * t.length; i += 8) e.push(t[i >>> 5] >>> 24 - i % 32 & 255);
                                return e
                            },
                            bytesToHex: function(t) {
                                for (var e = [], i = 0; i < t.length; i++) e.push((t[i] >>> 4).toString(16)), e.push((15 & t[i]).toString(16));
                                return e.join("")
                            },
                            hexToBytes: function(t) {
                                for (var e = [], i = 0; i < t.length; i += 2) e.push(parseInt(t.substr(i, 2), 16));
                                return e
                            },
                            bytesToBase64: function(t) {
                                for (var i = [], n = 0; n < t.length; n += 3)
                                    for (var a = t[n] << 16 | t[n + 1] << 8 | t[n + 2], r = 0; r < 4; r++) 8 * n + 6 * r <= 8 * t.length ? i.push(e.charAt(a >>> 6 * (3 - r) & 63)) : i.push("=");
                                return i.join("")
                            },
                            base64ToBytes: function(t) {
                                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                                for (var i = [], n = 0, a = 0; n < t.length; a = ++n % 4) 0 != a && i.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | e.indexOf(t.charAt(n)) >>> 6 - 2 * a);
                                return i
                            }
                        };
                    t.exports = i
                }()
            },
            489: function(t, e, i) {
                    "use strict";

                    function n(t) {
                        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                    }

                    function a(t) {
                        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
                    }



t.exports=function(t){return null!=t&&(n(t)||a(t)||!!t._isBuffer)}},490:function(t,e,i){"use strict";function n(t,e,i){function n(e){var i=b,n=g;return b=g=void 0,E=e,O=t.apply(n,i)}function u(t){return E=t,S=setTimeout(f,e),x?n(t):O}function h(t){var i=t-M,n=t-E,a=e-i;return w?l(a,A-n):a}function p(t){var i=t-M,n=t-E;return void 0===M||i>=e||i<0||w&&n>=A}function f(){var t=r();if(p(t))return d(t);S=setTimeout(f,h(t))}function d(t){return S=void 0,B&&b?n(t):(b=g=void 0,O)}function v(){void 0!==S&&clearTimeout(S),E=0,b=M=g=S=void 0}function y(){return void 0===S?O:d(r())}function m(){var t=r(),i=p(t);if(b=arguments,g=this,M=t,i){if(void 0===S)return u(M);if(w)return S=setTimeout(f,e),n(M)}return void 0===S&&(S=setTimeout(f,e)),O}var b,g,A,O,S,M,E=0,x=!1,w=!1,B=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,a(i)&&(x=!!i.leading,w="maxWait"in i,A=w?c(o(i.maxWait)||0,e):A,B="trailing"in i?!!i.trailing:B),m.cancel=v,m.flush=y,m}var a=i(448),r=i(491),o=i(493),s="Expected a function",c=Math.max,l=Math.min;t.exports=n},491:function(t,e,i){"use strict";var n=i(449),a=function(){return n.Date.now()};t.exports=a},492:function(t,e,i){"use strict";(function(e){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e;t.exports=n}).call(e,i(1))},493:function(t,e,i){"use strict";function n(t){if("number"==typeof t)return t;if(r(t))return o;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var i=l.test(t);return i||u.test(t)?h(t.slice(2),i?2:8):c.test(t)?o:+t}var a=i(448),r=i(494),o=NaN,s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,h=parseInt;t.exports=n},494:function(t,e,i){"use strict";function n(t){return"symbol"==(void 0===t?"undefined":a(t))||o(t)&&r(t)==s}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=i(495),o=i(498),s="[object Symbol]";t.exports=n},495:function(t,e,i){"use strict";function n(t){return null==t?void 0===t?c:s:l&&l in Object(t)?r(t):o(t)}var a=i(450),r=i(496),o=i(497),s="[object Null]",c="[object Undefined]",l=a?a.toStringTag:void 0;t.exports=n},496:function(t,e,i){"use strict";function n(t){var e=o.call(t,c),i=t[c];try{t[c]=void 0;var n=!0}catch(t){}var a=s.call(t);return n&&(e?t[c]=i:delete t[c]),a}var a=i(450),r=Object.prototype,o=r.hasOwnProperty,s=r.toString,c=a?a.toStringTag:void 0;t.exports=n},497:function(t,e,i){"use strict";function n(t){return r.call(t)}var a=Object.prototype,r=a.toString;t.exports=n},498:function(t,e,i){"use strict";function n(t){return null!=t&&"object"==(void 0===t?"undefined":a(t))}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=n},499:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(439),c=s.TWEEN_TIMER,l=function(t){function e(t){n(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.scene));return i.babylonScene=t,i.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnDoublePickTrigger,i.doublePicker.bind(t))),i.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,i.pointerOver.bind(t))),i.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,i.pointerOut.bind(t))),i}return r(e,t),o(e,[{key:"doublePicker",value:function(t){var e=this.scene,i=e._currentPickResult,n=t.pickedPoint||i.pickedPoint,a=e.activeCamera,r=this.getEaseFunc();this.lookAtVector(n);var o=BABYLON.Mesh.MinMax([t.source]),s=1.25*BABYLON.Vector3.Distance(o.min,o.max);t.ignoreCameraDistance?TweenMax.to(a,c,{radius:s,ease:r}):s<a.radius&&TweenMax.to(a,c,{radius:s,ease:r})}},{key:"pointerOver",value:function(t){t.source.meshData}},{key:"pointerOut",value:function(t){t.source}}]),e}(BABYLON.ActionManager);t.exports=l},500:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=12,o=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bioCanvas";n(this,t),window.addEventListener("resize",this.resize),this.originScene=e;var a=$("#"+i)[0];if(!a)throw"请指定监听事件的canvas对象";$(e.data.canvas).css("display","none"),this.addListener(a),this.imageIndex=0}return a(t,[{key:"addListener",value:function(t){function e(t){var e=instance.renderer.plugins.interaction,r={};e.mapPositionToPoint(r,t.clientX,t.clientY),e.processInteractive(r,instance.viewStack,function(){},!0)||(a=t.clientX,window.addEventListener("pointermove",i),window.addEventListener("pointerup",n))}function i(t){t.clientX-a>r?(a=t.clientX,o.nextImage()):t.clientX-a<-r&&(a=t.clientX,o.prevImage())}function n(){window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",n)}var a=0,o=this;t.addEventListener("pointerdown",e)}},{key:"nextImage",value:function(){this.imageIndex--,this.updateImage()}},{key:"prevImage",value:function(){this.imageIndex++,this.updateImage()}},{key:"updateImage",value:function(){this.imageIndex%=15,this.imageIndex<0?this.imageIndex+=15:this.imageIndex>15&&(this.imageIndex-=15);var t=1e3*this.imageIndex;console.log(t),$("#nb2dImg").css("transform","translate(-"+t+"px, 0px)")}},{key:"loadMesh",value:function(t){if(t){var e=this,i=t.replace(".babylon","-2d.jpg"),n=$("#nb2dImg");if(0===n.length){$(document.body).append('\n\t\t\t\t<div class="babylon-2d-wrapper">\n\t\t\t\t\t<div class="babylon-2d">\n\t\t\t\t\t\t<img id="nb2dImg"></img>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'),$("#nb2dImg")[0].addEventListener("load",function(){e.originScene.setLoading(!1,1)})}n=$("#nb2dImg"),n.attr("src",i),this.resize()}}},{key:"resize",value:function(){var t=$(".babylon-2d");if(t[0]){var e=t.width();t.height();t.css("left",-(e-window.innerWidth>>1)+"px")}}},{key:"disposeSceneObjects",value:function(){}}]),t}();t.exports=o},501:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(439),o=i(442),s=function(){function t(e,a){function o(t){0===m&&(m=$(".player-controls .timeline").position().left),p.pause(),window.addEventListener("pointermove",s),window.addEventListener("pointerup",c),s(t)}function s(t){console.log("move");var e=t.x-m;e<0?e=0:e>l.trackWidth&&(e=l.trackWidth);var i=e/l.trackWidth;isNaN(i)||(p.setProgress(i),y=i)}function c(){l.enabledAni&&p.restart(),window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",c)}n(this,t),this.babylonScene=e,this.enabledAni=!0;var l=this;this.settingItemMap={};var u=(e.scene,i(502)),h=$(u);this.element=h;var p=this.babylonScene.animationManager;$("body").append(h),a&&!a.isShowPlaybar&&$(".player-controls").css("display","none"),a&&this.setData(a),e.execute(r.commands.UPDATE_SETTING_PANEL);var f=$(".threed-player"),d=f.find(".menu-item.first-level");d.click(this.menuItemClick.bind(this)),d.toArray().forEach(function(t){var e=$(t).find(".setting-value").attr("id");l.settingItemMap[e]=$(t)}),$(".setting-option .back").click(this.backBtnClick.bind(this)),this.playerSetting=$(".player-setting"),this.playerSetting.click(function(t){t.stopPropagation()}),$("#setting-btn").click(this.clearStyle.bind(this)),$("#level2-setting .setting p").click(function(t){console.log(l);var i=t.currentTarget.parentElement;if(i.lastSelector||(i.lastSelector=i.children[0]),i.lastSelector!==t.currentTarget){$(i.lastSelector).removeClass("select");var n=$(t.currentTarget);n.addClass("select");var a=n.attr("type");console.log(t),i.lastSelector=t.currentTarget;var r=n.text(),o=n.parent().attr("id").split("-")[1],s="val-"+o;$("#"+s).text(r),e.updateSetting(a)}});var v=$(".ani-play-button"),y=0;v.click(function(){var t=e.animationManager;l.enabledAni=!l.enabledAni,e.execute(r.commands.PLAY_ANIMATION_COMMAND,l.enabledAni),l.enabledAni?t.setProgress(y):y=t.getProgress()}),this.trackBar=$(".track .bar"),this.trackWidth=this.trackBar.width(),this.trackKnob=$(".track .knob"),this.trackKnobWidth=this.trackKnob.width(),this.resize=function(){l.trackWidth=$(".track .bar").width()},window.addEventListener("resize",this.resize),$(".nb-timeline-wrapper")[0].addEventListener("pointerdown",o);var m=0}return a(t,[{key:"update",value:function(){var t=this.babylonScene.scene,e=t.Animatables;if(e){var i=(e[0],this.babylonScene.animationManager),n=i.getProgress();if(!isNaN(n)){0===this.trackWidth&&(this.trackWidth=$(".track .bar").width());var a=this.trackWidth*n-this.trackKnobWidth;this.trackKnob.css("transform","translateX("+a+"px)")}}}},{key:"menuItemClick",value:function(t){var e=t.currentTarget.getAttribute("type");this.clearStyle(),this.playerSetting.addClass("inner-setting"),this.lastTypeEle=$("#setting-"+e),this.lastTypeEle.addClass("show")}},{key:"backBtnClick",value:function(){this.clearStyle()}},{key:"addData",value:function(t){}},{key:"clearStyle",value:function(){this.playerSetting.removeClass("inner-setting"),this.lastTypeEle&&this.lastTypeEle.removeClass("show"),delete this.lastTypeEle}},{key:"setData",value:function(t){var e=t.tips;if(e){var i=$("#nb-threed-player-ul");e.forEach(function(t){t.title=o.convertTextToHTML(t.title),i.append('<li sprite="'+t.title+'"><a href="#">'+t.title+"</a></li>")}),i.find("li").click(this.tipClick(this))}}},{key:"tipClick",value:function(t){return function(){var e=this.getAttribute("sprite");e=o.convertTextToHTML(e),t.babylonScene.lookAtSpriteByName(e)}}},{key:"showAnimationSetting",value:function(t){var e=$(".player-controls .timeline");t?(this.addSettingItem([r.setting.SPEED]),e.css("display","block")):(this.removeSettingItem([r.setting.SPEED]),e.css("display","none"))}},{key:"addSettingItem",value:function(t){var e=this;t.forEach(function(t){e.settingItemMap[t].show()})}},{key:"removeSettingItem",value:function(t){var e=this;t.forEach(function(t){e.settingItemMap[t].hide()})}},{key:"dispose",value:function(){window.removeEventListener("resize",this.resize),delete this.babylonScene,$(this.element).remove()}}]),t}();t.exports=s},502:function(t,e,i){"use strict";t.exports='\n<div class="player-controls">\n    <div class="threed-player">\n        <div class="btn-group cameraBtn">\n            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle glyphicon glyphicon-animation"></span></button>\n            <ul id="nb-threed-player-ul" class="dropdown-menu bullet pull-center pull-top" style="margin-right: -85px;">\n                \x3c!--添加静态快照和(动画)--\x3e\n            </ul>\n        </div>\n        \n        <div class="btn-group">\n            <button id="setting-btn" data-toggle="dropdown" class="btn btn-primary dropdown-toggle glyphicon glyphicon-setting"></button>\n            <div class="dropdown-menu bullet pull-center pull-top menu-wrapper">\n                <ul id="nb-threed-player-ul" class="dropdown-menu bullet pull-center pull-top" style="margin-right: -85px;">\n                </ul>\n                <div class="setting-wrapper">\n                    <div class="player-setting">\n                        <div class="setting-option">\n                            <div class="menu-item first-level" type="render">\n                                <p class="setting-label">渲染</p>\n                                <p class="setting-value" id="val-render">lit</p>\n                            </div>\n                            <div class="menu-item first-level" type="camera">\n                                <p class="setting-label">摄像机</p>\n                                <p class="setting-value" id="val-camera">orbit</p>\n                            </div>\n                            <div class="menu-item first-level" type="annotation">\n                                <p class="setting-label">标注</p>\n                                <p class="setting-value" id="val-annotation">显示</p>\n                            </div>\n                            <div class="menu-item first-level" type="speed">\n                                <p class="setting-label">动画速度</p>\n                                <p class="setting-value" id="val-speed">1x</p>\n                            </div>\n                        </div>\n                        <div id="level2-setting" class="setting-option">\n                            <div class="back menu-item">\n                                <p>返回</p>\n                            </div>\n                            <div class="setting menu-item" id="setting-render">\n                                <p class="select" type="render:ordinary">普通</p>\n                                <p type="render:wireframe">线框</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-camera">\n                                <p class="select" type="camera:arcCamera">轨道</p>\n                                <p type="camera:freeCamera">第一人称</p>\n                                <p type="camera:vrArcCamera">VR+轨道</p>\n                                <p type="camera:vrFreeCamera">VR+第一人称</p>\n                                <p type="camera:anaglyphCamera">立体(红蓝)</p>\n                                <p type="camera:stereoscopicCamera">立体(偏振)</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-annotation">\n                                <p class="select" type="anno:show">显示</p>\n                                <p type="anno:hide">隐藏</p>\n                            </div> \n                            <div class="setting menu-item" id="setting-speed">\n                                <p type="speed:0.1x">0.1x</p>\n                                <p type="speed:0.25x">0.25x</p>\n                                <p type="speed:0.5x">0.5x</p>\n                                <p class="select" type="speed:1x">1x</p>\n                                <p type="speed:2x">2x</p>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n\n    </div>\n\n    <div class="timeline">\n        <div class="nb-timeline-wrapper">\n            <div class="track">\n                <div class="bar"></div>\n                <div class="knob"></div>\n            </div>\n        </div>\n        \n        <span href="#" class="ani-play-button glyphicon glyphicon-pause">\n        </span>\n    </div>\n    \n\n</div>\n\n'},503:function(t,e,i){"use strict";function n(t){t.use(["/nb-web-3d/writeFile/:id","/nb-web-3d/writeFile/"],function(t,e){var i=t.body,n=i,o=n.path,c=t.params.id||"";o=o.replace(""+s.baseURL+c+"/","");var l="./"+s.baseURL+c+"/"+o,u=l.substr(0,l.lastIndexOf("/"));r.sync(u),a.writeFileSync(l,JSON.stringify(n.data))}),t.use("/nb-web-3d/check-env",function(t,e){e.send("success")})}var a=void 0,r=void 0;try{a=i(!function(){var t=new Error('Cannot find module "fs"');throw t.code="MODULE_NOT_FOUND",t}());var o=i(451);r=function(t,e){t=o.resolve(t),a.exists(t,function(i){i?e&&e(null):r(o.dirname(t),function(){a.mkdir(t,function(t){e&&e(t)})})})},r.sync=function(t){t=o.resolve(t),a.existsSync(t)||(r.sync(o.dirname(t)),a.mkdirSync(t))}}catch(t){console.warn("没有fs")}var s={baseURL:"course/biology"};try{s=JSON.parse(a.readFileSync("./nb3d.config.json").toString())}catch(t){console.log(t)}i(3).Buffer;t.exports=n},863:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(864),r=n(a),o=i(865),s=n(o),c=i(866),l=n(c),u={};u.image=r.default,u.motor=s.default,u.TEXTURE2=l.default,e.default=u},864:function(t,e,i){t.exports=i.p+"nb-models/91a4d5c9-5105-0d5b1c4c.jpg"},865:function(t,e,i){t.exports=i.p+"nb-models/91a4d5c9-5105-0e6d76f1.babylon"},866:function(t,e,i){t.exports=i.p+"nb-models/91a4d5c9-5105-13fb1180.jpg"}});
