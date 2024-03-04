function(e, t, n) {
    "use strict";
    var r = n("839309"),
        i = n("550511"),
        o = i.assert,
        s = i.cachedProperty,
        a = i.parseBytes;

    function c(e, t) {
        this.eddsa = e, "object" != typeof t && (t = a(t)), Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof r && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    s(c, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), s(c, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), s(c, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), s(c, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }), c.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }, c.prototype.toHex = function() {
        return i.encode(this.toBytes(), "hex").toUpperCase()
    }, e.exports = c
}