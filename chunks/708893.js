function(e, t, n) {
    "use strict";
    var r = n("599235"),
        i = n("82221"),
        o = n("912065").Buffer,
        s = Array(16);

    function a() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }

    function c(e, t) {
        return e << t | e >>> 32 - t
    }

    function u(e, t, n, r, i, o, s) {
        return c(e + (t & n | ~t & r) + i + o | 0, s) + t | 0
    }

    function d(e, t, n, r, i, o, s) {
        return c(e + (t & r | n & ~r) + i + o | 0, s) + t | 0
    }

    function l(e, t, n, r, i, o, s) {
        return c(e + (t ^ n ^ r) + i + o | 0, s) + t | 0
    }

    function f(e, t, n, r, i, o, s) {
        return c(e + (n ^ (t | ~r)) + i + o | 0, s) + t | 0
    }
    r(a, i), a.prototype._update = function() {
        for (var e = 0; e < 16; ++e) s[e] = this._block.readInt32LE(4 * e);
        var t = this._a,
            n = this._b,
            r = this._c,
            i = this._d;
        t = u(t, n, r, i, s[0], 3614090360, 7), i = u(i, t, n, r, s[1], 3905402710, 12), r = u(r, i, t, n, s[2], 606105819, 17), n = u(n, r, i, t, s[3], 3250441966, 22), t = u(t, n, r, i, s[4], 4118548399, 7), i = u(i, t, n, r, s[5], 1200080426, 12), r = u(r, i, t, n, s[6], 2821735955, 17), n = u(n, r, i, t, s[7], 4249261313, 22), t = u(t, n, r, i, s[8], 1770035416, 7), i = u(i, t, n, r, s[9], 2336552879, 12), r = u(r, i, t, n, s[10], 4294925233, 17), n = u(n, r, i, t, s[11], 2304563134, 22), t = u(t, n, r, i, s[12], 1804603682, 7), i = u(i, t, n, r, s[13], 4254626195, 12), r = u(r, i, t, n, s[14], 2792965006, 17), n = u(n, r, i, t, s[15], 1236535329, 22), t = d(t, n, r, i, s[1], 4129170786, 5), i = d(i, t, n, r, s[6], 3225465664, 9), r = d(r, i, t, n, s[11], 643717713, 14), n = d(n, r, i, t, s[0], 3921069994, 20), t = d(t, n, r, i, s[5], 3593408605, 5), i = d(i, t, n, r, s[10], 38016083, 9), r = d(r, i, t, n, s[15], 3634488961, 14), n = d(n, r, i, t, s[4], 3889429448, 20), t = d(t, n, r, i, s[9], 568446438, 5), i = d(i, t, n, r, s[14], 3275163606, 9), r = d(r, i, t, n, s[3], 4107603335, 14), n = d(n, r, i, t, s[8], 1163531501, 20), t = d(t, n, r, i, s[13], 2850285829, 5), i = d(i, t, n, r, s[2], 4243563512, 9), r = d(r, i, t, n, s[7], 1735328473, 14), n = d(n, r, i, t, s[12], 2368359562, 20), t = l(t, n, r, i, s[5], 4294588738, 4), i = l(i, t, n, r, s[8], 2272392833, 11), r = l(r, i, t, n, s[11], 1839030562, 16), n = l(n, r, i, t, s[14], 4259657740, 23), t = l(t, n, r, i, s[1], 2763975236, 4), i = l(i, t, n, r, s[4], 1272893353, 11), r = l(r, i, t, n, s[7], 4139469664, 16), n = l(n, r, i, t, s[10], 3200236656, 23), t = l(t, n, r, i, s[13], 681279174, 4), i = l(i, t, n, r, s[0], 3936430074, 11), r = l(r, i, t, n, s[3], 3572445317, 16), n = l(n, r, i, t, s[6], 76029189, 23), t = l(t, n, r, i, s[9], 3654602809, 4), i = l(i, t, n, r, s[12], 3873151461, 11), r = l(r, i, t, n, s[15], 530742520, 16), n = l(n, r, i, t, s[2], 3299628645, 23), t = f(t, n, r, i, s[0], 4096336452, 6), i = f(i, t, n, r, s[7], 1126891415, 10), r = f(r, i, t, n, s[14], 2878612391, 15), n = f(n, r, i, t, s[5], 4237533241, 21), t = f(t, n, r, i, s[12], 1700485571, 6), i = f(i, t, n, r, s[3], 2399980690, 10), r = f(r, i, t, n, s[10], 4293915773, 15), n = f(n, r, i, t, s[1], 2240044497, 21), t = f(t, n, r, i, s[8], 1873313359, 6), i = f(i, t, n, r, s[15], 4264355552, 10), r = f(r, i, t, n, s[6], 2734768916, 15), n = f(n, r, i, t, s[13], 1309151649, 21), t = f(t, n, r, i, s[4], 4149444226, 6), i = f(i, t, n, r, s[11], 3174756917, 10), r = f(r, i, t, n, s[2], 718787259, 15), n = f(n, r, i, t, s[9], 3951481745, 21), this._a = this._a + t | 0, this._b = this._b + n | 0, this._c = this._c + r | 0, this._d = this._d + i | 0
    }, a.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = o.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
    }, e.exports = a
}