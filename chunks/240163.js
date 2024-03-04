function(e, t, n) {
    var r = n("664813");
    e.exports = b, b.simpleSieve = v, b.fermatTest = g;
    var i = n("839309"),
        o = new i(24),
        s = new(n("925197")),
        a = new i(1),
        c = new i(2),
        u = new i(5);
    new i(16), new i(8);
    var d = new i(10),
        l = new i(3);
    new i(7);
    var f = new i(11),
        p = new i(4);
    new i(12);
    var h = null;

    function v(e) {
        for (var t = function() {
                if (null !== h) return h;
                var e = [];
                e[0] = 2;
                for (var t = 1, n = 3; n < 1048576; n += 2) {
                    for (var r = Math.ceil(Math.sqrt(n)), i = 0; i < t && e[i] <= r && n % e[i] != 0; i++);
                    (t === i || !(e[i] <= r)) && (e[t++] = n)
                }
                return h = e, e
            }(), n = 0; n < t.length; n++)
            if (0 === e.modn(t[n])) {
                if (0 !== e.cmpn(t[n])) return !1;
                break
            } return !0
    }

    function g(e) {
        var t = i.mont(e);
        return 0 === c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
    }

    function b(e, t) {
        var n, h;
        if (e < 16) return 2 === t || 5 === t ? new i([140, 123]) : new i([140, 39]);
        for (t = new i(t);;) {
            for (n = new i(r(Math.ceil(e / 8))); n.bitLength() > e;) n.ishrn(1);
            if (n.isEven() && n.iadd(a), !n.testn(1) && n.iadd(c), t.cmp(c)) {
                if (!t.cmp(u))
                    for (; n.mod(d).cmp(l);) n.iadd(p)
            } else
                for (; n.mod(o).cmp(f);) n.iadd(p);
            if (v(h = n.shrn(1)) && v(n) && g(h) && g(n) && s.test(h) && s.test(n)) return n
        }
    }
}