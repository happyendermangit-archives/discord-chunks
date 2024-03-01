function(e, t, n) {
    n("781738");
    var r = n("285162"),
        a = n("27556"),
        i = 0 / 0,
        o = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return i;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var n = c.test(e);
        return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e
    }
}