function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = n("834889"),
        a = n("134533")(),
        o = n("49662"),
        s = n("815329"),
        u = r("%Math.floor%");
    e.exports = function(e, t) {
        if ("function" != typeof e) throw new s("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || u(t) !== t) throw new s("`length` must be a positive 32-bit integer");
        var n = arguments.length > 2 && !!arguments[2],
            r = !0,
            c = !0;
        if ("length" in e && o) {
            var l = o(e, "length");
            l && !l.configurable && (r = !1), l && !l.writable && (c = !1)
        }
        return (r || c || !n) && (a ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
    }
}