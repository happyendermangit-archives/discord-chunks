function(e, t, n) {
    var r = n("904526"),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, o, s, a) {
        var c = 1 & n,
            u = r(e),
            d = u.length;
        if (d != r(t).length && !c) return !1;
        for (var l = d; l--;) {
            var f = u[l];
            if (!(c ? f in t : i.call(t, f))) return !1
        }
        var p = a.get(e);
        if (p && a.get(t)) return p == t;
        var h = !0;
        a.set(e, t), a.set(t, e);
        for (var v = c; ++l < d;) {
            var g = e[f = u[l]],
                b = t[f];
            if (o) var m = c ? o(b, g, f, t, e, a) : o(g, b, f, e, t, a);
            if (!(void 0 === m ? g === b || s(g, b, n, o, a) : m)) {
                h = !1;
                break
            }
            v || (v = "constructor" == f)
        }
        if (h && !v) {
            var y = e.constructor,
                x = t.constructor;
            y != x && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof x && x instanceof x) && (h = !1)
        }
        return a.delete(e), a.delete(t), h
    }
}