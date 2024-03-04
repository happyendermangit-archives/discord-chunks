function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, i, o, s, a, c, u, d, l, f, p, h, v, g, b, m, y, x, w, S, k, E, _, M;
        n = e.state, r = e.next_in, _ = e.input, i = r + (e.avail_in - 5), o = e.next_out, M = e.output, s = o - (t - e.avail_out), a = o + (e.avail_out - 257), c = n.dmax, u = n.wsize, d = n.whave, l = n.wnext, f = n.window, p = n.hold, h = n.bits, v = n.lencode, g = n.distcode, b = (1 << n.lenbits) - 1, m = (1 << n.distbits) - 1;
        t: do
                for (h < 15 && (p += _[r++] << h, h += 8, p += _[r++] << h, h += 8), y = v[p & b];;) {
                    if (p >>>= x = y >>> 24, h -= x, 0 == (x = y >>> 16 & 255)) M[o++] = 65535 & y;
                    else if (16 & x)
                        for (w = 65535 & y, (x &= 15) && (h < x && (p += _[r++] << h, h += 8), w += p & (1 << x) - 1, p >>>= x, h -= x), h < 15 && (p += _[r++] << h, h += 8, p += _[r++] << h, h += 8), y = g[p & m];;) {
                            if (p >>>= x = y >>> 24, h -= x, 16 & (x = y >>> 16 & 255)) {
                                if (S = 65535 & y, h < (x &= 15) && (p += _[r++] << h, (h += 8) < x && (p += _[r++] << h, h += 8)), (S += p & (1 << x) - 1) > c) {
                                    e.msg = "invalid distance too far back", n.mode = 30;
                                    break t
                                }
                                if (p >>>= x, h -= x, S > (x = o - s)) {
                                    if ((x = S - x) > d && n.sane) {
                                        e.msg = "invalid distance too far back", n.mode = 30;
                                        break t
                                    }
                                    if (k = 0, E = f, 0 === l) {
                                        if (k += u - x, x < w) {
                                            w -= x;
                                            do M[o++] = f[k++]; while (--x);
                                            k = o - S, E = M
                                        }
                                    } else if (l < x) {
                                        if (k += u + l - x, (x -= l) < w) {
                                            w -= x;
                                            do M[o++] = f[k++]; while (--x);
                                            if (k = 0, l < w) {
                                                w -= x = l;
                                                do M[o++] = f[k++]; while (--x);
                                                k = o - S, E = M
                                            }
                                        }
                                    } else if (k += l - x, x < w) {
                                        w -= x;
                                        do M[o++] = f[k++]; while (--x);
                                        k = o - S, E = M
                                    }
                                    for (; w > 2;) M[o++] = E[k++], M[o++] = E[k++], M[o++] = E[k++], w -= 3;
                                    w && (M[o++] = E[k++], w > 1 && (M[o++] = E[k++]))
                                } else {
                                    k = o - S;
                                    do M[o++] = M[k++], M[o++] = M[k++], M[o++] = M[k++], w -= 3; while (w > 2);
                                    w && (M[o++] = M[k++], w > 1 && (M[o++] = M[k++]))
                                }
                            } else if ((64 & x) == 0) {
                                y = g[(65535 & y) + (p & (1 << x) - 1)];
                                continue
                            } else {
                                e.msg = "invalid distance code", n.mode = 30;
                                break t
                            }
                            break
                        } else if ((64 & x) == 0) {
                            y = v[(65535 & y) + (p & (1 << x) - 1)];
                            continue
                        } else if (32 & x) {
                        n.mode = 12;
                        break t
                    } else {
                        e.msg = "invalid literal/length code", n.mode = 30;
                        break t
                    }
                    break
                }
            while (r < i && o < a);
            r -= w = h >> 3, h -= w << 3, p &= (1 << h) - 1, e.next_in = r, e.next_out = o, e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), e.avail_out = o < a ? 257 + (a - o) : 257 - (o - a), n.hold = p, n.bits = h
    }
}