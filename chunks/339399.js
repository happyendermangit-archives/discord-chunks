function(t, r, n) {
    "use strict";
    var e = n("796774"),
        o = n("680625"),
        i = Array,
        u = Math.abs,
        f = Math.pow,
        c = Math.floor,
        a = Math.log,
        s = Math.LN2,
        y = function(t) {
            var r = o(t),
                n = u(t - r);
            return n > .5 || .5 === n && r % 2 != 0 ? r + e(t) : r
        };
    t.exports = {
        pack: function(t, r, n) {
            var e, o, h, p = i(n),
                v = 8 * n - r - 1,
                d = (1 << v) - 1,
                l = d >> 1,
                g = 23 === r ? f(2, -24) - f(2, -77) : 0,
                A = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                w = 0;
            for ((t = u(t)) != t || t === 1 / 0 ? (o = t != t ? 1 : 0, e = d) : (h = f(2, -(e = c(a(t) / s))), t * h < 1 && (e--, h *= 2), e + l >= 1 ? t += g / h : t += g * f(2, 1 - l), t * h >= 2 && (e++, h /= 2), e + l >= d ? (o = 0, e = d) : e + l >= 1 ? (o = y((t * h - 1) * f(2, r)), e += l) : (o = y(t * f(2, l - 1) * f(2, r)), e = 0)); r >= 8;) p[w++] = 255 & o, o /= 256, r -= 8;
            for (e = e << r | o, v += r; v > 0;) p[w++] = 255 & e, e /= 256, v -= 8;
            return p[--w] |= 128 * A, p
        },
        unpack: function(t, r) {
            var n, e = t.length,
                o = 8 * e - r - 1,
                i = (1 << o) - 1,
                u = i >> 1,
                c = o - 7,
                a = e - 1,
                s = t[a--],
                y = 127 & s;
            for (s >>= 7; c > 0;) y = 256 * y + t[a--], c -= 8;
            for (n = y & (1 << -c) - 1, y >>= -c, c += r; c > 0;) n = 256 * n + t[a--], c -= 8;
            if (0 === y) y = 1 - u;
            else {
                if (y === i) return n ? NaN : s ? -1 / 0 : 1 / 0;
                n += f(2, r), y -= u
            }
            return (s ? -1 : 1) * n * f(2, y - r)
        }
    }
}