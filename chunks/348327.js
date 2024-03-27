function(e, t, n) {
    var r = Array.prototype.slice,
        i = n("775569"),
        a = n("35262"),
        o = e.exports = function(e, t, n) {
            if (!n && (n = {}), e === t) return !0;
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (!e || !t || "object" != typeof e && "object" != typeof t) return n.strict ? e === t : e == t;
            else return function(e, t, n) {
                if (null == (l = e) || null == (d = t) || e.prototype !== t.prototype) return !1;
                if (a(e)) return !!a(t) && (e = r.call(e), o(e, t = r.call(t), n));
                if (u(e)) {
                    if (!u(t) || e.length !== t.length) return !1;
                    for (s = 0; s < e.length; s++)
                        if (e[s] !== t[s]) return !1;
                    return !0
                }
                try {
                    var s, c, l, d, f = i(e),
                        p = i(t)
                } catch (e) {
                    return !1
                }
                if (f.length != p.length) return !1;
                for (f.sort(), p.sort(), s = f.length - 1; s >= 0; s--)
                    if (f[s] != p[s]) return !1;
                for (s = f.length - 1; s >= 0; s--)
                    if (!o(e[c = f[s]], t[c], n)) return !1;
                return typeof e == typeof t
            }(e, t, n)
        };

    function s(e) {
        return null == e
    }

    function u(e) {
        return !!e && "object" == typeof e && "number" == typeof e.length && "function" == typeof e.copy && "function" == typeof e.slice && (!(e.length > 0) || "number" == typeof e[0]) && !0
    }
}