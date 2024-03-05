function(e, t, r) {
    var n = r("306551"),
        u = r("952133"),
        a = r("543066"),
        o = 0 / 0,
        i = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return o;
        if (u(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = u(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = s.test(e);
        return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : i.test(e) ? o : +e
    }
}