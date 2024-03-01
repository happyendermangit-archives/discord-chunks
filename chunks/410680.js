function(t, e, s) {
    "use strict";
    var r = s("839309"),
        i = s("550511").assert;

    function n(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
    }
    t.exports = n, n.fromPublic = function(t, e, s) {
        return e instanceof n ? e : new n(t, {
            pub: e,
            pubEnc: s
        })
    }, n.fromPrivate = function(t, e, s) {
        return e instanceof n ? e : new n(t, {
            priv: e,
            privEnc: s
        })
    }, n.prototype.validate = function() {
        var t = this.getPublic();
        return t.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }, n.prototype.getPublic = function(t, e) {
        return ("string" == typeof t && (e = t, t = null), !this.pub && (this.pub = this.ec.g.mul(this.priv)), e) ? this.pub.encode(e, t) : this.pub
    }, n.prototype.getPrivate = function(t) {
        return "hex" === t ? this.priv.toString(16, 2) : this.priv
    }, n.prototype._importPrivate = function(t, e) {
        this.priv = new r(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, n.prototype._importPublic = function(t, e) {
        if (t.x || t.y) {
            "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && i(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
            return
        }
        this.pub = this.ec.curve.decodePoint(t, e)
    }, n.prototype.derive = function(t) {
        return !t.validate() && i(t.validate(), "public point not validated"), t.mul(this.priv).getX()
    }, n.prototype.sign = function(t, e, s) {
        return this.ec.sign(t, this, e, s)
    }, n.prototype.verify = function(t, e) {
        return this.ec.verify(t, e, this)
    }, n.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}