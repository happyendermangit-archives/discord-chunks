function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDragTrigger: function() {
            return f
        }
    });
    var r = n("412805"),
        o = n("111273"),
        i = n("714130");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = {
        DROP: [" ", "Enter"],
        CANCEL_DRAG: ["Escape"]
    };

    function l(e) {
        e.preventDefault(), e.stopImmediatePropagation()
    }

    function c(e, t) {
        return t.includes(e.key)
    }

    function f(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return !!n && !1 === e.isTrusted || (null === (t = e.key) || void 0 === t ? void 0 : t.toLowerCase()) === "d" && (e.metaKey || e.ctrlKey) && !e.altKey
    }
    var d = function() {
        var e, t, n;

        function d(e, t, n) {
            var a = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), u(this, "manager", void 0), u(this, "actions", void 0), u(this, "monitor", void 0), u(this, "context", void 0), u(this, "options", void 0), u(this, "sourceNodes", void 0), u(this, "sourcePreviewNodes", void 0), u(this, "sourcePreviewNodeOptions", void 0), u(this, "targetNodes", void 0), u(this, "_navigator", void 0), u(this, "_previewer", void 0), u(this, "_announcer", void 0), u(this, "_handlingFirstEvent", !1), u(this, "handleGlobalKeyDown", function(e) {
                a.monitor.isDragging() && c(e, s.CANCEL_DRAG) && (a.endDrag(e), a._announcer.announceCancel())
            }), u(this, "getSourceClientOffset", function(e) {
                return function(e) {
                    if (null == e) return {
                        x: 0,
                        y: 0
                    };
                    var t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                    if (null == t) return {
                        x: 0,
                        y: 0
                    };
                    var n = t.getBoundingClientRect(),
                        r = n.top;
                    return {
                        x: n.left,
                        y: r
                    }
                }(a.sourceNodes.get(e))
            }), u(this, "handleDragStart", function(e, t) {
                if (!f(t, a._handlingFirstEvent)) return;
                if (a._handlingFirstEvent = !1, !!a.monitor.canDragSource(e)) {
                    if (a.monitor.isDragging()) {
                        a.actions.publishDragSource();
                        return
                    }
                    l(t);
                    var n, r = a.sourceNodes.get(e);
                    null != r && (a._navigator = new i.DropTargetNavigator(r, a.targetNodes, a.manager, a._previewer, a._announcer), a._previewer.createDragPreview(null !== (n = a.sourcePreviewNodes.get(e)) && void 0 !== n ? n : r), a.actions.beginDrag([e], {
                        clientOffset: a.getSourceClientOffset(e),
                        getSourceClientOffset: a.getSourceClientOffset,
                        publishSource: !1
                    }), a._previewer.render(a.monitor), a.setDndMode(!0), a._announcer.announceDrag(r, e))
                }
            }), u(this, "handleDrop", function(e) {
                c(e, s.DROP) && (a.actions.drop(), a.endDrag(e), a._announcer.announceDrop())
            }), this.manager = e, this.actions = e.getActions(), this.monitor = e.getMonitor(), this.context = t, this.options = n, this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this._previewer = new o.default(t.document), this._announcer = new r.default(null == n ? void 0 : n.announcer)
        }
        return e = d, t = [{
            key: "setup",
            value: function() {
                var e;
                if (d.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
                d.isSetUp = !0, this._handlingFirstEvent = !0, null === (e = this.context.window) || void 0 === e || e.addEventListener("keydown", this.handleGlobalKeyDown, {
                    capture: !0
                })
            }
        }, {
            key: "teardown",
            value: function() {
                var e;
                d.isSetUp = !1, null === (e = this.context.window) || void 0 === e || e.removeEventListener("keydown", this.handleGlobalKeyDown, {
                    capture: !0
                }), this.endDrag()
            }
        }, {
            key: "setDndMode",
            value: function(e) {
                var t;
                null === (t = this.options) || void 0 === t || t.onDndModeChanged(e)
            }
        }, {
            key: "profile",
            value: function() {
                return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                    sourceNodes: this.sourceNodes.size
                }
            }
        }, {
            key: "connectDragSource",
            value: function(e, t) {
                var n = this,
                    r = this.handleDragStart.bind(this, e);
                return this.sourceNodes.set(e, t), t.addEventListener("keydown", r),
                    function() {
                        n.sourceNodes.delete(e), t.removeEventListener("keydown", r)
                    }
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
            key: "connectDropTarget",
            value: function(e, t) {
                var n = this;
                return this.targetNodes.set(e, t), t.addEventListener("keydown", this.handleDrop), t.tabIndex = Math.max(-1, t.tabIndex),
                    function() {
                        n.targetNodes.delete(e), t.removeEventListener("keydown", n.handleDrop)
                    }
            }
        }, {
            key: "endDrag",
            value: function(e) {
                var t;
                null != e && l(e), null === (t = this._navigator) || void 0 === t || t.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(!1)
            }
        }], a(e.prototype, t), n && a(e, n), d
    }();
    u(d, "isSetUp", void 0);
    t.default = function(e, t, n) {
        return new d(e, t, n)
    }
}