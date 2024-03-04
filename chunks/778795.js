function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HTML5BackendImpl: function() {
            return f
        }
    }), n("424973"), n("70102"), n("222007"), n("843762");
    var r = n("681918"),
        i = n("682050"),
        o = n("236495"),
        s = n("726764"),
        a = n("746395");

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach(function(t) {
                l(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var f = function() {
        var e, t, n;

        function c(e, t, n) {
            var s = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), l(this, "options", void 0), l(this, "actions", void 0), l(this, "monitor", void 0), l(this, "registry", void 0), l(this, "enterLeaveCounter", void 0), l(this, "sourcePreviewNodes", new Map), l(this, "sourcePreviewNodeOptions", new Map), l(this, "sourceNodes", new Map), l(this, "sourceNodeOptions", new Map), l(this, "dragStartSourceIds", null), l(this, "dropTargetIds", []), l(this, "dragEnterTargetIds", []), l(this, "currentNativeSource", null), l(this, "currentNativeHandle", null), l(this, "currentDragSourceNode", null), l(this, "altKeyPressed", !1), l(this, "mouseMoveTimeoutTimer", null), l(this, "asyncEndDragFrameId", null), l(this, "dragOverTargetIds", null), l(this, "getSourceClientOffset", function(e) {
                var t = s.sourceNodes.get(e);
                return t && (0, i.getNodeClientOffset)(t) || null
            }), l(this, "endDragNativeItem", function() {
                s.isDraggingNativeItem() && (s.actions.endDrag(), s.currentNativeHandle && s.registry.removeSource(s.currentNativeHandle), s.currentNativeHandle = null, s.currentNativeSource = null)
            }), l(this, "isNodeInDocument", function(e) {
                return !!(e && s.document && s.document.body && s.document.body.contains(e))
            }), l(this, "endDragIfSourceWasRemovedFromDOM", function() {
                var e = s.currentDragSourceNode;
                !(null == e || s.isNodeInDocument(e)) && s.clearCurrentDragSourceNode() && s.monitor.isDragging() && s.actions.endDrag()
            }), l(this, "handleTopDragStartCapture", function() {
                s.clearCurrentDragSourceNode(), s.dragStartSourceIds = []
            }), l(this, "handleTopDragStart", function(e) {
                if (!e.defaultPrevented) {
                    var t = s.dragStartSourceIds;
                    s.dragStartSourceIds = null;
                    var n = (0, i.getEventClientOffset)(e);
                    s.monitor.isDragging() && s.actions.endDrag(), s.actions.beginDrag(t || [], {
                        publishSource: !1,
                        getSourceClientOffset: s.getSourceClientOffset,
                        clientOffset: n
                    });
                    var r = e.dataTransfer,
                        a = (0, o.matchNativeItemType)(r);
                    if (s.monitor.isDragging()) {
                        if (r && "function" == typeof r.setDragImage) {
                            var c = s.monitor.getSourceId(),
                                u = s.sourceNodes.get(c),
                                d = s.sourcePreviewNodes.get(c) || u;
                            if (d) {
                                var l = s.getCurrentSourcePreviewNodeOptions(),
                                    f = l.anchorX,
                                    p = l.anchorY,
                                    h = l.offsetX,
                                    v = l.offsetY,
                                    g = (0, i.getDragPreviewOffset)(u, d, n, {
                                        anchorX: f,
                                        anchorY: p
                                    }, {
                                        offsetX: h,
                                        offsetY: v
                                    });
                                r.setDragImage(d, g.x, g.y)
                            }
                        }
                        try {
                            null == r || r.setData("application/json", {})
                        } catch (e) {}
                        s.setCurrentDragSourceNode(e.target), s.getCurrentSourcePreviewNodeOptions().captureDraggingState ? s.actions.publishDragSource() : setTimeout(function() {
                            return s.actions.publishDragSource()
                        }, 0)
                    } else if (a) s.beginDragNativeItem(a);
                    else {
                        if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
                        e.preventDefault()
                    }
                }
            }), l(this, "handleTopDragEndCapture", function() {
                s.clearCurrentDragSourceNode() && s.monitor.isDragging() && s.actions.endDrag()
            }), l(this, "handleTopDragEnterCapture", function(e) {
                if (s.dragEnterTargetIds = [], !(!s.enterLeaveCounter.enter(e.target) || s.monitor.isDragging())) {
                    var t = e.dataTransfer,
                        n = (0, o.matchNativeItemType)(t);
                    n && s.beginDragNativeItem(n, t)
                }
            }), l(this, "handleTopDragEnter", function(e) {
                var t = s.dragEnterTargetIds;
                s.dragEnterTargetIds = [], s.monitor.isDragging() && (s.altKeyPressed = e.altKey, t.length > 0 && s.actions.hover(t, {
                    clientOffset: (0, i.getEventClientOffset)(e)
                }), t.some(function(e) {
                    return s.monitor.canDropOnTarget(e)
                }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = s.getCurrentDropEffect())))
            }), l(this, "handleTopDragOverCapture", function() {
                s.dragOverTargetIds = []
            }), l(this, "handleTopDragOver", function(e) {
                var t = s.dragOverTargetIds;
                if (s.dragOverTargetIds = [], !s.monitor.isDragging()) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                    return
                }
                s.altKeyPressed = e.altKey, s.actions.hover(t || [], {
                    clientOffset: (0, i.getEventClientOffset)(e)
                }), (t || []).some(function(e) {
                    return s.monitor.canDropOnTarget(e)
                }) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = s.getCurrentDropEffect())) : s.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
            }), l(this, "handleTopDragLeaveCapture", function(e) {
                s.isDraggingNativeItem() && e.preventDefault(), s.enterLeaveCounter.leave(e.target) && s.isDraggingNativeItem() && setTimeout(function() {
                    return s.endDragNativeItem()
                }, 0)
            }), l(this, "handleTopDropCapture", function(e) {
                if (s.dropTargetIds = [], s.isDraggingNativeItem()) {
                    var t;
                    e.preventDefault(), null === (t = s.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer)
                } else(0, o.matchNativeItemType)(e.dataTransfer) && e.preventDefault();
                s.enterLeaveCounter.reset()
            }), l(this, "handleTopDrop", function(e) {
                var t = s.dropTargetIds;
                s.dropTargetIds = [], s.actions.hover(t, {
                    clientOffset: (0, i.getEventClientOffset)(e)
                }), s.actions.drop({
                    dropEffect: s.getCurrentDropEffect()
                }), s.isDraggingNativeItem() ? s.endDragNativeItem() : s.monitor.isDragging() && s.actions.endDrag()
            }), l(this, "handleSelectStart", function(e) {
                var t = e.target;
                if ("function" == typeof t.dragDrop) "INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable && (e.preventDefault(), t.dragDrop())
            }), this.options = new a.OptionsReader(t, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new r.EnterLeaveCounter(this.isNodeInDocument)
        }
        return e = c, t = [{
            key: "profile",
            value: function() {
                var e, t;
                return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                }
            }
        }, {
            key: "window",
            get: function() {
                return this.options.window
            }
        }, {
            key: "document",
            get: function() {
                return this.options.document
            }
        }, {
            key: "rootElement",
            get: function() {
                return this.options.rootElement
            }
        }, {
            key: "setup",
            value: function() {
                var e = this.rootElement;
                if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
                    e.__isReactDndBackendSetUp = !0, this.addEventListeners(e)
                }
            }
        }, {
            key: "teardown",
            value: function() {
                var e, t = this.rootElement;
                void 0 !== t && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (e = this.window) || void 0 === e || e.cancelAnimationFrame(this.asyncEndDragFrameId)))
            }
        }, {
            key: "connectDragPreview",
            value: function(e, t, n) {
                var r = this;
                return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t),
                    function() {
                        r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e)
                    }
            }
        }, {
            key: "connectDragSource",
            value: function(e, t, n) {
                var r = this;
                this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                var i = function(t) {
                        return r.handleDragStart(t, e)
                    },
                    o = function(e) {
                        return r.handleSelectStart(e)
                    };
                return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", i), t.addEventListener("selectstart", o),
                    function() {
                        r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", i), t.removeEventListener("selectstart", o), t.setAttribute("draggable", "false")
                    }
            }
        }, {
            key: "connectDropTarget",
            value: function(e, t) {
                var n = this,
                    r = function(t) {
                        return n.handleDragEnter(t, e)
                    },
                    i = function(t) {
                        return n.handleDragOver(t, e)
                    },
                    o = function(t) {
                        return n.handleDrop(t, e)
                    };
                return t.addEventListener("dragenter", r), t.addEventListener("dragover", i), t.addEventListener("drop", o),
                    function() {
                        t.removeEventListener("dragenter", r), t.removeEventListener("dragover", i), t.removeEventListener("drop", o)
                    }
            }
        }, {
            key: "addEventListeners",
            value: function(e) {
                e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0))
            }
        }, {
            key: "removeEventListeners",
            value: function(e) {
                e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0))
            }
        }, {
            key: "getCurrentSourceNodeOptions",
            value: function() {
                var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                return u({
                    dropEffect: this.altKeyPressed ? "copy" : "move"
                }, t || {})
            }
        }, {
            key: "getCurrentDropEffect",
            value: function() {
                return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
            }
        }, {
            key: "getCurrentSourcePreviewNodeOptions",
            value: function() {
                var e = this.monitor.getSourceId();
                return u({
                    anchorX: .5,
                    anchorY: .5,
                    captureDraggingState: !1
                }, this.sourcePreviewNodeOptions.get(e) || {})
            }
        }, {
            key: "isDraggingNativeItem",
            value: function() {
                var e = this.monitor.getItemType();
                return Object.keys(s).some(function(t) {
                    return s[t] === e
                })
            }
        }, {
            key: "beginDragNativeItem",
            value: function(e, t) {
                this.clearCurrentDragSourceNode(), this.currentNativeSource = (0, o.createNativeDragSource)(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
            }
        }, {
            key: "setCurrentDragSourceNode",
            value: function(e) {
                var t = this;
                this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
                this.mouseMoveTimeoutTimer = setTimeout(function() {
                    var e;
                    return null === (e = t.rootElement) || void 0 === e ? void 0 : e.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0)
                }, 1e3)
            }
        }, {
            key: "clearCurrentDragSourceNode",
            value: function() {
                if (this.currentDragSourceNode) {
                    if (this.currentDragSourceNode = null, this.rootElement) {
                        var e;
                        null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)
                    }
                    return this.mouseMoveTimeoutTimer = null, !0
                }
                return !1
            }
        }, {
            key: "handleDragStart",
            value: function(e, t) {
                !e.defaultPrevented && (!this.dragStartSourceIds && (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t))
            }
        }, {
            key: "handleDragEnter",
            value: function(e, t) {
                this.dragEnterTargetIds.unshift(t)
            }
        }, {
            key: "handleDragOver",
            value: function(e, t) {
                null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t)
            }
        }, {
            key: "handleDrop",
            value: function(e, t) {
                this.dropTargetIds.unshift(t)
            }
        }], d(e.prototype, t), n && d(e, n), c
    }()
}