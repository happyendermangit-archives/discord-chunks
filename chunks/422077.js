function(e, t, n) {
    var r = n("446825").Buffer,
        i = n("839383"),
        o = n("664813");

    function s(e) {
        var t, n = e.modulus.byteLength();
        do t = new i(o(n)); while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
        return t
    }

    function a(e, t) {
        var n, o, a = {
                blinder: (o = s(n = t)).toRed(i.mont(n.modulus)).redPow(new i(n.publicExponent)).fromRed(),
                unblinder: o.invm(n.modulus)
            },
            c = t.modulus.byteLength(),
            u = new i(e).mul(a.blinder).umod(t.modulus),
            d = u.toRed(i.mont(t.prime1)),
            l = u.toRed(i.mont(t.prime2)),
            f = t.coefficient,
            p = t.prime1,
            h = t.prime2,
            v = d.redPow(t.exponent1).fromRed(),
            g = l.redPow(t.exponent2).fromRed(),
            b = v.isub(g).imul(f).umod(p).imul(h);
        return g.iadd(b).imul(a.unblinder).umod(t.modulus).toArrayLike(r, "be", c)
    }
    a.getr = s, e.exports = a
}