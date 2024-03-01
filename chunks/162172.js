function(t, e, s) {
    var r = s("446825").Buffer;
    s("222007");
    var i = s("814548"),
        n = s("839309");
    t.exports = function(t) {
        return new o(t)
    };
    var c = {
        secp256k1: {
            name: "secp256k1",
            byteLength: 32
        },
        secp224r1: {
            name: "p224",
            byteLength: 28
        },
        prime256v1: {
            name: "p256",
            byteLength: 32
        },
        prime192v1: {
            name: "p192",
            byteLength: 24
        },
        ed25519: {
            name: "ed25519",
            byteLength: 32
        },
        secp384r1: {
            name: "p384",
            byteLength: 48
        },
        secp521r1: {
            name: "p521",
            byteLength: 66
        }
    };

    function o(t) {
        this.curveType = c[t], !this.curveType && (this.curveType = {
            name: t
        }), this.curve = new i.ec(this.curveType.name), this.keys = void 0
    }

    function f(t, e, s) {
        !Array.isArray(t) && (t = t.toArray());
        var i = new r(t);
        if (s && i.length < s) {
            var n = new r(s - i.length);
            n.fill(0), i = r.concat([n, i])
        }
        return e ? i.toString(e) : i
    }
    c.p224 = c.secp224r1, c.p256 = c.secp256r1 = c.prime256v1, c.p192 = c.secp192r1 = c.prime192v1, c.p384 = c.secp384r1, c.p521 = c.secp521r1, o.prototype.generateKeys = function(t, e) {
        return this.keys = this.curve.genKeyPair(), this.getPublicKey(t, e)
    }, o.prototype.computeSecret = function(t, e, s) {
        return e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e)), f(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(), s, this.curveType.byteLength)
    }, o.prototype.getPublicKey = function(t, e) {
        var s = this.keys.getPublic("compressed" === e, !0);
        return "hybrid" === e && (s[s.length - 1] % 2 ? s[0] = 7 : s[0] = 6), f(s, t)
    }, o.prototype.getPrivateKey = function(t) {
        return f(this.keys.getPrivate(), t)
    }, o.prototype.setPublicKey = function(t, e) {
        return e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e)), this.keys._importPublic(t), this
    }, o.prototype.setPrivateKey = function(t, e) {
        e = e || "utf8", !r.isBuffer(t) && (t = new r(t, e));
        var s = new n(t);
        return s = s.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(s), this
    }
}