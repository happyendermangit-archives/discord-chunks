function(e, t, n) {
    var r = n("886985"),
        i = n("108101"),
        a = n("968586"),
        o = n("961123"),
        s = n("410200"),
        u = n("588261"),
        c = n("599596"),
        l = n("993106"),
        d = c(function(e, t) {
            var n = {};
            if (null == e) return n;
            var c = !1;
            t = r(t, function(t) {
                return t = o(t, e), c || (c = t.length > 1), t
            }), s(e, l(e), n), c && (n = i(n, 7, u));
            for (var d = t.length; d--;) a(n, t[d]);
            return n
        });
    e.exports = d
}