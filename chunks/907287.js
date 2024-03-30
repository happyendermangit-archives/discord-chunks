function(t, e, n) {
    var r = n("990393"),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, o, s) {
        var u = 1 & n,
            c = r(t),
            l = c.length;
        if (l != r(e).length && !u) return !1;
        for (var d = l; d--;) {
            var f = c[d];
            if (!(u ? f in e : i.call(e, f))) return !1
        }
        var p = s.get(t),
            h = s.get(e);
        if (p && h) return p == e && h == t;
        var _ = !0;
        s.set(t, e), s.set(e, t);
        for (var g = u; ++d < l;) {
            var m = t[f = c[d]],
                y = e[f];
            if (a) var v = u ? a(y, m, f, e, t, s) : a(m, y, f, t, e, s);
            if (!(void 0 === v ? m === y || o(m, y, n, a, s) : v)) {
                _ = !1;
                break
            }
            g || (g = "constructor" == f)
        }
        if (_ && !g) {
            var b = t.constructor,
                E = e.constructor;
            b != E && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (_ = !1)
        }
        return s.delete(t), s.delete(e), _
    }
}