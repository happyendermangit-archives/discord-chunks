function(e, t, n) {
    "use strict";
    var r = n("689118"),
        i = n("258922"),
        a = n("957578").Buffer,
        o = Array(16);

    function s() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }

    function u(e, t) {
        return e << t | e >>> 32 - t
    }

    function c(e, t, n, r, i, a, o) {
        return u(e + (t & n | ~t & r) + i + a | 0, o) + t | 0
    }

    function l(e, t, n, r, i, a, o) {
        return u(e + (t & r | n & ~r) + i + a | 0, o) + t | 0
    }

    function d(e, t, n, r, i, a, o) {
        return u(e + (t ^ n ^ r) + i + a | 0, o) + t | 0
    }

    function f(e, t, n, r, i, a, o) {
        return u(e + (n ^ (t | ~r)) + i + a | 0, o) + t | 0
    }
    r(s, i), s.prototype._update = function() {
        for (var e = 0; e < 16; ++e) o[e] = this._block.readInt32LE(4 * e);
        var t = this._a,
            n = this._b,
            r = this._c,
            i = this._d;
        t = c(t, n, r, i, o[0], 3614090360, 7), i = c(i, t, n, r, o[1], 3905402710, 12), r = c(r, i, t, n, o[2], 606105819, 17), n = c(n, r, i, t, o[3], 3250441966, 22), t = c(t, n, r, i, o[4], 4118548399, 7), i = c(i, t, n, r, o[5], 1200080426, 12), r = c(r, i, t, n, o[6], 2821735955, 17), n = c(n, r, i, t, o[7], 4249261313, 22), t = c(t, n, r, i, o[8], 1770035416, 7), i = c(i, t, n, r, o[9], 2336552879, 12), r = c(r, i, t, n, o[10], 4294925233, 17), n = c(n, r, i, t, o[11], 2304563134, 22), t = c(t, n, r, i, o[12], 1804603682, 7), i = c(i, t, n, r, o[13], 4254626195, 12), r = c(r, i, t, n, o[14], 2792965006, 17), n = c(n, r, i, t, o[15], 1236535329, 22), t = l(t, n, r, i, o[1], 4129170786, 5), i = l(i, t, n, r, o[6], 3225465664, 9), r = l(r, i, t, n, o[11], 643717713, 14), n = l(n, r, i, t, o[0], 3921069994, 20), t = l(t, n, r, i, o[5], 3593408605, 5), i = l(i, t, n, r, o[10], 38016083, 9), r = l(r, i, t, n, o[15], 3634488961, 14), n = l(n, r, i, t, o[4], 3889429448, 20), t = l(t, n, r, i, o[9], 568446438, 5), i = l(i, t, n, r, o[14], 3275163606, 9), r = l(r, i, t, n, o[3], 4107603335, 14), n = l(n, r, i, t, o[8], 1163531501, 20), t = l(t, n, r, i, o[13], 2850285829, 5), i = l(i, t, n, r, o[2], 4243563512, 9), r = l(r, i, t, n, o[7], 1735328473, 14), n = l(n, r, i, t, o[12], 2368359562, 20), t = d(t, n, r, i, o[5], 4294588738, 4), i = d(i, t, n, r, o[8], 2272392833, 11), r = d(r, i, t, n, o[11], 1839030562, 16), n = d(n, r, i, t, o[14], 4259657740, 23), t = d(t, n, r, i, o[1], 2763975236, 4), i = d(i, t, n, r, o[4], 1272893353, 11), r = d(r, i, t, n, o[7], 4139469664, 16), n = d(n, r, i, t, o[10], 3200236656, 23), t = d(t, n, r, i, o[13], 681279174, 4), i = d(i, t, n, r, o[0], 3936430074, 11), r = d(r, i, t, n, o[3], 3572445317, 16), n = d(n, r, i, t, o[6], 76029189, 23), t = d(t, n, r, i, o[9], 3654602809, 4), i = d(i, t, n, r, o[12], 3873151461, 11), r = d(r, i, t, n, o[15], 530742520, 16), n = d(n, r, i, t, o[2], 3299628645, 23), t = f(t, n, r, i, o[0], 4096336452, 6), i = f(i, t, n, r, o[7], 1126891415, 10), r = f(r, i, t, n, o[14], 2878612391, 15), n = f(n, r, i, t, o[5], 4237533241, 21), t = f(t, n, r, i, o[12], 1700485571, 6), i = f(i, t, n, r, o[3], 2399980690, 10), r = f(r, i, t, n, o[10], 4293915773, 15), n = f(n, r, i, t, o[1], 2240044497, 21), t = f(t, n, r, i, o[8], 1873313359, 6), i = f(i, t, n, r, o[15], 4264355552, 10), r = f(r, i, t, n, o[6], 2734768916, 15), n = f(n, r, i, t, o[13], 1309151649, 21), t = f(t, n, r, i, o[4], 4149444226, 6), i = f(i, t, n, r, o[11], 3174756917, 10), r = f(r, i, t, n, o[2], 718787259, 15), n = f(n, r, i, t, o[9], 3951481745, 21), this._a = this._a + t | 0, this._b = this._b + n | 0, this._c = this._c + r | 0, this._d = this._d + i | 0
    }, s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = a.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
    }, e.exports = s
}