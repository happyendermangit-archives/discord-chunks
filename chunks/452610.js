function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("685053"),
        a = i.assert,
        o = i.cachedProperty,
        s = i.parseBytes;

    function u(e, t) {
        this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }), a(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof r && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    o(u, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), o(u, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), o(u, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), o(u, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }), u.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }, u.prototype.toHex = function() {
        return i.encode(this.toBytes(), "hex").toUpperCase()
    }, e.exports = u
}