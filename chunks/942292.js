function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessUtils: function() {
            return o
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = function() {
        var e, t, n;

        function o() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = this, n = void 0, (t = "cpuCoreCount") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = o, t = [{
            key: "getCPUCoreCount",
            value: function() {
                return this.cpuCoreCount
            }
        }], r(e.prototype, t), n && r(e, n), o
    }()
}