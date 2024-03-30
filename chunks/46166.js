function(t, e, n) {
    var r = n("620014"),
        i = n("733892");
    t.exports = function(t, e, n, a) {
        var o = n.length,
            s = o,
            u = !a;
        if (null == t) return !s;
        for (t = Object(t); o--;) {
            var c = n[o];
            if (u && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
        }
        for (; ++o < s;) {
            var l = (c = n[o])[0],
                d = t[l],
                f = c[1];
            if (u && c[2]) {
                if (void 0 === d && !(l in t)) return !1
            } else {
                var p = new r;
                if (a) var h = a(d, f, l, t, e, p);
                if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1
            }
        }
        return !0
    }
}