function(t, e, s) {
    var r = s("599235"),
        i = s("515886"),
        n = s("912065").Buffer,
        c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        o = Array(64);

    function f() {
        this.init(), this._w = o, i.call(this, 64, 56)
    }
    r(f, i), f.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    };
    f.prototype._update = function(t) {
        for (var e = this._w, s = 0 | this._a, r = 0 | this._b, i = 0 | this._c, n = 0 | this._d, o = 0 | this._e, f = 0 | this._f, u = 0 | this._g, a = 0 | this._h, d = 0; d < 16; ++d) e[d] = t.readInt32BE(4 * d);
        for (; d < 64; ++d) {
            ;
            e[d] = (((b = e[d - 2]) >>> 17 | b << 15) ^ (b >>> 19 | b << 13) ^ b >>> 10) + e[d - 7] + (((h = e[d - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3) + e[d - 16] | 0
        }
        for (var p = 0; p < 64; ++p) {
            var b, h, l, g, v, x, m, y, _, w = a + (((l = o) >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (g = o, v = f, (x = u) ^ g & (v ^ x)) + c[p] + e[p] | 0;
            var M = (((m = s) >>> 2 | m << 30) ^ (m >>> 13 | m << 19) ^ (m >>> 22 | m << 10)) + ((y = s) & (_ = r) | i & (y | _)) | 0;
            a = u, u = f, f = o, o = n + w | 0, n = i, i = r, r = s, s = w + M | 0
        }
        this._a = s + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = n + this._d | 0, this._e = o + this._e | 0, this._f = f + this._f | 0, this._g = u + this._g | 0, this._h = a + this._h | 0
    }, f.prototype._hash = function() {
        var t = n.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
    }, t.exports = f
}