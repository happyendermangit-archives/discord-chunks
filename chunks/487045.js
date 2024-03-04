function(e, t, n) {
    "use strict";
    n("222007");
    var r = n("463483"),
        i = n("599235"),
        o = n("446744"),
        s = n("249089");

    function a() {
        this.tmp = [, , ], this.keys = null
    }

    function c(e) {
        s.call(this, e);
        var t = new a;
        this._desState = t, this.deriveKeys(t, e.key)
    }
    i(c, s), e.exports = c, c.create = function(e) {
        return new c(e)
    };
    var u = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    c.prototype.deriveKeys = function(e, t) {
        e.keys = Array(32), r.equal(t.length, this.blockSize, "Invalid key length");
        var n = o.readUInt32BE(t, 0),
            i = o.readUInt32BE(t, 4);
        o.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1];
        for (var s = 0; s < e.keys.length; s += 2) {
            var a = u[s >>> 1];
            n = o.r28shl(n, a), i = o.r28shl(i, a), o.pc2(n, i, e.keys, s)
        }
    }, c.prototype._update = function(e, t, n, r) {
        var i = this._desState,
            s = o.readUInt32BE(e, t),
            a = o.readUInt32BE(e, t + 4);
        o.ip(s, a, i.tmp, 0), s = i.tmp[0], a = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, s, a, i.tmp, 0) : this._decrypt(i, s, a, i.tmp, 0), s = i.tmp[0], a = i.tmp[1], o.writeUInt32BE(n, s, r), o.writeUInt32BE(n, a, r + 4)
    }, c.prototype._pad = function(e, t) {
        if (!1 === this.padding) return !1;
        for (var n = e.length - t, r = t; r < e.length; r++) e[r] = n;
        return !0
    }, c.prototype._unpad = function(e) {
        if (!1 === this.padding) return e;
        for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) r.equal(e[n], t);
        return e.slice(0, e.length - t)
    }, c.prototype._encrypt = function(e, t, n, r, i) {
        for (var s = t, a = n, c = 0; c < e.keys.length; c += 2) {
            var u = e.keys[c],
                d = e.keys[c + 1];
            o.expand(a, e.tmp, 0), u ^= e.tmp[0], d ^= e.tmp[1];
            var l = o.substitute(u, d),
                f = o.permute(l),
                p = a;
            a = (s ^ f) >>> 0, s = p
        }
        o.rip(a, s, r, i)
    }, c.prototype._decrypt = function(e, t, n, r, i) {
        for (var s = n, a = t, c = e.keys.length - 2; c >= 0; c -= 2) {
            var u = e.keys[c],
                d = e.keys[c + 1];
            o.expand(s, e.tmp, 0), u ^= e.tmp[0], d ^= e.tmp[1];
            var l = o.substitute(u, d),
                f = o.permute(l),
                p = s;
            s = (a ^ f) >>> 0, a = p
        }
        o.rip(s, a, r, i)
    }
}