function(t, e, s) {
    "use strict";
    t.exports = function(t, e) {
        var s, r, i, n, c, o, f, u, a, d, p, b, h, l, g, v, x, m, y, _, w, M, S, k, A;
        s = t.state, r = t.next_in, k = t.input, i = r + (t.avail_in - 5), n = t.next_out, A = t.output, c = n - (e - t.avail_out), o = n + (t.avail_out - 257), f = s.dmax, u = s.wsize, a = s.whave, d = s.wnext, p = s.window, b = s.hold, h = s.bits, l = s.lencode, g = s.distcode, v = (1 << s.lenbits) - 1, x = (1 << s.distbits) - 1;
        e: do
                for (h < 15 && (b += k[r++] << h, h += 8, b += k[r++] << h, h += 8), m = l[b & v];;) {
                    if (b >>>= y = m >>> 24, h -= y, 0 == (y = m >>> 16 & 255)) A[n++] = 65535 & m;
                    else if (16 & y)
                        for (_ = 65535 & m, (y &= 15) && (h < y && (b += k[r++] << h, h += 8), _ += b & (1 << y) - 1, b >>>= y, h -= y), h < 15 && (b += k[r++] << h, h += 8, b += k[r++] << h, h += 8), m = g[b & x];;) {
                            if (b >>>= y = m >>> 24, h -= y, 16 & (y = m >>> 16 & 255)) {
                                if (w = 65535 & m, h < (y &= 15) && (b += k[r++] << h, (h += 8) < y && (b += k[r++] << h, h += 8)), (w += b & (1 << y) - 1) > f) {
                                    t.msg = "invalid distance too far back", s.mode = 30;
                                    break e
                                }
                                if (b >>>= y, h -= y, w > (y = n - c)) {
                                    if ((y = w - y) > a && s.sane) {
                                        t.msg = "invalid distance too far back", s.mode = 30;
                                        break e
                                    }
                                    if (M = 0, S = p, 0 === d) {
                                        if (M += u - y, y < _) {
                                            _ -= y;
                                            do A[n++] = p[M++]; while (--y);
                                            M = n - w, S = A
                                        }
                                    } else if (d < y) {
                                        if (M += u + d - y, (y -= d) < _) {
                                            _ -= y;
                                            do A[n++] = p[M++]; while (--y);
                                            if (M = 0, d < _) {
                                                _ -= y = d;
                                                do A[n++] = p[M++]; while (--y);
                                                M = n - w, S = A
                                            }
                                        }
                                    } else if (M += d - y, y < _) {
                                        _ -= y;
                                        do A[n++] = p[M++]; while (--y);
                                        M = n - w, S = A
                                    }
                                    for (; _ > 2;) A[n++] = S[M++], A[n++] = S[M++], A[n++] = S[M++], _ -= 3;
                                    _ && (A[n++] = S[M++], _ > 1 && (A[n++] = S[M++]))
                                } else {
                                    M = n - w;
                                    do A[n++] = A[M++], A[n++] = A[M++], A[n++] = A[M++], _ -= 3; while (_ > 2);
                                    _ && (A[n++] = A[M++], _ > 1 && (A[n++] = A[M++]))
                                }
                            } else if ((64 & y) == 0) {
                                m = g[(65535 & m) + (b & (1 << y) - 1)];
                                continue
                            } else {
                                t.msg = "invalid distance code", s.mode = 30;
                                break e
                            }
                            break
                        } else if ((64 & y) == 0) {
                            m = l[(65535 & m) + (b & (1 << y) - 1)];
                            continue
                        } else if (32 & y) {
                        s.mode = 12;
                        break e
                    } else {
                        t.msg = "invalid literal/length code", s.mode = 30;
                        break e
                    }
                    break
                }
            while (r < i && n < o);
            r -= _ = h >> 3, h -= _ << 3, b &= (1 << h) - 1, t.next_in = r, t.next_out = n, t.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), t.avail_out = n < o ? 257 + (o - n) : 257 - (n - o), s.hold = b, s.bits = h
    }
}