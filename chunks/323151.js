function(e, t, n) {
    var r = n("687249"),
        i = n("718332"),
        a = n("995542"),
        o = n("92141"),
        s = n("53919"),
        u = n("290677"),
        c = n("551023"),
        l = n("454745"),
        d = "[object Arguments]",
        f = "[object Array]",
        p = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, m, g, _) {
        var b = u(e),
            v = u(t),
            y = b ? f : s(e),
            E = v ? f : s(t);
        y = y == d ? p : y, E = E == d ? p : E;
        var S = y == p,
            x = E == p,
            w = y == E;
        if (w && c(e)) {
            if (!c(t)) return !1;
            b = !0, S = !1
        }
        if (w && !S) return _ || (_ = new r), b || l(e) ? i(e, t, n, m, g, _) : a(e, t, y, n, m, g, _);
        if (!(1 & n)) {
            var T = S && h.call(e, "__wrapped__"),
                C = x && h.call(t, "__wrapped__");
            if (T || C) {
                var D = T ? e.value() : e,
                    O = C ? t.value() : t;
                return _ || (_ = new r), g(D, O, n, m, _)
            }
        }
        return !!w && (_ || (_ = new r), o(e, t, n, m, g, _))
    }
}