function(t, e, s) {
    "use strict";
    s("70102");
    var r = s("839309"),
        i = s("840069"),
        n = s("550511"),
        c = s("346931"),
        o = s("125807"),
        f = n.assert,
        u = s("410680"),
        a = s("925572");

    function d(t) {
        if (!(this instanceof d)) return new d(t);
        "string" == typeof t && (f(Object.prototype.hasOwnProperty.call(c, t), "Unknown curve " + t), t = c[t]), t instanceof c.PresetCurve && (t = {
            curve: t
        }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
    }
    t.exports = d, d.prototype.keyPair = function(t) {
        return new u(this, t)
    }, d.prototype.keyFromPrivate = function(t, e) {
        return u.fromPrivate(this, t, e)
    }, d.prototype.keyFromPublic = function(t, e) {
        return u.fromPublic(this, t, e)
    }, d.prototype.genKeyPair = function(t) {
        !t && (t = {});
        for (var e = new i({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || o(this.hash.hmacStrength),
                entropyEnc: t.entropy && t.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), s = this.n.byteLength(), n = this.n.sub(new r(2));;) {
            var c = new r(e.generate(s));
            if (!(c.cmp(n) > 0)) return c.iaddn(1), this.keyFromPrivate(c)
        }
    }, d.prototype._truncateToN = function(t, e) {
        var s = 8 * t.byteLength() - this.n.bitLength();
        return (s > 0 && (t = t.ushrn(s)), !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t
    }, d.prototype.sign = function(t, e, s, n) {
        "object" == typeof s && (n = s, s = null), !n && (n = {}), e = this.keyFromPrivate(e, s), t = this._truncateToN(new r(t, 16));
        for (var c = this.n.byteLength(), o = e.getPrivate().toArray("be", c), f = t.toArray("be", c), u = new i({
                hash: this.hash,
                entropy: o,
                nonce: f,
                pers: n.pers,
                persEnc: n.persEnc || "utf8"
            }), d = this.n.sub(new r(1)), p = 0;; p++) {
            var b = n.k ? n.k(p) : new r(u.generate(this.n.byteLength()));
            if (0 >= (b = this._truncateToN(b, !0)).cmpn(1) || b.cmp(d) >= 0) continue;
            var h = this.g.mul(b);
            if (h.isInfinity()) continue;
            var l = h.getX(),
                g = l.umod(this.n);
            if (0 !== g.cmpn(0)) {
                var v = b.invm(this.n).mul(g.mul(e.getPrivate()).iadd(t));
                if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                    var x = (h.getY().isOdd() ? 1 : 0) | (0 !== l.cmp(g) ? 2 : 0);
                    return n.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v), x ^= 1), new a({
                        r: g,
                        s: v,
                        recoveryParam: x
                    })
                }
            }
        }
    }, d.prototype.verify = function(t, e, s, i) {
        t = this._truncateToN(new r(t, 16)), s = this.keyFromPublic(s, i);
        var n, c = (e = new a(e, "hex")).r,
            o = e.s;
        if (0 > c.cmpn(1) || c.cmp(this.n) >= 0 || 0 > o.cmpn(1) || o.cmp(this.n) >= 0) return !1;
        var f = o.invm(this.n),
            u = f.mul(t).umod(this.n),
            d = f.mul(c).umod(this.n);
        if (!this.curve._maxwellTrick) return !(n = this.g.mulAdd(u, s.getPublic(), d)).isInfinity() && 0 === n.getX().umod(this.n).cmp(c);
        return !(n = this.g.jmulAdd(u, s.getPublic(), d)).isInfinity() && n.eqXToP(c)
    }, d.prototype.recoverPubKey = function(t, e, s, i) {
        f((3 & s) === s, "The recovery param is more than two bits"), e = new a(e, i);
        var n = this.n,
            c = new r(t),
            o = e.r,
            u = e.s,
            d = 1 & s,
            p = s >> 1;
        if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && p) throw Error("Unable to find sencond key candinate");
        o = p ? this.curve.pointFromX(o.add(this.curve.n), d) : this.curve.pointFromX(o, d);
        var b = e.r.invm(n),
            h = n.sub(c).mul(b).umod(n),
            l = u.mul(b).umod(n);
        return this.g.mulAdd(h, o, l)
    }, d.prototype.getKeyRecoveryParam = function(t, e, s, r) {
        if (null !== (e = new a(e, r)).recoveryParam) return e.recoveryParam;
        for (var i, n = 0; n < 4; n++) {
            try {
                i = this.recoverPubKey(t, e, n)
            } catch (t) {
                continue
            }
            if (i.eq(s)) return n
        }
        throw Error("Unable to find valid recovery factor")
    }
}