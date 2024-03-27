function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("789188"),
        a = n("685053"),
        o = n("609513"),
        s = n("526808"),
        u = a.assert,
        c = n("175671"),
        l = n("361879");

    function d(e) {
        if (!(this instanceof d)) return new d(e);
        "string" == typeof e && (u(Object.prototype.hasOwnProperty.call(o, e), "Unknown curve " + e), e = o[e]), e instanceof o.PresetCurve && (e = {
            curve: e
        }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
    }
    e.exports = d, d.prototype.keyPair = function(e) {
        return new c(this, e)
    }, d.prototype.keyFromPrivate = function(e, t) {
        return c.fromPrivate(this, e, t)
    }, d.prototype.keyFromPublic = function(e, t) {
        return c.fromPublic(this, e, t)
    }, d.prototype.genKeyPair = function(e) {
        !e && (e = {});
        for (var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || s(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), n = this.n.byteLength(), a = this.n.sub(new r(2));;) {
            var o = new r(t.generate(n));
            if (!(o.cmp(a) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
        }
    }, d.prototype._truncateToN = function(e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();
        return (n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
    }, d.prototype.sign = function(e, t, n, a) {
        "object" == typeof n && (a = n, n = null), !a && (a = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new r(e, 16));
        for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), u = e.toArray("be", o), c = new i({
                hash: this.hash,
                entropy: s,
                nonce: u,
                pers: a.pers,
                persEnc: a.persEnc || "utf8"
            }), d = this.n.sub(new r(1)), f = 0;; f++) {
            var p = a.k ? a.k(f) : new r(c.generate(this.n.byteLength()));
            if (0 >= (p = this._truncateToN(p, !0)).cmpn(1) || p.cmp(d) >= 0) continue;
            var h = this.g.mul(p);
            if (h.isInfinity()) continue;
            var m = h.getX(),
                g = m.umod(this.n);
            if (0 !== g.cmpn(0)) {
                var _ = p.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                if (0 !== (_ = _.umod(this.n)).cmpn(0)) {
                    var b = (h.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(g) ? 2 : 0);
                    return a.canonical && _.cmp(this.nh) > 0 && (_ = this.n.sub(_), b ^= 1), new l({
                        r: g,
                        s: _,
                        recoveryParam: b
                    })
                }
            }
        }
    }, d.prototype.verify = function(e, t, n, i) {
        e = this._truncateToN(new r(e, 16)), n = this.keyFromPublic(n, i);
        var a, o = (t = new l(t, "hex")).r,
            s = t.s;
        if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
        var u = s.invm(this.n),
            c = u.mul(e).umod(this.n),
            d = u.mul(o).umod(this.n);
        if (!this.curve._maxwellTrick) return !(a = this.g.mulAdd(c, n.getPublic(), d)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o);
        return !(a = this.g.jmulAdd(c, n.getPublic(), d)).isInfinity() && a.eqXToP(o)
    }, d.prototype.recoverPubKey = function(e, t, n, i) {
        u((3 & n) === n, "The recovery param is more than two bits"), t = new l(t, i);
        var a = this.n,
            o = new r(e),
            s = t.r,
            c = t.s,
            d = 1 & n,
            f = n >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw Error("Unable to find sencond key candinate");
        s = f ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
        var p = t.r.invm(a),
            h = a.sub(o).mul(p).umod(a),
            m = c.mul(p).umod(a);
        return this.g.mulAdd(h, s, m)
    }, d.prototype.getKeyRecoveryParam = function(e, t, n, r) {
        if (null !== (t = new l(t, r)).recoveryParam) return t.recoveryParam;
        for (var i, a = 0; a < 4; a++) {
            try {
                i = this.recoverPubKey(e, t, a)
            } catch (e) {
                continue
            }
            if (i.eq(n)) return a
        }
        throw Error("Unable to find valid recovery factor")
    }
}