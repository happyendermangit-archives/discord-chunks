function(e, t) {
    t.read = function(e, t, n, r, i) {
        var a, o, s = 8 * i - r - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = -7,
            d = n ? i - 1 : 0,
            f = n ? -1 : 1,
            p = e[t + d];
        for (d += f, a = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; a = 256 * a + e[t + d], d += f, l -= 8);
        for (o = a & (1 << -l) - 1, a >>= -l, l += r; l > 0; o = 256 * o + e[t + d], d += f, l -= 8);
        if (0 === a) a = 1 - c;
        else {
            if (a === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
            o += Math.pow(2, r), a -= c
        }
        return (p ? -1 : 1) * o * Math.pow(2, a - r)
    }, t.write = function(e, t, n, r, i, a) {
        var o, s, u, c = 8 * a - i - 1,
            l = (1 << c) - 1,
            d = l >> 1,
            f = 23 === i ? 5960464477539062e-23 : 0,
            p = r ? 0 : a - 1,
            h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + d >= 1 ? t += f / u : t += f * Math.pow(2, 1 - d), t * u >= 2 && (o++, u /= 2), o + d >= l ? (s = 0, o = l) : o + d >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + p] = 255 & s, p += h, s /= 256, i -= 8);
        for (o = o << i | s, c += i; c > 0; e[n + p] = 255 & o, p += h, o /= 256, c -= 8);
        e[n + p - h] |= 128 * m
    }
}