function(e, t, n) {
    "use strict";
    var r = n("903799"),
        i = n("609513"),
        a = n("685053"),
        o = a.assert,
        s = a.parseBytes,
        u = n("226140"),
        c = n("452610");

    function l(e) {
        if (o("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof l)) return new l(e);
        e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = r.sha512
    }
    e.exports = l, l.prototype.sign = function(e, t) {
        e = s(e);
        var n = this.keyFromSecret(t),
            r = this.hashInt(n.messagePrefix(), e),
            i = this.g.mul(r),
            a = this.encodePoint(i),
            o = this.hashInt(a, n.pubBytes(), e).mul(n.priv()),
            u = r.add(o).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: u,
            Rencoded: a
        })
    }, l.prototype.verify = function(e, t, n) {
        e = s(e), t = this.makeSignature(t);
        var r = this.keyFromPublic(n),
            i = this.hashInt(t.Rencoded(), r.pubBytes(), e),
            a = this.g.mul(t.S());
        return t.R().add(r.pub().mul(i)).eq(a)
    }, l.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return a.intFromLE(e.digest()).umod(this.curve.n)
    }, l.prototype.keyFromPublic = function(e) {
        return u.fromPublic(this, e)
    }, l.prototype.keyFromSecret = function(e) {
        return u.fromSecret(this, e)
    }, l.prototype.makeSignature = function(e) {
        return e instanceof c ? e : new c(this, e)
    }, l.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
    }, l.prototype.decodePoint = function(e) {
        var t = (e = a.parseBytes(e)).length - 1,
            n = e.slice(0, t).concat(-129 & e[t]),
            r = (128 & e[t]) != 0,
            i = a.intFromLE(n);
        return this.curve.pointFromY(i, r)
    }, l.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }, l.prototype.decodeInt = function(e) {
        return a.intFromLE(e)
    }, l.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}