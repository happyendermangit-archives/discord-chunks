function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TargetConnector: function() {
            return c
        }
    }), n("70102");
    var r = n("373589"),
        i = n("954562"),
        o = n("679640");

    function s(e, t) {
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
    var c = function() {
        var e, t, n;

        function c(e) {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), a(this, "hooks", (0, i.wrapConnectorHooks)({
                dropTarget: function(e, n) {
                    t.clearDropTarget(), t.dropTargetOptions = n, (0, o.isRef)(e) ? t.dropTargetRef = e : t.dropTargetNode = e, t.reconnect()
                }
            })), a(this, "handlerId", null), a(this, "dropTargetRef", null), a(this, "dropTargetNode", void 0), a(this, "dropTargetOptionsInternal", null), a(this, "unsubscribeDropTarget", void 0), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDropTarget", null), a(this, "lastConnectedDropTargetOptions", null), a(this, "backend", void 0), this.backend = e
        }
        return e = c, t = [{
            key: "connectTarget",
            get: function() {
                return this.dropTarget
            }
        }, {
            key: "reconnect",
            value: function() {
                var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                if (this.handlerId) {
                    if (!t) {
                        this.lastConnectedDropTarget = t;
                        return
                    }
                    e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions))
                }
            }
        }, {
            key: "receiveHandlerId",
            value: function(e) {
                e !== this.handlerId && (this.handlerId = e, this.reconnect())
            }
        }, {
            key: "dropTargetOptions",
            get: function() {
                return this.dropTargetOptionsInternal
            },
            set: function(e) {
                this.dropTargetOptionsInternal = e
            }
        }, {
            key: "didHandlerIdChange",
            value: function() {
                return this.lastConnectedHandlerId !== this.handlerId
            }
        }, {
            key: "didDropTargetChange",
            value: function() {
                return this.lastConnectedDropTarget !== this.dropTarget
            }
        }, {
            key: "didOptionsChange",
            value: function() {
                return !(0, r.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
            }
        }, {
            key: "disconnectDropTarget",
            value: function() {
                this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
            }
        }, {
            key: "dropTarget",
            get: function() {
                return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
            }
        }, {
            key: "clearDropTarget",
            value: function() {
                this.dropTargetRef = null, this.dropTargetNode = null
            }
        }], s(e.prototype, t), n && s(e, n), c
    }()
}