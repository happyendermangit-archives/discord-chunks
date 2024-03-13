function(t, r, e) {
    var n = e("863847"),
        o = e("170859");
    t.exports = function(t, r, e, i) {
        var a = e.length,
            u = a,
            s = !i;
        if (null == t) return !u;
        for (t = Object(t); a--;) {
            var f = e[a];
            if (s && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++a < u;) {
            var c = (f = e[a])[0],
                l = t[c],
                h = f[1];
            if (s && f[2]) {
                if (void 0 === l && !(c in t)) return !1
            } else {
                var p = new n;
                if (i) var v = i(l, h, c, t, r, p);
                if (!(void 0 === v ? o(h, l, 3, i, p) : v)) return !1
            }
        }
        return !0
    }
}