function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        rgbaToDataURL: function() {
            return i
        },
        thumbHashToApproximateAspectRatio: function() {
            return r
        },
        thumbHashToDataURL: function() {
            return a
        }
    });

    function r(e) {
        let t = e[3],
            n = 128 & e[2],
            r = 128 & e[4];
        return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
    }

    function i(e, t, n) {
        let r = 4 * e + 1,
            i = 6 + t * (5 + r),
            a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
            o = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
            s = 1,
            u = 0;
        for (let e = 0, i = 0, o = r - 1; e < t; e++, o += r - 1)
            for (a.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), u = (u + s) % 65521; i < o; i++) {
                let e = 255 & n[i];
                a.push(e), u = (u + (s = (s + e) % 65521)) % 65521
            }
        for (let [e, t] of(a.push(u >> 8, 255 & u, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                [12, 29],
                [37, 41 + i]
            ])) {
            let n = -1;
            for (let r = e; r < t; r++) n ^= a[r], n = (n = n >>> 4 ^ o[15 & n]) >>> 4 ^ o[15 & n];
            n = ~n, a[t++] = n >>> 24, a[t++] = n >> 16 & 255, a[t++] = n >> 8 & 255, a[t++] = 255 & n
        }
        return "data:image/png;base64," + btoa(String.fromCharCode(...a))
    }

    function a(e) {
        let t = function(e) {
            let {
                PI: t,
                min: n,
                max: i,
                cos: a,
                round: o
            } = Math, s = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, c = (63 & s) / 63, l = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, f = s >> 23, p = u >> 15, h = i(3, p ? f ? 5 : 7 : 7 & u), m = i(3, p ? 7 & u : f ? 5 : 7), g = f ? (15 & e[5]) / 15 : 1, _ = (e[5] >> 4) / 15, b = f ? 6 : 5, v = 0, y = (t, n, r) => {
                let i = [];
                for (let a = 0; a < n; a++)
                    for (let o = a ? 0 : 1; o * n < t * (n - a); o++) i.push(((e[b + (v >> 1)] >> ((1 & v++) << 2) & 15) / 7.5 - 1) * r);
                return i
            }, E = y(h, m, (s >> 18 & 31) / 31), S = y(3, 3, (u >> 3 & 63) / 63 * 1.25), x = y(3, 3, (u >> 9 & 63) / 63 * 1.25), w = f && y(5, 5, _), T = r(e), C = o(T > 1 ? 32 : 32 * T), D = o(T > 1 ? 32 / T : 32), O = new Uint8Array(C * D * 4), M = [], A = [];
            for (let e = 0, r = 0; e < D; e++)
                for (let o = 0; o < C; o++, r += 4) {
                    let s = c,
                        u = l,
                        p = d,
                        _ = g;
                    for (let e = 0, n = i(h, f ? 5 : 3); e < n; e++) M[e] = a(t / C * (o + .5) * e);
                    for (let n = 0, r = i(m, f ? 5 : 3); n < r; n++) A[n] = a(t / D * (e + .5) * n);
                    for (let e = 0, t = 0; e < m; e++)
                        for (let n = e ? 0 : 1, r = 2 * A[e]; n * m < h * (m - e); n++, t++) s += E[t] * M[n] * r;
                    for (let e = 0, t = 0; e < 3; e++)
                        for (let n = e ? 0 : 1, r = 2 * A[e]; n < 3 - e; n++, t++) {
                            let e = M[n] * r;
                            u += S[t] * e, p += x[t] * e
                        }
                    if (f)
                        for (let e = 0, t = 0; e < 5; e++)
                            for (let n = e ? 0 : 1, r = 2 * A[e]; n < 5 - e; n++, t++) _ += w[t] * M[n] * r;
                    let b = s - 2 / 3 * u,
                        v = (3 * s - b + p) / 2,
                        y = v - p;
                    O[r] = i(0, 255 * n(1, v)), O[r + 1] = i(0, 255 * n(1, y)), O[r + 2] = i(0, 255 * n(1, b)), O[r + 3] = i(0, 255 * n(1, _))
                }
            return {
                w: C,
                h: D,
                rgba: O
            }
        }(e);
        return i(t.w, t.h, t.rgba)
    }
}