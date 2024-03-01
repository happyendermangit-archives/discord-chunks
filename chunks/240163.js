function(t, e, s) {
    var r = s("664813");
    t.exports = v, v.simpleSieve = l, v.fermatTest = g;
    var i = s("839309"),
        n = new i(24),
        c = new(s("925197")),
        o = new i(1),
        f = new i(2),
        u = new i(5);
    new i(16), new i(8);
    var a = new i(10),
        d = new i(3);
    new i(7);
    var p = new i(11),
        b = new i(4);
    new i(12);
    var h = null;

    function l(t) {
        for (var e = function() {
                if (null !== h) return h;
                var t = [];
                t[0] = 2;
                for (var e = 1, s = 3; s < 1048576; s += 2) {
                    for (var r = Math.ceil(Math.sqrt(s)), i = 0; i < e && t[i] <= r && s % t[i] != 0; i++);
                    (e === i || !(t[i] <= r)) && (t[e++] = s)
                }
                return h = t, t
            }(), s = 0; s < e.length; s++)
            if (0 === t.modn(e[s])) {
                if (0 !== t.cmpn(e[s])) return !1;
                break
            } return !0
    }

    function g(t) {
        var e = i.mont(t);
        return 0 === f.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)
    }

    function v(t, e) {
        var s, h;
        if (t < 16) return 2 === e || 5 === e ? new i([140, 123]) : new i([140, 39]);
        for (e = new i(e);;) {
            for (s = new i(r(Math.ceil(t / 8))); s.bitLength() > t;) s.ishrn(1);
            if (s.isEven() && s.iadd(o), !s.testn(1) && s.iadd(f), e.cmp(f)) {
                if (!e.cmp(u))
                    for (; s.mod(a).cmp(d);) s.iadd(b)
            } else
                for (; s.mod(n).cmp(p);) s.iadd(b);
            if (l(h = s.shrn(1)) && l(s) && g(h) && g(s) && c.test(h) && c.test(s)) return s
        }
    }
}