function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Parser: function() {
            return o
        }
    }), n("70102");
    var r = n("445969");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        var e, t, n;

        function o() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o)
        }
        return e = o, t = [{
            key: "run",
            value: function(e, t, n, a) {
                var o = this.parse(e, t, n, a);
                return o ? {
                    setter: new r.ValueSetter(o.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: o.rest
                } : null
            }
        }, {
            key: "validate",
            value: function(e, t, n) {
                return !0
            }
        }], a(e.prototype, t), n && a(e, n), o
    }()
}