function(e, t, n) {
    var r = n("599235"),
        i = n("515886"),
        o = n("912065").Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        a = Array(80);

    function c() {
        this.init(), this._w = a, i.call(this, 64, 56)
    }
    r(c, i), c.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };
    c.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, a = 0 | this._e, c = 0; c < 16; ++c) t[c] = e.readInt32BE(4 * c);
        for (; c < 80; ++c) {
            ;
            t[c] = (d = t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16]) << 1 | d >>> 31
        }
        for (var u = 0; u < 80; ++u) {
            var d, l, f, p, h, v, g, b = ~~(u / 20);
            var m = ((l = n) << 5 | l >>> 27) + (f = b, p = r, h = i, v = o, 0 === f ? p & h | ~p & v : 2 === f ? p & h | p & v | h & v : p ^ h ^ v) + a + t[u] + s[b] | 0;
            a = o, o = i, i = (g = r) << 30 | g >>> 2, r = n, n = m
        }
        this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = o + this._d | 0, this._e = a + this._e | 0
    }, c.prototype._hash = function() {
        var e = o.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
    }, e.exports = c
}