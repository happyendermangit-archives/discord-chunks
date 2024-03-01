function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HTML5BackendImpl: function() {
            return p
        }
    }), n("424973"), n("70102"), n("222007"), n("843762");
    var r = n("681918"),
        a = n("682050"),
        i = n("236495"),
        o = n("726764"),
        s = n("746395");

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

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach(function(t) {
                d(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var p = function() {
        var e, t, n;

        function c(e, t, n) {
            var o = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), d(this, "options", void 0), d(this, "actions", void 0), d(this, "monitor", void 0), d(this, "registry", void 0), d(this, "enterLeaveCounter", void 0), d(this, "sourcePreviewNodes", new Map), d(this, "sourcePreviewNodeOptions", new Map), d(this, "sourceNodes", new Map), d(this, "sourceNodeOptions", new Map), d(this, "dragStartSourceIds", null), d(this, "dropTargetIds", []), d(this, "dragEnterTargetIds", []), d(this, "currentNativeSource", null), d(this, "currentNativeHandle", null), d(this, "currentDragSourceNode", null), d(this, "altKeyPressed", !1), d(this, "mouseMoveTimeoutTimer", null), d(this, "asyncEndDragFrameId", null), d(this, "dragOverTargetIds", null), d(this, "getSourceClientOffset", function(e) {
                var t = o.sourceNodes.get(e);
                return t && (0, a.getNodeClientOffset)(t) || null
            }), d(this, "endDragNativeItem", function() {
                o.isDraggingNativeItem() && (o.actions.endDrag(), o.currentNativeHandle && o.registry.removeSource(o.currentNativeHandle), o.currentNativeHandle = null, o.currentNativeSource = null)
            }), d(this, "isNodeInDocument", function(e) {
                return !!(e && o.document && o.document.body && o.document.body.contains(e))
            }), d(this, "endDragIfSourceWasRemovedFromDOM", function() {
                var e = o.currentDragSourceNode;
                !(null == e || o.isNodeInDocument(e)) && o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag()
            }), d(this, "handleTopDragStartCapture", function() {
                o.clearCurrentDragSourceNode(), o.dragStartSourceIds = []
            }), d(this, "handleTopDragStart", function(e) {
                if (!e.defaultPrevented) {
                    var t = o.dragStartSourceIds;
                    o.dragStartSourceIds = null;
                    var n = (0, a.getEventClientOffset)(e);
                    o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(t || [], {
                        publishSource: !1,
                        getSourceClientOffset: o.getSourceClientOffset,
                        clientOffset: n
                    });
                    var r = e.dataTransfer,
                        s = (0, i.matchNativeItemType)(r);
                    if (o.monitor.isDragging()) {
                        if (r && "function" == typeof r.setDragImage) {
                            var c = o.monitor.getSourceId(),
                                l = o.sourceNodes.get(c),
                                u = o.sourcePreviewNodes.get(c) || l;
                            if (u) {
                                var d = o.getCurrentSourcePreviewNodeOptions(),
                                    p = d.anchorX,
                                    f = d.anchorY,
                                    m = d.offsetX,
                                    h = d.offsetY,
                                    v = (0, a.getDragPreviewOffset)(l, u, n, {
                                        anchorX: p,
                                        anchorY: f
                                    }, {
                                        offsetX: m,
                                        offsetY: h
                                    });
                                r.setDragImage(u, v.x, v.y)
                            }
                        }
                        try {
                            null == r || r.setData("application/json", {})
                        } catch (e) {}
                        o.setCurrentDragSourceNode(e.target), o.getCurrentSourcePreviewNodeOptions().captureDraggingState ? o.actions.publishDragSource() : setTimeout(function() {
                            return o.actions.publishDragSource()
                        }, 0)
                    } else if (s) o.beginDragNativeItem(s);
                    else {
                        if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
                        e.preventDefault()
                    }
                }
            }), d(this, "handleTopDragEndCapture", function() {
                o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag()
            }), d(this, "handleTopDragEnterCapture", function(e) {
                if (o.dragEnterTargetIds = [], !(!o.enterLeaveCounter.enter(e.target) || o.monitor.isDragging())) {
                    var t = e.dataTransfer,
                        n = (0, i.matchNativeItemType)(t);
                    n && o.beginDragNativeItem(n, t)
                }
            }), d(this, "handleTopDragEnter", function(e) {
                var t = o.dragEnterTargetIds;
                o.dragEnterTargetIds = [], o.monitor.isDragging() && (o.altKeyPressed = e.altKey, t.length > 0 && o.actions.hover(t, {
                    clientOffset: (0, a.getEventClientOffset)(e)
                }), t.some(function(e) {
                    return o.monitor.canDropOnTarget(e)
                }) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = o.getCurrentDropEffect())))
            }), d(this, "handleTopDragOverCapture", function() {
                o.dragOverTargetIds = []
            }), d(this, "handleTopDragOver", function(e) {
                var t = o.dragOverTargetIds;
                if (o.dragOverTargetIds = [], !o.monitor.isDragging()) {
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                    return
                }
                o.altKeyPressed = e.altKey, o.actions.hover(t || [], {
                    clientOffset: (0, a.getEventClientOffset)(e)
                }), (t || []).some(function(e) {
                    return o.monitor.canDropOnTarget(e)
                }) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = o.getCurrentDropEffect())) : o.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
            }), d(this, "handleTopDragLeaveCapture", function(e) {
                o.isDraggingNativeItem() && e.preventDefault(), o.enterLeaveCounter.leave(e.target) && o.isDraggingNativeItem() && setTimeout(function() {
                    return o.endDragNativeItem()
                }, 0)
            }), d(this, "handleTopDropCapture", function(e) {
                if (o.dropTargetIds = [], o.isDraggingNativeItem()) {
                    var t;
                    e.preventDefault(), null === (t = o.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer)
                } else(0, i.matchNativeItemType)(e.dataTransfer) && e.preventDefault();
                o.enterLeaveCounter.reset()
            }), d(this, "handleTopDrop", function(e) {
                var t = o.dropTargetIds;
                o.dropTargetIds = [], o.actions.hover(t, {
                    clientOffset: (0, a.getEventClientOffset)(e)
                }), o.actions.drop({
                    dropEffect: o.getCurrentDropEffect()
                }), o.isDraggingNativeItem() ? o.endDragNativeItem() : o.monitor.isDragging() && o.actions.endDrag()
            }), d(this, "handleSelectStart", function(e) {
                var t = e.target;
                if ("function" == typeof t.dragDrop) "INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable && (e.preventDefault(), t.dragDrop())
            }), this.options = new s.OptionsReader(t, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new r.EnterLeaveCounter(this.isNodeInDocument)
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
                var a = function(t) {
                        return r.handleDragStart(t, e)
                    },
                    i = function(e) {
                        return r.handleSelectStart(e)
                    };
                return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", a), t.addEventListener("selectstart", i),
                    function() {
                        r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", a), t.removeEventListener("selectstart", i), t.setAttribute("draggable", "false")
                    }
            }
        }, {
            key: "connectDropTarget",
            value: function(e, t) {
                var n = this,
                    r = function(t) {
                        return n.handleDragEnter(t, e)
                    },
                    a = function(t) {
                        return n.handleDragOver(t, e)
                    },
                    i = function(t) {
                        return n.handleDrop(t, e)
                    };
                return t.addEventListener("dragenter", r), t.addEventListener("dragover", a), t.addEventListener("drop", i),
                    function() {
                        t.removeEventListener("dragenter", r), t.removeEventListener("dragover", a), t.removeEventListener("drop", i)
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
                return l({
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
                return l({
                    anchorX: .5,
                    anchorY: .5,
                    captureDraggingState: !1
                }, this.sourcePreviewNodeOptions.get(e) || {})
            }
        }, {
            key: "isDraggingNativeItem",
            value: function() {
                var e = this.monitor.getItemType();
                return Object.keys(o).some(function(t) {
                    return o[t] === e
                })
            }
        }, {
            key: "beginDragNativeItem",
            value: function(e, t) {
                this.clearCurrentDragSourceNode(), this.currentNativeSource = (0, i.createNativeDragSource)(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
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
        }], u(e.prototype, t), n && u(e, n), c
    }()
}