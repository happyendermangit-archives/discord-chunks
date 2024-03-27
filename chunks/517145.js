function(e, t, n) {
    var r = n("957578").Buffer,
        i = n("28704"),
        a = n("136924").ec,
        o = n("223428"),
        s = n("733345");

    function u(e, t) {
        if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error("invalid sig")
    }
    e.exports = function(e, t, n, c, l) {
        var d = o(n);
        if ("ec" === d.type) {
            if ("ecdsa" !== c && "ecdsa/rsa" !== c) throw Error("wrong public key type");
            return function(e, t, n) {
                var r = s[n.data.algorithm.curve.join(".")];
                if (!r) throw Error("unknown curve " + n.data.algorithm.curve.join("."));
                var i = new a(r),
                    o = n.data.subjectPrivateKey.data;
                return i.verify(t, e, o)
            }(e, t, d)
        }
        if ("dsa" === d.type) {
            if ("dsa" !== c) throw Error("wrong public key type");
            return function(e, t, n) {
                var r = n.data.p,
                    a = n.data.q,
                    s = n.data.g,
                    c = n.data.pub_key,
                    l = o.signature.decode(e, "der"),
                    d = l.s,
                    f = l.r;
                u(d, a), u(f, a);
                var p = i.mont(r),
                    h = d.invm(a);
                return 0 === s.toRed(p).redPow(new i(t).mul(h).mod(a)).fromRed().mul(c.toRed(p).redPow(f.mul(h).mod(a)).fromRed()).mod(r).mod(a).cmp(f)
            }(e, t, d)
        }
        if ("rsa" !== c && "ecdsa/rsa" !== c) throw Error("wrong public key type");
        t = r.concat([l, t]);
        for (var f = d.modulus.byteLength(), p = [1], h = 0; t.length + p.length + 2 < f;) p.push(255), h++;
        p.push(0);
        for (var m = -1; ++m < t.length;) p.push(t[m]);
        p = r.from(p);
        var g = i.mont(d.modulus);
        e = (e = new i(e).toRed(g)).redPow(new i(d.publicExponent)), e = r.from(e.fromRed().toArray());
        var _ = h < 8 ? 1 : 0;
        for (f = Math.min(e.length, p.length), e.length !== p.length && (_ = 1), m = -1; ++m < f;) _ |= e[m] ^ p[m];
        return 0 === _
    }
}