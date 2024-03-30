function(t, e, n) {
    var r = n("620014"),
        i = n("733892");
    t.exports = function(t, e, n, a) {
        var o = n.length,
            s = o,
            u = !a;
        if (null == t) return !s;
        for (t = Object(t); o--;) {
            var l = n[o];
            if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++o < s;) {
            var c = (l = n[o])[0],
                d = t[c],
                f = l[1];
            if (u && l[2]) {
                if (void 0 === d && !(c in t)) return !1
            } else {
                var p = new r;
                if (a) var h = a(d, f, c, t, e, p);
                if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1
            }
        }
        return !0
    }
}