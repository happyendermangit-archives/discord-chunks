function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("839309"),
        i = n("840069"),
        o = n("550511"),
        s = n("346931"),
        a = n("125807"),
        c = o.assert,
        u = n("410680"),
        d = n("925572");

    function l(e) {
        if (!(this instanceof l)) return new l(e);
        "string" == typeof e && (c(Object.prototype.hasOwnProperty.call(s, e), "Unknown curve " + e), e = s[e]), e instanceof s.PresetCurve && (e = {
            curve: e
        }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
    }
    e.exports = l, l.prototype.keyPair = function(e) {
        return new u(this, e)
    }, l.prototype.keyFromPrivate = function(e, t) {
        return u.fromPrivate(this, e, t)
    }, l.prototype.keyFromPublic = function(e, t) {
        return u.fromPublic(this, e, t)
    }, l.prototype.genKeyPair = function(e) {
        !e && (e = {});
        for (var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || a(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), n = this.n.byteLength(), o = this.n.sub(new r(2));;) {
            var s = new r(t.generate(n));
            if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
        }
    }, l.prototype._truncateToN = function(e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();
        return (n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
    }, l.prototype.sign = function(e, t, n, o) {
        "object" == typeof n && (o = n, n = null), !o && (o = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new r(e, 16));
        for (var s = this.n.byteLength(), a = t.getPrivate().toArray("be", s), c = e.toArray("be", s), u = new i({
                hash: this.hash,
                entropy: a,
                nonce: c,
                pers: o.pers,
                persEnc: o.persEnc || "utf8"
            }), l = this.n.sub(new r(1)), f = 0;; f++) {
            var p = o.k ? o.k(f) : new r(u.generate(this.n.byteLength()));
            if (0 >= (p = this._truncateToN(p, !0)).cmpn(1) || p.cmp(l) >= 0) continue;
            var h = this.g.mul(p);
            if (h.isInfinity()) continue;
            var v = h.getX(),
                g = v.umod(this.n);
            if (0 !== g.cmpn(0)) {
                var b = p.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                if (0 !== (b = b.umod(this.n)).cmpn(0)) {
                    var m = (h.getY().isOdd() ? 1 : 0) | (0 !== v.cmp(g) ? 2 : 0);
                    return o.canonical && b.cmp(this.nh) > 0 && (b = this.n.sub(b), m ^= 1), new d({
                        r: g,
                        s: b,
                        recoveryParam: m
                    })
                }
            }
        }
    }, l.prototype.verify = function(e, t, n, i) {
        e = this._truncateToN(new r(e, 16)), n = this.keyFromPublic(n, i);
        var o, s = (t = new d(t, "hex")).r,
            a = t.s;
        if (0 > s.cmpn(1) || s.cmp(this.n) >= 0 || 0 > a.cmpn(1) || a.cmp(this.n) >= 0) return !1;
        var c = a.invm(this.n),
            u = c.mul(e).umod(this.n),
            l = c.mul(s).umod(this.n);
        if (!this.curve._maxwellTrick) return !(o = this.g.mulAdd(u, n.getPublic(), l)).isInfinity() && 0 === o.getX().umod(this.n).cmp(s);
        return !(o = this.g.jmulAdd(u, n.getPublic(), l)).isInfinity() && o.eqXToP(s)
    }, l.prototype.recoverPubKey = function(e, t, n, i) {
        c((3 & n) === n, "The recovery param is more than two bits"), t = new d(t, i);
        var o = this.n,
            s = new r(e),
            a = t.r,
            u = t.s,
            l = 1 & n,
            f = n >> 1;
        if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw Error("Unable to find sencond key candinate");
        a = f ? this.curve.pointFromX(a.add(this.curve.n), l) : this.curve.pointFromX(a, l);
        var p = t.r.invm(o),
            h = o.sub(s).mul(p).umod(o),
            v = u.mul(p).umod(o);
        return this.g.mulAdd(h, a, v)
    }, l.prototype.getKeyRecoveryParam = function(e, t, n, r) {
        if (null !== (t = new d(t, r)).recoveryParam) return t.recoveryParam;
        for (var i, o = 0; o < 4; o++) {
            try {
                i = this.recoverPubKey(e, t, o)
            } catch (e) {
                continue
            }
            if (i.eq(n)) return o
        }
        throw Error("Unable to find valid recovery factor")
    }
}