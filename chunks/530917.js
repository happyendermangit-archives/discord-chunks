function(e, t, n) {
    var r = n("413135").Buffer,
        i = n("28704"),
        a = n("706178");

    function o(e) {
        var t, n = e.modulus.byteLength();
        do t = new i(a(n)); while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
        return t
    }

    function s(e, t) {
        var n, a, s = {
                blinder: (a = o(n = t)).toRed(i.mont(n.modulus)).redPow(new i(n.publicExponent)).fromRed(),
                unblinder: a.invm(n.modulus)
            },
            u = t.modulus.byteLength(),
            c = new i(e).mul(s.blinder).umod(t.modulus),
            l = c.toRed(i.mont(t.prime1)),
            d = c.toRed(i.mont(t.prime2)),
            f = t.coefficient,
            p = t.prime1,
            h = t.prime2,
            m = l.redPow(t.exponent1).fromRed(),
            g = d.redPow(t.exponent2).fromRed(),
            _ = m.isub(g).imul(f).umod(p).imul(h);
        return g.iadd(_).imul(s.unblinder).umod(t.modulus).toArrayLike(r, "be", u)
    }
    s.getr = o, e.exports = s
}