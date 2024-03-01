function(e, t, n) {
    "use strict";
    var r = n("911718"),
        a = n("307904"),
        o = n("638839")(),
        i = n("293471"),
        s = r("%TypeError%"),
        u = r("%Math.floor%");
    e.exports = function(e, t) {
        if ("function" != typeof e) throw new s("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || u(t) !== t) throw new s("`length` must be a positive 32-bit integer");
        var n = arguments.length > 2 && !!arguments[2],
            r = !0,
            l = !0;
        if ("length" in e && i) {
            var c = i(e, "length");
            c && !c.configurable && (r = !1), c && !c.writable && (l = !1)
        }
        return (r || l || !n) && (o ? a(e, "length", t, !0, !0) : a(e, "length", t)), e
    }
}