function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Parser: function() {
            return a
        }
    });
    var r = n("608297");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = function() {
        var e, t, n;

        function a() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a)
        }
        return e = a, t = [{
            key: "run",
            value: function(e, t, n, i) {
                var a = this.parse(e, t, n, i);
                return a ? {
                    setter: new r.ValueSetter(a.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: a.rest
                } : null
            }
        }, {
            key: "validate",
            value: function(e, t, n) {
                return !0
            }
        }], i(e.prototype, t), n && i(e, n), a
    }()
}