function(e, t, n) {
    "use strict";
    var r = n("145095"),
        i = n("346931"),
        o = n("550511"),
        s = o.assert,
        a = o.parseBytes,
        c = n("392308"),
        u = n("999419");

    function d(e) {
        if (s("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof d)) return new d(e);
        e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = r.sha512
    }
    e.exports = d, d.prototype.sign = function(e, t) {
        e = a(e);
        var n = this.keyFromSecret(t),
            r = this.hashInt(n.messagePrefix(), e),
            i = this.g.mul(r),
            o = this.encodePoint(i),
            s = this.hashInt(o, n.pubBytes(), e).mul(n.priv()),
            c = r.add(s).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: c,
            Rencoded: o
        })
    }, d.prototype.verify = function(e, t, n) {
        e = a(e), t = this.makeSignature(t);
        var r = this.keyFromPublic(n),
            i = this.hashInt(t.Rencoded(), r.pubBytes(), e),
            o = this.g.mul(t.S());
        return t.R().add(r.pub().mul(i)).eq(o)
    }, d.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return o.intFromLE(e.digest()).umod(this.curve.n)
    }, d.prototype.keyFromPublic = function(e) {
        return c.fromPublic(this, e)
    }, d.prototype.keyFromSecret = function(e) {
        return c.fromSecret(this, e)
    }, d.prototype.makeSignature = function(e) {
        return e instanceof u ? e : new u(this, e)
    }, d.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
    }, d.prototype.decodePoint = function(e) {
        var t = (e = o.parseBytes(e)).length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            r = (128 & e[t]) != 0,
            i = o.intFromLE(n);
        return this.curve.pointFromY(i, r)
    }, d.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }, d.prototype.decodeInt = function(e) {
        return o.intFromLE(e)
    }, d.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}