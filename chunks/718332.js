function(e, t, n) {
    var r = n("102074"),
        i = n("153027"),
        a = n("803607");
    e.exports = function(e, t, n, o, s, u) {
        var c = 1 & n,
            l = e.length,
            d = t.length;
        if (l != d && !(c && d > l)) return !1;
        var f = u.get(e);
        if (f && u.get(t)) return f == t;
        var p = -1,
            h = !0,
            m = 2 & n ? new r : void 0;
        for (u.set(e, t), u.set(t, e); ++p < l;) {
            var g = e[p],
                _ = t[p];
            if (o) var b = c ? o(_, g, p, t, e, u) : o(g, _, p, e, t, u);
            if (void 0 !== b) {
                if (b) continue;
                h = !1;
                break
            }
            if (m) {
                if (!i(t, function(e, t) {
                        if (!a(m, t) && (g === e || s(g, e, n, o, u))) return m.push(t)
                    })) {
                    h = !1;
                    break
                }
            } else if (!(g === _ || s(g, _, n, o, u))) {
                h = !1;
                break
            }
        }
        return u.delete(e), u.delete(t), h
    }
}