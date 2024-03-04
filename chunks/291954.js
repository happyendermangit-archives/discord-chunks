function(e, t, n) {
    "use strict";
    var r = n("446825").Buffer,
        i = n("599235"),
        o = n("82221"),
        s = Array(16),
        a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        c = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        d = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        l = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        f = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function p() {
        o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }

    function h(e, t) {
        return e << t | e >>> 32 - t
    }

    function v(e, t, n, r, i, o, s, a) {
        return h(e + (t ^ n ^ r) + o + s | 0, a) + i | 0
    }

    function g(e, t, n, r, i, o, s, a) {
        return h(e + (t & n | ~t & r) + o + s | 0, a) + i | 0
    }

    function b(e, t, n, r, i, o, s, a) {
        return h(e + ((t | ~n) ^ r) + o + s | 0, a) + i | 0
    }

    function m(e, t, n, r, i, o, s, a) {
        return h(e + (t & r | n & ~r) + o + s | 0, a) + i | 0
    }

    function y(e, t, n, r, i, o, s, a) {
        return h(e + (t ^ (n | ~r)) + o + s | 0, a) + i | 0
    }
    i(p, o), p.prototype._update = function() {
        for (var e, t, n = 0; n < 16; ++n) s[n] = this._block.readInt32LE(4 * n);
        for (var r = 0 | this._a, i = 0 | this._b, o = 0 | this._c, l = 0 | this._d, f = 0 | this._e, p = 0 | this._a, v = 0 | this._b, g = 0 | this._c, b = 0 | this._d, m = 0 | this._e, y = 0; y < 80; y += 1) y < 16 ? (e = function(e, t, n, r, i, o, s, a) {
            return h(e + (t ^ n ^ r) + o + s | 0, a) + i | 0
        }(r, i, o, l, f, s[a[y]], 0, u[y]), t = function(e, t, n, r, i, o, s, a) {
            return h(e + (t ^ (n | ~r)) + o + s | 0, a) + i | 0
        }(p, v, g, b, m, s[c[y]], 1352829926, d[y])) : y < 32 ? (e = function(e, t, n, r, i, o, s, a) {
            return h(e + (t & n | ~t & r) + o + s | 0, a) + i | 0
        }(r, i, o, l, f, s[a[y]], 1518500249, u[y]), t = function(e, t, n, r, i, o, s, a) {
            return h(e + (t & r | n & ~r) + o + s | 0, a) + i | 0
        }(p, v, g, b, m, s[c[y]], 1548603684, d[y])) : y < 48 ? (e = function(e, t, n, r, i, o, s, a) {
            return h(e + ((t | ~n) ^ r) + o + s | 0, a) + i | 0
        }(r, i, o, l, f, s[a[y]], 1859775393, u[y]), t = function(e, t, n, r, i, o, s, a) {
            return h(e + ((t | ~n) ^ r) + o + s | 0, a) + i | 0
        }(p, v, g, b, m, s[c[y]], 1836072691, d[y])) : y < 64 ? (e = function(e, t, n, r, i, o, s, a) {
            return h(e + (t & r | n & ~r) + o + s | 0, a) + i | 0
        }(r, i, o, l, f, s[a[y]], 2400959708, u[y]), t = function(e, t, n, r, i, o, s, a) {
            return h(e + (t & n | ~t & r) + o + s | 0, a) + i | 0
        }(p, v, g, b, m, s[c[y]], 2053994217, d[y])) : (e = function(e, t, n, r, i, o, s, a) {
            return h(e + (t ^ (n | ~r)) + o + s | 0, a) + i | 0
        }(r, i, o, l, f, s[a[y]], 2840853838, u[y]), t = function(e, t, n, r, i, o, s, a) {
            return h(e + (t ^ n ^ r) + o + s | 0, a) + i | 0
        }(p, v, g, b, m, s[c[y]], 0, d[y])), r = f, f = l, l = h(o, 10), o = i, i = e, p = m, m = b, b = h(g, 10), g = v, v = t;
        var x = this._b + o + b | 0;
        this._b = this._c + l + m | 0, this._c = this._d + f + p | 0, this._d = this._e + r + v | 0, this._e = this._a + i + g | 0, this._a = x
    }, p.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = r.alloc ? r.alloc(20) : new r(20);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
    }, e.exports = p
}