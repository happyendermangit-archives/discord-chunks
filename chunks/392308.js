function(t, e, s) {
    "use strict";
    var r = s("550511"),
        i = r.assert,
        n = r.parseBytes,
        c = r.cachedProperty;

    function o(t, e) {
        this.eddsa = t, this._secret = n(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = n(e.pub)
    }
    o.fromPublic = function(t, e) {
        return e instanceof o ? e : new o(t, {
            pub: e
        })
    }, o.fromSecret = function(t, e) {
        return e instanceof o ? e : new o(t, {
            secret: e
        })
    }, o.prototype.secret = function() {
        return this._secret
    }, c(o, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), c(o, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), c(o, "privBytes", function() {
        var t = this.eddsa,
            e = this.hash(),
            s = t.encodingLength - 1,
            r = e.slice(0, t.encodingLength);
        return r[0] &= 248, r[s] &= 127, r[s] |= 64, r
    }), c(o, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), c(o, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), c(o, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), o.prototype.sign = function(t) {
        return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
    }, o.prototype.verify = function(t, e) {
        return this.eddsa.verify(t, e, this)
    }, o.prototype.getSecret = function(t) {
        return i(this._secret, "KeyPair is public only"), r.encode(this.secret(), t)
    }, o.prototype.getPublic = function(t) {
        return r.encode(this.pubBytes(), t)
    }, t.exports = o
}