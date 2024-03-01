function(e, t, n) {
    t.read = function(e, t, n, r, a) {
        var o, i, s = 8 * a - r - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = -7,
            d = n ? a - 1 : 0,
            f = n ? -1 : 1,
            p = e[t + d];
        for (d += f, o = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; o = 256 * o + e[t + d], d += f, c -= 8);
        for (i = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; i = 256 * i + e[t + d], d += f, c -= 8);
        if (0 === o) o = 1 - l;
        else {
            if (o === u) return i ? NaN : (p ? -1 : 1) * (1 / 0);
            i += Math.pow(2, r), o -= l
        }
        return (p ? -1 : 1) * i * Math.pow(2, o - r)
    }, t.write = function(e, t, n, r, a, o) {
        var i, s, u, l = 8 * o - a - 1,
            c = (1 << l) - 1,
            d = c >> 1,
            f = 23 === a ? 5960464477539062e-23 : 0,
            p = r ? 0 : o - 1,
            h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, i = c) : (i = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -i)) < 1 && (i--, u *= 2), i + d >= 1 ? t += f / u : t += f * Math.pow(2, 1 - d), t * u >= 2 && (i++, u /= 2), i + d >= c ? (s = 0, i = c) : i + d >= 1 ? (s = (t * u - 1) * Math.pow(2, a), i += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, a), i = 0)); a >= 8; e[n + p] = 255 & s, p += h, s /= 256, a -= 8);
        for (i = i << a | s, l += a; l > 0; e[n + p] = 255 & i, p += h, i /= 256, l -= 8);
        e[n + p - h] |= 128 * m
    }
}