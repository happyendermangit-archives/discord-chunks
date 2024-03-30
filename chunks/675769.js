function(e, t, n) {
    var r = n("661233"),
        i = n("158698"),
        a = 0 / 0,
        o = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return a;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var n = u.test(e);
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e
    }
}