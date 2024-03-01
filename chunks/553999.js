function(t, e, s) {
    s("70102"), s("424973");
    var r = s("912065").Buffer,
        i = s("145755"),
        n = s("422077"),
        c = s("814548").ec,
        o = s("839383"),
        f = s("596659"),
        u = s("49873");

    function a(t, e, s, n) {
        if ((t = r.from(t.toArray())).length < e.byteLength()) {
            var c = r.alloc(e.byteLength() - t.length);
            t = r.concat([c, t])
        }
        var o = s.length,
            f = function(t, e) {
                t = (t = d(t, e)).mod(e);
                var s = r.from(t.toArray());
                if (s.length < e.byteLength()) {
                    var i = r.alloc(e.byteLength() - s.length);
                    s = r.concat([i, s])
                }
                return s
            }(s, e),
            u = r.alloc(o);
        u.fill(1);
        var a = r.alloc(o);
        return a = i(n, a).update(u).update(r.from([0])).update(t).update(f).digest(), u = i(n, a).update(u).digest(), a = i(n, a).update(u).update(r.from([1])).update(t).update(f).digest(), u = i(n, a).update(u).digest(), {
            k: a,
            v: u
        }
    }

    function d(t, e) {
        var s = new o(t),
            r = (t.length << 3) - e.bitLength();
        return r > 0 && s.ishrn(r), s
    }

    function p(t, e, s) {
        var n, c;
        do {
            for (n = r.alloc(0); 8 * n.length < t.bitLength();) e.v = i(s, e.k).update(e.v).digest(), n = r.concat([n, e.v]);
            c = d(n, t), e.k = i(s, e.k).update(e.v).update(r.from([0])).digest(), e.v = i(s, e.k).update(e.v).digest()
        } while (-1 !== c.cmp(t));
        return c
    }
    t.exports = function(t, e, s, i, b) {
        var h = f(e);
        if (h.curve) {
            if ("ecdsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
            return function(t, e) {
                var s = u[e.curve.join(".")];
                if (!s) throw Error("unknown curve " + e.curve.join("."));
                var i = new c(s).keyFromPrivate(e.privateKey).sign(t);
                return r.from(i.toDER())
            }(t, h)
        }
        if ("dsa" === h.type) {
            if ("dsa" !== i) throw Error("wrong private key type");
            return function(t, e, s) {
                for (var i, n = e.params.priv_key, c = e.params.p, f = e.params.q, u = e.params.g, b = new o(0), h = d(t, f).mod(f), l = !1, g = a(n, f, t, s); !1 === l;) b = function(t, e, s, r) {
                    return t.toRed(o.mont(s)).redPow(e).fromRed().mod(r)
                }(u, i = p(f, g, s), c, f), 0 === (l = i.invm(f).imul(h.add(n.mul(b))).mod(f)).cmpn(0) && (l = !1, b = new o(0));
                return function(t, e) {
                    t = t.toArray(), e = e.toArray(), 128 & t[0] && (t = [0].concat(t)), 128 & e[0] && (e = [0].concat(e));
                    var s = [48, t.length + e.length + 4, 2, t.length];
                    return s = s.concat(t, [2, e.length], e), r.from(s)
                }(b, l)
            }(t, h, s)
        }
        if ("rsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
        t = r.concat([b, t]);
        for (var l = h.modulus.byteLength(), g = [0, 1]; t.length + g.length + 1 < l;) g.push(255);
        g.push(0);
        for (var v = -1; ++v < t.length;) g.push(t[v]);
        return n(g, h)
    }, t.exports.getKey = a, t.exports.makeKey = p
}