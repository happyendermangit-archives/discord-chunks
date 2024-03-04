function(e, t, n) {
    var r = n("146007"),
        i = n("556459"),
        o = n("596340"),
        s = n("442347"),
        a = n("540956"),
        c = n("725502"),
        u = n("591350"),
        d = n("381178"),
        l = "[object Arguments]",
        f = "[object Array]",
        p = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, v, g, b) {
        var m = c(e),
            y = c(t),
            x = m ? f : a(e),
            w = y ? f : a(t);
        x = x == l ? p : x, w = w == l ? p : w;
        var S = x == p,
            k = w == p,
            E = x == w;
        if (E && u(e)) {
            if (!u(t)) return !1;
            m = !0, S = !1
        }
        if (E && !S) return b || (b = new r), m || d(e) ? i(e, t, n, v, g, b) : o(e, t, x, n, v, g, b);
        if (!(1 & n)) {
            var _ = S && h.call(e, "__wrapped__"),
                M = k && h.call(t, "__wrapped__");
            if (_ || M) {
                var D = _ ? e.value() : e,
                    C = M ? t.value() : t;
                return b || (b = new r), g(D, C, n, v, b)
            }
        }
        return !!E && (b || (b = new r), s(e, t, n, v, g, b))
    }
}