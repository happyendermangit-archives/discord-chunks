function(e, t, n) {
    n("781738");
    var r = n("285162"),
        i = n("27556"),
        o = 0 / 0,
        s = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return o;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var n = c.test(e);
        return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e
    }
}