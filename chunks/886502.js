function(t, e, n) {
    var r = n("620014"),
        i = n("501979"),
        a = n("575473"),
        o = n("907287"),
        s = n("65064"),
        u = n("402428"),
        c = n("207757"),
        l = n("556868"),
        d = "[object Arguments]",
        f = "[object Array]",
        p = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, _, g, m) {
        var y = u(t),
            v = u(e),
            b = y ? f : s(t),
            E = v ? f : s(e);
        b = b == d ? p : b, E = E == d ? p : E;
        var S = b == p,
            w = E == p,
            T = b == E;
        if (T && c(t)) {
            if (!c(e)) return !1;
            y = !0, S = !1
        }
        if (T && !S) return m || (m = new r), y || l(t) ? i(t, e, n, _, g, m) : a(t, e, b, n, _, g, m);
        if (!(1 & n)) {
            var k = S && h.call(t, "__wrapped__"),
                x = w && h.call(e, "__wrapped__");
            if (k || x) {
                var R = k ? t.value() : t,
                    N = x ? e.value() : e;
                return m || (m = new r), g(R, N, n, _, m)
            }
        }
        return !!T && (m || (m = new r), o(t, e, n, _, g, m))
    }
}