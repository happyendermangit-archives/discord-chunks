function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DropTargetImpl: function() {
            return i
        }
    }), n("70102");

    function r(e, t) {
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
    var i = function() {
        var e, t, n;

        function i(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), a(this, "spec", void 0), a(this, "monitor", void 0), this.spec = e, this.monitor = t
        }
        return e = i, t = [{
            key: "canDrop",
            value: function() {
                var e = this.spec,
                    t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t)
            }
        }, {
            key: "hover",
            value: function() {
                var e = this.spec,
                    t = this.monitor;
                e.hover && e.hover(t.getItem(), t)
            }
        }, {
            key: "drop",
            value: function() {
                var e = this.spec,
                    t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t)
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}