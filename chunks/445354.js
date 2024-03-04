function(e, t, n) {
    var r = n("599235"),
        i = n("515886"),
        o = n("912065").Buffer,
        s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        a = Array(64);

    function c() {
        this.init(), this._w = a, i.call(this, 64, 56)
    }
    r(c, i), c.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    };
    c.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, a = 0 | this._e, c = 0 | this._f, u = 0 | this._g, d = 0 | this._h, l = 0; l < 16; ++l) t[l] = e.readInt32BE(4 * l);
        for (; l < 64; ++l) {
            ;
            t[l] = (((p = t[l - 2]) >>> 17 | p << 15) ^ (p >>> 19 | p << 13) ^ p >>> 10) + t[l - 7] + (((h = t[l - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3) + t[l - 16] | 0
        }
        for (var f = 0; f < 64; ++f) {
            var p, h, v, g, b, m, y, x, w, S = d + (((v = a) >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (g = a, b = c, (m = u) ^ g & (b ^ m)) + s[f] + t[f] | 0;
            var k = (((y = n) >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + ((x = n) & (w = r) | i & (x | w)) | 0;
            d = u, u = c, c = a, a = o + S | 0, o = i, i = r, r = n, n = S + k | 0
        }
        this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = o + this._d | 0, this._e = a + this._e | 0, this._f = c + this._f | 0, this._g = u + this._g | 0, this._h = d + this._h | 0
    }, c.prototype._hash = function() {
        var e = o.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
    }, e.exports = c
}