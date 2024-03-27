function(e, t, n) {
    "use strict";
    var r = n("21841"),
        i = n("689118"),
        a = n("726315"),
        o = n("449348");

    function s() {
        this.tmp = [, , ], this.keys = null
    }

    function u(e) {
        o.call(this, e);
        var t = new s;
        this._desState = t, this.deriveKeys(t, e.key)
    }
    i(u, o), e.exports = u, u.create = function(e) {
        return new u(e)
    };
    var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    u.prototype.deriveKeys = function(e, t) {
        e.keys = Array(32), r.equal(t.length, this.blockSize, "Invalid key length");
        var n = a.readUInt32BE(t, 0),
            i = a.readUInt32BE(t, 4);
        a.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1];
        for (var o = 0; o < e.keys.length; o += 2) {
            var s = c[o >>> 1];
            n = a.r28shl(n, s), i = a.r28shl(i, s), a.pc2(n, i, e.keys, o)
        }
    }, u.prototype._update = function(e, t, n, r) {
        var i = this._desState,
            o = a.readUInt32BE(e, t),
            s = a.readUInt32BE(e, t + 4);
        a.ip(o, s, i.tmp, 0), o = i.tmp[0], s = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, o, s, i.tmp, 0) : this._decrypt(i, o, s, i.tmp, 0), o = i.tmp[0], s = i.tmp[1], a.writeUInt32BE(n, o, r), a.writeUInt32BE(n, s, r + 4)
    }, u.prototype._pad = function(e, t) {
        if (!1 === this.padding) return !1;
        for (var n = e.length - t, r = t; r < e.length; r++) e[r] = n;
        return !0
    }, u.prototype._unpad = function(e) {
        if (!1 === this.padding) return e;
        for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) r.equal(e[n], t);
        return e.slice(0, e.length - t)
    }, u.prototype._encrypt = function(e, t, n, r, i) {
        for (var o = t, s = n, u = 0; u < e.keys.length; u += 2) {
            var c = e.keys[u],
                l = e.keys[u + 1];
            a.expand(s, e.tmp, 0), c ^= e.tmp[0], l ^= e.tmp[1];
            var d = a.substitute(c, l),
                f = a.permute(d),
                p = s;
            s = (o ^ f) >>> 0, o = p
        }
        a.rip(s, o, r, i)
    }, u.prototype._decrypt = function(e, t, n, r, i) {
        for (var o = n, s = t, u = e.keys.length - 2; u >= 0; u -= 2) {
            var c = e.keys[u],
                l = e.keys[u + 1];
            a.expand(o, e.tmp, 0), c ^= e.tmp[0], l ^= e.tmp[1];
            var d = a.substitute(c, l),
                f = a.permute(d),
                p = o;
            o = (s ^ f) >>> 0, s = p
        }
        a.rip(o, s, r, i)
    }
}