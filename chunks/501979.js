function(t, e, n) {
    var r = n("425561"),
        i = n("393531"),
        a = n("208529");
    t.exports = function(t, e, n, o, s, u) {
        var c = 1 & n,
            l = t.length,
            d = e.length;
        if (l != d && !(c && d > l)) return !1;
        var f = u.get(t),
            p = u.get(e);
        if (f && p) return f == e && p == t;
        var h = -1,
            _ = !0,
            g = 2 & n ? new r : void 0;
        for (u.set(t, e), u.set(e, t); ++h < l;) {
            var m = t[h],
                y = e[h];
            if (o) var v = c ? o(y, m, h, e, t, u) : o(m, y, h, t, e, u);
            if (void 0 !== v) {
                if (v) continue;
                _ = !1;
                break
            }
            if (g) {
                if (!i(e, function(t, e) {
                        if (!a(g, e) && (m === t || s(m, t, n, o, u))) return g.push(e)
                    })) {
                    _ = !1;
                    break
                }
            } else if (!(m === y || s(m, y, n, o, u))) {
                _ = !1;
                break
            }
        }
        return u.delete(t), u.delete(e), _
    }
}