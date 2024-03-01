function(t, e, n) {
    var r = Array.prototype.slice,
        i = n("646403"),
        o = n("328157"),
        a = t.exports = function(t, e, n) {
            if (!n && (n = {}), t === e) return !0;
            if (t instanceof Date && e instanceof Date) return t.getTime() === e.getTime();
            if (!t || !e || "object" != typeof t && "object" != typeof e) return n.strict ? t === e : t == e;
            else return function(t, e, n) {
                if (null == (l = t) || null == (f = e) || t.prototype !== e.prototype) return !1;
                if (o(t)) return !!o(e) && (t = r.call(t), a(t, e = r.call(e), n));
                if (s(t)) {
                    if (!s(e) || t.length !== e.length) return !1;
                    for (u = 0; u < t.length; u++)
                        if (t[u] !== e[u]) return !1;
                    return !0
                }
                try {
                    var u, c, l, f, h = i(t),
                        p = i(e)
                } catch (t) {
                    return !1
                }
                if (h.length != p.length) return !1;
                for (h.sort(), p.sort(), u = h.length - 1; u >= 0; u--)
                    if (h[u] != p[u]) return !1;
                for (u = h.length - 1; u >= 0; u--)
                    if (!a(t[c = h[u]], e[c], n)) return !1;
                return typeof t == typeof e
            }(t, e, n)
        };

    function u(t) {
        return null == t
    }

    function s(t) {
        return !!t && "object" == typeof t && "number" == typeof t.length && "function" == typeof t.copy && "function" == typeof t.slice && (!(t.length > 0) || "number" == typeof t[0]) && !0
    }
}