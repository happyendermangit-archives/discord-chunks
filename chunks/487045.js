function(t, e, s) {
    "use strict";
    s("222007");
    var r = s("463483"),
        i = s("599235"),
        n = s("446744"),
        c = s("249089");

    function o() {
        this.tmp = [, , ], this.keys = null
    }

    function f(t) {
        c.call(this, t);
        var e = new o;
        this._desState = e, this.deriveKeys(e, t.key)
    }
    i(f, c), t.exports = f, f.create = function(t) {
        return new f(t)
    };
    var u = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    f.prototype.deriveKeys = function(t, e) {
        t.keys = Array(32), r.equal(e.length, this.blockSize, "Invalid key length");
        var s = n.readUInt32BE(e, 0),
            i = n.readUInt32BE(e, 4);
        n.pc1(s, i, t.tmp, 0), s = t.tmp[0], i = t.tmp[1];
        for (var c = 0; c < t.keys.length; c += 2) {
            var o = u[c >>> 1];
            s = n.r28shl(s, o), i = n.r28shl(i, o), n.pc2(s, i, t.keys, c)
        }
    }, f.prototype._update = function(t, e, s, r) {
        var i = this._desState,
            c = n.readUInt32BE(t, e),
            o = n.readUInt32BE(t, e + 4);
        n.ip(c, o, i.tmp, 0), c = i.tmp[0], o = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, c, o, i.tmp, 0) : this._decrypt(i, c, o, i.tmp, 0), c = i.tmp[0], o = i.tmp[1], n.writeUInt32BE(s, c, r), n.writeUInt32BE(s, o, r + 4)
    }, f.prototype._pad = function(t, e) {
        if (!1 === this.padding) return !1;
        for (var s = t.length - e, r = e; r < t.length; r++) t[r] = s;
        return !0
    }, f.prototype._unpad = function(t) {
        if (!1 === this.padding) return t;
        for (var e = t[t.length - 1], s = t.length - e; s < t.length; s++) r.equal(t[s], e);
        return t.slice(0, t.length - e)
    }, f.prototype._encrypt = function(t, e, s, r, i) {
        for (var c = e, o = s, f = 0; f < t.keys.length; f += 2) {
            var u = t.keys[f],
                a = t.keys[f + 1];
            n.expand(o, t.tmp, 0), u ^= t.tmp[0], a ^= t.tmp[1];
            var d = n.substitute(u, a),
                p = n.permute(d),
                b = o;
            o = (c ^ p) >>> 0, c = b
        }
        n.rip(o, c, r, i)
    }, f.prototype._decrypt = function(t, e, s, r, i) {
        for (var c = s, o = e, f = t.keys.length - 2; f >= 0; f -= 2) {
            var u = t.keys[f],
                a = t.keys[f + 1];
            n.expand(c, t.tmp, 0), u ^= t.tmp[0], a ^= t.tmp[1];
            var d = n.substitute(u, a),
                p = n.permute(d),
                b = c;
            c = (o ^ p) >>> 0, o = b
        }
        n.rip(c, o, r, i)
    }
}