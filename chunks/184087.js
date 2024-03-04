function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    n.r(t), n.d(t, {
        DragSourceImpl: function() {
            return s
        }
    }), n("222007"), n("70102");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function() {
        var e, t, n;

        function s(e, t, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), o(this, "spec", void 0), o(this, "monitor", void 0), o(this, "connector", void 0), this.spec = e, this.monitor = t, this.connector = n
        }
        return e = s, t = [{
            key: "beginDrag",
            value: function() {
                var e, t = this.spec,
                    n = this.monitor,
                    i = null;
                return null !== (e = i = "object" === r(t.item) ? t.item : "function" == typeof t.item ? t.item(n) : {}) && void 0 !== e ? e : null
            }
        }, {
            key: "canDrag",
            value: function() {
                var e = this.spec,
                    t = this.monitor;
                return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(t)
            }
        }, {
            key: "isDragging",
            value: function(e, t) {
                var n = this.spec,
                    r = this.monitor,
                    i = n.isDragging;
                return i ? i(r) : t === e.getSourceId()
            }
        }, {
            key: "endDrag",
            value: function() {
                var e = this.spec,
                    t = this.monitor,
                    n = this.connector,
                    r = e.end;
                r && r(t.getItem(), t), n.reconnect()
            }
        }], i(e.prototype, t), n && i(e, n), s
    }()
}