function(e, t, n) {
    var r = n("306551"),
        a = n("952133"),
        o = n("501870"),
        i = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return i;
        if (a(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = a(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = u.test(e);
        return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e
    }
}