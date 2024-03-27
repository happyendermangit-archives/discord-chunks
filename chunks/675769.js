function(t, e, r) {
    var n = r("661233"),
        i = r("158698"),
        o = 0 / 0,
        u = /^\s+|\s+$/g,
        c = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (n(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = n(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(u, "");
        var r = a.test(t);
        return r || s.test(t) ? f(t.slice(2), r ? 2 : 8) : c.test(t) ? o : +t
    }
}