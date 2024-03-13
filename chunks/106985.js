function(t, r, e) {
    e("424973");
    var n = e("236260"),
        o = e("10120"),
        i = e("712294");
    t.exports = function(t, r, e, a, u, s) {
        var f = 1 & e,
            c = t.length,
            l = r.length;
        if (c != l && !(f && l > c)) return !1;
        var h = s.get(t),
            p = s.get(r);
        if (h && p) return h == r && p == t;
        var v = -1,
            d = !0,
            g = 2 & e ? new n : void 0;
        for (s.set(t, r), s.set(r, t); ++v < c;) {
            var b = t[v],
                y = r[v];
            if (a) var m = f ? a(y, b, v, r, t, s) : a(b, y, v, t, r, s);
            if (void 0 !== m) {
                if (m) continue;
                d = !1;
                break
            }
            if (g) {
                if (!o(r, function(t, r) {
                        if (!i(g, r) && (b === t || u(b, t, e, a, s))) return g.push(r)
                    })) {
                    d = !1;
                    break
                }
            } else if (!(b === y || u(b, y, e, a, s))) {
                d = !1;
                break
            }
        }
        return s.delete(t), s.delete(r), d
    }
}