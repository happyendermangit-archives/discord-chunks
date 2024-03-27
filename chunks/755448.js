function(e) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, i, a, o, s, u, c, l, d, f, p, h, m, g, _, b, v, y, E, S, x, w, T, C;
        n = e.state, r = e.next_in, T = e.input, i = r + (e.avail_in - 5), a = e.next_out, C = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), u = n.dmax, c = n.wsize, l = n.whave, d = n.wnext, f = n.window, p = n.hold, h = n.bits, m = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, b = (1 << n.distbits) - 1;
        t: do
                for (h < 15 && (p += T[r++] << h, h += 8, p += T[r++] << h, h += 8), v = m[p & _];;) {
                    if (p >>>= y = v >>> 24, h -= y, 0 == (y = v >>> 16 & 255)) C[a++] = 65535 & v;
                    else if (16 & y)
                        for (E = 65535 & v, (y &= 15) && (h < y && (p += T[r++] << h, h += 8), E += p & (1 << y) - 1, p >>>= y, h -= y), h < 15 && (p += T[r++] << h, h += 8, p += T[r++] << h, h += 8), v = g[p & b];;) {
                            if (p >>>= y = v >>> 24, h -= y, 16 & (y = v >>> 16 & 255)) {
                                if (S = 65535 & v, h < (y &= 15) && (p += T[r++] << h, (h += 8) < y && (p += T[r++] << h, h += 8)), (S += p & (1 << y) - 1) > u) {
                                    e.msg = "invalid distance too far back", n.mode = 30;
                                    break t
                                }
                                if (p >>>= y, h -= y, S > (y = a - o)) {
                                    if ((y = S - y) > l && n.sane) {
                                        e.msg = "invalid distance too far back", n.mode = 30;
                                        break t
                                    }
                                    if (x = 0, w = f, 0 === d) {
                                        if (x += c - y, y < E) {
                                            E -= y;
                                            do C[a++] = f[x++]; while (--y);
                                            x = a - S, w = C
                                        }
                                    } else if (d < y) {
                                        if (x += c + d - y, (y -= d) < E) {
                                            E -= y;
                                            do C[a++] = f[x++]; while (--y);
                                            if (x = 0, d < E) {
                                                E -= y = d;
                                                do C[a++] = f[x++]; while (--y);
                                                x = a - S, w = C
                                            }
                                        }
                                    } else if (x += d - y, y < E) {
                                        E -= y;
                                        do C[a++] = f[x++]; while (--y);
                                        x = a - S, w = C
                                    }
                                    for (; E > 2;) C[a++] = w[x++], C[a++] = w[x++], C[a++] = w[x++], E -= 3;
                                    E && (C[a++] = w[x++], E > 1 && (C[a++] = w[x++]))
                                } else {
                                    x = a - S;
                                    do C[a++] = C[x++], C[a++] = C[x++], C[a++] = C[x++], E -= 3; while (E > 2);
                                    E && (C[a++] = C[x++], E > 1 && (C[a++] = C[x++]))
                                }
                            } else if ((64 & y) == 0) {
                                v = g[(65535 & v) + (p & (1 << y) - 1)];
                                continue
                            } else {
                                e.msg = "invalid distance code", n.mode = 30;
                                break t
                            }
                            break
                        } else if ((64 & y) == 0) {
                            v = m[(65535 & v) + (p & (1 << y) - 1)];
                            continue
                        } else if (32 & y) {
                        n.mode = 12;
                        break t
                    } else {
                        e.msg = "invalid literal/length code", n.mode = 30;
                        break t
                    }
                    break
                }
            while (r < i && a < s);
            r -= E = h >> 3, h -= E << 3, p &= (1 << h) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), n.hold = p, n.bits = h
    }
}