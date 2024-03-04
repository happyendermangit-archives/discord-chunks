function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("145095"),
        i = n("789294"),
        o = n("463483");

    function s(e) {
        if (!(this instanceof s)) return new s(e);
        this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
            n = i.toArray(e.nonce, e.nonceEnc || "hex"),
            r = i.toArray(e.pers, e.persEnc || "hex");
        o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, n, r)
    }
    e.exports = s, s.prototype._init = function(e, t, n) {
        var r = e.concat(t).concat(n);
        this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
        this._update(r), this._reseed = 1, this.reseedInterval = 281474976710656
    }, s.prototype._hmac = function() {
        return new r.hmac(this.hash, this.K)
    }, s.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
    }, s.prototype.reseed = function(e, t, n, r) {
        "string" != typeof t && (r = n, n = t, t = null), e = i.toArray(e, t), n = i.toArray(n, r), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(n || [])), this._reseed = 1
    }, s.prototype.generate = function(e, t, n, r) {
        if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
        "string" != typeof t && (r = n, n = t, t = null), n && (n = i.toArray(n, r || "hex"), this._update(n));
        for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
        var s = o.slice(0, e);
        return this._update(n), this._reseed++, i.encode(s, t)
    }
}