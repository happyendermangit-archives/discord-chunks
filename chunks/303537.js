function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SourceConnector: function() {
            return c
        }
    }), n("70102");
    var r = n("954562"),
        i = n("679640"),
        o = n("373589");

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
            }(this, c), a(this, "hooks", (0, r.wrapConnectorHooks)({
                dragSource: function(e, n) {
                    t.clearDragSource(), t.dragSourceOptions = n || null, (0, i.isRef)(e) ? t.dragSourceRef = e : t.dragSourceNode = e, t.reconnectDragSource()
                },
                dragPreview: function(e, n) {
                    t.clearDragPreview(), t.dragPreviewOptions = n || null, (0, i.isRef)(e) ? t.dragPreviewRef = e : t.dragPreviewNode = e, t.reconnectDragPreview()
                }
            })), a(this, "handlerId", null), a(this, "dragSourceRef", null), a(this, "dragSourceNode", void 0), a(this, "dragSourceOptionsInternal", null), a(this, "dragSourceUnsubscribe", void 0), a(this, "dragPreviewRef", null), a(this, "dragPreviewNode", void 0), a(this, "dragPreviewOptionsInternal", null), a(this, "dragPreviewUnsubscribe", void 0), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDragSource", null), a(this, "lastConnectedDragSourceOptions", null), a(this, "lastConnectedDragPreview", null), a(this, "lastConnectedDragPreviewOptions", null), a(this, "backend", void 0), this.backend = e
        }
        return e = c, t = [{
            key: "receiveHandlerId",
            value: function(e) {
                this.handlerId !== e && (this.handlerId = e, this.reconnect())
            }
        }, {
            key: "connectTarget",
            get: function() {
                return this.dragSource
            }
        }, {
            key: "dragSourceOptions",
            get: function() {
                return this.dragSourceOptionsInternal
            },
            set: function(e) {
                this.dragSourceOptionsInternal = e
            }
        }, {
            key: "dragPreviewOptions",
            get: function() {
                return this.dragPreviewOptionsInternal
            },
            set: function(e) {
                this.dragPreviewOptionsInternal = e
            }
        }, {
            key: "reconnect",
            value: function() {
                this.reconnectDragSource(), this.reconnectDragPreview()
            }
        }, {
            key: "reconnectDragSource",
            value: function() {
                var e = this.dragSource,
                    t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
                if (t && this.disconnectDragSource(), this.handlerId) {
                    if (!e) {
                        this.lastConnectedDragSource = e;
                        return
                    }
                    t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions))
                }
            }
        }, {
            key: "reconnectDragPreview",
            value: function() {
                var e = this.dragPreview,
                    t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
                if (t && this.disconnectDragPreview(), this.handlerId) {
                    if (!e) {
                        this.lastConnectedDragPreview = e;
                        return
                    }
                    t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions))
                }
            }
        }, {
            key: "didHandlerIdChange",
            value: function() {
                return this.lastConnectedHandlerId !== this.handlerId
            }
        }, {
            key: "didConnectedDragSourceChange",
            value: function() {
                return this.lastConnectedDragSource !== this.dragSource
            }
        }, {
            key: "didConnectedDragPreviewChange",
            value: function() {
                return this.lastConnectedDragPreview !== this.dragPreview
            }
        }, {
            key: "didDragSourceOptionsChange",
            value: function() {
                return !(0, o.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
            }
        }, {
            key: "didDragPreviewOptionsChange",
            value: function() {
                return !(0, o.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
            }
        }, {
            key: "disconnectDragSource",
            value: function() {
                this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
            }
        }, {
            key: "disconnectDragPreview",
            value: function() {
                this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
            }
        }, {
            key: "dragSource",
            get: function() {
                return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
            }
        }, {
            key: "dragPreview",
            get: function() {
                return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
            }
        }, {
            key: "clearDragSource",
            value: function() {
                this.dragSourceNode = null, this.dragSourceRef = null
            }
        }, {
            key: "clearDragPreview",
            value: function() {
                this.dragPreviewNode = null, this.dragPreviewRef = null
            }
        }], s(e.prototype, t), n && s(e, n), c
    }()
}