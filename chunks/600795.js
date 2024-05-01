function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDragTrigger: function() {
            return d
        }
    }), n("411104"), n("47120");
    var i = n("547545"),
        r = n("444591"),
        a = n("53566");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = {
        DROP: [" ", "Enter"],
        CANCEL_DRAG: ["Escape"]
    };

    function l(e) {
        e.preventDefault(), e.stopImmediatePropagation()
    }

    function u(e, t) {
        return t.includes(e.key)
    }

    function d(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return !!n && !1 === e.isTrusted || (null === (t = e.key) || void 0 === t ? void 0 : t.toLowerCase()) === "d" && (e.metaKey || e.ctrlKey) && !e.altKey
    }
    class _ {
        setup() {
            var e;
            if (_.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
            _.isSetUp = !0, this._handlingFirstEvent = !0, null === (e = this.context.window) || void 0 === e || e.addEventListener("keydown", this.handleGlobalKeyDown, {
                capture: !0
            })
        }
        teardown() {
            var e;
            _.isSetUp = !1, null === (e = this.context.window) || void 0 === e || e.removeEventListener("keydown", this.handleGlobalKeyDown, {
                capture: !0
            }), this.endDrag()
        }
        setDndMode(e) {
            var t;
            null === (t = this.options) || void 0 === t || t.onDndModeChanged(e)
        }
        profile() {
            return {
                sourcePreviewNodes: this.sourcePreviewNodes.size,
                sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                sourceNodes: this.sourceNodes.size
            }
        }
        connectDragSource(e, t) {
            let n = this.handleDragStart.bind(this, e);
            return this.sourceNodes.set(e, t), t.addEventListener("keydown", n), () => {
                this.sourceNodes.delete(e), t.removeEventListener("keydown", n)
            }
        }
        connectDragPreview(e, t, n) {
            return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), () => {
                this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e)
            }
        }
        connectDropTarget(e, t) {
            return this.targetNodes.set(e, t), t.addEventListener("keydown", this.handleDrop), t.tabIndex = Math.max(-1, t.tabIndex), () => {
                this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop)
            }
        }
        endDrag(e) {
            var t;
            null != e && l(e), null === (t = this._navigator) || void 0 === t || t.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(!1)
        }
        constructor(e, t, n) {
            s(this, "manager", void 0), s(this, "actions", void 0), s(this, "monitor", void 0), s(this, "context", void 0), s(this, "options", void 0), s(this, "sourceNodes", void 0), s(this, "sourcePreviewNodes", void 0), s(this, "sourcePreviewNodeOptions", void 0), s(this, "targetNodes", void 0), s(this, "_navigator", void 0), s(this, "_previewer", void 0), s(this, "_announcer", void 0), s(this, "_handlingFirstEvent", !1), s(this, "handleGlobalKeyDown", e => {
                this.monitor.isDragging() && u(e, o.CANCEL_DRAG) && (this.endDrag(e), this._announcer.announceCancel())
            }), s(this, "getSourceClientOffset", e => (function(e) {
                if (null == e) return {
                    x: 0,
                    y: 0
                };
                let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                if (null == t) return {
                    x: 0,
                    y: 0
                };
                let {
                    top: n,
                    left: i
                } = t.getBoundingClientRect();
                return {
                    x: i,
                    y: n
                }
            })(this.sourceNodes.get(e))), s(this, "handleDragStart", (e, t) => {
                var n;
                if (!d(t, this._handlingFirstEvent)) return;
                if (this._handlingFirstEvent = !1, !this.monitor.canDragSource(e)) return;
                if (this.monitor.isDragging()) {
                    this.actions.publishDragSource();
                    return
                }
                l(t);
                let i = this.sourceNodes.get(e);
                null != i && (this._navigator = new a.DropTargetNavigator(i, this.targetNodes, this.manager, this._previewer, this._announcer), this._previewer.createDragPreview(null !== (n = this.sourcePreviewNodes.get(e)) && void 0 !== n ? n : i), this.actions.beginDrag([e], {
                    clientOffset: this.getSourceClientOffset(e),
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                }), this._previewer.render(this.monitor), this.setDndMode(!0), this._announcer.announceDrag(i, e))
            }), s(this, "handleDrop", e => {
                u(e, o.DROP) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop())
            }), this.manager = e, this.actions = e.getActions(), this.monitor = e.getMonitor(), this.context = t, this.options = n, this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this._previewer = new r.default(t.document), this._announcer = new i.default(null == n ? void 0 : n.announcer)
        }
    }
    s(_, "isSetUp", void 0);
    t.default = (e, t, n) => new _(e, t, n)
}