function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DragSourceMonitorImpl: function() {
            return u
        }
    });
    var r = n("573654");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = !1,
        s = !1,
        u = function() {
            var e, t, n;

            function u(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a(this, "internalMonitor", void 0), a(this, "sourceId", null), this.internalMonitor = e.getMonitor()
            }
            return e = u, t = [{
                key: "receiveHandlerId",
                value: function(e) {
                    this.sourceId = e
                }
            }, {
                key: "getHandlerId",
                value: function() {
                    return this.sourceId
                }
            }, {
                key: "canDrag",
                value: function() {
                    (0, r.invariant)(!o, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                    try {
                        return o = !0, this.internalMonitor.canDragSource(this.sourceId)
                    } finally {
                        o = !1
                    }
                }
            }, {
                key: "isDragging",
                value: function() {
                    if (!this.sourceId) return !1;
                    (0, r.invariant)(!s, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                    try {
                        return s = !0, this.internalMonitor.isDraggingSource(this.sourceId)
                    } finally {
                        s = !1
                    }
                }
            }, {
                key: "subscribeToStateChange",
                value: function(e, t) {
                    return this.internalMonitor.subscribeToStateChange(e, t)
                }
            }, {
                key: "isDraggingSource",
                value: function(e) {
                    return this.internalMonitor.isDraggingSource(e)
                }
            }, {
                key: "isOverTarget",
                value: function(e, t) {
                    return this.internalMonitor.isOverTarget(e, t)
                }
            }, {
                key: "getTargetIds",
                value: function() {
                    return this.internalMonitor.getTargetIds()
                }
            }, {
                key: "isSourcePublic",
                value: function() {
                    return this.internalMonitor.isSourcePublic()
                }
            }, {
                key: "getSourceId",
                value: function() {
                    return this.internalMonitor.getSourceId()
                }
            }, {
                key: "subscribeToOffsetChange",
                value: function(e) {
                    return this.internalMonitor.subscribeToOffsetChange(e)
                }
            }, {
                key: "canDragSource",
                value: function(e) {
                    return this.internalMonitor.canDragSource(e)
                }
            }, {
                key: "canDropOnTarget",
                value: function(e) {
                    return this.internalMonitor.canDropOnTarget(e)
                }
            }, {
                key: "getItemType",
                value: function() {
                    return this.internalMonitor.getItemType()
                }
            }, {
                key: "getItem",
                value: function() {
                    return this.internalMonitor.getItem()
                }
            }, {
                key: "getDropResult",
                value: function() {
                    return this.internalMonitor.getDropResult()
                }
            }, {
                key: "didDrop",
                value: function() {
                    return this.internalMonitor.didDrop()
                }
            }, {
                key: "getInitialClientOffset",
                value: function() {
                    return this.internalMonitor.getInitialClientOffset()
                }
            }, {
                key: "getInitialSourceClientOffset",
                value: function() {
                    return this.internalMonitor.getInitialSourceClientOffset()
                }
            }, {
                key: "getSourceClientOffset",
                value: function() {
                    return this.internalMonitor.getSourceClientOffset()
                }
            }, {
                key: "getClientOffset",
                value: function() {
                    return this.internalMonitor.getClientOffset()
                }
            }, {
                key: "getDifferenceFromInitialOffset",
                value: function() {
                    return this.internalMonitor.getDifferenceFromInitialOffset()
                }
            }], i(e.prototype, t), n && i(e, n), u
        }()
}