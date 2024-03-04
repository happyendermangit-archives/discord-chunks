function(e, t, n) {
    n("70102"), n("424973");
    var r = n("912065").Buffer,
        i = n("145755"),
        o = n("422077"),
        s = n("814548").ec,
        a = n("839383"),
        c = n("596659"),
        u = n("49873");

    function d(e, t, n, o) {
        if ((e = r.from(e.toArray())).length < t.byteLength()) {
            var s = r.alloc(t.byteLength() - e.length);
            e = r.concat([s, e])
        }
        var a = n.length,
            c = function(e, t) {
                e = (e = l(e, t)).mod(t);
                var n = r.from(e.toArray());
                if (n.length < t.byteLength()) {
                    var i = r.alloc(t.byteLength() - n.length);
                    n = r.concat([i, n])
                }
                return n
            }(n, t),
            u = r.alloc(a);
        u.fill(1);
        var d = r.alloc(a);
        return d = i(o, d).update(u).update(r.from([0])).update(e).update(c).digest(), u = i(o, d).update(u).digest(), d = i(o, d).update(u).update(r.from([1])).update(e).update(c).digest(), u = i(o, d).update(u).digest(), {
            k: d,
            v: u
        }
    }

    function l(e, t) {
        var n = new a(e),
            r = (e.length << 3) - t.bitLength();
        return r > 0 && n.ishrn(r), n
    }

    function f(e, t, n) {
        var o, s;
        do {
            for (o = r.alloc(0); 8 * o.length < e.bitLength();) t.v = i(n, t.k).update(t.v).digest(), o = r.concat([o, t.v]);
            s = l(o, e), t.k = i(n, t.k).update(t.v).update(r.from([0])).digest(), t.v = i(n, t.k).update(t.v).digest()
        } while (-1 !== s.cmp(e));
        return s
    }
    e.exports = function(e, t, n, i, p) {
        var h = c(t);
        if (h.curve) {
            if ("ecdsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
            return function(e, t) {
                var n = u[t.curve.join(".")];
                if (!n) throw Error("unknown curve " + t.curve.join("."));
                var i = new s(n).keyFromPrivate(t.privateKey).sign(e);
                return r.from(i.toDER())
            }(e, h)
        }
        if ("dsa" === h.type) {
            if ("dsa" !== i) throw Error("wrong private key type");
            return function(e, t, n) {
                for (var i, o = t.params.priv_key, s = t.params.p, c = t.params.q, u = t.params.g, p = new a(0), h = l(e, c).mod(c), v = !1, g = d(o, c, e, n); !1 === v;) p = function(e, t, n, r) {
                    return e.toRed(a.mont(n)).redPow(t).fromRed().mod(r)
                }(u, i = f(c, g, n), s, c), 0 === (v = i.invm(c).imul(h.add(o.mul(p))).mod(c)).cmpn(0) && (v = !1, p = new a(0));
                return function(e, t) {
                    e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
                    var n = [48, e.length + t.length + 4, 2, e.length];
                    return n = n.concat(e, [2, t.length], t), r.from(n)
                }(p, v)
            }(e, h, n)
        }
        if ("rsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
        e = r.concat([p, e]);
        for (var v = h.modulus.byteLength(), g = [0, 1]; e.length + g.length + 1 < v;) g.push(255);
        g.push(0);
        for (var b = -1; ++b < e.length;) g.push(e[b]);
        return o(g, h)
    }, e.exports.getKey = d, e.exports.makeKey = f
}