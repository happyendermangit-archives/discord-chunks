function(e, t, n) {
    var r = n("957578").Buffer,
        i = n("294415"),
        a = n("530917"),
        o = n("136924").ec,
        s = n("28704"),
        u = n("223428"),
        c = n("733345");

    function l(e, t, n, a) {
        if ((e = r.from(e.toArray())).length < t.byteLength()) {
            var o = r.alloc(t.byteLength() - e.length);
            e = r.concat([o, e])
        }
        var s = n.length,
            u = function(e, t) {
                e = (e = d(e, t)).mod(t);
                var n = r.from(e.toArray());
                if (n.length < t.byteLength()) {
                    var i = r.alloc(t.byteLength() - n.length);
                    n = r.concat([i, n])
                }
                return n
            }(n, t),
            c = r.alloc(s);
        c.fill(1);
        var l = r.alloc(s);
        return l = i(a, l).update(c).update(r.from([0])).update(e).update(u).digest(), c = i(a, l).update(c).digest(), l = i(a, l).update(c).update(r.from([1])).update(e).update(u).digest(), c = i(a, l).update(c).digest(), {
            k: l,
            v: c
        }
    }

    function d(e, t) {
        var n = new s(e),
            r = (e.length << 3) - t.bitLength();
        return r > 0 && n.ishrn(r), n
    }

    function f(e, t, n) {
        var a, o;
        do {
            for (a = r.alloc(0); 8 * a.length < e.bitLength();) t.v = i(n, t.k).update(t.v).digest(), a = r.concat([a, t.v]);
            o = d(a, e), t.k = i(n, t.k).update(t.v).update(r.from([0])).digest(), t.v = i(n, t.k).update(t.v).digest()
        } while (-1 !== o.cmp(e));
        return o
    }
    e.exports = function(e, t, n, i, p) {
        var h = u(t);
        if (h.curve) {
            if ("ecdsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
            return function(e, t) {
                var n = c[t.curve.join(".")];
                if (!n) throw Error("unknown curve " + t.curve.join("."));
                var i = new o(n).keyFromPrivate(t.privateKey).sign(e);
                return r.from(i.toDER())
            }(e, h)
        }
        if ("dsa" === h.type) {
            if ("dsa" !== i) throw Error("wrong private key type");
            return function(e, t, n) {
                for (var i, a = t.params.priv_key, o = t.params.p, u = t.params.q, c = t.params.g, p = new s(0), h = d(e, u).mod(u), m = !1, g = l(a, u, e, n); !1 === m;) p = function(e, t, n, r) {
                    return e.toRed(s.mont(n)).redPow(t).fromRed().mod(r)
                }(c, i = f(u, g, n), o, u), 0 === (m = i.invm(u).imul(h.add(a.mul(p))).mod(u)).cmpn(0) && (m = !1, p = new s(0));
                return function(e, t) {
                    e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
                    var n = [48, e.length + t.length + 4, 2, e.length];
                    return n = n.concat(e, [2, t.length], t), r.from(n)
                }(p, m)
            }(e, h, n)
        }
        if ("rsa" !== i && "ecdsa/rsa" !== i) throw Error("wrong private key type");
        e = r.concat([p, e]);
        for (var m = h.modulus.byteLength(), g = [0, 1]; e.length + g.length + 1 < m;) g.push(255);
        g.push(0);
        for (var _ = -1; ++_ < e.length;) g.push(e[_]);
        return a(g, h)
    }, e.exports.getKey = l, e.exports.makeKey = f
}