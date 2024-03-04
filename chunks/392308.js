function(e, t, n) {
    "use strict";
    var r = n("550511"),
        i = r.assert,
        o = r.parseBytes,
        s = r.cachedProperty;

    function a(e, t) {
        this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub)
    }
    a.fromPublic = function(e, t) {
        return t instanceof a ? t : new a(e, {
            pub: t
        })
    }, a.fromSecret = function(e, t) {
        return t instanceof a ? t : new a(e, {
            secret: t
        })
    }, a.prototype.secret = function() {
        return this._secret
    }, s(a, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), s(a, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), s(a, "privBytes", function() {
        var e = this.eddsa,
            t = this.hash(),
            n = e.encodingLength - 1,
            r = t.slice(0, e.encodingLength);
        return r[0] &= 248, r[n] &= 127, r[n] |= 64, r
    }), s(a, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), s(a, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), s(a, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), a.prototype.sign = function(e) {
        return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
    }, a.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }, a.prototype.getSecret = function(e) {
        return i(this._secret, "KeyPair is public only"), r.encode(this.secret(), e)
    }, a.prototype.getPublic = function(e) {
        return r.encode(this.pubBytes(), e)
    }, e.exports = a
}