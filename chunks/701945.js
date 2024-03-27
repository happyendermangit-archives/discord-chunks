function(e, t, n) {
    var r = n("689118"),
        i = n("676972"),
        a = n("957578").Buffer,
        o = [1518500249, 1859775393, -1894007588, -899497514],
        s = Array(80);

    function u() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }
    r(u, i), u.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };
    u.prototype._update = function(e) {
        for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, s = 0 | this._e, u = 0; u < 16; ++u) t[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u) {
            ;
            t[u] = (l = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16]) << 1 | l >>> 31
        }
        for (var c = 0; c < 80; ++c) {
            var l, d, f, p, h, m, g, _ = ~~(c / 20);
            var b = ((d = n) << 5 | d >>> 27) + (f = _, p = r, h = i, m = a, 0 === f ? p & h | ~p & m : 2 === f ? p & h | p & m | h & m : p ^ h ^ m) + s + t[c] + o[_] | 0;
            s = a, a = i, i = (g = r) << 30 | g >>> 2, r = n, n = b
        }
        this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
    }, u.prototype._hash = function() {
        var e = a.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
    }, e.exports = u
}